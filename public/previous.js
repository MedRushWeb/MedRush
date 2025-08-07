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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const unusedgroupAData = {};
const unusedgroupBData = {};

let originalGroupAData = {};
let originalGroupBData = {};

let incorrectGroupAData = {};
let incorrectGroupBData = {};

let markedGroupAData = {};
let markedGroupBData = {};

let selectedOverlappingQuestions = [];

let icon_visibility;

let sidebar = document.querySelector(".sidebar");

let Z;

let test_result_index;

let Exams={};
let Answers={};
let Dates={};
let timeperQuestion={};


// ma saffarthom hdol bl start
let chosen_Answers=[]; // contains 0,1,2,3,4,5 which indicates answer number

let chosen_Answers_string=[];
let real_Answers=[];

let answers; // kanat l let jowwa l function

let Final_Count;
let theRightAnswer;


let page=document.querySelector(".page");

let n; 

// i removed =[] from all and put make zeros function in reset order.
// end of editing
//
let all_incorrect;
//
let all_marked;
//

//let review_questions;
let FINAL_ARRAY; 


let currentIndex;
let rightAnswers ;

let number_of_solved_questions;


let score;

let scores={};

let string_array = [];
let status_string={};


let submitted_array =[];
let submitted_string={};

let SUM;

let isTimed; 



async function doStuff() {

  await initFirebase();

await Z_load_Cloud();
await loadCloud();

const rowsPerPage = 10;
let currentPage = 1; 
addRows();
}
doStuff();

window.safeHandleButtonClick = async function(index) {

  await ConnectValues(index);

console.log("1",Answers[`Answer_${index+1}_${uid}`]);
console.log("2",chosen_Answers);
    await saveEndedCloud();

console.log("3",Answers[`Answer_${index+1}_${uid}`]);
console.log("4",chosen_Answers);

window.location.href = "ended.html"; 

  }


  async function ConnectValues(index) {


const groupAIds = Array.from({ length: 13 }, (_, i) => `groupA${i + 1}`);
const groupAFiles = groupAIds.map(id => `${id}_Qs.json`);
const groupAPromises = groupAFiles.map((file, idx) =>
  loadQuestions(file).then(data => {
    const id = groupAIds[idx];
    originalGroupAData[id] = data;
  })
);
await Promise.all(groupAPromises);


  if (!examIdsArray[`examIdsArray_${index+1}_${uid}`]) {
    console.warn(`⚠️ Skipping Exam_${index+1}_${uid} — examIdsArray is undefined`);
  }else{
  Exams[`Exam_${index+1}_${uid}`] = Object
    .values(groupAndSortByCustomId(originalGroupAData, examIdsArray[`examIdsArray_${index+1}_${uid}`]))
    .flat();
  }

    FINAL_ARRAY = Exams[`Exam_${index+1}_${uid}`] || [];
    chosen_Answers = Answers[`Answer_${index+1}_${uid}`] || [];
    submitted_array = submitted_string[`submitted_string_${index+1}_${uid}`] || [];
    test_result_index = index+1 ;
  }


  window.handleSuspended = async function(index) {
await ConnectValues(index);
await saveEndedCloud();
  window.location.href = "suspended.html"; 
}


function addRows() {
  const tableBody = document.getElementById("myTable").getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';


  /*
  let sum=0;
  for (let i = 1; i <= Z; i++) {

        if (Exams[`Exam_${i}_${uid}`] === undefined) {
        Exams[`Exam_${i}_${uid}`] = [];
    }
    if (scores[`score_${i}_${uid}`] === undefined) {
        scores[`score_${i}_${uid}`] = 0;
    }

    
  sum=sum+(scores[`score_${i}_${uid}`]*(Exams[`Exam_${i}_${uid}`].length));
  }

  let sum_solved=0;
  for (let i = 1; i <= Z; i++) {
    sum_solved=sum_solved+Exams[`Exam_${i}_${uid}`].length
    }

  if (sum_solved==0)(sum_solved=1);
let SUM=(sum/ sum_solved)*100;

*/



for (let i = Z - 1; i >= 0; i--) {
    const specialCase = icon_visibility.includes(i+1);
    const showFirst = specialCase ? '' : 'display: none;';
    const showSecond = specialCase ? 'display: none;' : '';
    const showThird = specialCase ? '' : 'display: none;';


    /*
    <td>${Exams[`Exam_${i+1}_${uid}`].length}</td>
    */

    const row = document.createElement('tr');
      row.innerHTML = `
          <td>Exam ${i+1}</td>
          <td>${examIdsArray[`examIdsArray_${i+1}_${uid}`].length}</td>
          <td>${parseFloat((scores[`score_${i+1}_${uid}`]*100).toFixed(1))}%</td>
          <td>${Dates[`Date_${i+1}_${uid}`] }</td>
          <td>
          <span class="table-icons" data-tooltip="review exam" onclick="safeHandleButtonClick(${i})" style="cursor: pointer; ${showFirst}">
          <img src="icons/review.png" alt="review" width="24" height="24" style="vertical-align: middle;">
          </span>
          <span class="table-icons" data-tooltip="you suspended this exam" onclick="handleSuspended(${i})" style="cursor: pointer;">
          <img src="icons/suspend-icon.png" alt="suspend" width="24" height="24" style="vertical-align: middle; ${showSecond}">
          </span>
          <span class="table-icons" data-tooltip="analysis" onclick="resultanalysis(${i})" style="cursor: pointer;">
          <img src="icons/analysis.png" alt="analysis" width="24" height="24" style="vertical-align: middle; ${showThird}">
          </span>
          </td>
      `;
      tableBody.appendChild(row);
  }
  paginateTable();
}

       

// Pagination function
function paginateTable() {
  const rowsPerPage = 10; // Change this value based on your requirement
  const table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
  const rows = table.getElementsByTagName('tr');
  const totalPages = Math.ceil(rows.length / rowsPerPage);
  let currentPage = 1;

  function updateTable() {
      for (let i = 0; i < rows.length; i++) {
          rows[i].style.display = 'none';
      }

      for (let i = (currentPage - 1) * rowsPerPage; i < currentPage * rowsPerPage && i < rows.length; i++) {
          rows[i].style.display = '';
      }

      const paginationControls = document.getElementById('paginationControls');
      paginationControls.innerHTML = '';
      for (let i = 1; i <= totalPages; i++) {
          const button = document.createElement('button');
          button.className='pagesBtn';
          button.textContent = i;
          button.onclick = () => {
              currentPage = i;
              updateTable();
          };
          if (i === currentPage) {
              button.disabled = true;
          }
          paginationControls.appendChild(button);
      }
  }
  updateTable();
}
    

window.toggleFullscreen = function() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
    });
  } else {
    document.exitFullscreen();
  }
}




function findGroupAById(questionId) {
  const matches = [];

  for (const groupName in unusedgroupAData) {
    const group = unusedgroupAData[groupName];
    if (Array.isArray(group)) {
      if (group.some(q => String(q.id) === String(questionId))) {
        matches.push(groupName);
      }
    }
  }


  if (matches.length > 0) {
    console.log(`✅ Question ID "${questionId}" found in:`, matches);
  } else {
    console.log(`❌ Question ID "${questionId}" not found in any Group A subgroup.`);
  }

  return matches;
}


function findGroupBById(questionId) {
  const matches = [];

  for (const groupName in unusedgroupBData) {
    const group = unusedgroupBData[groupName];
    if (Array.isArray(group)) {
      if (group.some(q => String(q.id) === String(questionId))) {
        matches.push(groupName);
      }
    }
  }


  if (matches.length > 0) {
    console.log(`✅ Question ID "${questionId}" found in:`, matches);
  } else {
    console.log(`❌ Question ID "${questionId}" not found in any Group B subgroup.`);
  }

  return matches;
}


window.resultanalysis = async function(index) {
test_result_index = index+1;
await saveindexCloud();
window.location.href = "testresult.html"; 
}


async function saveindexCloud() {
if (!uid) {
    console.error("❌ UID not found. Cannot save user-specific data.");
    return;}
try {
    const allData = {
      test_result_index,
    };
    await setDoc(doc(firestore, "userData", uid), allData, { merge: true });
    console.log(`✅ test_result_index saved to Firestore for UID: ${uid}`);
  } catch (error) {
    console.error("❌ Failed to save test_result_index to Firestore:", error);
  }
}

async function loadCloud() {
  console.time("🕒 Firestore Load Duration"); // ⏱ Start timer

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

      for (let i = 1; i <= Z; i++) {
      examIdsArray[`examIdsArray_${i}_${uid}`] = allData[`examIdsArray_${i}_${uid}`];
      Answers[`Answer_${i}_${uid}`] = allData[`Answer_${i}_${uid}`];
      Dates[`Date_${i}_${uid}`] = allData[`Date_${i}_${uid}`];
      scores[`score_${i}_${uid}`]  = allData[`score_${i}_${uid}`];
      status_string[`status_string_${i}_${uid}`]  = allData[`status_string_${i}_${uid}`];
      submitted_string[`submitted_string_${i}_${uid}`]  = allData[`submitted_string_${i}_${uid}`];
      timeperQuestion[`timeperQuestion_${i}_${uid}`] = allData[`timeperQuestion_${i}_${uid}`];
          }

       test_result_index = allData.test_result_index;
       icon_visibility = allData.icon_visibility;
       SUM = allData.SUM;
       Final_Count = allData.Final_Count;
       FinalArray_IDs=allData.FinalArray_IDs;

    } else {
      console.error("❌ No such document found for UID:", uid);
    }

    console.timeEnd("🕒 Firestore Load Duration"); // ✅ End timer
  } catch (error) {
    console.error("❌ Failed to load data from Firestore:", error);
  }





/* 1
for (let i = 1; i <= Z; i++) {
  if (!examIdsArray[`examIdsArray_${i}_${uid}`]) {
    console.warn(`⚠️ Skipping Exam_${i}_${uid} — examIdsArray is undefined`);
    continue;
  }
  Exams[`Exam_${i}_${uid}`] = Object
    .values(groupAndSortByCustomId(originalGroupAData, examIdsArray[`examIdsArray_${i}_${uid}`]))
    .flat();
}

*/

//FINAL_ARRAY = Object.values(groupAndSortByCustomId(originalGroupAData, FinalArray_IDs)).flat();

}

async function Z_load_Cloud() {
  console.time("🕒 Load test_result_index Duration");

  if (!uid) {
    console.error("❌ UID not found. Cannot load user-specific data.");
    return;
  }

  try {
    const userDocRef = doc(firestore, "userData", uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      Z = data.Z;
      console.log("✅ test_result_index loaded:", test_result_index);
    } else {
      console.error("❌ No document found for UID:", uid);
    }

    console.timeEnd("🕒 Load test_result_index Duration");
  } catch (error) {
    console.error("❌ Failed to load test_result_index from Firestore:", error);
  }
}


/*
async function loadQuestions(file) {
  const res = await fetch(file);
  return await res.json();
}
*/


async function loadQuestions(file) {
  // file = "questions.json" → remove .json
  const name = file.replace(".json", "");
  const res = await fetch(`/get-json/${name}`);
  return await res.json();
}


function findUndefinedFieldsVerbose(obj) {
  const undefinedFields = [];
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined) {
      undefinedFields.push(key);
      console.warn(`🔍 ${key} is undefined!`);
    }
  }
  return undefinedFields;
}




async function saveEndedCloud() {
FinalArray_IDs=Array.from(new Set(FINAL_ARRAY.map(q => q.id)));
  if (!uid) {
    console.error("❌ UID not found. Cannot save user-specific data.");
    return;
  }

  const rawSubmittedArray = submitted_string[`submitted_string_${test_result_index}_${uid}`] || [];
  const cleanedSubmittedArray = Array.from({ length: rawSubmittedArray.length }, (_, i) =>
  rawSubmittedArray[i] === undefined ? false : rawSubmittedArray[i]
  );
  try {
    const allData = {
      test_result_index,
      Z,
      FinalArray_IDs,
    //  n,
      chosen_Answers,
      submitted_array:cleanedSubmittedArray
    };
    
const undefinedFields = findUndefinedFieldsVerbose(allData);
if (undefinedFields.length > 0) {
  console.error("❌ Found undefined fields in data:", undefinedFields);
  return; // Prevent saving if any undefined field found
}
    await setDoc(doc(firestore, "userData", uid), allData, { merge: true });
    console.log(`✅ All data saved to Firestore for UID: ${uid}`);
  } catch (error) {
    console.error("❌ Failed to save to Firestore:", error);
  }
}



function groupAndSortByCustomId(data, customOrder) {
  const idToSubgroup = {};
  const idToItem = {};

  // Flatten and map each ID to its subgroup name
  for (const subgroupName in data) {
    for (const item of data[subgroupName]) {
      const idStr = String(item.id);
      idToSubgroup[idStr] = subgroupName;
      idToItem[idStr] = item;
    }
  }

  const result = {};
  const notFoundIds = [];

  for (const id of customOrder) {
    const idStr = String(id);
    const subgroup = idToSubgroup[idStr];
    const item = idToItem[idStr];

    if (subgroup && item) {
      if (!result[subgroup]) result[subgroup] = [];
      result[subgroup].push(item);
    } else {
      notFoundIds.push(id);
    }
  }

  if (notFoundIds.length > 0) {
    console.warn("❌ These IDs were not found in the data:", notFoundIds);
  }

  return result;
}

