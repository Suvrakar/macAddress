const express = require("express")
var macaddress = require('macaddress');

const app = express()

let macAddress = 0;

let arr = [0,1,2];



macaddress.one(function (err, mac) {
    console.log("Mac address for this host: %s", mac);  
    // macAddress=mac;
  });


if(arr[0]!==macAddress){
  console.log("New Device")
  arr.push(macAddress)
}
if(arr[0]===macAddress){
  console.log("Your Device 1")
}
if(arr[1]===macAddress){
  console.log("Your Device 2")
}
else{
  console.log("You can not Enter")
}

app.listen(3000, ()=>{
  console.log("Listening");
})