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
            
           })
   }


})
