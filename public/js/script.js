$(document).ready(function(){
    $('.sidenav').sidenav();
    $('textarea#description').characterCounter();
    $('#description').val('');
    M.textareaAutoResize($('#description'));
  });

  