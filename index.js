

    document.getElementById("run").addEventListener("click", function(){

        function getWeather(){
            const input = document.getElementById("input").value


            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=113615b9a8fe80872073f5ccfc66be36")
                .then(response => response.json())
                .then(data =>{
                    console.log(data);
                    let Name = data.name;
                    let id = data.id;
                    let timeZone = data.timezone;
                    let temperature = data.main.temp;
                    let weatherShow = "City Name: " + Name + " City ID: " + id + " Time Zone: " + timeZone + " "+ temperature;
                    showWeather(weatherShow);
                })
        }
        getWeather();

        function showWeather(weatherShow){
           document.getElementById("target").innerHTML = weatherShow;
        }
        showWeather();

        function changeTemp(temperature){
            temperature =
        }
    })