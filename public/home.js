const uid = localStorage.getItem("uid");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";

let firestore;

export async function initFirebase() {
  try {
    const res = await fetch("/firebase-config");
    const config = await res.json();

    const app = initializeApp(config);
    firestore = getFirestore(app);

    console.log("✅ Firebase initialized from backend config");
    return { firestore };
  } catch (err) {
    console.error("❌ Error initializing Firebase:", err);
    throw err;
  }
}

// ✅ Allow other files to access firestore & storage
export { firestore };








let examIdsArray={};
let unusedIdsArrayCloud;
let markedIdsArrayCloud;
let incorrectIdsArrayCloud;

let FinalArray_IDs;



///////////////////////////////////////////////



let status_string={};



let Z;
let icon_visibility;

let unusedgroupAData= {}; 
let incorrectGroupAData={};

var transferredNumber;
let solved; 
let SUM;
let percentage_used;



window.onload = async function() {

await initFirebase();

/*
async function ComboloadBasicValues() {
  if (!uid) {
    console.error("❌ UID not found in localStorage.");
    return;
  }

  const tDoc = await db.get(`transferredNumber_${uid}`).catch(() => null);
  const sDoc = await db.get(`solved_${uid}`).catch(() => null);
  const sumDoc = await db.get(`SUM_${uid}`).catch(() => null);

  transferredNumber = tDoc ? tDoc.data : null;
  solved = sDoc ? sDoc.data : null;
  SUM = sumDoc ? sumDoc.data : null;

  console.log(`✅ Values loaded for UID ${uid}:`, {
    transferredNumber,
    solved,
    SUM
  });

  // Optionally assign globally:
  window.transferredNumber = transferredNumber;
  window.solved = solved;
  window.SUM = SUM;

  afterLoaded();
}
  */

await ComboLoadValuesFromFirestore();
afterLoaded();


function afterLoaded() {
console.log("🧠 Confirmed SUM in afterLoaded:", SUM);


/*
let Unused_Num=Object.values(unusedgroupAData).flat().length;
let Incorrect_Num=Object.values(incorrectGroupAData).flat().length;
*/



let trueCount = 0;
for (let i = 1; i <= Z; i++) {
    const arr = status_string[`status_string_${i}_${uid}`] || [];
    trueCount += arr.filter(val => val === "true").length;
}

console.log("✅ Total 'true' count:", trueCount);



let Unused_Num=unusedIdsArrayCloud.length;
let Incorrect_Num=incorrectIdsArrayCloud.length;




percentage_used = ((3644 - Unused_Num)/3644);
console.log("percentage_used",percentage_used);
console.log(SUM);
document.getElementById('Used').innerText = 3644-(Unused_Num);
document.getElementById('Unused').innerText = Unused_Num;



//document.getElementById('Correct').innerText = (3644-Unused_Num)- Incorrect_Num;

document.getElementById('Correct').innerText = trueCount;


document.getElementById('Incorrect').innerText = Incorrect_Num;

document.getElementById('unsolved').innerText = (3644-Unused_Num)-trueCount-Incorrect_Num;




//let a = ((3644-Unused_Num)- Incorrect_Num)/Incorrect_Num;

let a = trueCount/Incorrect_Num;
let rounded = a.toFixed(1);

document.getElementById('CorrecttoIncorrect').innerText = rounded;


//let b = Incorrect_Num/((3644-Unused_Num)- Incorrect_Num);

let b = Incorrect_Num/trueCount;
let rounded_b= b.toFixed(1);
document.getElementById('IncorrecttoCorrect').innerText = rounded_b;


let C=Incorrect_Num/(3644-Unused_Num);
let C_percent=Math.round(C * 100) + "%";


document.getElementById('IncorrecttoUsed').innerText = C_percent;

document.getElementById('TestCreated').innerText = Z;

document.getElementById('TestCompleted').innerText = icon_visibility.length;
document.getElementById('SuspendedTests').innerText = Z-(icon_visibility.length);



//console.log(JSON.parse(LZString.decompress(localStorage.getItem("medicine_updated"))));
let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = -1;
let progressEndValue = parseInt(percentage_used*100);

//let progressEndValue = parseInt(solved/72*100);
let speed = 15;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #4d5bf9 ${progressValue * 3.6}deg,
      #cadcff ${progressValue * 3.6}deg
  )`;
  if (progressValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

let progressBar_2 = document.querySelector(".circular-progress_2");
let valueContainer_2 = document.querySelector(".value-container_2");

let progressValue_2 = -1;
let progressEndValue_2 =parseInt(SUM);
let speed_2 = 15;
//console.log(progressEndValue);
let progress_2 = setInterval(() => {
  progressValue_2++;
  valueContainer_2.textContent = `${progressValue_2}%`;
  progressBar_2.style.background = `conic-gradient(
      #4d5bf9 ${progressValue_2 * 3.6}deg,
      #cadcff ${progressValue_2 * 3.6}deg
  )`;
  if (progressValue_2 == progressEndValue_2) {
    clearInterval(progress_2);
  }
}, speed_2);


  }


 // await Combogetunuseddata();
//await ComboloadBasicValues();

};



async function Combogetunuseddata() {
  if (!uid) {
    console.error("❌ UID not found in localStorage.");
    return;
  }

  try {
    // Main structure
    const doc = await db.get(`checkboxDataCompressed_${uid}`);
    const allData = doc.data; // ✅ No decompression

    if (allData.unusedgroupAData && allData.unusedgroupBData) {
      Object.assign(unusedgroupAData, allData.unusedgroupAData);
      Object.assign(incorrectGroupAData, allData.incorrectGroupAData || {});
      console.log("✅ Main group data restored.");
    } else {
      console.warn("⚠️ Invalid group data structure.");
    }

    const zDoc = await db.get(`Z_${uid}`);
    Z = zDoc.data;

    const icon_visibilityDoc = await db.get(`icon_visibility_${uid}`);
    icon_visibility = icon_visibilityDoc.data;

    console.log(`✅ Unused data loaded for UID: ${uid}`);
  } catch (err) {
    console.warn("⚠️ Some data could not be loaded from PouchDB:", err);
  }
}













async function ComboLoadValuesFromFirestore() {
  if (!uid) {
    console.error("❌ UID not found. Cannot load user-specific data.");
    return;
  }

  try {
    // Retrieve user-specific data from Firestore
    const userDocRef = doc(firestore, "userData", uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const allData = docSnap.data();
      console.log("🧪 Data loaded from Firestore for UID:", uid);

      Z=allData.Z;
      // Extract relevant data from Firestore document using `Z` and `uid`    
      unusedIdsArrayCloud = allData.unusedIdsArrayCloud;
      incorrectIdsArrayCloud = allData.incorrectIdsArrayCloud;
      markedIdsArrayCloud = allData.markedIdsArrayCloud;

       icon_visibility = allData.icon_visibility;
       SUM = allData.SUM;










             for (let i = 1; i <= Z; i++) {
      status_string[`status_string_${i}_${uid}`]  = allData[`status_string_${i}_${uid}`];
          }





    } else {
      console.error("❌ No such document found for UID:", uid);
    }

  } catch (error) {
    console.error("❌ Failed to load data from Firestore:", error);
  }

}


