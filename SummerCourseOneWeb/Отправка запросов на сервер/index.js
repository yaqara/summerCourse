document.addEventListener("DOMContentLoaded", () => {
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    getWeatherBtn.addEventListener('click', async () => {
        try{
            const response = await axios.get("http://localhost:5197/weatherforecast");
            const data = response.data;
            const forecastDiv = document.getElementById('forecast');
                forecastDiv.innerHTML = '';
                data.forEach(forecast => {
                    const forecastItem = document.createElement('div');
                    forecastItem.innerHTML = `
                        <p>Date: ${forecast.date}</p>
                        <p>Temperature (C): ${forecast.temperatureC}</p>
                        <p>Temperature (F): ${forecast.temperatureF}</p>
                        <p>Summary: ${forecast.summary}</p>
                    `;
                    forecastDiv.appendChild(forecastItem);
                });
        }
        catch(error){
            console.log(error);
        }
    });

    const postButton = document.getElementById('postBtn');
    postButton.addEventListener('click', () => {
        fetch('http://localhost:5197/submitdata',
            {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "Name": "Максим",
                    "Age": 22
                }),
              }
        )
            .then(response => response.json())
            .then(data => {
                const postResultContainer = document.getElementById('postResult');
                postResultContainer.innerHTML = '';
                postResultContainer.innerHTML = JSON.stringify(data);
            })
    });
    
    const tableGenerator = document.getElementById("tableGenerator");
    tableGenerator.addEventListener("click", () => {
        let number = document.getElementById('number').value;
        let tableDiv = document.getElementById('table');
        tableDiv.innerHTML = '';

        for(let i = 1; i <= 10; i++) {
            let p = document.createElement('p');
            p.textContent = number + ' * ' + i + ' = ' + (number * i);
            tableDiv.appendChild(p);
        }
    })
});