make-readme
===========

Node module that creates a 'blank' readme.md file in the current folder.  Whenever I start a new project, I find myself manually creating a new readme.md file or copying one from another project. To simplify this process, I created this node module to automate creating a simple node module to do it for me. 

Installation
------------
To install the module, open a terminal window and execute the following command:

	npm install -g make-readme

Usage
------------
To use the module, open a terminal window, navigate to the folder where you want the file created then issue the following command:

	make-readme

The module will create the readme file and use the project folder as the project title (first heading) in the file. 

If you want, you can pass in the project name on the command line and the module will use it as the title (first heading) for the readme file:

	make-readme project_title

You can pass in the project title as a string:

	make-readme "My Project Title"

or you can simply pass each word of the title as a separate parameter on the command line and the module will concatenate all of the parameters into a single string:

	make-readme My Project Title

That's it, that's all there is to it. Enjoy!

* * *
By [John M. Wargo](http://www.johnwargo.com) - if you like and/or use this module, why not pick up [one of my books](http://www.johnwargobooks.com)?