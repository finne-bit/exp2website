// Fetch the JSON data
fetch('json/data.json')
    .then(response => response.json())
    .then(data => console.log(data))
  .catch(error => console.error(error));
    .then(data => {
        // Select the container where ID cards will be placed
        const container = document.getElementById('idCardContainer');
        
        // Loop through each item in the JSON array
        data.forEach(item => {
            // Create a new div for each ID card
            const card = document.createElement('div');
            card.classList.add('id-card');

            // Set the innerHTML of the card with the student data
            card.innerHTML = `
                <img src="${item.path}" alt="Foto ${item.nama}">
                <h2>${item.nama}</h2>
                <p>Jabatan: ${item.jabatan}</p>
            `;

            // Append the card to the container
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Error loading JSON data:', error));
