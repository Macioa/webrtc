//checks if the browser supports WebRTC
let stream

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
    .then((vidStream) => {
      document.querySelector('video').srcObject = vidStream
      stream = vidStream
    })
    .catch((err) => console.error(err))
} else {
  alert('Error. WebRTC is not supported!')
}

document
  .getElementById('btnGetAudioTracks')
  .addEventListener('click', function () {
    console.log('getAudioTracks')
    console.log(stream.getAudioTracks())
  })

document
  .getElementById('btnGetTrackById')
  .addEventListener('click', function () {
    console.log('getTrackById')
    console.log(stream.getTrackById(stream.getAudioTracks()[0].id))
  })

document.getElementById('btnGetTracks').addEventListener('click', function () {
  console.log('getTracks()')
  console.log(stream.getTracks())
})

document
  .getElementById('btnGetVideoTracks')
  .addEventListener('click', function () {
    console.log('getVideoTracks()')
    console.log(stream.getVideoTracks())
  })

document
  .getElementById('btnRemoveAudioTrack')
  .addEventListener('click', function () {
    console.log('removeAudioTrack()')
    stream.removeTrack(stream.getAudioTracks()[0])
  })

document
  .getElementById('btnRemoveVideoTrack')
  .addEventListener('click', function () {
    console.log('removeVideoTrack()')
    stream.removeTrack(stream.getVideoTracks()[0])
  })
