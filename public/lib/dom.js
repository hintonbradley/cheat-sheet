let dom = {
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