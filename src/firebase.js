import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCzM6zc7sFMm5-9um4y837G66Hgem9bjiY",
  authDomain: "thotbit-88ab9.firebaseapp.com",
  projectId: "thotbit-88ab9",
  storageBucket: "thotbit-88ab9.appspot.com",
  messagingSenderId: "33672584016",
  appId: "1:33672584016:web:5c74552c9abf7a0399aa55",
  measurementId: "G-RGZE16T285"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;