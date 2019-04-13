let definitions = {
    api: {
        word: "API",
        definition: "Part of a server that receives requests via a set of dedicated endpoints that return pure data responses usually in JSON or XML.",
        images: []
    },
    applicationLayers: {
        word: "Application Layers",
        definition: "(Can also be called application tiers) The three or more layers that make up an application, generally consiting of the <a href='../definition/presentationLayer'>Presentation layer</a>, the <a href='../definition/businessLayer'>Business layer</a> and the <a href='../definition/dataLayer'>Data layer</a>.",
        images: [{
            imgSrc: '../img/applicationlayers.jpg',
            imgSize: 'large',
            text: 'In the example below, this sample app is broken down into more than three layers, consisting of the usual three plus a Service layer and a Persistent layer.',
            imgAlt: 'Application Layer'
        }]
    },
    bubblesUp: {
        word: "Bubbles Up",
        definition: "Event bubbling directs an event to its intended target, it works like so:<br>A button is clicked and the event is directed to the button.<br>If an event handler is set for that object, the event is triggered.<br>If no event handler is set for that object, the event bubbles up (like a bubble in water) to the objects parent.",
        images: [{
            imgSrc: '../img/bubblingup.png',
            imgSize: 'large',
            text: "Basically, the event bubbles up from parent to parent until it is handled, or until it reaches the document object.",
            imgAlt: 'Bubbling'}]
    },
    businessLayer: {
        word: "Business Layer",
        definition: "(Also known as the Application Layer) The layer in an application that acts as a mediator between the <a href='../definition/presentationLayer'>Presentation layer</a> and the <a href='../definition/databaseLayer'>Database layer</a>. This layer processes data sent from either mentioned layer and sends required information to the other. (<a href='../definition/businessLogic'>Business logic</a> will be written in this layer) ",
        images: []
    },
    businessLogic: {
        word: "Business Logic",
        definition: "The part of the program which encodes the real-world business rules that determine how data can be created, displayed, stored, and changed. It prescribes how business objects interact with one another, and enforces the routes and the methods by which business objects are accessed and updated.<br><br>In the <a href='../definition/businessLayer'>Business layer</a> of an application, data is aggregated and then sent on to either the <a href='../definition/presentationLayer'>Presentation layer</a> or the <a href='../definition/databaseLayer'>Database layer</a>. It could include, organizing and manipulating data, validating user ability to request/manipulate data, verify if data is valid, and/or possibly cache data for performance.",
        images: [{
            imgSrc: '../img/businessRules.jpg',
            imgSize: 'large',
            text: "For example, it would take the user's input and manipulate it so it conforms to the company's <a href='../definition/businessRules'>business rules</a>",
            imgAlt: 'Business rules'
        }]
    },
    businessRules: {
        word: "Business Rules",
        definition: "Describes the operations, definitions and constraints that apply to an organization. The operations collectively form a process; every business uses these processes to form systems that get things done.",
        images: [{
            imgSrc: '../img/businessRules.jpg',
            imgSize: 'large',
            text: "For example, the <a href='../definition/businessLogic'>business logic</a> would take the user's input and manipulate it so it conforms to the company's business rules.",
            imgAlt: 'Business rules'
        }]
    },
    closure: {
        word: "Closure",
        definition: "Basically, a function inside another function. An inner function that has access to it's encompasing (outer) function's variables. A closure has 3 scope chains:<br><ul><li>It's own scope (variables defined between its curly brackets)</li><li>The outer function’s scope. (variables defined in it's encompasing function)</li><li>The global scope.</li></ul>",
        images: [{
            imgSrc: '../img/closure.jpg',
            imgSize: 'medium',
            text: 'With closures, the inner function still has access to the outer function’s variables even after the outer function has returned. When functions in JavaScript execute, they use the same scope chain that was in effect when they were created. This means that even after the outer function has returned, the inner function still has access to the outer function’s variables.',
            imgAlt: 'Closure'
        }],
    },
    databaseLayer: {
        word: "Database Layer",
        definition: "(Can also be called the storage tier) The application layer that consists of a database and a program for managing read and write access to a database.",
        images: []
    },
    dependencyInjection: {
        word: "Dependency Injection",
        definition: "Technique whereby one object (or static method) supplies the dependencies of another object. When class A uses some functionality of class B, then its said that class A has a dependency of class B. But before methods of other classes can be used, we first need to create the object of that class (i.e. class A needs to create an instance of class B).",
        images: [{
            imgSrc: '../img/dependencyInjection.jpg',
            imgSize: 'large',
            text: 'Before dependency injection can be fulfilled, there needs to be a creation of the object that contains the methods and variables needed.',
            imgAlt: 'Dependency Injection'
        },
        {
            imgSrc: '../img/dependencyInjection2.jpg',
            imgSize: 'large',
            text: "Let’s say we have a car class which contains various objects such as wheels, engine, etc. Here the car class is responsible for creating all the dependency objects. Now, what if we decide to ditch MRFWheels in the future and want to use Yokohama Wheels? We will need to recreate the car object with a new Yokohama dependency. But when using dependency injection (DI), we can change the Wheels at runtime (because dependencies can be injected at runtime rather than at compile time). You can think of DI as the middleman in our code who does all the work of creating the preferred wheels object and providing it to the Car class. It makes our Car class independent from creating the objects of Wheels, Battery, etc.",
            imgAlt: 'Dep Injection 2'
        }]
    },
    document: {
        word: "Document (Object)",
        definition: "The document object (document) represents the HTML that is displayed in a browser window. The document object has methods and properties it can use to get access to and modify the document (html) content. The way a document content is accessed and modified is called the Document Object Model, or <a href='../definition/dom'>DOM</a>.",
        images: []
    },
    dom: {
        word: "DOM (Document Object Model)",
        definition: "The DOM represents the document as nodes and objects, and is a way the document's content is accessed and modified. ",
        images: [{
            imgSrc:'../img/dom.jpg',
            imgSize: 'large',
            text: '<ul><li><b>Window object</b> − Top of the hierarchy. It is the outmost element of the object hierarchy.</li><li><b>Document object</b> − Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page. Each child of the document is considered a <a href="../definition/node">node</a>. </li><li><b>Form object</b> − Everything enclosed in the &lt;form>...&lt;/form> tags sets the form object.</li><li><b>Form control elements</b> − The form object contains all the elements defined for that object such as text fields, buttons, radio buttons, and checkboxes.</li></ul>',
            imgAlt: 'dom'
        }]
    },
    endpoint: {
        word: "Endpoint",
        definition: "A <a href='../definition/path'>path</a> used to communicate with an <a href='../definition/api'>API</a>",
        images: []
    },
    garbageCollection: {
        word: "Garbage Collection",
        definition: "A form of automatic memory management. The garbage collector, or collector, attempts to reclaim garbage, or memory occupied by objects that are no longer in use by the program.",
        images: [{
            imgSrc: '../img/gc1.jpg',
            imgSize: 'medium',
            text: 'In the below image the arrow depicts an object reference. The global variable "user" references the object {name: "John"} (we’ll call it John for brevity). The "name" property of John stores a primitive, so it’s painted inside the object.',
            imgAlt: 'Garbage Collection 1'
        },
        {
            imgSrc: '../img/gc2.jpg',
            imgSize: 'small',
            text: "If the value of user is overwritten, the reference is lost. Now John becomes unreachable. There’s no way to access it, no references to it. Garbage collector will junk the data and free the memory.",
            imgAlt: 'Garbage Collection 2'
        }]
    },
    io: {
        word: "I/O",
        definition: "Input/Output. Computers are based on the fundamental idea that every input results in an output. For example, if you are printing a document, the computer with send the document (input) through an <a href='../definition/ioPort'>I/O port</a> to the printer (output).",
        images: []
    },
    ioPort: {
        word: "I/O Port",
        definition: "A port on the outside of a computer that connects to input and output devices (e.g. printers, keyboards, databases, etc). ",
        images: []
    },
    map: {
        word: "Map",
        definition: "An object that holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. They are designed as an alternative to using Object literals for storing key/value pairs that require unique keys, and provide very useful methods for iteration.",
        images: [{
            imgSrc: '../img/mapExample.jpg',
            imgSize: 'medium',
            text: `To create a Map object use the 'new' keyword. 
            <ul>Methods
                <li>To create a new key value pair, use .set method.</li>
                <li>To find the amount of key value pairs in a Map, use .size method. </li>
                <li>To retrieve a value of a key in a Map, use .get method. </li>
                <li>To find the amount of key value pairs in a Map, use .size method. </li>
            </ul>`,
            imgAlt: 'Map example'
        }]
    },
    moduleExports: {
        word: "module.exports",
        definition: "A special object which is included in every JS file in the Node.js application by default.<br>module: A variable that represents current module<br>exports: An object that will be exposed as a module. So, whatever you assign to module.exports or exports, will be exposed as a module.<br><br>Example:<br><br>&nbsp;&nbsp;Name.js<br><code style='color: grey;'>&nbsp;&nbsp;&nbsp;&nbsp;module.exports = {firstName: 'James'};</code><br><br>&nbsp;&nbsp;server.js<br><code style='color: grey;'>&nbsp;&nbsp;&nbsp;&nbsp;var name = require('./Name.js');<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(name.firstName);</code>",
        images: []
    },
    mutation: {
        word: "Mutation",
        definition: "When a method changes the original array or object, it is known to 'mutate' it.",
        images: []
    },
    node: {
        word: "(DOM) Nodes",
        definition: "Everything in an HTML document is a node:<br><ul><li>The entire document is a document node</li><li>Every HTML element is an element node</li><li>The text inside HTML elements are text nodes</li><li>Every HTML attribute is an attribute node (deprecated)</li><li>All comments are comment nodes</li></ul>",
        images: [{
            imgSrc: '../img/node.png',
            imgSize: 'medium',
            text: 'With the HTML DOM, all nodes in the node tree can be accessed by JavaScript.<br>New nodes can be created, and all nodes can be modified or deleted.',
            imgAlt: 'Node'
        }]
    },
    path: {
        word: "Path",
        definition: "Part of a url that identifies the specific host resource that the web client wants to access.",
        images: []
    },
    persistentLayer: {
        word: "Persistent Layer",
        definition: "The layer of the application that communicates between the application and database. Generally it is the layer between the <a href='../definition/businessLayer'>Business Layer</a> and the <a href='../definition/databaseLayer'>Database Layer</a> (if required).",
        images: []
    },
    polyfill: {
        word: "Polyfill",
        definition: "Code written to provide modern functionality to older browsers that don't natively support it.<br><br>For example a polyfill could be used to mimic the functionality of an HTML Canvas element on Microsoft Internet Explorer 7 using a Silverlight plugin, or mimic support for CSS rem units, or text-shadow, or whatever you want.",
        images: []
    },
    presentationLayer: {
        word: "Presentation Layer",
        definition: "(Also known as the Client Layer) The top most layer of an application. A user will interact with the presentation layer when they use software. This layer passes user input to the <a href='../definition/businessLayer'>Business Layer</a>.",
        images: []
    },
    serviceLayer: {
        word: "Service Layer",
        definition: "The layer in an application that is responsible for providing or adding services to/from other applications. This layer can generally exposes the business functionality of the appication.",
        images: []
    },
    weakMap: {
        word: "WeakMap",
        definition: "A collection of key/value pairs in which the keys are objects only and the values can be arbitrary values. The object references in the keys are held weakly, meaning that they are a target of garbage collection (GC) if there is no other reference to the object anymore.<br><b>Note</b>: One difference to Map objects is that WeakMap keys are not enumerable (i.e., there is no method giving you a list of the keys).",
        images: [{
            imgSrc: '../img/weakMapExample.jpg',
            imgSize: 'large',
            text: `Since WeakMaps references in the keys are held weakly, if an object they're referenced to is deleted or no longer has a reference, then the WeakMap will be <a href='../definition/gargabeCollected'>Garbage Collected</a>. Otherwise, except for ennumerable cases, WeakMaps have the same properties as <a href='../definition/map'>Map</a>.`,
            imgAlt: 'Weak Map example'
        }]
    },
    windowObject: {
        word: "Window Object",
        definition: "Window object in Javascript represent the current window open in your browser. It contains information related to your current browser window. For example, the URL for the current page can be found in window.location object. All global JavaScript objects, functions, and variables automatically become members of the window object.<div class='container'><div class='row'><div class='col'><h4>Window Object Properties:</h4><ul><li>closed</li><li>console</li><li>defaultStatus</li><li>document</li><li>frameElement</li><li>frames</li><li>history</li><li>innerHeight</li><li>innerWidth</li><li>length</li><li>localStorage</li><li>location</li><li>name</li><li>navigator</li><li>opener</li><li>outerHeight</li><li>outerWidth</li><li>pageXOffset</li><li>pageYOffset</li><li>parent</li><li>screen</li><li>screenLeft</li><li>screenTop</li><li>screenX</li><li>screenY</li><li>sessionStorage</li><li>scrollX</li><li>scrollY</li><li>self</li><li>status</li><li>top</li></ul></div><div class='col'><h4>Window Object Methods</h4><ul><li>alert()</li><li>atob()</li><li>blur()</li><li>btoa()</li><li>clearInterval()</li><li>clearTimeout()</li><li>close()</li><li>confirm()</li><li>focus()</li><li>getComputedStyle()</li><li>getSelection()</li><li>matchMedia()</li><li>moveBy()</li><li>moveTo()</li><li>open()</li><li>print()</li><li>prompt()</li><li>requestAnimationFrame()</li><li>resizeBy()</li><li>resizeTo()</li><li>scroll()</li><li>scrollBy()</li><li>scrollTo()</li><li>setInterval()</li><li>setTimeout()</li><li>stop()</li></ul></div></div></div>",
        images: []
    }
}

module.exports = definitions;