/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$('document').ready(function() {
   $('.widget .head').click(function() {
       $(this).parent().children('.content').slideToggle();
   });
});

