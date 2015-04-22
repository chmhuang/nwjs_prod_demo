var gui = require('nw.gui');
var fs = require('fs');
var spawn = require('child_process').spawn
    
var main = function() {  
  var win = gui.Window.get();
  var winWidth = win.width;
  var winHeight = win.height;
  var halfWidth = winWidth / 2;
  var halfHeight = winHeight /2;
  $('body').css('height', winHeight);
  $('body').css('width', winWidth);
  $('#one').click(function() {
    $("#one").html('<p>'+"Running..."+'</p>');
    console.log("1 got clicked");
    echo    = spawn('python', ['sample.py'], {stdio:'inherit'}); // the second arg is the command
    echo.on('exit', function(msg) {
      console.log('one ended successfully');
      $("#one").html('<p>'+"DONE , flash time: xxx sec"+'</p>');
    });
  });
  $('#two').click(function() {
    console.log("2 got clicked");
    $("#two").html('<p>'+"Running..."+'</p>');
    becho    = spawn('bash', ['sample.sh'], {stdio:'inherit'}); // the second arg is the command
    becho.on('exit', function(msg) {
      console.log('2 ended successfully');
      $("#two").html('<p>'+"DONE, flash time: xxx sec"+'</p>');
    });
  });
  $('#three').click(function() {
    console.log("3 got clicked");
    $("#three").html('<p>'+"Executing..."+'</p>');
    adb_devices    = spawn('adb', ['logcat']); // the second arg is the command
    adb_devices.stdout.on('data', function(data) {
      $("#three").html('<p>'+"data, " + data +'</p>');
    });
    adb_devices.on('exit', function(msg) {
      console.log('3 ended successfully');
    });
  });
  $( "#four_form" ).submit(function(event) {
    alert( "Handler for .submit() called." );
    event.preventDefault();
  });
  
  /*
  $('#four').click(function() {
    console.log("4 got clicked");
    var fork = require('child_process').fork;
    var child = fork('./test.sh');
  });*/
};

$(document).ready(main);
