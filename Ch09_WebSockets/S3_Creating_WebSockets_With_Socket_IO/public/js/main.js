/*
If you create websockets with native JavaScript in the browser, they'll 
work in most modern browsers. But the support for them in older browsers 
isn't quite there yet. Here I'm looking up the websockets spec. on 
caniuse.com. So, one of the things that we can do, is, we can 
incorporate a module called Socket.IO. Socket.IO is a module that 
will help us build websockets, that has its own client and its own 
server JavaScript. What Socket.IO does, is it fails back to long polling 
when websockets aren't supported. So, if websockets aren't supported in 
a browser, Socket.IO will still most likely work.
*/
var socket = io("http://localhost:3000");

socket.on("disconnect", function() {
	setTitle("Disconnected");
});

socket.on("connect", function() {
	setTitle("Connected to Cyber Chat");
});

socket.on("message", function(message) {
	printMessage(message);
});

document.forms[0].onsubmit = function () {
    var input = document.getElementById("message");
    printMessage(input.value);
    socket.emit("chat", input.value);
    input.value = '';
};

function setTitle(title) {
    document.querySelector("h1").innerHTML = title;
}

function printMessage(message) {
    var p = document.createElement("p");
    p.innerText = message;
    document.querySelector("div.messages").appendChild(p);
}
