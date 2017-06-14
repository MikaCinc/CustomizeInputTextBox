window.onload = function() {
	document.body.style.backgroundColor = "black";
	size1()
}

var input = document.getElementById("input")

function bg_color() {
	var color = document.getElementById("input_color").value
	document.getElementById("input").style.backgroundColor = color
	document.getElementById("bg_color").innerHTML = "background-color: " + color + ";"
}

function text_color() {
	var color = document.getElementById("input_textColor").value
	document.getElementById("input").style.color = color
	document.getElementById("color").innerHTML = "color: " + color + ";"
}

function borders() {
	var px = document.getElementById("borders_px").value
	var type = document.getElementById("borders_type").value
	var color = document.getElementById("borders_color").value
	var finish = document.getElementById("input").style.border = px + "px " + type + " " + color
	console.log(finish)
	document.getElementById("borders").innerHTML = "borders: " + px + "px " + type + " " + color + ";"
}

function border_radius() {
	var radius = document.getElementById("border-radius_px").value
	document.getElementById("input").style.borderRadius = radius + "px"
	document.getElementById("border-radius").innerHTML = "border-radius: " + radius + "px;"
}

function size1() {
	document.getElementById("input").style.width = document.getElementById("input_width").value + "px"
	document.getElementById("input").style.height = document.getElementById("input_height").value + "px"
	document.getElementById("width").innerHTML = "width: " + document.getElementById("input_width").value + "px;" 
	document.getElementById("height").innerHTML = "height: " + document.getElementById("input_height").value + "px;" 
}

function placeholder12() {
	document.getElementById("input").placeholder = document.getElementById("input_placeholder").value
}

function upperCase12() {
	if(document.getElementById("input_upperCase").checked){
		document.getElementById("input").value = document.getElementById("input").value.toUpperCase()
		console.log("Velika slova")
	} else {
		console.log("Mala slova")
		document.getElementById("input").value = document.getElementById("input").value.toLowerCase()
	}
}

function disabled12() {
	if(document.getElementById("input_disabled").checked){
		document.getElementById("input").disabled = true;
		console.log("Disabled")
	} else {
		console.log("Enabled")
		document.getElementById("input").disabled = false;
	}
}

function cursor12() {
	var value = document.getElementById("input_cursor").value
	var element = document.getElementById("input")
	console.log("Cursor promenjen u: " + value)
	element.style.cursor = value
	document.getElementById("cursor").innerHTML = "cursor: " + value + ";"
}

function transition12() {
	valuta = document.getElementById("input_transition").value
	document.getElementById("input").style.transitionDuration = "0." + valuta + "s"
	document.getElementById("transition").innerHTML = "transition-duration: " + "0." + valuta + "s;"
}

function padding12() {
	valuta = document.getElementById("input_padding").value
	document.getElementById("input").style.padding = valuta + "px"
	document.getElementById("padding").innerHTML = "padding: " + valuta + "px;"
}

function font_family() {
	value = document.getElementById("input_font-family").value
	if(value == "") {
		document.getElementById("input").style.fontFamily = "verdana"
	} else {
		document.getElementById("input").style.fontFamily = value
	}
	document.getElementById("font_family").innerHTML = "font-family: " + value + ";"
}

function font_size() {
	value = document.getElementById("input_font-size").value
	document.getElementById("input").style.fontSize = value + "px"
	document.getElementById("font_size").innerHTML = "font-size: " + value + "px;"
}