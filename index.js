
let mykey = config.SECRET_KEY;


    document.getElementById("run").addEventListener("click", function(){

        function getWeather5Days(){
          let input = document.getElementById("input").value;

            fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ input +"&units=metric&appid="+ mykey)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let name = data.city.name;
                        console.log(name);
                    let country = data.city.country;
                        console.log(country);
                    showWeather()
                })
        }
        getWeather5Days();

        function showWeather(){
           document.getElementById("target2").innerHTML = name;
        }
        showWeather();

    })











// function getWeather(){
//     const input = document.getElementById("input").value
//
//
// //     fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=metric&appid=" +mykey)
// //         .then(response => response.json())
// //         .then(data =>{
// //             console.log(data);
// //             let Name = data.name;
// //             let country = data.sys.country;
// //             let timeZone = data.timezone;
// //             let temperature = data.main.temp;
// //             let description = data.weather[0].description;
// //
// //             let weatherShow = "City Name: " + Name + " Country: " + country + " Time Zone: " + timeZone + " " + "Degrees Celcius "+ temperature + " description: " + description;
// //             showWeather(weatherShow);
// //
// //         })
// // }
// // getWeather();
