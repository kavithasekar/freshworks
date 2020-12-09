const express = require('express');

const route = express.Router();
const fs = require('fs');
route.get('/:key',async(req,res) => {
    let rawdata = fs.readFileSync('data.json').toString();
    let rawtime = fs.readFileSync('time.json').toString();
    let key = req.params.key
    if(rawdata.length>2){
        let data = JSON.parse(rawdata)
        let time = JSON.parse(rawtime)
        if(typeof data[key] == 'undefined')
            res.status(200).send("!!!KEY NOT FOUND!!!")
        else{
            time_sec = Date.now();
            time_sec = Math.round(time_sec / 1000);
            console.log(time[key])
            if(typeof time[key]=='undefined'||time[key]>time_sec)
                res.status(200).send(data[key]);
            else{
                time[key]=-1;
                fs.writeFileSync('time.json', JSON.stringify(time));
                res.status(200).send("KEY HAS EXPIRED");
            }
        }
    }
    else
        res.send('THIS FILE IS EMPTY');
    

})
module.exports = route;