import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-analytics.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAyXofYtsQIoT6Fkr3vzxcQWsfht67oAUE",
    authDomain: "rainmoniter.firebaseapp.com",
    databaseURL: "https://rainmoniter-default-rtdb.firebaseio.com",
    projectId: "rainmoniter",
    storageBucket: "rainmoniter.appspot.com",
    messagingSenderId: "972301146406",
    appId: "1:972301146406:web:8ce3280d76feabc523c9e7",
    measurementId: "G-JMWXVQJN1S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const rain = ref(database, 'raining');
onValue(rain, (snapshot) => {
    const weather = snapshot.val();

    if(weather == true){
        document.querySelector("#sun").classList.add("transparent")
        document.querySelector("#rain").classList.remove("transparent")
    } else{
        document.querySelector("#sun").classList.remove("transparent")
        document.querySelector("#rain").classList.add("transparent")
    }
});