// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr_pVSM5U9tKmBOC_j2WSBrp2CO88PYJg",
  authDomain: "next-dev-saif-63f29.firebaseapp.com",
  projectId: "next-dev-saif-63f29",
  storageBucket: "next-dev-saif-63f29.appspot.com",
  messagingSenderId: "689848904128",
  appId: "1:689848904128:web:4df39a5a451154317e4025"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);