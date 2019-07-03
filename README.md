# Simple Shopify Build Tool
The absolutely easiest build tool for building and deploying your theme to your Shopify store.

## Expected Project Structure
```
--project-folder/
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

```sass
/*================ UTILS ================*/
@import './tools/functions';
@import './tools/mixins';

/*================ MODULES ================*/
@import './modules/header';
@import './modules/footer';
```
#### 2. JS Files
Reads each JavaScript file in the root of the **scripts** folder, and concatenates files required using the **// =require** function (from the gulp-include library). Example file:

```js
/*================ Sections ================*/
// =require sections/header.js

/*================ Templates ================*/
// =require templates/cart.js

$(document).ready(function() {
	// some code
});
```
