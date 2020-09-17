
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
                    let country = data.city.country;
                        console.log(country);
                    let longitude = data.city.coord;
                        console.log(longitude);
                    let temp = data.list;
                        console.log(temp);
                    let timeStamp = data.list[0].dt_txt;
                        console.log(timeStamp);
                    showWeather(name)
                    loopWeather(temp,timeStamp)
                    //getTimeStamps(timeStamp);

                })
        }
        getWeather5Days();

        function loopWeather(temp,timeStamp){

          for(let i=0;i<temp.length; i++){
              console.log(temp[i].main);
              console.log(timeStamp);
          }
        }
        // function getTimeStamps(timestamp){
        //   for(let i=0;i<data.list.length;i++){
        //       console.log(timestamp)
        //   }
        // }


        function showWeather(name){
            document.getElementById("target2").innerHTML = name;
        }
    })



