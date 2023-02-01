function mousedown(event) {
    let click = event.button;
    // left click then drag
    // right click then change color
    switch (click) {
        case 0:
            drag();
            break;
        case 2:
            pop();
            break;
    }
}
function drag() {
    let dragItem = null;
	let demo = document.getElementById("button");
    let wrapper = document.getElementById("wrapper");

    demo.ondragstart = function (event) {
        dragItem = this;
    }
    wrapper.ondragover = function (event) {
        event.preventDefault();
    }

    // drop the button to the wrapper
    wrapper.ondrop = function () {
        console.log(dragItem)
        this.appendChild(dragItem)
    }

}

// show the pop up menu
function pop() {
    let popup = document.getElementById("popup");
    popup.classList.toggle("display");
}


function changec() {
    let colors = document.getElementsByName("color_button");

    console.log(colors)

    let color;

    for (let i = 0; i < colors.length; i++) {

        // get the selected color
        if (colors[i].checked == true) {
            color = colors[i].id;

        }
    }

    document.getElementById("button").style.backgroundColor = color;

}