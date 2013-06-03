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
                    <td>Bezeichnung:</td>
                    <td><input type="text" name="name" size="40" placeholder="Bezeichnung" required="true"/></td>                
                </tr>
                <tr>
                    <td>Beschreibung:</td>
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
                    <td><input type="text" name="name" size="40" value="<?php echo $objekt['NAME'];?>" required="true"/></td>                
                </tr>
                <tr>
                    <td>Beschreibung</td>
                    <td><textarea cols="50" rows="10" name="description"><?php echo $objekt['DESCRIPTION'];?></textarea></td>
                </tr>
                <tr>
                    <td/>
                    <td>
                        <input type="submit" id="save" onClick="saveChanges()" value="Änderungen speichern"/>
                    </td>
                </tr>
        </table>
    </div>
    <?php
            include('php/adminWidgets.php');
        }
    }
?>