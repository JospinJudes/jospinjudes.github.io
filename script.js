// document.addEventListener('DOMContentLoaded', function() {
//     fetch('2024-07-25 (1).csv')
//         .then(response => response.text())
//         .then(data => {
//             Papa.parse(data, {
//                 header: true,
//                 complete: function(results) {
//                     const table = document.getElementById('csvTable');
//                     const headerRow = document.createElement('tr');

//                     // Create table headers
//                     for (const header in results.data[0]) {
//                         const th = document.createElement('th');
//                         th.textContent = header;
//                         headerRow.appendChild(th);
//                     }
//                     table.appendChild(headerRow);

//                     // Create table rows
//                     results.data.forEach(row => {
//                         const tr = document.createElement('tr');
//                         for (const cell in row) {
//                             const td = document.createElement('td');
//                             td.textContent = row[cell];
//                             tr.appendChild(td);
//                         }
//                         table.appendChild(tr);
//                     });
//                 }
//             });
//         });
// });

document.addEventListener('DOMContentLoaded', function() {
    fetch('2024-07-25 (1).csv')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            Papa.parse(data, {
                header: true,
                complete: function(results) {
                    const table = document.getElementById('csvTable');
                    const headerRow = document.createElement('tr');

                    // Create table headers
                    for (const header in results.data[0]) {
                        const th = document.createElement('th');
                        th.textContent = header;
                        headerRow.appendChild(th);
                    }
                    table.appendChild(headerRow);

                    // Create table rows
                    results.data.forEach(row => {
                        const tr = document.createElement('tr');
                        for (const cell in row) {
                            const td = document.createElement('td');
                            td.textContent = row[cell];
                            tr.appendChild(td);
                        }
                        table.appendChild(tr);
                    });
                }
            });
        })
        .catch(error => {
            console.error('Error fetching the CSV file:', error);
        });
});
