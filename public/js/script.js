$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.tap-target').tapTarget();
    $('textarea#description').characterCounter();
    $('#description').val('');
    M.textareaAutoResize($('#description'));
    $('#title').val('');
    M.textareaAutoResize($('#title'));
    $('#technologies').val('');
    M.textareaAutoResize($('#technologies'));
    $('#email').val('');
    M.textareaAutoResize($('#email'));
    $('#budget').val('Rs.');
  });

  