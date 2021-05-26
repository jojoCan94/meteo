prova.onclick = function(){

    let apiKey = "92a850489259bf758364760f38488b81";
    let city = document.getElementById('weather').value;
    let uri = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey;
    
    var request = new  XMLHttpRequest(); //abbiamo avviato l'istanza dell'oggetto request
    request.open('GET' , uri , true);

    request.onload = function () {

        if(request.status >= 200 && request.status < 400){

            var data = JSON.parse(this.response);
            meteo = data.weather[0].main;
            console.log(meteo);
            var temp = data.main.temp;
            temp = parseInt(temp) - 273;  //riporto in gradi centigradi
            
            switch(meteo){
                case 'Rain':
                    meteo = 'Piovoso';
                    break;
                case 'Clouds':
                    meteo = 'Nuvoloso';
                    break;
                case 'Clear':
                    meteo = 'Sereno';
                    break;
                case 'Snow':
                    meteo = 'Nevoso';
                    break;
                case 'Fog':
                    meteo = 'Nebbioso';
                break;
                default:
                    meteo = 'QUESTA TI MANCA!!'

            }
            ris = document.getElementById('ris').innerHTML = "A " + city + " il tempo è " + meteo + " e ci sono " + temp + " C°"
        
        
        
        
        
        
        
        
        
        }
        else {
            document.getElementById('ris').innerHTML = "errore generico";

        }
    }
    request.send();
}
