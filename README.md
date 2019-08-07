# Simple Shopify Build Tool
The absolutely easiest build tool for building and deploying your theme to your Shopify store.

## Expected Project Structure
```
--project-folder/
  |--dist/ <-- this is the folder where files will go after a build
  |--src/
    |--assets/
    |--config/
    |--layout/
    |--locales/
    |--scripts/
    |--sections/
    |--snippets/
    |--styles/
    |--templates/
```

## Setup
1. Match your theme files to the expected project structure
2. Copy the gulpfile into the root folder of your project
3. Copy the package.json into the root folder of your project
> **NOTE:** IF YOU ALREADY HAVE A package.json file for your project,
simply copy the **devDependencies** section into your project's package.json
4. Run **npm install** to install dependencies
5. You're Ready to start developing and deploying.

## Commands
#### Compile Files
```
gulp build
```

## Detailed Explanation
This tool allows you to compile and deploy all your files to your Shopify theme. Here's what it does, in detail:

#### 1. SASS Files
Reads each sass file in the root of the *styles* folder, and puts together files required using the **@import** sass function. Example file:

```css
/*================ MODULES ================*/
@import './modules/header';
```
For the example above, let's say you have a **theme.scss** file in the root of the styles folder with the above code. The Gulp task would import all the files defined as above, compile the Sass, and create a new **theme.css** in the */dist/assets/* directory.

#### 2. JS Files
Reads each JavaScript file in the root of the **scripts** folder, and concatenates files required using the **// =require** function (from the gulp-include library). Example file:

```js
/*================ Sections ================*/
// =require sections/header.js

$(document).ready(function() {
	// some code
});
```
For the example above, let's say you have a file **theme.js** in the root of the scripts folder with the above code in it. That means the gulp task will look for a folder named *sections*, try to find a file named **header.js** in there, and then concatenate it into a new **theme.js** file that will go into the */dist/assets/* directory.

