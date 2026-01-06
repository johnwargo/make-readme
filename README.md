# make-readme

Node module that creates a 'blank' `readme.md` file in the current folder.  Whenever I start a new project, I find myself manually creating a new `readme.md` file or copying one from another project. To simplify this process, I created this node module to automate creating a simple node module to do it for me. 

## Installation

To install the module, open a terminal window and execute the following command:

	npm install -g make-readme

## Usage

To use the module, open a terminal window, navigate to the folder where you want the file created then issue the following command:

	make-readme

The module will create the `readme` file and use the project folder as the project title (first heading) in the file. 

If you want, you can pass in the project name on the command line and the module will use it as the title (first heading) for the `readme` file:

	make-readme project_title

You can pass in the project title as a string:

	make-readme "My Project Title"

or you can simply pass each word of the title as a separate parameter on the command line and the module will concatenate all of the parameters into a single string:

	make-readme My Project Title

That's it, that's all there is to it. Enjoy!

## Modification History

v0.0.20 - 20170829: Deleted some console.log lines as they were distracting.

v0.0.19 - 20170829: The runtime environment check still isn't right, so I changed it up a bit to try to make it more flexible.

v0.0.18 - 20170825: The code that checked to see whether the module was executed directly from the command line with node was failing on macOS, so I rewrote it so it more accurately determined runtime state.

***

You can find information on many different topics on my [personal blog](http://www.johnwargo.com).

If you find this code useful and feel like thanking me for providing it, please consider <a href="https://www.buymeacoffee.com/johnwargo" target="_blank">Buying Me a Coffee</a>, or making a purchase from [my Amazon Wish List](https://amzn.com/w/1WI6AAUKPT5P9).
