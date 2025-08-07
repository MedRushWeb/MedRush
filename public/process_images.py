import cv2
import os
import re
import numpy as np

# === CONFIGURATION ===

input_folder = 'images_input'     # Folder with input images
output_folder = 'images_output'   # Folder to save edited images

# Define renaming structure


rename_map = {
    '17236':5,
    '1996':1,
    '782':1,
    '15675':5,
    '17244':2,
    '927':2,
    '8531':1,
    '2080':1,
    '2081':1,
    '579':1,
    '769':5,
    '20526':1,
    '1262':2,
    '17246':1,
    '1658':5,
    '768':4,
    '1844':2,
    '1659':4,
    '20306':3,
    '1921':1,
    '225':3,
    

}
# Example: 2 images named like img1.cat.jpg, img2.cat.jpg, then 3 like img1.dog.jpg, ..., then 1 bird

# === FUNCTIONS ===

def sort_images_by_number(files):
    return sorted(files, key=lambda f: int(re.search(r'\d+', f).group()))

def crop_black_background(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    _, thresh = cv2.threshold(gray, 1, 255, cv2.THRESH_BINARY)
    coords = cv2.findNonZero(thresh)
    x, y, w, h = cv2.boundingRect(coords)
    return image[y:y+h, x:x+w]

def resize_image(image, width):
    h, w = image.shape[:2]
    aspect_ratio = width / w
    return cv2.resize(image, (width, int(h * aspect_ratio)))

def ensure_folder(path):
    if not os.path.exists(path):
        os.makedirs(path)

# === MAIN PROCESS ===

ensure_folder(output_folder)

all_files = [f for f in os.listdir(input_folder) if f.lower().endswith(('.png', '.jpg', '.jpeg'))]
sorted_files = sort_images_by_number(all_files)

idx = 0
for label, count in rename_map.items():
    for i in range(count):
        if idx >= len(sorted_files):
            print("Warning: Not enough images for rename map")
            break
        file_name = sorted_files[idx]
        img_path = os.path.join(input_folder, file_name)
        image = cv2.imread(img_path)

        if image is None:
            print(f"Could not read image: {img_path}")
            continue

        # Crop, resize
        cropped = crop_black_background(image)
        resized = resize_image(cropped, 600)

        # Save with new name
        new_name = f"img{i+1}.{label}.jpg"
        save_path = os.path.join(output_folder, new_name)
        cv2.imwrite(save_path, resized)
        print(f"Saved: {save_path}")

        idx += 1
