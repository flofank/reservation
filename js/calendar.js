var selectedMonth;
var selectedYear;


$('document').ready(function() {
    $CALENDAR.showMonth();
    $.getJSON('json/reservations.json', function(data) {
        $CALENDAR.setReservations(data);
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
    this.bindSelectionEvent();
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

$CALENDAR.bindSelectionEvent = function() {
  $(".day").off('click');
  $(".day").click(function() {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      $(this).addClass("selected");
    }
  });
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
            console.log(resStartDate);
            $(".day.y" + resStartDate.getFullYear() + ".m" + resStartDate.getMonth() + ".d" + resStartDate.getDate()).addClass("booked");
            resStartDate.setDate(resStartDate.getDate() + 1);
        }
//        if (resStartDate < calStartDate) {
//            if (resEndDate < calEndDate) {
//                $(".day").first().nextUntil(".day.y" + resEndDate.getFullYear() + ".m" + resEndDate.getMonth() + ".d" + resEndDate.getDate()).addClass("booked");
//                this.markReservations(startDate, resEndDate)
//            } else {
//                $(".day").addClass("booked");
//            }
//        } else if (resEndDate < calEndDate) {
//            console.log(".day.y" + resEndDate.getFullYear() + ".m" + resEndDate.getMonth() + ".d" + resEndDate.getDate());
//            $(".day.y" + resStartDate.getFullYear() + ".m" + resStartDate.getMonth() + ".d" + resStartDate.getDate())
//                    .nextUntil(".day.y" + resEndDate.getFullYear() + ".m" + resEndDate.getMonth() + ".d" + resEndDate.getDate()).addClass("booked");
//        } else {
//            $(".day.y" + resEndDate.getFullYear() + ".m" + resEndDate.getMonth() + ".d" + resEndDate.getDate()).nextUntil().addClass("booked");
//        }
    }
};

/////////////////////////////////////////
// Old methods
////////////////////////////////////////

//function initCalendar() {
//  selectedMonth = (new Date()).getMonth();
//  selectedYear = (new Date()).getFullYear();
//  date = getStartDate(selectedMonth, selectedYear);
//  var calendar = $(".calendar tbody");
//  html = "";
//  for (var w = 0; w < 7; w++) {
//    html += getWeekHtml(new Date(date.getTime()));
//  }
//  calendar.html(html);
//  $(".week").show();
//  console.log("." + selectedYear + "." + selectedMonth);
//  $(".y" + selectedYear + ".m" + selectedMonth).addClass("bold");
//}
//

//
//function nextMonth() {
//  console.log("nexMonth called");
//  $(".y" + selectedYear + ".m" + selectedMonth).removeClass("bold");
//  previousEnd = getEndDate(selectedMonth, selectedYear);
//  selectedMonth = (selectedMonth + 1) % 12;
//  if (selectedMonth == 0) {
//    selectedYear += 1;
//  }
//  end = getEndDate(selectedMonth, selectedYear);
//  weekstart = new Date(previousEnd.getTime() + 86400000);
//  console.log(weekstart);
//  console.log(end);
//  var switchcount = 0;
//  while (weekstart < end) {
//    $(".calendar tbody").append(getWeekHtml(weekstart));
//    switchcount++;
//  } 
//  slideWeeksUp(switchcount);
//  $(".y" + selectedYear + ".m" + selectedMonth).addClass("bold");
//  
//    bindSelectionEvent();
//}
//
//function slideWeeksUp(num) {
//  $(".week:first").fadeOut(100, function() {
//    this.remove();
//    $(".week").slice(6,7).fadeIn(100);
//    if (num > 1) {
//      slideWeeksUp(--num);      
//    }
//  });
//}
//
//function debug(string) {
//  $("#debug").html(string);
//}
//
//$(document).ready(function() {
//  initCalendar();
//  
//    bindSelectionEvent();
//  
//  $(".forth").click(function() {
//    nextMonth();
//  });
//});
//
//function bindSelectionEvent() {
//  $(".day").off('click');
//  $(".day").click(function() {
//    if ($(this).hasClass("selected")) {
//      $(this).removeClass("selected");
//    } else {
//      $(this).addClass("selected");
//    }
//  });
//}


/////////////////////////////////
////Multiselection Solution
/////////////////////////////////
//var selecting = false;
//var startid;
//var endid;
//
//function selectDays(_startid, _endid) {
//  $(".selected").removeClass("selected");
//  if (_startid > _endid) {
//    var x = _endid;
//    _endid = _startid;
//    _startid = x;
//  }
//  $(".day").slice(_startid - 1, _endid).addClass("selected");
//}
//
//$(document).ready(function() {
//  $(".day").mousedown(function() {
//    selecting = true;
//    startid = parseInt($(this).attr("id"));
//    endid = startid;
//    debug("down");
//    selectDays(startid, endid);
//  }); 
//  
//  $(document).mouseup(function() {
//    selecting = false;
//    debug("up");
//  });
//  
//  $(".day").mouseenter(function() {
//    if(selecting) {
//      endid = parseInt($(this).attr("id"));
//      selectDays(startid, endid);
//    }
//  });  
//});
