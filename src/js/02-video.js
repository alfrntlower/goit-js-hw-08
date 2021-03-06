
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

const PLAYER_CURRENT_TIME = "videoplayer-current-time";

player.getVideoTitle().then(function(title) {
        console.log('title:', title);
});

let videoplayerCurrentTime = 0;

const onPlay = function(data) {

    videoplayerCurrentTime = data.seconds;

    // console.log(videoplayerCurrentTime);
   
    localStorage.setItem(PLAYER_CURRENT_TIME, JSON.stringify(videoplayerCurrentTime));

};

player.on('timeupdate', throttle(onPlay, 1000));

if (localStorage.getItem(PLAYER_CURRENT_TIME)) {
    player.setCurrentTime(localStorage.getItem(PLAYER_CURRENT_TIME));
}

console.log(localStorage.getItem(PLAYER_CURRENT_TIME));
