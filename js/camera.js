if (!navigator.getUserMedia && !navigator.webkitGetUserMedia) {
  alert('webkit系ブラウザでないか、もしくはgetUserMediaがサポートされていません');
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
      alert('カメラから映像を取得することができませんでした。');  
      console.log(err);
    }
  );
}