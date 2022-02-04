function sendToServer(state) {
    var KEY = "Q4YBHYZSCCO9Q2XW";
    //criar um objeto capaz de enviar dados via requisição HTTP GET
    const http = new XMLHttpRequest();
    //prepara um GET passando a váriavel lux como ultimo paramentro do link
    http.open("GET","https://api.thingspeak.com/update?api_key="+KEY+"&field1=0"+state);
    //envia um GET
    http.send();
    //quando a requisição retornar ele chama o console e imprime o valor gerado
    http.onload = console.log(http.responseText+" "+state)
   
    }
