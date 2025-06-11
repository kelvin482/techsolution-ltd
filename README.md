# Simple Image Container Application

A Python application for organizing and storing images in a container with a custom background. The application uses the provided headset image as background (or creates a similar gradient background if the image is not available).

## Features

- Import and organize images in a structured format
- View detailed information about each image
- Track metadata for all saved images
- Custom background using the headset image from the chat
- Simple CSV-based storage for image metadata

## Requirements

- Python 3.7+
- Pillow (PIL Fork) library
- Tkinter (included with most Python installations)

## Setup

1. Install the Pillow library if you don't have it already:
   ```
   pip install Pillow
   ```

2. Run the application:
   ```
   python simple_image_container.py
   ```

The application will automatically:
- Create a background image resembling the headset image
- Set up the images directory for storing your images
- Create a CSV file to track image metadata

## Usage

### Import Images
- Click the "Import Image" button to select an image from your computer
- Add a description when prompted
- The image will be copied to the "images" folder with a timestamp prefix

### View Images
- Select an image from the list
- Click "View Image" to see the full image with metadata

## Data Storage

All image metadata is stored in a CSV file (image_data.csv) within the "images" folder. The actual image files are stored in the same directory with timestamp prefixes to ensure unique filenames.

## File Structure

```
├── simple_image_container.py  # Main application
├── background.jpg            # Generated background image
└── images/                   # Directory for stored images
    ├── image_data.csv        # Metadata for all images
    └── [timestamped images]  # Your saved images
```

## Customization

You can replace the background image by:
1. Adding your own image file named "background.jpg" in the root directory before running the application
2. Or modifying the `create_background_image()` function in the script to use a different image 