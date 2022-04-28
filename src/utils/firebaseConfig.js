import { initializeApp } from "firebase/app";
//Pego la siguiente linea
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOu2qF2L91cVvaKLv1D55D5pX-toJd8PU",
  authDomain: "kiteplace.firebaseapp.com",
  projectId: "kiteplace",
  storageBucket: "kiteplace.appspot.com",
  messagingSenderId: "158820229065",
  appId: "1:158820229065:web:412e12ec9bb7c0a7c99218"
};

//Luego estas dos
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//db es la representacion de la base de datos 
//Exporto db
export default db;