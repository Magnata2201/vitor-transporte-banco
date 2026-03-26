// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwLzjKJXDCf-9UNNT1X5fzvEgFIc1Hh24",
  authDomain: "meu-banco-2201.firebaseapp.com",
  projectId: "meu-banco-2201",
  storageBucket: "meu-banco-2201.firebasestorage.app",
  messagingSenderId: "601801632834",
  appId: "1:601801632834:web:580e9106f6796ffbe311db"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// O SEGREDO ESTÁ AQUI: Verifique se todas as funções estão nesta lista
export { db, collection, addDoc, getDocs, doc, updateDoc, deleteDoc };