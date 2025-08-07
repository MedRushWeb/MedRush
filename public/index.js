import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";


// Declare globally so they can be used later
let auth, db;

// Fetch Firebase config from backend
fetch("/firebase-config")
  .then(res => res.json())
  .then(config => {
    // ✅ Initialize Firebase with modular syntax
    const app = initializeApp(config);

    // ✅ Set up services
    auth = getAuth(app);
    db = getFirestore(app);

    console.log("✅ Firebase initialized from backend config");
  })
  .catch(err => console.error("❌ Error loading Firebase config:", err));


  

let isLoginMode = true;

// ✅ Update form mode
function updateForm() {
  const formTitle = document.getElementById("form-title");
  const authBtn = document.getElementById("auth-btn");
  const toggleText = document.getElementById("toggle-text");
  const switchLink = document.getElementById("switch-link");

  if (isLoginMode) {
    formTitle.textContent = "Login";
    authBtn.textContent = "Login";
    toggleText.textContent = "Don't have an account?";
    switchLink.textContent = "Sign Up";
  } else {
    formTitle.textContent = "Sign Up";
    authBtn.textContent = "Sign Up";
    toggleText.textContent = "Already have an account?";
    switchLink.textContent = "Login";
  }
}

// ✅ Toggle between modes
document.getElementById("switch-link").addEventListener("click", (e) => {
  e.preventDefault();
  isLoginMode = !isLoginMode;
  updateForm();
});

updateForm(); // initial setup

// ✅ Auth button click (handles both login and signup)
document.getElementById("auth-btn").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!email || !password) {
    message.textContent = "⚠️ Please enter email and password.";
    return;
  }

  try {
    if (isLoginMode) {
      // LOGIN
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      if (!userCred.user.emailVerified) {
        message.textContent = "⚠️ Please verify your email before logging in.";
        return;
      }

      const uid = userCred.user.uid;
      localStorage.setItem("uid", uid);

      const docSnap = await getDoc(doc(db, "users", uid));
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.firstLogin) {
          window.location.href = `reset.html?uid=${uid}`;
        } else {
          window.location.href = "connect.html";
        }
      } else {
        message.textContent = "❌ User data not found.";
      }

    } else {
      // SIGN UP
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCred.user);

      await setDoc(doc(db, "users", userCred.user.uid), {
        email,
        createdAt: new Date().toISOString(),
        notes: "Welcome! This is your personal data",
        firstLogin: true
      });

      message.textContent = "✅ Sign up successful! Please check your email to verify.";
    }
  } catch (error) {
    message.textContent = `❌ ${error.message}`;
  }
});


/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

let isLoginMode = true;

// ✅ Update form mode
function updateForm() {
  const formTitle = document.getElementById("form-title");
  const authBtn = document.getElementById("auth-btn");
  const toggleText = document.getElementById("toggle-text");
  const switchLink = document.getElementById("switch-link");

  if (isLoginMode) {
    formTitle.textContent = "Login";
    authBtn.textContent = "Login";
    toggleText.textContent = "Don't have an account?";
    switchLink.textContent = "Sign Up";
  } else {
    formTitle.textContent = "Sign Up";
    authBtn.textContent = "Sign Up";
    toggleText.textContent = "Already have an account?";
    switchLink.textContent = "Login";
  }
}

// ✅ Toggle between modes
document.getElementById("switch-link").addEventListener("click", (e) => {
  e.preventDefault();
  isLoginMode = !isLoginMode;
  updateForm();
});

updateForm(); // initial setup

// ✅ Auth button click (handles both login and signup)
document.getElementById("auth-btn").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!email || !password) {
    message.textContent = "⚠️ Please enter email and password.";
    return;
  }

  try {
    if (isLoginMode) {
      // LOGIN
      const userCred = await signInWithEmailAndPassword(auth, email, password);

      if (!userCred.user.emailVerified) {
        message.textContent = "⚠️ Please verify your email before logging in.";
        return;
      }

      const uid = userCred.user.uid;
      localStorage.setItem("uid", uid);

      const userRef = doc(db, "users", uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.firstLogin) {
          window.location.href = `reset.html?uid=${uid}`;
        } else {
          window.location.href = "connect.html";
        }
      } else {
        // ✅ Create missing document so user can proceed
        await setDoc(userRef, {
          email: userCred.user.email,
          createdAt: new Date().toISOString(),
          notes: "Welcome! This is your personal data",
          firstLogin: true
        });

        window.location.href = `reset.html?uid=${uid}`;
      }

    } else {
      // SIGN UP
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCred.user);

      await setDoc(doc(db, "users", userCred.user.uid), {
        email,
        createdAt: new Date().toISOString(),
        notes: "Welcome! This is your personal data",
        firstLogin: true
      });

      message.textContent = "✅ Sign up successful! Please check your email to verify.";
    }
  } catch (error) {
    message.textContent = `❌ ${error.message}`;
  }
});
*/