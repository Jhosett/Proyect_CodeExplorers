import { auth, db } from '../firebase/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const registerUser = async (userData) => {
  try {
    console.log("Creating user with Firebase Auth...");
    // 1. Create user in Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth, 
      userData.email, 
      userData.password
    );
    
    const user = userCredential.user;
    console.log("User created successfully:", user.uid);
    
    console.log("Saving user data to Firestore...");
    // 2. Save additional user data to Firestore
    await setDoc(doc(db, "users", user.uid), {
      username: userData.username,
      email: userData.email,
      country: userData.country,
      city: userData.city,
      birthDate: userData.birthDate,
      createdAt: new Date(),
      uid: user.uid
    });
    
    console.log("User data saved to Firestore successfully");
    return { success: true, user };
  } catch (error) {
    console.error("Firebase registration error:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    return { success: false, error: error.message };
  }
};

export const loginUser = async (email, password) => {
  try {
    console.log("Attempting to login user...");
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Login successful:", user.uid);
    return { success: true, user };
  } catch (error) {
    console.error("Firebase login error:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    return { success: false, error: error.message };
  }
};