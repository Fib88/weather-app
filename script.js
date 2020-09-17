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
            let description_day0 = data.daily[0].weather[0].description;
            let icon_day0 = data.daily[0].weather[0].icon;
            console.log(temperature_day0);
            console.log(description_day0);
            console.log(icon_day0);
            let temperature_day1 = data.daily[1].temp.day;
            let description_day1 = data.daily[1].weather[0].description;
            console.log(temperature_day1);
            console.log(description_day1);
            let temperature_day2 = data.daily[2].temp.day;
            let description_day2 = data.daily[2].weather[0].description;
            console.log(temperature_day2);
            console.log(description_day2);
            let temperature_day3 = data.daily[3].temp.day;
            let description_day3 = data.daily[3].weather[0].description;
            console.log(temperature_day3);
            console.log(description_day3);
            let temperature_day4 = data.daily[4].temp.day;
            let description_day4 = data.daily[4].weather[0].description;
            console.log(temperature_day4);
            console.log(description_day4);

            showData(temperature_day0,temperature_day1,temperature_day2,temperature_day3,temperature_day4,description_day1
            ,description_day2,description_day3,description_day4,description_day0,icon_day0);

           })
   }


    function showData(temperature_day0,temperature_day1,temperature_day2,temperature_day3,temperature_day4,description_day1
        ,description_day2,description_day3,description_day4, description_day0, icon_day0){
        document.getElementById("target0").innerHTML = Math.floor(temperature_day0) + "°C "+" " +description_day0 + icon_day0;
        document.getElementById("icon0").src = "http://openweathermap.org/img/wn/"+icon_day0+"@2x.png"
        document.getElementById("target1").innerHTML = Math.floor(temperature_day1) + "°C "+" " +description_day1;
        document.getElementById("target2").innerHTML = Math.floor(temperature_day2) + "°C "+" " +description_day2;
        document.getElementById("target3").innerHTML = Math.floor(temperature_day3) + "°C" +" " +description_day3;
        document.getElementById("target4").innerHTML = Math.floor(temperature_day4) + "°C"+" " +description_day4;

    }
    showData();

})
