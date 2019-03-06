const express = require('express')
let ejs = require('ejs')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

// Add public files
app.use(express.static(__dirname + '/public'));

//installed ejs to read html files under views/user directory:
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Adding custom modules and variables
let definitions = require('./public/lib/definitions');
let jsMethods = require('./public/lib/methods');
let jsEvts = require('./public/lib/events');
let tabs = ['Javascript','CSS','CS','Definitions'];

// ROUTING
app.get('/definition/:word', function (req, res) {
    res.render('definition',{def:definitions[req.params.word]});
});

app.get('/js/method/:name', function (req, res) {
    var myFunc = function (str) {
        var newArr = [];
        var counter = 0;
        var space = '&nbsp;';
        var newLine = '<br />';
        for(let i=0; i<str.length; i++) {
            if (str[i]==='\n'){
                newArr.push(newLine)
            } else if (str[i]==='\t'){
                newArr.push(space + space)
            } else if (str[i]===' '){
            newArr.push(space)
            } else {
            newArr.push(str[i])
            }
        }
        return newArr.join('')
    }
    let methodString = jsMethods[req.params.name].method.toString();
    res.render('method',{method: jsMethods[req.params.name], str: myFunc(methodString)});
});

app.get('/js/event/:name', function (req, res) {
    var myFunc = function (str) {
        var newArr = [];
        var counter = 0;
        var space = '&nbsp;';
        var newLine = '<br />';
        for(let i=0; i<str.length; i++) {
            if (str[i]==='\n'){
                newArr.push(newLine)
            } else if (str[i]==='\t'){
                newArr.push(space + space)
            } else if (str[i]===' '){
            newArr.push(space)
            } else {
            newArr.push(str[i])
            }
        }
        return newArr.join('')
    }
    res.render('event',{event:jsEvts[req.params.name], str:myFunc(jsEvts[req.params.name].js)});
});

app.get('/jss/event/:name', function (req, res) {
    var myFunc = function (str) {
        var newArr = [];
        var counter = 0;
        var space = '&nbsp;';
        var newLine = '<br />';
        for(let i=0; i<str.length; i++) {
            if (str[i]===';'){
                newArr.push(str[i])
                newArr.push(newLine)
                for(var j=0;j<counter;j++){
                    newArr.push(space)
                }
            } else if (str[i]==='{'){
                newArr.push(str[i])
                newArr.push(newLine)
                counter +=2;
                for(var j=0;j<counter;j++){
                    newArr.push(space)
                }
            } else if (str[i]==='}'){
                newArr.push(newLine)
                counter -=2;
                for(var j=0;j<counter;j++){
                    newArr.push(space)
                }
                newArr.push(str[i])
            }else if (str[i]===' '){
            newArr.push(space)
            } else {
            newArr.push(str[i])
            }
        }
        return newArr.join('')
    }
    res.render('event',{event:jsEvts[req.params.name], str:myFunc(jsEvts[req.params.name].js)});
});

app.get("/", function (req, res) {
    let defs=[], meths=[], evts=[];
    let defKeys = Object.keys(definitions)
    defKeys.forEach(function(dKey){
        defs.push({link: dKey, word: definitions[dKey].word})
    })
    let methKeys = Object.keys(jsMethods)
    methKeys.forEach(function(mKey){
        meths.push({link: mKey, title: jsMethods[mKey].title})
    })
    let evtKeys = Object.keys(jsEvts)
    evtKeys.forEach(function(eKey){
        evts.push({link: eKey, title: jsEvts[eKey].title})
    })
    console.log('evts: ', jsEvts)
    res.render('index', {tabs:tabs, defs:defs, meths:meths, evts:evts});
});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.listen(process.env.PORT||port, ()=> console.log('running!'))