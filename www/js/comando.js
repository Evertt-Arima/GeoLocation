//Plugin Notification
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
  console.lgo(navigator.notification);
}

//Plugin GeoLocation
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
  console.log("plugin de geolocalização funcionando");
}

//Check Connection
function checkConnection(){

  var networkStates = navigator.connection.type;//Connection Type Information

  states[Connection.UNKNOWN]  = 'Desconhecida';
  states[Connection.ETHERNET] = 'Ethernet';
  states[Connection.WIFI]     = 'WiFi';
  states[Connection.CELL_2G]  = '2G';
  states[Connection.CELL_3G]  = '3G';
  states[Connection.CELL_4G]  = '4G';
  states[Connection.CELL]     = 'Generico';
  states[Connection.NONE]     = 'Sem conexão';

  if(states[networkStates] == 'Sem conexão'){
    navigator.notification.beep(2);
    navigator.notification.alert('Sem conexão com internet');    
  }
   else{
     navigator.notification.beep(1);
   }
  
}

window.onload = function(){
      //Show Map
      var onSuccess = function(position){
        L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

        var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
      };

      //Getting Coordinates
      navigator.geolocation.getCurrentPosition(onSuccess);
    }