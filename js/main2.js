/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$('document').ready(function() {
   $('.menu_item').click(function() {
       $('.selected').removeClass("selected");
       $(this).addClass("selected");
   });
});

