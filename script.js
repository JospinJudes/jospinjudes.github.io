document.addEventListener('DOMContentLoaded', function() {
    const currentYearSpan = document.getElementById('current-year');

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    fetch('assets/data/results.csv')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            Papa.parse(data, {
                header: true,
                skipEmptyLines: true,
                complete: function(results) {
                    // Create table headers
                    const tableHeaderRow = document.getElementById('csv-table-header-row');
                    for (const header in results.data[0]) {
                        const th = document.createElement('th');
                        th.textContent = header;
                        tableHeaderRow.appendChild(th);
                    }

                    // Create table rows
                    const tableBody = document.getElementById('csv-table-body');

                    results.data.forEach((row, index) => {
                        const tr = document.createElement('tr');
                        if (index < 10) {
                            tr.classList.add('highlight'); // Ajout de la classe 'highlight'
                        }
                        for (const cell in row) {
                            const td = document.createElement('td');
                            td.textContent = row[cell];
                            tr.appendChild(td);
                        }
                        tableBody.appendChild(tr);
                    });
                }
            });
        })
        .catch(error => {
            console.error('Error fetching the CSV file:', error);
        });
});
