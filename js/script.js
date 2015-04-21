var gui = require('nw.gui');
var main = function() {  
  var win = gui.Window.get();
  var winWidth = win.width;
  var winHeight = win.height;
  var halfWidth = winWidth / 2;
  var halfHeight = winHeight /2;
  $('body').css('height', winHeight);
  $('body').css('width', winWidth);
  $('#one').click(function() {
    console.log("1 got clicked");
    spawn = require('child_process').spawn
    ls    = spawn('python', ['echo.py'], {stdio:'inherit'}); // the second arg is the command
  });
  $('#two').click(function() {
    console.log("2 got clicked");
    spawn = require('child_process').spawn
    ls    = spawn('python', ['echo.py'], {stdio:'inherit'}); // the second arg is the command
  });
  $('#three').click(function() {     
    console.log("3 got clicked");
    spawn = require('child_process').spawn
    ls    = spawn('ls'); // the second arg is the command 
    ls.stdout.on('data', function (data) {    // register one or more handlers
      console.log('stdout: ' + data);
      $( "#three" ).html( "<p>"+data+"</p>" );
    });
    ls.on('exit', function (code) {
      console.log('child process exited with code ' + code);
    });

  });
  $('#four').click(function() {
    console.log("4 got clicked");
    var fork = require('child_process').fork;
    var child = fork('./test.sh');
  });
};

$(document).ready(main);
