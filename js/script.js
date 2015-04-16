var gui = require('nw.gui')
var main = function() {  
  var win = gui.Window.get()
  var winWidth = win.width;
  var winHeight = win.height;
  var halfWidth = winWidth / 2;
  var halfHeight = winHeight /2;
  $('body').css('height', winHeight);
  $('body').css('width', winWidth);
  $('#one').click(function() {
    console.log("1 got clicked");
    spawn = require('child_process').spawn,
    ls    = spawn('python', ['echo.py']); // the second arg is the command 
    ls.stdout.on('data', function (data) {    // register one or more handlers
      console.log('stdout: ' + data);
      $( "#one" ).html( "<p>"+data+"</p>" );
    });
  });

  $('#two').click(function() {
    console.log("2 got clicked");
    spawn = require('child_process').spawn,
    ls    = spawn('lsusb'); // the second arg is the command 
    ls.stdout.on('data', function (data) {    // register one or more handlers
      console.log('stdout: ' + data);
      $( "#two" ).html( "<p>"+data+"</p>" );
    });
  });

  $('#three').click(function() {
    console.log("3 got clicked");
    spawn = require('child_process').spawn,
    ls    = spawn('ls'); // the second arg is the command 
    ls.stdout.on('data', function (data) {    // register one or more handlers
      console.log('stdout: ' + data);
      $( "#three" ).html( "<p>"+data+"</p>" );
    });
  });
};

$(document).ready(main);
