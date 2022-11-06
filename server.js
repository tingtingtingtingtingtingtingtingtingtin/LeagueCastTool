import { Champion } from './lib/champion.js';
// const Champion = require('./lib/champion')
import express from 'express';
// var express = require('express')
import bodyParser from 'body-parser'
// var bodyParser = require('body-parser')

const app = express()
const port = 3000
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {
    
   
  res.render('pages/index', {
  })
}
)
app.post('/create', (req, res) => {
    console.log( "/create  called thingy");
    var c0=new Champion(req.body.cname0);
    var c1=new Champion(req.body.cname1);
    var c2=new Champion(req.body.cname2);
    var c3=new Champion(req.body.cname3);
    var c4=new Champion(req.body.cname4);
    var c5=new Champion(req.body.cname5);
    var c6=new Champion(req.body.cname6);
    var c7=new Champion(req.body.cname7);
    var c8=new Champion(req.body.cname8);
    var c9=new Champion(req.body.cname9);
    console.log("boutta enter the array of champions")
    var champions = [
        {championName:c0.championName, abilityQ: c0.abilityQ.abilityName, abilityW:c0.abilityW.abilityName, abilityE:c0.abilityE.abilityName, abilityR: c0.abilityR.abilityName},
        {championName:c1.championName, abilityQ: c1.abilityQ.abilityName, abilityW:c1.abilityW.abilityName, abilityE:c1.abilityE.abilityName, abilityR: c1.abilityR.abilityName},
        {championName:c2.championName, abilityQ: c2.abilityQ.abilityName, abilityW:c2.abilityW.abilityName, abilityE:c2.abilityE.abilityName, abilityR: c2.abilityR.abilityName},
        {championName:c3.championName, abilityQ: c3.abilityQ.abilityName, abilityW:c3.abilityW.abilityName, abilityE:c3.abilityE.abilityName, abilityR: c3.abilityR.abilityName},
        {championName:c4.championName, abilityQ: c4.abilityQ.abilityName, abilityW:c4.abilityW.abilityName, abilityE:c4.abilityE.abilityName, abilityR: c4.abilityR.abilityName},
        {championName:c5.championName, abilityQ: c5.abilityQ.abilityName, abilityW:c5.abilityW.abilityName, abilityE:c5.abilityE.abilityName, abilityR: c5.abilityR.abilityName},
        {championName:c6.championName, abilityQ: c6.abilityQ.abilityName, abilityW:c6.abilityW.abilityName, abilityE:c6.abilityE.abilityName, abilityR: c6.abilityR.abilityName},
        {championName:c7.championName, abilityQ: c7.abilityQ.abilityName, abilityW:c7.abilityW.abilityName, abilityE:c7.abilityE.abilityName, abilityR: c7.abilityR.abilityName},
        {championName:c8.championName, abilityQ: c8.abilityQ.abilityName, abilityW:c8.abilityW.abilityName, abilityE:c8.abilityE.abilityName, abilityR: c8.abilityR.abilityName},
        {championName:c9.championName, abilityQ: c9.abilityQ.abilityName, abilityW:c9.abilityW.abilityName, abilityE:c9.abilityE.abilityName, abilityR: c9.abilityR.abilityName}
    ]
    console.log(req.body);
    res.render('pages/results', {
        champions: champions,
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})