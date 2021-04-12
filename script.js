const vid1 = document.getElementById("1");
const vid2 = document.getElementById("2");
const vid3 = document.getElementById("3");

let currVideo = null;

vid1.addEventListener("mouseover", () => playVideo(vid1));
vid2.addEventListener("mouseover", () => playVideo(vid2));
vid3.addEventListener("mouseover", () => playVideo(vid3));

vid1.addEventListener("mouseleave", () => stopVideo(vid1));
vid2.addEventListener("mouseleave", () => stopVideo(vid2));
vid3.addEventListener("mouseleave", () => stopVideo(vid3));

function playVideo(vid) {
  console.log(vid + "play");
  vid.play();
}

function stopVideo(vid) {
  console.log(vid + "stop");
  vid.pause();
}
