# Little Alchemy 2 Element Capturer 📷 
![GitHub Repo stars](https://img.shields.io/github/stars/Didward/Little-Alchemy-2) ![GitHub forks](https://img.shields.io/github/forks/Didward/Little-Alchemy-2)



Gives you a list of all the elements you don't have and need to make + I will show you how to find out how to make any element easily. Also, **🔴 keep in mind** that the script doesn't acknowledge your [final items](https://help.littlealchemy2.com/general/item-types#:~:text=They%20can%20be%20unlocked%20by,find%20them%20in%20the%20encyclopedia.) so don't get mad that it's giving you false results of what you don't have - it just doesn't know what final items you have but it's not that big of a deal.

## How It Works 🤓

1. The script sets up a MutationObserver to watch for changes in the `transform` property of the element divs.
2. When an element's style changes, it logs the name of the element if it hasn't been logged before.
3. Pressing the "E" key stops the capturing process and saves the collected element names to a JSON file.
4. The Python file compares your list of items to a json file with all the elements and creates a JSON file with your missing elements.
   
## Requirements 🐍
Just get a working version of Python. I would recommend to download [the latest version of Python](https://www.python.org/downloads/).

## Instructions ⭐

1. Open Little Alchemy 2 in your web browser and ensure the game is fully loaded.
2. Open your browser's Developer Console:
   - Press `F12`, or
   - (For Chrome but not excluded to) Right-click on the page and select `Inspect`, then go to the `Console` tab.
3. Copy and paste [collect.js](https://github.com/Didward/Little-Alchemy-2/blob/bf0b3cd62c5c29e6b54504e6642fadb4989e0b95/collect.js) into the console
4. Close the console and scroll abit down in your list of elements until all of the elements you saw at the start are gone, scroll back up and then scroll through the whole list (this ensures everything is captured), down to the bottom. Once done, press `E` on your keyboard.
5. Create a new folder, *the name of it doesn't matter*.
6. Move the JSON file into it.
7. Download [main.py](https://github.com/Didward/Little-Alchemy-2/blob/bf0b3cd62c5c29e6b54504e6642fadb4989e0b95/main.py) and move it into the folder.
8. Download [elements.json](https://github.com/Didward/Little-Alchemy-2/blob/bf0b3cd62c5c29e6b54504e6642fadb4989e0b95/elements.json) and move it into the folder. (it's a JSON file with all of the elements. Find out how I made the list [here](https://github.com/Didward/Little-Alchemy-2/blob/main/(for%20nerds)%20-%20How%20I%20Got%20All%20The%20Elements.md))
9. In the folder with main.py and that JSON file created using the script, you should have a JSON file with your missing elements.

### HOW TO FIND OUT HOW TO MAKE YOUR MISSING ELEMENT ❓✔
1. If your element's name contains a space, replace it with a `-` (e.g. Fortune Cookie -> fortune-cookie)
2. Add your new element name in the curly braces (make sure to get rid of them) `https://hints.littlealchemy2.com/item/{PUT IT HERE AND GET RID OF THE CURLY BRACES}`
   - e.g Fortune Cookie -> fortune-cookie -> https://hints.littlealchemy2.com/item/fortune-cookie
4. Done ✅
   
## Support Me ☕
Buy me a coffee at [buymeacoffee.com/catfacts](https://buymeacoffee.com/catfacts)! 💝☕ Thank you for your support.
