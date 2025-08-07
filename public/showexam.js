const uid = localStorage.getItem("uid");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";
import {
  getStorage,
  ref,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js"; // ✅ Added

let firestore, storage;

export async function initFirebase() {
  try {
    const res = await fetch("/firebase-config");
    const config = await res.json();

    const app = initializeApp(config);
    firestore = getFirestore(app);
    storage = getStorage(app);

    console.log("✅ Firebase initialized from backend config");
    return { firestore, storage };
  } catch (err) {
    console.error("❌ Error initializing Firebase:", err);
    throw err;
  }
}

// ✅ Allow other files to access firestore & storage
export { firestore, storage };







let examIdsArray={};
let unusedIdsArrayCloud;
let markedIdsArrayCloud;
let incorrectIdsArrayCloud;

let FinalArray_IDs;

const nestedGroups = {
  B1: 6, B2: 6, B3: 11, B4: 10, B5: 10, B6: 9, B7: 13, B8: 16, B9: 9,
  B10: 8, B11: 10, B12: 7, B13: 2, B14: 2, B15: 5, B16: 1, B17: 10,
  B18: 2, B19: 2, B20: 6, B21: 1, B22: 5, B23: 6, B24: 5, B25: 3, B26: 4
};

let unusedgroupAData = {};
let unusedgroupBData = {};

let originalGroupAData = {};
let originalGroupBData = {};

let incorrectGroupAData = {};
let incorrectGroupBData = {};

let markedGroupAData = {};
let markedGroupBData = {};

let selectedOverlappingQuestions = [];

let icon_visibility=[];
let bottombar = document.querySelector(".bottombar");

let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let flag_checkbox=document.querySelector(".flag-checkbox")


let secondduration;
let Z ;
let test_result_index;

let Exams={};
let Answers={};
let Dates={};

let timeperQuestion={};


  const startTimes = {};          // Store current start time
  const accumulatedTimes = {};    // Store total accumulated time
  const activeTimers = {};        // Track if timer is active
  const frozenFlags = {};         // Track if text is frozen
  let lastStartIndex = null;      // Last start index
  let lastStartTime = null;       // Last start time

let nextButton = document.querySelector(".next-button");
nextButton.style.display='none'
let countdownElement = document.querySelector(".countdown");

let explanationArea=document.querySelector(".explanation");

let chosen_Answers=[]; // contains 0,1,2,3,4,5 which indicates answer number
let chosen_Answers_string=[];
let real_Answers=[];

let answers; // kanat l let jowwa l function

let Final_Count;
let theRightAnswer;
let quizApp=document.querySelector(".quiz-app");
let n; 


let all_incorrect=[];
let all_marked=[];

let FINAL_ARRAY; 

let currentIndex ;
let countdownInterval;
//
let number_of_solved_questions;
//
let score;
//
let scores={};

let string_array = [];
let status_string={};


let flag_array = [];
let flag_string={};




let submitted_array =[];
let submitted_string={};

let SUM;


let isTimed; 

 let atButtonContainer = document.getElementById('at-button-container');
 let atButtons = [];
 let firstButtons = [];
 let atButtonClicked = Array(40).fill(false); // Array to track if "i@" buttons were clicked



const loadingScreen = document.getElementById('loadingScreen');



let dbClosed = false;
window.addEventListener('beforeunload', async () => {
    dbClosed = true;
    await db.close();
});



document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // Page became active again → hide spinner just in case
    loadingScreen.style.display = 'none';
  }
});





 window.onload = async function() {

loadingScreen.style.display = 'flex';


await initFirebase();


//loadingScreen.style.display='none';
////////////////////////////////////////////////////////////////
  examIdsArray[`examIdsArray_${Z}_${uid}`]=[];
////////////////////////////////////////////////////////////
  timeperQuestion[`timeperQuestion_${Z}_${uid}`] = [];
  submitted_string[`submitted_string_${Z}_${uid}`]=[];  
 //   Exams[`Exam_${Z}`] = [];
  Answers[`Answer_${ Z}_${uid}`]=[];
  Dates[`Date_${ Z}_${uid}`];
  //  scores[`score_${ Z}`] ;
  status_string[`status_string_${ Z}_${uid}`] =[] ;


///////

console.time("⏱ 1");

await ComboLoadZFromFirestore();

console.timeEnd("⏱ 1");

console.time("⏱ 2");

await ComboLoadValuesFromFirestore();

console.timeEnd("⏱ 2");

console.time("⏱ 3");


//await ComboLoadMinimalFromFirestore();

console.timeEnd("⏱ 3");
console.time("⏱ 4");
//await LoadReloadCloud();
console.timeEnd("⏱ 4");

secondduration= await loadRemainingTimeCloud();

checkArrayForTrueOrFalse();

 function checkArrayForTrueOrFalse(arr) {
    const key = `submitted_string_${Z}_${uid}`;
    const targetArray = submitted_string[key];

    if (Array.isArray(targetArray) && targetArray.some(el => el === true || el === false)) {

      
      test_result_index=Z;


submitted_array= submitted_string[`submitted_string_${Z}_${uid}`];



loadingScreen.style.display = 'none';

  makeButtons_suspended(FINAL_ARRAY, chosen_Answers, submitted_array, test_result_index - 1);

  } else {

timeperQuestion[`timeperQuestion_${Z}_${uid}`] = [];
submitted_string[`submitted_string_${Z}_${uid}`]=[];

loadingScreen.style.display = 'none';


  getQuestions();

    }
}

};






  function getQuestions (){
/////
chosen_Answers=[]; 
//

Exams[`Exam_${Z}_${uid}`] = FINAL_ARRAY;
Dates[`Date_${Z}_${uid}`] = new Date().toLocaleString();

SaveReloadCloud();

   currentIndex = 0;
   score=0;
   string_array = "";
   submitted_array="";


document.querySelector(".main-content").style.marginLeft = "0";
//

  if (currentIndex>=(n-1)){nextButton.style.display='none'}else{
    nextButton.style.display='block' }

   Final_Count= FINAL_ARRAY.length;


   for(let i=1;i<=n;i++){
  // this is the SUBMIT button in the exam for every question
  let review_questions= document.createElement('button')
  review_questions.className="review_buttons";
  let createLine=document.createElement('area')
  createLine.innerText="\n";
  review_questions.setAttribute("id", `review_${i}`);
  //review_questions.innerText= String(i);
  review_questions.innerText= "Submit Answer";
  document.getElementById("myReview").appendChild(review_questions);
  document.getElementById("myReview").appendChild(createLine);
  quizArea.style.display='block';
  answersArea.style.display='block';
  // nextButton.style.display='block';
  
////////////////////////////////////////////////////////////////////////////////////////////////////////
  accumulatedTimes[i] = 0;
  frozenFlags[i] = false;
  activeTimers[i] = false;


  review_questions.onclick=() =>{


  if (activeTimers[i] && !frozenFlags[i]) {
  const elapsed = (Date.now() - startTimes[i]) / 1000;
  accumulatedTimes[i] += elapsed;

  timeperQuestion[`timeperQuestion_${Z}_${uid}`][i]=accumulatedTimes[lastStartIndex];

  activeTimers[i] = false;
  frozenFlags[i] = true;  // freeze

}  ///

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  let index = i;  // Capture the current value of i
  submitted_string[`submitted_string_${Z}_${uid}`][index-1] = true;
  submitted_array= submitted_string[`submitted_string_${Z}_${uid}`];

  //
  let new_index=currentIndex;
  new_index++;
  let answers=document.getElementsByName("question");

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
    chosen_Answers[new_index]=i;
    }  }

    currentIndex=i-1; // i added let
  quizArea.innerHTML = "";
  answersArea.innerHTML = "";
  explanationArea.innerHTML="";
  //
  addQuestionData_3(FINAL_ARRAY[currentIndex],Final_Count );

  for (let m =0 ;m< answers.length;m++){
        if (chosen_Answers[currentIndex+1]==m){
        answers[m].checked=true 
        }   }


for (let m =0 ;m< answers.length;m++){ answers[m].disabled='true' }
atButtonClicked[i - 1] = true; // Mark this "i@" button as clicked

review_questions.style.display = 'none';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// here  //Answers[`Answer_${Z}`][i]=chosen_Answers[i]; did not work so i am using chosen_answers by now
let isCorrect = ((FINAL_ARRAY[i-1].right_answer)==FINAL_ARRAY[i-1][`answer_${chosen_Answers[i]+1}`]);

const Timeentries= timeperQuestion[`timeperQuestion_${Z}_${uid}`] || [];
let displayTime;
if (Timeentries[i] >= 60) {
    let minutes = Timeentries[i] / 60;
    displayTime = minutes.toFixed(1) + " minutes";
} else {
    let wholeSeconds = Math.floor(Timeentries[i]);
if (Number.isNaN(wholeSeconds)) {
    wholeSeconds = "";
displayTime = "-";
}else{
  displayTime = wholeSeconds + " seconds";
}
}

const right = FINAL_ARRAY[i-1].right_answer?.trim() || "";
const match = right.match(/[A-V]/);  // Finds first capital A–F
const letter = match ? match[0] : null;
const indexsaa = letter ?  letter.charCodeAt(0) - 64: null;
const percentage = indexsaa ? FINAL_ARRAY[i-1][`percent_${indexsaa}`] : "";


        const panel = document.getElementById('infoPanel');
        const timeNow = document.getElementById('timeNow');
        const statusStrip = document.getElementById('statusStrip');
        const statusText = document.getElementById('statusText');
        const percentageText = document.getElementById('percentageText');
        const timeSpentText = document.getElementById('timeSpentText');

        const now = new Date();
        const timeString = now.toLocaleTimeString();
       
        timeNow.innerHTML =`<img src="icons/calender.png" alt="icon" style="width:35px; vertical-align:middle; margin-right:5px;"> ${timeString}` ;
        panel.style.display = 'flex';

    if (isCorrect) {
        statusStrip.style.backgroundColor = 'green';
        statusText.textContent = 'correct';
        statusText.innerHTML = `Correct.  The correct answer is ${letter}`

        document.getElementById(`${i}`).classList.add('checked');

        } else {
        statusStrip.style.backgroundColor = 'red';
        statusText.innerHTML = `Incorrect.  The correct answer is ${letter}`

          document.getElementById(`${i}`).classList.add('crossed')
        }
   //     percentageText.innerHTML = `<img src="icons/statistical.png" alt="icon" style="width:30px; vertical-align:middle; margin-right:5px;"> ${percentage}`;
   //     timeSpentText.innerHTML =`<img src="icons/clock.png" alt="icon" style="width:40px; vertical-align:middle; margin-right:5px;"> ${displayTime} `;
   

   percentageText.innerHTML = `
    <div style="text-align:center;">
        <span style="display:block; font-weight:bold; font-size:14px; margin-bottom:3px;">Correctly Answered Percent</span>
        <img src="icons/statistical.png" alt="icon" style="width:30px; vertical-align:middle; margin-right:5px;">
        ${percentage}
    </div>
`;



    timeSpentText.innerHTML = `
    <div style="text-align:center;">
        <span style="display:block; font-weight:bold; font-size:14px; margin-bottom:3px;">Time Spent</span>
        <img src="icons/clock.png" alt="icon" style="width:40px; vertical-align:middle; margin-right:5px;">
        ${displayTime}
    </div>
`;



//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  document.getElementById(`${i}`).style.backgroundColor= "#e0e0e0"; 

//0000000000000000000000000000000000000000000000000000000000000000000000000000
for (let idx = 0; idx < n; idx++) {
    if (submitted_string[`submitted_string_${Z}_${uid}`][idx] === true) {
        Answers[`Answer_${Z}_${uid}`] = chosen_Answers;

        if (FINAL_ARRAY[idx].right_answer === FINAL_ARRAY[idx][`answer_${Answers[`Answer_${Z}_${uid}`][idx + 1] + 1}`]) {
            if (!Array.isArray(string_array)) {
                string_array = [];
            }
            string_array[idx] = "true";
        } else {
            if (!Array.isArray(string_array)) {
                string_array = [];
            }
            string_array[idx] = "false";
        }
    }
}



Exams[`Exam_${Z}_${uid}`] = FINAL_ARRAY;
Answers[`Answer_${Z}_${uid}`] = chosen_Answers;
Dates[`Date_${Z}_${uid}`] = new Date().toLocaleString();
scores[`score_${Z}_${uid}`] = score / n;
status_string[`status_string_${Z}_${uid}`] = string_array;

SaveReloadCloud();
//0000000000000000000000000000000000000000000000000000000000000000000000000000

 } 


review_questions.classList.add('hidden-button', 'at-button');
atButtonContainer.appendChild(review_questions);
atButtons.push(review_questions);

}

for (let i = 1; i <= n; i++) {
    // i removed the "let"
    let firstBtn = document.createElement("button");
    let Status = document.createElement("label");
    Status.className='status';
    Status.id=`status_${i}`;
    firstBtn.className=`new_buttons`;
    firstBtn.id = `${i}`;
    firstBtn.textContent = `${i}`

  firstBtn.style.backgroundColor = (i % 2 === 0) ? "#f0f0f0" : "#ffffff";
  Status.className = 'status';
  Status.id = `status_${i}`;


    // Status.textContent="0"
  firstBtn.click(buttonEvent(i));

  document.getElementById("sidebar-scroll").appendChild(firstBtn);
  document.getElementById("sidebar-scroll").appendChild(Status);

  firstButtons.push(firstBtn);

 const targetIds_1 = ["2078","2076","8332","10507","2090","2101",
        "2086","2068","2082","2110","7228","7666",
        "2074","7214","2092","2084","7670",
        "2072","7226","2080","2099", "7218","2070",
        "2097","2061","2088","7660","7238"
      ];


 const targetIds_2 = ["2079", "2077", "8333", "10508", "2091","2102",
        "2087","2069","2083","2111","7229","7667",
        "2075","7215","2093","2085","7671",
        "2073","7227","2081","2100","7219","2071",
        "2098","2062","2089","7661","7239"
      ];
      
      


if (targetIds_1.includes(FINAL_ARRAY[i-1].id.toString())) {
    firstBtn.style.backgroundColor = '';
    firstBtn.classList.add('connected-buttons', 'first');
}



if (targetIds_2.includes(FINAL_ARRAY[i-1].id.toString())) {
    firstBtn.style.backgroundColor = '';
    firstBtn.classList.add('connected-buttons', 'last');
}

 }

firstButtons[0].click();

savefinal_arrayCloud();

   const selectedIds = new Set(FINAL_ARRAY.map(q => q.id));


   unusedIdsArrayCloud = unusedIdsArrayCloud.filter(id => !selectedIds.has(id));

   /* 12
      for (const key in unusedgroupAData) {
        unusedgroupAData[key] = unusedgroupAData[key].filter(q => !selectedIds.has(q.id));
      }
      for (const key in unusedgroupBData) {
        unusedgroupBData[key] = unusedgroupBData[key].filter(q => !selectedIds.has(q.id));
      }
*/



      quizArea.innerHTML = "";
      answersArea.innerHTML = "";
      explanationArea.innerHTML="";

      addQuestionData(FINAL_ARRAY[currentIndex], Final_Count);

if(all_marked.some(item => item.id === FINAL_ARRAY[currentIndex].id)){
flag_checkbox.checked=true;
      }

      if (isTimed==true){ 
        
        countdown( 90*Final_Count, Final_Count);
      
      }

      for ( let i=0;i<n;i++){
      chosen_Answers_string[i]="";
      }

      for (let i=0;i<n;i++){
        chosen_Answers[i]="100";
        }     

        // Click On Submit
      nextButton.onclick = () => {
     firstButtons[currentIndex+1].click();
      }
      
      quizApp.style.display='block';
      quizArea.style.display='block';
      answersArea.style.display='block';

document.getElementById("bottomBar").classList.remove("hidden");
document.getElementById("topBar").classList.remove("hidden");

   

for(let i=1;i<=Final_Count;i++){
if(all_marked.some(item => item.id === FINAL_ARRAY[i-1].id)){
 document.getElementById(`${i}`).classList.add('flagged');
      }
    }
  }





function Z_score(){
Exams[`Exam_${ Z}_${uid}`] = FINAL_ARRAY;
Answers[`Answer_${ Z}_${uid}`]=chosen_Answers;
Dates[`Date_${ Z}_${uid}`]= new Date().toLocaleString();
scores[`score_${ Z}_${uid}`] = score/n;
status_string[`status_string_${ Z}_${uid}`] = string_array ;

console.log("status",status_string[`status_string_${ Z}_${uid}`]);

let sum=0;
for (let i = 1; i <= Z; i++) {
  console.log(`🔄 Iteration ${i}`);
  console.log(`🧩 score key: score_${i}_${uid}`);
  console.log("📊 score value:", scores[`score_${i}_${uid}`]);
  console.log(`🧩 exam key: Exam_${i}_${uid}`);
  console.log("📚 exam array:", Exams[`Exam_${i}_${uid}`]);
  if (!Exams[`Exam_${i}_${uid}`]) {
    console.warn(`⚠️ Exam_${i}_${uid} is undefined or null`);
    continue;
  }
  console.log("📏 exam length:", Exams[`Exam_${i}_${uid}`].length);
  console.log("➕ calculation:", scores[`score_${i}_${uid}`], "*", Exams[`Exam_${i}_${uid}`].length);
  sum = sum + (scores[`score_${i}_${uid}`] * Exams[`Exam_${i}_${uid}`].length);
  console.log("🔢 updated sum:", sum);
}


for (let i = 1; i <= Z; i++) {

      if (Exams[`Exam_${i}_${uid}`] === undefined) {
        Exams[`Exam_${i}_${uid}`] = [];
    }
    if (scores[`score_${i}_${uid}`] === undefined) {
        scores[`score_${i}_${uid}`] = 0;
    }

    console.log(`📌 Loop i=${i}`);
    console.log(`   score value:`, scores[`score_${i}_${uid}`]);
    console.log(`    Exam_${i}_${uid}:`, Exams[`Exam_${i}_${uid}`]);
    console.log(`   product:`, scores[`score_${i}_${uid}`] * (Exams[`Exam_${i}_${uid}`] ? Exams[`Exam_${i}_${uid}`].length : 0));

sum=sum+(scores[`score_${i}_${uid}`]*(Exams[`Exam_${i}_${uid}`].length));
}

let sum_solved=0;
for (let i = 1; i <= Z; i++) {
  sum_solved=sum_solved+Exams[`Exam_${i}_${uid}`].length;
  }

if (sum_solved==0)(sum_solved=1);
  
SUM=(sum/ sum_solved)*100;
test_result_index = Z ;
}


function Finish(){
 loadingScreen.style.display = 'flex';
 console.time("TotalFunctionTime");
  icon_visibility.push(Z);
  theRightAnswer = FINAL_ARRAY[currentIndex].right_answer;
  currentIndex++;
  checkAnswer(theRightAnswer, Final_Count);
// First = all questions that are answered correctly in this exam.
let First=[];
  for ( let i=0 ; i<n; i++){
   real_Answers[i]=(FINAL_ARRAY[i].right_answer);
// this should be called here not inz_score to do the following function
Answers[`Answer_${Z}_${uid}`]=chosen_Answers;

if((FINAL_ARRAY[i].right_answer)==FINAL_ARRAY[i][`answer_${Answers[`Answer_${Z}_${uid}`][i+1]+1}`]){

if (!Array.isArray(string_array)) {
  string_array = [];
}

string_array[i]="true";
  score++;
  First = mergeArraysById(First, FINAL_ARRAY[i]);

  }else{

if (!Array.isArray(string_array)) {
  string_array = [];
}

string_array[i]="false";
all_incorrect = mergeArraysById(all_incorrect, FINAL_ARRAY[i]);
}}

    let Second=[];
for (let i = 0; i < all_incorrect.length; i++) {
for (let j = 0; j < First.length; j++) {
   if (all_incorrect[i].title == First[j].title) {
    Second.push(all_incorrect[i]);
 }}}
// here i will subtract the previously incorrect minus the correctly answerd now of them, to remove the correct from the incoorect array.

all_incorrect=arrayDiffByKey('title', all_incorrect, Second);

incorrectIdsArrayCloud=Array.from(new Set(all_incorrect.map(q => q.id)));

/* 6
const incorrectIds = new Set(all_incorrect.map(q => q.id));
// 🔁 Update Group A
for (const key in originalGroupAData) {
  incorrectGroupAData[key] = originalGroupAData[key].filter(q => incorrectIds.has(q.id));
}

// 🔁 Update Group B
for (const key in originalGroupBData) {
  incorrectGroupBData[key] = originalGroupBData[key].filter(q => incorrectIds.has(q.id));
}

console.log("incorrect", incorrectGroupAData );
*/

 markedIdsArrayCloud=Array.from(new Set(all_marked.map(q => q.id)));

 /* 7
const markedIds = new Set(all_marked.map(q => q.id));
  console.log(markedIds,"after");
  console.log(all_marked,"all_marked");


// 🔁 Update Group A
for (const key in originalGroupAData) {
  markedGroupAData[key] = originalGroupAData[key].filter(q => markedIds.has(q.id));
}

// 🔁 Update Group B
for (const key in originalGroupBData) {
  markedGroupBData[key] = originalGroupBData[key].filter(q => markedIds.has(q.id));
}

*/


  Z_score();

async function runSequence() {

await CombosaveValuesToFirestore();

  await movePAGE();
}



runSequence();

 async function movePAGE(){
loadingScreen.style.display = 'none';
window.location.href = "testresult.html"; 
 }  
};

window.Finish = Finish; // ✅ Expose it globally so HTML can call it


const buttonEvent = i => {
document.body.addEventListener( 'click',  (event)  => {

  if(event.target.id === i.toString()){ 

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const now = Date.now();
  if (lastStartIndex !== null && lastStartIndex !== i) {
   const diff = (now - lastStartTime) / 1000;
  if (!frozenFlags[lastStartIndex]) {
  accumulatedTimes[lastStartIndex] += diff;

  timeperQuestion[`timeperQuestion_${Z}_${uid}`][i]=accumulatedTimes[lastStartIndex];
  }

  activeTimers[lastStartIndex] = false;  // stop previous timer
}
 lastStartIndex = i;
 lastStartTime = now;
  // Only start timer if not frozen
 if (!frozenFlags[i]) {
 startTimes[i] = now;
 activeTimers[i] = true;
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Hide all "@" buttons
  atButtons.forEach(atButton => atButton.classList.remove('visible-button'));
  // Show the corresponding "@" button
  atButtons[i - 1].classList.add('visible-button');

  theRightAnswer = FINAL_ARRAY[currentIndex].right_answer;
  currentIndex++;
  checkAnswer(theRightAnswer, Final_Count);
  currentIndex=i-1;            
  if(document.getElementById(`status_${i}`).textContent == `*`){flag_checkbox.checked=true}
   
  if (currentIndex>=(n-1)){nextButton.style.display='none'}else{
  nextButton.style.display='block' }
    
  quizArea.innerHTML = "";
  answersArea.innerHTML = "";
  explanationArea.innerHTML="";

addQuestionData(FINAL_ARRAY[currentIndex], Final_Count);
if(all_marked.some(item => item.id === FINAL_ARRAY[currentIndex].id)){
flag_checkbox.checked=true;
      }            


  answers = document.getElementsByName("question");
  for (let m =0 ;m< answers.length;m++){
    if (chosen_Answers[currentIndex+1]==m){answers[m].checked=true}
    }
  
    if (atButtonClicked[i - 1]==true) {
      atButtons[i - 1].click();
    }
};
        });
      }      

window.toggleFullscreen = function() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      alert(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
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


// this creates an explanation normal table use "table"
function displayCustomTable(data,targetElement) {
  if (
    !data ||                         // raw is null, undefined, or empty
    typeof data !== 'string' ||       // raw is not a string
    data.trim() === ""                // raw is only spaces
  ) {
    console.warn("⚠️ Invalid table data. Skipping table generation.");
    return; // Exit if no valid string
  }

  const raw = data
  .replace(/\$/g, "<br>")                              // 🔥 Replace $ with <br>
  .replace(/==/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"); // 🔥 Replace 00 with big space
  
  const titleMatch = raw.match(/!(.+?)!/);
  const mainTitle = titleMatch ? titleMatch[1].trim() : "";

  const cleanText = raw.replace(/%.*$/, "").trim();
  const footnoteMatch = raw.match(/%(.*?)$/);
  const footnote = footnoteMatch ? footnoteMatch[1].trim() : "";

  const bodySections = cleanText
    .split("?")
    .slice(1)
    .map((entry) => entry.trim());

  const container = document.createElement("div");
  container.style.marginTop = "30px";

  const tableElem = document.createElement("table");
  tableElem.style.cssText = `
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    margin-left: 0;
    margin-top: 20px;
    width: auto;
  `;

  const thead = document.createElement("thead");
  thead.innerHTML = `<tr>
    <th colspan="2" style="border: 1px solid black; padding: 10px 20px; background: transparent; font-size: 20px; text-align: center;">
      ${mainTitle}
    </th>
  </tr>`;
  tableElem.appendChild(thead);

  const tbody = document.createElement("tbody");

  for (let i = 0; i < bodySections.length; i += 2) {
    const sectionTitle = bodySections[i];
    const rawContent = bodySections[i + 1] || "";

    const formattedContent = rawContent
      .split("•")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item, idx) =>
        idx === 0
          ? `• ${item.replace(/#(.*?)#/g, "<strong>$1</strong>").replace(/&gt;/g, ">")}`
          : `<br>• ${item.replace(/#(.*?)#/g, "<strong>$1</strong>").replace(/&gt;/g, ">")}`
      )
      .join("");

    const row = document.createElement("tr");

    const th = document.createElement("th");
    th.innerHTML = `<div style="display:flex;justify-content:center;align-items:center;height:100%;width:100%;font-size:17px;">${sectionTitle}</div>`;
    th.style.cssText = `
      border: 1px solid black;
      padding: 8px 12px;
      white-space: nowrap;
      vertical-align: middle;
      text-align: center;
      background-color: transparent;
    `;

    const td = document.createElement("td");
    td.innerHTML = formattedContent;
    td.style.cssText = `
      border: 1px solid black;
      padding: 8px 12px;
      font-size: 15px;
      line-height: 1.6;
      vertical-align: top;
      white-space: nowrap;
    `;
    td.addEventListener("mouseup", function () {
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) {
        const range = selection.getRangeAt(0);
    
        // Make sure we are checking the parent element if it's a text node
        const startNode = range.startContainer.nodeType === Node.ELEMENT_NODE 
                          ? range.startContainer 
                          : range.startContainer.parentElement;
        const endNode = range.endContainer.nodeType === Node.ELEMENT_NODE 
                        ? range.endContainer 
                        : range.endContainer.parentElement;
    
        const startTd = startNode.closest("td");
        const endTd = endNode.closest("td");
    
        if (startTd !== this || endTd !== this) {
          // Selection spans multiple td's, do nothing
          selection.removeAllRanges();
          return;
        }
    
        const span = document.createElement("span");
        span.style.backgroundColor =  'rgba(253, 250, 50, 0.664)';
 //      span.style.transition = "background-color 2s ease";
    
        const frag = range.cloneContents();
        span.appendChild(frag);
    
        range.deleteContents();
        range.insertNode(span);
    
        selection.removeAllRanges();

      }
    });
    
    

    row.appendChild(th);
    row.appendChild(td);
    tbody.appendChild(row);
  }

  tableElem.appendChild(tbody);
  container.appendChild(tableElem);

  if (footnote) {
    const footnoteDiv = document.createElement("div");
    footnoteDiv.innerHTML = footnote.replace(/#(.*?)#/g, "<strong>$1</strong>");
    footnoteDiv.style.cssText = `
      font-size: 14px;
      font-style: italic;
      text-align: left;
      margin-top: 5px; 
      margin-left: 10px; 
    `;
    container.appendChild(footnoteDiv);
  }

if (targetElement) {
  targetElement.appendChild(container);
} else {
  console.warn("⚠️ No target element provided to displayCustomTable!");
}

}

///////////////////////////////////////////////////////////

// not used 
function displayCustomTable_title(data,targetElement) {
  if (
    !data ||                         // raw is null, undefined, or empty
    typeof data !== 'string' ||       // raw is not a string
    data.trim() === ""                // raw is only spaces
  ) {
    console.warn("⚠️ Invalid table data. Skipping table generation.");
    return; // Exit if no valid string
  }


  const raw = data
  .replace(/\$/g, "<br>")                              // 🔥 Replace $ with <br>
  .replace(/==/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"); // 🔥 Replace 00 with big space
  
  const titleMatch = raw.match(/!(.+?)!/);
  const mainTitle = titleMatch ? titleMatch[1].trim() : "";

  const cleanText = raw.replace(/%.*$/, "").trim();
  const footnoteMatch = raw.match(/%(.*?)$/);
  const footnote = footnoteMatch ? footnoteMatch[1].trim() : "";

  const bodySections = cleanText
    .split("?")
    .slice(1)
    .map((entry) => entry.trim());

  const container = document.createElement("div");
  container.style.marginTop = "30px";

  const tableElem = document.createElement("table");
  tableElem.style.cssText = `
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  margin-left: 0;
  margin-top: 20px;
  width: auto;
  border: none;
`;



  const thead = document.createElement("thead");
  thead.innerHTML = `<tr>
  <th colspan="2" style="border: none; padding: 10px 20px; font-size: 20px; text-align: center;">
    ${mainTitle}
  </th>
</tr>`;

  tableElem.appendChild(thead);

  const tbody = document.createElement("tbody");

  for (let i = 0; i < bodySections.length; i += 2) {
    const sectionTitle = bodySections[i];
    const rawContent = bodySections[i + 1] || "";

    const formattedContent = rawContent
      .split("•")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item, idx) =>
        idx === 0
          ? `${item.replace(/#(.*?)#/g, "<strong>$1</strong>").replace(/&gt;/g, ">")}`
          : `<br>• ${item.replace(/#(.*?)#/g, "<strong>$1</strong>").replace(/&gt;/g, ">")}`
      )
      .join("");

    const row = document.createElement("tr");

    const th = document.createElement("th");
    th.innerHTML = `<div style="display:flex;justify-content:center;align-items:center;height:100%;width:100%;font-size:17px;">${sectionTitle}</div>`;
    th.style.cssText = `
    border: none;
    padding: 8px 12px;
    white-space: nowrap;
    vertical-align: middle;
    text-align: center;
  `;
  

    const td = document.createElement("td");
    td.innerHTML = formattedContent;
    td.style.cssText = `
    border: none;
    padding: 8px 12px;
    font-size: 15px;
    line-height: 1.6;
    vertical-align: top;
    white-space: nowrap;
  `;
  

  td.addEventListener("mouseup", function () {
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) {
        const range = selection.getRangeAt(0);
    
        // Make sure we are checking the parent element if it's a text node
        const startNode = range.startContainer.nodeType === Node.ELEMENT_NODE 
                          ? range.startContainer 
                          : range.startContainer.parentElement;
        const endNode = range.endContainer.nodeType === Node.ELEMENT_NODE 
                        ? range.endContainer 
                        : range.endContainer.parentElement;
    
        const startTd = startNode.closest("td");
        const endTd = endNode.closest("td");
    
        if (startTd !== this || endTd !== this) {
          // Selection spans multiple td's, do nothing
          selection.removeAllRanges();
          return;
        }
    
        const span = document.createElement("span");
        span.style.backgroundColor =  'rgba(253, 250, 50, 0.664)';
 //      span.style.transition = "background-color 2s ease";
    
        const frag = range.cloneContents();
        span.appendChild(frag);
    
        range.deleteContents();
        range.insertNode(span);
    
        selection.removeAllRanges();

      }
    });
    
    

    row.appendChild(th);
    row.appendChild(td);
    tbody.appendChild(row);
  }

  tableElem.appendChild(tbody);
  container.appendChild(tableElem);

  if (footnote) {
    const footnoteDiv = document.createElement("div");
    footnoteDiv.innerHTML = footnote.replace(/#(.*?)#/g, "<strong>$1</strong>");
    footnoteDiv.style.cssText = `
      font-size: 14px;
      font-style: italic;
      text-align: left;
      margin-top: 5px; 
      margin-left: 100px; 
    `;
    container.appendChild(footnoteDiv);
  }

if (targetElement) {
  targetElement.appendChild(container);
} else {
  console.warn("⚠️ No target element provided to displayCustomTable!");
}

}




//this creates multicolumns table in question title, use "title_table_3"
function display_3_columns(data, targetElement) {
  if (!data || typeof data !== "string" || data.trim() === "") return;

  // Extract and remove footnote
  const footnoteMatch = data.match(/%(.*?)$/);
  const footnoteTextRaw = footnoteMatch ? footnoteMatch[1].trim() : null;
  data = data.replace(/%(.*?)$/, "").trim();

  // Extract and remove title using !
  let titleText = "";
  const titleMatch = data.match(/^!(.*?)!/);
  if (titleMatch) {
    titleText = titleMatch[1].trim();
    data = data.replace(/^!(.*?)!/, "").trim();
  }



    // Extract and remove ⨀ text (below table)
    let belowText = "";
    const belowMatch = data.match(/⨀(.*?)⨀/);
    if (belowMatch) {
      belowText = belowMatch[1].trim();
      data = data.replace(/⨀(.*?)⨀/, "").trim();
    }


  const rows = data.split("§").map(row => row.trim()).filter(Boolean);
  if (rows.length === 0) return;

  const container = document.createElement("div");
  container.style.marginTop = "20px";
  container.style.textAlign = "left";

  // Add title
  if (titleText) {
    const titleElem = document.createElement("div");
    titleElem.innerHTML = `<strong>${titleText}</strong>`;
    titleElem.style.cssText = `
      font-family: Arial, sans-serif;
      font-size: 17px;
      margin-bottom: 15px;
      font-weight: bold;
      text-align: left;
      padding-left: 150px;
    `;
    container.appendChild(titleElem);
  }

  const tableElem = document.createElement("table");
  tableElem.style.cssText = `
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    background-color: transparent;
    margin-left: 0;
  `;

  const tbody = document.createElement("tbody");
  const cellMatrix = [];

  rows.forEach((rowText, rowIndex) => {
    const tr = document.createElement("tr");
    const columns = rowText.split("∆");
    cellMatrix[rowIndex] = [];

    for (let colIndex = 0; colIndex < columns.length; colIndex++) {
      let colText = columns[colIndex].trim();

      if (colText === "↕") {
        let r = rowIndex - 1;
        while (r >= 0 && !cellMatrix[r][colIndex]) r--;
        if (cellMatrix[r] && cellMatrix[r][colIndex]) {
          const cellAbove = cellMatrix[r][colIndex];
          const currentRowSpan = parseInt(cellAbove.getAttribute("rowSpan") || "1", 10);
          cellAbove.setAttribute("rowSpan", currentRowSpan + 1);
        }
        continue;
      }

      if (colText === "⨉") {
        const cells = tr.children;
        const lastCell = cells[cells.length - 1];
        const currentColSpan = parseInt(lastCell.getAttribute("colSpan") || "1", 10);
        lastCell.setAttribute("colSpan", currentColSpan + 1);
        cellMatrix[rowIndex][colIndex] = lastCell;
        continue;
      }

      const isHeader = rowIndex === 0;
      const isCentered = colText.startsWith("^");
      if (isCentered) colText = colText.slice(1);

      const cell = isHeader ? document.createElement("th") : document.createElement("td");

      const finalText = colText
        .replace(/#(.*?)#/g, "<strong>$1</strong>")
        .replace(/\$/g, "<br>")
        .replace(/==/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
        .replace(/•/g, (match, offset, str) => {
          const first = str.indexOf("•");
          return offset === first ? "•" : "<br>•";
        });

      cell.innerHTML = finalText;
      cell.style.cssText = `
        padding: 10px 16px;
        text-align: ${isCentered ? "center" : "left"};
        vertical-align: middle;
        white-space: nowrap;
        font-weight: normal;
        background-color: transparent;
        ${rowIndex !== 0 ? `
          max-width: 520px;
          white-space: normal;
          word-wrap: break-word;
          overflow-wrap: break-word;
        ` : `
          white-space: nowrap;
        `}
      `;

      tr.appendChild(cell);
      cellMatrix[rowIndex][colIndex] = cell;
    }

    tbody.appendChild(tr);
  });

  tableElem.appendChild(tbody);
  container.appendChild(tableElem);

  // Add footnote if exists
  if (footnoteTextRaw) {
    const footnote = document.createElement("div");
    footnote.innerHTML = "* " + footnoteTextRaw
      .replace(/#(.*?)#/g, "<strong>$1</strong>")
      .replace(/\$/g, "<br>");
    footnote.style.cssText = `
      margin-top: 10px;
      font-size: 13px;
      font-style: italic;
      color: #555;
      text-align: left;
    `;
    container.appendChild(footnote);
  }



    // Add ⨀ below text if present
    if (belowText) {
      const belowElem = document.createElement("div");
      belowElem.innerHTML = belowText
        .replace(/#(.*?)#/g, "<strong>$1</strong>")
        .replace(/\$/g, "<br>");
      belowElem.style.cssText = `
        margin-top: 10px;
        font-size: 16px;
        color: #333;
        text-align: left;
      `;
      container.appendChild(belowElem);
    }

  if (targetElement) {
    targetElement.appendChild(container);
  } else {
    console.warn("⚠️ No target element provided to display_3_columns");
  }
}

//----------------------------------------------------------------------------------
// this function creates a multi coulumns table in explanation use "table_3"

function display_3_columns_explanation(data, targetElement) {
  if (!data || typeof data !== "string" || data.trim() === "") return;

  // Extract and remove footnote
  const footnoteMatch = data.match(/%(.*?)$/);
  const footnoteTextRaw = footnoteMatch ? footnoteMatch[1].trim() : null;
  data = data.replace(/%(.*?)$/, "").trim();

  // Extract and remove title using !
  let titleText = "";
  const titleMatch = data.match(/^!(.*?)!/);
  if (titleMatch) {
    titleText = titleMatch[1].trim();
    data = data.replace(/^!(.*?)!/, "").trim();
  }

  const rows = data.split("§").map(row => row.trim()).filter(Boolean);
  if (rows.length === 0) {
    console.warn("⚠️ Table data is empty after processing.");
    return;
  }

  const container = document.createElement("div");
  container.style.marginTop = "30px";
  container.style.textAlign = "center"; // <<=== Center everything inside container

  // Add title if extracted
  if (titleText) {
    const titleElem = document.createElement("div");
    titleElem.innerHTML = `<strong>${titleText}</strong>`;
    titleElem.style.cssText = `
      font-family: Arial, sans-serif;
      font-size: 22px;
      margin-bottom: 15px;
      font-weight: bold;
      text-align: center;
    `;
    container.appendChild(titleElem);
  }

  const tableElem = document.createElement("table");
  tableElem.style.cssText = `
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    width: auto;
    background-color: transparent;
    margin: 0; /* Now left-aligned */
  `;


  const tbody = document.createElement("tbody");

  rows.forEach((rowText, rowIndex) => {
    const columns = rowText.split("∆").map(col => col.trim());
    const tr = document.createElement("tr");

    columns.forEach((colText, colIndex) => {
      const isHeader = rowIndex === 0;
      const isFirstCol = colIndex === 0;
      const cell = isHeader ? document.createElement("th") : document.createElement("td");

      cell.innerHTML = colText
        .replace(/#(.*?)#/g, "<strong>$1</strong>") // bold
        .replace(/\$/g, "<br>"); // line break

      cell.style.cssText = `
        padding: 10px 16px;
        border: 1px solid black;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        font-weight: ${isHeader || isFirstCol ? 'bold' : 'normal'};
        background-color: transparent;      `;

      tr.appendChild(cell);
    });

    tbody.appendChild(tr);
  });

  tableElem.appendChild(tbody);
  container.appendChild(tableElem);

  // Add footnote if extracted
  if (footnoteTextRaw) {
    const footnote = document.createElement("div");
    footnote.innerHTML = `* ` + footnoteTextRaw
      .replace(/#(.*?)#/g, "<strong>$1</strong>") // bold in footnote
      .replace(/\$/g, "<br>"); // line break in footnote

    footnote.style.cssText = `
      margin-top: 10px;
      font-size: 13px;
      font-style: italic;
      color: #555;
      text-align: center;
    `;
    container.appendChild(footnote);
  }

  if (targetElement) {
    targetElement.appendChild(container);
  } else {
    console.warn("⚠️ No target element provided to display_3_columns_explanation!");
  }
}


//-----------------------------------------------------------------------------------------------------
// this creates anormal title table in question title, use "title_table"

function displayCustomTable_3(data, targetElement) {
  if (!data || typeof data !== "string" || data.trim() === "") {
    return;
  }


    // Extract text between ⨀ and remove it from data
  const circleMatch = data.match(/⨀(.*?)⨀/);
  const circleText = circleMatch ? circleMatch[1].trim() : "";
  data = data.replace(/⨀(.*?)⨀/, ""); // remove ⨀ section
  //
  //
  //
  const raw = data
    .replace(/\$/g, "<br>") // $ becomes new line
    .replace(/==/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"); // == becomes big space

  const cleanText = raw.trim();
  const elements = cleanText.split("!").map((el) => el.trim()).filter(Boolean);

  const container = document.createElement("div");
  container.style.marginTop = "10px";
  container.style.marginBottom = "10px";

  const tableElem = document.createElement("table");
  tableElem.style.cssText = `
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    margin: 0;
    background-color: transparent;
    width: auto;
  `;
  const tbody = document.createElement("tbody");

  for (let el of elements) {
    if (!el.includes("?")) {
      // New Section Title Row
      const titleRow = document.createElement("tr");
      const titleCell = document.createElement("th");
      titleCell.colSpan = 2;
      titleCell.innerHTML = el.replace(/#(.*?)#/g, "<strong>$1</strong>");
   /*   titleCell.style.cssText = `
        border: none;
        padding: 10px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      `;
      */


  titleCell.style.cssText = `
  border: none;
  padding: 10px;
  text-align: left;
  font-size: 20px;
  font-weight: normal;
`;
      titleRow.appendChild(titleCell);
      tbody.appendChild(titleRow);
    } else {
      // Data Row
      const items = el.split("?").filter((x) => x.trim() !== "");
      for (let i = 0; i < items.length; i += 2) {
        const left = items[i] || "";
        const right = items[i + 1] || "";
        const row = document.createElement("tr");

        const td1 = document.createElement("td");
        /*td1.innerHTML = left.replace(/#(.*?)#/g, "<strong>$1</strong>");
*/
td1.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + left.replace(/#(.*?)#/g, "<strong>$1</strong>");

        td1.style.cssText = `
          border: none;
          padding: 8px 12px;
          vertical-align: top;
          white-space: nowrap;
        `;

        const td2 = document.createElement("td");
      /*  td2.innerHTML = right.replace(/#(.*?)#/g, "<strong>$1</strong>");*/
      td2.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + right.replace(/#(.*?)#/g, "<strong>$1</strong>");

        td2.style.cssText = `
          border: none;
          padding: 8px 12px;
          vertical-align: top;
          white-space: nowrap;
        `;

        row.appendChild(td1);
        row.appendChild(td2);
        tbody.appendChild(row);
      }
    }
  }

  tableElem.appendChild(tbody);
  container.appendChild(tableElem);

//
//
//
// Append circleText if present
  if (circleText) {
    const circleElem = document.createElement("div");
    circleElem.textContent = circleText;
    circleElem.style.cssText = `
      margin-top: 10px;
      font-family: Arial, sans-serif;
      font-size: 16px;
    `;
    container.appendChild(circleElem);
  }

  if (targetElement) {
    targetElement.appendChild(container);
  } else {
    console.warn("⚠️ No target element provided to displayCustomTable_3!");
  }
}

//================================================================
function styling(data, targetElement) {
  if (!data || typeof data !== "string" || data.trim() === "") return;

  // Extract and remove footnote
  const footnoteMatch = data.match(/%(.*?)$/);
  const footnoteTextRaw = footnoteMatch ? footnoteMatch[1].trim() : null;
  data = data.replace(/%(.*?)$/, "").trim();

  // Extract and remove title using !
  let titleText = "";
  const titleMatch = data.match(/^!(.*?)!/);
  if (titleMatch) {
    titleText = titleMatch[1].trim();
    data = data.replace(/^!(.*?)!/, "").trim();
  }

  // Extract and remove text above table using ⟡
  let aboveText = "";
  const aboveMatch = data.match(/⟡(.*?)⟡/);
  if (aboveMatch) {
    aboveText = aboveMatch[1].trim();
    data = data.replace(/⟡(.*?)⟡/, "").trim();
  }

  // Extract and remove text under table using ⨀
  let belowText = "";
  const belowMatch = data.match(/⨀(.*?)⨀/);
  if (belowMatch) {
    belowText = belowMatch[1].trim();
    data = data.replace(/⨀(.*?)⨀/, "").trim();
  }

  const rows = data.split("§").map(row => row.trim()).filter(Boolean);
  if (rows.length === 0) return;

  const container = document.createElement("div");
  container.style.marginTop = "30px";
  container.style.textAlign = "left"; // Table starts at left

  // Add above-text
  if (aboveText) {
    const aboveElem = document.createElement("div");
    aboveElem.innerHTML = aboveText
      .replace(/#(.*?)#/g, "<strong>$1</strong>")
      .replace(/\$/g, "<br>");
    aboveElem.style.cssText = `
      font-family: Arial, sans-serif;
      font-size: 17px;
      margin-bottom: 15px;
      text-align: left;

    `;
    container.appendChild(aboveElem);
  }

  // Add title
  if (titleText) {
    const titleElem = document.createElement("div");
    titleElem.innerHTML = `<strong>${titleText}</strong>`;
    titleElem.style.cssText = `
      font-family: Arial, sans-serif;
      font-size: 17px;
      margin-bottom: 15px;
      font-weight: bold;
      text-align: left;
      padding-left: 150px; 
    `;
    container.appendChild(titleElem);
  }

  const tableElem = document.createElement("table");
  tableElem.style.cssText = `
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    background-color: transparent;
    margin-left: 0;
  `;

  const tbody = document.createElement("tbody");
  const cellMatrix = [];

  rows.forEach((rowText, rowIndex) => {
    const tr = document.createElement("tr");
    const columns = rowText.split("∆");
    cellMatrix[rowIndex] = [];

    for (let colIndex = 0; colIndex < columns.length; colIndex++) {
      let colText = columns[colIndex].trim();

      if (colText === "↕") {
        // Vertical merge
        let r = rowIndex - 1;
        while (r >= 0 && !cellMatrix[r][colIndex]) r--;
        if (cellMatrix[r] && cellMatrix[r][colIndex]) {
          const cellAbove = cellMatrix[r][colIndex];
          const currentRowSpan = parseInt(cellAbove.getAttribute("rowSpan") || "1", 10);
          cellAbove.setAttribute("rowSpan", currentRowSpan + 1);
        }
        continue;
      }

      if (colText === "⨉") {
        const cells = tr.children;
        const lastCell = cells[cells.length - 1];
        const currentColSpan = parseInt(lastCell.getAttribute("colSpan") || "1", 10);
        lastCell.setAttribute("colSpan", currentColSpan + 1);
        cellMatrix[rowIndex][colIndex] = lastCell;
        continue;
      }

      const isHeader = rowIndex === 0;
      const isFirstCol = colIndex === 0;
      const isCentered = colText.startsWith("^");
      if (isCentered) colText = colText.slice(1);

      const cell = isHeader ? document.createElement("th") : document.createElement("td");
    
      const finalText = colText
      .replace(/#(.*?)#/g, "<strong>$1</strong>")
      .replace(/\$/g, "<br>")
      .replace(/\👁/g, "")
      .replace(/==/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;") // == becomes big space
      .replace(/•/g, (match, offset, str) => {
        const first = str.indexOf("•");
        return offset === first ? "•" : "<br>•";
      });

      cell.innerHTML = finalText;
      cell.style.cssText = `
        padding: 10px 16px;
        border: 1px solid black;
        text-align: ${isCentered ? "center" : "left"};
        vertical-align: middle;
        white-space: nowrap;
        font-weight: normal;
        background-color: transparent;
        ${rowIndex !== 0 ? `
          max-width: 520px;
          white-space: normal;
          word-wrap: break-word;
          overflow-wrap: break-word;
        ` : `
          white-space: nowrap;
        `}
      `;

      if (colText.startsWith("👁")) {
        cell.style.border = "none";
        cell.style.backgroundColor = 'transparent';
      }

      tr.appendChild(cell);
      cellMatrix[rowIndex][colIndex] = cell;
    }

    tbody.appendChild(tr);
  });

  tableElem.appendChild(tbody);
  container.appendChild(tableElem);

  // Add footnote if exists
  if (footnoteTextRaw) {
    const footnote = document.createElement("div");
    footnote.innerHTML = "* " + footnoteTextRaw
      .replace(/#(.*?)#/g, "<strong>$1</strong>")
      .replace(/\$/g, "<br>");
    footnote.style.cssText = `
      margin-top: 10px;
      font-size: 13px;
      font-style: italic;
      color: #555;
      text-align: left;
    `;
    container.appendChild(footnote);
  }

  // Add below-text if exists
  if (belowText) {
    const belowElem = document.createElement("div");
    belowElem.innerHTML = belowText
      .replace(/#(.*?)#/g, "<strong>$1</strong>")
      .replace(/\$/g, "<br>");
    belowElem.style.cssText = `
      margin-top: 14px;
      font-size: 17px;

      text-align: left;

    `;
    container.appendChild(belowElem);
  }

  if (targetElement) {
    targetElement.appendChild(container);
  } else {
    console.warn("⚠️ No target element provided to display_3_columns_explanation!");
  }
}


function tablingQuestion(data, targetElement) {  
  if (!data || typeof data !== "string" || data.trim() === "") return;

  const rows = data.split("§").map(row => row.trim()).filter(Boolean);
  if (rows.length === 0) return;

  //const container = document.createElement("div");
  targetElement.style.marginTop = "15px";
  targetElement.style.textAlign = "left"; // Table starts at left

  const tableElem = document.createElement("table");

tableElem.style.cssText = `
  cursor: pointer;
  font-weight: bold;
  color: #777;
  font-size: 14px;
  margin-left: 5px;
  position: relative;
  top: 0px;
`;





  const tbody = document.createElement("tbody");
  const cellMatrix = [];

  rows.forEach((rowText, rowIndex) => {
    const tr = document.createElement("tr");
    const columns = rowText.split("∆");
    cellMatrix[rowIndex] = [];

    for (let colIndex = 0; colIndex < columns.length; colIndex++) {
      let colText = columns[colIndex].trim();

      if (colText === "↕") {
        let r = rowIndex - 1;
        while (r >= 0 && !cellMatrix[r][colIndex]) r--;
        if (cellMatrix[r] && cellMatrix[r][colIndex]) {
          const cellAbove = cellMatrix[r][colIndex];
          const currentRowSpan = parseInt(cellAbove.getAttribute("rowSpan") || "1", 10);
          cellAbove.setAttribute("rowSpan", currentRowSpan + 1);
        }
        continue;
      }

      if (colText === "⨉") {
        const cells = tr.children;
        const lastCell = cells[cells.length - 1];
        const currentColSpan = parseInt(lastCell.getAttribute("colSpan") || "1", 10);
        lastCell.setAttribute("colSpan", currentColSpan + 1);
        cellMatrix[rowIndex][colIndex] = lastCell;
        continue;
      }

      const isHeader = rowIndex === 0;
      const isFirstCol = colIndex === 0;
      const isCentered = colText.startsWith("^");
      if (isCentered) colText = colText.slice(1);

      const cell = isHeader ? document.createElement("th") : document.createElement("td");

      const finalText = colText
        .replace(/#(.*?)#/g, "<strong>$1</strong>")
        .replace(/\$/g, "<br>")
        .replace(/==/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
        .replace(/•/g, (match, offset, str) => {
          const first = str.indexOf("•");
          return offset === first ? "•" : "<br>•";
        });

      cell.innerHTML = finalText;

      cell.style.cssText = `
  padding: 0px 16px;
  border: none;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  white-space: normal;
  overflow-wrap: normal;
  word-break: normal;
`;

      if (colIndex === 0) {
        cell.style.width = "20px";
        cell.style.maxWidth = "20px";
      } else {
        cell.style.width = "120px";
        cell.style.maxWidth = "120px";
      }

      tr.appendChild(cell);
      cellMatrix[rowIndex][colIndex] = cell;
    }

    tbody.appendChild(tr);
  });

  tableElem.appendChild(tbody);
 // container.appendChild(tableElem);
targetElement.appendChild(tableElem);


  if (targetElement) {
 //   targetElement.appendChild(container);
  } else {
    console.warn("⚠️ No target element provided to tablingQuestion!");
  }
}



function tablingQuestionComparison(data, targetElement) {  
  if (!data || typeof data !== "string" || data.trim() === "") return;

  const rows = data.split("§").map(row => row.trim()).filter(Boolean);
  if (rows.length === 0) return;

  const container = document.createElement("div");
  container.style.marginTop = "15px";
  container.style.textAlign = "left"; // Table starts at left
container.style.marginLeft = "56px";

  const tableElem = document.createElement("table");

tableElem.style.cssText = `
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  background-color: transparent;
  margin-left: 0px;

`;


  const tbody = document.createElement("tbody");
  const cellMatrix = [];

  rows.forEach((rowText, rowIndex) => {
    const tr = document.createElement("tr");
    const columns = rowText.split("∆");
    cellMatrix[rowIndex] = [];

    for (let colIndex = 0; colIndex < columns.length; colIndex++) {
      let colText = columns[colIndex].trim();

      if (colText === "↕") {
        let r = rowIndex - 1;
        while (r >= 0 && !cellMatrix[r][colIndex]) r--;
        if (cellMatrix[r] && cellMatrix[r][colIndex]) {
          const cellAbove = cellMatrix[r][colIndex];
          const currentRowSpan = parseInt(cellAbove.getAttribute("rowSpan") || "1", 10);
          cellAbove.setAttribute("rowSpan", currentRowSpan + 1);
        }
        continue;
      }

      if (colText === "⨉") {
        const cells = tr.children;
        const lastCell = cells[cells.length - 1];
        const currentColSpan = parseInt(lastCell.getAttribute("colSpan") || "1", 10);
        lastCell.setAttribute("colSpan", currentColSpan + 1);
        cellMatrix[rowIndex][colIndex] = lastCell;
        continue;
      }

      const isHeader = rowIndex === 0;
      const isFirstCol = colIndex === 0;
      const isCentered = colText.startsWith("^");
      if (isCentered) colText = colText.slice(1);

      const cell = isHeader ? document.createElement("th") : document.createElement("td");

      const finalText = colText
        .replace(/#(.*?)#/g, "<strong>$1</strong>")
        .replace(/\$/g, "<br>")
        .replace(/==/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
        .replace(/•/g, (match, offset, str) => {
          const first = str.indexOf("•");
          return offset === first ? "•" : "<br>•";
        });

      cell.innerHTML = finalText;

      cell.style.cssText = `
  padding: 10px 16px;
  border: none;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  white-space: normal;
  overflow-wrap: normal;
  word-break: normal;
`;

      if (colIndex === 0) {
        cell.style.width = "20px";
        cell.style.maxWidth = "20px";
      } else {
        cell.style.width = "120px";
        cell.style.maxWidth = "120px";
      }

      tr.appendChild(cell);
      cellMatrix[rowIndex][colIndex] = cell;
    }

    tbody.appendChild(tr);
  });

  tableElem.appendChild(tbody);
  container.appendChild(tableElem);

  if (targetElement) {
    targetElement.appendChild(container);
  } else {
    console.warn("⚠️ No target element provided to tablingQuestion!");
  }
}



window.loadLabValues = function() {
    fetch('labvalues.html')
      .then(res => res.text())
      .then(html => {
        document.getElementById('lab-values-container').innerHTML = html;

        // Reload script
        const script = document.createElement('script');
        script.src = 'labvalues.js';
        script.onload = () => {
          openLabModal();         // show popup
          showSerumTable();       // default: show serum table
        };
        document.body.appendChild(script);
      });
  }

window.loadCalculator = function() {
  const container = document.getElementById('calculator-container');
  container.innerHTML = ''; // Clear previous content

  // Remove previous script
  const oldScript = document.getElementById('calculator-script');
  if (oldScript) oldScript.remove();

  // Load calculator HTML
  fetch('calculator.html')
    .then(res => res.text())
    .then(html => {
      container.innerHTML = html;

      // Inject calculator.js with a slight delay
      setTimeout(() => {
        const script = document.createElement('script');
        script.id = 'calculator-script';
        script.src = 'calculator.js';
        document.body.appendChild(script);
      }, 50); // delay ensures DOM is present before script runs
    });
}



  window.goToNext = function () {
  if (currentIndex + 1 < firstButtons.length) {
    firstButtons[currentIndex + 1].click();
  }
}

window.goToPrevious = function () {
  if (currentIndex - 1 >= 0) {
    firstButtons[currentIndex - 1].click();
  }
}



window.Suspend = function () {
  loadingScreen.style.display = 'flex';



  // here it is almost the same as finish button, how every in icnorrect question only apply
  //  for already sumbitted answers not only checked answers

  theRightAnswer = FINAL_ARRAY[currentIndex].right_answer;
  currentIndex++;
  checkAnswer(theRightAnswer, Final_Count);

// First = all questions that are answered correctly in this exam.
let First=[];

for ( let i=0 ; i<n; i++){
// this line only exist in "suspend" it will only check the submitted questions if they correct or not
// and ignore the not yet sumbitted questions

if (submitted_string[`submitted_string_${Z}_${uid}`][i] == true){

   real_Answers[i]=(FINAL_ARRAY[i].right_answer);
   Answers[`Answer_${Z}_${uid}`]=chosen_Answers;
  // if (String(real_Answers[i])===String(chosen_Answers_string[i+1])){
  if((FINAL_ARRAY[i].right_answer)==FINAL_ARRAY[i][`answer_${Answers[`Answer_${Z}_${uid}`][i+1]+1}`]){

if (!Array.isArray(string_array)) {
  string_array = [];
}
string_array[i]="true";
    score++;
  First = mergeArraysById(First, FINAL_ARRAY[i]);
  }else{
    if (!Array.isArray(string_array)) {
    string_array = [];
    }
string_array[i]="false";
    all_incorrect = mergeArraysById(all_incorrect, FINAL_ARRAY[i]);

    } 
    }
  }

// Second= all questions that are answered correctly in this exam and mutual of the previously called incorrect questions. for a reason to edit the newly incorrect questions by subtraction.   
let Second=[];
for (let i = 0; i < all_incorrect.length; i++) {
for (let j = 0; j < First.length; j++) {
   if (all_incorrect[i].title == First[j].title) {
    Second.push(all_incorrect[i]);
 }}}
// here i will subtract the previously incorrect minus the correctly answerd now of them, to remove the correct from the incoorect array.

all_incorrect=arrayDiffByKey('title', all_incorrect, Second);
console.log(all_incorrect);
// if it is too slow, shoten this, put only(if uncorrectwas checked); or put it in a new finish_incorrect function, and remove scoring/
// // hdol elli ta7t ew3ak tghayer m7alhom


incorrectIdsArrayCloud=Array.from(new Set(all_incorrect.map(q => q.id)));

/* 8
const incorrectIds = new Set(all_incorrect.map(q => q.id));
// 🔁 Update Group A
for (const key in originalGroupAData) {
  incorrectGroupAData[key] = originalGroupAData[key].filter(q => incorrectIds.has(q.id));
  //groupAData[key] = [...incorrectGroupAData[key]];
}

// 🔁 Update Group B
for (const key in originalGroupBData) {
  incorrectGroupBData[key] = originalGroupBData[key].filter(q => incorrectIds.has(q.id));
 // groupBData[key] = [...incorrectGroupBData[key]];
}

console.log("incorrect", incorrectGroupAData );
*/


//===============================================================
  markedIdsArrayCloud=Array.from(new Set(all_marked.map(q => q.id)));

/* 9
const markedIds = new Set(all_marked.map(q => q.id));
  console.log(markedIds,"after");



// 🔁 Update Group A
for (const key in originalGroupAData) {
  markedGroupAData[key] = originalGroupAData[key].filter(q => markedIds.has(q.id));
  //groupAData[key] = [...incorrectGroupAData[key]];
}

// 🔁 Update Group B
for (const key in originalGroupBData) {
  markedGroupBData[key] = originalGroupBData[key].filter(q => markedIds.has(q.id));
 // groupBData[key] = [...incorrectGroupBData[key]];
}

*/


// results contianer should be removed ?? 
console.log(score);
console.log("pk",all_marked);


//
  Z_score();

  
async function runSequence() {

////////////////////////////////////
await CombosaveValuesToFirestore();
/////////////////////////////////
  await movePAGE();
}

runSequence();

async function movePAGE(){
loadingScreen.style.display = 'none';
window.location.href = "previous.html"; 
 }  

  // alot of things can be removed now including the exam_i_buttons in html and here.
}

/*
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            console.log('Left arrow pressed');
             goToPrevious()      
      break;
        case 'ArrowRight':
            console.log('Right arrow pressed');
            goToNext()
            break;

    }
});

*/
document.addEventListener('keydown', function(event) {
    const target = event.target;
    const isInputField = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';

    if (isInputField) return;  // Allow normal arrows inside inputs

    const quizApp = document.querySelector('.quiz-app');
    if (!quizApp) return;  // Safeguard: do nothing if not found

    switch(event.key) {
        case 'ArrowLeft':
            event.preventDefault();
            console.log('Left arrow pressed');
            goToPrevious();
            break;
        case 'ArrowRight':
            event.preventDefault();
            console.log('Right arrow pressed');
            goToNext();
            break;
        case 'ArrowUp':
            event.preventDefault();
            console.log('Up arrow pressed');
            quizApp.scrollBy({
                top: -65,      // scroll up by 50px
                behavior: 'auto'
            });
            break;
        case 'ArrowDown':
            event.preventDefault();
            console.log('Down arrow pressed');
            quizApp.scrollBy({
                top: 65,       // scroll down by 50px
                behavior: 'auto'
            });
            break;
    }
});











    
function findGroupAById(questionId) {
  const matches = [];

  for (const groupName in originalGroupAData) {
    const group = originalGroupAData[groupName];
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



function filterByIds(originalGroupAData, numberArray) {
    const idSet = new Set(numberArray.map(String));

    // Flatten all group arrays into one big array
    const dataArray = Object.values(originalGroupAData).flat();

    const filtered = dataArray.filter(item => idSet.has(item.id));

    return filtered;
}



// this function removes duplicates from simple arrays
function uniqueByKeepLast(data, key){
  return[
    ...new Map(
      data.map(x => [key(x),x])).values()]
    }


// THIS FUNCTION FINDS THE DIFFERENCE BETWEEN TWO ARRAYS
function arrayDiffByKey(key, ...arrays) {
return [].concat(...arrays.map( (arr, i) => {
const others = arrays.slice(0);
others.splice(i, 1);
const unique = [...new Set([].concat(...others))];
return arr.filter( x =>
    !unique.some(y => x[key] === y[key])
);
}));
}



function mergeArraysById(arr1, arr2) {
  arr1 = Array.isArray(arr1) ? arr1 : [arr1];
  arr2 = Array.isArray(arr2) ? arr2 : [arr2];

  const map = new Map();

  arr2.forEach(item => {
    if (item && item.id !== undefined) {
      map.set(String(item.id), item);  // ← force string id
    }
  });

  arr1.forEach(item => {
    if (item && item.id !== undefined && !map.has(String(item.id))) {
      map.set(String(item.id), item);
    }
  });

  return Array.from(map.values());
}










function addQuestionData(obj, count) {
  const panel = document.getElementById('infoPanel');
  panel.style.display = 'none';

  if (currentIndex < count) { 
  // Create H2 Question Title
  let questionTitle = document.createElement("h2");
  questionTitle.id=`textToHighlight`;

  // Create Question Text
  let questionText = document.createTextNode(obj["title"]);
  questionText.id=`textToHighlight`;
  
  //let questionImage_1 = document.createElement(obj["image_1"]);
  let questionText_2 = document.createTextNode(obj["title_2"]);

let audioContainer = document.createElement("div");
audioContainer.className = "audio-container";

let playIcon = document.createElement("span");
playIcon.className = "play-icon";
playIcon.innerText = "▶️";

let progressWrapper = document.createElement("div");
progressWrapper.className = "progress-wrapper";

let progressBar = document.createElement("div");
progressBar.className = "progress-bar";

progressWrapper.appendChild(progressBar);
audioContainer.appendChild(playIcon);
audioContainer.appendChild(progressWrapper);

let audio = new Audio(obj["audio"]);
let isPlaying = false;
let intervalId = null;

playIcon.onclick = () => {
  if (!isPlaying) {
    audio.play();
    playIcon.innerText = "⏸️";
    isPlaying = true;

    intervalId = setInterval(() => {
      if (audio.duration) {
        let percent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percent + "%";
      }
    }, 200);
  } else {
    audio.pause();
    playIcon.innerText = "▶️";
    isPlaying = false;
    clearInterval(intervalId);
  }
};

audio.onended = () => {
  isPlaying = false;
  playIcon.innerText = "▶️";
  clearInterval(intervalId);
  progressBar.style.width = "0%";
};


let wordIndex = 1;






















/*
let formattedHTML = (obj[`title`]).split("$")
  .map(line => {
  
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `exhibit_${wordIndex}`;
      const imageSrc = obj[imgKey];
      const span = `<span class="exhibit" onclick="showImage('${imageSrc}')">${word}</span>`;
      
      wordIndex++;
      return span;
    });
    return line;
  })
  .join('<br><br>'); // ✅ final HTML string
*/



let formattedHTML = (obj[`title`]).split("$")
  .map(line => {

    // Bold formatting
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');

    // Replace @word@ with clickable span linked to Firebase Storage image
    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `exhibit_${wordIndex}`;
      const imagePath = obj[imgKey]; // e.g., "images/example.png"
      const spanId = `exhibit_${wordIndex}_${Math.random().toString(36).substr(2, 9)}`;

      if (imagePath) {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
          .then(url => {
            const el = document.getElementById(spanId);
            if (el) {
              el.setAttribute("onclick", `showImage('${url}')`);
            }
          })
          .catch(err => console.error(`❌ Could not load ${imagePath}:`, err));
      }

      wordIndex++;
      return `<span id="${spanId}" class="exhibit">${word}</span>`;
    });

    return line;
  })
  .join('<br><br>'); // ✅ final HTML string






























let myText = document.createElement("div");
myText.className = "myText";
myText.innerHTML = formattedHTML; // ✅ correct now
questionTitle.appendChild(myText);
displayCustomTable_3(obj["title_table"],questionTitle);
display_3_columns(obj["title_table_3"],questionTitle);

styling(obj["table_before_image"],questionTitle);

if (obj["audio"]!="") { questionTitle.appendChild(audioContainer);   }


/*
if (obj["image_1"] && obj["image_1"].trim() !== "") {

  let img = document.createElement("IMG");
  img.src = obj["image_1"] ;
    
  let imageDiv = document.createElement("div");
  imageDiv.className=`imageDivision`;
  imageDiv.appendChild(img);
  questionTitle.appendChild(imageDiv);
}
*/




  if (obj["image_1"] && obj["image_1"].trim() !== "") {
    // Create a reference to the image in Firebase Storage
    const imageRef = ref(storage, obj["image_1"]); // e.g., "images/image_123.png"

    getDownloadURL(imageRef)
      .then(url => {
        let img = document.createElement("IMG");
        img.src = url;

        let imageDiv = document.createElement("div");
        imageDiv.className = `imageDivision`;
        imageDiv.appendChild(img);

        questionTitle.appendChild(imageDiv);
      })
      .catch(error => {
        console.error(`❌ Could not load ${obj["image_1"]}:`, error);
      });
  }

























styling(obj["table_after_image"],questionTitle);


let title_2_index = 1;















/*
let title_2_HTML = (obj[`title_2`]).split("$")
  .map(line => {
  
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `exhibit_${title_2_index}`;
      const imageSrc = obj[imgKey];
      const span = `<span class="exhibit" onclick="showImage('${imageSrc}')">${word}</span>`;
      
      title_2_index++;
      return span;
    });
    return line;
  })
  .join('<br><br>'); // ✅ final HTML string
*/

let title_2_HTML = (obj[`title_2`]).split("$")
  .map(line => {

    // Bold formatting
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');

    // Replace @word@ with clickable span linked to Firebase Storage image
    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `exhibit_${title_2_index}`;
      const imagePath = obj[imgKey]; // e.g., "images/example.png"
      const spanId = `exhibit_${title_2_index}_${Math.random().toString(36).substr(2, 9)}`;

      if (imagePath) {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
          .then(url => {
            const el = document.getElementById(spanId);
            if (el) {
              el.setAttribute("onclick", `showImage('${url}')`);
            }
          })
          .catch(err => console.error(`❌ Could not load ${imagePath}:`, err));
      }

      title_2_index++;
      return `<span id="${spanId}" class="exhibit">${word}</span>`;
    });

    return line;
  })
  .join('<br><br>'); // ✅ final HTML string










































let title_2_text = document.createElement("div");
title_2_text.className = "title_2_text";
title_2_text.innerHTML = title_2_HTML; // ✅ correct now
questionTitle.appendChild(title_2_text);

/*
questionTitle.addEventListener('mouseup', () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        if (!range.collapsed) {
            const span = document.createElement('span');
            span.className = 'highlight';
            range.surroundContents(span);
            selection.removeAllRanges();
        }
    }
});
*/

const darkYellow = 'rgba(253, 250, 50, 0.664)'; // requested color

// Highlight or unhighlight on mouseup
questionTitle.addEventListener('mouseup', () => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;

  const range = selection.getRangeAt(0);

  if (!questionTitle.contains(range.startContainer) || !questionTitle.contains(range.endContainer)) return;

  // If selection contains any highlight → remove only those inside selection
  const selectedHighlights = getHighlightsInRange(range);
  if (selectedHighlights.length > 0) {
    selectedHighlights.forEach(removeHighlight);
    selection.removeAllRanges();
    return;
  }

  if (isRangeSafe(range)) {
    const span = document.createElement('span');
    span.className = 'highlight';
    span.style.backgroundColor = darkYellow;
    try {
      range.surroundContents(span);
    } catch {
      highlightTextOnly(range);
    }
  } else {
    highlightTextOnly(range);
  }

  selection.removeAllRanges();
});

// Single click on a highlight → remove just that one
questionTitle.addEventListener('click', (e) => {
  if (e.target.classList.contains('highlight')) {
    removeHighlight(e.target);
  }
});

// Helpers
function isRangeSafe(range) {
  const commonAncestor = range.commonAncestorContainer;
  return !['TABLE', 'TBODY', 'TR', 'TD', 'TH'].includes(commonAncestor.nodeName);
}

function highlightTextOnly(range) {
  const walker = document.createTreeWalker(
    range.commonAncestorContainer,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (!range.intersectsNode(node)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach(node => {
    const span = document.createElement('span');
    span.className = 'highlight';
    span.style.backgroundColor = darkYellow;
    node.parentNode.insertBefore(span, node);
    span.appendChild(node);
  });
}

function removeHighlight(span) {
  const parent = span.parentNode;
  while (span.firstChild) parent.insertBefore(span.firstChild, span);
  parent.removeChild(span);
}

function getHighlightsInRange(range) {
  const highlights = [];
  const walker = document.createTreeWalker(
    range.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (node) => {
        if (node.classList && node.classList.contains('highlight') && range.intersectsNode(node)) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_REJECT;
      }
    }
  );
  while (walker.nextNode()) {
    highlights.push(walker.currentNode);
  }
  return highlights;
}









    // Append The H2 To The Quiz Area
    quizArea.appendChild(questionTitle);

    let   comparisonDiv = document.createElement("div");
    comparisonDiv.className = `comparison`;

    let coparison_array = (obj["comparison_items"]).split("$");
    for(let n=0;(coparison_array[n]!=undefined);n++){
    let comparison_new= (coparison_array[n]).split('#');
    for (let m=0;comparison_new[m]!=undefined;m++){
    if (m%2==1){
    let DoBoldDiv = document.createElement("div");
    DoBoldDiv.className = `DoBold`;
    DoBoldDiv.append(comparison_new[m]);
    comparisonDiv.appendChild(DoBoldDiv);
    }else{
    if (coparison_array[n+1]==undefined){
    }
    comparisonDiv.append(comparison_new[m]);
    }
     }
    
     comparisonDiv.appendChild(document.createElement("br"));
    }

    if (obj["comparison_items"].startsWith("§")) {
      tablingQuestionComparison(obj["comparison_items"],answersArea);
    }else {  answersArea.appendChild(comparisonDiv);}

    // Create The Answers
    for (let i = 1; !(obj[`answer_${i}`]=== undefined); i++) {
      // Create Main Answer Div

    let   mainDiv = document.createElement("div");

      // Add Class To Main Div
       mainDiv.className = `answer`;

      // Create Radio Input
     let  radioInput = document.createElement("input");
  
      // Add Type + Name + Id + Data-Attribute
      radioInput.name = "question";
      radioInput.type = "radio";
      radioInput.id = `answer_${i}`;
      radioInput.class = `answer_style`;
     
      radioInput.dataset.answer = obj[`answer_${i}`];

      // Create Label
    let   theLabel = document.createElement("label");
         
      // Add For Attribute
      theLabel.htmlFor = `answer_${i}`;

      // Create Label Text
     let  theLabelText = document.createTextNode(obj[`answer_${i}`]);
     //  theLabel.style.backgroundColor='yellow';
      // if((obj.right_answer)==(obj[`answer_${i}`])){theLabel.style.backgroundColor='yellow'};



      /*
      let ansImage = document.createElement("IMG");
      ansImage.src = obj[`ansImg_${i}`] ;
      
      let ansImageDiv = document.createElement("div");
      ansImageDiv.className=`ansImageDiv`;
      ansImageDiv.appendChild(ansImage);
*/
























      document.getElementById("counterr").innerHTML=" Item : "+(currentIndex+1) + " of " + Final_Count;
      document.getElementById("id_question").innerHTML=" Question Id :  "+(obj[`id`]);
      // Add The Text To Label
      //
      if (obj[`answer_${i}`].startsWith("§")) {
        tablingQuestion(obj[`answer_${i}`],theLabel);
      }else { theLabel.appendChild(theLabelText);}
      //
















/*
let ansImageSrc = obj[`ansImg_${i}`];
if (ansImageSrc && ansImageSrc.trim() !== "") {
    let ansImage = document.createElement("IMG");
    ansImage.src = ansImageSrc;

    let ansImageDiv = document.createElement("div");
    ansImageDiv.className = `ansImageDiv`;
    ansImageDiv.appendChild(ansImage);

    theLabel.append(ansImageDiv);
}

*/
let ansImageSrc = obj[`ansImg_${i}`];

if (ansImageSrc && ansImageSrc.trim() !== "") {
    const imageRef = ref(storage, ansImageSrc); // e.g., "images/answer1.png"

    getDownloadURL(imageRef)
        .then(url => {
            let ansImage = document.createElement("IMG");
            ansImage.src = url;

            let ansImageDiv = document.createElement("div");
            ansImageDiv.className = `ansImageDiv`;
            ansImageDiv.appendChild(ansImage);

            theLabel.append(ansImageDiv);
        })
        .catch(err => {
            console.error(`❌ Could not load ${ansImageSrc}:`, err);
        });
}




























































theLabel.addEventListener('click', function(event) {
    event.preventDefault(); // ⛔ prevent label from checking the radio
    this.classList.toggle('omitted'); 
});


      // Add Input + Label To Main Div
      mainDiv.appendChild(radioInput);
      mainDiv.appendChild(theLabel);
      // Append All Divs To Answers Area
      answersArea.appendChild(mainDiv);
      //
  if (window.MathJax) {
  MathJax.typeset();
}
    }
  }
}



function addQuestionData_2(obj, count) {
  quizApp.style.display='block';
  quizArea.style.display='block';
  answersArea.style.display='block';

  if (currentIndex < count) { 
   
    document.getElementById(`review_${currentIndex+1}`).style.backgroundColor="#e0e0e0"; ;

    let questionTitle = document.createElement("h2");
    let questionText = document.createTextNode(obj["title"]);
    let questionText_2 = document.createTextNode(obj["title_2"]);

    let audioContainer = document.createElement("div");
audioContainer.className = "audio-container";

let playIcon = document.createElement("span");
playIcon.className = "play-icon";
playIcon.innerText = "▶️";

let progressWrapper = document.createElement("div");
progressWrapper.className = "progress-wrapper";

let progressBar = document.createElement("div");
progressBar.className = "progress-bar";

progressWrapper.appendChild(progressBar);
audioContainer.appendChild(playIcon);
audioContainer.appendChild(progressWrapper);

let audio = new Audio(obj["audio"]);
let isPlaying = false;
let intervalId = null;

playIcon.onclick = () => {
  if (!isPlaying) {
    audio.play();
    playIcon.innerText = "⏸️";
    isPlaying = true;

    intervalId = setInterval(() => {
      if (audio.duration) {
        let percent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percent + "%";
      }
    }, 200);
  } else {
    audio.pause();
    playIcon.innerText = "▶️";
    isPlaying = false;
    clearInterval(intervalId);
  }
};

audio.onended = () => {
  isPlaying = false;
  playIcon.innerText = "▶️";
  clearInterval(intervalId);
  progressBar.style.width = "0%";
};

let indexNum = 1;




















/*
    let toHTML = (obj[`title`]).split("$")
      .map(line => {
      
        line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
        line = line.replace(/@(.*?)@/g, (_, word) => {
          const imgKey = `exhibit_${indexNum}`;
          const imageSrc = obj[imgKey];
          const span = `<span class="exhibit" onclick="showImage('${imageSrc}')">${word}</span>`;
          indexNum++;
          return span;
        });
        return line;
      })
      .join('<br><br>'); // ✅ final HTML string
  */
 
      /*
      let toHTMLPromises = (obj[`title`]).split("$").map(line => {
    return line.replace(/#(.*?)#/g, '<strong>$1</strong>')
               .replace(/@(.*?)@/g, (_, word) => {
                   const imgKey = `exhibit_${indexNum}`;
                   const imagePath = obj[imgKey]; // e.g., "images/pic1.png"
                   indexNum++;

                   if (!imagePath) return word;

                   const imageRef = ref(storage, imagePath);
                   return `<span class="exhibit" onclick="loadAndShowImage('${imagePath}')">${word}</span>`;
               });
});

let toHTML = toHTMLPromises.join('<br><br>'); // ✅ final HTML string

// Helper function for click action
function loadAndShowImage(imagePath) {
    const imageRef = ref(storage, imagePath);
    getDownloadURL(imageRef)
        .then(url => showImage(url))
        .catch(err => console.error(`❌ Could not load image: ${imagePath}`, err));
}

*/
/*
let toHTML = (obj[`title`] || "").split("$")
  .map(line => {
    // Bold text between # #
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');

    // Replace @word@ with clickable span
    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `exhibit_${indexNum}`;
      const imagePath = obj[imgKey]; // e.g., "images/pic1.png"

      if (imagePath && imagePath.trim() !== "") {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
          .then(url => {
            // Replace stored path with Firebase URL
            obj[imgKey] = url;
          })
          .catch(err => {
            console.error(`❌ Could not load image: ${imagePath}`, err);
          });
      }

      const span = `<span class="exhibit" onclick="showImage('${imagePath}')">${word}</span>`;
      indexNum++;
      return span;
    });

    return line;
  })
  .join('<br><br>'); // ✅ final HTML string
*/

let toHTML = (obj[`title`]).split("$")
  .map(line => {

    // Bold formatting
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');

    // Replace @word@ with clickable span linked to Firebase Storage image
    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `exhibit_${indexNum}`;
      const imagePath = obj[imgKey]; // e.g., "images/example.png"
      const spanId = `exhibit_${indexNum}_${Math.random().toString(36).substr(2, 9)}`;

      if (imagePath) {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
          .then(url => {
            const el = document.getElementById(spanId);
            if (el) {
              el.setAttribute("onclick", `showImage('${url}')`);
            }
          })
          .catch(err => console.error(`❌ Could not load ${imagePath}:`, err));
      }

      indexNum++;
      return `<span id="${spanId}" class="exhibit">${word}</span>`;
    });

    return line;
  })
  .join('<br><br>'); // ✅ final HTML string











































    let mytxt = document.createElement("div");
    mytxt.className = "myText";
    mytxt.innerHTML = toHTML; // ✅ correct now
    questionTitle.appendChild(mytxt);

    //displayCustomTable_title(obj["title_table"],questionTitle);
    displayCustomTable_3(obj["title_table"],questionTitle);
    display_3_columns(obj["title_table_3"],questionTitle);

    styling(obj["table_before_image"],questionTitle);

    if (obj["audio"]!="") { questionTitle.appendChild(audioContainer);   }







/*
    if (obj["image_1"] && obj["image_1"].trim() !== "") {
    let img = document.createElement("IMG");
    img.src = obj["image_1"] ;
    let   imageDiv = document.createElement("div");
    imageDiv.className=`imageDivision`;
    imageDiv.appendChild(img);
    questionTitle.appendChild(imageDiv);
    }
*/


if (obj["image_1"] && obj["image_1"].trim() !== "") {
    const imagePath = obj["image_1"]; // e.g., "images/pic1.png"
    const imageRef = ref(storage, imagePath);

    getDownloadURL(imageRef)
        .then(url => {
            let img = document.createElement("IMG");
            img.src = url;

            let imageDiv = document.createElement("div");
            imageDiv.className = `imageDivision`;
            imageDiv.appendChild(img);

            questionTitle.appendChild(imageDiv);
        })
        .catch(err => {
            console.error(`❌ Could not load image: ${imagePath}`, err);
        });
}































    styling(obj["table_after_image"],questionTitle);

    let title_2_index = 1;








/*
    let title_2_HTML = (obj[`title_2`]).split("$")
    .map(line => {
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `exhibit_${title_2_index}`;
      const imageSrc = obj[imgKey];
      const span = `<span class="exhibit" onclick="showImage('${imageSrc}')">${word}</span>`;
      title_2_index++;
      return span;
    });
    return line;
  })
  .join('<br><br>'); // ✅ final HTML string
*/



let title_2_HTML = (obj[`title_2`]).split("$")
  .map(line => {

    // Bold formatting
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');

    // Replace @word@ with clickable span linked to Firebase Storage image
    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `exhibit_${title_2_index}`;
      const imagePath = obj[imgKey]; // e.g., "images/example.png"
      const spanId = `exhibit_${title_2_index}_${Math.random().toString(36).substr(2, 9)}`;

      if (imagePath) {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
          .then(url => {
            const el = document.getElementById(spanId);
            if (el) {
              el.setAttribute("onclick", `showImage('${url}')`);
            }
          })
          .catch(err => console.error(`❌ Could not load ${imagePath}:`, err));
      }

      title_2_index++;
      return `<span id="${spanId}" class="exhibit">${word}</span>`;
    });

    return line;
  })
  .join('<br><br>'); // ✅ final HTML string






























let title_2_text = document.createElement("div");
title_2_text.className = "title_2_text";
title_2_text.innerHTML = title_2_HTML; // ✅ correct now
questionTitle.appendChild(title_2_text);
/*
questionTitle.addEventListener('mouseup', () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      if (!range.collapsed) {
      const span = document.createElement('span');
      span.className = 'highlight';
      range.surroundContents(span);
      selection.removeAllRanges();
   }
   }
  });
*/












// Highlight or unhighlight on mouseup
questionTitle.addEventListener('mouseup', () => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;

  const range = selection.getRangeAt(0);

  if (!questionTitle.contains(range.startContainer) || !questionTitle.contains(range.endContainer)) return;

  // If selection contains any highlight → remove only those inside selection
  const selectedHighlights = getHighlightsInRange(range);
  if (selectedHighlights.length > 0) {
    selectedHighlights.forEach(removeHighlight);
    selection.removeAllRanges();
    return;
  }

  if (isRangeSafe(range)) {
    const span = document.createElement('span');
    span.className = 'highlight';
    span.style.backgroundColor = darkYellow;
    try {
      range.surroundContents(span);
    } catch {
      highlightTextOnly(range);
    }
  } else {
    highlightTextOnly(range);
  }

  selection.removeAllRanges();
});

// Single click on a highlight → remove just that one
questionTitle.addEventListener('click', (e) => {
  if (e.target.classList.contains('highlight')) {
    removeHighlight(e.target);
  }
});

// Helpers
function isRangeSafe(range) {
  const commonAncestor = range.commonAncestorContainer;
  return !['TABLE', 'TBODY', 'TR', 'TD', 'TH'].includes(commonAncestor.nodeName);
}

function highlightTextOnly(range) {
  const walker = document.createTreeWalker(
    range.commonAncestorContainer,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (!range.intersectsNode(node)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach(node => {
    const span = document.createElement('span');
    span.className = 'highlight';
    span.style.backgroundColor = darkYellow;
    node.parentNode.insertBefore(span, node);
    span.appendChild(node);
  });
}

function removeHighlight(span) {
  const parent = span.parentNode;
  while (span.firstChild) parent.insertBefore(span.firstChild, span);
  parent.removeChild(span);
}

function getHighlightsInRange(range) {
  const highlights = [];
  const walker = document.createTreeWalker(
    range.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (node) => {
        if (node.classList && node.classList.contains('highlight') && range.intersectsNode(node)) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_REJECT;
      }
    }
  );
  while (walker.nextNode()) {
    highlights.push(walker.currentNode);
  }
  return highlights;
}












  quizArea.appendChild(questionTitle);
  
  let   comparisonDiv = document.createElement("div");
  comparisonDiv.className = `comparison`;

  let coparison_array = (obj["comparison_items"]).split("$");
  for(let n=0;(coparison_array[n]!=undefined);n++){
  let comparison_new= (coparison_array[n]).split('#');
  for (let m=0;comparison_new[m]!=undefined;m++){
  if (m%2==1){
  let DoBoldDiv = document.createElement("div");
  DoBoldDiv.className = `DoBold`;
  DoBoldDiv.append(comparison_new[m]);
  comparisonDiv.appendChild(DoBoldDiv);
  }else{
  if (coparison_array[n+1]==undefined){
  }
  comparisonDiv.append(comparison_new[m]);
  }
   }
  
   comparisonDiv.appendChild(document.createElement("br"));
  }


  if (obj["comparison_items"].startsWith("§")) {
    tablingQuestionComparison(obj["comparison_items"],answersArea);
  }else {  answersArea.appendChild(comparisonDiv);}

  for (let i = 1; !(obj[`answer_${i}`]=== undefined); i++) {
  let mainDiv = document.createElement("div");
  mainDiv.className = `answer`;
  let  radioInput = document.createElement("input");
  radioInput.name = "question";
  radioInput.type = "radio";
  radioInput.id = `answer_${i}`;
  radioInput.class = `answer_style`;
     
  radioInput.dataset.answer = obj[`answer_${i}`];

  let  theLabel = document.createElement("label");         
    theLabel.htmlFor = `answer_${i}`;


    document.getElementById("counterr").innerHTML=" Item : "+ (currentIndex+1) + " of " + Final_Count;
    document.getElementById("id_question").innerHTML=" Question Id :  "+(obj[`id`]);

    let  theLabelText = document.createTextNode(obj[`answer_${i}`]);
    if (chosen_Answers[currentIndex+1]==i-1){theLabel.style.backgroundColor='lightcoral'}
      if((obj.right_answer)==(obj[`answer_${i}`])){theLabel.style.backgroundColor='lightgreen'};

      
      /*
      let ansImage = document.createElement("IMG");
      ansImage.src = obj[`ansImg_${i}`] ;
      
      let ansImageDiv = document.createElement("div");
      ansImageDiv.className=`ansImageDiv`;
      ansImageDiv.appendChild(ansImage);
*/


    let theLabelPercent =  document.createTextNode("   "+"  ("+obj[`percent_${i}`]+")");

   // theLabelPercent.style.color='grey';
   //
   //
   //
   if (obj[`answer_${i}`].startsWith("§")) {
    tablingQuestion(obj[`answer_${i}`],theLabel);
  }else { theLabel.appendChild(theLabelText);}

  //
    theLabel.appendChild(theLabelPercent);























/*
let ansImageSrc = obj[`ansImg_${i}`];
if (ansImageSrc && ansImageSrc.trim() !== "") {
    let ansImage = document.createElement("IMG");
    ansImage.src = ansImageSrc;

    let ansImageDiv = document.createElement("div");
    ansImageDiv.className = `ansImageDiv`;
    ansImageDiv.appendChild(ansImage);
    theLabel.append(ansImageDiv);
}
*/

let ansImageSrc = obj[`ansImg_${i}`]; // e.g., "images/answer_1.png"

if (ansImageSrc && ansImageSrc.trim() !== "") {
  const imageRef = ref(storage, ansImageSrc); // Reference in Firebase Storage

  getDownloadURL(imageRef)
    .then(url => {
      let ansImage = document.createElement("IMG");
      ansImage.src = url;

      let ansImageDiv = document.createElement("div");
      ansImageDiv.className = `ansImageDiv`;
      ansImageDiv.appendChild(ansImage);

      theLabel.append(ansImageDiv);
    })
    .catch(error => {
      console.error(`❌ Could not load ${ansImageSrc}:`, error);
    });
}





































theLabel.addEventListener('click', function(event) {
    event.preventDefault(); // ⛔ prevent label from checking the radio
    this.classList.toggle('omitted'); 
});


    mainDiv.appendChild(radioInput);
    mainDiv.appendChild(theLabel);
    answersArea.appendChild(mainDiv);
    }


    let explanationTiltle = document.createElement("h2");
    explanationTiltle.id=`explanation_title`;
    explanationTiltle.className=`explanation_title`;
    let explanation_text1 = document.createTextNode(obj["explanation_1"]);
   // explanation_text1.className=`explanation_text1`;
    let explanation_text2 = document.createTextNode(obj["explanation_2"]);

    let explanation_text3 = document.createTextNode(obj["explanation_3"]);

   // explanation_text2.className=`explanation_text2`;






































/*
    let img_explanation = document.createElement("IMG");
    img_explanation.src = obj["explanation_img"] ;
    let imageDiv_explanation = document.createElement("div");
    imageDiv_explanation.className=`imageDivision_explanation`;
    imageDiv_explanation.appendChild(img_explanation);
*/




























    explanationTiltle.append("Explanation:");
    explanationTiltle.appendChild(document.createElement("br"));

    let wordIndex = 1;
































































/*
    let explanation_1_Html = obj["explanation_1"].split('$')
    .map(line => {
  
      const choiceMatch = line.match(/\(Choice [A-N]\)/);
      if (choiceMatch) {
        const choiceText = choiceMatch[0];
        line = line.replace(choiceText, '').trim();
        line = `<strong>${choiceText}</strong> ` + line;
      }
  
      line = line.replace(/Educational objective/g, "<strong>Educational objective</strong><br>");
      line = line.replace(/Educational Objective/g, "<strong>Educational objective</strong><br>");
  
        line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
        line = line.replace(/•/g, '\u00A0\u00A0\u00A0•');
        line = line.replace(/○/g, '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○');
        line = line.replace(/@(.*?)@/g, (_, word) => {
          const imgKey = `clickable_${wordIndex}`;
          const imageSrc = obj[imgKey];
          const span = `<span class="clickable" onclick="showImage('${imageSrc}')">${word}</span>`;
          wordIndex++;
          return span;
        });
    
        return line;
      })
      .join('<br><br>'); // ✅ final HTML string
  */
 
      

  let explanation_1_Html = obj["explanation_1"].split('$')
  .map(line => {
    const choiceMatch = line.match(/\(Choice [A-N]\)/);
    if (choiceMatch) {
      const choiceText = choiceMatch[0];
      line = line.replace(choiceText, '').trim();
      line = `<strong>${choiceText}</strong> ` + line;
    }

    line = line.replace(/Educational objective/g, "<strong>Educational objective</strong><br>");
    line = line.replace(/Educational Objective/g, "<strong>Educational objective</strong><br>");
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
    line = line.replace(/•/g, '\u00A0\u00A0\u00A0•');
    line = line.replace(/○/g, '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○');


    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `clickable_${wordIndex}`;
      const imagePath = obj[imgKey]; // e.g., "images/example.png"

      if (imagePath && imagePath.trim() !== "") {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
          .then(url => {
            // Replace the clickable word with the Firebase URL dynamically
            document.querySelectorAll(`span[data-imgkey="${imgKey}"]`).forEach(span => {
              span.setAttribute("onclick", `showImage('${url}')`);
            });
          })
          .catch(err => console.error(`❌ Could not load ${imagePath}:`, err));
      }

      const span = `<span class="clickable" data-imgkey="${imgKey}">${word}</span>`;
      wordIndex++;
      return span;
    });

    return line;
  })
  .join('<br><br>'); // ✅ final HTML string




























































    let myTextEXP1 = document.createElement("div");
    myTextEXP1.className = "myText";
    myTextEXP1.innerHTML = explanation_1_Html; // ✅ correct now
    explanationTiltle.appendChild(myTextEXP1);

    //
displayCustomTable(obj["table"],explanationTiltle);
//display_3_columns_explanation(obj["table_3"],explanationTiltle);
//
styling(obj["table_3"],explanationTiltle);


/*
explanationTiltle.appendChild(imageDiv_explanation);
*/

if (obj["explanation_img"] && obj["explanation_img"].trim() !== "") {
  const imageRef = ref(storage, obj["explanation_img"]); // e.g., "images/explanation_1.png"



        let img_explanation = document.createElement("IMG");


      let imageDiv_explanation = document.createElement("div");
      imageDiv_explanation.className = `imageDivision_explanation`;
      imageDiv_explanation.appendChild(img_explanation);
      // Append it wherever needed — for example:
      //someParentElement.appendChild(imageDiv_explanation);
      explanationTiltle.appendChild(imageDiv_explanation);



  getDownloadURL(imageRef)
    .then(url => {
      img_explanation.src = url;





    })
    .catch(error => {
      console.error(`❌ Could not load ${obj["explanation_img"]}:`, error);
    });
}
















































/*
let formattedHTML = obj["explanation_2"].split('$')
  .map(line => {
  
    const choiceMatch = line.match(/\(Choice [A-N]\)/);
    if (choiceMatch) {
      const choiceText = choiceMatch[0];
      line = line.replace(choiceText, '').trim();
      line = `<strong>${choiceText}</strong> ` + line;
    }

    line = line.replace(/Educational objective/g, "<strong>Educational objective</strong><br>");
    line = line.replace(/Educational Objective/g, "<strong>Educational objective</strong><br>");

  
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
    line = line.replace(/•/g, '\u00A0\u00A0\u00A0•');
    line = line.replace(/○/g, '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○');
    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `clickable_${wordIndex}`;
      const imageSrc = obj[imgKey];
      const span = `<span class="clickable" onclick="showImage('${imageSrc}')">${word}</span>`;
      wordIndex++;
      return span;
    });

    return line;
  })
  .join('<br><br>'); // ✅ final HTML string
*/
/*
let formattedHTML = obj["explanation_2"].split('$')
  .map(line => {  
    const choiceMatch = line.match(/\(Choice [A-N]\)/);
    if (choiceMatch) {
      const choiceText = choiceMatch[0];
      line = line.replace(choiceText, '').trim();
      line = `<strong>${choiceText}</strong> ` + line;
    }

    line = line.replace(/Educational objective/g, "<strong>Educational objective</strong><br>");
    line = line.replace(/Educational Objective/g, "<strong>Educational objective</strong><br>");    
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
    line = line.replace(/•/g, '\u00A0\u00A0\u00A0•');
    line = line.replace(/○/g, '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○');

    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `clickable_${wordIndex}`;
      const imagePath = obj[imgKey]; // e.g., "images/img1.png"

      if (imagePath && imagePath.trim() !== "") {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
          .then(url => {
            document.querySelectorAll(`span[data-imgkey="${imgKey}"]`).forEach(span => {
              span.setAttribute("onclick", `showImage('${url}')`);
            });
          })
          .catch(err => console.error(`❌ Could not load ${imagePath}:`, err));
      }

      const span = `<span class="clickable" data-imgkey="${imgKey}">${word}</span>`;
      wordIndex++;
      return span;
    });

    return line;
  })
  .join('<br><br>'); // ✅ final HTML string
*/


let formattedHTML = obj["explanation_2"].split('$')
  .map(line => {  
    const choiceMatch = line.match(/\(Choice [A-N]\)/);
    if (choiceMatch) {
      const choiceText = choiceMatch[0];
      line = line.replace(choiceText, '').trim();
      line = `<strong>${choiceText}</strong> ` + line;
    }

    line = line.replace(/Educational objective/g, "<strong>Educational objective</strong><br>");
    line = line.replace(/Educational Objective/g, "<strong>Educational objective</strong><br>");    
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
    line = line.replace(/•/g, '\u00A0\u00A0\u00A0•');
    line = line.replace(/○/g, '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○');

    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `clickable_${wordIndex}`;
      const imagePath = obj[imgKey]; // e.g., "images/img1.png"

      if (imagePath && imagePath.trim() !== "") {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
          .then(url => {
            document.querySelectorAll(`span[data-imgkey="${imgKey}"]`).forEach(span => {
              span.setAttribute("onclick", `showImage('${url}')`);
            });
          })
          .catch(err => console.error(`❌ Could not load ${imagePath}:`, err));
      }

      const span = `<span class="clickable" data-imgkey="${imgKey}">${word}</span>`;
      wordIndex++;
      return span;
    });

    return line;
  })
  .join('<br><br>'); // ✅ final HTML string
































































let myText = document.createElement("div");
myText.className = "myText";
myText.innerHTML = formattedHTML; // ✅ correct now
explanationTiltle.appendChild(myText);

/*
explanationTiltle.addEventListener('mouseup', () => {
  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    if (!range.collapsed) {
    const span = document.createElement('span');
    span.className = 'highlight';
    range.surroundContents(span);
    selection.removeAllRanges();
 }
 }
});
*/


const darkYellow = 'rgba(253, 250, 50, 0.664)'; // requested color

// Highlight or unhighlight on mouseup
explanationTiltle.addEventListener('mouseup', () => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;

  const range = selection.getRangeAt(0);

  if (!explanationTiltle.contains(range.startContainer) || !explanationTiltle.contains(range.endContainer)) return;

  // If selection contains any highlight → remove only those inside selection
  const selectedHighlights = getHighlightsInRange(range);
  if (selectedHighlights.length > 0) {
    selectedHighlights.forEach(removeHighlight);
    selection.removeAllRanges();
    return;
  }

  if (isRangeSafe(range)) {
    const span = document.createElement('span');
    span.className = 'highlight';
    span.style.backgroundColor = darkYellow;
    try {
      range.surroundContents(span);
    } catch {
      highlightTextOnly(range);
    }
  } else {
    highlightTextOnly(range);
  }

  selection.removeAllRanges();
});

// Single click on a highlight → remove just that one
explanationTiltle.addEventListener('click', (e) => {
  if (e.target.classList.contains('highlight')) {
    removeHighlight(e.target);
  }
});







explanationArea.appendChild(explanationTiltle);
if (window.MathJax) {
  MathJax.typeset();
}
  }}


  
  function addQuestionData_3(obj, count) {
    answersArea.style.display='block';
  
    if (currentIndex < count) { 
  





      document.getElementById(`review_${currentIndex+1}`).style.backgroundColor="#e0e0e0"; ;
  







      let questionTitle = document.createElement("h2");
  
      let questionText = document.createTextNode(obj["title"]);
      let questionText_2 = document.createTextNode(obj["title_2"]);
 
      

let audioContainer = document.createElement("div");
audioContainer.className = "audio-container";

let playIcon = document.createElement("span");
playIcon.className = "play-icon";
playIcon.innerText = "▶️";

let progressWrapper = document.createElement("div");
progressWrapper.className = "progress-wrapper";

let progressBar = document.createElement("div");
progressBar.className = "progress-bar";

progressWrapper.appendChild(progressBar);
audioContainer.appendChild(playIcon);
audioContainer.appendChild(progressWrapper);

let audio = new Audio(obj["audio"]);
let isPlaying = false;
let intervalId = null;

playIcon.onclick = () => {
  if (!isPlaying) {
    audio.play();
    playIcon.innerText = "⏸️";
    isPlaying = true;

    intervalId = setInterval(() => {
      if (audio.duration) {
        let percent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = percent + "%";
      }
    }, 200);
  } else {
    audio.pause();
    playIcon.innerText = "▶️";
    isPlaying = false;
    clearInterval(intervalId);
  }
};

audio.onended = () => {
  isPlaying = false;
  playIcon.innerText = "▶️";
  clearInterval(intervalId);
  progressBar.style.width = "0%";
};

//

let INDEX = 1;















































/*
let txtToHtml = (obj[`title`]).split("$")
  .map(line => {
  
  line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
  line = line.replace(/@(.*?)@/g, (_, word) => {
    const imgKey = `exhibit_${INDEX}`;
    const imageSrc = obj[imgKey];
    const span = `<span class="exhibit" onclick="showImage('${imageSrc}')">${word}</span>`;
      
    INDEX++;
    return span;
    });
  return line;
  })
  .join('<br><br>'); // ✅ final HTML string
*/


let txtToHtml = (obj[`title`]).split("$")
  .map(line => {

    // Bold formatting
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');

    // Replace @word@ with clickable span linked to Firebase Storage image
    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `exhibit_${INDEX}`;
      const imagePath = obj[imgKey]; // e.g., "images/example.png"
      const spanId = `exhibit_${INDEX}_${Math.random().toString(36).substr(2, 9)}`;

      if (imagePath) {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
          .then(url => {
            const el = document.getElementById(spanId);
            if (el) {
              el.setAttribute("onclick", `showImage('${url}')`);
            }
          })
          .catch(err => console.error(`❌ Could not load ${imagePath}:`, err));
      }

      INDEX++;
      return `<span id="${spanId}" class="exhibit">${word}</span>`;
    });

    return line;
  })
  .join('<br><br>'); // ✅ final HTML string

































let TxtOfTitle = document.createElement("div");
TxtOfTitle.className = "myText";
TxtOfTitle.innerHTML = txtToHtml; // ✅ correct now
questionTitle.appendChild(TxtOfTitle);

displayCustomTable_3(obj["title_table"],questionTitle);
    display_3_columns(obj["title_table_3"],questionTitle);

    styling(obj["table_before_image"],questionTitle);

    if (obj["audio"]!="") { questionTitle.appendChild(audioContainer);   }


    




























/*
if (obj["image_1"] && obj["image_1"].trim() !== "") {
      let img = document.createElement("IMG");
      img.src = obj["image_1"] ;
      let imageDiv = document.createElement("div");
      imageDiv.className=`imageDivision`;
      imageDiv.appendChild(img);
      questionTitle.appendChild(imageDiv);
}
*/
if (obj["image_1"] && obj["image_1"].trim() !== "") {
  const imageRef = ref(storage, obj["image_1"]); // e.g., "images/image_123.png"

  getDownloadURL(imageRef)
    .then(url => {
      let img = document.createElement("IMG");
      img.src = url;

      let imageDiv = document.createElement("div");
      imageDiv.className = `imageDivision`;
      imageDiv.appendChild(img);

      questionTitle.appendChild(imageDiv);
    })
    .catch(error => {
      console.error(`❌ Could not load ${obj["image_1"]}:`, error);
    });
}




















































styling(obj["table_after_image"],questionTitle);

      //
      let title_2_index = 1;
















































/*

let title_2_HTML = (obj[`title_2`]).split("$")
  .map(line => {
  
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `exhibit_${title_2_index}`;
      const imageSrc = obj[imgKey];
      const span = `<span class="exhibit" onclick="showImage('${imageSrc}')">${word}</span>`;
      
      title_2_index++;
      return span;
    });
    return line;
  })
  .join('<br><br>'); // ✅ final HTML string
*/

let title_2_HTML = (obj[`title_2`]).split("$")
  .map(line => {
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');

    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `exhibit_${title_2_index}`;
      const imagePath = obj[imgKey]; // e.g., "images/image_123.png"

      title_2_index++;

      if (imagePath && imagePath.trim() !== "") {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
          .then(url => {
            // Preload or store URL if needed
            // For click, just use showImage with Firebase URL
            document.querySelectorAll(`.exhibit[data-key="${imgKey}"]`)
              .forEach(el => el.onclick = () => showImage(url));
          })
          .catch(error => console.error(`❌ Could not load ${imagePath}:`, error));

        return `<span class="exhibit" data-key="${imgKey}">${word}</span>`;
      }
      return word;
    });

    return line;
  })
  .join('<br><br>');









































































let title_2_text = document.createElement("div");
title_2_text.className = "title_2_text";
title_2_text.innerHTML = title_2_HTML; // ✅ correct now
questionTitle.appendChild(title_2_text);
/*
       questionTitle.addEventListener('mouseup', () => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            if (!range.collapsed) {
              const span = document.createElement('span');
              span.className = 'highlight';
              range.surroundContents(span);
              selection.removeAllRanges();
            }
        }
    });
  */
 



// Highlight or unhighlight on mouseup
questionTitle.addEventListener('mouseup', () => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;

  const range = selection.getRangeAt(0);

  if (!questionTitle.contains(range.startContainer) || !questionTitle.contains(range.endContainer)) return;

  // If selection contains any highlight → remove only those inside selection
  const selectedHighlights = getHighlightsInRange(range);
  if (selectedHighlights.length > 0) {
    selectedHighlights.forEach(removeHighlight);
    selection.removeAllRanges();
    return;
  }

  if (isRangeSafe(range)) {
    const span = document.createElement('span');
    span.className = 'highlight';
    span.style.backgroundColor = darkYellow;
    try {
      range.surroundContents(span);
    } catch {
      highlightTextOnly(range);
    }
  } else {
    highlightTextOnly(range);
  }

  selection.removeAllRanges();
});

// Single click on a highlight → remove just that one
questionTitle.addEventListener('click', (e) => {
  if (e.target.classList.contains('highlight')) {
    removeHighlight(e.target);
  }
});

// Helpers
function isRangeSafe(range) {
  const commonAncestor = range.commonAncestorContainer;
  return !['TABLE', 'TBODY', 'TR', 'TD', 'TH'].includes(commonAncestor.nodeName);
}

function highlightTextOnly(range) {
  const walker = document.createTreeWalker(
    range.commonAncestorContainer,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        if (!range.intersectsNode(node)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach(node => {
    const span = document.createElement('span');
    span.className = 'highlight';
    span.style.backgroundColor = darkYellow;
    node.parentNode.insertBefore(span, node);
    span.appendChild(node);
  });
}

function removeHighlight(span) {
  const parent = span.parentNode;
  while (span.firstChild) parent.insertBefore(span.firstChild, span);
  parent.removeChild(span);
}

function getHighlightsInRange(range) {
  const highlights = [];
  const walker = document.createTreeWalker(
    range.commonAncestorContainer,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode: (node) => {
        if (node.classList && node.classList.contains('highlight') && range.intersectsNode(node)) {
          return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_REJECT;
      }
    }
  );
  while (walker.nextNode()) {
    highlights.push(walker.currentNode);
  }
  return highlights;
}




















      quizArea.appendChild(questionTitle);
   
let   comparisonDiv = document.createElement("div");
comparisonDiv.className = `comparison`;
//let comparison_question = document.createTextNode(obj["comparison_items"]);

let coparison_array = (obj["comparison_items"]).split("$");
for(let n=0;(coparison_array[n]!=undefined);n++){
let comparison_new= (coparison_array[n]).split('#');
for (let m=0;comparison_new[m]!=undefined;m++){
if (m%2==1){
let DoBoldDiv = document.createElement("div");
DoBoldDiv.className = `DoBold`;
DoBoldDiv.append(comparison_new[m]);
comparisonDiv.appendChild(DoBoldDiv);
}else{
if (coparison_array[n+1]==undefined){
}
comparisonDiv.append(comparison_new[m]);
}
 }

 comparisonDiv.appendChild(document.createElement("br"));
}


//comparisonDiv.appendChild(comparison_question);
if (obj["comparison_items"].startsWith("§")) {
  tablingQuestionComparison(obj["comparison_items"],answersArea);
}else {  answersArea.appendChild(comparisonDiv);}

//
for (let i = 1; !(obj[`answer_${i}`]=== undefined); i++) {
      let mainDiv = document.createElement("div");
      mainDiv.className = `answer`;
      let  radioInput = document.createElement("input");
      radioInput.name = "question";
      radioInput.type = "radio";
      radioInput.id = `answer_${i}`;
      radioInput.class = `answer_style`;  
       
      radioInput.dataset.answer = obj[`answer_${i}`];
  
      let  theLabel = document.createElement("label");
           
      theLabel.htmlFor = `answer_${i}`;
  

      document.getElementById("counterr").innerHTML=" Item : "+ (currentIndex+1) + " of " + Final_Count;
      document.getElementById("id_question").innerHTML=" Question Id :  "+(obj[`id`]);
  
      let  theLabelText = document.createTextNode(obj[`answer_${i}`]);
      if (chosen_Answers[currentIndex+1]==i-1){theLabel.style.backgroundColor='lightcoral'}
      if((obj.right_answer)==(obj[`answer_${i}`])){theLabel.style.backgroundColor='lightgreen'};


      /*
      let ansImage = document.createElement("IMG");
      ansImage.src = obj[`ansImg_${i}`] ;
      
      let ansImageDiv = document.createElement("div");
      ansImageDiv.className=`ansImageDiv`;
      ansImageDiv.appendChild(ansImage);
      */
      let theLabelPercent =  document.createTextNode("   "+"  ("+obj[`percent_${i}`]+")");
  
     // theLabelPercent.style.color='grey';

     //
     if (obj[`answer_${i}`].startsWith("§")) {
      tablingQuestion(obj[`answer_${i}`],theLabel);
    }else { theLabel.appendChild(theLabelText);}      //
      //
      //
      theLabel.appendChild(theLabelPercent);






































/*
let ansImageSrc = obj[`ansImg_${i}`];
if (ansImageSrc && ansImageSrc.trim() !== "") {
    let ansImage = document.createElement("IMG");
    ansImage.src = ansImageSrc;
    let ansImageDiv = document.createElement("div");
    ansImageDiv.className = `ansImageDiv`;
    ansImageDiv.appendChild(ansImage);
    theLabel.append(ansImageDiv);
}
*/
let ansImagePath = obj[`ansImg_${i}`]; // e.g., "images/answer_img_1.png"

if (ansImagePath && ansImagePath.trim() !== "") {
  const imageRef = ref(storage, ansImagePath);

  getDownloadURL(imageRef)
    .then(url => {
      let ansImage = document.createElement("IMG");
      ansImage.src = url;

      let ansImageDiv = document.createElement("div");
      ansImageDiv.className = `ansImageDiv`;
      ansImageDiv.appendChild(ansImage);

      theLabel.append(ansImageDiv);
    })
    .catch(error => {
      console.error(`❌ Could not load ${ansImagePath}:`, error);
    });
}














































theLabel.addEventListener('click', function(event) {
    event.preventDefault(); // ⛔ prevent label from checking the radio
    this.classList.toggle('omitted'); 
});



      mainDiv.appendChild(radioInput);
      mainDiv.appendChild(theLabel);
  
      answersArea.appendChild(mainDiv);
      }
  

      let explanationTiltle = document.createElement("h2");
      explanationTiltle.id=`explanation_title`;
      explanationTiltle.className=`explanation_title`;
      let explanation_text1 = document.createTextNode(obj["explanation_1"]);
     // explanation_text1.className=`explanation_text1`;
      let explanation_text2 = document.createTextNode(obj["explanation_2"]);
  
      let explanation_text3 = document.createTextNode(obj["explanation_3"]);
  
     // explanation_text2.className=`explanation_text2`;
  





































/*
      let img_explanation = document.createElement("IMG");
      img_explanation.src = obj["explanation_img"] ;
      let imageDiv_explanation = document.createElement("div");
      imageDiv_explanation.className=`imageDivision_explanation`;
      imageDiv_explanation.appendChild(img_explanation);
  */








































      explanationTiltle.append("Explanation:")
      explanationTiltle.appendChild(document.createElement("br"));
  
      
      let wordIndex = 1;




























































/*
      let explanation_1_Html = obj["explanation_1"].split('$')
      .map(line => {
        const choiceMatch = line.match(/\(Choice [A-N]\)/);
        if (choiceMatch) {
          const choiceText = choiceMatch[0];
          line = line.replace(choiceText, '').trim();
          line = `<strong>${choiceText}</strong> ` + line;
        }
        line = line.replace(/Educational objective/g, "<strong>Educational objective</strong><br>");
        line = line.replace(/Educational Objective/g, "<strong>Educational objective</strong><br>");
          line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
          line = line.replace(/•/g, '\u00A0\u00A0\u00A0•');
          line = line.replace(/○/g, '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○');
          line = line.replace(/@(.*?)@/g, (_, word) => {
            const imgKey = `clickable_${wordIndex}`;
            const imageSrc = obj[imgKey];
            const span = `<span class="clickable" onclick="showImage('${imageSrc}')">${word}</span>`;
            wordIndex++;
            return span;
          });
          return line;
        })
        .join('<br><br>'); // ✅ final HTML string
  */
 
  let explanation_1_Html = obj["explanation_1"].split('$')
  .map(line => {
    const choiceMatch = line.match(/\(Choice [A-N]\)/);
    if (choiceMatch) {
      const choiceText = choiceMatch[0];
      line = line.replace(choiceText, '').trim();
      line = `<strong>${choiceText}</strong> ` + line;
    }

    line = line.replace(/Educational objective/g, "<strong>Educational objective</strong><br>");
    line = line.replace(/Educational Objective/g, "<strong>Educational objective</strong><br>");
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
    line = line.replace(/•/g, '\u00A0\u00A0\u00A0•');
    line = line.replace(/○/g, '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○');


    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `clickable_${wordIndex}`;
      const imagePath = obj[imgKey]; // e.g., "images/example.png"

      if (imagePath && imagePath.trim() !== "") {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
          .then(url => {
            // Replace the clickable word with the Firebase URL dynamically
            document.querySelectorAll(`span[data-imgkey="${imgKey}"]`).forEach(span => {
              span.setAttribute("onclick", `showImage('${url}')`);
            });
          })
          .catch(err => console.error(`❌ Could not load ${imagePath}:`, err));
      }

      const span = `<span class="clickable" data-imgkey="${imgKey}">${word}</span>`;
      wordIndex++;
      return span;
    });

    return line;
  })
  .join('<br><br>'); // ✅ final HTML string




































































      let myTextEXP1 = document.createElement("div");
      myTextEXP1.className = "myText";
      myTextEXP1.innerHTML = explanation_1_Html; // ✅ correct now
      explanationTiltle.appendChild(myTextEXP1);
      
      //
      displayCustomTable(obj["table"],explanationTiltle);
      //
      //
      styling(obj["table_3"],explanationTiltle);
//
  



/*
explanationTiltle.appendChild(imageDiv_explanation);
*/  

      let explanationImgPath = obj["explanation_img"]; // e.g., "images/explanation_img_1.png"

if (explanationImgPath && explanationImgPath.trim() !== "") {
  const imageRef = ref(storage, explanationImgPath);



        let img_explanation = document.createElement("IMG");


      let imageDiv_explanation = document.createElement("div");
      imageDiv_explanation.className = `imageDivision_explanation`;
      imageDiv_explanation.appendChild(img_explanation);

       explanationTiltle.appendChild(imageDiv_explanation);


  getDownloadURL(imageRef)
    .then(url => {

      img_explanation.src = url;


    })
    .catch(error => {
      console.error(`❌ Could not load ${explanationImgPath}:`, error);
    });
}


























































/*
let formattedHTML = obj["explanation_2"].split('$')
  .map(line => {  
    const choiceMatch = line.match(/\(Choice [A-N]\)/);
  if (choiceMatch) {
    const choiceText = choiceMatch[0];
    line = line.replace(choiceText, '').trim();
    line = `<strong>${choiceText}</strong> ` + line;
  }
    line = line.replace(/Educational objective/g, "<strong>Educational objective</strong><br>");
    line = line.replace(/Educational Objective/g, "<strong>Educational objective</strong><br>");    
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
    line = line.replace(/•/g, '\u00A0\u00A0\u00A0•');
    line = line.replace(/○/g, '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○');
    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `clickable_${wordIndex}`;
      const imageSrc = obj[imgKey];
      const span = `<span class="clickable" onclick="showImage('${imageSrc}')">${word}</span>`;
      wordIndex++;
      return span;
    });
    return line;
  })
  .join('<br><br>'); // ✅ final HTML string
*/



let formattedHTML = obj["explanation_2"].split('$')
  .map(line => {  
    const choiceMatch = line.match(/\(Choice [A-N]\)/);
    if (choiceMatch) {
      const choiceText = choiceMatch[0];
      line = line.replace(choiceText, '').trim();
      line = `<strong>${choiceText}</strong> ` + line;
    }

    line = line.replace(/Educational objective/g, "<strong>Educational objective</strong><br>");
    line = line.replace(/Educational Objective/g, "<strong>Educational objective</strong><br>");    
    line = line.replace(/#(.*?)#/g, '<strong>$1</strong>');
    line = line.replace(/•/g, '\u00A0\u00A0\u00A0•');
    line = line.replace(/○/g, '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0○');

    line = line.replace(/@(.*?)@/g, (_, word) => {
      const imgKey = `clickable_${wordIndex}`;
      const imagePath = obj[imgKey]; // e.g., "images/img1.png"

      if (imagePath && imagePath.trim() !== "") {
        const imageRef = ref(storage, imagePath);
        getDownloadURL(imageRef)
          .then(url => {
            document.querySelectorAll(`span[data-imgkey="${imgKey}"]`).forEach(span => {
              span.setAttribute("onclick", `showImage('${url}')`);
            });
          })
          .catch(err => console.error(`❌ Could not load ${imagePath}:`, err));
      }

      const span = `<span class="clickable" data-imgkey="${imgKey}">${word}</span>`;
      wordIndex++;
      return span;
    });

    return line;
  })
  .join('<br><br>'); // ✅ final HTML string































































let myText = document.createElement("div");
myText.className = "myText";
myText.innerHTML = formattedHTML; // ✅ correct now
explanationTiltle.appendChild(myText);
/*
 explanationTiltle.addEventListener('mouseup', () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        if (!range.collapsed) {
            const span = document.createElement('span');
            span.className = 'highlight';
            range.surroundContents(span);
            selection.removeAllRanges();
        }
    }
});
*/



const darkYellow = 'rgba(253, 250, 50, 0.664)'; // requested color

// Highlight or unhighlight on mouseup
explanationTiltle.addEventListener('mouseup', () => {
  const selection = window.getSelection();
  if (!selection || selection.isCollapsed) return;

  const range = selection.getRangeAt(0);

  if (!explanationTiltle.contains(range.startContainer) || !explanationTiltle.contains(range.endContainer)) return;

  // If selection contains any highlight → remove only those inside selection
  const selectedHighlights = getHighlightsInRange(range);
  if (selectedHighlights.length > 0) {
    selectedHighlights.forEach(removeHighlight);
    selection.removeAllRanges();
    return;
  }

  if (isRangeSafe(range)) {
    const span = document.createElement('span');
    span.className = 'highlight';
    span.style.backgroundColor = darkYellow;
    try {
      range.surroundContents(span);
    } catch {
      highlightTextOnly(range);
    }
  } else {
    highlightTextOnly(range);
  }

  selection.removeAllRanges();
});

// Single click on a highlight → remove just that one
explanationTiltle.addEventListener('click', (e) => {
  if (e.target.classList.contains('highlight')) {
    removeHighlight(e.target);
  }
});








































  explanationArea.appendChild(explanationTiltle);


  if (window.MathJax) {
  MathJax.typeset();
}


    }}
  
  
function checkAnswer(rAnswer, count) {
   answers = document.getElementsByName("question");
  let theChoosenAnswer="";

  
  // color blue the question box if any answer is chosen.
  //



//if ((FINAL_ARRAY[currentIndex].right_answer)==FINAL_ARRAY[currentIndex][`answer_${chosen_Answers[currentIndex+1]+1}`]){document.getElementById(`${currentIndex+1}`).classList.add('checked');
//}else{
  //document.getElementById(`${currentIndex+1}`).classList.add('crossed')
//}



  let b=false;
  for (let i = 0; i < answers.length; i++) {
    b=b||(answers[i].checked) 
      }
      
      if (b==true){document.getElementById(`${currentIndex}`).style.backgroundColor= "#e0e0e0"; }


if(flag_checkbox.checked){
   document.getElementById(`status_${currentIndex}`).textContent = `*`;
//
//
 document.getElementById(`${currentIndex}`).classList.add('flagged');
//
//
console.log(all_marked, "push", FINAL_ARRAY[currentIndex-1]);
all_marked.push(FINAL_ARRAY[currentIndex-1]);
markedIdsArrayCloud=Array.from(new Set(all_marked.map(q => q.id)));



    }else{
 document.getElementById(`status_${currentIndex}`).textContent = "";
      
}


flag_checkbox.checked=false;


  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
    theChoosenAnswer = answers[i].dataset.answer;
    chosen_Answers[currentIndex]=i;
    chosen_Answers_string[currentIndex]=theChoosenAnswer;
    }
  }

  if (theChoosenAnswer==""){
  //  chosen_Answers.push(100);
    chosen_Answers_string[currentIndex]="not answered";
  }

}


  
      window.showImage = function (src) {
        const isVideo = src.endsWith('.mp4');
      
        // Get DOM elements
        const imageEl = document.getElementById("modalImage");
        const videoEl = document.getElementById("modalVideo");
        const videoSource = document.getElementById("modalVideoSource");
      
        // Show the modal
        document.getElementById("imageModal").style.display = "block";
      
        if (isVideo) {
          // Hide image, show video
          imageEl.style.display = "none";
          videoEl.style.display = "block";
          videoSource.src = src;
          videoEl.load();
        } else {
          // Show image, hide video
          imageEl.style.display = "block";
          videoEl.style.display = "none";
          imageEl.src = src;
        }
      }
      

 
window.closeModal = function () {
    document.getElementById("imageModal").style.display = "none";
    document.getElementById("modalVideo").pause(); // Pause video if playing
  }

    window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
      closeModal();
    }
    }
           



function countdown(duration, count) {
  if (currentIndex < count) {
    
    let minutes, seconds;
    countdownInterval = setInterval(function () {
      minutes = parseInt(duration / 60);
      seconds = parseInt(duration % 60);

      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

//      countdownElement.innerHTML ="time remaining"+" "+`${minutes}:${seconds}`;

let formattedMinutes = String(minutes).padStart(2, '0');
let formattedSeconds = String(seconds).padStart(2, '0');

countdownElement.innerHTML = `⏳ ${formattedMinutes}:${formattedSeconds}`;

saveRemainingTimeCloud(duration);
      if (--duration < 0) {
        clearInterval(countdownInterval);   
        Finish();
      }
    }, 1000);
  }
}



//111111111111111111111111111111111111111111111111111

 function makeButtons_suspended(FINAL_ARRAY,chosen_Answers, submitted_array, exam_number ){
  // randomzing final array
   currentIndex = 0;
   score=0;
   string_array = "";

   document.querySelector(".main-content").style.marginLeft = "0";

Final_Count= FINAL_ARRAY.length;

  if (currentIndex>=(Final_Count-1)){nextButton.style.display='none'}else{
    nextButton.style.display='block' }    

for(let i=1;i<=Final_Count;i++){
  // this is the SUBMIT button in the exam for every question
  let review_questions= document.createElement('button')
  review_questions.className="review_buttons";
  let createLine=document.createElement('area')
  createLine.innerText="\n";
  review_questions.setAttribute("id", `review_${i}`);
  review_questions.innerText= "Submit Answer";
  document.getElementById("myReview").appendChild(review_questions);
  document.getElementById("myReview").appendChild(createLine);
  quizArea.style.display='block';
  answersArea.style.display='block';

  
 ///////////////////////////////////////////////////////////////////////////////////////////////
  accumulatedTimes[i] = 0;
  frozenFlags[i]=submitted_array[i-1];
  console.log(`frozenFlags[${i}]`,frozenFlags[i]);
  activeTimers[i] = false;


  review_questions.onclick=() =>{

    if (activeTimers[i] && !frozenFlags[i]) {
    const elapsed = (Date.now() - startTimes[i]) / 1000;
    accumulatedTimes[i] += elapsed;

    timeperQuestion[`timeperQuestion_${test_result_index}_${uid}`][i]=accumulatedTimes[lastStartIndex];
    activeTimers[i] = false;
    frozenFlags[i] = true;  // freeze
    }  
    /////////////////////////////////////////////////////////////////////////////////////////////////
  let index = i;  // Capture the current value of i
  console.log("You clicked button number:", index);

  submitted_string[`submitted_string_${exam_number+1}_${uid}`][index-1] = true;
  submitted_array= submitted_string[`submitted_string_${exam_number+1}_${uid}`];
async function saveSingleItem() {
  try {
    await saveOrUpdateDoc(`submitted_string_${exam_number+1}_${uid}`, submitted_string[`submitted_string_${exam_number+1}_${uid}`]);
    await saveOrUpdateDoc(`submitted_array_${uid}`, submitted_array);  // score is a number
    console.log("Saved successfully.", submitted_string[`submitted_string_${exam_number+1}_${uid}`]);
  } catch (error) {
    console.error("Error saving:", error);
  }
}
saveSingleItem();

  //
  let new_index=currentIndex;
  new_index++;
  let answers=document.getElementsByName("question");

  for (let j = 0; j < answers.length; j++) {
    if (answers[j].checked) {
  
  chosen_Answers[new_index]=j;
      }  }

  currentIndex=index-1; // i added let
  quizArea.innerHTML = "";
  answersArea.innerHTML = "";
  explanationArea.innerHTML="";

  addQuestionData_2(FINAL_ARRAY[currentIndex],Final_Count );
if(all_marked.some(item => item.id === FINAL_ARRAY[currentIndex].id)){
flag_checkbox.checked=true;
      }

  for (let m =0 ;m< answers.length;m++){
        if (chosen_Answers[currentIndex+1]==m){
        answers[m].checked=true 
        }   }


for (let m =0 ;m< answers.length;m++){ answers[m].disabled='true' }
atButtonClicked[index - 1] = true; // Mark this "i@" button as clicked
//i want it to disappear when "submit" is clicked.

review_questions.style.display = 'none';

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// here  //Answers[`Answer_${Z}`][i]=chosen_Answers[i]; did not work so i am using chosen_answers by now
  let isCorrect = ((FINAL_ARRAY[i-1].right_answer)==FINAL_ARRAY[i-1][`answer_${chosen_Answers[i]+1}`]);

  const Timeentries= timeperQuestion[`timeperQuestion_${test_result_index}_${uid}`] || [];
let displayTime;
if (Timeentries[i] >= 60) {
    let minutes = Timeentries[i] / 60;
    displayTime = minutes.toFixed(1) + " minutes";
} else {
    let wholeSeconds = Math.floor(Timeentries[i]);
if (Number.isNaN(wholeSeconds)) {
    wholeSeconds = "";
    displayTime = "-";
}else{
    displayTime = wholeSeconds + " seconds";
}
}
     
const right = FINAL_ARRAY[i-1].right_answer?.trim() || "";
const match = right.match(/[A-V]/);  // Finds first capital A–F
const letter = match ? match[0] : null;
const indexsaa = letter ?  letter.charCodeAt(0) - 64: null;
const percentage = indexsaa ? FINAL_ARRAY[i-1][`percent_${indexsaa}`] : "";

        const panel = document.getElementById('infoPanel');
        const timeNow = document.getElementById('timeNow');
        const statusStrip = document.getElementById('statusStrip');
        const statusText = document.getElementById('statusText');
        const percentageText = document.getElementById('percentageText');
        const timeSpentText = document.getElementById('timeSpentText');

        const now = new Date();
        const timeString = now.toLocaleTimeString();
        timeNow.innerHTML =`<img src="icons/calender.png" alt="icon" style="width:35px; vertical-align:middle; margin-right:5px;"> ${timeString}` ;
        panel.style.display = 'flex';

    if (isCorrect) {
    statusStrip.style.backgroundColor = 'green';
    statusText.textContent = 'correct';
    statusText.innerHTML = `Correct.  The correct answer is ${letter}`

document.getElementById(`${i}`).classList.add('checked');


        } else {
    statusStrip.style.backgroundColor = 'red';
    statusText.innerHTML = `Incorrect.  The correct answer is ${letter}`

      document.getElementById(`${i}`).classList.add('crossed')

        }
  //  percentageText.innerHTML = `<img src="icons/statistical.png" alt="icon" style="width:30px; vertical-align:middle; margin-right:5px;"> ${percentage}`;
   // timeSpentText.innerHTML =`<img src="icons/clock.png" alt="icon" style="width:40px; vertical-align:middle; margin-right:5px;"> ${displayTime} `;



   percentageText.innerHTML = `
    <div style="text-align:center;">
        <span style="display:block; font-weight:bold; font-size:14px; margin-bottom:3px;">Correctly Answered Percent</span>
        <img src="icons/statistical.png" alt="icon" style="width:30px; vertical-align:middle; margin-right:5px;">
        ${percentage}
    </div>
`;



    timeSpentText.innerHTML = `
    <div style="text-align:center;">
        <span style="display:block; font-weight:bold; font-size:14px; margin-bottom:3px;">Time Spent</span>
        <img src="icons/clock.png" alt="icon" style="width:40px; vertical-align:middle; margin-right:5px;">
        ${displayTime}
    </div>
`;


/////////////////////////////////////////////////////////////////////////////////////////////////////

document.getElementById(`${i}`).style.backgroundColor= "#e0e0e0"; 


//000000000000000000000000000000000000000000000000000000000000000000000000000000
for (let idx = 0; idx < n; idx++) {
    if (submitted_string[`submitted_string_${Z}_${uid}`][idx] === true) {
        Answers[`Answer_${Z}_${uid}`] = chosen_Answers;

        if (FINAL_ARRAY[idx].right_answer === FINAL_ARRAY[idx][`answer_${Answers[`Answer_${Z}_${uid}`][idx + 1] + 1}`]) {
            if (!Array.isArray(string_array)) {
                string_array = [];
            }
            string_array[idx] = "true";
        } else {
            if (!Array.isArray(string_array)) {
                string_array = [];
            }
            string_array[idx] = "false";
        }
    }
}

Exams[`Exam_${Z}_${uid}`] = FINAL_ARRAY;
Answers[`Answer_${Z}_${uid}`] = chosen_Answers;
Dates[`Date_${Z}_${uid}`] = new Date().toLocaleString();
scores[`score_${Z}_${uid}`] = score / n;
status_string[`status_string_${Z}_${uid}`] = string_array;

SaveReloadCloud();
//00000000000000000000000000000000000000000000000000000000000

} 
review_questions.classList.add('hidden-button', 'at-button');
atButtonContainer.appendChild(review_questions);
atButtons.push(review_questions);
}

 

for (let i = 1; i <= Final_Count; i++) {
    let firstBtn = document.createElement("button");
    let Status = document.createElement("label");
    Status.className='status';
    Status.id=`status_${i}`;
    firstBtn.className=`new_buttons`;
    firstBtn.id = `${i}`;
    firstBtn.textContent = `${i}`

    firstBtn.style.backgroundColor = (i % 2 === 0) ? "#f0f0f0" : "#ffffff";
  Status.className = 'status';
  Status.id = `status_${i}`;

  firstBtn.click(buttonEvent_suspended(i));

  document.getElementById("sidebar-scroll").appendChild(firstBtn);
  document.getElementById("sidebar-scroll").appendChild(Status);


    firstButtons.push(firstBtn);
    /////////////////////////////////////////////

 const targetIds_1 = ["2078","2076","8332","10507","2090","2101",
        "2086","2068","2082","2110","7228","7666",
        "2074","7214","2092","2084","7670",
        "2072","7226","2080","2099", "7218","2070",
        "2097","2061","2088","7660","7238"
      ];


 const targetIds_2 = ["2079", "2077", "8333", "10508", "2091","2102",
        "2087","2069","2083","2111","7229","7667",
        "2075","7215","2093","2085","7671",
        "2073","7227","2081","2100","7219","2071",
        "2098","2062","2089","7661","7239"
      ];
      
    
if (targetIds_1.includes(FINAL_ARRAY[i-1].id.toString())) {
    firstBtn.style.backgroundColor = '';
    firstBtn.classList.add('connected-buttons', 'first');
}

if (targetIds_2.includes(FINAL_ARRAY[i-1].id.toString())) {
    firstBtn.style.backgroundColor = '';
    firstBtn.classList.add('connected-buttons', 'last');
}
  }
    firstButtons[0].click();


   // updated_data should be added
 //this to remove the used questions


 const selectedIds = new Set(FINAL_ARRAY.map(q => q.id));
unusedIdsArrayCloud = unusedIdsArrayCloud.filter(id => !selectedIds.has(id));

/* 13
      for (const key in unusedgroupAData) {
        unusedgroupAData[key] = unusedgroupAData[key].filter(q => !selectedIds.has(q.id));
      }
      for (const key in unusedgroupBData) {
        unusedgroupBData[key] = unusedgroupBData[key].filter(q => !selectedIds.has(q.id));
      }
*/


      quizArea.innerHTML = "";
      answersArea.innerHTML = "";
      explanationArea.innerHTML="";

      // Add Question Data

    if (submitted_array[currentIndex]==true){
           
    document.querySelectorAll('.review_buttons').forEach(btn => {
    btn.style.display = 'none';
});



    addQuestionData_2(FINAL_ARRAY[currentIndex],Final_Count );
if(all_marked.some(item => item.id === FINAL_ARRAY[currentIndex].id)){
flag_checkbox.checked=true;
      }


           for (let m =0 ;m< answers.length;m++){
           if (chosen_Answers[currentIndex+1]==m){
           answers[m].checked=true 
           }   }
           for (let m =0 ;m< answers.length;m++){ answers[m].disabled='true' }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// here  //Answers[`Answer_${Z}`][i]=chosen_Answers[i]; did not work so i am using chosen_answers by now
  let isCorrect = ((FINAL_ARRAY[currentIndex].right_answer)==FINAL_ARRAY[currentIndex][`answer_${chosen_Answers[currentIndex+1]+1}`]);

  const Timeentries= timeperQuestion[`timeperQuestion_${test_result_index}_${uid}`] || [];
let displayTime;
if (Timeentries[currentIndex+1] >= 60) {
    let minutes = Timeentries[currentIndex+1] / 60;
    displayTime = minutes.toFixed(1) + " minutes";
} else {
    let wholeSeconds = Math.floor(Timeentries[currentIndex+1]);
if (Number.isNaN(wholeSeconds)) {
    wholeSeconds = "";
    displayTime = "-";
}else{
    displayTime = wholeSeconds + " seconds";
}
}
     
const right = FINAL_ARRAY[currentIndex].right_answer?.trim() || "";
const match = right.match(/[A-V]/);  // Finds first capital A–F
const letter = match ? match[0] : null;
const indexsaa = letter ?  letter.charCodeAt(0) - 64: null;
const percentage = indexsaa ? FINAL_ARRAY[currentIndex][`percent_${indexsaa}`] : "";

        const panel = document.getElementById('infoPanel');
        const timeNow = document.getElementById('timeNow');
        const statusStrip = document.getElementById('statusStrip');
        const statusText = document.getElementById('statusText');
        const percentageText = document.getElementById('percentageText');
        const timeSpentText = document.getElementById('timeSpentText');

        const now = new Date();
        const timeString = now.toLocaleTimeString();
        timeNow.innerHTML =`<img src="icons/calender.png" alt="icon" style="width:35px; vertical-align:middle; margin-right:5px;"> ${timeString}` ;
        panel.style.display = 'flex';

    if (isCorrect) {
    statusStrip.style.backgroundColor = 'green';
    statusText.textContent = 'correct';
    statusText.innerHTML = `Correct.  The correct answer is ${letter}`
        } else {
    statusStrip.style.backgroundColor = 'red';
    statusText.innerHTML = `Incorrect.  The correct answer is ${letter}`
        }
//    percentageText.innerHTML = `<img src="icons/statistical.png" alt="icon" style="width:30px; vertical-align:middle; margin-right:5px;"> ${percentage}`;
//    timeSpentText.innerHTML =`<img src="icons/clock.png" alt="icon" style="width:40px; vertical-align:middle; margin-right:5px;"> ${displayTime} `;




   percentageText.innerHTML = `
    <div style="text-align:center;">
        <span style="display:block; font-weight:bold; font-size:14px; margin-bottom:3px;">Correctly Answered Percent</span>
        <img src="icons/statistical.png" alt="icon" style="width:30px; vertical-align:middle; margin-right:5px;">
        ${percentage}
    </div>
`;



    timeSpentText.innerHTML = `
    <div style="text-align:center;">
        <span style="display:block; font-weight:bold; font-size:14px; margin-bottom:3px;">Time Spent</span>
        <img src="icons/clock.png" alt="icon" style="width:40px; vertical-align:middle; margin-right:5px;">
        ${displayTime}
    </div>
`;

/////////////////////////////////////////////////////////////////////////////////////////////////////

    }else{


      
//////////////////////////////////////////////////////////////////
      document.querySelectorAll('.review_buttons').forEach(btn => {
    btn.style.display = 'none';
});

// 2️⃣ Show the one you want
const targetBtn = document.getElementById(`review_${currentIndex + 1}`);
if (targetBtn) {
    targetBtn.style.display = 'block';
}


////////////////////////////////////////////////////////////

    addQuestionData(FINAL_ARRAY[currentIndex],Final_Count );


    if(all_marked.some(item => item.id === FINAL_ARRAY[currentIndex].id)){
flag_checkbox.checked=true;
      }




    for (let m =0 ;m< answers.length;m++){
        if (chosen_Answers[currentIndex+1]==m){answers[m].checked=true }
       }
    }




      // Start CountDown
      if (isTimed==true){ 
        
      //  countdown( 90*Final_Count, Final_Count);

      countdown( secondduration, Final_Count);

      }


      // Click On Submit
      nextButton.onclick = () => {
     firstButtons[currentIndex+1].click();
      }
      
      quizApp.style.display='block';
      quizArea.style.display='block';
      answersArea.style.display='block';


document.getElementById("bottomBar").classList.remove("hidden");
document.getElementById("topBar").classList.remove("hidden");




for(let i=1;i<=Final_Count;i++){
if(all_marked.some(item => item.id === FINAL_ARRAY[i-1].id)){
 document.getElementById(`${i}`).classList.add('flagged');
      }
    }




for(let i=1;i<=Final_Count;i++){

  if(submitted_string[`submitted_string_${Z}_${uid}`][i-1]){
  if ((FINAL_ARRAY[i-1].right_answer)==FINAL_ARRAY[i-1][`answer_${chosen_Answers[i]+1}`]){
  document.getElementById(`${i}`).classList.add('checked');
  }else {
  document.getElementById(`${i}`).classList.add('crossed')
  }


  document.getElementById(`${i}`).style.backgroundColor="#e0e0e0"; ;

  
   }
}






}



const buttonEvent_suspended = i => {
document.body.addEventListener( 'click',  (event)  => {
    //
    //
if(event.target.id === i.toString()){ 



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const now = Date.now();
  if (lastStartIndex !== null && lastStartIndex !== i) {
   const diff = (now - lastStartTime) / 1000;
  if (!frozenFlags[lastStartIndex]) {
  accumulatedTimes[lastStartIndex] += diff;
 //const timeDisplay = document.getElementById(`time_display_${lastStartIndex}`);
 //console.log(`time between start_${lastStartIndex} and stop_${lastStartIndex} = ${accumulatedTimes[lastStartIndex].toFixed(2)} seconds`);
 timeperQuestion[`timeperQuestion_${test_result_index}_${uid}`][i]=accumulatedTimes[lastStartIndex];
  }
 //alert(`Time between start_${lastStartIndex} and start_${i}: ${diff.toFixed(2)} seconds`);
 activeTimers[lastStartIndex] = false;  // stop previous timer
}
 lastStartIndex = i;
 lastStartTime = now;
  // Only start timer if not frozen
 if (!frozenFlags[i]) {
 startTimes[i] = now;
 activeTimers[i] = true;
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////// 
//  // Hide all "@" buttons
  atButtons.forEach(atButton => atButton.classList.remove('visible-button'));
  // Show the corresponding "@" button
  atButtons[i - 1].classList.add('visible-button');
  //
    
  theRightAnswer = FINAL_ARRAY[currentIndex].right_answer;
  // Increase Index
  currentIndex++;
  // Check The Answer of the previous question
  checkAnswer(theRightAnswer, Final_Count);
  currentIndex=i-1;
            
  if(document.getElementById(`status_${i}`).textContent == `*`){flag_checkbox.checked=true}
   
  if (currentIndex>=(n-1)){nextButton.style.display='none'}else{
  nextButton.style.display='block' }
    
  quizArea.innerHTML = "";
  answersArea.innerHTML = "";
  explanationArea.innerHTML="";
//
//



  console.log("currentIndex",currentIndex,"submitted_array[currentIndex]",submitted_array[currentIndex]);


  
    if (submitted_array[currentIndex]==true){

      document.querySelectorAll('.review_buttons').forEach(btn => {
    btn.style.display = 'none';
});






    addQuestionData_2(FINAL_ARRAY[currentIndex],Final_Count );


    if(all_marked.some(item => item.id === FINAL_ARRAY[currentIndex].id)){
flag_checkbox.checked=true;
      }




           for (let m =0 ;m< answers.length;m++){
           if (chosen_Answers[currentIndex+1]==m){
           answers[m].checked=true 
           }   }
           for (let m =0 ;m< answers.length;m++){ answers[m].disabled='true' }



           /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// here  //Answers[`Answer_${Z}`][i]=chosen_Answers[i]; did not work so i am using chosen_answers by now
  let isCorrect = ((FINAL_ARRAY[i-1].right_answer)==FINAL_ARRAY[i-1][`answer_${chosen_Answers[i]+1}`]);

  const Timeentries= timeperQuestion[`timeperQuestion_${test_result_index}_${uid}`] || [];
let displayTime;
if (Timeentries[i] >= 60) {
    let minutes = Timeentries[i] / 60;
    displayTime = minutes.toFixed(1) + " minutes";
} else {
    let wholeSeconds = Math.floor(Timeentries[i]);
if (Number.isNaN(wholeSeconds)) {
    wholeSeconds = "";
    displayTime = "-";
}else{
    displayTime = wholeSeconds + " seconds";
}
}
     
const right = FINAL_ARRAY[i-1].right_answer?.trim() || "";
const match = right.match(/[A-V]/);  // Finds first capital A–F
const letter = match ? match[0] : null;
const indexsaa = letter ?  letter.charCodeAt(0) - 64: null;
const percentage = indexsaa ? FINAL_ARRAY[i-1][`percent_${indexsaa}`] : "";

        const panel = document.getElementById('infoPanel');
        const timeNow = document.getElementById('timeNow');
        const statusStrip = document.getElementById('statusStrip');
        const statusText = document.getElementById('statusText');
        const percentageText = document.getElementById('percentageText');
        const timeSpentText = document.getElementById('timeSpentText');

        const now = new Date();
        const timeString = now.toLocaleTimeString();
        timeNow.innerHTML =`<img src="icons/calender.png" alt="icon" style="width:35px; vertical-align:middle; margin-right:5px;"> ${timeString}` ;
        panel.style.display = 'flex';

    if (isCorrect) {
    statusStrip.style.backgroundColor = 'green';
    statusText.textContent = 'correct';
    statusText.innerHTML = `Correct.  The correct answer is ${letter}`



        } else {
    statusStrip.style.backgroundColor = 'red';
    statusText.innerHTML = `Incorrect.  The correct answer is ${letter}`
        }
  //  percentageText.innerHTML = `<img src="icons/statistical.png" alt="icon" style="width:30px; vertical-align:middle; margin-right:5px;"> ${percentage}`;
  //  timeSpentText.innerHTML =`<img src="icons/clock.png" alt="icon" style="width:40px; vertical-align:middle; margin-right:5px;"> ${displayTime} `;


  

   percentageText.innerHTML = `
    <div style="text-align:center;">
        <span style="display:block; font-weight:bold; font-size:14px; margin-bottom:3px;">Correctly Answered Percent</span>
        <img src="icons/statistical.png" alt="icon" style="width:30px; vertical-align:middle; margin-right:5px;">
        ${percentage}
    </div>
`;



    timeSpentText.innerHTML = `
    <div style="text-align:center;">
        <span style="display:block; font-weight:bold; font-size:14px; margin-bottom:3px;">Time Spent</span>
        <img src="icons/clock.png" alt="icon" style="width:40px; vertical-align:middle; margin-right:5px;">
        ${displayTime}
    </div>
`;


/////////////////////////////////////////////////////////////////////////////////////////////////////


    }else{

      


    document.querySelectorAll('.review_buttons').forEach(btn => {
    btn.style.display = 'none';
});

// 2️⃣ Show the one you want
const targetBtn = document.getElementById(`review_${currentIndex + 1}`);
if (targetBtn) {
    targetBtn.style.display = 'block';
}

    addQuestionData(FINAL_ARRAY[currentIndex],Final_Count );


    if(all_marked.some(item => item.id === FINAL_ARRAY[currentIndex].id)){
flag_checkbox.checked=true;
      }




    for (let m =0 ;m< answers.length;m++){
        if (chosen_Answers[currentIndex+1]==m){answers[m].checked=true }
       }
    }

    if (atButtonClicked[i - 1]==true) {
      atButtons[i - 1].click();
    } 
};
     //     event.preventDefault();    
        });
      }      



//111111111111111111111111111111111111111111111111111111111111





flag_checkbox.addEventListener('change', function(event) {
    if (event.target.checked) {
document.getElementById(`${currentIndex+1}`).classList.add('flagged');

all_marked.push(FINAL_ARRAY[currentIndex]);


markedIdsArrayCloud=Array.from(new Set(all_marked.map(q => q.id)));

/* 10
const markedIds = new Set(all_marked.map(q => q.id));
for (const key in originalGroupAData) {
  markedGroupAData[key] = originalGroupAData[key].filter(q => markedIds.has(q.id));
}
for (const key in originalGroupBData) {
  markedGroupBData[key] = originalGroupBData[key].filter(q => markedIds.has(q.id));
}
*/


    } else {
document.getElementById(`${currentIndex+1}`).classList.remove('flagged');

all_marked = all_marked.filter(item => item.id !== FINAL_ARRAY[currentIndex].id);
markedIdsArrayCloud=Array.from(new Set(all_marked.map(q => q.id)));

/* 11
const markedIds = new Set(all_marked.map(q => q.id));
for (const key in originalGroupAData) {
  markedGroupAData[key] = originalGroupAData[key].filter(q => markedIds.has(q.id));
}
for (const key in originalGroupBData) {
  markedGroupBData[key] = originalGroupBData[key].filter(q => markedIds.has(q.id));
}
  */


    }

    saveFlagCloud();
});





  function toggleFlag() {
flag_checkbox.click();
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





function extractExamIds(Z, uid, Exams) {
  const examKey = `Exam_${Z}_${uid}`;
  const examArray = Exams[examKey];

  if (!Array.isArray(examArray)) {
    console.warn(`⚠️ Exams[${examKey}] is not a valid array.`);
    return [];
  }

  const ids = examArray
    .filter(q => q && q.id !== undefined)  // remove null/malformed
    .map(q => q.id);

  return ids;
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



async function CombosaveValuesToFirestore() {
console.time("🕒 Firestore Save Duration"); // ⏱ Start timer


/* 14
const allIds = getAllIdsFromGroupA(unusedgroupAData);
console.log(allIds)
unusedIdsArrayCloud=allIds;
*/


FinalArray_IDs=Array.from(new Set(FINAL_ARRAY.map(q => q.id)));

examIdsArray[`examIdsArray_${Z}_${uid}`] = extractExamIds(Z, uid, Exams);

const rawTimeArray = timeperQuestion[`timeperQuestion_${Z}_${uid}`] || [];
const cleanedTimeArray = Array.from({ length: rawTimeArray.length }, (_, i) =>
  rawTimeArray[i] === undefined ? 0 : rawTimeArray[i]
);

const rawSubmittedArray = submitted_string[`submitted_string_${Z}_${uid}`] || [];
const cleanedSubmittedArray = Array.from({ length: rawSubmittedArray.length }, (_, i) =>
  rawSubmittedArray[i] === undefined ? false : rawSubmittedArray[i]
);


const rawStatusArray = status_string[`status_string_${Z}_${uid}`] || [];
const cleanedStatusArray = Array.from({ length: rawStatusArray.length }, (_, i) =>
rawStatusArray[i] === undefined ? "" : rawStatusArray[i]  // or whatever default value you want
);


  if (dbClosed) return;
  if (!uid) {
    console.error("❌ UID not found. Cannot save user-specific data.");
    return;
  }

console.log("🧪 markedIdsArrayCloud:", markedIdsArrayCloud);
console.log(`🧪 Answer_${Z}_${uid}:`, Answers[`Answer_${Z}_${uid}`]);
console.log(`🧪 Date_${Z}_${uid}:`, Dates[`Date_${Z}_${uid}`]);
console.log(`🧪 score_${Z}_${uid}:`, scores[`score_${Z}_${uid}`]);
console.log(`🧪 status_string_${Z}_${uid}:`, status_string[`status_string_${Z}_${uid}`]);
console.log(`🧪 submitted_string_${Z}_${uid}:`, submitted_string[`submitted_string_${Z}_${uid}`]);
console.log(`🧪 timeperQuestion_${Z}_${uid}:`, timeperQuestion[`timeperQuestion_${Z}_${uid}`]);
console.log("🧪 test_result_index:", test_result_index);
console.log("🧪 Z:", Z);
console.log("🧪 icon_visibility:", icon_visibility);
console.log("🧪 number_of_solved_questions:", number_of_solved_questions);
console.log("🧪 SUM:", SUM);
console.log("🧪 Final_Count:", Final_Count);
console.log("🧪 cleanedSubmittedArray:", cleanedSubmittedArray);
console.log("🧪 cleanedTimeArray:", cleanedTimeArray);
console.log("🧪 examIdsArray:", examIdsArray);
console.log("[examIdsArray_${Z}_${uid}]", [`examIdsArray_${Z}_${uid}`]);

  try {
    const allData = {
      unusedIdsArrayCloud,
      incorrectIdsArrayCloud,
      markedIdsArrayCloud,
      [`examIdsArray_${Z}_${uid}`]: examIdsArray[`examIdsArray_${Z}_${uid}`],   
      [`Answer_${Z}_${uid}`]: Answers[`Answer_${Z}_${uid}`],
      [`Date_${Z}_${uid}`]: Dates[`Date_${Z}_${uid}`],
      [`score_${Z}_${uid}`]: scores[`score_${Z}_${uid}`],
      [`status_string_${Z}_${uid}`]: cleanedStatusArray,
      [`submitted_string_${Z}_${uid}`]: cleanedSubmittedArray,
      [`timeperQuestion_${Z}_${uid}`]: cleanedTimeArray,
      test_result_index,
      Z,
      icon_visibility,
      number_of_solved_questions,
      SUM,
     // FINAL_ARRAY,
      Final_Count,
      selectedOverlappingQuestions,
      FinalArray_IDs
    };

const undefinedFields = findUndefinedFieldsVerbose(allData);
if (undefinedFields.length > 0) {
  console.error("❌ Found undefined fields in data:", undefinedFields);
  return; // Prevent saving if any undefined field found
}

    await setDoc(doc(firestore, "userData", uid), allData, { merge: true });
    console.timeEnd("🕒 Firestore Save Duration"); // ✅ End timer
    console.log(`✅ All data saved to Firestore for UID: ${uid}`);
  } catch (error) {
    console.error("❌ Failed to save to Firestore:", error);
  }
}










function getAllIdsFromGroupA(unusedgroupAData) {
  const allIds = [];

  // Iterate over each group in unusedgroupAData
  for (const groupName in unusedgroupAData) {
    const group = unusedgroupAData[groupName];

    // Check if the group is an array
    if (Array.isArray(group)) {
      // Push each item's id to the allIds array
      group.forEach(item => {
        if (item.id) {
          allIds.push(item.id);
        }
      });
    }
  }

  return allIds;
}



async function ComboLoadValuesFromFirestore() {


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
      


      ////////////////////////// 16
    n=allData.n;
    isTimed = allData.isTimed ?? false;

      ///////////////////
      // Extract relevant data from Firestore document using `Z` and `uid`    
      unusedIdsArrayCloud = allData.unusedIdsArrayCloud;
      incorrectIdsArrayCloud = allData.incorrectIdsArrayCloud;
      markedIdsArrayCloud = allData.markedIdsArrayCloud;

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
       number_of_solved_questions = allData.number_of_solved_questions;
       SUM = allData.SUM;
       Final_Count = allData.Final_Count;
       selectedOverlappingQuestions = allData.selectedOverlappingQuestions;
       FinalArray_IDs=allData.FinalArray_IDs;
       submitted_array=allData.submitted_array;
       chosen_Answers=allData.chosen_Answers;



      // Handle any missing or undefined fields
      if (unusedIdsArrayCloud === undefined || incorrectIdsArrayCloud === undefined) {
        console.error("❌ Missing required fields in loaded data.");
        return;
      }
      // Process the loaded data as needed (e.g., for UI updates or further calculations)

    } else {
      console.error("❌ No such document found for UID:", uid);
    }

    console.timeEnd("🕒 Firestore Load Duration"); // ✅ End timer
  } catch (error) {
    console.error("❌ Failed to load data from Firestore:", error);
  }




const groupAIds = Array.from({ length: 13 }, (_, i) => `groupA${i + 1}`);
const groupAFiles = groupAIds.map(id => `${id}_Qs.json`);
const groupAPromises = groupAFiles.map((file, idx) =>
  loadQuestions(file).then(data => {
    const id = groupAIds[idx];
    originalGroupAData[id] = data;
  })
);
await Promise.all(groupAPromises);

const groupBPromises = [];
for (let i = 1; i <= 26; i++) {
  const groupId = `groupB${i}`;
  // Check if nested subgroups exist
  const count = nestedGroups[`B${i}`];
  if (count) {
    for (let j = 1; j <= count; j++) {
      const subId = `${groupId}_${j}`;
      groupBPromises.push(
        loadQuestions(`${subId}_Qs.json`).then(data => {
          originalGroupBData[subId] = data;
        })
      );
    }
  }
}

// Wait for all subgroups to finish loading
await Promise.all(groupBPromises);

///////////////////////////////////////
//  ////////////////////////////////////
//this is the ignorable undefined value i get in console load  
for (let i = 1; i <= Z; i++) {

  console.log("examIdsArray[`examIdsArray_${i}_${uid}`]",examIdsArray[`examIdsArray_${i}_${uid}`]);
}
  console.log(originalGroupAData);




for (let i = 1; i <= Z; i++) {
  if (!examIdsArray[`examIdsArray_${i}_${uid}`]) {
    console.warn(`⚠️ Skipping Exam_${i}_${uid} — examIdsArray is undefined`);
    continue;
  }
  Exams[`Exam_${i}_${uid}`] = Object
    .values(groupAndSortByCustomId(originalGroupAData, examIdsArray[`examIdsArray_${i}_${uid}`]))
    .flat();
}



FINAL_ARRAY = Object.values(groupAndSortByCustomId(originalGroupAData, FinalArray_IDs)).flat();

///////////////////////////////////
/* 15
unusedgroupAData = groupAndSortByCustomId(originalGroupAData, unusedIdsArrayCloud);
unusedgroupBData = groupAndSortByCustomId(originalGroupBData, unusedIdsArrayCloud);
*/



//1   incorrectGroupAData = groupAndSortByCustomId(originalGroupAData, incorrectIdsArrayCloud);
//2   incorrectGroupBData = groupAndSortByCustomId(originalGroupBData, incorrectIdsArrayCloud);

//3   markedGroupAData = groupAndSortByCustomId(originalGroupAData, markedIdsArrayCloud);
//4   markedGroupBData = groupAndSortByCustomId(originalGroupBData, markedIdsArrayCloud);


all_marked = Object.values(groupAndSortByCustomId(originalGroupAData, markedIdsArrayCloud)).flat();
all_incorrect=Object.values(groupAndSortByCustomId(originalGroupAData, incorrectIdsArrayCloud)).flat();

//5  console.log(markedGroupAData);
}










async function ComboLoadZFromFirestore() {
  console.time("🕒 Firestore Load Duration (Z only)");

  if (!uid) {
    console.error("❌ UID not found. Cannot load Z.");
    return;
  }

  try {
    const userDocRef = doc(firestore, "userData", uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      if (data.Z !== undefined) {
        Z = data.Z;
        console.log(`✅ Loaded Z = ${Z} for UID = ${uid}`);
      } else {
        console.warn("⚠️ Z not found in document.");
      }
    } else {
      console.error("❌ No document found for UID:", uid);
    }

    console.timeEnd("🕒 Firestore Load Duration (Z only)");
  } catch (error) {
    console.error("❌ Error loading Z from Firestore:", error);
  }
}




























async function ComboLoadMinimalFromFirestore() {
  console.time("🕒 Firestore Load Duration (Minimal)"); // ⏱ Start timer

  if (dbClosed) return;
  if (!uid) {
    console.error("❌ UID not found. Cannot load user-specific data.");
    return;
  }

  try {
    const userDocRef = doc(firestore, "userData", uid);
    const docSnap = await getDoc(userDocRef);

    if (!docSnap.exists()) {
      console.warn("⚠️ No document found for UID:", uid);
      return;
    }

    const data = docSnap.data();

    // ✅ Assign loaded values
    FinalArray_IDs = Array.isArray(data.FinalArray_IDs) ? data.FinalArray_IDs : [];
    n = data.n ?? 0;
    Z = data.Z ?? "";
    isTimed = data.isTimed ?? false;
    test_result_index=data.test_result_index;

    console.log("✅ Loaded minimal data from Firestore:", {
    FinalArray_IDs, n, Z, isTimed,test_result_index
    });

  FINAL_ARRAY = Object.values(groupAndSortByCustomId(originalGroupAData, FinalArray_IDs)).flat();

    console.log("finalarrayCloud",FINAL_ARRAY)
    console.log("test_result_indexCloud",test_result_index)

  } catch (error) {
    console.error("❌ Failed to load minimal data from Firestore:", error);
  }

  console.timeEnd("🕒 Firestore Load Duration (Minimal)");
}


async function SaveReloadCloud() {
  console.time("🕒 Firestore Save Duration (Selective)");

  if (dbClosed) return;
  if (!uid) {
    console.error("❌ UID not found. Cannot save user-specific data.");
    return;
  }

  markedIdsArrayCloud=Array.from(new Set(all_marked.map(q => q.id)));
  examIdsArray[`examIdsArray_${Z}_${uid}`] = extractExamIds(Z, uid, Exams);

  // Clean time and submitted arrays
  const rawTimeArray = timeperQuestion[`timeperQuestion_${Z}_${uid}`] || [];
  const cleanedTimeArray = Array.from({ length: rawTimeArray.length }, (_, i) =>
    rawTimeArray[i] === undefined ? 0 : rawTimeArray[i]
  );

  const rawSubmittedArray = submitted_string[`submitted_string_${Z}_${uid}`] || [];
  const cleanedSubmittedArray = Array.from({ length: rawSubmittedArray.length }, (_, i) =>
    rawSubmittedArray[i] === undefined ? false : rawSubmittedArray[i]
  );


const rawStatusArray = status_string[`status_string_${Z}_${uid}`] || [];
const cleanedStatusArray = Array.from({ length: rawStatusArray.length }, (_, i) =>
rawStatusArray[i] === undefined ? "" : rawStatusArray[i]  // or whatever default value you want
);


  // Prepare data
  const selectedData = {
    markedIdsArrayCloud,
    [`examIdsArray_${Z}_${uid}`]: examIdsArray[`examIdsArray_${Z}_${uid}`],
    [`Answer_${Z}_${uid}`]: Answers[`Answer_${Z}_${uid}`],
    [`Date_${Z}_${uid}`]: Dates[`Date_${Z}_${uid}`],
    [`score_${Z}_${uid}`]: scores[`score_${Z}_${uid}`],
    [`status_string_${Z}_${uid}`]: cleanedStatusArray,
    [`submitted_string_${Z}_${uid}`]: cleanedSubmittedArray,
    [`timeperQuestion_${Z}_${uid}`]: cleanedTimeArray,
    submitted_array:cleanedSubmittedArray,
    chosen_Answers,
  };






  console.log("🧪 Checking values in selectedData:");
for (const [key, value] of Object.entries(selectedData)) {
  console.log(`${key}:`, value);
}







  // Check for undefined values
  const undefinedFields = findUndefinedFieldsVerbose(selectedData);
  if (undefinedFields.length > 0) {
    console.error("❌ Found undefined fields in data:", undefinedFields);
    return;
  }

  try {
    const userDocRef = doc(firestore, "userData", uid);
    await setDoc(userDocRef, selectedData, { merge: true });

    console.timeEnd("🕒 Firestore Save Duration (Selective)");
    console.log(`✅ Selected fields saved to Firestore for UID: ${uid}`);

  } catch (error) {
    console.error("❌ Failed to save selected data to Firestore:", error);
  }
}








async function LoadReloadCloud() {
  console.time("🕒 Firestore Load Duration (Selective)");

  if (dbClosed) return;
  if (!uid) {
    console.error("❌ UID not found. Cannot load user-specific data.");
    return;
  }

  try {
    const userDocRef = doc(firestore, "userData", uid);
    const docSnap = await getDoc(userDocRef);

    if (!docSnap.exists()) {
      console.warn("⚠️ No document found in Firestore for UID:", uid);
      return;
    }

    const data = docSnap.data();

    // 🔄 Load only the saved fields
    markedIdsArrayCloud = data.markedIdsArrayCloud || [];

    const examKey = `examIdsArray_${Z}_${uid}`;
    const answerKey = `Answer_${Z}_${uid}`;
    const dateKey = `Date_${Z}_${uid}`;
    const scoreKey = `score_${Z}_${uid}`;
    const statusKey = `status_string_${Z}_${uid}`;
    const submittedKey = `submitted_string_${Z}_${uid}`;
    const timeKey = `timeperQuestion_${Z}_${uid}`;

    examIdsArray[examKey] = data[examKey] || [];
    Answers[answerKey] = data[answerKey] || [];
    Dates[dateKey] = data[dateKey] || [];
    scores[scoreKey] = data[scoreKey] || 0;
    status_string[statusKey] = data[statusKey] || [];
    submitted_string[submittedKey] = data[submittedKey] || [];
    timeperQuestion[timeKey] = data[timeKey] || [];

Exams[`Exam_${Z}_${uid}`]=Object.values(groupAndSortByCustomId(originalGroupAData, examIdsArray[`examIdsArray_${Z}_${uid}`])).flat();
console.log("Exams[`Exam_${Z}_${uid}",Exams[`Exam_${Z}_${uid}`]);
//markedGroupAData = groupAndSortByCustomId(originalGroupAData, markedIdsArrayCloud);
//markedGroupBData = groupAndSortByCustomId(originalGroupBData, markedIdsArrayCloud);

all_marked = Object.values(groupAndSortByCustomId(originalGroupAData, markedIdsArrayCloud)).flat();
all_incorrect=Object.values(groupAndSortByCustomId(originalGroupAData, incorrectIdsArrayCloud)).flat();


console.log(`✅ Selected fields loaded from Firestore for UID: ${uid}`);
  } catch (error) {
    console.error("❌ Failed to load selected data from Firestore:", error);
  }
}







async function savefinal_arrayCloud() {
FinalArray_IDs=Array.from(new Set(FINAL_ARRAY.map(q => q.id)));

  if (dbClosed) return;
  if (!uid) {
    console.error("❌ UID not found. Cannot save user-specific data.");
    return;
  }
  try {
    const allData = {
      Final_Count,
      FinalArray_IDs
    };

const undefinedFields = findUndefinedFieldsVerbose(allData);
if (undefinedFields.length > 0) {
  console.error("❌ Found undefined fields in data:", undefinedFields);
  return;
}
    await setDoc(doc(firestore, "userData", uid), allData, { merge: true });
    console.log(`✅ All data saved to Firestore for UID: ${uid}`);
  } catch (error) {
    console.error("❌ Failed to save to Firestore:", error);
  }
}


async function saveFlagCloud() {
  if (dbClosed) return;
  if (!uid) {
    console.error("❌ UID not found. Cannot save user-specific data.");
    return;
  }
  markedIdsArrayCloud=Array.from(new Set(all_marked.map(q => q.id)));
  const selectedData = {
    markedIdsArrayCloud,
  };
  console.log("🧪 Checking values in selectedData:");
for (const [key, value] of Object.entries(selectedData)) {
  console.log(`${key}:`, value);
}
  const undefinedFields = findUndefinedFieldsVerbose(selectedData);
  if (undefinedFields.length > 0) {
    console.error("❌ Found undefined fields in data:", undefinedFields);
    return;
  }
  try {
    const userDocRef = doc(firestore, "userData", uid);
    await setDoc(userDocRef, selectedData, { merge: true });
    console.log(`✅ Selected fields saved to Firestore for UID: ${uid}`);
  } catch (error) {
    console.error("❌ Failed to save selected data to Firestore:", error);
  }
}








async function saveRemainingTimeCloud(duration) {
  if (!uid) {
    console.error("❌ UID not found. Cannot save user-specific data.");
    return;
  }
  try {
    const userDocRef = doc(firestore, "userData", uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      // ✅ Update existing document
      await updateDoc(userDocRef, { savedEndTime: duration });
      console.log(`🔄 Updated remaining time to ${duration} seconds in Firestore`);
    } else {
      // 🆕 Create new document
      await setDoc(userDocRef, { savedEndTime: duration });
      console.log(`🆕 Created new doc with remaining time: ${duration} seconds in Firestore`);
    }
  } catch (error) {
    console.error("❌ Failed to save remaining time to Firestore:", error);
  }
}



async function loadRemainingTimeCloud() {
  if (!uid) {
    console.error("❌ UID not found. Cannot load user-specific data.");
    return null;
  }

  try {
    const userDocRef = doc(firestore, "userData", uid);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      console.log(`⏳ Loaded remaining time: ${data.savedEndTime} seconds from Firestore`);
      return data.savedEndTime || 0;
    } else {
      console.warn("⚠️ No saved time found in Firestore for this user");
      return 0;
    }
  } catch (error) {
    console.error("❌ Failed to load remaining time from Firestore:", error);
    return 0;
  }
}
