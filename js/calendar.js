var selectedMonth;
var selectedYear;


$('document').ready(function() {
    $.getJSON('json/reservations.json', function(data) {
        $CALENDAR.setReservations(data);
        $CALENDAR.showMonth();
    });
    $(".forth").click(function() {$CALENDAR.nextMonth();});
    $(".back").click(function() {$CALENDAR.previousMonth();});
});

var $CALENDAR = new Calendar();

function Calendar() {
    this.monthNames = new Array('Januar','Februar','M&auml;rz','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember');
    this.selectedMonth = (new Date()).getMonth();
    this.selectedYear = (new Date()).getFullYear();
}

$CALENDAR.getStartDate = function() {
    start = new Date(this.selectedYear, this.selectedMonth, 1);
    start.setDate(start.getDate() - 6 - start.getDay());
    return start;
};

$CALENDAR.getEndDate = function() {
    start = this.getStartDate();
    end = new Date(start.getTime() + 48 * 86400000);
    return end;
};

$CALENDAR.showMonth = function() {
    $(".week").remove();
    $(".month .name").html(this.monthNames[this.selectedMonth] + ", " + this.selectedYear);
    var startdate = this.getStartDate();
    var html = "";
    for (var w = 0; w < 7; w++) {
        html += this.getWeekHtml(new Date(startdate.getTime()));
        startdate.setDate(startdate.getDate() + 7);
    }
    $(".calendar tbody").html(html);
    $(".y" + this.selectedYear + ".m" + this.selectedMonth).addClass("bold"); 
    this.markReservations();
};

$CALENDAR.getWeekHtml = function(startdate) {
    var weekHtml = "";
    if (startdate.getDay() == 1) {
      date = startdate;
      weekHtml += "<tr class=\"week\">"; //style=\"display: none\">";
      for (var d = 0; d < 7; d++) {
        weekHtml += "<td class=\"day";
        weekHtml += " y" + date.getFullYear() + " m" + date.getMonth() + " d"+ date.getDate() + "\">" + date.getDate() + "</td>";
        date.setTime(date.getTime() + 86400000);
      }
      weekHtml += "</tr>";
      return weekHtml;
    } else {
      console.log("Unvalid Week start: " + startdate.toGMTString());        
    }
};

$CALENDAR.previousMonth = function() {
    this.selectedMonth--;
    if (this.selectedMonth < 0) {
        this.selectedMonth = 11;
        this.selectedYear--;
    }
    this.showMonth();
};

$CALENDAR.nextMonth = function() {
    this.selectedMonth++;
    if (this.selectedMonth > 11) {
        this.selectedMonth = 0;
        this.selectedYear++;
    }
    this.showMonth();
};

$CALENDAR.setReservations = function(reservations) {
  this.reservations = reservations;
};

$CALENDAR.markReservations = function() {
    var calStartDate = this.getStartDate();
    var calEndDate = this.getEndDate();
    for (i in this.reservations) {
        var resStartDate = new Date(this.reservations[i].startDate);
        var resEndDate = new Date(this.reservations[i].endDate);
        if (resStartDate > calEndDate ) {
            break;
        }
        if (resEndDate < calStartDate) {
            continue;
        }
        if (resStartDate < calStartDate) {
            resStartDate = calStartDate;
        }
        if (resEndDate > calEndDate) {
            resEndDate = calEndDate;
        }
        while(resStartDate.getYear() < resEndDate.getYear() || resStartDate.getMonth() < resEndDate.getMonth() || resStartDate.getDate() <= resEndDate.getDate()) {
            $(".day.y" + resStartDate.getFullYear() + ".m" + resStartDate.getMonth() + ".d" + resStartDate.getDate()).addClass("booked");
            resStartDate.setDate(resStartDate.getDate() + 1);
        }
    }
};