if (!navigator.getUserMedia && !navigator.webkitGetUserMedia) {
  alert('getUserMedia　notSupport');
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

window.onload = function() {
    document.getElementById("accessCamera").addEventListener("click", function(event){
        getMedia();
    });    
}