const express = require('express');

const route = express.Router();
const fs = require('fs');
route.get('/:key',async(req,res) => {
    let rawdata = fs.readFileSync('data.json').toString();
    let rawtime = fs.readFileSync('time.json').toString();
    let key = req.params.key
    if(rawdata.length>2){
        let data = JSON.parse(rawdata)
        if(typeof data[key] == 'undefined')
            res.status(200).send("!!!KEY NOT FOUND!!!")
        else{
            let time = JSON.parse(rawtime);
            time_sec = Date.now();
            time_sec = Math.round(time_sec / 1000); 
            if(typeof time[key]=='undefined'||time[key]>time_sec){       
                delete data[key];
                fs.writeFileSync('data.json', JSON.stringify(data));
                res.status(200).send("SUCCESSFULLY DELETED!!");
            }
            else
                res.send("!!!THE KEY IS EXPIRED YOU CAN'T DELETE THAT KEY!!!")  
        }
        
    }
    else
        res.send("!!THE FILE IS EMPTY!!")
})
module.exports = route;