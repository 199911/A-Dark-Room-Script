function forceClick(selector) {
    $(selector).removeClass( "disabled" );
    $(selector).click();
}

// Earn resource every 10 second
setInterval(function(){
  forceClick('#trapsButton');
  forceClick('#gatherButton');
}, 10 * 1000);

// Keep the room warn, 
// I don't know does it help anything
setInterval(function(){
  forceClick('#lightButton');
}, 60*1000);

// Easy win, No sweat
setInterval(function(){
  forceClick('#attack_fists');
  forceClick('#attack_bone-spear');
}, 100);