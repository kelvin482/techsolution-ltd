"""
Verification script for the Image Container
"""

import os
import shutil
from PIL import Image

def verify_container():
    """Verify the image container setup"""
    print("Verifying Image Container setup...")
    
    # Check if background.jpg exists
    if os.path.exists("background.jpg"):
        print("✓ Background image exists")
        
        # Open and show info about the background image
        try:
            bg_img = Image.open("background.jpg")
            print(f"  - Background image size: {bg_img.size}")
            print(f"  - Background image mode: {bg_img.mode}")
        except Exception as e:
            print(f"  - Error opening background image: {e}")
    else:
        print("✗ Background image does not exist")
    
    # Check if images directory exists
    if os.path.exists("images"):
        print("✓ Images directory exists")
        
        # Check if any images are stored
        images = [f for f in os.listdir("images") if f.endswith(('.jpg', '.jpeg', '.png', '.gif', '.bmp'))]
        if images:
            print(f"  - {len(images)} images found in the directory")
        else:
            print("  - No images found in the directory")
        
        # Check if CSV file exists
        if os.path.exists(os.path.join("images", "image_data.csv")):
            print("✓ Image metadata file exists")
        else:
            print("✗ Image metadata file does not exist")
    else:
        print("✗ Images directory does not exist")
    
    # Create a test image to verify saving functionality
    try:
        # Create a simple test image
        test_img = Image.new('RGB', (200, 200), color=(255, 0, 0))
        test_img_path = "test_image.jpg"
        test_img.save(test_img_path)
        print(f"✓ Created test image: {test_img_path}")
        
        # Save a copy of the background image for reference
        if os.path.exists("background.jpg"):
            shutil.copy2("background.jpg", "background_copy.jpg")
            print("✓ Saved a copy of the background image as background_copy.jpg")
    except Exception as e:
        print(f"✗ Error creating test images: {e}")
    
    print("\nVerification complete. You can now run the container application with:")
    print("  python simple_image_container.py")

if __name__ == "__main__":
    verify_container() 