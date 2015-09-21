// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require bootstrap
//= require_tree .
//= require_self
$(document).ready(function(){
  var dialog = $( ".popup_dialog_div" ).dialog({
    autoOpen: false
    , modal: true
    , maxHeight: 600
    , position: { my: "center top+75", at: "center top", of: window }
  });
});  

function show_popup_dialog_div(div_id, width){
  if (typeof width !== "undefined")
    $("#" + div_id).dialog( "option", "width", width );
  $("#" + div_id).dialog( "open" );
  return false;
}
