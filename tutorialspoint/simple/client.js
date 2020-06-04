//checks if the browser supports WebRTC

function hasUserMedia() {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia
  return !!navigator.getUserMedia
}

if (hasUserMedia()) {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      document.querySelector('video').srcObject = stream
    })
    .catch((err) => console.error(err))
} else {
  alert('Error. WebRTC is not supported!')
}
