import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBanJLA7bzNjZQAvonq9CBN52QwmAJksJs",
  authDomain: "redux-practise-app.firebaseapp.com",
  projectId: "redux-practise-app",
  storageBucket: "redux-practise-app.appspot.com",
  messagingSenderId: "621928648989",
  appId: "1:621928648989:web:c8b9287b2e97c2c64d11f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const db = getFirestore(app)
export default app