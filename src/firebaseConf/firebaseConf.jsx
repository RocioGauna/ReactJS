import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyASoup0lEwj3NlRTmRhBNTo3JDOFnLARdY",
    authDomain: "champions-lol-react.firebaseapp.com",
    projectId: "champions-lol-react",
    storageBucket: "champions-lol-react.appspot.com",
    messagingSenderId: "211874811759",
    appId: "1:211874811759:web:48490a6554c6c9f19d629a",
    measurementId: "G-HVPZ8GV6M7"
};

export const getFirestoreApp=() =>{
    return app
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

