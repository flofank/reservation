var selectedMonth;
var selectedYear;


var $CALENDAR = new Calendar();

function Calendar() {
    this.selectedMonth = (new Date()).getMonth();
    this.selectedYear = (new Date()).getFullYear();
    showMonth();
}

$CALENDAR.getStartDate = function(month, year) {
    start = new Date(year, month, 1);
    start.setTime(start.getTime() - 86400000 * (6 + start.getDay()));
    return start;
};

$CALENDAR.getEndDate = function(month, year) {
    start = getStartDate(month, year);
    end = new Date(start.getTime() + 48 * 86400000);
    return end;
};

$CALENDAR.showMonth = function() {
    var date = getStartDate(selectedMonth, selectedYear);
    var html = "";
    for (var w = 0; w < 7; w++) {
        html += getWeekHtml(new Date(date.getTime()));
        date.setDate(date.getDate() + 7);
    }
    $(".calendar tbody").html(html);
    $(".y" + selectedYear + ".m" + selectedMonth).addClass("bold");    
};



/////////////////////////////////////////
// Old methods
////////////////////////////////////////

function initCalendar() {
  selectedMonth = (new Date()).getMonth();
  selectedYear = (new Date()).getFullYear();
  date = getStartDate(selectedMonth, selectedYear);
  var calendar = $(".calendar tbody");
  html = "";
  for (var w = 0; w < 7; w++) {
    html += getWeekHtml(new Date(date.getTime()));
  }
  calendar.html(html);
  $(".week").show();
  console.log("." + selectedYear + "." + selectedMonth);
  $(".y" + selectedYear + ".m" + selectedMonth).addClass("bold");
}

function getWeekHtml(startdate) {
  console.log("getWeekHtml called with: " + startdate.toGMTString());
  var weekHtml = "";
  if (startdate.getDay() != 1) {
    console.log("Unvalid Week start: " + startdate.toGMTString());
  } else {
    date = startdate;
    weekHtml += "<tr class=\"week\" style=\"display: none\">";
    for (var d = 0; d < 7; d++) {
      weekHtml += "<td class=\"day";
      weekHtml += " y" + date.getFullYear() + " m" + date.getMonth() + " d"+ date.getDate() + "\">" + date.getDate() + "</td>";
      date.setTime(date.getTime() + 86400000);
    }
    weekHtml += "</tr>";
    return weekHtml;
  }
}

function nextMonth() {
  console.log("nexMonth called");
  $(".y" + selectedYear + ".m" + selectedMonth).removeClass("bold");
  previousEnd = getEndDate(selectedMonth, selectedYear);
  selectedMonth = (selectedMonth + 1) % 12;
  if (selectedMonth == 0) {
    selectedYear += 1;
  }
  end = getEndDate(selectedMonth, selectedYear);
  weekstart = new Date(previousEnd.getTime() + 86400000);
  console.log(weekstart);
  console.log(end);
  var switchcount = 0;
  while (weekstart < end) {
    $(".calendar tbody").append(getWeekHtml(weekstart));
    switchcount++;
  } 
  slideWeeksUp(switchcount);
  $(".y" + selectedYear + ".m" + selectedMonth).addClass("bold");
  
    bindSelectionEvent();
}

function slideWeeksUp(num) {
  $(".week:first").fadeOut(100, function() {
    this.remove();
    $(".week").slice(6,7).fadeIn(100);
    if (num > 1) {
      slideWeeksUp(--num);      
    }
  });
}

function debug(string) {
  $("#debug").html(string);
}

$(document).ready(function() {
  initCalendar();
  
    bindSelectionEvent();
  
  $(".forth").click(function() {
    nextMonth();
  });
});

function bindSelectionEvent() {
  $(".day").off('click');
  $(".day").click(function() {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      $(this).addClass("selected");
    }
  });
}


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
