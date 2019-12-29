let jsMethods = {
	focus: {
		name: 'focus',
		link: 'focus',
		button: false,
		description: "A method that sets focus on the specified element, if it can be focused. In the example below, the address field has the focus.",
        html: '<div><label for="name">Name</label><input type="text" name="name" id="name" value=""></div><br><div><label for="nickname">Nickname</label><input type="text" name="nickname" id="nickname" value=""></div><br><div><label for="address">Address</label><input type="text" name="address" id="address" value=""></div><br>',
		js:`document.getElementById("address").focus();`,
		method: `document.getElementById("address").focus();`,
	},
	foreach: {
		name: 'forEach',
		link: 'foreach',
		button: true,
		result: true,
		mutation: 'mutate',
		description: "takes a function and executes it on each element in an array - while mutating the original array.",
		html: '[2, 4, 6, 8]',
		method:
		function forEach (cb) {
			let arr = [2,4,6,8];
			arr.forEach(function(el, i) {
				return arr[i] = el * 5;
			});
			cb(arr);
		}
	},
	hover: {
		name: 'hover',
		link: 'hover',
		button: false,
		description: "is a jquery event that is executed when the mouse pointer enters and leaves the elements. You can bind one or two handlers to the matched elements - i.e. mouseenter and mouseleave. In the example below, box1 only has one handler which adds the 'red' class on hover, whereas box2 has two event handlers, the first being the same and the second removes the 'red' class from the element.",
		html: '<div id="box1" class="d-inline-block" style="margin: 0 auto; height: 100px; width: 100px; border: 1px solid black; padding-top: 34px;">box1</div><div class="d-inline-block" style="margin: 0 20px;"></div><div id="box2" class="d-inline-block" style="margin: 0 auto; height: 100px; width: 100px; border: 1px solid black; padding-top: 34px;">box2</div>',
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
		name: 'join',
		link: 'join',
		button: true,
		result: true,
		description: 'joins all elements of an array into a string. The argument is what will separate each element in the string.',
		html: '["This","should","be","a","string"]',
		method: 
		function arrToString (cb) {
			let myArr = ["This","should","be","a","string"];
			let newStr = myArr.join(' ');
			cb(newStr)
		},
	},
	map: {
		name: 'map',
		link: 'map',
		button: true,
		result: true,
		mutation: 'non-mutate',
		description: "takes a function and executes it on each element in an array - returning a new array.",
		html: '[1, 2, 3, 4]',
		method:
			function mapArray (cb) {
				let array1 = [1, 2, 3, 4];
				const map1 = array1.map(x => x * 10);
				cb(map1, [1, 2, 3, 4])
			},
	},
	mathCeil: {
		title: 'Math.ceil',
		name: 'Math.ceil',
		link: 'mathCeil',
		button: true,
		result: true,
		description: "returns a number that is rounded up to the nearest integer.",
		html: '<div><label for="number">Number</label><input type="text" name="number" id="number" value=""></div><div class="text-center"></div>',
		method:
		function (cb) {
			var num = document.getElementById('number').value;
			var ceil = Math.ceil(num);
			cb(ceil)
		},
	},
	mathFloor: {
		name: 'Math.floor',
		link: 'mathfloor',
		button: true,
		result: true,
		description: "returns a number that is rounded down to the nearest integer.",
        html: '<div><label for="number">Number</label><input type="text" name="number" id="number" value=""></div><div class="text-center"></div>',
		method:
		function (cb) {
			var num = document.getElementById('number').value;
			let down = Math.floor(num);
			cb(down)
		},
	},
	mathPow: {
		name: 'Math.pow',
		link: 'mathpow',
		button: true,
		result: true,
		description: "returns a number (using first parameter), powered to (second parameter).",
		html: '<div><label for="number">Number</label><input type="text" name="number" id="number" value=""></div><div><label for="power">Power</label><input type="text" name="power" id="power" value=""></div>',
		method:
		function (cb) {
			var number = document.getElementById('number').value;
			var power = document.getElementById('power').value;
			res = Math.pow(number,power);
			cb(res)
		},
	},
	mathRandom: {
		name: 'Math.random',
		link: 'mathrandom',
		button: true,
		description: "returns a random number between 0 and 1",
        html: '<div class="text-center"><div id="result"></div></div>',
		method:
		function () {
			var num = Math.random();
			document.getElementById('result').innerHTML = num;
		},
	},
	mathSqrt: {
		name: 'Math.sqrt',
		link: 'mathsqrt',
		button: true,
		result: true,
		description: "returns the square root of the parameter.",
		html: '<div><label for="number">Number</label><input type="text" name="number" id="number" value=""><div class="text-center"></div></div>',
		method:
		function (cb) {
			var n = document.getElementById('number').value;
			var sqrt = Math.sqrt(n);
			cb(sqrt)
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
		mutation: 'mutate',
		description: 'Removes element(s) from an array, and returns an array of the elements that were removed.<br>x: The first element to remove in the array<br>y: Total number of elements to remove',
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


