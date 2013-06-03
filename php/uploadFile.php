<?php  
    if ($_FILES["files"]["error"] == UPLOAD_ERR_OK) { 
        $db = mysql_connect('localhost', 'root', 'pw_4_reserv');    
        mysql_select_db('reservation', $db);
        $id = mysql_real_escape_string($_POST['id']);
        $hash = mysql_real_escape_string($_POST['hash']);
        $name = $_FILES['files']['name'];
        $filename = $id . "_" . $name;
        if (mysql_fetch_array(mysql_query("select * from objekt where id = $id and admin_link = '$hash'"))) {
            mysql_query("insert into file values (null, $id, '$name', 'a description', '$filename')");
            move_uploaded_file($_FILES["files"]["tmp_name"], "../files/$filename");
        }
        echo mysql_error();
        $parts = preg_split("/\./", $filename);
        $extension = end($parts);
        echo "<div><div class='remove' onClick='alert(1337);'>X </div>";
        echo "<a href='files/$filename' target='blank' class='file $extension'>" . $filename . "</a></div>";
    } 
?>