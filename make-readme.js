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

var eq = "=";
var stars3 = "* * *";
var endTxt = "By [John M. Wargo](http://www.johnwargo.com) - if you like and/or use this module, why not pick up [one of my books](http://www.johnwargobooks.com)?";

//Get the current folder
var currFolder = process.cwd();
console.log("Current folder: %s", currFolder);

//Create a new file

//Write some stuff to it

//save the file

//All done
console.log("\nAll done!\n");