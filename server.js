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
let domItems = require('./public/lib/dom');
let cssRules = require('./public/lib/css');
let tabs = ['Javascript','CSS','CS','Definitions','DOM'];

var methodToString = function (str) {
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

// ROUTING
app.get('/definition/:word', function (req, res) {
    res.render('definition',{def:definitions[req.params.word]});
});

app.get('/js/method/:name', function (req, res) {
    let methodString = jsMethods[req.params.name].js.toString();
    res.render('method',{method: jsMethods[req.params.name], str: methodToString(methodString)});
});

app.get('/js/event/:name', function (req, res) {
    res.render('event',{event:jsEvts[req.params.name], str:methodToString(jsEvts[req.params.name].js)});
});

app.get('/dom/:name', function (req, res) {
    res.render('dom',{dom:domItems[req.params.name], str:methodToString(domItems[req.params.name].js)});
});

app.get('/css/:name', function (req, res) {
    console.log(req.params.name)
    res.render('css',{css:cssRules[req.params.name], str:methodToString(cssRules[req.params.name].code)});
});

app.get("/", function (req, res) {
    let defs=[], meths=[], evts=[], doms=[], cssItems=[];

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
    let domEvts = Object.keys(domItems)
    domEvts.forEach(function(domKey) {
        doms.push({link: domKey, title:domItems[domKey].title})
    })
    let cssKeys = Object.keys(cssRules)
    cssKeys.forEach(function(cssKey){
        cssItems.push({link: cssKey, title: cssRules[cssKey].title})
    })
    console.log(cssItems)
    res.render('index', {tabs:tabs, defs:defs, meths:meths, evts:evts, dom:doms, css:cssItems});
});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.listen(process.env.PORT||port, ()=> console.log('running!'))