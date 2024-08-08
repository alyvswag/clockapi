let button1 = document.querySelector(".button1Basliq");

button1.addEventListener("click", function () {
    document.querySelector(".button1Basliq").style.display = "none";
    document.querySelector(".saat").style.display = "block";
    document.querySelector(".mekan").style.display = "block";
    document.querySelector(".date").style.display = "block";
    document.querySelector(".hava").style.display = "block";
    document.querySelector(".esas1").style.display = "block";
    document.querySelector(".esas2").style.display = "block";
})
document.querySelector(".clockName").addEventListener("click", function () {
    location.reload();
})

const clock = () => {
    let date = new Date()
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    document.querySelector(".saatEqrebi").innerHTML = hour;
    document.querySelector(".deqiqeEqrebi").innerHTML = minute;
    document.querySelector(".saniyeEqrebi").innerHTML = second;

    let months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
    let month = date.getMonth();
    document.querySelector(".dateTarix").innerHTML = months[month];
    let day = date.getDate();
    document.querySelector(".dateGun").innerHTML = day;
    if (hour < 10) {
        document.querySelector(".saatEqrebi").innerHTML = '0' + hour;
    }
    if (minute < 10) {
        document.querySelector(".deqiqeEqrebi").innerHTML = '0' + minute;
    }
    if (second < 10) {
        document.querySelector(".saniyeEqrebi").innerHTML = '0' + second;
    }
}
setInterval(clock, 1000); //her kecen saniyenin gorunmesi ucun SetInterval metodu ile clocku cagiriram

navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    const geoApiUrl1 = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    // console.log(geoApiUrl);
    fetch(geoApiUrl1)
        .then(response => response.json())
        .then(data => {
            const city = data.city;
            document.querySelector(".mekanAdi").innerHTML = city;
        })

    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=52d8c6f7cf31a177b158468840fef4da`;
    // console.log(weatherApiUrl);
    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
            var weather = data.main.temp;
            var weatherCelsius = weather - 273.15;
            var tamEdedHavaderece = Math.round(weatherCelsius);
            document.querySelector(".havaDerece").innerHTML = tamEdedHavaderece + "°C";
            // console.log(weatherCelsius);
            if (tamEdedHavaderece >= 10 && tamEdedHavaderece <= 15) {
                document.querySelector(".havaFont").innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
            }
            else if (tamEdedHavaderece > 15 && tamEdedHavaderece <= 25) {
                document.querySelector(".havaFont").innerHTML = `<i class="fa-solid fa-sun"></i>`;

            }
            else if (tamEdedHavaderece > 25) {
                document.querySelector(".havaFont").innerHTML = `<i class="fa-solid fa-sun-bright"></i>`;

            }
            else if (tamEdedHavaderece < 10 && tamEdedHavaderece >= 5) {
                document.querySelector(".havaFont").innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;

            }
            else if (tamEdedHavaderece < 5 && tamEdedHavaderece >= 2) {
                document.querySelector(".havaFont").innerHTML = `<i class="fa-solid fa-cloud"></i>`;

            }
            else if (tamEdedHavaderece < 2 && tamEdedHavaderece >= 0) {
                document.querySelector(".havaFont").innerHTML = `<i class="fa-solid fa-clouds"></i>`;

            }
            else if (tamEdedHavaderece < 0 && tamEdedHavaderece >= -3) {
                document.querySelector(".havaFont").innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }

            else if (tamEdedHavaderece < -3) {
                document.querySelector(".havaFont").innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            }
        })

});

// let cities = ['New York', 'Istanbul', 'Paris', 'Rome', 'Moscow', 'Sydney'];
// let randomIndex = Math.floor(Math.random() * cities.length);
// let randomCity = cities[randomIndex];
// let randomIndex2;
// let randomCity2;
// do {
//     randomIndex2 = Math.floor(Math.random() * cities.length);
//     randomCity2 = cities[randomIndex2];
// } while (randomIndex === randomIndex2);

// var cityLatLut = [
//     [40.730610, -73.935242],//newyork
//     [41.015137, 28.979530],//istanbul
//     [48.864716, 2.349014],//paris
//     [41.902782, 12.496366],//roma
//     [55.751244, 37.618423],//moscow
//     [-33.865143, 151.209900]//sidney
// ];
// function getRandomCities() {
//     let cities = ['New York', 'Istanbul', 'Paris', 'Rome', 'Moscow', 'Sydney'];
//     let randomIndex = Math.floor(Math.random() * cities.length);
//     let randomCity = cities[randomIndex];
//     let randomIndex2;
//     let randomCity2;
//     do {
//         randomIndex2 = Math.floor(Math.random() * cities.length);
//         randomCity2 = cities[randomIndex2];
//     } while (randomIndex === randomIndex2);

//     var cityLatLut = [
//         [40.730610, -73.935242], // New York
//         [41.015137, 28.979530],  // Istanbul
//         [48.864716, 2.349014],   // Paris
//         [41.902782, 12.496366],  // Rome
//         [55.751244, 37.618423],  // Moscow
//         [-33.865143, 151.209900] // Sydney
//     ];

//     return {
//         city1: { name: randomCity, coordinates: cityLatLut[randomIndex] },
//         city2: { name: randomCity2, coordinates: cityLatLut[randomIndex2] }
//     };
// }

// Kullanımı:
// const { city1, city2 } = getRandomCities();
var cityLatLut = [
    [40.730610, -73.935242], // New York
    [41.015137, 28.979530],  // Istanbul
    [48.864716, 2.349014],   // Paris
    [41.902782, 12.496366],  // Rome
    [55.751244, 37.618423],  // Moscow
    [-33.865143, 151.209900] // Sydney
];
 

navigator.geolocation.getCurrentPosition(function (position) {

    // var latitude = cityLatLut[randomIndex][0];
    // var longitude = cityLatLut[randomIndex][1];
    var latitude = cityLatLut[randomIndex1][0];
    var longitude = cityLatLut[randomIndex1][1];
    const geoApiUrl2 = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    // console.log(geoApiUrl);
    fetch(geoApiUrl2)
        .then(response => response.json())
        .then(data => {
            const city = data.city;
            document.querySelector(".seherAdi").innerHTML = city;
        })
        .catch(error => console.error('Error fetching timezone data:', error));

    const weatherApiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=52d8c6f7cf31a177b158468840fef4da`;
    // console.log(weatherApiUrl);
    console.log(weatherApiUrl2);
    fetch(weatherApiUrl2)
        .then(response => response.json())
        .then(data => {
            var weather = data.main.temp;
            var weatherCelsius = weather - 273.15;
            var tamEdedHavaderece = Math.round(weatherCelsius);
            document.querySelector(".ikinciHava").innerHTML = tamEdedHavaderece + "°C";
            const unixTime = data.dt;
            // Unix zaman damgasını milisaniyeye dönüştür
            const currentTime = new Date(unixTime * 1000);
            // Zaman dilimi bilgisini al ve istediğiniz formatta işleyin
            const timeOptions = { hour: '2-digit', minute: '2-digit' };
            const time = currentTime.toLocaleTimeString('en-US', timeOptions);
            
            // Zamanı istediğiniz şekilde kullanabilirsiniz
            console.log('Zaman:', time);
            // console.log(weatherCelsius);
            if (tamEdedHavaderece >= 10 && tamEdedHavaderece <= 15) {
                document.querySelector(".havaFont").innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
            }
            else if (tamEdedHavaderece > 15 && tamEdedHavaderece <= 25) {
                document.querySelector(".ikinciHavaFont1").innerHTML = `<i class="fa-solid fa-sun"></i>`;

            }
            else if (tamEdedHavaderece > 25) {
                document.querySelector(".ikinciHavaFont1").innerHTML = `<i class="fa-solid fa-sun-bright"></i>`;

            }
            else if (tamEdedHavaderece < 10 && tamEdedHavaderece >= 5) {
                document.querySelector(".ikinciHavaFont1").innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;

            }
            else if (tamEdedHavaderece < 5 && tamEdedHavaderece >= 2) {
                document.querySelector(".ikinciHavaFont1").innerHTML = `<i class="fa-solid fa-cloud"></i>`;

            }
            else if (tamEdedHavaderece < 2 && tamEdedHavaderece >= 0) {
                document.querySelector(".ikinciHavaFont1").innerHTML = `<i class="fa-solid fa-cloud"></i>`;

            }
            else if (tamEdedHavaderece < 0 && tamEdedHavaderece >= -3) {
                document.querySelector(".ikinciHavaFont1").innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }

            else if (tamEdedHavaderece < -3) {
                document.querySelector(".ikinciHavaFont1").innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            }

        })

    // function fetchTimeZoneData() {
    //    const timezoneKey = 'X6B3J2LJQON9';
    //     const timeApiURl2 = `https://api.timezonedb.com/v2.1/get-time-zone?key=${timezoneKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`;
    //     setInterval(timeApiURl2, 1000);
    //     //console.log(timeApiURl);
    //     fetch(timeApiURl2)
    //         .then(response => response.json())
    //         .then(data => {
    //             var clock = data.formatted;
    //             var dataTimeParts = clock.split(" ");
    //             var timePart = dataTimeParts[1].split(":");
    //             var time = timePart[0] + ":" + timePart[1];
    //             document.querySelector(".ikinciSaheSaatDiv1").innerHTML = timePart[0];
    //             document.querySelector(".ikinciSaheSaatDiv3").innerHTML = timePart[1];
    //             // console.log(time);
    //         })
    //         .catch(error => console.error('Error fetching timezone data:', error));
    // }
    // fetchTimeZoneData();
    // setInterval(fetchTimeZoneData, 60000);

});

//

navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = cityLatLut[randomIndex2][0];
    var longitude = cityLatLut[randomIndex2][1];
    // var latitude = city2.coordinates;
    // var longitude = city2.coordinates;
    const geoApiUrl3 = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    // console.log(geoApiUrl);
    fetch(geoApiUrl3)
        .then(response => response.json())
        .then(data => {
            const city = data.city;
            document.querySelector(".seherAdi2").innerHTML = city;
        })
        .catch(error => console.error('Error fetching timezone data:', error));

    const weatherApiUrl3 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=52d8c6f7cf31a177b158468840fef4da`;
    //  console.log(weatherApiUrl);
    fetch(weatherApiUrl3)
        .then(response => response.json())
        .then(data => {
            var weather = data.main.temp;
            var weatherCelsius = weather - 273.15;
            var tamEdedHavaderece = Math.round(weatherCelsius);
            document.querySelector(".ikinciHava2").innerHTML = tamEdedHavaderece + "°C";
            //  console.log(weatherCelsius);
            if (tamEdedHavaderece >= 10 && tamEdedHavaderece <= 15) {
                document.querySelector(".havaFont").innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;
            }
            else if (tamEdedHavaderece > 15 && tamEdedHavaderece <= 25) {
                document.querySelector(".ikinciHavaFont2").innerHTML = `<i class="fa-solid fa-sun"></i>`;

            }
            else if (tamEdedHavaderece > 25) {
                document.querySelector(".ikinciHavaFont2").innerHTML = `<i class="fa-solid fa-sun-bright"></i>`;

            }
            else if (tamEdedHavaderece < 10 && tamEdedHavaderece >= 5) {
                document.querySelector(".ikinciHavaFont2").innerHTML = `<i class="fa-solid fa-cloud-sun"></i>`;

            }
            else if (tamEdedHavaderece < 5 && tamEdedHavaderece >= 2) {
                document.querySelector(".ikinciHavaFont2").innerHTML = `<i class="fa-solid fa-cloud"></i>`;

            }
            else if (tamEdedHavaderece < 2 && tamEdedHavaderece >= 0) {
                document.querySelector(".ikinciHavaFont2").innerHTML = `<i class="fa-solid fa-cloud"></i>`;

            }
            else if (tamEdedHavaderece < 0 && tamEdedHavaderece >= -3) {
                document.querySelector(".ikinciHavaFont2").innerHTML = `<i class="fa-solid fa-cloud-rain"></i>`;
            }

            else if (tamEdedHavaderece < -3) {
                document.querySelector(".ikinciHavaFont2").innerHTML = `<i class="fa-solid fa-snowflake"></i>`;
            }
        })
        .catch(error => console.error('Error fetching timezone data:', error));

    function fetchTimeZoneData() {
         const timezoneKey = 'X6B3J2LJQON9';
        let timeApiURl3 = `https://api.timezonedb.com/v2.1/get-time-zone?key=${timezoneKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`;
        // console.log(timeApiURl2);
        fetch(timeApiURl3)
            .then(response => response.json())
            .then(data => {
                var clock2 = data.formatted;
                var dataTimeParts2 = clock2.split(" ");
                var timePart2 = dataTimeParts2[1].split(":");
                var time2 = timePart2[0] + ":" + timePart2[1];
                document.querySelector(".ikinciSaheSaat2Div1").innerHTML = timePart2[0];
                document.querySelector(".ikinciSaheSaat2Div3").innerHTML = timePart2[1];
                //   console.log(time2);
            })
            .catch(error => console.error('Error fetching timezone data:', error));
        }
        fetchTimeZoneData();
        setInterval(fetchTimeZoneData, 60000);
});