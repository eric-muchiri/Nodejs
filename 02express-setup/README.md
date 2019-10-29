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
