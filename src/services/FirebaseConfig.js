import { initializeApp } from "firebase/app"

const FirebaseConfig = {
    apiKey: "AIzaSyCHVDa4fSZw0jeijzNwweOsYE2WKM4ORic",
    authDomain: "blackbox-d174e.firebaseapp.com",
    projectId: "blackbox-d174e",
    storageBucket: "blackbox-d174e.appspot.com",
    messagingSenderId: "133994616848",
    appId: "1:133994616848:web:ca0092e5d0fd4d4106d295"
}

const app = initializeApp(FirebaseConfig)

export { app }