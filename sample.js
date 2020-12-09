const express=require('express')
const fs=require('fs');
let data = fs.readFileSync('data.json').toString();
let data1 = JSON.parse(data);
let e=data1['key1']["ttl"];
let seconds = new Date().getTime() / 1000;
