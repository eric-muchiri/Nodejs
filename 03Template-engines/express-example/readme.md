# Template engines

We can use a number uf template engines e.g pug(jade), handlebars e.t.c  
We are going to use pug formerly jade  

## Installation  

```npm
npm install pug --save  
```

## using pug  

__Import__

```javascript 
var pug = require('pug');
```

__set the view engine(after installing pug)__  

```javascript
app.set('view engine', 'pug');
```

__Create a `views` folder and add an `index.pug` file__

```pug
h1 Welcome
```

__Referencing the file__
In the app.js

```javascript
app.get('/', function(req, res){
    res.render('index');
```

__Rendering on condition__
Set the condition

```javascript
showTitle: false
```

```pug
if showTitle
    h1 #{title}
```
