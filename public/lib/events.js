let events = {
	blur: {
		title: 'blur',
		name: 'blur',
		link: 'blur',
		description: "A method that occurs when the selected field loses focus.",
        html: '<form id="form"><div><label for="name">Name</label><input type="text" name="name" id="name" value=""></div><br><div><label for="nickname">Nickname</label><input type="text" name="nickname" id="nickname" value=""></div><br><div><label for="address">Address</label><input type="text" name="address" id="address" value=""></div></form>',
		js:
`var form = document.getElementById('form');
form.addEventListener('blur', function( event ) {
  console.log('Blur triggered on ' + event.target.id.toUpperCase());    
}, true);`,
	},
	mouseentermouseleave: {
		title: 'Mouse Enter / Mouse Leave',
		name: 'mouseEnterMouseLeave',
		link: 'mouseentermouseleave',
		description: "<b>mouseenter</b>: An event that occurs when the mouse pointer is over (enters) the selected element. This event does <b>NOT</b> bubble and <b>ISN'T</b> sent to any descendants when the pointer is moved from one of it's decendants physical space (inside) to its own physical space (outside). Additionally, the mouseenter event is triggered if a mouse pointer initially enters any child elements as well.<br><br><b>mouseleave</b>: An event that occurs when the mouse pointer exits (leaves) the selected element. This event does <b>NOT</b> bubble and <b>ISN'T</b> sent to any descendants when the pointer is moved from one of it's decendants physical space (inside) to its own physical space (outside). Additionally, the mouseleave event is triggered if a mouse pointer leaves any child elements as well (e.g. to outside the window).",
        html: '<div id="outside" style="height: 200px; width: 200px; background-color: blue; margin: 0 auto; padding: 15px; color: #fff"><div id="inside" style="border: 1px solid white; height: 100px; width: 100px; margin: 10px;">Inside</div>Outside</div>',
		js:
`var outside = document.getElementById("outside");
outside.addEventListener("mouseenter", function(event) {
    event.target.style.background = "purple";
    console.log("mouseenter: ", this.id)
});
outside.addEventListener("mouseleave", function(event) {
    event.target.style.background = "blue";console.log("mouseenter: ", this.id)
})`,
	},
	mousemove: {
		title: 'Mouse Move',
		name: 'mouseMove',
		link: 'mousemove',
		description: "<b>mouseover</b>: An event that is fired any time a pointing device is moved while over an element that has the listener attached. Unlike the <a href='/js/event/mouseentermouseleave'>mouseenter</a> and <a href='/js/event/mouseentermouseleave'>mouseleave</a> events, this event <a href='/definition/bubblesUp'>bubbles up</a>.",
        html: '<div id="outside" class="d-inline-block" style="vertical-align: top; margin: 0px 40px; height: 200px; width: 200px; background-color: blue; margin: 0 auto; padding: 10px; color: #fff"><div id="middle" style="height: 150px; width: 150px; background-color: green; margin: 0 auto; padding: 10px; color: #fff"><div id="inside" style="height: 75px; width: 75px; margin: 5px; padding: 10px; background: yellow; color: black;">Inside</div>Middle</div>Outside</div><div class="d-inline-block" style="vertical-align: top; margin-left: 40px; margin-bottom: 0;">Counter<div id="counter">0</div></div>',
		js: 
`var amount = 0;
var outside = document.getElementById("outside");
outside.addEventListener("mousemove", function( event ) {
	amount++;
	var c = document.getElementById("counter");
	counter.innerText = amount;
});`
    },
	mouseover: {
		title: 'Mouse Over',
		name: 'mouseOver',
		link: 'mouseover',
		description: "<b>mouseover</b>: An event that is fired when a pointing device is moved onto the element that has the listener attached or onto one of its children. Unlike the <a href='/js/event/mouseentermouseleave'>mouseenter</a> and <a href='/js/event/mouseentermouseleave'>mouseleave</a> events, this event <a href='/definition/bubblesUp'>bubbles up</a> to the parents until it finds an event handler.",
        html: '<div id="outside" class="d-inline-block" style="vertical-align: top; margin: 0px 40px; height: 200px; width: 200px; background-color: blue; margin: 0 auto; padding: 10px; color: #fff"><div id="middle" style="border: 1px solid white; height: 150px; width: 150px; background-color: blue; margin: 0 auto; padding: 10px; color: #fff"><div id="inside" style="border: 1px solid white; height: 75px; width: 75px; margin: 5px; padding: 10px">Inside</div>Middle</div>Outside</div><div class="d-inline-block" style="vertical-align: top; margin-left: 40px; margin-bottom: 0;">Mouse Coordinates<ul style="list-style-type: none; padding: 0; margin-bottom: 0; height: 176px; overflow: hidden; border: 2px solid grey" id="coordinates"></ul></div>',
		js: 
`var outside = document.getElementById("outside");
outside.addEventListener("mouseover", function( event ) {
	var c = document.getElementById("coordinates");
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(event.clientX + ", " + event.clientY));
	c.prepend(li);
});`
    }
}

module.exports = events;