import requests
import os
from PIL import Image
from io import BytesIO

def save_background_image():
    """Save the provided image as background.jpg"""
    try:
        # Create images directory if it doesn't exist
        if not os.path.exists('images'):
            os.makedirs('images')
        
        # URL of the image from the conversation
        # This would typically come from the user, but we're using a placeholder
        image_url = "https://image-placeholder-url.jpg"  # Replace with actual image URL
        
        # For local testing without downloading, we'll check if you have the image in the current directory
        if os.path.exists('headset_image.jpg'):
            print("Using local image as background")
            img = Image.open('headset_image.jpg')
            img.save('background.jpg')
            print("Background image saved successfully as background.jpg")
            return True
            
        # If no local image found, try to download from URL
        try:
            response = requests.get(image_url)
            if response.status_code == 200:
                img = Image.open(BytesIO(response.content))
                img.save('background.jpg')
                print("Background image downloaded and saved successfully as background.jpg")
                return True
            else:
                print(f"Failed to download image: HTTP {response.status_code}")
                return False
        except Exception as e:
            print(f"Error downloading image: {e}")
            
            # If download fails, create a placeholder image
            print("Creating placeholder background...")
            placeholder = Image.new('RGB', (800, 600), color=(200, 220, 240))
            placeholder.save('background.jpg')
            print("Placeholder background created as background.jpg")
            return True
            
    except Exception as e:
        print(f"Error saving background image: {e}")
        return False

if __name__ == "__main__":
    save_background_image() 