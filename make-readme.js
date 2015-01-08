#!/usr/bin/env node

//========================================================================
// Make-Readme
//
// Node module that creates a 'blank' readme file in the current folder
//
// by John M. Wargo (www.johnwargo.com)
//========================================================================

"use strict";

var fs = require('fs'),
  path = require('path');

//The file we'll be creating
var fileName = "readme.md";

//Get the current folder
var currFolder = process.cwd();
//Calculate the readme file name
var theFile = path.join(currFolder, fileName);
//Now figure out the title for the readme file
//Split the path into multiple parts (using path delimeter)
var pathParts = currFolder.split(path.sep);
//Then grab the last entry in the array
var theHeading = pathParts[pathParts.length-1];
//Make a line of equal signs that match the lengh of the header
var theEqualSigns = new Array(theHeading.length + 1).join("=");

//Does the file already exist?
if (!fs.existsSync(theFile)) {
  //Create the file
  var wstream = fs.createWriteStream(theFile);
  //Write some stuff to the file
  //First the name of the folder we're in
  wstream.write(theHeading + "\n");
  //Next a line of equal signs (=) to set the title as a heading
  wstream.write(theEqualSigns + "\n");
  //A couple of blank lines
  wstream.write(" \n \n");
  //Horizontal ruls
  wstream.write("* * *\n");
  //shameless plug
  wstream.write("ReadMe.md file created by make-readme by [John M. Wargo](http://www.johnwargo.com) - be sure to remove this line from the file");
  //close the file
  wstream.end();
  //All done
  console.log("\nreadme.md file created\n");
} else {
  console.log('\nThe readme.md file already exists in this folder');
}