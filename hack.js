function forceClick(selector) {
    $(selector).removeClass( "disabled" );
    $(selector).click();
}

setInterval(function(){
  forceClick('#gatherButton');
}, 10 * 1000);

setInterval(function(){
  forceClick('#trapsButton');
}, 1 * 1000);


// Keep the room warn, 
// I don't know does it help anything
setInterval(function(){
  forceClick('#lightButton');
}, 60*1000);

// Easy win, No sweat
setInterval(function(){
  forceClick('.weaponButton');
}, 100);