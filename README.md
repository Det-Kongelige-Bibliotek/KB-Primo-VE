# KB-Primo-VE

A Primo customization package by Royal Danish Library.

Target Primo ve release: August release

The following instructions are intended for Unix-like operating systems. 

## Installation
- Clone or download this repository into the proper place in your [Primo Development Environment](https://github.com/ExLibrisGroup/primo-explore-devenv).
- Navigate into the directory where you cloned this repository.
- Run `npm install` to install development dependencies.

## Building the package
To build the package, navigate into the root directory (primo-explore-devenv), and run the following command.

     gulp run --view VIEWNAME --ve --browserify

## CSS preprocessing
We utilize [SASS](http://sass-lang.com/) (with the SCSS syntax) for CSS preprocessing. SASS files are located under [css/sass](https://github.com/Det-Kongelige-Bibliotek/primo-explore-rex/tree/master/css/sass). To start CSS preproccessing, install `sass` and run the following command in the root directory of the repository. 

     sass --watch ./css/sass:./css

**Note:** Preprocessing is not a requirement for building the package, and would only be needed when the stylesheets are modified. Also, [the resulting CSS file](https://github.com/Det-Kongelige-Bibliotek/primo-explore-rex/blob/master/css/rex.css) should not be modified directly, as the modifications would be overwritten when CSS preprocessing is performed.

## Running unit tests
In the root directory, run the following command to perform the unit tests.

    npm test

## Running E2E tests
Running the E2E tests require Chrome (or Chromium) to be available on the machine. In the root directory, do the following to run the E2E tests.

1- Run the following command to install depencencies for WebDriver. 
    
    ./node_modules/protractor/bin/webdriver-manager update

2- Run the following command to run E2E tests.

    ./node_modules/protractor/bin/protractor ./test/e2e/conf.js
## New Primo functionalities 
1- Showing an announcement bar and hiding it using cookie:
    * Related files: 
        * js: 
            1- announcement.service.js
            2- prmTopbarAfter.component.js  
        * html:
            1- announcement.html
        * css:
            1- kbdk-design.css
            2- _announcement.scss  
        * lables:
            1- nui.message.announcement
            2- nui.message.dismiss    
    *           
## License

This software is released under the [MIT License](http://www.opensource.org/licenses/MIT).
