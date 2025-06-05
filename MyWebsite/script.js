function sayHello() {
  alert('Hello from external JavaScript!');
}

const button = document.getElementById('playButton');
const audio = document.getElementById('myAudio');

button.addEventListener('click', () => {
  audio.play();
});
