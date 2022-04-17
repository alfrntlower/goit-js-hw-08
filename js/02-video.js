
const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
});

let videoplayerCurrentTime = 0;

const onPlay = function(data) {

    console.log('Played the video!');

    videoplayerCurrentTime = data.seconds;

    console.log(videoplayerCurrentTime);
    //videoplayer-current-time
    localStorage.setItem("videoplayer-current-time", JSON.stringify(videoplayerCurrentTime));

};

player.on('pause', onPlay);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

console.log(localStorage.getItem("videoplayer-current-time"));
