#!/usr/bin/env python
"""
Image Container Application Runner
This script ensures the background image exists and then runs the image container application.
"""

import os
import subprocess
import sys

def run_application():
    """Run the image container application with proper setup"""
    print("Starting Image Container Application...")
    
    # Check if required libraries are installed
    try:
        import numpy
        import pandas
        import matplotlib
        import PIL
        import requests
    except ImportError:
        print("Required libraries not found. Installing dependencies...")
        subprocess.run([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
    
    # Check if images directory exists
    if not os.path.exists('images'):
        print("Creating images directory...")
        os.makedirs('images')
    
    # Check if background image exists
    if not os.path.exists('background.jpg'):
        print("Background image not found. Creating it...")
        try:
            # Try to run the headset image creation script
            from save_headset_image import save_headset_image
            save_headset_image()
        except Exception as e:
            print(f"Error creating headset image: {e}")
            
            # Create a simple fallback image
            try:
                from PIL import Image
                print("Creating a simple background image...")
                width, height = 800, 600
                image = Image.new('RGB', (width, height), color=(200, 220, 240))
                image.save('background.jpg')
                print("Created background.jpg")
            except Exception as e2:
                print(f"Failed to create background: {e2}")
                print("Please manually create a background.jpg file before running the application")
                return False
    
    # Run the main application
    try:
        from image_container import ImageContainer
        import tkinter as tk
        
        print("Launching Image Container application...")
        root = tk.Tk()
        app = ImageContainer(root)
        root.mainloop()
        return True
    except Exception as e:
        print(f"Error launching application: {e}")
        return False

if __name__ == "__main__":
    run_application() 