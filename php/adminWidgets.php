<?php
    if (isset($_GET['admin'])) {
        $db = mysql_connect('localhost', 'root', '');    
        mysql_select_db('reservation', $db);
        $admin = $_GET['admin'];
        $res = mysql_query("select * from objekt where admin_link = '$admin'", $db);
        $objekt = mysql_fetch_array($res);
        $files = mysql_query("select * from file where objekt_id=" . $objekt['ID'] . " order by FILE_NAME asc");
        $pictures = mysql_query("select * from picture where objekt_id =" . $objekt['ID'] . " order by FILE_NAME asc");
?>
<div class="widget">
        <div class="head">
            Bilder
        </div>
        <div class="content">
            <?php
                while ($picture = mysql_fetch_array($pictures)) {
            ?>
                <div class="image">
                    <img class="thumb" alt="<?php echo $picture['NAME'];?>" src="images/<?php echo $picture['FILE_NAME'];?>">
                    <div class="remove" onClick="alert(<?php echo $picture['ID'];?>);">X</div>
                </div>
            <?php
                }            
            ?>
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
            <?php
                while ($file = mysql_fetch_array($files)) {
                    $filename = $file['FILE_NAME'];
                    $parts = preg_split("/\./", $filename);
                    $extension = end($parts);
                    $id = $file['ID'];
                    echo "<a href='files/$filename' target='blank' class='file $extension'>" . $file['DESCRIPTION'] . "</a>";
                    echo "<div class='remove' onClick='alert($id);'>X</div>";
                }    
            ?>
        </div>
    </div>
    <div class="widget">
        <div class="head">
            Links
        </div>
        <div class="content">
            Link zur Bearbeitung: <a href="index.php?admin=<?php echo $objekt['ADMIN_LINK'];?>">www.bookme.ch/index.php?admin=<?php echo $objekt['ADMIN_LINK'];?></a><br/>
            Link zur Reservation: <a href="index.php?show=<?php echo $objekt['RESERV_LINK'];?>">www.bookme.ch/index.php?show=<?php echo $objekt['RESERV_LINK'];?></a>
        </div>
    </div>
<?php
    }
?>