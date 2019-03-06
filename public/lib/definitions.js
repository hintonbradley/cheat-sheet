let definitions = {
    applicationLayers: {
        word: "Application Layers",
        definition: "(Can also be called application tiers) The three or more layers that make up an application, generally consiting of the <a href='../definition/presentationLayer'>Presentation layer</a>, the <a href='../definition/businessLayer'>Business layer</a> and the <a href='../definition/dataLayer'>Data layer</a>.",
        images: [{
            imgSrc: '../img/applicationlayers.jpg',
            text: 'In the example below, this sample app is broken down into more than three layers, consisting of the usual three plus a Service layer and a Persistent layer.',
            imgAlt: 'Application Layer'
        }]
    },
    bubblesUp: {
        word: "Bubbles Up",
        definition: "Event bubbling directs an event to its intended target, it works like so:<br>A button is clicked and the event is directed to the button.<br>If an event handler is set for that object, the event is triggered.<br>If no event handler is set for that object, the event bubbles up (like a bubble in water) to the objects parent.",
        images: [{
            imgSrc: '../img/bubblingup.png',
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
            text: "For example, it would take the user's input and manipulate it so it conforms to the company's <a href='../definition/businessRules'>business rules</a>",
            imgAlt: 'Business rules'
        }]
    },
    businessRules: {
        word: "Business Rules",
        definition: "businessRules",
        word: "Business Rules",
        definition: "Describes the operations, definitions and constraints that apply to an organization. The operations collectively form a process; every business uses these processes to form systems that get things done.",
        images: [{
            imgSrc: '../img/businessRules.jpg',
            text: "For example, the <a href='../definition/businessLogic'>business logic</a> would take the user's input and manipulate it so it conforms to the company's business rules.",
            imgAlt: 'Business rules'
        }]
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
            text: 'Before dependency injection can be fulfilled, there needs to be a creation of the object that contains the methods and variables needed.',
            imgAlt: 'Dependency Injection'
        },
        {
            imgSrc: '../img/dependencyInjection2.jpg',
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
            text: '<ul><li><b>Window object</b> − Top of the hierarchy. It is the outmost element of the object hierarchy.</li><li><b>Document object</b> − Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page. Each child of the document is considered a <a href="../definition/node">node</a>. </li><li><b>Form object</b> − Everything enclosed in the &lt;form>...&lt;/form> tags sets the form object.</li><li><b>Form control elements</b> − The form object contains all the elements defined for that object such as text fields, buttons, radio buttons, and checkboxes.</li></ul>',
            imgAlt: 'dom'
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
            text: 'With the HTML DOM, all nodes in the node tree can be accessed by JavaScript.<br>New nodes can be created, and all nodes can be modified or deleted.',
            imgAlt: 'Node'
        }]
    },
    persistentLayer: {
        word: "Persistent Layer",
        definition: "The layer of the application that communicates between the application and database. Generally it is the layer between the <a href='../definition/businessLayer'>Business Layer</a> and the <a href='../definition/databaseLayer'>Database Layer</a> (if required).",
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
    windowObject: {
        word: "Window Object",
        definition: "Window object in Javascript represent the current window open in your browser. It contains information related to your current browser window. For example, the URL for the current page can be found in window.location object. All global JavaScript objects, functions, and variables automatically become members of the window object.<div class='container'><div class='row'><div class='col'><h4>Window Object Properties:</h4><ul><li>closed</li><li>console</li><li>defaultStatus</li><li>document</li><li>frameElement</li><li>frames</li><li>history</li><li>innerHeight</li><li>innerWidth</li><li>length</li><li>localStorage</li><li>location</li><li>name</li><li>navigator</li><li>opener</li><li>outerHeight</li><li>outerWidth</li><li>pageXOffset</li><li>pageYOffset</li><li>parent</li><li>screen</li><li>screenLeft</li><li>screenTop</li><li>screenX</li><li>screenY</li><li>sessionStorage</li><li>scrollX</li><li>scrollY</li><li>self</li><li>status</li><li>top</li></ul></div><div class='col'><h4>Window Object Methods</h4><ul><li>alert()</li><li>atob()</li><li>blur()</li><li>btoa()</li><li>clearInterval()</li><li>clearTimeout()</li><li>close()</li><li>confirm()</li><li>focus()</li><li>getComputedStyle()</li><li>getSelection()</li><li>matchMedia()</li><li>moveBy()</li><li>moveTo()</li><li>open()</li><li>print()</li><li>prompt()</li><li>requestAnimationFrame()</li><li>resizeBy()</li><li>resizeTo()</li><li>scroll()</li><li>scrollBy()</li><li>scrollTo()</li><li>setInterval()</li><li>setTimeout()</li><li>stop()</li></ul></div></div></div>",
        images: []
    }
}

module.exports = definitions;