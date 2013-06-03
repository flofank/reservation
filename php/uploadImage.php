<?php  
    if ($_FILES["images"]["error"] == UPLOAD_ERR_OK) { 
        $db = mysql_connect('localhost', 'reservation', 'pw_4_reserv');    
        mysql_select_db('reservation', $db);
        $id = mysql_real_escape_string($_POST['id']);
        $hash = mysql_real_escape_string($_POST['hash']);
        $name = $_FILES['images']['name'];
        $filename = $id . "_" . $name;
        if (mysql_fetch_array(mysql_query("select * from objekt where id = $id and admin_link = '$hash'"))) {
            mysql_query("insert into picture values (null, $id, '$name', 'a description', '$filename')");
            move_uploaded_file($_FILES["images"]["tmp_name"], "../images/$filename");
        }
        echo mysql_error();
?>
    <div class="image">
        <img class="thumb" alt="<?php echo $filename;?>" src="images/<?php echo $filename;?>">
        <div class="remove" onClick="removeImage(this);">X</div>
    </div>
<?php
    } 
?>