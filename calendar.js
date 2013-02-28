
function getStartDate() {
  start = new Date();
  start.setDate(1);
  start.setMilliseconds(start.getMilliseconds() - 86400000 * (6 + start.getDay()));
  return start;
}

function initCalendar() {
  date = getStartDate();
  var calendar = $(".calendar tbody");
  html = "";
  for (var w = 0; w < 7; w++) {
    html += "<tr class=\"week\">";
    for (var d = 0; d < 7; d++) {
      html += "<td class=\"day";
      if (date.getMonth() == 1) {
        html += " bold";
      }
      html += "\" id=\"" + date.getYear() + "." + (date.getMonth() + 1) + "."+ date.getDate() + "\">" + date.getDate() + "</td>";
      date.setMilliseconds(date.getMilliseconds() + 86400000);
    }
    html += "</tr>";
  }
  calendar.html(html);
}

function debug(string) {
  $("#debug").html(string);
}

$(document).ready(function() {
  initCalendar();
  
  $(".day").click(function() {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      $(this).addClass("selected");
    }
  });
});


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
