   function sleep(ms) {
       return new Promise(resolve => setTimeout(resolve, ms));
   }

   async function captureAllElements() {
       const libraryContainer = document.querySelector("#library");
       const loggedElements = new Set(); // Set to track logged element names
       let observers = []; // To keep track of observers
       let capturing = true; // To control capturing state

       if (libraryContainer) {
           const elements = libraryContainer.querySelectorAll(".element");

           elements.forEach(element => {
               // Create an observer instance
               const observer = new MutationObserver(mutationsList => {
                   for (const mutation of mutationsList) {
                       if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                           // Get the name of the element when its style changes
                           const elementName = element.querySelector('.elementName').textContent.trim();
                           
                           // Check if the element name has already been logged
                           if (!loggedElements.has(elementName)) {
                               // Log the name of the element and add it to the set
                               console.log(`Element updated: ${elementName}`);
                               loggedElements.add(elementName);
                           }
                       }
                   }
               });

               // Start observing the element for attribute changes
               observer.observe(element, {
                   attributes: true, // Observe attribute changes
                   attributeFilter: ['style'] // Only observe changes to the 'style' attribute
               });

               observers.push(observer); // Keep track of the observer
           });

           console.log('Watching for changes in element styles...');

           // Add event listener for the "E" key to stop capturing and save the elements to JSON
           document.addEventListener('keydown', (event) => {
               if (event.key === 'E' || event.key === 'e') {
                   console.log('E key pressed. Stopping capture and saving to JSON.');
                   capturing = false;

                   // Disconnect all observers
                   observers.forEach(observer => observer.disconnect());

                   // Convert the Set to an Array and log the final count of unique elements
                   const namesArrayFinal = Array.from(loggedElements);
                   console.log(`Final count of unique elements: ${namesArrayFinal.length}`);

                   // Convert the array to a JSON string
                   const jsonString = JSON.stringify(namesArrayFinal, null, 2);

                   // Create a Blob from the JSON string
                   const blob = new Blob([jsonString], { type: 'application/json' });

                   // Create a link element
                   const link = document.createElement('a');

                   // Set the download attribute with a filename
                   link.download = 'elementNames.json';

                   // Create a URL for the Blob and set it as the href attribute
                   link.href = window.URL.createObjectURL(blob);

                   // Append the link to the document body
                   document.body.appendChild(link);

                   // Programmatically click the link to trigger the download
                   link.click();

                   // Remove the link from the document
                   document.body.removeChild(link);

                   console.log("elementNames.json has been downloaded successfully.");
               }
           });

       } else {
           console.error("#library container not found.");
       }
   }

   // Run the function to start watching elements
   captureAllElements();
