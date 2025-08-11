
// this code / does not support muti browser
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
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
*/




























// this supoorts multi browser , but logs in automatically
/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

// Declare globally
let auth, db;

// ✅ Step 1: Fetch Firebase config and initialize
fetch("/firebase-config")
  .then(res => res.json())
  .then(config => {
    const app = initializeApp(config);
    auth = getAuth(app);
    db = getFirestore(app);

    console.log("✅ Firebase initialized from backend config");

    // ✅ Step 2: Watch for existing login session
    onAuthStateChanged(auth, async (user) => {
      if (user && user.emailVerified) {
        const uid = user.uid;
        localStorage.setItem("uid", uid); // Optional

        try {
          const docSnap = await getDoc(doc(db, "users", uid));
          if (docSnap.exists()) {
            const data = docSnap.data();
            if (data.firstLogin) {
              window.location.href = `reset.html?uid=${uid}`;
            } else {
              window.location.href = "connect.html";
            }
          }
        } catch (err) {
          console.error("❌ Error fetching user data:", err);
        }
      }
    });
  })
  .catch(err => console.error("❌ Error loading Firebase config:", err));

// ✅ UI control
let isLoginMode = true;

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

document.getElementById("switch-link").addEventListener("click", (e) => {
  e.preventDefault();
  isLoginMode = !isLoginMode;
  updateForm();
});

updateForm(); // initial mode setup

// ✅ Auth button click
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
      // ✅ LOGIN
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      if (!userCred.user.emailVerified) {
        message.textContent = "⚠️ Please verify your email before logging in.";
        return;
      }

      const uid = userCred.user.uid;
      localStorage.setItem("uid", uid); // Optional

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
      // ✅ SIGN UP
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



// this supports multi browser and does not log in automatically
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

// Declare globally
let auth, db;

// ✅ Step 1: Fetch Firebase config and initialize
fetch("/firebase-config")
  .then(res => res.json())
  .then(config => {
    const app = initializeApp(config);
    auth = getAuth(app);
    db = getFirestore(app);

    console.log("✅ Firebase initialized from backend config");

    // ❌ Removed onAuthStateChanged — user must log in manually every time
  })
  .catch(err => console.error("❌ Error loading Firebase config:", err));

// ✅ UI control
let isLoginMode = true;

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

document.getElementById("switch-link").addEventListener("click", (e) => {
  e.preventDefault();
  isLoginMode = !isLoginMode;
  updateForm();
});

updateForm(); // initial mode setup

// ✅ Auth button click
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
      // ✅ LOGIN
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      if (!userCred.user.emailVerified) {
        message.textContent = "⚠️ Please verify your email before logging in.";
        return;
      }

      const uid = userCred.user.uid;
      localStorage.setItem("uid", uid); // Optional

      localStorage.setItem("email", userCred.user.email); // ✅ add this



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
      // ✅ SIGN UP
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
