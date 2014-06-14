if (!navigator.getUserMedia && !navigator.webkitGetUserMedia) {
  alert('getUserMedia　非サポート');
}

function getMedia() {
  navigator.webkitGetUserMedia(
    {video: true},
    function(localMediaStream) {
      var myVideo  = document.getElementById('myVideo');
      myVideo.src = window.URL.createObjectURL(localMediaStream);
      myVideo.play();
    },
    function(err) {
      alert('getUserMedia Error');  
      console.log(err);
    }
  );
}