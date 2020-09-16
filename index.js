
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
                    let description = data.weather;

                    let weatherShow = "City Name: " + Name + " Country: " + country + " Time Zone: " + timeZone + " " + "Degrees Celcius "+ temperature + " description: " + description;
                    showWeather(weatherShow);

                })
        }
        getWeather();

        function getWeather5Days(){
          let input = document.getElementById("input").value;

            fetch("https://api.openweathermap.org/data/2.5/forecast?q="+input+"&units=metric&appid="+ mykey)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let temp = data.list.main.temp;
                    let description5Days = data.list.weather.description;
                    let weatherShow5Days = "Temperature " + temp + "Conditions " + description5Days;
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

    function showArray(description){
        let arrayPrint = [];
        for ( let i = 0; i < description.length; i++) {
            arrayPrint += description[i];
        }
        console.log(arrayPrint);
    }
    showArray();