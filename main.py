import json

def load_json(file_path):
    """Load JSON data from a file."""
    with open(file_path, 'r') as file:
        return json.load(file)

def find_missing_elements(existing_elements, all_elements):
    """Find elements that are in all_elements but not in existing_elements, case insensitive."""
    existing_elements_lower = {element.lower() for element in existing_elements}
    all_elements_lower = {element.lower() for element in all_elements}
    return [element for element in all_elements_lower if element not in existing_elements_lower]

def main():
    # Load data from JSON files
    element_names = load_json('elementNames.json')
    elements = load_json('elements.json')

    # Find missing elements
    missing_elements = find_missing_elements(element_names, elements)

    # Print missing elements
    if missing_elements:
        print("Missing elements:")
        for element in missing_elements:
            print(element)
    else:
        print("No missing elements. All elements are accounted for.")

    # Save missing elements to a JSON file
    with open('missingElements.json', 'w') as file:
        json.dump(missing_elements, file)

if __name__ == '__main__':
    main()
