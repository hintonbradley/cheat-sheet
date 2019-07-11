let dom = {
    childNodes: {
        title: 'Child Nodes',
        name: 'Child Nodes',
		link: 'childNodes',
        description: "A method that returns all child elements of the element you have targeted.",
        button: true,
        onLoad: ``,
        html: `<div id="" class="wrapper">
            <div id="box-wrapper">
            <div id="first" style="margin: 0 auto; padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" class="box">First</div>
            <h3>This is an h3 tag</h3>
            <div style="margin: 0 auto; padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" id="middle" class="box">Middle</div>
            <p style="margin-bottom: 0;">This is a p tag</p>
            <div id="last" style="margin: 0 auto; padding-left: 15px; border: 1px solid black; height: 100px; width: 100px;" class="box">Last
                <div id="inner" style="background: violet; border: 1px solid black; height: 50px; width: 50px;" class="box">inner</div></div>
        </div>
        <div id="return">
        </div>
    </div>`,
        method: `function () {
            var el = document.querySelector('#box-wrapper');
            el.childNodes.forEach(function (box) {
                if(box.nodeName=="DIV") {
                    console.log(box)
                    box.style.background = "lightblue";
                }
            })
        }`,
		js:`var el = document.querySelector('#box-wrapper');
        el.childNodes.forEach(function (box) {
            if(box.nodeName=="DIV") {
                console.log(box)
                box.style.background = "lightblue";
            }
        })`
    },
    document: {
        title: 'Document',
        name: 'Document',
		link: 'document',
        description: "See <a href='../definition/document'>Document</a>.",
        button: false,
        onLoad: `console.log("document is: ", document)`,
        html: `<div class="wrapper"><p>Open console to view</p></div>`,
        method: ``,
		js:`console.log(document)`
    },
    domain: {
        title: 'Domain',
        name: 'Domain',
		link: 'domain',
        description: "Returns the <a href='../definition/domainName'>domain name</a> the webpage is running on.",
        button: true,
        onLoad: ``,
        html: `<div class="wrapper">Document.domain is:<div id="result"></div></div>`,
        method: `function () {
            var result = document.getElementById('result');
            result.innerText = document.domain;
        }`,
		js:`document.domain`
    },
	getElementById: {
        title: 'Get Element By Id',
        name: 'Get Element By Id',
		link: 'getElementById',
        description: "A Document method that returns an element that has the referenced id. If no element is found, the method returns null.",
        button: true,
        onLoad: ``,
        html: `<div class="wrapper">
                    <div style="padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" class="in-bl box">First</div>
                    <div style="padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" id="middle" class="in-bl box">Middle</div>
                    <div style="padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" class="in-bl box">Last</div>
                    <div id="return">
                    </div>
                </div>`,
        method: `function () {
            var el = document.getElementById('middle');
            el.style.background = "red";
            console.log(el)
        }`,
		js:`var el = document.getElementById('middle');
        el.style.background = "red";`
    },
    htmlCollection: {
        title: 'HTML Collection',
        name: 'HTML Collection',
		link: 'htmlCollection',
        description: "An HTML collection is an array like object that contains a list of HTML elements in document order. It also has methods and properties for selecting from the list.<br>i.e: document.getElementByTagName() will return an HTML Collection.",
        button: true,
        onLoad: `console.log(document.link)`,
        html: `<div class="wrapper"><p id="result">View in console.</p><div>
        <div><a href="/dom/links" class='test-link'>First link</a></div>
        <div><a href="/dom/links" class='test-link'>Second link</a></div>
        <div><a href="/dom/links" class='test-link'>Third link</a></div>
        <div><a href="/dom/links" class='test-link'>Fourth link</a></div></div></div>`,
        method: `function () {
            var result = document.getElementById('result');
            result.innerText = document.links
        }`,
		js:`document.links`
    },
    links: {
        title: 'Links',
        name: 'Links',
		link: 'links',
        description: "Returns all links in a data type similar to an array. Note if you want to use array properties and method on the returned data type, you must first change it to an array. (View in console)",
        button: true,
        onLoad: `console.log(document.links)`,
        html: `<div class="wrapper">Result is: <div id="result" class="mb-20" style="min-height: 24px;"></div><div>
        <div><a href="/dom/links" class='test-link'>First link</a></div>
        <div><a href="/dom/links" class='test-link'>Second link</a></div>
        <div><a href="/dom/links" class='test-link'>Third link</a></div>
        <div><a href="/dom/links" class='test-link'>Fourth link</a></div></div></div>`,
        method: `function () {
            var result = document.getElementById('result');
            result.innerText = document.links
        }`,
		js:`document.links`
    },
    nodeName: {
        title: 'Node Name',
        name: 'Node Name',
		link: 'nodeName',
        description: `Returns the node name of the element targeted.`,
        button: true,
        onLoad: ``,
        html: `<div style="border: 1px solid black;" id="nodes-wrapper">
        <h1 class="mlr-20 in-bl">H1 tag</h1>
        <div style="padding-top: 16px;" class="mlr-20 in-bl">Div tag</div>
        <p style="padding-top: 16px;" class="mlr-20 in-bl">P tag</p>
    </div>
    <div id="result"><h5>Result<h5></div>
    `,
        method: `function() {
            var n = document.getElementById('nodes-wrapper');
            var r = document.getElementById('result');
            n.childNodes.forEach(function (el) {
                if(el.nodeName!='#text') {
                    var newEl = createElement('p');
                    newEl.innerText = el.nodeName;
                    newEl.setAttribute('class', 'in-bl mlr-20');
                    r.appendChild(newEl)
                }
            })
            
        }`,
        js: `if(el.nodeName!='#text') {
    var newEl = createElement('p');
    newEl.innerText = el.nodeName;
    r.appendChild(newEl)
}`
    },
    nthChild: {
        title: 'nth-child',
        name: 'nth-child',
		link: 'nth-child',
        description: `A selector that matches the 'nth' child (regardless of it's type) of it's parent.`,
        button: true,
        onLoad: ``,
        html: `<div>
        <input type="text" value="First">
<input type="text" value="Second">
<input type="text" value="Third">
<input type="text" value="Fourth">
        </div>`,
        method: `function() {
            var inputs = document.querySelectorAll('input:nth-child(2)');
            for (var i=0; i<inputs.length; i++) {
                inputs[i].style.background="lightgreen";
            }
        }`,
        js: `var inputs = document.querySelectorAll('input:nth-child(2)');`
    },
    parentNode: {
        title: 'Parent Node',
        name: 'Parent Node',
		link: 'parentNode',
        description: "A method that returns the parent element of the element you have targeted.",
        button: true,
        onLoad: ``,
        html: `<div class="wrapper">
        <div style="margin: 0 auto; padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" class="box">First</div>
        <div style="margin: 0 auto; padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" id="middle" class="box">Middle</div>
        <div id="last" style="margin: 0 auto; padding-left: 15px; border: 1px solid black; height: 100px; width: 100px;" class="box">Last
            <div id="inner" style="background: violet; border: 1px solid black; height: 50px; width: 50px;" class="box">inner</div></div>
        <div id="return">
        </div>
    </div>`,
        method: `function () {
            var el = document.querySelector('#inner');
            el.parentNode.style.background = "yellow";
        }`,
		js:`var el = document.querySelector('#inner');
el.parentNode.style.background = "yellow";`
    },
    querySelector: {
        title: 'Query Selector',
        name: 'Query Selector',
		link: 'querySelector',
        description: "A method that returns the <b>first</b> element (one only) that matches the specified selector. Can be used with class (.) or id (#) shortcuts or with element tags ('li'), etc.",
        button: true,
        onLoad: ``,
        html: `<div class="wrapper">
                    <div style="padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" class="in-bl box">First</div>
                    <div style="padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" id="middle" class="in-bl box">Middle</div>
                    <div id="last" style="padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" class="in-bl box">Last</div>
                    <div id="return">
                    </div>
                </div>`,
        method: `function () {
            var el = document.querySelector('#last');
            el.style.background = "yellow";
        }`,
		js:`var el = document.querySelector('#last');
        el.style.background = "yellow";`
    },
    querySelectorAll: {
        title: 'Query Selector All',
        name: 'Query Selector All',
		link: 'querySelectorAll',
        description: "A method that returns all elements that matches the specified selector. Can be used with class (.) or id (#) shortcuts or with element tags ('li'), etc.",
        button: true,
        onLoad: ``,
        html: `<div class="wrapper">
                    <div style="padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" class="in-bl box">First</div>
                    <div style="padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" id="middle" class="in-bl box">Middle</div>
                    <div id="last" style="padding-top: 34px; border: 1px solid black; height: 100px; width: 100px;" class="in-bl box">Last</div>
                    <div id="return">
                    </div>
                </div>`,
        method: `function () {
            var el = document.querySelectorAll('.box');
            el.forEach(function (box) {
                box.style.background = "yellow";
            })
        }`,
		js:`var el = document.querySelectorAll('.box');
        el.forEach(function (box) {
            box.style.background = "yellow";
        })`
    },
    tagName: {
        title: 'Tag Name',
        name: 'Tag Name',
		link: 'tag-name',
        description: "A Node method that returns the name of the tag of the node.<br>Note: all results will be capitalized.",
        button: true,
        onLoad: ``,
        html: `<div class="wrapper">Result is: <div id="result" class="mb-20" style="min-height: 24px;"></div><div></div></div>`,
        method: `function () {
            var result = document.getElementById('result');
            result.innerText = result.nodeName
        }`,
		js:`document.getElementById('result').nodeName`
    },
    title: {
        title: 'Title',
        name: 'Title',
		link: 'title',
        description: "Returns the title of the current page.",
        button: true,
        onLoad: ``,
        html: `<div class="wrapper">document.title is:<div id="result"></div></div>`,
        method: `function () {
            var result = document.getElementById('result');
            result.innerText = document.head;
        }`,
		js:`document.title`
    },
    url: {
        title: 'URL',
        name: 'URL',
		link: 'url',
        description: "Returns the complete URL the webpage is running on.",
        button: true,
        onLoad: ``,
        html: `<div class="wrapper">Document.url is:<div id="result"></div></div>`,
        method: `function () {
            var result = document.getElementById('result');
            result.innerText = document.URL;
        }`,
		js:`document.url`
    },
}

module.exports = dom;