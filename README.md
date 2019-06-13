# Instagram Login With Selenium Js

To try the code,

First, you need to install NodeJs on your machine. To download NodeJs here is a download link  [NodeJS](https://nodejs.org/en/download/) 

Install NodeJs on your machine and create a new folder on your desktop.

After that, open your folder in Terminal (for mac) or Cmd (for windows).

And then you need to install selenium-webdriver with Node, below code will do this for you in Terminal or Cmd.
```
npm install selenium-webdriver
```

Also you need to install drivers for browsers. If you want to use Chrome to open instagram.com, you have to install this,
```
npm install chromedriver
```

Or you may open it with firefox,
```
npm install geckodriver
```
Or whatever you want to open it with.

Then copy login.js into your folder.

Sometimes you want to change your browser to test it. In that case do not forget to change this line in code 
```
.forBrowser('chrome')    /// for firefox, replace it with firefox
```
That's it. Write this line on command window which is openned with your folder.
```
node login
```
