import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD3Tx0OqbiOMqmiH0N4DCHafyCP9BIAOGo",
  authDomain: "almitallia-sublimaciones.firebaseapp.com",
  projectId: "almitallia-sublimaciones",
  storageBucket: "almitallia-sublimaciones.appspot.com",
  messagingSenderId: "989327608729",
  appId: "1:989327608729:web:ae5834dfd8be09677f2108"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)