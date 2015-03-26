#!/usr/bin/env node

//========================================================================
// Make-Readme
//
// Node module that creates a 'blank' readme file in the current folder
//
// by John M. Wargo (www.johnwargo.com)
//========================================================================

"use strict";

var exec = require('child_process').exec,
  fs = require('fs'),
  os = require('os'),
  path = require('path');

//=================================
// some variables
//=================================
//Used to build the command string to launch the readme file
var cmdStr;
//The file we'll be creating
var fileName = "readme.md";
//Used to determine how to launch the readme file
var isWindows = (os.type().indexOf('Win') === 0);
//Used to write a carriage return to the output file
var slashN = '\n';

//=================================
// start doing stuff
//=================================
//Get the current folder
var currFolder = process.cwd();
//Calculate the readme file name, always use the current folder
var theFile = path.join(currFolder, fileName);
//Does the file already exist?
if (!fs.existsSync(theFile)) {
  //Figure out the header (title) for the readme file
  //Grab the last entry in the array (the current folder name)
  var theHeading = path.basename(currFolder).toUpperCase();
  //Make a line of equal signs that match the lengh of the header
  var theEqualSigns = new Array(theHeading.length + 1).join("=");
  //Now create the file
  var wstream = fs.createWriteStream(theFile);
  //Write some stuff to the file
  //First the name of the folder we're in
  wstream.write(theHeading + slashN);
  //Next a line of equal signs (=) to set the title as a heading
  wstream.write(theEqualSigns + slashN);
  //A couple of blank lines
  wstream.write(slashN + slashN);
  //Horizontal ruls
  wstream.write("* * *" + slashN);
  //shameless plug
  wstream.write("ReadMe.md file created by make-readme by [John M. Wargo](http://www.johnwargo.com) - be sure to remove this line from the file");
  //close the file
  wstream.end();
  //All done
  console.log("File created");
  //Now that we've created the file, launch it...
  if (isWindows) {
    cmdStr = 'start ' + fileName;
  } else {
    cmdStr = 'open ./' + fileName;
  }
  console.log("Launching readme.md");
  var child = exec(cmdStr, function (error, stdout, stderr) {
    if (error !== null) {
      console.log("\nexec error: %s\n".error, error);
      process.exit(1);
    }
  });
} else {
  console.log('The readme.md file already exists in this folder');
}