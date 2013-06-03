<?php
    $db = mysql_connect('localhost', 'root', 'pw_4_reserv');    
    mysql_select_db('reservation', $db);
    $name = mysql_real_escape_string($_GET['name']);
    $description = mysql_real_escape_string($_GET['description']);
    $id = mysql_real_escape_string($_GET['id']);
    $hash = mysql_real_escape_string($_GET['hash']);
    if (mysql_query("update objekt set name = '$name', description = '$description' where id = $id and admin_link = '$hash';")) {
        echo 'true';
    } else {
        echo 'false';
        echo mysql_error();
    }
?>
