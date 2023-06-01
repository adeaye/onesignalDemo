import OneSignal from 'react-onesignal';
import {isSafari} from 'react-device-detect';
import ding from '../ding.mp3'

const audio = new Audio(ding); // Replace 'sound.mp3' with the path to your MP3 file


export default async function runOneSignal() {
    const httpsAppId = 'e58de15e-152a-4f98-aa00-110c622ec7bf';
  const resp = await OneSignal.init({ appId: httpsAppId , allowLocalhostAsSecureOrigin: true});
  console.log('res', resp)
  OneSignal.on('notificationDisplay', (event) => {
    const notification = event.data;
    if(!isSafari) {
        navigator.vibrate(500); // vibrate for 200ms
      }
    audio.play();

    // Handle the received notification
    console.log('Received push notification:', notification);
    // You can show a notification UI, update state, etc.
  });
  OneSignal.showSlidedownPrompt();
  
}