let jsMethods = {
	focus: {
		title: '.focus',
		name: 'focus',
		link: 'focus',
		button: false,
		description: "A method that sets focus on the specified element, if it can be focused. In the example below, the address field has the focus.",
        html: '<div><label for="name">Name</label><input type="text" name="name" id="name" value=""></div><br><div><label for="nickname">Nickname</label><input type="text" name="nickname" id="nickname" value=""></div><br><div><label for="address">Address</label><input type="text" name="address" id="address" value=""></div><br>',
		js:`document.getElementById("address").focus();`,
		method: `document.getElementById("address").focus();`,
	},
	foreach: {
		title: 'For Each',
		name: 'forEach',
		link: 'forEach',
		button: true,
		description: "Just like the <a href='/js/method/map'>map</a> method, forEach executes a provided function once for each element in an array. The difference is that the forEach method manipulates and changes the original array.",
		html: '<div class="text-center"><div class="in-bl mlr-10">Original Array<div id="original">[2,4,6,8]</div></div></div>',
		js: `array1.forEach(function(n, i) {
				return array1[i] = n * 2;
		  	});`,
		method:
		function forEach () {
			let array1 = [2,4,6,8];
			array1.forEach(function(n, i) {
				return array1[i] = n * 2;
			});
			let orig = document.getElementById('original');
			orig.innerText='[' + array1.join(', ') + ']';
		}
},
	hover: {
		title: '.hover (jquery)',
		name: 'hover',
		link: 'hover',
		button: false,
		description: "A jquery event that is executed when the mouse pointer enters and leaves the elements. You can bind one or two handlers to the matched elements - i.e. mouseenter and mouseleave. In the example below, box1 only has one handler which adds the 'red' class on hover, whereas box2 has two event handlers, the first being the same and the second removes the 'red' class from the element.",
		html: '<div id="box1" class="d-inline-block" style="margin: 0 auto; height: 100px; width: 100px; border: 1px solid black; padding-top: 34px;">box1</div><div class="d-inline-block" style="margin: 0 20px;"></div><div id="box2" class="d-inline-block" style="margin: 0 auto; height: 100px; width: 100px; border: 1px solid black; padding-top: 34px;">box2</div>',
		js: `$( "#box1" ).hover(function() {
			$( this ).addClass( "red" );
		});
-------------------------------
$( "#box2" ).hover(function() {
	$( this ).addClass( "red" );
}, function() {
	$( this ).removeClass( "red" );
});`,
		method: 
		`$( "#box1" ).hover(function() {
			$( this ).addClass( "red" );
		});
		$( "#box2" ).hover(function() {
			$( this ).addClass( "red" );
		}, function() {
			$( this ).removeClass( "red" );
		});`
	},
	join: {
		title: 'Join (Arrays)',
		name: 'Join',
		link: 'join',
		button: true,
		description: 'Method that joins all elements of an array into a string. The argument is what will separate each element in the string.',
		html: '<div class="text-center"><div class="in-bl mlr-10"><div id="result"></div><div id="result2"></div></div></div>',
		js: `arr.join(' ');`,
		method: 
		function arrToString () {
			let result = document.getElementById('result');
			result.innerText=myArr.join(' ');
			let result2 = document.getElementById('result2');
			result2.innerText=typeof(myArr.join(' '));
		},
		onLoad: `
		let myArr = ["This","should","be","a","string"];
		let el = document.getElementById('result');
		el.innerText= JSON.stringify(myArr);
		let result2 = document.getElementById('result2');
		result2.innerText=typeof(myArr);`
	},
	map: {
		title: 'Map',
		name: 'map',
		link: 'map',
		button: true,
		description: "Just like the <a href='/js/method/foreach'>forEach</a> method, map executes a provided function once for each element in an array. The difference is that the map method returns a new array.",
		html: '<div class="text-center"><div class="in-bl mlr-10">Original Array<div id="original"></div>[1, 2, 3, 4]</div><div class="in-bl mlr-10">Method Returns<div id="new"></div></div></div>',
		js: `array.map(x => x * 2);`,
		method:
			function mapArray () {
				let array1 = [1, 2, 3, 4];
				const map1 = array1.map(x => x * 2);
				let newEl = document.getElementById('new');
				newEl.innerText='[' + map1.join(', ') + ']';
			},
		},
	mathCeil: {
		title: 'Math.ceil',
		name: 'Math.ceil',
		link: 'mathCeil',
		button: true,
		description: "Returns a number that is rounded up to the nearest integer.",
		html: '<div><label for="number">Number</label><input type="text" name="number" id="number" value=""></div><div class="text-center"><div class="in-bl mlr-10">Method Returns:<div id="result"></div></div></div>',
		js: `Math.ceil(value)`,
		method:
		function () {
			var v = document.getElementById('number');
			let res = document.getElementById('result');
			res.innerText=Math.ceil(v.value);
		},
	},
	mathFloor: {
		title: 'Math.floor',
		name: 'MathFloor',
		link: 'mathFloor',
		button: true,
		description: "Returns a number that is rounded down to the nearest integer.",
        html: '<div><label for="number">Number</label><input type="text" name="number" id="number" value=""></div><div class="text-center"><div class="in-bl mlr-10">Method Returns:<div id="result"></div></div></div>',
		js: 'Math.floor(value);',
		method:
		function () {
			var v = document.getElementById('number');
			let res = document.getElementById('result');
			res.innerText=Math.floor(v.value);
		},
	},
	mathPow: {
		title: 'Math.pow',
		name: 'MathPow',
		link: 'mathPow',
		button: true,
		description: "Returns a number (using first parameter), powered to (second parameter).",
		html: '<div><label for="number">Number</label><input type="text" name="number" id="number" value=""><div><label for="power">Power</label><input type="text" name="power" id="power" value=""></div><div class="text-center"><div class="in-bl mlr-10">Method returns:<div id="result"></div></div></div>',
		js: 'Math.pow(numValue, exValue);',
		method:
		function () {
			var v = document.getElementById('number');
			var p = document.getElementById('power');
			let res = document.getElementById('result');
			res.innerText=Math.pow(v.value,p.value);
		},
	},
	mathRandom: {
		title: 'Math.random',
		name: 'Math.random',
		link: 'mathRandom',
		button: true,
		description: "Returns a random number between 0 and 1",
        html: '<div class="text-center"><div class="in-bl mlr-10">Method Returns:<div id="result"></div></div></div>',
		js: 'Math.random()',
		method:
		function () {
			var x = 'Math.random() = ' + Math.random();
			let res = document.getElementById('result');
			res.innerText=x;
		},
	},
	mathSqrt: {
		title: 'Math.sqrt',
		name: 'MathSqrt',
		link: 'mathSqrt',
		button: true,
		description: "Returns the square root of the parameter.",
		html: '<div><label for="number">Number</label><input type="text" name="number" id="number" value=""><div class="text-center"><div class="in-bl mlr-10">Method Returns:<div id="result"></div></div></div>',
		js: 'Math.sqrt(value)',
		method:
		function () {
			var v = document.getElementById('number');
			let res = document.getElementById('result');
			res.innerText=Math.sqrt(v.value);
		},
	},
	setinterval: {
		title: 'Set Interval',
		name: 'setInterval',
		link: 'setinterval',
		button: true,
		description: 'A timing event (belonging to the HTML DOM Window object) that calls a function or evaluates an expression at specified intervals (in milliseconds). The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.',
		html: '',
		js: `setInterval(function() {
	alert("An alert box will show every 10 seconds.")
}, 3000)`,
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
		js: `setTimeout(function() {
	alert("I waited 3 seconds to say hello!");
}, 3000)`,
		method:
function () {
	setTimeout(function() {
		alert("I waited 3 seconds to say hello!");
	}, 3000)
},
		myFunc: function () {
			console.log
		}
	},
	slice: {
		title: 'Slice (Arrays)',
		name: 'Slice',
		link: 'slice',
		button: true,
		description: 'Method that takes an array and returns a second array consisting of the removed element(s). This method does not alter the original array.<br>x: The first element to remove<br>y: The index of elements to be removed through - but not including',
		html: `
		<div class="text-center">
			<div class="in-bl">
				<div class="in-bl mlr-20 mt-20"><b>Original:</b>
					<div id="result"></div>
				</div>
				<div class="in-bl mlr-20 mt-20" id="returned"><b>Method Returns:</b>
					<div id="result2"></div>
				</div>
			</div>
		</div>`,
		js: `arr.slice(x, y)`,
		method:
			function slice () {
				let result2 = document.getElementById('result2');
				result2.innerText = JSON.stringify(fruits.slice(2,5));
			},
		onLoad:
			`let fruits = ['orange','banana','spinach','lettuce','apple','kiwi'];
			let result = document.getElementById('result');
			result.innerText = JSON.stringify(fruits);
			`,
	},
	shift: {
		title: 'Shift (Arrays)',
		name: 'Shift',
		link: 'shift',
		button: true,
		description: 'Method that removes the first element from the beginning of an array. The method returns the element that has been removed.',
		html: '<div class="text-center"><div class="in-bl mlr-10">Planets: <span id="result"></span><div id="returned">Element returned: <span id="result2"></span></div></div></div>',
		js: `arr.shift()`,
		method:
		function shift () {
			let result2 = document.getElementById('result2');
			result2.innerText=planets.shift();
			result.innerText=JSON.stringify(planets);
			returned.style.display = "block";
		},
	onLoad:
		`let planets = [ "Pluto", "Neptune", "Uranus", "Saturn", "Jupiter","..." ];
		let result = document.getElementById('result');
		result.innerText= JSON.stringify(planets);
		let returned = document.getElementById('returned');
		returned.style.display = "none";`,
},
	splice: {
		title: 'Splice (Arrays)',
		name: 'Splice',
		link: 'splice',
		button: true,
		description: 'Removes element(s) from an array. This method alter the original array and returns the elements that were removed.<br>x: The first element to remove in the array<br>y: Total number of elements to remove',
		html: `
		<div class="text-center">
			<div class="in-bl">
				<div class="in-bl mlr-20 mt-20"><b>Original:</b>
					<div id="result"></div>
				</div>
				<div class="in-bl mlr-20 mt-20" id="returned"><b>Method Returns:</b>
					<div id="result2"></div>
				</div>
			</div>
		</div>`,
		js: `arr.slice(x, y)`,
		method:
			function splice () {
				let result = document.getElementById('result');
				let result2 = document.getElementById('result2');
				result2.innerText = JSON.stringify(muppets.splice(1,2));
				result.innerText = JSON.stringify(muppets);
			},
		onLoad:
			`let muppets = ['fozzie','pikachu','charizard','kermit','gonzo'];
			let result = document.getElementById('result');
			result.innerText = JSON.stringify(muppets);
			`,
	},
	unshift: {
		title: 'Unshift (Arrays)',
		name: 'Unshift',
		link: 'unshift',
		button: true,
		description: 'Method that adds a new element to the beginning of an array. The method returns the new length of the array.',
		html: '<input type="text" id="transformer" placeholder="transformer name"><div class="text-center"><div class="in-bl mlr-10">Transformers: <span id="result"></span><div id="returned">Element returned: <span id="result2"></span> (new length of array)</div></div></div>',
		js: `arr.unshift(item to be added)`,
		method:
		`function unshift () {
			let newEl = document.getElementById('transformer');
			let result2 = document.getElementById('result2');
			result2.innerText=transformers.unshift(newEl.value);
			result.innerText=JSON.stringify(transformers);
			returned.style.display = "block";
			newEl = "";
		}`,
		onLoad: `
		let transformers = ['Bumblebee','Jazz'];
		let result = document.getElementById('result');
		result.innerText= JSON.stringify(transformers);
		let returned = document.getElementById('returned');
		returned.style.display = "none";`
}
	// },
}

module.exports = jsMethods;


