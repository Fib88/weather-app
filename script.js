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

            let temperature_day1 = data.daily[1].temp.day;
            let description_day1 = data.daily[1].weather[0].description;
            let icon_day1 = data.daily[1].weather[0].icon;

            let temperature_day2 = data.daily[2].temp.day;
            let description_day2 = data.daily[2].weather[0].description;
            let icon_day2 = data.daily[2].weather[0].icon;

            let temperature_day3 = data.daily[3].temp.day;
            let description_day3 = data.daily[3].weather[0].description;
            let icon_day3 = data.daily[3].weather[0].icon;

            let temperature_day4 = data.daily[4].temp.day;
            let description_day4 = data.daily[4].weather[0].description;
            let icon_day4 = data.daily[4].weather[0].icon;

            
            showData(temperature_day0,temperature_day1,temperature_day2,temperature_day3,temperature_day4,description_day1
            ,description_day2,description_day3,description_day4,description_day0,icon_day0,icon_day1,icon_day2,icon_day3,icon_day4);

           })
   }


    function showData(temperature_day0,temperature_day1,temperature_day2,temperature_day3,temperature_day4,description_day1
        ,description_day2,description_day3,description_day4, description_day0, icon_day0,icon_day1,icon_day2,icon_day3,icon_day4){

        document.getElementById("target0").innerHTML = Math.floor(temperature_day0) + "°C "+" " +description_day0;
        document.getElementById("icon0").src = "http://openweathermap.org/img/wn/"+icon_day0+"@2x.png"

        document.getElementById("target1").innerHTML = Math.floor(temperature_day1) + "°C "+" " +description_day1;
        document.getElementById("icon1").src = "http://openweathermap.org/img/wn/"+icon_day1+"@2x.png"

        document.getElementById("target2").innerHTML = Math.floor(temperature_day2) + "°C "+" " +description_day2;
        document.getElementById("icon2").src = "http://openweathermap.org/img/wn/"+icon_day2+"@2x.png"

        document.getElementById("target3").innerHTML = Math.floor(temperature_day3) + "°C" +" " +description_day3;
        document.getElementById("icon3").src = "http://openweathermap.org/img/wn/"+icon_day3+"@2x.png"

        document.getElementById("target4").innerHTML = Math.floor(temperature_day4) + "°C"+" " +description_day4;
        document.getElementById("icon4").src = "http://openweathermap.org/img/wn/"+icon_day4+"@2x.png"

    }
    showData();

})


function getWeekDay(){
    //Todo option1 add one day to the date
    let x = new Date();
    let today = x.getDay();
    let weekDays = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let tomorrow = (today)+1;
    let twoDaysFromNow = (today)-5;
    let threeDaysFromNow = (today)-4;
    let fourDaysFromNow = (today)-3;
    let fiveDaysFromNow = (today)-2;

    document.getElementById("weekday2").innerHTML = weekDays[twoDaysFromNow];
    document.getElementById("weekday3").innerHTML = weekDays[threeDaysFromNow];
    document.getElementById("weekday4").innerHTML = weekDays[fourDaysFromNow];

}

    getWeekDay();




