
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
                    let longitude = data.city.coord;
                        console.log(longitude);
                    let temp = data.list;
                        console.log(temp);
                    showWeather()
                    loopWeather(temp)
                })
        }
        getWeather5Days();

        function showWeather(){
           document.getElementById("target2").innerHTML = name;
        }
        showWeather();



        function loopWeather(temp){
          let arr = [];
          for(let i=0;i<temp.length; i++){
              console.log(temp[i].main);
          }
        }
    })


