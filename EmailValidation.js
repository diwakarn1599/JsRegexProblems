"use strict";
const prompt = require('prompt-sync')();
//get input from user
let emailId = prompt("Enter Email Id:");

try
{
    //regex pattern for email id
    let emailPattern = new RegExp('^abc([+. \-_]{1}\w+)?@[a-z0-9]+\.[a-z]{2,3}(\.[a-z]{2})?$');
    //test email id with pattern
    if(emailPattern.test(emailId))
        console.log('Email id is valid');
    else
        throw 'Error!!Email id is not valid';
}
catch(e)
{
    //catch the error and print it
    console.error(e);
}