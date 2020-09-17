let mykey = config.SECRET_KEY;


document.getElementById("run").addEventListener("click", function(){
    function getWeather5Days() {
        let input = document.getElementById("input").value;

        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + input + "&units=metric&appid=" + mykey)
            .then(response => response.json())
            .then(data => {
                let name = data.city.name;
                let longitude = data.city.coord.lon;
                let latitude = data.city.coord.lat;
                console.log(name + " " + longitude + " " + latitude);
                OneCall(latitude,longitude);
            })
    }
    getWeather5Days();


   function OneCall(lat,lon){
       fetch("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=metric&appid=" +mykey)
   .then(response => response.json())
           .then(data => {
            console.log(data)
            let temperature_day0 = data.daily[0].temp.day;
            console.log(temperature_day0);
            let temperature_day1 = data.daily[1].temp.day;
            console.log(temperature_day1);
            let temperature_day2 = data.daily[2].temp.day;
            console.log(temperature_day2);
            let temperature_day3 = data.daily[3].temp.day;
            console.log(temperature_day3);
            let temperature_day4 = data.daily[4].temp.day;
            console.log(temperature_day4);

            showData(temperature_day0,temperature_day1,temperature_day2,temperature_day3,temperature_day4);

           })
   }


    function showData(temperature_day0,temperature_day1,temperature_day2,temperature_day3,temperature_day4){
        document.getElementById("target0").innerHTML =  temperature_day0;
        document.getElementById("target1").innerHTML = temperature_day1;
        document.getElementById("target2").innerHTML = temperature_day2;
        document.getElementById("target3").innerHTML = temperature_day3;
        document.getElementById("target4").innerHTML = temperature_day4;

    }
    showData();

})
