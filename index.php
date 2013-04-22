<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <script src="js/jquery.js"></script>
    <link rel="stylesheet" type="text/css" href="css/styles.css" />
    <link rel="stylesheet" type="text/css" href="css/calendar.css" />
    <script type="text/javascript" src="js/main.js"></script>
    <script type="text/javascript" src="js/calendar.js"></script>
    <script type="text/javascript" src="galleria/galleria-1.2.9.min.js"></script>
    <title>Insert title here</title>
</head>
<body>
    <div id="head">
        Reservationssystem Ferienwohnungen
    </div>
    <div id="content">
        <div class="head">
            <div class="title">
                Casa Capuns (Disentis)             
            </div>
            <div class="left center">
                <img src="images/casa_capuns.png" alt="Casa Capuns" style="width: 300px"/>
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
                                <input type="datetime" required="true" placeholder="Von"></input> 
                                bis 
                                <input type="datetime" required="true" placeholder="Bis"></input>
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
                <ul>
                    <li>Entr&eacute;e mit separatem Eingang &uuml;ber Aussentreppe</li>
                    <li>Wohnzimmer mit Essplatz und K&uuml;che</li>
                    <li>Schlafzimmer mit Doppelbett und Schrank</li>
                    <li>Dusche/WC</li>
                    <li>Kleiner Balkon Richtung S&uuml;den</li>
                    <li>Kellerraum und Waschk&uuml;che mit Waschmaschine und Tumbler</li>
                    <li>Schlafm&ouml;glichkeiten f&uuml;r 4 - 5 Personen: Schlafzimmer mit 
                    Doppelbett, Wohnzimmer mit Bettsofa ausziehbar f&uuml;r 2 Personen, 
                    zus&auml;tzliche Schlafm&ouml;glichkeit mit mobilem Klappbett</li>
                    <li>Beheizt mit Elektroheizung und/oder Holzofen aus Speckstein</li>
                    <li>Parkm&ouml;glichkeit in Autounterstand</li>
                </ul>
            </div>
        </div>
        <div class="widget">
            <div class="head">
                Fotos
            </div>
            <div class="content" >
                <div id="galleria">
                    <img src="images/1.png" />
                    <img src="images/2.png" />
                    <img src="images/3.png" />
                    <img src="images/4.png" />
                    <img src="images/5.png" />
                    <img src="images/6.png" />
                    <img src="images/7.png" data-title="Welcome to Menucool.com" data-description="description"/>
                </div>
            </div>
        </div>
        <div class="widget">
            <div class="head">
                Downloads
            </div>
            <div class="content">
                <a href="\Casa_Capuns.pdf" target="blank" class="file pdf">Dokumentation</a>
            </div>
        </div>
    </div>
    <div id="foot">
        &copy; 2013 by Florian Fankhauser
    </div>
        
</body>
</html>
