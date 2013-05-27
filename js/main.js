/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$('document').ready(function() {
   $('.widget .head').click(function() {
       $(this).parent().children('.content').slideToggle();
   });
   
   $('#create').click(function() {
      $('.widget').show(); 
      $(this).hide();
      $('#save').fadeIn();
      $('#hintbox').html("Objekt wurde erstellt.");
      $('#hintbox').fadeIn();
   });
   
   $('#save').click(function() {
       $('#hintbox').hide();
       $('#hintbox').html("Änderungen wurden gespeichert.");
       $('#hintbox').fadeIn();
   });
   
   $('document').ready(function() {
       Galleria.loadTheme('galleria/galleria.classic.min.js');
        Galleria.run('#galleria', {
            overlayBackground: '#FFFFFF'
        });
   });
});

