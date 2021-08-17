"use strict";
const prompt = require('prompt-sync')();
let validateWithoutSpace = () =>
{
    console.log("validateWithoutSpace");
    try
    {
        let pincode = prompt("Enter pincode:");
        //regex pattern for pincode not allowing spaces
        let pincodePattern = new RegExp('^[1-9]{1}[0-9]{5}$');
        //test pincode with pattern
        if(pincodePattern.test(pincode))
            console.log('pincode is valid');
        else
            throw 'Error!!pincode is not valid';
    }
    catch(e)
    {
        //catch the error and print it
        console.error(e);
    }
}
let validateWithSpace = () =>
{
    console.log("validateWithSpace");
    try
    {
        let pincode = prompt("Enter pincode:");
        //regex pattern for pincode not allowing spaces
        let pincodePattern = new RegExp('^[1-9]{1}[0-9]{2}\\s?[0-9]{3}$');
        //test pincode with pattern
        if(pincodePattern.test(pincode))
            console.log('pincode is valid');
        else
            throw 'Error!!pincode is not valid';
    }
    catch(e)
    {
        //catch the error and print it
        console.error(e);
    }
}
validateWithoutSpace();
validateWithSpace();
