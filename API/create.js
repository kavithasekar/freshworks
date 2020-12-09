const express = require('express');
const route = express.Router();
const fs = require('fs');

route.post('/',async(req,res)=>
{
    let rawdata = fs.readFileSync('data.json').toString();
    let rawtime = fs.readFileSync('time.json').toString();
    if(rawdata.length===0){
        fs.writeFileSync('data.json', JSON.stringify({}))
        rawdata = fs.readFileSync('data.json').toString();
    }
    if(rawtime.length===0){
        fs.writeFileSync('time.json', JSON.stringify({}))
        rawtime = fs.readFileSync('time.json').toString();
    }
    let data = JSON.parse(rawdata);
    let time = JSON.parse(rawtime);
    let key = Object.keys(req.body)[0].toString();
    let ttl = Object.values(req.body).length==1?-1:Object.values(req.body)[1];
    let value = Object.values(req.body)[0];
    if(typeof data[key] == 'undefined')
    {
        if(ttl!=-1){
            time_sec = Date.now();
            ttl = Math.round(time_sec / 1000)+ttl;
            time[key] = ttl;
            console.log(ttl);
        }
        data[key]  = value;
        res.send("!!!KEY ADDED TO THE FILE SUCCESSFULY!!!")
    }
    else
        res.send("!!!KEY NAME ALREADY EXIST!!!")
    fs.writeFileSync('data.json', JSON.stringify(data));
    fs.writeFileSync('time.json', JSON.stringify(time));
    
})

module.exports = route;





