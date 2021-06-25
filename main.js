"use strict";

// overflow solution
const context = new window.AudioContext();

function playFile(filepath) {
  // see https://jakearchibald.com/2016/sounds-fun/
  // Fetch the file
  fetch(filepath)
    // Read it into memory as an arrayBuffer
    .then((response) => response.arrayBuffer())
    // Turn it from mp3/aac/whatever into raw audio data
    .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
    .then((audioBuffer) => {
      // Now we're ready to play!
      const soundSource = context.createBufferSource();
      soundSource.buffer = audioBuffer;
      soundSource.connect(context.destination);
      soundSource.start();
    });
}

let button1 = document.querySelector("#btn1");
button1.addEventListener("click", function () {
  playFile("./samples/flute.mp3");
});

let button2 = document.querySelector("#btn2");
button2.addEventListener("click", function () {
  playFile("./samples/oh-no.mp3");
});

// Personal Solution
const flute = new Audio("./samples/flute.mp3");
const bass = new Audio("./samples/test.mp3");

let button = document.querySelector("#btn");
button.addEventListener("click", () => {
  bass.play();
});
