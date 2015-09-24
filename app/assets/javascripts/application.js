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

function dialog_div_for_shared_products(div, width){
  if (typeof width !== "undefined")
    $("#" + div).dialog( "option", "width", width );
  $("#" + div).dialog( "open" );
  return false;
}

function check_product_already_shared_or_not(product_id){
  $("#share_form_" + product_id).submit(function(e){
    e.preventDefault();
  });
  var form = $("#share_form_" + product_id);
  $.ajax({
    type: 'POST',
    url: form.attr('action'),
    data: form.serialize(),
    success: function(html){
      var exist = false;
      var share = false;
      $.each(html, function(index, value) {  
        if(html[index] == "already_shared")
          exist = true;
        else if(html[index] == "can_share"){
          share = true;
        }
        if(html[index] == "user_id"){
          user_id = index 
        }   
      });
      if(exist == true){
        $("#error_div_" + product_id).show();
      }else if(share == true) {
        window.location = '/products/' + product_id + '/share_product?user_id=' + user_id;
      }  
    }
  });
}
