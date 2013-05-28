<?php
    $admin = $_GET['admin'];
    if (empty($admin)) {
        //Show create object form
?>
    <div class="head">
        <div class="title">
            Objekt erstellen
        </div>
        <div id="hintbox" class="green hidden">
            Hier steht ein Hinweis zu den gemachten Eingaben.
        </div>
        <table class="form">
            <tr>
                <td>Bezeichnung</td>
                <td><input type="text" name="name" size="40"/></td>                
            </tr>
            <tr>
                <td>Beschreibung</td>
                <td><textarea cols="50" rows="10" name="description"></textarea></td>
            </tr>
            <tr>
                <td/>
                <td>
                    <input type="submit" id="create" value="Objekt erstellen" onClick="createObject();"/>
                </td>
            </tr>
        </table>
    </div>
<?php
    } else {
        $res = mysql_query("select * from objekt where admin_link = '$admin'", $db);
        $objekt = mysql_fetch_array($res);
        if (empty($objekt)) { 
            //Display invalid link error
?>
    <div class='head'>
        <div id='hintbox' class='red'>
            Für diese URL konnte kein Objekt gefunden werden.
        </div>
    </div>
<?php
        } else {
            //Show change object form
?>
    <div class="head">
        <div class="title">
            Objekt bearbeiten
        </div>
        <div id="hintbox" class="green hidden"></div>
        <table class="form">
            <tr>
                <td>Bezeichnung</td>
                <td><input type="text" name="title" size="40"/></td>                
            </tr>
            <tr>
                <td>Beschreibung</td>
                <td><textarea cols="50" rows="10" name="beschreibung"></textarea></td>
            </tr>
            <tr>
                <td/>
                <td>
                    <input type="submit" id="save" name="save" value="Änderungen speichern"/>
                </td>
            </tr>
        </table>
    </div>
    <div class="widget">
        <div class="head">
            Bilder
        </div>
        <div class="content">
            <div class="image">
                <img class="thumb" alt="1" src="images/1.png">
                <div class="remove" onClick="alert(1);">X</div>
            </div>
            <div class="image">
                <img class="thumb" alt="2" src="images/2.png">
                <div class="remove" onClick="alert(2);">X</div>
            </div>
            <div class="image">
                <img class="thumb" alt="3" src="images/3.png">
                <div class="remove" onClick="alert(3);">X</div>
            </div>
            <div class="image">
                <img class="thumb" alt="4" src="images/4.png">
                <div class="remove" onClick="alert(4);">X</div>
            </div>
            <div class="image">
                <img class="thumb" alt="5" src="images/5.png">
                <div class="remove" onClick="alert(5);">X</div>
            </div>
            <div class="image">
                <img class="thumb" alt="6" src="images/6.png">
                <div class="remove" onClick="alert(6);">X</div>
            </div>
            <form action="#">
                <input type="file" name="image" id="imageInput"><br>
                <input type="submit" value="Hinzufügen">
            </form>
        </div>
    </div>
    <div class="widget">
        <div class="head">
            Dateien
        </div>
        <div class="content">
            ..             
        </div>
    </div>
    <div class="widget">
        <div class="head">
            Links
        </div>
        <div class="content">
            Link zur Bearbeitung: <a href="www.bookme.ch/admin?id=fd0edde9ab9ede99">www.bookme.ch/admin?id=fd0edde9ab9ede99</a><br/>
            Link zur Reservation: <a href="www.bookme.ch/book?id=fd0edde9ab9ede99">www.bookme.ch/book?id=fd0edde9ab9ede99</a>
        </div>
    </div>
<?php
        }
    }
?>