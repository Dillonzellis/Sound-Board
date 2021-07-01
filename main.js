"use strict";

// overflow solution
// const context = new window.AudioContext();

// function playFile(filepath) {
//   // see https://jakearchibald.com/2016/sounds-fun/
//   // Fetch the file
//   fetch(filepath)
//     // Read it into memory as an arrayBuffer
//     .then((response) => response.arrayBuffer())
//     // Turn it from mp3/aac/whatever into raw audio data
//     .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
//     .then((audioBuffer) => {
//       // Now we're ready to play!
//       const soundSource = context.createBufferSource();
//       soundSource.buffer = audioBuffer;
//       soundSource.connect(context.destination);
//       soundSource.start();
//     });
// }

// let button1 = document.querySelector("#btn1");
// button1.addEventListener("click", function () {
//   playFile("./samples/flute.mp3");
// });

// let button2 = document.querySelector("#btn2");
// button2.addEventListener("click", function () {
//   playFile("./samples/oh-no.mp3");
// });

// Personal Solution
const flute = new Audio("./samples/flute.mp3");
const bass = new Audio("./samples/test.mp3");
const cowboy = new Audio("/samples/cowboy-ahh.mp3");

// <!-- <audio src="/samples/cowboy-ahh.mp3" id="cowboy"></audio>
// <audio src="/samples/greenbacks.mp3" id="greenbacks"></audio>
// <audio src="/samples/ice-cream.mp3" id="ice-cream"></audio>
// <audio src="/samples/long-one.mp3" id="long-one"></audio>
// <audio src="/samples/oh-no.mp3" id="oh-no"></audio>
// <audio src="/samples/showdown.mp3" id="showdown"></audio>
// <audio src="/samples/survive.mp3" id="survive"></audio>
// <audio
//   src="/samples/that-what-you-want.mp3"
//   id="that-what-you-want"
// ></audio> -->

let cowboybtn = document.querySelector("#cowboy");
cowboybtn.addEventListener("click", () => {
  cowboy.play();
});

function stopSample() {
  
}

// Array solution
// const sounds = [
//   "cowboy",
//   "greenbacks",
//   "ice-cream",
//   "long-one",
//   "oh-no",
//   "showdown",
//   "survive",
//   "that-what-you-want",
// ];

// sounds.forEach((sound) => {
//   const btn = document.createElement("button");
//   btn.classList.add("btn");

//   btn.innerText = sound;

//   btn.addEventListener("click", () => {
//     document.getElementById(sound).play();
//   });

//   document.getElementById("buttons").appendChild(btn);
// });
