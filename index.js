
let mykey = config.SECRET_KEY;


    document.getElementById("run").addEventListener("click", function(){

        function getWeather(){
            const input = document.getElementById("input").value


            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=metric&appid=" +mykey)
                .then(response => response.json())
                .then(data =>{
                    console.log(data);
                    let Name = data.name;
                    let country = data.sys.country;
                    let timeZone = data.timezone;
                    let temperature = data.main.temp;
                    let weatherShow = "City Name: " + Name + " Country: " + country + " Time Zone: " + timeZone + " " + "Degrees Celcius"+ temperature;
                    showWeather(weatherShow);

                })
        }
        getWeather();

        function getWeather5Days(){
            input = document.getElementById("input").value;

            fetch("https://api.openweathermap.org/data/2.5/forecast?q="+input+"&units=metric&appid="+ mykey)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let temp = data.list.main.temp;
                    let description = data.list.weather.description;
                    let weatherShow5Days = "Temperature " + temp + "Conditions " + description;
                    showWeather(weatherShow5Days)
                })
        }
        getWeather5Days();

        function showWeather(weatherShow,weatherShow5Days){
           document.getElementById("target").innerHTML = weatherShow;
           document.getElementById("target2").innerHTML = weatherShow5Days;
        }
        showWeather();

    })