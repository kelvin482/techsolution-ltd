import os
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
import tkinter as tk
from tkinter import filedialog, messagebox
from PIL import Image, ImageTk
import shutil
from datetime import datetime

class ImageContainer:
    def __init__(self, root):
        self.root = root
        self.root.title("Image Container")
        self.root.geometry("800x600")
        
        # Set up paths
        self.image_folder = "images"
        self.background_image_path = "background.jpg"  # Will use the provided image
        
        # Ensure image folder exists
        if not os.path.exists(self.image_folder):
            os.makedirs(self.image_folder)
            
        # Create pandas DataFrame to track images
        self.image_df = self.load_image_data()
        
        # Create UI
        self.create_ui()
        
    def load_image_data(self):
        """Load or create image tracking DataFrame"""
        csv_path = os.path.join(self.image_folder, "image_data.csv")
        if os.path.exists(csv_path):
            return pd.read_csv(csv_path)
        else:
            # Create new DataFrame with columns
            df = pd.DataFrame(columns=["filename", "original_name", "date_added", "description"])
            df.to_csv(csv_path, index=False)
            return df
            
    def save_image_data(self):
        """Save image tracking data to CSV"""
        csv_path = os.path.join(self.image_folder, "image_data.csv")
        self.image_df.to_csv(csv_path, index=False)
        
    def create_ui(self):
        """Create the user interface"""
        # Main frame
        main_frame = tk.Frame(self.root)
        main_frame.pack(fill=tk.BOTH, expand=True)
        
        # Try to load and set background image
        try:
            bg_img = Image.open(self.background_image_path)
            bg_img = bg_img.resize((800, 600), Image.LANCZOS)
            self.bg_photo = ImageTk.PhotoImage(bg_img)
            
            # Create a label with the background image
            bg_label = tk.Label(main_frame, image=self.bg_photo)
            bg_label.place(x=0, y=0, relwidth=1, relheight=1)
        except Exception as e:
            print(f"Could not load background image: {e}")
        
        # Controls frame (with translucent background)
        controls_frame = tk.Frame(main_frame, bg="#f0f0f0", bd=2)
        controls_frame.place(relx=0.5, rely=0.1, relwidth=0.8, relheight=0.8, anchor="n")
        
        # Title
        title_label = tk.Label(controls_frame, text="Image Container", font=("Arial", 18, "bold"), bg="#f0f0f0")
        title_label.pack(pady=10)
        
        # Buttons
        button_frame = tk.Frame(controls_frame, bg="#f0f0f0")
        button_frame.pack(pady=20)
        
        import_btn = tk.Button(button_frame, text="Import Image", command=self.import_image, width=15)
        import_btn.grid(row=0, column=0, padx=10)
        
        view_btn = tk.Button(button_frame, text="View Images", command=self.view_images, width=15)
        view_btn.grid(row=0, column=1, padx=10)
        
        analyze_btn = tk.Button(button_frame, text="Analyze Images", command=self.analyze_images, width=15)
        analyze_btn.grid(row=0, column=2, padx=10)
        
        # Image list frame
        list_frame = tk.Frame(controls_frame, bg="white", bd=1, relief=tk.SUNKEN)
        list_frame.pack(fill=tk.BOTH, expand=True, padx=20, pady=20)
        
        # Scrollbar
        scrollbar = tk.Scrollbar(list_frame)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
        
        # Listbox for images
        self.image_listbox = tk.Listbox(list_frame, width=70, height=15, yscrollcommand=scrollbar.set)
        self.image_listbox.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.config(command=self.image_listbox.yview)
        
        # Status bar
        self.status_var = tk.StringVar()
        self.status_var.set(f"Images in collection: {len(self.image_df)}")
        status_bar = tk.Label(controls_frame, textvariable=self.status_var, bd=1, relief=tk.SUNKEN, anchor=tk.W)
        status_bar.pack(side=tk.BOTTOM, fill=tk.X)
        
        # Populate listbox
        self.update_image_list()
    
    def update_image_list(self):
        """Update the image listbox with current image data"""
        self.image_listbox.delete(0, tk.END)
        if len(self.image_df) > 0:
            for idx, row in self.image_df.iterrows():
                self.image_listbox.insert(tk.END, f"{row['original_name']} - {row['date_added']}")
        else:
            self.image_listbox.insert(tk.END, "No images in collection")
        
        self.status_var.set(f"Images in collection: {len(self.image_df)}")
    
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
                
                # Prompt for description
                description = self.prompt_for_description()
                
                # Add to DataFrame
                new_row = pd.DataFrame({
                    "filename": [new_filename],
                    "original_name": [original_filename],
                    "date_added": [datetime.now().strftime("%Y-%m-%d %H:%M:%S")],
                    "description": [description]
                })
                
                self.image_df = pd.concat([self.image_df, new_row], ignore_index=True)
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
        
        tk.Label(description_window, text="Enter image description:").pack(pady=10)
        
        description_text = tk.Text(description_window, width=40, height=5)
        description_text.pack(padx=20, pady=10)
        
        description_result = [""]  # Use list to store result from callback
        
        def save_description():
            description_result[0] = description_text.get("1.0", tk.END).strip()
            description_window.destroy()
        
        tk.Button(description_window, text="Save", command=save_description).pack(pady=10)
        
        # Make modal
        description_window.grab_set()
        self.root.wait_window(description_window)
        
        return description_result[0]
    
    def view_images(self):
        """Open a window to view selected image"""
        selected_idx = self.image_listbox.curselection()
        
        if not selected_idx:
            messagebox.showinfo("Info", "Please select an image to view")
            return
            
        if len(self.image_df) == 0:
            return
            
        idx = selected_idx[0]
        if idx >= len(self.image_df):
            return
            
        # Get image data
        image_data = self.image_df.iloc[idx]
        image_path = os.path.join(self.image_folder, image_data['filename'])
        
        if os.path.exists(image_path):
            # Create viewing window
            view_window = tk.Toplevel(self.root)
            view_window.title(f"Image Viewer - {image_data['original_name']}")
            view_window.geometry("800x600")
            
            # Create a frame for the image
            frame = tk.Frame(view_window)
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
                    img = img.resize((width, height), Image.LANCZOS)
                
                photo = ImageTk.PhotoImage(img)
                
                # Display image
                img_label = tk.Label(frame, image=photo)
                img_label.image = photo  # Keep a reference
                img_label.pack(padx=20, pady=20)
                
                # Display metadata
                info_text = f"Filename: {image_data['original_name']}\n"
                info_text += f"Date Added: {image_data['date_added']}\n"
                info_text += f"Description: {image_data['description']}"
                
                info_label = tk.Label(frame, text=info_text, justify=tk.LEFT)
                info_label.pack(padx=20, pady=10)
                
            except Exception as e:
                tk.Label(frame, text=f"Error loading image: {e}").pack(pady=50)
        else:
            messagebox.showerror("Error", f"Image file not found: {image_path}")
    
    def analyze_images(self):
        """Show basic analysis of image collection using matplotlib"""
        if len(self.image_df) == 0:
            messagebox.showinfo("Info", "No images to analyze")
            return
            
        # Create analysis window
        analysis_window = tk.Toplevel(self.root)
        analysis_window.title("Image Collection Analysis")
        analysis_window.geometry("800x600")
        
        # Use matplotlib to create visualizations
        fig = plt.Figure(figsize=(10, 8), dpi=100)
        
        # Add plot to analyze images by date
        ax1 = fig.add_subplot(211)
        
        # Convert date_added to datetime and extract date components
        dates = pd.to_datetime(self.image_df['date_added'])
        self.image_df['year_month'] = dates.dt.strftime('%Y-%m')
        
        # Count images by year-month
        date_counts = self.image_df['year_month'].value_counts().sort_index()
        
        # Plot
        ax1.bar(date_counts.index, date_counts.values)
        ax1.set_title('Images Added by Month')
        ax1.set_xlabel('Month')
        ax1.set_ylabel('Number of Images')
        ax1.tick_params(axis='x', rotation=45)
        
        # Second plot - file types
        ax2 = fig.add_subplot(212)
        
        # Extract file extensions
        self.image_df['extension'] = self.image_df['filename'].apply(
            lambda x: os.path.splitext(x)[1].lower()
        )
        
        # Count by extension
        ext_counts = self.image_df['extension'].value_counts()
        
        # Plot
        ax2.pie(ext_counts.values, labels=ext_counts.index, autopct='%1.1f%%')
        ax2.set_title('Image Types')
        
        # Add the plot to the tkinter window
        canvas = FigureCanvasTkAgg(fig, master=analysis_window)
        canvas.draw()
        canvas.get_tk_widget().pack(fill=tk.BOTH, expand=True)
        
        # Add toolbar
        toolbar_frame = tk.Frame(analysis_window)
        toolbar_frame.pack(fill=tk.X)
        
        # Stats
        stats_text = f"Total Images: {len(self.image_df)}\n"
        if len(self.image_df) > 0:
            oldest = pd.to_datetime(self.image_df['date_added']).min()
            newest = pd.to_datetime(self.image_df['date_added']).max()
            stats_text += f"Oldest Image: {oldest.strftime('%Y-%m-%d')}\n"
            stats_text += f"Newest Image: {newest.strftime('%Y-%m-%d')}\n"
        
        tk.Label(toolbar_frame, text=stats_text, justify=tk.LEFT).pack(pady=10)
        
        fig.tight_layout()

if __name__ == "__main__":
    root = tk.Tk()
    app = ImageContainer(root)
    root.mainloop() 