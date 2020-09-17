
let mykey = config.SECRET_KEY;


    document.getElementById("run").addEventListener("click", function(){

        function getWeather5Days(data){
          let input = document.getElementById("input").value;

            fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ input +"&units=metric&appid="+ mykey)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let name = data.city.name;
                        console.log(name);
                    let timeStamp = data.list[0].dt_txt;
                        console.log(timeStamp);
                    let longitude = data.city.coord.lon;
                        console.log(longitude);
                    let latitude = data.city.coord.lat;
                        console.log(latitude);
                    showWeather(name)
                    getTimeStamps(timeStamp);
                })
        }

        getWeather5Days();

        function getTimeStamps(timestamp){
          for(let i=0;i<temp.length;i++){
              console.log(timestamp)
          }
        }
        function showWeather(name){
            document.getElementById("target2").innerHTML = name;
         }

         function OneCall(){
             fetch("https://openweathermap.org/api/one-call-api"+ input +"&units=metric&appid="+ mykey)
                 .then(response => response.json())
                 .then(data => {
                   console.log(data);
                 })
         }
         OneCall();
    })



