if (!navigator.getUserMedia && !navigator.webkitGetUserMedia) {
  alert('getUserMedia　notSupport');
}

function getMedia() {
  navigator.webkitGetUserMedia(
    {video: true,
     audio: false},
    function(stream) {
      var myVideo  = document.getElementById('myVideo');
      myVideo.src = window.URL.createObjectURL(stream);
      myVideo.play();
    },
    function(err) {
      alert('getUserMedia Error', err.code);  
      console.log(err);
    }
  );
}

window.onload = function() {
    document.getElementById("accessCamera").addEventListener("click", function(event){
        getMedia();
    }); 
    document.getElementById("stopCamera").addEventListener("click", function(event){
      //getMedia();
  }); 
    document.getElementById("stopCamera").addEventListener("click", function(event){
      //getMedia();
  }); 
}