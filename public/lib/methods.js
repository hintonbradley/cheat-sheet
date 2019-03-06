let jsMethods = {
	focus: {
		title: '.focus',
		name: 'focus',
		link: 'focus',
		button: false,
		description: "A method that sets focus on the specified element, if it can be focused. In the example below, the address field has the focus.",
        html: '<div><label for="name">Name</label><input type="text" name="name" id="name" value=""></div><br><div><label for="nickname">Nickname</label><input type="text" name="nickname" id="nickname" value=""></div><br><div><label for="address">Address</label><input type="text" name="address" id="address" value=""></div><br>',
		method:
`document.getElementById("address").focus();`,
	},
	foreach: {
		title: 'For Each',
		name: 'forEach',
		link: 'forEach',
		button: true,
		description: "Just like the <a href='/js/method/map'>map</a> method, forEach executes a provided function once for each element in an array. The difference is that the forEach method manipulates and changes the original array.",
        html: '<div class="text-center"><div class="in-bl mlr-10">Original Array<div id="original">[1, 4, 9, 16]</div></div></div>',
		method:
`function forEach () {
	let array1 = [1, 4, 9, 16];
	array1.forEach(function(n, i) {
		return array1[i] = n * 2;
	  });
	let orig = document.getElementById('original');
	orig.innerText='[' + array1.join(', ') + ']';
}`
},
	hover: {
		title: '.hover (jquery)',
		name: 'hover',
		link: 'hover',
		button: false,
		description: "A jquery event that is executed when the mouse pointer enters and leaves the elements. You can bind one or two handlers to the matched elements - i.e. mouseenter and mouseleave. In the example below, box1 only has one handler which adds the 'red' class on hover, whereas box2 has two event handlers, the first being the same and the second removes the 'red' class from the element.",
        html: '<div id="box1" class="d-inline-block" style="margin: 0 auto; height: 100px; width: 100px; border: 1px solid black;">box1</div><div class="d-inline-block" style="margin: 0 20px;"></div><div id="box2" class="d-inline-block" style="margin: 0 auto; height: 100px; width: 100px; border: 1px solid black;">box2</div>',
		method:
`$( "#box1" ).hover(function() {
	$( this ).addClass( "red" );
});
$( "#box2" ).hover(function() {
	$( this ).addClass( "red" );
}, function() {
	$( this ).removeClass( "red" );
});`,
	},
	map: {
		title: 'Map',
		name: 'map',
		link: 'map',
		button: true,
		description: "Just like the <a href='/js/method/foreach'>forEach</a> method, map executes a provided function once for each element in an array. The difference is that the map method returns a new array.",
        html: '<div class="text-center"><div class="in-bl mlr-10">Original Array<div id="original"></div>[1, 4, 9, 16]</div><div class="in-bl mlr-10">New Array<div id="new"></div></div></div>',
		method:
`function mapArray () {
	let array1 = [1, 4, 9, 16];
	const map1 = array1.map(x => x * 2);
	let newEl = document.getElementById('new');
	newEl.innerText='[' + map1.join(', ') + ']';
}`,
	},
	setinterval: {
		title: 'Set Interval',
		name: 'setInterval',
		link: 'setinterval',
		button: true,
		description: 'A timing event (belonging to the HTML DOM Window object) that calls a function or evaluates an expression at specified intervals (in milliseconds). The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.',
		html: '',
		method:
function () {
	setInterval(function() {
		alert("An alert box will show every 10 seconds.")
	}, 3000)
}
	},
	settimeout: {
		title: 'Set Timeout',
		name: 'setTimeout',
		link: 'settimeout',
		button: true,
		description: 'A timing event (belonging to the HTML DOM Window object) that allows execution of code after a specified time interval.',
		html: '',
		method:
function () {
	setTimeout(function() {
		alert("I waited 3 seconds to say hello!");
	}, 3000)
},
		myFunc: function () {
			console.log
		}
	}
}

module.exports = jsMethods;
