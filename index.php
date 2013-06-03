<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <script type="text/javascript" src="js/jquery.js"></script>
    <link rel="stylesheet" type="text/css" href="css/styles.css" />
    <link rel="stylesheet" type="text/css" href="css/calendar.css" />
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/calendar.js"></script>
    <title>BookMe - Das Reservationssystem</title>
    <?php
        $db = mysql_connect('localhost', 'reservation', 'pw_4_reserv');    
        mysql_select_db('reservation', $db);

        $isShow = isset($_GET['show']);
        $iSAdmin = isset($_GET['admin']);
        $isBook = isset($_GET['book']);
    ?>
</head>
<body>
    <div id="head">
        BookMe - Das Reservationssystem
    </div>
    <div id="content">
        <?php
            if ($isShow) {
                include('show.php');              
            } else if ($iSAdmin) {
                include('admin.php');
            } else if ($isBook) {
                include('book.php');
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
