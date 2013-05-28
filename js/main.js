/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var callRunning = false;

$('document').ready(function() {
   $('.widget .head').click(function() {
       $(this).parent().children('.content').slideToggle();
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

function createObject() {
   if (!callRunning) {
        var name = $("[name='name']").val();
        if (name == "") {
            $('#hintbox').html("Bitte Bezeichnung eingeben.");
            $('#hintbox').removeClass("green");
            $('#hintbox').addClass("red");
            $('#hintbox').fadeIn();
        } else {
            var desc = $("[name='description']").val();
            callRunning = true;
            $.get('php/create.php?name=' + name + "&description=" + desc, function(data) {
                if (data.length) {
                    $('#hintbox').hide();
                    $('#hintbox').html("Objekt wurde erstellt: " + data);
                    $('#hintbox').removeClass("red");
                    $('#hintbox').addClass("green");
                    $('#hintbox').fadeIn();
                }
                $.get('php/adminWidgets.php?admin=' + data, function(html) {
                    $('#content').append(html);                    
                });
                callRunning = false;
            });
        }
   }       
}

