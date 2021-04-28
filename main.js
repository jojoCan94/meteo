prova.onclick = function(){

    let apiKey = "92a850489259bf758364760f38488b81";
    let city = document.getElementById('weather').value;
    let uri = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey;
    
    var request = new  XMLHttpRequest(); //abbiamo avviato l'istanza dell'oggetto request
    request.open('GET' , uri , true);

    request.onload = function () {

        if(request.status >= 200 && request.status <400){

            var data = JSON.parse(this.response);
            var temp = data.main.temp;
            temp = parseInt(temp) - 273;
            ris = document.getElementById('ris').innerHTML = "A " + city + " ci sono " + temp + " C°"
        
        
        
        
        
        
        
        
        
        
        
        
        }
        else {
            document.getElementById('ris').innerHTML = "errore generico";

        }
    }
    request.send();
}
