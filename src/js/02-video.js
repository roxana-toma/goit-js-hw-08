import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const saveCurrentTime = throttle(function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
  console.log(`Current time saved: ${data.seconds} seconds`);
}, 1000);

player.on('timeupdate', saveCurrentTime);

const savedTime = localStorage.getItem(STORAGE_KEY);

if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime)).catch(function (error) {
    console.error('Error current time setup:', error);
  });
}
