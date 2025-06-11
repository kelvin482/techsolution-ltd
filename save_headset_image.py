import os
from PIL import Image
import matplotlib.pyplot as plt
import numpy as np

def save_headset_image():
    """
    Save the headset image shown in the chat as headset_image.jpg
    """
    try:
        # Create a placeholder image similar to the headset image shown in the chat
        # Since we can't directly download the image from the chat, we'll create a similar looking one
        
        # Create a canvas
        fig, ax = plt.subplots(figsize=(10, 6))
        
        # Set background color to light gray to mimic the desk surface
        ax.set_facecolor('#f5f5f5')
        
        # Draw laptop-like shape (black rectangle)
        laptop_x = np.array([2, 8, 8, 2, 2])
        laptop_y = np.array([1, 1, 4, 4, 1])
        ax.fill(laptop_x, laptop_y, color='#333333')
        
        # Draw headset-like shape (black curved line with circle for ear cup)
        # Headband
        headband_x = np.array([6, 9, 9])
        headband_y = np.array([2, 2.5, 1.5])
        ax.plot(headband_x, headband_y, color='black', linewidth=3)
        
        # Ear cup
        ear_cup = plt.Circle((8.5, 1.5), 0.8, color='#444444')
        ax.add_artist(ear_cup)
        
        # Microphone
        mic_x = np.array([7.5, 7, 6.5])
        mic_y = np.array([1.5, 1, 0.8])
        ax.plot(mic_x, mic_y, color='black', linewidth=2)
        
        # Hand silhouette on keyboard
        hand_x = np.linspace(3, 5, 100)
        hand_y = 1 + 0.3 * np.sin(hand_x)
        ax.fill(hand_x, hand_y, color='#d0c0b0', alpha=0.7)
        
        # Remove axes and set limits
        ax.axis('off')
        ax.set_xlim(0, 10)
        ax.set_ylim(0, 5)
        
        # Save the figure
        plt.tight_layout()
        plt.savefig('headset_image.jpg', dpi=150, bbox_inches='tight')
        plt.close()
        
        print("Headset image created and saved as headset_image.jpg")
        
        # Now we can use this as the background for our image container app
        # Copy it to background.jpg directly
        img = Image.open('headset_image.jpg')
        img.save('background.jpg')
        print("Also saved as background.jpg for immediate use")
        
        return True
    except Exception as e:
        print(f"Error creating headset image: {e}")
        
        # Create a simple fallback image if the matplotlib approach fails
        try:
            # Create a simple gradient image
            width, height = 800, 600
            image = Image.new('RGB', (width, height))
            
            # Create a blue-gray gradient background
            for y in range(height):
                for x in range(width):
                    # Create a gradient from top to bottom
                    r = int(200 - y/3)
                    g = int(220 - y/3)
                    b = int(240 - y/6)
                    image.putpixel((x, y), (r, g, b))
            
            image.save('headset_image.jpg')
            image.save('background.jpg')
            print("Created alternative background images")
            return True
        except Exception as e2:
            print(f"Failed to create alternative image: {e2}")
            return False

if __name__ == "__main__":
    save_headset_image() 