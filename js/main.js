/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
var callRunning = false;

$('document').ready(function() {
    registerWidgetToggleEvents();
   
   $('document').ready(function() {
       Galleria.loadTheme('galleria/galleria.classic.min.js');
        Galleria.run('#galleria', {
            overlayBackground: '#FFFFFF'
        });
   });
});

function registerWidgetToggleEvents() {
   $('.widget .head').click(function() {
       $(this).parent().children('.content').slideToggle();
   });
}

function createObject() {
   if (!callRunning) {
        var name = $("[name='name']").val();
        if (name == "") {
            showError("Bitte Bezeichnung eingeben.");
        } else {
            var descr = $("[name='description']").val();
            callRunning = true;
            showLoading();
            $.get('php/create.php?name=' + name + "&description=" + descr, function(data) {
                if (data.length) {
                    showHint("Objekt wurde erstellt: " + data);
                }
                $.get('php/adminWidgets.php?admin=' + data, function(html) {
                    $('#content').append(html);   
                    registerWidgetToggleEvents();
                });
                callRunning = false;
                console.log($("[type=submit]"));
                $("[type=submit]").hide();
                $("[type=submit]").parent().append("<input type='submit' id='save' onClick='saveChanges()' value='Änderungen speichern'/>");
            });
        }
   }       
}

function saveChanges() {
    if (!callRunning) {
        var name = $("[name='name']").val();
        if (name == "") {
            showError("Bitte Bezeichnung eingeben.");
        } else {
            var descr = $("[name='description']").val();
            var id = $("[name='id']").val();
            var hash = $("[name='hash']").val();
            callRunning = true;
            showLoading();
            $.get('php/save.php?name=' + name + '&description=' + descr + '&id=' + id + '&hash=' + hash, function(data) {
               console.log(data);
               callRunning = false;
               showHint("Änderungen wurden gespeichert.");
            });            
        }        
    }
}

function uploadImage(sender) {
    if (sender.files.length > 0) {
        formdata = new FormData();
        formdata.append("images", sender.files[0]);
        formdata.append("id", $("[name='id']").val());
        formdata.append("hash", $("[name='hash']").val());
        $.ajax({
           url: "php/uploadImage.php",
           type: "POST",
           data: formdata,
           processData: false,
           contentType: false,
           success: function(res) {
               $('#images').append(res);
           }
        });        
    }
}

function uploadFile(sender) {
   if (sender.files.length > 0) {
       formdata = new FormData();
       formdata.append("files", sender.files[0]);
        formdata.append("id", $("[name='id']").val());
        formdata.append("hash", $("[name='hash']").val());
        $.ajax({
           url: "php/uploadFile.php",
           type: "POST",
           data: formdata,
           processData: false,
           contentType: false,
           success: function(res) {
               $('#files').append(res);
           }
        });
   }
}

function removeImage(sender) {
   $(sender).parent().hide();
}

function showHint(hint) {
    $('#hintbox').removeClass("red");
    $('#hintbox').addClass("green");
    $('#hintbox').html(hint);
    $('#hintbox').fadeIn();
}

function showError(error) {
    $('#hintbox').removeClass("green");
    $('#hintbox').addClass("red");
    $('#hintbox').html(error);
    $('#hintbox').fadeIn();    
}

function showLoading() {
    $('#hintbox').removeClass("green");
    $('#hintbox').removeClass("red");
    $('#hintbox').html("<img src='icon/loading_icon.gif'/ height='13px'> Lädt");
    $('#hintbox').fadeIn();   
}
