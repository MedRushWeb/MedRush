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


////////////////////////////////////////////////////////////////////

let icon_visibility;
let bottombar = document.querySelector(".bottombar");
let countSpan = document.querySelector(".count span");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let flag_checkbox=document.querySelector(".flag-checkbox")
let test_result_index;



let dataLoaded = false;

        const startTimes = {};          // Store current start time
        const accumulatedTimes = {};    // Store total accumulated time
        const activeTimers = {};        // Track if timer is active
        const frozenFlags = {};         // Track if text is frozen
        let lastStartIndex = null;      // Last start index
        let lastStartTime = null;       // Last start time

let createButton;
let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");
let questionButtonsContainer = document.querySelector(".buttons_container");
let explanationArea=document.querySelector(".explanation");



let chosen_Answers=[]; // contains 0,1,2,3,4,5 which indicates answer number


// ma saffarthom hdol bl start
let chosen_Answers_string=[];
let real_Answers=[];
let answers; // kanat l let jowwa l function
let Final_Count;
let theRightAnswer;
let quizApp=document.querySelector(".quiz-app");
let page=document.querySelector(".page");
let introduction = document.querySelector(".intro");
//let review_questions;
let Final_Question; 
let final_answer_1;
let time_spent_1;

// Set Options
// begin of editing to reset 
let currentIndex ;
let rightAnswers ;
let countdownInterval;
// end of editing to reset
// i have not used both below variables anywhere or added them to reset
let solved;
let toBeSolved;
// the above solved & toBeSolved should be deleted and their codes 
//
let number_of_solved_questions;
//
let total=63;
// end
let score;
let scores={};

let string_array = [];
let status_string={};

let submitted_array =[];
let submitted_string={};
let SUM;
//
let isTimed; 
 //
 let container = document.getElementById('button-container');
 let atButtonContainer = document.getElementById('at-button-container');
 let atButtons = [];
 let firstButtons = [];
 let atButtonClicked = Array(40).fill(false); // Array to track if "i@" buttons were clicked
 

window.onload = async function() {


  await initFirebase();



    //await CombogetSavedValues();

await inspect_load_Cloud();
    // Wait in a loop until dataLoaded is true
    const waitForData = setInterval(() => {
        if (dataLoaded) {
            clearInterval(waitForData);
            console.log("✅ Data loaded, now starting getUnusedQuestions()");
            getUnusedQuestions();

            const btn = document.getElementById('review_1');
            if (btn) {
                btn.click();
            } else {
                console.warn("⚠️ Button review_1 not found!");
            }
        }
    }, 20);  // check every 20ms
};


function getUnusedQuestions (){
    // randomzing final array
   currentIndex = 0;
   rightAnswers = 0;
   score=0;
   string_array = "";
   submitted_array="";
  
document.querySelector(".main-content").style.marginLeft = "0";
// 
   Final_Count= Final_Question.length;

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
 //
  review_questions.onclick=() =>{
  let index = i; 
  //
  let new_index=currentIndex;
  new_index++;
  let answers=document.getElementsByName("question");

  currentIndex=i-1; // i added let
  quizArea.innerHTML = "";
  answersArea.innerHTML = "";
  explanationArea.innerHTML="";
  //
  addQuestionData_3(Final_Question[currentIndex],Final_Count );
 
  for (let m =0 ;m< answers.length;m++){
        if (final_answer_1[0]==m){
        answers[m].checked=true 
        }   }

for (let m =0 ;m< answers.length;m++){ answers[m].disabled='true' }
atButtonClicked[i - 1] = true; // Mark this "i@" button as clicked
//i want it to disappear when "submit" is clicked.
review_questions.style.display = 'none';

let isCorrect = ((Final_Question[0].right_answer)==Final_Question[0][`answer_${final_answer_1[0]+1}`]);

const Timeentries= time_spent_1;
let displayTime;
if (Timeentries[0] >= 60) {
    let minutes = Timeentries[0] / 60;
    displayTime = minutes.toFixed(1) + " minutes";
} else {
    let wholeSeconds = Math.floor(Timeentries[0]);
if (Number.isNaN(wholeSeconds)) {
    wholeSeconds = "";
displayTime = "-";
}else{
  displayTime = wholeSeconds + " seconds";
}
}

const right = Final_Question[i-1].right_answer?.trim() || "";
const match = right.match(/[A-V]/);  // Finds first capital A–F
const letter = match ? match[0] : null;
const indexsaa = letter ?  letter.charCodeAt(0) - 64: null;
const percentage = indexsaa ? Final_Question[i-1][`percent_${indexsaa}`] : "";

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

    } 
 
review_questions.classList.add('hidden-button', 'at-button');
atButtonContainer.appendChild(review_questions);

atButtons.push(review_questions);
}

for (let i = 1; i <= Final_Count; i++) {
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

    //container.appendChild(firstBtn);
    firstButtons.push(firstBtn);
    // erja3ehma momken 7asbak l score aw check asnwer marteeen/
    firstButtons[0].click();
    }

      quizArea.innerHTML = "";
      answersArea.innerHTML = "";
      explanationArea.innerHTML="";

      // Add Question Data
      addQuestionData_3(Final_Question[currentIndex], Final_Count);
      quizApp.style.display='block';
      quizArea.style.display='block';
      answersArea.style.display='block';
      questionButtonsContainer.style.display = 'block';
//
document.getElementById("bottomBar").classList.remove("hidden");
document.getElementById("topBar").classList.remove("hidden");
        }

window.showImage = function (src) {
   //     const isVideo = src.endsWith('.mp4');
     
   const isVideo = src.toLowerCase().includes('.mp4');  // ✅ More reliable for signed URLs

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
           
/*
  function addQuestionData_3(obj, count) {
    answersArea.style.display='block';
    questionButtonsContainer.style.display = 'block';
  
    if (currentIndex < count) { 
  
      document.getElementById(`review_${currentIndex+1}`).style.backgroundColor="#2e4aad"; ;
  
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

let TxtOfTitle = document.createElement("div");
TxtOfTitle.className = "myText";
TxtOfTitle.innerHTML = txtToHtml; // ✅ correct now
questionTitle.appendChild(TxtOfTitle);

displayCustomTable_3(obj["title_table"],questionTitle);
    display_3_columns(obj["title_table_3"],questionTitle);

    styling(obj["table_before_image"],questionTitle);

    if (obj["audio"]!="") { questionTitle.appendChild(audioContainer);   }

    
if (obj["image_1"] && obj["image_1"].trim() !== "") {

      let img = document.createElement("IMG");
      img.src = obj["image_1"] ;
      
      let imageDiv = document.createElement("div");
      imageDiv.className=`imageDivision`;
      imageDiv.appendChild(img);
      questionTitle.appendChild(imageDiv);
}
      //
      //
      styling(obj["table_after_image"],questionTitle);

      //
      let title_2_index = 1;
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

let title_2_text = document.createElement("div");
title_2_text.className = "title_2_text";
title_2_text.innerHTML = title_2_HTML; // ✅ correct now
questionTitle.appendChild(title_2_text);

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
  
      document.getElementById("id_question").innerHTML=" Question Id :  "+(obj[`id`]);
  
      let  theLabelText = document.createTextNode(obj[`answer_${i}`]);
      if (final_answer_1[0]==i-1){theLabel.style.backgroundColor='lightcoral'}

console.log("final_answer_1[0]",final_answer_1[0]);
console.log("i-1",i-1);


      if((obj.right_answer)==(obj[`answer_${i}`])){theLabel.style.backgroundColor='lightgreen'};

      let ansImage = document.createElement("IMG");
      ansImage.src = obj[`ansImg_${i}`] ;
      
      let ansImageDiv = document.createElement("div");
      ansImageDiv.className=`ansImageDiv`;
      ansImageDiv.appendChild(ansImage);
      
      let theLabelPercent =  document.createTextNode("   "+"  ("+obj[`percent_${i}`]+")");
  
     // theLabelPercent.style.color='grey';

     //
     if (obj[`answer_${i}`].startsWith("§")) {
      tablingQuestion(obj[`answer_${i}`],theLabel);
    }else { theLabel.appendChild(theLabelText);}      //
      //
      //
      theLabel.appendChild(theLabelPercent);
      theLabel.append(ansImageDiv);

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
  
      let img_explanation = document.createElement("IMG");
      img_explanation.src = obj["explanation_img"] ;
      let imageDiv_explanation = document.createElement("div");
      imageDiv_explanation.className=`imageDivision_explanation`;
  
      imageDiv_explanation.appendChild(img_explanation);
  
      explanationTiltle.append("Explanation:")
      explanationTiltle.appendChild(document.createElement("br"));
  
      
      let wordIndex = 1;
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
  explanationTiltle.appendChild(imageDiv_explanation);
  
//let wordIndex = 1;
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

let myText = document.createElement("div");
myText.className = "myText";
myText.innerHTML = formattedHTML; // ✅ correct now
explanationTiltle.appendChild(myText);

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

  explanationArea.appendChild(explanationTiltle);


  if (window.MathJax) {
  MathJax.typeset();
}


    }}
  





    */

  
    
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
  // color blue the question box if any answer is chosen.  //
  let b=false;
  for (let i = 0; i < answers.length; i++) {
    b=b||(answers[i].checked) 
      }
      if (b==true){document.getElementById(`${currentIndex}`).style.backgroundColor= "#2e4aad"; }


flag_checkbox.checked=false;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
    theChoosenAnswer = answers[i].dataset.answer;
  //  final_answer_1[0]=i;
    chosen_Answers_string[currentIndex]=theChoosenAnswer;
    }
  }

  if (theChoosenAnswer==""){
  //  final_answer_1.push(100);
    chosen_Answers_string[currentIndex]="not answered";
  }

  // hdol 3l fadi
  if (rAnswer === theChoosenAnswer) {
    rightAnswers++;
  }

}



const blockButton = i => {
  document.body.addEventListener( 'click',  (event)  => {
    if(event.target.id === i.toString()){ 
      document.body.disabled=true;
  }});
}
//

const buttonEvent = i => {
document.body.addEventListener( 'click',  (event)  => {
    //
    //
if(event.target.id === i.toString()){ 
// 
  //


  // Hide all "@" buttons
  atButtons.forEach(atButton => atButton.classList.remove('visible-button'));
  // Show the corresponding "@" button
  atButtons[i - 1].classList.add('visible-button');
  //
    
  theRightAnswer = Final_Question[currentIndex].right_answer;
  // Increase Index
  currentIndex++;
  // Check The Answer of the previous question
  checkAnswer(theRightAnswer, Final_Count);
  currentIndex=i-1;
            
//  if(document.getElementById(`status_${i}`).textContent == `*`){flag_checkbox.checked=true}
       
  quizArea.innerHTML = "";
  answersArea.innerHTML = "";
  explanationArea.innerHTML="";

            
  answers = document.getElementsByName("question");
  for (let m =0 ;m< answers.length;m++){
    if (final_answer_1[0]==m){answers[m].checked=true}
    }
  
    if (atButtonClicked[i - 1]==true) {
      atButtons[i - 1].click();
    }
};
        });
      }      


async function CombogetSavedValues() {
  try {
    if (!uid) {
      console.warn("⚠️ UID not found. Cannot load user-specific data.");
      return;
    }
    const test_result_indexDoc = await db.get("test_result_index");
    test_result_index = test_result_indexDoc.data;
    const Final_QuestionDoc = await db.get(`Final_Question_${uid}`);
    Final_Question = Final_QuestionDoc.data;
    const final_answer_1Doc = await db.get(`final_answer_1_${uid}`);
    final_answer_1 = final_answer_1Doc.data;
    const time_spent_1Doc = await db.get(`time_spent_1_${uid}`);
    time_spent_1 = time_spent_1Doc.data;

    
    console.log("✅ All data loaded from PouchDB for user:", uid);
   dataLoaded = true;
  } catch (err) {
    console.warn("⚠️ Some data could not be loaded from PouchDB:", err);
  }
}

async function inspect_load_Cloud() {
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
      test_result_index=data.test_result_index
      Final_Question = data.Final_Question;
      final_answer_1=data.final_answer_1;
      time_spent_1=data.time_spent_1;

      console.log("✅ test_result_index loaded:", test_result_index);
    } else {
      console.error("❌ No document found for UID:", uid);
    }
   dataLoaded = true;

    console.timeEnd("🕒 Load test_result_index Duration");
  } catch (error) {
    console.error("❌ Failed to load test_result_index from Firestore:", error);
  }
}





window.toggleFullscreen = function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch((err) => {
      alert(`Error attempting to enable fullscreen: ${err.message}`);
    });
  } else {
    document.exitFullscreen();
  }
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

//  document.body.appendChild(container);
if (targetElement) {
  targetElement.appendChild(container);
} else {
  console.warn("⚠️ No target element provided to displayCustomTable!");
}

}

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

//  document.body.appendChild(container);
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
        background-color: transparent;
      `;

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



window.toggleFlag = function () {
    const checkbox = document.getElementById("flag-checkbox");
    checkbox.checked = !checkbox.checked;
    alert ("flag the question in the main page of previous exams")
  }


window.loadLabValues = function () {
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

window.loadCalculator = function () {
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


document.getElementById('newButton_1').onclick = function() {
     window.location.href = "home.html"; 
};

document.getElementById('newButton_2').onclick = function() {
     window.location.href = "previous.html"; 
};
