

    document.getElementById("run").addEventListener("click", function(){

        function getWeather(){
            const input = document.getElementById("input").value

            fetch("https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=113615b9a8fe80872073f5ccfc66be36")
                .then(response => response.json())
                .then(data =>{
                    console.log(data);
                })
        }
        getWeather();
})
