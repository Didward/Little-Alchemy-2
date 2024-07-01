## First, I went to this page: https://little-alchemy.fandom.com/wiki/Elements_(Little_Alchemy_2)
## Then, I scraped it, yeah.

```javascript
// Select all tables with the class "list-table"
const tables = document.querySelectorAll('table.list-table');

// Initialize an array to hold all the element names
const elements = [];

// Iterate through each table
tables.forEach((table) => {
  // Select all rows in the table, except the first one (header)
  const rows = table.querySelectorAll('tbody tr:not(:first-child)');

  // Iterate through each row
  rows.forEach((row) => {
    // Select the first column (element name)
    const elementCell = row.querySelector('td:first-child a[title]');

    // If the element cell exists, add the element name to the array
    if (elementCell) {
      elements.push(elementCell.title.trim());
    }
  });
});

// Convert the array to a JSON string
const jsonString = JSON.stringify(elements, null, 2);

// Create a Blob from the JSON string
const blob = new Blob([jsonString], { type: 'application/json' });

// Create a link element
const link = document.createElement('a');

// Set the download attribute with a filename
link.download = 'elements.json';

// Create a URL for the Blob and set it as the href attribute
link.href = window.URL.createObjectURL(blob);

// Append the link to the document body
document.body.appendChild(link);

// Programmatically click the link to trigger the download
link.click();

// Remove the link from the document
document.body.removeChild(link);

```
