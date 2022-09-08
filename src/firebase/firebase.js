import {getAuth} from 'firebase/auth'
import firebase from 'firebase/compat/app'
import {getFirestore} from 'firebase/firestore' 
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD_yRt0GyYeTe70tGSQe_y4Jeju_opPhDs",
    authDomain: "whatsapp-clone-b0a4a.firebaseapp.com",
    databaseURL: "http://whatsapp-clone-b0a4a.firebaseio.com",
    projectId: "whatsapp-clone-b0a4a",
    storageBucket: "whatsapp-clone-b0a4a.appspot.com",
    messagingSenderId: "465531591895",
    appId: "1:465531591895:web:a790077eadc9c7d1c96492"
}
// I have choose to set these configs as public as this is a temporary project



const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
export const auth = getAuth()