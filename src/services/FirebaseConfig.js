import { initializeApp } from "firebase/app"

const FirebaseConfig = {
    apiKey: "AIzaSyArQUz3BMBS8VBMU5VRNPh6qf6l39NYADo",
    authDomain: "ongob-63193.firebaseapp.com",
    projectId: "ongob-63193",
    storageBucket: "ongob-63193.appspot.com",
    messagingSenderId: "274688661411",
    appId: "1:274688661411:web:a615b2ae14f4aebb53ec16"
}

const app = initializeApp(FirebaseConfig)

export { app }