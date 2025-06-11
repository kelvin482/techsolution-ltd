const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// Function to recursively find all files in a directory
async function findFiles(dir, fileList = []) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stats = await stat(filePath);
    
    if (stats.isDirectory()) {
      await findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

// Function to fix imports in a file
async function fixImports(filePath) {
  try {
    const content = await readFile(filePath, 'utf8');
    
    // Skip files that don't import from @/lib/utils
    if (!content.includes('@/lib/utils')) {
      return false;
    }
    
    // Calculate the relative path to lib/utils
    const relativePath = path.relative(path.dirname(filePath), path.join(path.dirname(filePath), '..', '..', 'lib')).replace(/\\/g, '/');
    const newImport = `${relativePath}/utils`;
    
    // Replace the import statement
    const updatedContent = content.replace(/from\s+["']@\/lib\/utils["']/g, `from "${newImport}"`);
    
    // Write the updated content back to the file
    await writeFile(filePath, updatedContent, 'utf8');
    console.log(`Fixed imports in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing imports in ${filePath}:`, error);
    return false;
  }
}

// Main function
async function main() {
  try {
    const uiDir = path.join(__dirname, 'src', 'components', 'ui');
    const sectionsDir = path.join(__dirname, 'src', 'components', 'sections');
    
    const files = await findFiles(uiDir);
    files.push(...await findFiles(sectionsDir));
    
    let fixedCount = 0;
    for (const file of files) {
      const fixed = await fixImports(file);
      if (fixed) fixedCount++;
    }
    
    console.log(`Fixed imports in ${fixedCount} files`);
  } catch (error) {
    console.error('Error:', error);
  }
}

main(); 