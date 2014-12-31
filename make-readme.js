#!/usr/bin/env node

//========================================================================
// Make-Readme
//
// Node module that creates a 'blank' readme file in the current folder
//
// by John M. Wargo (www.johnwargo.com)
//========================================================================
var fs = require('fs'),
  path = require('path');

var fileName = "readme.md";

//Get the current folder
var currFolder = process.cwd();
//Calculate the readme file name
var theFile = path.join(currFolder, fileName);
//Does the file already exist?
if (!fs.existsSync(theFile)) {
  //Create the file
  var wstream = fs.createWriteStream(theFile);
  //Write some stuff to the file
  wstream.write(fileName + "\n");
  wstream.write("=========\n");
  wstream.write(" \n \n");
  wstream.write("* * *\n");
  wstream.write("ReadMe.md file created by make-readme by [John M. Wargo](http://www.johnwargo.com) - be sure to remove this line from the file");
  //close the file
  wstream.end();
  //All done
  console.log("\nreadme.md file created\n");

} else {
  console.log('\nThe readme.md file already exists in this folder');
}