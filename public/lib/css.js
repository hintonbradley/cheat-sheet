let css = {
    after: {
        title: 'after (pseudo-element)',
        name: 'after (pseudo-element)',
		link: 'after',
        description: `A pesudo-element that allows the insertion of content without having to place it in the html. The end result does not add content to the DOM even though it appears on the page.`,
        button: function () {
            var target = getElementById('target');
            console.log('target is: ', target);
            target.classList.add("music")
        },
        onLoad: null,
        html: `<style>
        .music:after {content: url('');
        background:url('../img/music.png');
        background-repeat: no-repeat;
        background-size: 37px;
        width: 37px; /* width of the image */;
        height: auto; /* height of the image */;
        display: inline-block;}
        </style>
        <div>
            <h1 style="margin: 0 auto; width: 300px;" class="text-center" id="target">Music</h1>
        </div>`,
        code: ''
    },before: {
        title: 'before (pseudo-element)',
        name: 'before (pseudo-element)',
		link: 'before',
        description: `See <a href="/css/after">after</a>`,
        button: null,
        onLoad: ``,
        html: ``,
        code: ``
    },
    boxModel: {
        title: 'Box Model',
        name: 'Box Model',
		link: 'boxModel',
        description: `The system how each element in the dom is structrued. Every element is considered a box and has the following parts:`,
        button: null,
        onLoad: null,
        html: `<ul>
        <li><span class="purple">Content - The content of the box, where text and images appear</span></li>
        <li><span class="green">Padding - Clears an area around the content. The padding is transparent</span></li>
        <li>Border - A border that goes around the padding and content</li>
        <li><span class="red">Margin - Clears an area outside the border. The margin is transparent</span></li>
    </ul>
    <div style="margin: 40px auto" class="container">
        <div style="margin: 0 auto; background: red; width: 150px; height: 150px;" class="outer">
            <div style="background: black;width: 125px;position: relative; height: 125px;right: -50%;top: 50%;transform: translate(-50%, -50%);" class="middle">
                <div style="background: green;color: white;width: 100px;height: 100px;      /*   Nope =(   margin-left: -25%;   margin-top: -25%;   */    /*    Yep!   */position: relative;top: 50%;left: 50%;transform: translate(-50%, -50%);" class="inner">
                    <div style="background: purple;color: white; width: 70px; text-align: center; padding-top: 8px;height: 70px; position: relative;top: 50%;left: 50%;transform: translate(-50%, -50%);" class="inner">Box Model Example</div></div>
            </div>
        </div>
    </div>`,
        code: ''
    },
    boxSizing: {
        title: 'Box Sizing',
        name: 'Box Sizing',
		link: 'boxSizing',
        description: `A property that allows padding and border to be included in the total width and height of an element.`,
        button: `function () {
            var boxes = document.getElementsByClassName('box');
            var p = document.createElement('p');
            p.textContent = "Sup, y'all?";
            for (var i = 0; i < boxes.length; i++) {
                console.log(boxes[i].classList.add("box-sizing"));
            }
        }`,
        onLoad: `$( document ).ready(function() {
            console.log( "ready!" );
        });`,
        html: `
        <h5 style="text-align: center;">Click the button to add "box-sizing: border-box;" to both boxes.</h5><br>
        <style>
        .box-sizing {box-sizing: border-box;}
        </style>
        <div class="center" style="width: 800px; margin: 0 auto; text-align: center;">
        <div class="div1 box in-bl" style="text-align: left; width: 250px; height: 175px; border: 10px solid blue;">
            <p class="no-margin">styling: {</p>
            <p class="no-margin">&nbsp;&nbsp;&nbsp;&nbsp;width: 250px;</p>
            <p class="no-margin">&nbsp;&nbsp;&nbsp;&nbsp;height: 175px;</p>
            <p class="no-margin"><span class="blue">&nbsp;&nbsp;&nbsp;&nbsp;border: 10px solid blue;</span></p>
            <p class="no-margin">}</p>
        </div>
            
    <div class="div2 box in-bl" style="text-align: left; margin-left: 40px; width: 250px; height: 175px; padding: 20px; border: 1px solid red;">
        <p class="no-margin">styling: {</p>
        <p class="no-margin">&nbsp;&nbsp;&nbsp;&nbsp;width: 250px;</p>
        <p class="no-margin">&nbsp;&nbsp;&nbsp;&nbsp;height: 175px;</p>
        <p class="no-margin"><span class="red">&nbsp;&nbsp;&nbsp;&nbsp;border: 1px solid red;</span></p>
        <p class="no-margin"><span class="red">&nbsp;&nbsp;&nbsp;&nbsp;padding: 50px;</span></p>
        <p class="no-margin">}</p>
    </div>
    </div>
    `,
        code: `.box {
    box-sizing: border-box;
}`
    },
    transform: {
        title: 'Transform',
        name: 'Transform',
		link: 'transform',
        description: `A property that allows you to apply a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements. If the property does not have a string value, it must use a method to transform the element. Click <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function">transform methods</a> for a list of different methods you can use with this property.`,
        button: `function () {
            var inner = document.getElementById('inner');
            inner.classList.add("add-transform")
        }`,
        onLoad: ``,
        html: `<style>
        .add-transform {right: -50%;top: 50%;transform: translate(-50%, -50%);}
        </style>
        <p style="text-align: center;">Example:</p>
        <div style="margin: 0 auto; background: red; width: 100px; height: 100px;" id="outer">
            <div style="background: black;width: 25px;position: relative; height: 25px;" id="inner"></div></div>`,
        code: `.box {
    right: -50%;
    top: 50%;
    transform: translate(-50%, -50%);
}`
    }
}

module.exports = css;