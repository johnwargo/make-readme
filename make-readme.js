#!/usr/bin/env node

/* jshint node: true, strict: true, undef: true, unused: true */

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

var theHeading;

//=================================
// some variables
//=================================
//The file we'll be creating
var fileName = "readme.md";
//Used to write a carriage return to the output file
var slashN = '\n';

//=================================
// Launch file
//=================================
function launchFile() {
  //Used to build the command string to launch the readme file
  var cmdStr;
  //What OS are we running on?
  if (os.type().indexOf('Win') === 0) {
    //Are we running on Windows? then use start
    cmdStr = 'start ' + fileName;
  } else {
    //OS X or Linux, use open
    //cmdStr = 'open ./' + fileName;
    //Added the -e to help this work better on Linux
    cmdStr = 'open -e ./' + fileName;
  }
  console.log("Launching readme.md");
  var child = exec(cmdStr, function (error, stdout, stderr) {
    if (error !== null) {
      console.log("\nexec error: %s\n".error, error);
      process.exit(1);
    }
  });
}

//=================================
// Processing starts
//=================================
//Get the current folder
var currFolder = process.cwd();
//Calculate the readme file name, always use the current folder
var theFile = path.join(currFolder, fileName);

//Does the file already exist?
if (!fs.existsSync(theFile)) {
  //Sort out the command line arguments
  var userArgs;
  // Does the first command line item contain 'node'? Then we're testing!
  // if (process.argv[0].toLowerCase() === 'node' || process.argv[0].indexOf('node.exe') > -1) {
  if (process.argv[0].indexOf('node') > -1) {
    //What the first two items from the argument list (node and the .js file)
    userArgs = process.argv.slice(2);
  } else {
    //whack the first item off of the list of arguments
    //This removes just the make-readme.js entry
    userArgs = process.argv.slice(1);
  }
  //Figure out the header (title) for the readme file
  //Do we have anything on the command line?
  if (userArgs.length > 0) {
    //Then use it as our project name
    //concatenate the parameters into a single string
    theHeading = userArgs.join(' ');
  } else {
    //We didn't get anything on the command line, so just use the folder name
    if (os.type().indexOf('Win') === 0) {
      //basename returns the last part of the folder path on Windows
      theHeading = path.basename(currFolder).toUpperCase();
    } else {
      //basename returns the whole folder path on Posix OS, so we have to treat it differently
      //get the path as an array
      var pathParts = path.basename(currFolder).split(path.sep);
      //Grab the last entry in the array (the current folder name)
      theHeading = pathParts.slice(-1)[0].toUpperCase();
    }
  }
  //Now create the file
  var wstream = fs.createWriteStream(theFile);
  //Create the finish event that fires after the write completes
  wstream.on('finish', function () {
    console.log("File created");
    //Now that we've created the file, launch it...
    launchFile();
  });
  //Write some stuff to the file
  //First the name of the folder we're in
  wstream.write('# ' + theHeading + slashN);
  //A couple of blank lines
  wstream.write(slashN + slashN);
  //Horizontal rule
  wstream.write("***" + slashN + slashN);
  //shameless plug
  wstream.write("ReadMe.md file created by make-readme by [John M. Wargo](http://www.johnwargo.com) - be sure to remove this line from the file");
  //close the file
  wstream.end();
} else {
  console.log('The readme.md file already exists in this folder');
  //go ahead and launch the existing file
  launchFile();
}