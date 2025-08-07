//
//
//
// let sidebar 
//sidebar.style.display = "none";
// document.querySelector(".main-content").style.marginLeft = "0";
//
// side and top bars 
//
//  buttons grey and white
//     remove imagediv if there is no image 
 //   all topbar with its content

 //          edit table margintop (still not done for connect)


 ////
// //
// 
let countSpan = document.querySelector(".count span");
let bullets = document.querySelector(".bullets");
let bulletsSpanContainer = document.querySelector(".bullets .spans");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let quizApp=document.querySelector(".quiz-app");
let reviewButton= document.querySelector(".review-button");
let answersArea_2 = document.querySelector(".answers-area-2");
let nextAnsButton = document.querySelector(".next-answer-button");
nextAnsButton.style.display='none'






let test_result_index;
let currentIndex;
let Z;

let Exams={};
let Answers={};
let Dates={};
let scores={};

let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");

let questionButtonsContainer = document.querySelector(".buttons_container");
let reviewButtonsContainer = document.querySelector(".review_buttons_container");
let finishExamButton = document.querySelector(".finish");

let uncheckButton = document.querySelector(".uncheck-button");
//uncheckButton.style.display='none';

let explanationArea=document.querySelector(".explanation");
let Explanation_text=document.getElementById("explanation-text");

let FINAL_ARRAY=[];
let chosen_Answers=[]; // contains 0,1,2,3,4,5 which indicates answer number





function resultanalysis(index){



alert(index+1);

 test_result_index = index+1;
 alert(test_result_index)

saveIndex();

 window.location.href = "testresult.html"; 

}



function handleButtonClick(index) {
  document.getElementById("myTable").style.display='none';
  quizApp.style.display='block';
  const TRY = [];
for (let i = 1; i <= 300; i++) {
    TRY.push({
        FINAL_ARRAY: eval(Exams[`Exam_${i}`]),
        chosen_Answers: eval(Answers[`Answer_${i}`])

    });
  }
  
  const { FINAL_ARRAY, chosen_Answers } = TRY[index];

  // Call your makeButtons function with FINAL_ARRAY and chosen_Answers
  makeButtons(FINAL_ARRAY, chosen_Answers);
}

    // Function to add rows to the table
function addRows() {
  const tableBody = document.getElementById("myTable").getElementsByTagName('tbody')[0];

  // Clear all existing rows
  tableBody.innerHTML = '';

  // Define arrays and chosen answers mapping
//

  const TRY = [];
for (let i = 1; i <= 300; i++) {
    TRY.push({
        FINAL_ARRAY: eval(Exams[`Exam_${i}`]),
        chosen_Answers: eval(Answers[`Answer_${i}`])
    });
}
//

  let sum=0;
  for (let i = 1; i <= Z; i++) {
  sum=sum+(scores[`score_${i}`]*(Exams[`Exam_${i}`].length));
  }

  let sum_solved=0;
  for (let i = 1; i <= Z; i++) {
    sum_solved=sum_solved+Exams[`Exam_${i}`].length
    }

  if (sum_solved==0)(sum_solved=1);
//


let SUM=(sum/ sum_solved)*100;

console.log("sum",sum);
console.log("SUM",SUM);
console.log("sum_solved",sum_solved);
//

/*
localStorage.setItem("SUM", SUM);
*/



async function saveSUM() {
  await saveOrUpdateDoc("SUM", SUM);
}
saveSUM();


//  <td>${(scores[`score_${i+1}`]*100)}%</td>

  // Add new rows

  for (let i = 0; i < Z; i++) {

      const row = document.createElement('tr');
      row.innerHTML = `
          <td>Exam ${i+1}</td>
          <td>${Exams[`Exam_${i+1}`].length}</td>
          <td>${parseFloat((scores[`score_${i+1}`]*100).toFixed(1))}%</td>
          <td>${Dates[`Date_${i+1}`] }</td>
          <td><button onclick="handleButtonClick(${i})">Review Exam</button></td>
          <td><button onclick="resultanalysis(${i})">result analysis</button></td>

      `;
      tableBody.appendChild(row);
  }
  paginateTable();
}



function makeButtons(FINAL_ARRAY,chosen_Answers){
  quizApp.style.display='block';  
  quizArea.style.display='block';
  answersArea.style.display='block';
  bullets.style.display='block';
  reviewButtonsContainer.style.display = 'block'; 

  reviewButton.style.display='none';    
//extra end
  resultsContainer.style.display='none'
  theResults="";       //
  let n=FINAL_ARRAY.length;             
  Final_Count=FINAL_ARRAY.length;


 let list_2=document.getElementById("myReview");
 while (list_2.hasChildNodes()) {
  list_2.removeChild(list_2.firstChild);
}

 for(let i=1;i<=n;i++){
   let review_questions= document.createElement('button')
   review_questions.className="review_buttons";
   let createLine=document.createElement('area')
   createLine.innerText="\n";
 
   review_questions.setAttribute("id", `review_${i}`);
   review_questions.innerText= String(i);
  
   document.getElementById("myReview").appendChild(review_questions);
   document.getElementById("myReview").appendChild(createLine);
 
     quizArea.style.display='block';
     answersArea.style.display='block';
    // nextButton.style.display='block';
     bullets.style.display='block';
     
     review_questions.onclick=() =>{
    currentIndex=i-1; // i added let
   //  nextButton.style.display='none';
 
     if (currentIndex==n-1){nextAnsButton.style.display='none'}else{
       nextAnsButton.style.display='block' }
 


    nextAnsButton.onclick=() =>{
     currentIndex++;
     if (currentIndex==n-1){nextAnsButton.style.display='none'}else{
     nextAnsButton.style.display='block' }
     quizArea.innerHTML = "";
     answersArea.innerHTML = "";
     explanationArea.innerHTML="";


 
     addQuestionData_2(FINAL_ARRAY[currentIndex], Final_Count);
     let answers=document.getElementsByName("question");
     for (let m =0 ;m< answers.length;m++){
          if (chosen_Answers[currentIndex+1]==m){
            answers[m].checked=true 
          }   }
          Explanation_text.style.display='block';

     Explanation_text.innerHTML = "explanation"+"("+FINAL_ARRAY[currentIndex].right_answer+")"; 
     explanationArea.appendChild(Explanation_text);
     for (let m =0 ;m< answers.length;m++){ answers[m].disabled='true' }
    }
 
     quizArea.innerHTML = "";
     answersArea.innerHTML = "";
     explanationArea.innerHTML="";
 
     addQuestionData_2(FINAL_ARRAY[currentIndex],Final_Count );
 
   let answers=document.getElementsByName("question");
 
    for (let m =0 ;m< answers.length;m++){
         if (chosen_Answers[currentIndex+1]==m){
           answers[m].checked=true 
         }   }
         Explanation_text.style.display='block';

 Explanation_text.innerHTML = "explanation"+"("+FINAL_ARRAY[currentIndex].right_answer+")"; 
 explanationArea.appendChild(Explanation_text);
 
    for (let m =0 ;m< answers.length;m++){ answers[m].disabled='true' }
 
  } 
  //
if (i==1) review_questions.click();
//
}
}





function addQuestionData_2(obj, count) {
  quizApp.style.display='block';
  quizArea.style.display='block';
  answersArea.style.display='block';
  bullets.style.display='block';
  questionButtonsContainer.style.display = 'none';
  reviewButtonsContainer.style.display = 'block';

  if (currentIndex < count) { 

    document.getElementById(`review_${currentIndex+1}`).style.backgroundColor="#2e4aad"; ;

    let questionTitle = document.createElement("h2");

    let questionText = document.createTextNode(obj["title"]);
    let questionText_2 = document.createTextNode(obj["title_2"]);
    
    let img = document.createElement("IMG");
    img.src = obj["image_1"] ;
    
    let imageDiv = document.createElement("div");
    imageDiv.className=`imageDivision`;
    imageDiv.appendChild(img);





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

    let indexNum = 1;
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
    
    let mytxt = document.createElement("div");
    mytxt.className = "myText";
    mytxt.innerHTML = toHTML; // ✅ correct now
    questionTitle.appendChild(mytxt);
  
    displayCustomTable_3(obj["title_table"],questionTitle);
    display_3_columns(obj["title_table_3"],questionTitle);


    styling(obj["table_before_image"],questionTitle);

     if (obj["audio"]!="") { questionTitle.appendChild(audioContainer);   }

    questionTitle.appendChild(imageDiv);

    styling(obj["table_after_image"],questionTitle);


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
//




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
   //   let comparison_question = document.createTextNode(obj["comparison_items"]);
    
     let coparison_array = (obj["comparison_items"]).split("$");
  for(let n=0;(coparison_array[n]!=undefined);n++){
  let comparison_new= (coparison_array[n]).split('#');
  for (m=0;comparison_new[m]!=undefined;m++){
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
    tablingQuestion(obj["comparison_items"],answersArea);
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
    document.getElementById("id_question").innerHTML=" Question ID :  "+(obj[`id`]);

    let  theLabelText = document.createTextNode(obj[`answer_${i}`]);


    if (chosen_Answers[currentIndex+1]==i-1){theLabel.style.backgroundColor='lightcoral'}
      if((obj.right_answer)==(obj[`answer_${i}`])){theLabel.style.backgroundColor='lightgreen'};


      let ansImage = document.createElement("IMG");
      ansImage.src = obj[`ansImg_${i}`] ;
      
      let ansImageDiv = document.createElement("div");
      ansImageDiv.className=`ansImageDiv`;
      ansImageDiv.appendChild(ansImage);



    let theLabelPercent =  document.createTextNode("   "+"  ("+obj[`percent_${i}`]+")");

   // theLabelPercent.style.color='grey';
   //
   //
   //
   if (obj[`answer_${i}`].startsWith("§")) {
    tablingQuestion(obj[`answer_${i}`],theLabel);
  }else { theLabel.appendChild(theLabelText);}
    //
    //
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

    explanationTiltle.append("Explanation:");
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
    //
    //explanationTiltle.appendChild(myTextEXP1);
    //
    //
    //
    //
displayCustomTable(obj["table"],explanationTiltle);
//display_3_columns_explanation(obj["table_3"],explanationTiltle);
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




// Function to handle button clicks based on index


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

/*
 Z=localStorage.getItem("Z");


*/

//
// momken lazem adefha ta7t
//
//
/*
for(let i=1;i<=300;i++){
  Exams[`Exam_${i}`] =[];
  Answers[`Answer_${i}`] =[];
  Dates[`Date_${i}`] =[];
  scores[`score_${i}`]=0; 
  }
  */
//
//


/*
for(let i=1;i<=300;i++){
  Exams[`Exam_${i}`] =JSON.parse(LZString.decompress(localStorage.getItem(`Exam_${i}`)));
  Answers[`Answer_${i}`] =JSON.parse(LZString.decompress(localStorage.getItem(`Answer_${i}`)));
  Dates[`Date_${i}`] =JSON.parse(LZString.decompress(localStorage.getItem(`Date_${i}`)));
  scores[`score_${i}`]=localStorage.getItem(`score_${i}`); 
  }
*/



async function loadZAndExams() {
/*  // Load Z
  const zDoc = await db.get("Z").catch(() => null);
  Z = zDoc ? zDoc.data : null;

  // Load all exams, answers, dates, and scores
  for (let i = 1; i <= 300; i++) {
    const examDoc = await db.get(`Exam_${i}`).catch(() => null);
    if (examDoc) {
      Exams[`Exam_${i}`] = JSON.parse(examDoc.data);
    }

    const answerDoc = await db.get(`Answer_${i}`).catch(() => null);
    if (answerDoc) {
      Answers[`Answer_${i}`] = JSON.parse(answerDoc.data);
    }

    const dateDoc = await db.get(`Date_${i}`).catch(() => null);
    if (dateDoc) {
      Dates[`Date_${i}`] = JSON.parse(dateDoc.data);
    }

    const scoreDoc = await db.get(`score_${i}`).catch(() => null);
    if (scoreDoc) {
      scores[`score_${i}`] = scoreDoc.data;
    }
  }

  console.log("✅ Z and exam data loaded from PouchDB.");
*/

   for (let i = 1; i <= 300; i++) {
      const examDoc = await db.get(`Exam_${i}`);
      Exams[`Exam_${i}`] = examDoc.data;

      const ansDoc = await db.get(`Answer_${i}`);
      Answers[`Answer_${i}`] = ansDoc.data;

      const dateDoc = await db.get(`Date_${i}`);
      Dates[`Date_${i}`] = dateDoc.data;

      const scoreDoc = await db.get(`score_${i}`);
      scores[`score_${i}`] = scoreDoc.data;
    }

    // Individual values
    const zDoc = await db.get("Z");
    Z = zDoc.data;

  }

// loadZAndExams();

async function doStuff() {
  await loadZAndExams();



let Final_Count;
//
reviewButton.style.display='block';    
//extra end


//
quizApp.style.display='none';
//


let list_2=document.getElementById("myReview");
while (list_2.hasChildNodes()) {
list_2.removeChild(list_2.firstChild);}


  Z = Z ? parseInt(Z) : 1;
  const rowsPerPage = 10;
  let currentPage = 1;



// Initial call to populate and paginate the table

reviewButton.onclick = () => {
  // alert("ss");
   //console.log("ss");
 reviewButtonsContainer.style.display = 'block';
 
 addRows();

 }
 

//
 addRows();
//

//console.log(Z);


//for (let i=0;i<Z;i++){
//  console.log(scores[`score_${i}`])
//  }

 // console.log("z",Z);

}
doStuff();



//========================================================================

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
    <th colspan="2" style="border: 1px solid black; padding: 10px 20px; background: #f0f0f0; font-size: 20px; text-align: center;">
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
      background-color: #f0f0f0;

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
        span.style.backgroundColor = "yellow";
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
        span.style.backgroundColor = "yellow";
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








let title_table= 
"&Serum chemistry& ?Sodium? 134 mEq/L ?Potassium? 3.8 mEq/L ?Blood urea nitrogen? 18 mg/dL ?Creatinine? 0.8 mg/dL ?Calcium? 11.0 mg/dL ?Glucose? 98 mg/dL ?Albumin? 4 /dL ?Parathyroid hormone? decreased"
;
let title_table_2=
"?Low-density lipoprotein ?161 mg/dL ?Fasting blood glucose? 201 mg/dL ?Hemoglobin A1c? 7.4% "
;
let title_table_3 = "&Complete blood count& ?Hemoglobin? 10.4 g/dL ?Leukocytes? 8k/mm3 &Serum chemistry& ?Blood urea nitrogen ?28 mg/dL ?Creatinine? 2.7 mg/dL &Urinalysis&  ?Nitrites? negative ?Bacteria? none ?Red blood cells? 20-30/hpf";
//let title_table_5 = "∆Before 2 months∆Now∆tomorrow§Lactate∆20∆12∆6§Wbc∆5∆57§rbc∆9∆12∆8";
const box = document.getElementById("overlapOutput");

//displayCustomTable_3(title_table, box);
//displayCustomTable_3(title_table_2, box);
//displayCustomTable_3(title_table_3, box);

//display_3_columns(title_table_5, box);



//------------------------------------------------------------------------
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
        background-color: ${isHeader || isFirstCol ? '#f0f0f0' : 'transparent'};
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


const input = `
! title !
Answer ∆ Percent ∆ Correct
§
A. #Heart failure#$Left side ∆ 65% ∆ #Yes#
§
B. #Pulmonary embolism#$Right side ∆ 25% ∆ No
§
C. Pneumonia ∆ 10% ∆ #No#
`;

//display_3_columns_explanation(input, document.body);



//-----------------------------------------------------------------------------------------------------
// this creates anormal title table in question title, use "title_table"
//
//
function displayCustomTable_3(data, targetElement) {
  if (!data || typeof data !== "string" || data.trim() === "") {
    return;
  }

  //
  //
  //
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
  container.style.marginTop = "30px";

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
      titleCell.style.cssText = `
        border: none;
        padding: 10px;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
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
        td1.innerHTML = left.replace(/#(.*?)#/g, "<strong>$1</strong>");
        td1.style.cssText = `
          border: none;
          padding: 8px 12px;
          vertical-align: top;
          white-space: nowrap;
        `;

        const td2 = document.createElement("td");
        td2.innerHTML = right.replace(/#(.*?)#/g, "<strong>$1</strong>");
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
  //
  //
  //



  if (targetElement) {
    targetElement.appendChild(container);
  } else {
    console.warn("⚠️ No target element provided to displayCustomTable_3!");
  }
}




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
        background-color: ${isHeader || isFirstCol ? '#f0f0f0' : 'transparent'};
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

  const container = document.createElement("div");
  container.style.marginTop = "30px";
  container.style.textAlign = "left"; // Table starts at left

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





























      function showImage(src) {
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
      


      

/*
    function showMedia(src) {
      if (src.endsWith(".mp4")) {
        const videoEl = document.getElementById("modalImage");
        videoEl.src = src;
        videoEl.style.display = "block";
        videoEl.load(); // reload video
      } else {
        document.getElementById("modalImage").src = src;
        document.getElementById("imageModal").style.display = "block";
        videoEl.pause();
      }
    
      modal.style.display = "block";
  }

    
  */
 
  function closeModal() {
    document.getElementById("imageModal").style.display = "none";
    document.getElementById("modalVideo").pause(); // Pause video if playing
  }



  /*
    function closeModal() {
    document.getElementById("imageModal").style.display = "none";
    document.getElementById("modalImage").src = "";
    }
    
    */

    window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
      closeModal();
    }
    }
  























    async function saveIndex() {
  try {
    await saveOrUpdateDoc("test_result_index", test_result_index);
  } catch (error) {
    console.error("❌ Failed to save to PouchDB:", error);
  }
}






  async function saveOrUpdateDoc(id, data) {
    try {
      const existing = await db.get(id);
      await db.put({ _id: id, _rev: existing._rev, data });
    } catch (err) {
      if (err.status === 404) {
        await db.put({ _id: id, data });
      } else {
        console.error("❌ Failed to save to PouchDB:", err);
      }
    }



  }
