<?php
    $db = mysql_connect('localhost', 'reservation', 'pw_4_reserv');    
    mysql_select_db('reservation', $db);
    $name = mysql_real_escape_string($_GET['name']);
    $description = mysql_real_escape_string($_GET['description']);
    $adminHash = md5($name . time() . "someAdminSalt13523");
    $reservHash = md5($name . time() . "someReservHash74625");
    mysql_query("insert into objekt values (null, '$name', '$description', sysdate(), '$adminHash', '$reservHash')");
    echo $adminHash;
?>
