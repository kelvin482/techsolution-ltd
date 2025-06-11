import os
import tkinter as tk
from tkinter import filedialog, messagebox, Label, Button, Frame, Listbox, Scrollbar, StringVar
import shutil
from datetime import datetime
from PIL import Image, ImageTk
import csv

class SimpleImageContainer:
    def __init__(self, root):
        self.root = root
        self.root.title("Image Container")
        self.root.geometry("800x600")
        
        # Set up paths
        self.image_folder = "images"
        self.csv_file = os.path.join(self.image_folder, "image_data.csv")
        
        # Ensure image folder exists
        if not os.path.exists(self.image_folder):
            os.makedirs(self.image_folder)
            
        # Create CSV file if it doesn't exist
        if not os.path.exists(self.csv_file):
            with open(self.csv_file, 'w', newline='') as f:
                writer = csv.writer(f)
                writer.writerow(["filename", "original_name", "date_added", "description"])
        
        # Create UI
        self.create_ui()
        
        # Load image data
        self.load_image_data()
        
    def create_ui(self):
        """Create the user interface"""
        # Main frame
        main_frame = Frame(self.root)
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Try to load and set background image
        try:
            bg_img = Image.open("background.jpg")
            bg_img = bg_img.resize((800, 600), Image.Resampling.LANCZOS)
            self.bg_photo = ImageTk.PhotoImage(bg_img)
            
            # Create a label with the background image
            bg_label = Label(main_frame, image=self.bg_photo)
            bg_label.place(x=0, y=0, relwidth=1, relheight=1)
        except Exception as e:
            print(f"Could not load background image: {e}")
        
        # Controls frame with semi-transparent background
        controls_frame = Frame(main_frame, bg="#f0f0f0", bd=2)
        controls_frame.place(relx=0.5, rely=0.1, relwidth=0.8, relheight=0.8, anchor="n")
        
        # Title
        title_label = Label(controls_frame, text="Image Container", font=("Arial", 18, "bold"), bg="#f0f0f0")
        title_label.pack(pady=10)
        
        # Buttons
        button_frame = Frame(controls_frame, bg="#f0f0f0")
        button_frame.pack(pady=20)
        
        import_btn = Button(button_frame, text="Import Image", command=self.import_image, width=15)
        import_btn.grid(row=0, column=0, padx=10)
        
        view_btn = Button(button_frame, text="View Image", command=self.view_image, width=15)
        view_btn.grid(row=0, column=1, padx=10)
        
        # Image list frame
        list_frame = Frame(controls_frame, bg="white", bd=1, relief=tk.SUNKEN)
        list_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=20)
        
        # Scrollbar
        scrollbar = Scrollbar(list_frame)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
        
        # Listbox for images
        self.image_listbox = Listbox(list_frame, width=70, height=15, yscrollcommand=scrollbar.set)
        self.image_listbox.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.config(command=self.image_listbox.yview)
        
        # Status bar
        self.status_var = StringVar()
        self.status_var.set("Images in collection: 0")
        status_bar = Label(controls_frame, textvariable=self.status_var, bd=1, relief=tk.SUNKEN, anchor=tk.W)
        status_bar.pack(side=tk.BOTTOM, fill=tk.X)
    
    def load_image_data(self):
        """Load image data from CSV file"""
        self.images = []
        try:
            with open(self.csv_file, 'r', newline='') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    self.images.append(row)
            
            # Update listbox
            self.update_image_list()
        except Exception as e:
            print(f"Error loading image data: {e}")
    
    def update_image_list(self):
        """Update the image listbox with current image data"""
        self.image_listbox.delete(0, tk.END)
        if self.images:
            for img in self.images:
                self.image_listbox.insert(tk.END, f"{img['original_name']} - {img['date_added']}")
        else:
            self.image_listbox.insert(tk.END, "No images in collection")
        
        self.status_var.set(f"Images in collection: {len(self.images)}")
    
    def save_image_data(self):
        """Save image data to CSV file"""
        try:
            with open(self.csv_file, 'w', newline='') as f:
                writer = csv.DictWriter(f, fieldnames=["filename", "original_name", "date_added", "description"])
                writer.writeheader()
                writer.writerows(self.images)
        except Exception as e:
            print(f"Error saving image data: {e}")
    
    def import_image(self):
        """Import an image into the container"""
        filetypes = [
            ("Image files", "*.jpg *.jpeg *.png *.gif *.bmp *.tiff"),
            ("All files", "*.*")
        ]
        
        filepath = filedialog.askopenfilename(
            title="Select Image",
            filetypes=filetypes
        )
        
        if filepath:
            try:
                # Get image details
                original_filename = os.path.basename(filepath)
                timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                new_filename = f"{timestamp}_{original_filename}"
                destination = os.path.join(self.image_folder, new_filename)
                
                # Copy the file
                shutil.copy2(filepath, destination)
                
                # Get description
                description = self.prompt_for_description()
                
                # Add to image data
                new_image = {
                    "filename": new_filename,
                    "original_name": original_filename,
                    "date_added": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                    "description": description
                }
                
                self.images.append(new_image)
                self.save_image_data()
                self.update_image_list()
                
                messagebox.showinfo("Success", f"Image '{original_filename}' imported successfully!")
                
            except Exception as e:
                messagebox.showerror("Error", f"Failed to import image: {e}")
    
    def prompt_for_description(self):
        """Prompt user for image description"""
        description_window = tk.Toplevel(self.root)
        description_window.title("Image Description")
        description_window.geometry("400x200")
        description_window.transient(self.root)
        
        Label(description_window, text="Enter image description:").pack(pady=10)
        
        description_text = tk.Text(description_window, width=40, height=5)
        description_text.pack(padx=20, pady=10)
        
        description_result = [""]  # Use list to store result from callback
        
        def save_description():
            description_result[0] = description_text.get("1.0", tk.END).strip()
            description_window.destroy()
        
        Button(description_window, text="Save", command=save_description).pack(pady=10)
        
        # Make modal
        description_window.grab_set()
        self.root.wait_window(description_window)
        
        return description_result[0]
    
    def view_image(self):
        """Open a window to view selected image"""
        selected_idx = self.image_listbox.curselection()
        
        if not selected_idx:
            messagebox.showinfo("Info", "Please select an image to view")
            return
            
        if not self.images:
            return
            
        idx = selected_idx[0]
        if idx >= len(self.images):
            return
            
        # Get image data
        image_data = self.images[idx]
        image_path = os.path.join(self.image_folder, image_data['filename'])
        
        if os.path.exists(image_path):
            # Create viewing window
            view_window = tk.Toplevel(self.root)
            view_window.title(f"Image Viewer - {image_data['original_name']}")
            view_window.geometry("800x600")
            
            # Create a frame for the image
            frame = Frame(view_window)
            frame.pack(fill=tk.BOTH, expand=True)
            
            try:
                # Load and display image
                img = Image.open(image_path)
                
                # Calculate resize dimensions while maintaining aspect ratio
                width, height = img.size
                max_width, max_height = 700, 500
                
                if width > max_width or height > max_height:
                    ratio = min(max_width/width, max_height/height)
                    width, height = int(width*ratio), int(height*ratio)
                    img = img.resize((width, height), Image.Resampling.LANCZOS)
                
                photo = ImageTk.PhotoImage(img)
                
                # Display image
                img_label = Label(frame, image=photo)
                img_label.image = photo  # Keep a reference
                img_label.pack(padx=20, pady=20)
                
                # Display metadata
                info_text = f"Filename: {image_data['original_name']}\n"
                info_text += f"Date Added: {image_data['date_added']}\n"
                info_text += f"Description: {image_data['description']}"
                
                info_label = Label(frame, text=info_text, justify=tk.LEFT)
                info_label.pack(padx=20, pady=10)
                
            except Exception as e:
                Label(frame, text=f"Error loading image: {e}").pack(pady=50)
        else:
            messagebox.showerror("Error", f"Image file not found: {image_path}")

def create_background_image():
    """Create a simple background image if it doesn't exist"""
    if not os.path.exists("background.jpg"):
        try:
            # Create a simple gradient image
            width, height = 800, 600
            image = Image.new('RGB', (width, height))
            
            # Create a blue-gray gradient background similar to the headset image
            for y in range(height):
                for x in range(width):
                    # Create a gradient from top to bottom
                    r = int(200 - y/3)
                    g = int(220 - y/3)
                    b = int(240 - y/6)
                    image.putpixel((x, y), (r, g, b))
            
            image.save('background.jpg')
            print("Created background.jpg")
            return True
        except Exception as e:
            print(f"Failed to create background image: {e}")
            return False
    return True

if __name__ == "__main__":
    # Create background image if it doesn't exist
    create_background_image()
    
    # Create images directory if it doesn't exist
    if not os.path.exists("images"):
        os.makedirs("images")
    
    # Run the application
    root = tk.Tk()
    app = SimpleImageContainer(root)
    root.mainloop() 