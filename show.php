<?php
    $res = mysql_query("select * from objekt where reserv_link = '" . $_GET['show'] . "'", $db);
    $objekt = mysql_fetch_array($res);
    if (empty($objekt)) { 
?>
<div class='head'>
    <div id='hintbox' class='red'>
        Für diese URL konnte kein Objekt gefunden werden.
    </div>
</div>
<?php
    } else {
        $images = mysql_query("select * from picture where objekt_id = " . $objekt['ID'] . " order by FILE_NAME asc");    
?>
<div class="head">
    <div class="title">
        <?php echo $objekt['NAME'] ?>          
    </div>
    <div class="left center">
        <?php
            $img = mysql_fetch_array($images);
            echo "<img src='images/" . $img['FILE_NAME'] . "' alt='" . $img['DESCRIPTION'] . "' style='width: 300px'/>";
        ?>        
    </div>
    <div class="right center">
        <div class="calendar-wrapper">
            <div class="month tripple_float">
                    <div class="side">
                            <div class="switch back"></div>
                    </div>
                    <div class="mid">
                            <div class="name">FEBRUARY</div>
                    </div>
                    <div class="side">
                            <div class="switch forth"></div>
                    </div>
                    <div class="nofloat"></div>
            </div>
            <table class="calendar" cellspacing="0">
                    <thead>
                            <tr>
                                    <th>MO</th>
                                    <th>DI</th>
                                    <th>MI</th>
                                    <th>DO</th>
                                    <th>FR</th>
                                    <th>SA</th>
                                    <th>SO</th>
                            </tr>
                    </thead>
                    <tbody>
                    </tbody>
            </table>
        </div>                
    </div>
    <div class="clearfloat"></div>
</div>
<div class="widget">
    <div class="head">
        Reservationsanfrage
    </div>
    <div class="content">
        <table class="form">
            <form action="" autocomplete="on">
                <tr>
                    <td>Name:</td>
                    <td><input type="text" size="40" placeholder="Name" required="true"></input></td>
                </tr>
                <tr>
                    <td>E-Mail:</td>
                    <td><input type="email" size="40" placeholder="E-Mail"></input></td>
                </tr>
                <tr>
                    <td>
                        Reservationszeit:
                    </td>
                    <td>
                        <input type="date" required="true" placeholder="Von"></input> 
                        bis 
                        <input type="date" required="true" placeholder="Bis"></input>
                    </td>
                </tr>
                <tr>
                    <td>Reservationsmitteilung:</td><td><textarea cols="50" rows="10"></textarea></td></tr>
                </tr>
                <tr>
                    <td></td><td><input type="submit" value="Anfrage abschicken"/></td>
                </tr>
            </form>
        </table>                
    </div>
</div>
<div class="widget">
    <div class="head">
        Beschreibung
    </div>
    <div class="content">
        <?php echo $objekt['DESCRIPTION'] ?>
    </div>
</div>
<div class="widget">
    <div class="head">
        Fotos
    </div>
    <div class="content" >
        <div id="galleria">
            <?php
                while($img = mysql_fetch_array($images)) {
                    echo "<img src='images/" . $img['FILE_NAME'] . "' data-title='" . $img['DESCRIPTION'] . "' />";
                }
            ?>
        </div>
    </div>
</div>
<div class="widget">
    <div class="head">
        Downloads
    </div>
    <div class="content">
        <?php
            $files = mysql_query("select * from file where OBJEKT_ID = " . $objekt['ID'] . " order by FILE_NAME desc");
            while ($file = mysql_fetch_array($files)) {
                $filename = $file['FILE_NAME'];
                $parts = preg_split("/\./", $filename);
                $extension = end($parts);
                echo "<a href='files/$filename' target='blank' class='file $extension'>" . $file['DESCRIPTION'] . "</a>";
            }
        ?>
    </div>
</div>
<?php
    }
?>