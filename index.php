<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script type="text/javascript" src="js/jquery.js"></script>
    <link rel="stylesheet" type="text/css" href="css/styles.css" />
    <link rel="stylesheet" type="text/css" href="css/calendar.css" />
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/calendar.js"></script>
    <title>BookMe</title>
    <?php
        $db = mysql_connect('localhost', 'root', '');    
        mysql_select_db('reservation', $db);

        $isShow = isset($_GET['show']);
        $iSAdmin = isset($_GET['admin']);
    ?>
</head>
<body>
    <div id="head">
        Reservationssystem Ferienwohnungen
    </div>
    <div id="content">
        <?php
            if ($isShow) {
                include('show.php');              
            } else if ($iSAdmin) {
                include('admin.php');
            } else {
                include('welcome.php');
            }
        ?>
    </div>
    <div id="foot">
        &copy; 2013 by Florian Fankhauser
    </div>
        
</body>
</html>
