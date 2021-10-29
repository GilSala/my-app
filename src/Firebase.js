import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import "firebase/compat/firestore"
import "firebase/compat/storage"


const app = firebase.initializeApp({
  apiKey: "AIzaSyAJ3dkpFhfBo5BJwjycdDZ9kpGyf4DzgcA",
  authDomain: "tracetory-4340e.firebaseapp.com",
  projectId: "tracetory-4340e",
  storageBucket: "tracetory-4340e.appspot.com",
  messagingSenderId: "628717194814",
  appId: "1:628717194814:web:016c6a3be539b88dc44b6f",
  measurementId: "G-09YT4YQKFK"
})

// firebase.initializeApp(firebaseConfig)

export const auth = app.auth()

const storage = firebase.storage();
const firestore = firebase.firestore(); 


export { storage, firebase as default, firestore };


