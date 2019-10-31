# Set up express and simple routing  

Express - A framework that gives:  
*A routing system  
*Ability to add different template template engines  
*Utility methods  
And much more  
  
## Using Express  

In your working directory:  
`npm init` - Takes you through a prompt to create  a simple nodejs application  
  
__Setting up express__  
We have a number of ways to install express from the npm repository  
  
1.`npm install express --save`  
2.Add as a dependency in your package.json file then `npm install`  
`"dependencies": {  
    "express": "*",  
    "body-parser": "*"  
  }`  
*body-parser* - Enables us to parse html, json, read data from forms e.t.c  
`*` - Enables us to get the latest version  

## Into express  

Import express and body-parser in your js file  
(applies to other js modules as well)  
`var app = express()` - Invoking express  

__Middleware__  
A function with acess to the response and request objects within the cycle  
They can:  
*Execute code  
*Change the reqests and response  
*Call the next middleware  
*End the cycle  

## Nodemon

A package to use with node:  
*Watches changes in files and automatically restarts the server  
__Install globally with__
`npm install nodemon -g`

## Routing static files  

After importing path we can use it.  
Add middleware:  
`app.use(express.static(path.join(__dirname, 'public')));`  
`__dirname` - We want the current directory  
`public` - The name of the folder. public assets can be placed here  
  
opening the browser on the url:  
`127.0.0.1:3000/hello.html` - Reads a file hello.html from the public folder  
