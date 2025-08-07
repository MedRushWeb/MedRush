// medicine = Anatomy
// Surgery = Behavioral Science


let countSpan = document.querySelector(".count span");
let bullets = document.querySelector(".bullets");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let flag_checkbox=document.querySelector(".flag-checkbox")

let Z;

let Exams={};
let Answers={};
let Dates={};

let nextButton = document.querySelector(".next-button");
let nextAnsButton = document.querySelector(".next-answer-button");
nextAnsButton.style.display='none'

let createButton;

let resultsContainer = document.querySelector(".results");
let countdownElement = document.querySelector(".countdown");

let questionButtonsContainer = document.querySelector(".buttons_container");
let finishExamButton = document.querySelector(".finish");

let uncheckButton = document.querySelector(".uncheck-button");
uncheckButton.style.display='none';

let explanationArea=document.querySelector(".explanation");

// ma saffarthom hdol bl start
let chosen_Answers=[]; // contains 0,1,2,3,4,5 which indicates answer number

let chosen_Answers_string=[];
let real_Answers=[];

let answers; // kanat l let jowwa l function

let Final_Count;
let theRightAnswer;

let chooseQuestionsClass= document.querySelector(".choose-questions");

let quizApp=document.querySelector(".quiz-app");
quizApp.style.display='none';

let n; 

let common_array_medicine;
let common_array_surgery;
let common_array_Biochemistry;
let common_array_Biostatsitics;
let common_array_Embryology;
let common_array_Genetics;
let common_array_Histology;
let common_array_Immunology;
let common_array_Microbiology;
let common_array_Pathology;
let common_array_Pathophysiology;
let common_array_Pharmacology;
let common_array_Physiology;


let common_array_respiratory;
let common_array_renal;
let common_array_cardiovascular;
let common_array_allergy;
let common_array_Dermatology;
let common_array_Gastrointestinal;
let common_array_Hematology;
let common_array_Neuro;
let common_array_Rheumatology;
let common_array_infectious;
let common_array_endocrine;
let common_array_Reproductive_F;
let common_array_Reproductive_M;
let common_array_Pregnancy;


// i removed =[] from all and put make zeros function in reset order.
let subject_array;
let systems_array;



let mix_respiratory;
let mix_cardiovascular;
let mix_renal;
let mix_Allergy;
let mix_dermatology;
let mix_gastrointestinal;
let mix_hematology;
let mix_neuro;
let mix_Rheumatology;
let mix_infectious;
let mix_endocrine;
let mix_reproductive_F;
let mix_reproductive_M;
let mix_pregnancy;



let mix_all_remove_duplicates;

// end of editing




let medicine_questions;
let medicine_count;
let medicine_updated;
let medicine_updated_count;
let medicine_incorrect;
let medicine_incorrect_count;
let medicine_marked;
let medicine_marked_count;


let surgery_questions;
let surgery_count;
let surgery_updated;
let surgery_updated_count;
let surgery_incorrect;
let surgery_incorrect_count;
let surgery_marked;
let surgery_marked_count;



let Biochemistry_questions;
let Biochemistry_count;
let Biochemistry_updated;
let Biochemistry_updated_count;
let Biochemistry_incorrect;
let Biochemistry_incorrect_count;
let Biochemistry_marked;
let Biochemistry_marked_count;


let biostat_questions;
let biostat_count;
let biostat_updated;
let biostat_updated_count;
let biostat_incorrect;
let biostat_incorrect_count;
let biostat_marked;
let biostat_marked_count;


let embryology_questions;
let embryology_count;
let embryology_updated;
let embryology_updated_count;
let embryology_incorrect;
let embryology_incorrect_count;
let embryology_marked;
let embryology_marked_count;



let Genetics_questions;
let Genetics_count;
let Genetics_updated;
let Genetics_updated_count;
let Genetics_incorrect;
let Genetics_incorrect_count;
let Genetics_marked;
let Genetics_marked_count;


let Histology_questions;
let Histology_count;
let Histology_updated;
let Histology_updated_count;
let Histology_incorrect;
let Histology_incorrect_count;
let Histology_marked;
let Histology_marked_count;



let Immunology_questions;
let Immunology_count;
let Immunology_updated;
let Immunology_updated_count;
let Immunology_incorrect;
let Immunology_incorrect_count;
let Immunology_marked;
let Immunology_marked_count;



let Microbiology_questions;
let Microbiology_count;
let Microbiology_updated;
let Microbiology_updated_count;
let Microbiology_incorrect;
let Microbiology_incorrect_count;
let Microbiology_marked;
let Microbiology_marked_count;


let Pathology_questions;
let Pathology_count;
let Pathology_updated;
let Pathology_updated_count;
let Pathology_incorrect;
let Pathology_incorrect_count;
let Pathology_marked;
let Pathology_marked_count;



let Pathophysiology_questions;
let Pathophysiology_count;
let Pathophysiology_updated;
let Pathophysiology_updated_count;
let Pathophysiology_incorrect;
let Pathophysiology_incorrect_count;
let Pathophysiology_marked;
let Pathophysiology_marked_count;



let Pharmacology_questions;
let Pharmacology_count;
let Pharmacology_updated;
let Pharmacology_updated_count;
let Pharmacology_incorrect;
let Pharmacology_incorrect_count;
let Pharmacology_marked;
let Pharmacology_marked_count;



let Physiology_questions;
let Physiology_count;
let Physiology_updated;
let Physiology_updated_count;
let Physiology_incorrect;
let Physiology_incorrect_count;
let Physiology_marked;
let Physiology_marked_count;





//
//
//


let cardiovascular_questions;
let cardiovascular_count;
let cardiovascular_updated;
let cardiovascular_updated_count;
let cardiovascular_incorrect;
let cardiovascular_incorrect_count;
let cardiovascular_marked;
let cardiovascular_marked_count;


let respiratory_questions;
let respiratory_count;
let respiratory_updated;
let respiratory_updated_count;
let respiratory_incorrect;
let respiratory_incorrect_count;
let respiratory_marked;
let respiratory_marked_count;


let renal_questions;
let renal_count;
let renal_updated;
let renal_updated_count;
let renal_incorrect;
let renal_incorrect_count;
let renal_marked;
let renal_marked_count;




let allergy_questions;
let allergy_count;
let allergy_updated;
let allergy_updated_count;
let allergy_incorrect;
let allergy_incorrect_count;
let allergy_marked;
let allergy_marked_count;



let dermatology_questions;
let dermatology_count;
let dermatology_updated;
let dermatology_updated_count;
let dermatology_incorrect;
let dermatology_incorrect_count;
let dermatology_marked;
let dermatology_marked_count;



let gastrointestinal_questions;
let gastrointestinal_count;
let gastrointestinal_updated;
let gastrointestinal_updated_count;
let gastrointestinal_incorrect;
let gastrointestinal_incorrect_count;
let gastrointestinal_marked;
let gastrointestinal_marked_count;



let hematology_questions;
let hematology_count;
let hematology_updated;
let hematology_updated_count;
let hematology_incorrect;
let hematology_incorrect_count;
let hematology_marked;
let hematology_marked_count;




let neuro_questions;
let neuro_count;
let neuro_updated;
let neuro_updated_count;
let neuro_incorrect;
let neuro_incorrect_count;
let neuro_marked;
let neuro_marked_count;



let rheumatology_questions;
let rheumatology_count;
let rheumatology_updated;
let rheumatology_updated_count;
let rheumatology_incorrect;
let rheumatology_incorrect_count;
let rheumatology_marked;
let rheumatology_marked_count;



let infectious_questions;
let infectious_count;
let infectious_updated;
let infectious_updated_count;
let infectious_incorrect;
let infectious_incorrect_count;
let infectious_marked;
let infectious_marked_count;



let endocrine_questions;
let endocrine_count;
let endocrine_updated;
let endocrine_updated_count;
let endocrine_incorrect;
let endocrine_incorrect_count;
let endocrine_marked;
let endocrine_marked_count;



let reproductive_F_questions;
let reproductive_F_count;
let reproductive_F_updated;
let reproductive_F_updated_count;
let reproductive_F_incorrect;
let reproductive_F_incorrect_count;
let reproductive_F_marked;
let reproductive_F_marked_count;



let reproductive_M_questions;
let reproductive_M_count;
let reproductive_M_updated;
let reproductive_M_updated_count;
let reproductive_M_incorrect;
let reproductive_M_incorrect_count;
let reproductive_M_marked;
let reproductive_M_marked_count;



let pregnancy_questions;
let pregnancy_count;
let pregnancy_updated;
let pregnancy_updated_count;
let pregnancy_incorrect;
let pregnancy_incorrect_count;
let pregnancy_marked;
let pregnancy_marked_count;



//
//
let all_incorrect;
//
let all_marked;
//

let introduction = document.querySelector(".intro");

let startButton = document.querySelector(".start-button");

//let review_questions;




let FINAL_ARRAY; 


// Set Options
// begin of editing to reset 
let currentIndex ;
let rightAnswers ;
let countdownInterval;
// end of editing to reset




let allSubjectsCheckbox=document.getElementsByName("AllSubjects");
let surgeryCheckbox = document.getElementsByName("Surgery");
let medicineCheckbox= document.getElementsByName("Medicine");
let BiochemistryCheckbox= document.getElementsByName("Biochemistry");
let BiostatCheckbox= document.getElementsByName("Biostatsitics");
let EmbryologyCheckbox= document.getElementsByName("Embryology");
let GeneticsCheckbox= document.getElementsByName("Genetics");
let HistologyCheckbox= document.getElementsByName("Histology");
let ImmunologyCheckbox= document.getElementsByName("Immunology");
let MicrobiologyCheckbox= document.getElementsByName("Microbiology");
let PathologyCheckbox= document.getElementsByName("Pathology");
let PathophysiologyCheckbox= document.getElementsByName("Pathophysiology");
let PharmacologyCheckbox= document.getElementsByName("Pharmacology");
let PhysiologyCheckbox= document.getElementsByName("Physiology");



let allSystemsCheckbox=document.getElementsByName("AllSystems");
let renalCheckbox= document.getElementsByName("Renal");
let respiratoryCheckbox = document.getElementsByName("Respiratory");
let cardiovascCheckbox = document.getElementsByName("Cardiovascular");
let allergyCheckbox = document.getElementsByName("Allergy");
let DermatologyCheckbox= document.getElementsByName("Dermatology");
let GastrointestinalCheckbox= document.getElementsByName("Gastrointestinal");
let HemtologyCheckbox= document.getElementsByName("Hematology");
let NeuroCheckbox= document.getElementsByName("Neurology");
let RheumatologyCheckbox= document.getElementsByName("Rheumatology");
let InfectiousCheckbox= document.getElementsByName("Infectious");
let EndocrineCheckbox= document.getElementsByName("Endocrine");
let Reproductive_F_Checkbox= document.getElementsByName("Reproductive_F");
let Reproductive_M_Checkbox= document.getElementsByName("Reproductive_M");
let Pregnancy_Checkbox= document.getElementsByName("Pregnancy");



// i have not used both below variables anywhere or added them to reset
let solved;
let toBeSolved;


let total=63;
// end

let score;

//
//
let scores={};
//
//
let SUM;
//


 let isTimed; 




 //
 //
 let container = document.getElementById('button-container');
 let atButtonContainer = document.getElementById('at-button-container');
 let atButtons = [];
 let firstButtons = [];
 let atButtonClicked = Array(40).fill(false); // Array to track if "i@" buttons were clicked
 
 //
 //
 //

 /*
 let container = document.getElementById('button-container');
 let atButtonContainer = document.getElementById('at-button-container');
 let atButtons = [];
*/

 //
//
 //
//
document.getElementById("unused").checked=true; //by deffault.
//




function DoUnused(){ if (document.getElementById("unused").checked==true){

Uncheck_2();
update_texts();
document.getElementById("all-mode").checked=false
document.getElementById("incorrect").checked=false
document.getElementById("marked").checked=false;

  }
}

function DoAll(){ if (document.getElementById("all-mode").checked==true){
  Uncheck_All_mode();
   update_texts_all_mode();
   document.getElementById("unused").checked=false;
   document.getElementById("incorrect").checked=false
   document.getElementById("marked").checked=false;

  }
}
//
//
function DoIncorrect(){ if (document.getElementById("incorrect").checked==true){
  Uncheck_incorrect();
   update_texts_incorrect();
   document.getElementById("unused").checked=false;
   document.getElementById("all-mode").checked=false;
   document.getElementById("marked").checked=false;
  }
}

function DoMarked(){ if (document.getElementById("marked").checked==true){
  Uncheck_marked();
   update_texts_marked();
   document.getElementById("unused").checked=false;
   document.getElementById("all-mode").checked=false;
   document.getElementById("incorrect").checked=false

  }
}



startButton.onclick = () => {
  if (document.getElementById("timed").checked){isTimed=true}else{isTimed=false};

  if (document.getElementById("unused").checked){getQuestions();}
  //
  //
  if (document.getElementById("all-mode").checked){getQuestions_All();}
  //
  //
  if (document.getElementById("incorrect").checked){getQuestions_incorrect();}
  //
  //
  if (document.getElementById("marked").checked){getQuestions_marked();}
  //
  //
  if (!document.getElementById("unused").checked && !document.getElementById("all-mode").checked && !document.getElementById("incorrect").checked && !document.getElementById("marked").checked){alert("select question mode first.");}
  //
  //
};



function getQuestions() {
  n=document.getElementById('NumberOfQurstions').value
  if ( n>=1 && n<=40 )  {
       FINAL_ARRAY = [];
    
    for (let i = 0; i < subject_array.length; i++) {
      for (let j = 0; j < systems_array.length; j++) {
         if (subject_array[i].title == systems_array[j].title) {
         FINAL_ARRAY.push(subject_array[i]); }   } }

   // removing duplicates from final array
   FINAL_ARRAY =uniqueByKeepLast(FINAL_ARRAY, it=> it.title);

   // choosing n numbers of questions
   if ( n > FINAL_ARRAY.length)alert("enter a maximum number of "+ FINAL_ARRAY.length);
else {

   // randomzing final array
   let array2 = [];
   while(FINAL_ARRAY.length !== 0) {
   let randomIndex= Math.floor(Math.random() * FINAL_ARRAY.length);
   array2.push(FINAL_ARRAY [randomIndex]);
   FINAL_ARRAY.splice(randomIndex, 1);
   }
   FINAL_ARRAY = array2;
   
   currentIndex = 0;
   rightAnswers = 0;
   score=0;

   let list=document.getElementById("myList");
   while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  finishExamButton.style.display='block';
  nextAnsButton.style.display='none';

  if (currentIndex>=(n-1)){nextButton.style.display='none'}else{
    nextButton.style.display='block' }

   FINAL_ARRAY=FINAL_ARRAY.slice(0,n);
   Final_Count= FINAL_ARRAY.length;
       


   //
   //
   //
   //
   //

/*
 
   // Create hidden buttons named "1@", "2@", ..., "10@"

   atButtons=[];
   for (let i = 1; i <= n; i++) {
       let button = document.createElement('button');
       button.innerText = `${i}@`;
       button.classList.add('hidden-button', 'at-button');

       button.addEventListener('click', function() {alert(i)});


       atButtonContainer.appendChild(button);
       atButtons.push(button);
   }

   */
  //

//
//

//
//
//
//
for(let i=1;i<=n;i++){
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
  bullets.style.display='block';
  
  review_questions.onclick=() =>{
    let new_index=currentIndex;
    new_index++;
  let answers=document.getElementsByName("question");

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
   // theChoosenAnswer = answers[i].dataset.answer;
    chosen_Answers[new_index]=i;
   // chosen_Answers_string[new_index]=theChoosenAnswer;
    }  }
//
  currentIndex=i-1; // i added let
  //  nextButton.style.display='none';
  quizArea.innerHTML = "";
  answersArea.innerHTML = "";
  explanationArea.innerHTML="";
  addQuestionData_3(FINAL_ARRAY[currentIndex],Final_Count );
  //let answers=document.getElementsByName("question");
  // hon bs btghayerha la one question msh array
  for (let m =0 ;m< answers.length;m++){
        if (chosen_Answers[currentIndex+1]==m){
        answers[m].checked=true 
        }   }


for (let m =0 ;m< answers.length;m++){ answers[m].disabled='true' }
atButtonClicked[i - 1] = true; // Mark this "i@" button as clicked
//i want it to disappear when "submit" is clicked.
review_questions.style.display = 'none';
//
 } 
//if (i==1) review_questions.click();
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
    // Status.textContent="0"
    firstBtn.click(buttonEvent(i));
    list.appendChild(firstBtn);
    list.appendChild(Status);  
    //container.appendChild(firstBtn);
    firstButtons.push(firstBtn);
    // erja3ehma momken 7asbak l score aw check asnwer marteeen/
    firstButtons[0].click();
    }
     



   // this differs between all getquestions functions
   toBeSolved=Final_Count;
   localStorage.setItem("toBeSolved", toBeSolved);
   localStorage.setItem("FINAL_ARRAY",JSON.stringify(FINAL_ARRAY));
   localStorage.setItem("Final_Count",Final_Count);
     //
     //
     //
     //





/*
    // hdol elli ta7t ew3ak tghayer m7alhom
 common_array_surgery=[];
    for (let i = 0; i < surgery_updated.length; i++) {
      for (let j = 0; j < FINAL_ARRAY.length; j++) {
         if (surgery_updated[i].title == FINAL_ARRAY[j].title) {
         common_array_surgery.push(surgery_updated[i]);
       }    }    }
surgery_updated=arrayDiffByKey('title', surgery_updated, common_array_surgery);
surgery_updated_count=surgery_updated.length;
//console.log(surgery_updated);


 common_array_medicine=[];
for (let i = 0; i < medicine_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (medicine_updated[i].title == FINAL_ARRAY[j].title) {
     common_array_medicine.push(medicine_updated[i]);
   }}}
medicine_updated=arrayDiffByKey('title', medicine_updated, common_array_medicine);
medicine_updated_count=medicine_updated.length;


common_array_Biochemistry=[];
for (let i = 0; i < Biochemistry_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (Biochemistry_updated[i].title == FINAL_ARRAY[j].title) {
     common_array_Biochemistry.push(Biochemistry_updated[i]);
   }    }    }
   Biochemistry_updated=arrayDiffByKey('title', Biochemistry_updated, common_array_Biochemistry);
Biochemistry_updated_count=Biochemistry_updated.length;


common_array_Biostatsitics=[];
for (let i = 0; i < biostat_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (biostat_updated[i].title == FINAL_ARRAY[j].title) {
      common_array_Biostatsitics.push(biostat_updated[i]);
   }    }    }
   biostat_updated=arrayDiffByKey('title', biostat_updated, common_array_Biostatsitics);
biostat_updated_count=biostat_updated.length;

common_array_Embryology=[];
  for (let i = 0; i < embryology_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (embryology_updated[i].title == FINAL_ARRAY[j].title) {
      common_array_Embryology.push(embryology_updated[i]);
   }}}
   embryology_updated=arrayDiffByKey('title', embryology_updated, common_array_Embryology);
   embryology_updated_count=embryology_updated.length;



   common_array_Genetics=[];
  for (let i = 0; i < Genetics_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (Genetics_updated[i].title == FINAL_ARRAY[j].title) {
      common_array_Genetics.push(Genetics_updated[i]);
   }}}
   Genetics_updated=arrayDiffByKey('title', Genetics_updated, common_array_Genetics);
   Genetics_updated_count=Genetics_updated.length;


   common_array_Histology=[];
  for (let i = 0; i < Histology_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (Histology_updated[i].title == FINAL_ARRAY[j].title) {
      common_array_Histology.push(Histology_updated[i]);
   }}}
   Histology_updated=arrayDiffByKey('title', Histology_updated, common_array_Histology);
   Histology_updated_count=Histology_updated.length;


   common_array_Immunology=[];
   for (let i = 0; i < Immunology_updated.length; i++) {
     for (let j = 0; j < FINAL_ARRAY.length; j++) {
        if (Immunology_updated[i].title == FINAL_ARRAY[j].title) {
          common_array_Immunology.push(Immunology_updated[i]);
      }}}
      Immunology_updated=arrayDiffByKey('title', Immunology_updated, common_array_Immunology);
      Immunology_updated_count=Immunology_updated.length;


      
   common_array_Microbiology=[];
   for (let i = 0; i < Microbiology_updated.length; i++) {
   for (let j = 0; j < FINAL_ARRAY.length; j++) {
   if (Microbiology_updated[i].title == FINAL_ARRAY[j].title) {
   common_array_Microbiology.push(Microbiology_updated[i]);
   }}}
   Microbiology_updated=arrayDiffByKey('title', Microbiology_updated, common_array_Microbiology);
   Microbiology_updated_count=Microbiology_updated.length;



    common_array_Pathology=[];
    for (let i = 0; i < Pathology_updated.length; i++) {
    for (let j = 0; j < FINAL_ARRAY.length; j++) {
    if (Pathology_updated[i].title == FINAL_ARRAY[j].title) {
    common_array_Pathology.push(Pathology_updated[i]);
    }}}
    Pathology_updated=arrayDiffByKey('title', Pathology_updated, common_array_Pathology);
    Pathology_updated_count=Pathology_updated.length;


    common_array_Pathophysiology=[];
    for (let i = 0; i < Pathophysiology_updated.length; i++) {
    for (let j = 0; j < FINAL_ARRAY.length; j++) {
    if (Pathophysiology_updated[i].title == FINAL_ARRAY[j].title) {
    common_array_Pathophysiology.push(Pathophysiology_updated[i]);
    }}}
   Pathophysiology_updated=arrayDiffByKey('title', Pathophysiology_updated, common_array_Pathophysiology);
   Pathophysiology_updated_count=Pathophysiology_updated.length;


  common_array_Pharmacology=[];
  for (let i = 0; i < Pharmacology_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (Pharmacology_updated[i].title == FINAL_ARRAY[j].title) {
  common_array_Pharmacology.push(Pharmacology_updated[i]);
  }}}
  Pharmacology_updated=arrayDiffByKey('title', Pharmacology_updated, common_array_Pharmacology);
  Pharmacology_updated_count=Pharmacology_updated.length;


  common_array_Physiology=[];
  for (let i = 0; i < Physiology_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (Physiology_updated[i].title == FINAL_ARRAY[j].title) {
    common_array_Physiology.push(Physiology_updated[i]);
  }}}
  Physiology_updated=arrayDiffByKey('title', Physiology_updated, common_array_Physiology);
  Physiology_updated_count=Physiology_updated.length;


//
//
//






common_array_renal=[];
for (let i = 0; i < renal_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (renal_updated[i].title == FINAL_ARRAY[j].title) {
     common_array_renal.push(renal_updated[i]);
   }}}
renal_updated=arrayDiffByKey('title', renal_updated, common_array_renal);
renal_updated_count=renal_updated.length;


common_array_cardiovascular=[];
for (let i = 0; i < cardiovascular_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (cardiovascular_updated[i].title == FINAL_ARRAY[j].title) {
     common_array_cardiovascular.push(cardiovascular_updated[i]);
   }}}
   cardiovascular_updated=arrayDiffByKey('title', cardiovascular_updated, common_array_cardiovascular);
cardiovascular_updated_count=cardiovascular_updated.length;



common_array_respiratory=[];
for (let i = 0; i < respiratory_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (respiratory_updated[i].title == FINAL_ARRAY[j].title) {
     common_array_respiratory.push(respiratory_updated[i]);
   }}}
respiratory_updated=arrayDiffByKey('title', respiratory_updated, common_array_respiratory);
respiratory_updated_count=respiratory_updated.length;




common_array_allergy=[];
for (let i = 0; i < allergy_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (allergy_updated[i].title == FINAL_ARRAY[j].title) {
      common_array_allergy.push(allergy_updated[i]);
   }}}
   allergy_updated=arrayDiffByKey('title', allergy_updated, common_array_allergy);
   allergy_updated_count=allergy_updated.length;


    common_array_Dermatology=[];
    for (let i = 0; i < dermatology_updated.length; i++) {
    for (let j = 0; j < FINAL_ARRAY.length; j++) {
    if (dermatology_updated[i].title == FINAL_ARRAY[j].title) {
    common_array_Dermatology.push(dermatology_updated[i]);
     }}}
    dermatology_updated=arrayDiffByKey('title', dermatology_updated, common_array_Dermatology);
    dermatology_updated_count=dermatology_updated.length;


    common_array_Gastrointestinal=[];
    for (let i = 0; i < gastrointestinal_updated.length; i++) {
    for (let j = 0; j < FINAL_ARRAY.length; j++) {
    if (gastrointestinal_updated[i].title == FINAL_ARRAY[j].title) {
    common_array_Gastrointestinal.push(gastrointestinal_updated[i]);
   }}}
    gastrointestinal_updated=arrayDiffByKey('title', gastrointestinal_updated, common_array_Gastrointestinal);
    gastrointestinal_updated_count=gastrointestinal_updated.length;
   

  common_array_Hematology=[];
  for (let i = 0; i < hematology_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (hematology_updated[i].title == FINAL_ARRAY[j].title) {
  common_array_Hematology.push(hematology_updated[i]);
   }}}
   hematology_updated=arrayDiffByKey('title', hematology_updated, common_array_Hematology);
   hematology_updated_count=hematology_updated.length;
             

      
  common_array_Neuro=[];
  for (let i = 0; i < neuro_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (neuro_updated[i].title == FINAL_ARRAY[j].title) {
    common_array_Neuro.push(neuro_updated[i]);
   }}}
   neuro_updated=arrayDiffByKey('title', neuro_updated, common_array_Neuro);
   neuro_updated_count=neuro_updated.length;   
          

   common_array_Rheumatology=[];
   for (let i = 0; i < rheumatology_updated.length; i++) {
   for (let j = 0; j < FINAL_ARRAY.length; j++) {
   if (rheumatology_updated[i].title == FINAL_ARRAY[j].title) {
    common_array_Rheumatology.push(rheumatology_updated[i]);
    }}}
    rheumatology_updated=arrayDiffByKey('title', rheumatology_updated, common_array_Rheumatology);
    rheumatology_updated_count=rheumatology_updated.length;  


    common_array_infectious=[];
    for (let i = 0; i < infectious_updated.length; i++) {
    for (let j = 0; j < FINAL_ARRAY.length; j++) {
    if (infectious_updated[i].title == FINAL_ARRAY[j].title) {
      common_array_infectious.push(infectious_updated[i]);
     }}}
     infectious_updated=arrayDiffByKey('title', infectious_updated, common_array_infectious);
     infectious_updated_count=infectious_updated.length;  
 
 

     common_array_endocrine=[];
     for (let i = 0; i < endocrine_updated.length; i++) {
     for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (endocrine_updated[i].title == FINAL_ARRAY[j].title) {
      common_array_endocrine.push(endocrine_updated[i]);
      }}}
      endocrine_updated=arrayDiffByKey('title', endocrine_updated, common_array_endocrine);
      endocrine_updated_count=endocrine_updated.length;  
 
      
      
    common_array_Reproductive_F=[];
    for (let i = 0; i < reproductive_F_updated.length; i++) {
    for (let j = 0; j < FINAL_ARRAY.length; j++) {
    if (reproductive_F_updated[i].title == FINAL_ARRAY[j].title) {
      common_array_Reproductive_F.push(reproductive_F_updated[i]);
     }}}
     reproductive_F_updated=arrayDiffByKey('title', reproductive_F_updated, common_array_Reproductive_F);
     reproductive_F_updated_count=reproductive_F_updated.length;  
 

     
    common_array_Reproductive_M=[];
    for (let i = 0; i < reproductive_M_updated.length; i++) {
    for (let j = 0; j < FINAL_ARRAY.length; j++) {
    if (reproductive_M_updated[i].title == FINAL_ARRAY[j].title) {
      common_array_Reproductive_M.push(reproductive_M_updated[i]);
     }}}
     reproductive_M_updated=arrayDiffByKey('title', reproductive_M_updated, common_array_Reproductive_M);
     reproductive_M_updated_count=reproductive_M_updated.length;  
 


     common_array_Pregnancy=[];
     for (let i = 0; i < pregnancy_updated.length; i++) {
     for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (pregnancy_updated[i].title == FINAL_ARRAY[j].title) {
      common_array_Pregnancy.push(pregnancy_updated[i]);
      }}}
      pregnancy_updated=arrayDiffByKey('title', pregnancy_updated, common_array_Pregnancy);
      pregnancy_updated_count=pregnancy_updated.length; 
*/



//
//
//
//
//
//
//
//

function updateArrayByCommonTitle(updatedArray, commonArray, finalArray) {
 commonArray=[];
  //commonArray.length = 0; // Clear the array
  for (let i = 0; i < updatedArray.length; i++) {
    for (let j = 0; j < finalArray.length; j++) {
      if (updatedArray[i].title == finalArray[j].title) {
        commonArray.push(updatedArray[i]);
        break; // Once a match is found, no need to keep checking
      }
    }
  }
  return arrayDiffByKey('title', updatedArray, commonArray);
}

function processArrayData(data) {
  let { updatedArray, commonArray } = data;
  updatedArray = updateArrayByCommonTitle(updatedArray, commonArray, FINAL_ARRAY);
  return {
    updatedArray,
    count: updatedArray.length
  };
}

let surgery_data = processArrayData({ updatedArray: surgery_updated, commonArray: common_array_surgery });
surgery_updated = surgery_data.updatedArray;
surgery_updated_count = surgery_data.count;

let medicine_data = processArrayData({ updatedArray: medicine_updated, commonArray: common_array_medicine });
medicine_updated = medicine_data.updatedArray;
medicine_updated_count = medicine_data.count;

let biochemistry_data = processArrayData({ updatedArray: Biochemistry_updated, commonArray: common_array_Biochemistry });
Biochemistry_updated = biochemistry_data.updatedArray;
Biochemistry_updated_count = biochemistry_data.count;


let biostatistics_data = processArrayData({ updatedArray: biostat_updated, commonArray: common_array_Biostatsitics });
biostat_updated = biostatistics_data.updatedArray;
biostat_updated_count = biostatistics_data.count;

let embryology_data = processArrayData({ updatedArray: embryology_updated, commonArray: common_array_Embryology });
embryology_updated = embryology_data.updatedArray;
embryology_updated_count = embryology_data.count;

let genetics_data = processArrayData({ updatedArray: Genetics_updated, commonArray: common_array_Genetics });
Genetics_updated = genetics_data.updatedArray;
Genetics_updated_count = genetics_data.count;

let histology_data = processArrayData({ updatedArray: Histology_updated, commonArray: common_array_Histology });
Histology_updated = histology_data.updatedArray;
Histology_updated_count = histology_data.count;

let immunology_data = processArrayData({ updatedArray: Immunology_updated, commonArray: common_array_Immunology });
Immunology_updated = immunology_data.updatedArray;
Immunology_updated_count = immunology_data.count;

let microbiology_data = processArrayData({ updatedArray: Microbiology_updated, commonArray: common_array_Microbiology });
Microbiology_updated = microbiology_data.updatedArray;
Microbiology_updated_count = microbiology_data.count;

let pathology_data = processArrayData({ updatedArray: Pathology_updated, commonArray: common_array_Pathology });
Pathology_updated = pathology_data.updatedArray;
Pathology_updated_count = pathology_data.count;

let pathophysiology_data = processArrayData({ updatedArray: Pathophysiology_updated, commonArray: common_array_Pathophysiology });
Pathophysiology_updated = pathophysiology_data.updatedArray;
Pathophysiology_updated_count = pathophysiology_data.count;

let pharmacology_data = processArrayData({ updatedArray: Pharmacology_updated, commonArray: common_array_Pharmacology });
Pharmacology_updated = pharmacology_data.updatedArray;
Pharmacology_updated_count = pharmacology_data.count;

let physiology_data = processArrayData({ updatedArray: Physiology_updated, commonArray: common_array_Physiology });
Physiology_updated = physiology_data.updatedArray;
Physiology_updated_count = physiology_data.count;

let renal_data = processArrayData({ updatedArray: renal_updated, commonArray: common_array_renal });
renal_updated = renal_data.updatedArray;
renal_updated_count = renal_data.count;

let cardiovascular_data = processArrayData({ updatedArray: cardiovascular_updated, commonArray: common_array_cardiovascular });
cardiovascular_updated = cardiovascular_data.updatedArray;
cardiovascular_updated_count = cardiovascular_data.count;

let respiratory_data = processArrayData({ updatedArray: respiratory_updated, commonArray: common_array_respiratory });
respiratory_updated = respiratory_data.updatedArray;
respiratory_updated_count = respiratory_data.count;

let allergy_data = processArrayData({ updatedArray: allergy_updated, commonArray: common_array_allergy });
allergy_updated = allergy_data.updatedArray;
allergy_updated_count = allergy_data.count;

let dermatology_data = processArrayData({ updatedArray: dermatology_updated, commonArray: common_array_Dermatology });
dermatology_updated = dermatology_data.updatedArray;
dermatology_updated_count = dermatology_data.count;

let gastrointestinal_data = processArrayData({ updatedArray: gastrointestinal_updated, commonArray: common_array_Gastrointestinal });
gastrointestinal_updated = gastrointestinal_data.updatedArray;
gastrointestinal_updated_count = gastrointestinal_data.count;

let hematology_data = processArrayData({ updatedArray: hematology_updated, commonArray: common_array_Hematology });
hematology_updated = hematology_data.updatedArray;
hematology_updated_count = hematology_data.count;

let neuro_data = processArrayData({ updatedArray: neuro_updated, commonArray: common_array_Neuro });
neuro_updated = neuro_data.updatedArray;
neuro_updated_count = neuro_data.count;

let rheumatology_data = processArrayData({ updatedArray: rheumatology_updated, commonArray: common_array_Rheumatology });
rheumatology_updated = rheumatology_data.updatedArray;
rheumatology_updated_count = rheumatology_data.count;

let infectious_data = processArrayData({ updatedArray: infectious_updated, commonArray: common_array_infectious });
infectious_updated = infectious_data.updatedArray;
infectious_updated_count = infectious_data.count;

let endocrine_data = processArrayData({ updatedArray: endocrine_updated, commonArray: common_array_endocrine });
endocrine_updated = endocrine_data.updatedArray;
endocrine_updated_count = endocrine_data.count;

let reproductive_F_data = processArrayData({ updatedArray: reproductive_F_updated, commonArray: common_array_Reproductive_F });
reproductive_F_updated = reproductive_F_data.updatedArray;
reproductive_F_updated_count = reproductive_F_data.count;

let reproductive_M_data = processArrayData({ updatedArray: reproductive_M_updated, commonArray: common_array_Reproductive_M });
reproductive_M_updated = reproductive_M_data.updatedArray;
reproductive_M_updated_count = reproductive_M_data.count;

let pregnancy_data = processArrayData({ updatedArray: pregnancy_updated, commonArray: common_array_Pregnancy });
pregnancy_updated = pregnancy_data.updatedArray;
pregnancy_updated_count = pregnancy_data.count;



//
//

//
//
//
//
//

//
//
//

//
//
//
//
//
//
//











      Uncheck_2();


      //(JSON.stringify  // hai ana m7etha w zebet 
      // Create Bullets + Set Questions Count

      quizArea.innerHTML = "";
      answersArea.innerHTML = "";
      explanationArea.innerHTML="";

      // Add Question Data
      addQuestionData(FINAL_ARRAY[currentIndex], Final_Count);

      // Start CountDown
      if (isTimed==true){ countdown( 90*Final_Count, Final_Count);}

      for ( let i=0;i<n;i++){
      chosen_Answers_string[i]="";
      }
      for ( i=0;i<n;i++){
        chosen_Answers[i]="100";
        }

      // Click On Submit
      nextButton.onclick = () => {
     firstButtons[currentIndex+1].click();
      }
      
      quizApp.style.display='block';
      quizArea.style.display='block';
      answersArea.style.display='block';
      //nextButton.style.display='block';
      bullets.style.display='block';
      startButton.style.display = 'none';
      chooseQuestionsClass.style.display= 'none';
      questionButtonsContainer.style.display = 'block';


    } }else alert ("enter a number between 1 & 40")
    }




    //
    //
    //
// THIS FUNCTION BRINGS AND OPENS NEW JSON FILE
function bring_respiratory() {
  let myRequest_2 = new XMLHttpRequest();
  myRequest_2.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    respiratory_questions = JSON.parse(this.responseText);
    respiratory_questions =uniqueByKeepLast(respiratory_questions, it=> it.title);
     respiratory_count = respiratory_questions.length;
     respiratory_updated =respiratory_questions;
     respiratory_updated_count=respiratory_updated.length;
    }
  };

  myRequest_2.open("GET", "respiratorysystem.json", true);
  myRequest_2.send();
}

function bring_cardiovascular() {

  let myRequest_cardiovascular = new XMLHttpRequest();
myRequest_cardiovascular.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    cardiovascular_questions = JSON.parse(this.responseText);
    cardiovascular_questions=uniqueByKeepLast(cardiovascular_questions, it=> it.title);
    cardiovascular_count = cardiovascular_questions.length; 
   cardiovascular_updated =cardiovascular_questions;
   cardiovascular_updated_count=cardiovascular_updated.length;

  }
};
myRequest_cardiovascular.open("GET", "cardiovascularsystem.json", true);
myRequest_cardiovascular.send();
}



// THIS FUNCTION BRINGS AND OPENS NEW JSON FILE
function bring_renal() {
  let myRequest_renal = new XMLHttpRequest();
  myRequest_renal.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    renal_questions = JSON.parse(this.responseText);
    renal_questions = uniqueByKeepLast(renal_questions, it=> it.title);
    renal_count = renal_questions.length;
    renal_updated =renal_questions;
    renal_updated_count=renal_updated.length;
    }
  };

  myRequest_renal.open("GET", "renalsystem.json", true);
  myRequest_renal.send();
}


function bring_Allergy() {
  let myRequest_Allergy = new XMLHttpRequest();
  myRequest_Allergy.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    allergy_questions = JSON.parse(this.responseText);
    allergy_questions = uniqueByKeepLast(allergy_questions, it=> it.title);
    allergy_count = allergy_questions.length;
    allergy_updated =allergy_questions;
    allergy_updated_count=allergy_updated.length;
    }
  };

  myRequest_Allergy.open("GET", "allergy.json", true);
  myRequest_Allergy.send();
}


function bring_dermatology() {
  let myRequest_dermatology = new XMLHttpRequest();
  myRequest_dermatology.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    dermatology_questions = JSON.parse(this.responseText);
    dermatology_questions = uniqueByKeepLast(dermatology_questions, it=> it.title);
    dermatology_count = dermatology_questions.length;
    dermatology_updated =dermatology_questions;
    dermatology_updated_count=dermatology_updated.length;
    }
  };

  myRequest_dermatology.open("GET", "dermatology.json", true);
  myRequest_dermatology.send();
}


function bring_Gastrointestinal() {
  let myRequest_Gastrointestinal = new XMLHttpRequest();
  myRequest_Gastrointestinal.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    gastrointestinal_questions = JSON.parse(this.responseText);
    gastrointestinal_questions = uniqueByKeepLast(gastrointestinal_questions, it=> it.title);

     dermatology_count = gastrointestinal_questions.length;

     gastrointestinal_updated = gastrointestinal_questions;
    gastrointestinal_updated_count=gastrointestinal_updated.length;
    }
  };

  myRequest_Gastrointestinal.open("GET", "gastrointestinal.json", true);
  myRequest_Gastrointestinal.send();
}


function bring_Hematology() {
  let myRequest_Hematology = new XMLHttpRequest();
  myRequest_Hematology.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    hematology_questions = JSON.parse(this.responseText);
    hematology_questions = uniqueByKeepLast(hematology_questions, it=> it.title);
    hematology_count = hematology_questions.length;
    hematology_updated = hematology_questions;
    hematology_updated_count=hematology_updated.length;
    }
  };

  myRequest_Hematology.open("GET", "hematology.json", true);
  myRequest_Hematology.send();
}



function bring_Neuro() {
  let myRequest_Neuro = new XMLHttpRequest();
  myRequest_Neuro.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    neuro_questions = JSON.parse(this.responseText);
    neuro_questions = uniqueByKeepLast(neuro_questions, it=> it.title);
    neuro_count = neuro_questions.length;

    neuro_updated = neuro_questions;
    neuro_updated_count=neuro_updated.length;
    }
  };

  myRequest_Neuro.open("GET", "neurology.json", true);
  myRequest_Neuro.send();
}



function bring_Rheumatology() {
  let myRequest_rheumatology = new XMLHttpRequest();
  myRequest_rheumatology.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    rheumatology_questions = JSON.parse(this.responseText);
    rheumatology_questions = uniqueByKeepLast(rheumatology_questions, it=> it.title); 
    rheumatology_count = rheumatology_questions.length;

    rheumatology_updated = rheumatology_questions;
    rheumatology_updated_count=rheumatology_updated.length;
    }
  };
  myRequest_rheumatology.open("GET", "rheumatology.json", true);
  myRequest_rheumatology.send();
}



function bring_Infectious() {
  let myRequest_Infectious = new XMLHttpRequest();
  myRequest_Infectious.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    infectious_questions = JSON.parse(this.responseText);
    infectious_questions = uniqueByKeepLast(infectious_questions, it=> it.title);
    rheumatology_count = infectious_questions.length;

    infectious_updated = infectious_questions; 
    infectious_updated_count=infectious_updated.length;
    }
  };
  myRequest_Infectious.open("GET", "infectious.json", true);
  myRequest_Infectious.send();
}


function bring_Endocrine() {
  let myRequest_Endocrine = new XMLHttpRequest();
  myRequest_Endocrine.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    endocrine_questions = JSON.parse(this.responseText);
    endocrine_questions = uniqueByKeepLast(endocrine_questions, it=> it.title);
    endocrine_count = endocrine_questions.length;

    endocrine_updated = endocrine_questions;
    endocrine_updated_count=endocrine_updated.length;
    }
  };
  myRequest_Endocrine.open("GET", "endocrine.json", true);
  myRequest_Endocrine.send();
}


function bring_Reproductive_F() {
  let myRequest_Reproductive_F = new XMLHttpRequest();
  myRequest_Reproductive_F.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    reproductive_F_questions = JSON.parse(this.responseText);
    reproductive_F_questions =uniqueByKeepLast(reproductive_F_questions, it=> it.title); 
    reproductive_F_count = reproductive_F_questions.length;

    reproductive_F_updated = reproductive_F_questions;
    reproductive_F_updated_count=reproductive_F_updated.length;
    }
  };
  myRequest_Reproductive_F.open("GET", "Reproductive_F.json", true);
  myRequest_Reproductive_F.send();
}


function bring_Reproductive_M() {
  let myRequest_Reproductive_M = new XMLHttpRequest();
  myRequest_Reproductive_M.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    reproductive_M_questions = JSON.parse(this.responseText);
    reproductive_M_questions = uniqueByKeepLast(reproductive_M_questions, it=> it.title);
    reproductive_M_count = reproductive_M_questions.length;

    reproductive_M_updated = reproductive_M_questions;
    reproductive_M_updated_count = reproductive_M_updated.length;
    }
  };
  myRequest_Reproductive_M.open("GET", "reproductive_M.json", true);
  myRequest_Reproductive_M.send();
}



function bring_Pregnancy() {
  let myRequest_Pregnancy = new XMLHttpRequest();
  myRequest_Pregnancy.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    pregnancy_questions = JSON.parse(this.responseText);
    pregnancy_questions = uniqueByKeepLast(pregnancy_questions, it=> it.title);
    pregnancy_count = pregnancy_questions.length;

    pregnancy_updated = pregnancy_questions; 
    pregnancy_updated_count=pregnancy_updated.length;
    }
  };
  myRequest_Pregnancy.open("GET", "pregnancy.json", true);
  myRequest_Pregnancy.send();
}






function bring_medicine() {
  let myRequest_medicine = new XMLHttpRequest();
  myRequest_medicine.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {

    medicine_questions = JSON.parse(this.responseText);
    medicine_questions = uniqueByKeepLast(medicine_questions, it=> it.title);
     medicine_count = medicine_questions.length;

     medicine_updated = medicine_questions;
     medicine_updated_count=medicine_updated.length;

     document.getElementById("medicine_remain_text").innerHTML = medicine_updated_count; 
     document.getElementById("color_Medicine").style.color='black'

    }
  };
  myRequest_medicine.open("GET", "medicine.json", true);
  myRequest_medicine.send();
}






function bring_surgery() {
  let myRequest_surgery = new XMLHttpRequest();
  myRequest_surgery.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    surgery_questions = JSON.parse(this.responseText);
    surgery_questions = uniqueByKeepLast(surgery_questions, it=> it.title);
    surgery_count = surgery_questions.length;

    surgery_updated = surgery_questions;
    surgery_updated_count=surgery_updated.length;

     document.getElementById("surgery_remain_text").innerHTML = surgery_updated_count; 
     document.getElementById("color_Surgery").style.color='black'

    }
  };
  myRequest_surgery.open("GET", "surgery.json", true);
  myRequest_surgery.send();
}


function bring_Biochemistry() {
  let myRequest_Biochemistry = new XMLHttpRequest();
  myRequest_Biochemistry.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    Biochemistry_questions = JSON.parse(this.responseText);
    Biochemistry_questions = uniqueByKeepLast(Biochemistry_questions, it=> it.title);
    Biochemistry_count = Biochemistry_questions.length;

    Biochemistry_updated = Biochemistry_questions;
    Biochemistry_updated_count=Biochemistry_updated.length;

    document.getElementById("biochemistry_remain_text").innerHTML = Biochemistry_updated_count; 
    document.getElementById("color_Biochemistry").style.color='black'

    }
  };
  myRequest_Biochemistry.open("GET", "biochemistry.json", true);
  myRequest_Biochemistry.send();
}

function bring_Biostat(){
  let myRequest_Biostat = new XMLHttpRequest();
  myRequest_Biostat.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    biostat_questions = JSON.parse(this.responseText);
    biostat_questions = uniqueByKeepLast(biostat_questions, it=> it.title);
    biostat_count = biostat_questions.length;

    biostat_updated = biostat_questions;
    biostat_updated_count=biostat_updated.length;

    document.getElementById("biostat_remain_text").innerHTML = biostat_updated_count; 
    document.getElementById("color_Biostatsitics").style.color='black'

    }
  };
  myRequest_Biostat.open("GET", "Biostatsitics.json", true);
  myRequest_Biostat.send();
}


function bring_Embryology() {
  let myRequest_embryology = new XMLHttpRequest();
  myRequest_embryology.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    embryology_questions = JSON.parse(this.responseText);
    embryology_questions = uniqueByKeepLast(embryology_questions, it=> it.title);
    embryology_count = embryology_questions.length;

    embryology_updated = embryology_questions;
    embryology_updated_count=embryology_updated.length;

    document.getElementById("embryology_remain_text").innerHTML = embryology_updated_count; 
    document.getElementById("color_Embryology").style.color='black'

    }
  };
  myRequest_embryology.open("GET", "embryology.json", true);
  myRequest_embryology.send();
}

function bring_Genetics() {
  let myRequest_Genetics = new XMLHttpRequest();
  myRequest_Genetics.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    Genetics_questions = JSON.parse(this.responseText);
    Genetics_questions = uniqueByKeepLast(Genetics_questions, it=> it.title);
    Genetics_count = Genetics_questions.length;

    Genetics_updated = Genetics_questions;
    Genetics_updated_count=Genetics_updated.length;

    document.getElementById("genetics_remain_text").innerHTML = Genetics_updated_count; 
    document.getElementById("color_Genetics").style.color='black'

    }
  };
  myRequest_Genetics.open("GET", "genetics.json", true);
  myRequest_Genetics.send();
}

function bring_Histology() {
  let myRequest_Histology = new XMLHttpRequest();
  myRequest_Histology.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    Histology_questions = JSON.parse(this.responseText);
    Histology_questions = uniqueByKeepLast(Histology_questions, it=> it.title);
    Histology_count = Histology_questions.length;

    Histology_updated = Histology_questions;
    Histology_updated_count=Histology_updated.length;

    document.getElementById("histology_remain_text").innerHTML = Histology_updated_count; 
    document.getElementById("color_Histology").style.color='black'

    }
  };
  myRequest_Histology.open("GET", "histology.json", true);
  myRequest_Histology.send();
}



function bring_Immunology() {
  let myRequest_Immunology = new XMLHttpRequest();
  myRequest_Immunology.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    Immunology_questions = JSON.parse(this.responseText);
    Immunology_questions = uniqueByKeepLast(Immunology_questions, it=> it.title);
    Immunology_count = Immunology_questions.length;

    Immunology_updated = Immunology_questions;
    Immunology_updated_count=Immunology_updated.length;

    document.getElementById("immunology_remain_text").innerHTML = Immunology_updated_count; 
    document.getElementById("color_Immunology").style.color='black'
    }
  };
  myRequest_Immunology.open("GET", "Immunology.json", true);
  myRequest_Immunology.send();
}



function bring_Microbiology() {
  let myRequest_Microbiology= new XMLHttpRequest();
  myRequest_Microbiology.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    Microbiology_questions = JSON.parse(this.responseText);
    Microbiology_questions = uniqueByKeepLast(Microbiology_questions, it=> it.title);
    Microbiology_count = Microbiology_questions.length;

    Microbiology_updated = Microbiology_questions;
    Microbiology_updated_count=Microbiology_updated.length;

    document.getElementById("microbiology_remain_text").innerHTML = Microbiology_updated_count; 
    document.getElementById("color_Microbiology").style.color='black'
    }
  };
  myRequest_Microbiology.open("GET", "Microbiology.json", true);
  myRequest_Microbiology.send();
}




function bring_Pathology() {
  let myRequest_Pathology= new XMLHttpRequest();
  myRequest_Pathology.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    Pathology_questions = JSON.parse(this.responseText);
    Pathology_questions = uniqueByKeepLast(Pathology_questions, it=> it.title);
    Pathology_count = Pathology_questions.length;

    Pathology_updated = Pathology_questions;
    Pathology_updated_count=Pathology_updated.length;

    document.getElementById("pathology_remain_text").innerHTML = Pathology_updated_count; 
    document.getElementById("color_Pathology").style.color='black'
    }
  };
  myRequest_Pathology.open("GET", "Pathology.json", true);
  myRequest_Pathology.send();
}




function bring_Pathophysiology() {
  let myRequest_Pathophysiology= new XMLHttpRequest();
  myRequest_Pathophysiology.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    Pathophysiology_questions = JSON.parse(this.responseText);
    Pathophysiology_questions = uniqueByKeepLast(Pathophysiology_questions, it=> it.title);
    Pathophysiology_count = Pathophysiology_questions.length;

    Pathophysiology_updated = Pathophysiology_questions;
    Pathophysiology_updated_count=Pathophysiology_updated.length;

    document.getElementById("pathophysiology_remain_text").innerHTML = Pathophysiology_updated_count; 
    document.getElementById("color_Pathophysiology").style.color='black'
    }
  };
  myRequest_Pathophysiology.open("GET", "Pathophysiology.json", true);
  myRequest_Pathophysiology.send();
}



function bring_Pharmacology() {
  let myRequest_Pharmacology= new XMLHttpRequest();
  myRequest_Pharmacology.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    Pharmacology_questions = JSON.parse(this.responseText);
    Pharmacology_questions = uniqueByKeepLast(Pharmacology_questions, it=> it.title);
    Pharmacology_count = Pharmacology_questions.length;

    Pharmacology_updated = Pharmacology_questions;
    Pharmacology_updated_count=Pharmacology_updated.length;

    document.getElementById("pharmacology_remain_text").innerHTML = Pharmacology_updated_count; 
    document.getElementById("color_Pharmacology").style.color='black'
    }
  };
  myRequest_Pharmacology.open("GET", "Pharmacology.json", true);
  myRequest_Pharmacology.send();
}




function bring_Physiology() {
  let myRequest_Physiology= new XMLHttpRequest();
  myRequest_Physiology.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
    Physiology_questions = JSON.parse(this.responseText);
    Physiology_questions = uniqueByKeepLast(Physiology_questions, it=> it.title);
    Physiology_count = Physiology_questions.length;

    Physiology_updated = Physiology_questions;
    Physiology_updated_count=Physiology_updated.length;

    document.getElementById("physiology_remain_text").innerHTML = Physiology_updated_count; 
    document.getElementById("color_Physiology").style.color='black'
    }
  };
  myRequest_Physiology.open("GET", "Physiology.json", true);
  myRequest_Physiology.send();
}




function addQuestionData(obj, count) {
  if (currentIndex < count) { 
  // Create H2 Question Title
  let questionTitle = document.createElement("h2");
  questionTitle.id=`textToHighlight`;

  // Create Question Text
  let questionText = document.createTextNode(obj["title"]);
  questionText.id=`textToHighlight`;

  
  //let questionImage_1 = document.createElement(obj["image_1"]);
  let questionText_2 = document.createTextNode(obj["title_2"]);
  //  var headerCell = document.createElement("TH");
  //  headerCell.innerHTML = obj["image_1"];


    let img = document.createElement("IMG");
    img.src = obj["image_1"] ;
    
    let imageDiv = document.createElement("div");
    imageDiv.className=`imageDivision`;
    imageDiv.appendChild(img);

    let audioButton = document.createElement("button");
    audioButton.innerText="audio";
    audioButton.class=`audio`;

    audioButton.onclick = () => {
      let audio=new Audio(obj["audio"]);
      audio.play();
    };


  //questionTitle.appendChild(questionText);

//
//
let title_array = (obj[`title`]).split("$");
for(let n=0;(title_array[n]!=undefined);n++){
let title_new= (title_array[n]).split('#');
for (m=0;title_new[m]!=undefined;m++){
if (m%2==1){
let DoBoldDiv = document.createElement("div");
DoBoldDiv.className = `DoBold`;
DoBoldDiv.append(title_new[m]);
questionTitle.appendChild(DoBoldDiv);
}else{
if (title_array[n+1]==undefined){
}
questionTitle.append(title_new[m]);
}
 }

 questionTitle.appendChild(document.createElement("br"));
 questionTitle.appendChild(document.createElement("br"));
}

////
//
 



   if (obj["audio"]!="") { questionTitle.appendChild(audioButton);   }
   questionTitle.appendChild(imageDiv);
   questionTitle.appendChild(questionText_2);


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

   
    // Append The H2 To The Quiz Area
    quizArea.appendChild(questionTitle);





    let   comparisonDiv = document.createElement("div");
    comparisonDiv.className = `comparison`;
    let comparison_question = document.createTextNode(obj["comparison_items"]);
    comparisonDiv.appendChild(comparison_question);
    answersArea.appendChild(comparisonDiv);


//
//





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


      let ansImage = document.createElement("IMG");
      ansImage.src = obj[`ansImg_${i}`] ;
      
      let ansImageDiv = document.createElement("div");
      ansImageDiv.className=`ansImageDiv`;
      ansImageDiv.appendChild(ansImage);
  

      document.getElementById("id_question").innerHTML=" Question ID :  "+(obj[`id`]);


      // Add The Text To Label
      theLabel.appendChild(theLabelText);
     
      theLabel.append(ansImageDiv);

      // Add Input + Label To Main Div
      mainDiv.appendChild(radioInput);
      mainDiv.appendChild(theLabel);

      // Append All Divs To Answers Area
      answersArea.appendChild(mainDiv);

    }
/*
     document.addEventListener("selectionchange",()=>{
     questionText=questionText.replace(window.getSelection().toString(),(match)=>{
      match.color="yellow";
      return match;
     })
      questionTitle.appendChild(questionText);
     quizArea.appendChild(questionTitle);
    });
*/
  }
}


function addQuestionData_2(obj, count) {
  quizApp.style.display='block';
  quizArea.style.display='block';
  answersArea.style.display='block';
  bullets.style.display='block';
//extra
  startButton.style.display = 'block';
  chooseQuestionsClass.style.display= 'block';
// end of extra
  questionButtonsContainer.style.display = 'none';

  if (currentIndex < count) { 
    document.getElementById(`review_${currentIndex+1}`).style.backgroundColor="#2e4aad"; ;

    let questionTitle = document.createElement("h2");
    let questionText = document.createTextNode(obj["title"]);
    let questionText_2 = document.createTextNode(obj["title_2"]);


    //
    //
    //

    //
    //
    //
    let img = document.createElement("IMG");
    img.src = obj["image_1"] ;

    let   imageDiv = document.createElement("div");
    imageDiv.className=`imageDivision`;
    imageDiv.appendChild(img);

    let audioButton = document.createElement("button");
    audioButton.innerText="audio";
    audioButton.class=`audio`;
    audioButton.onclick = () => {
    let audio=new Audio(obj["audio"]);
    audio.play();
    };

  //  questionTitle.appendChild(questionText);
    //
    //
    let title_array = (obj[`title`]).split("$");
    for(let n=0;(title_array[n]!=undefined);n++){
    let title_new= (title_array[n]).split('#');
    for (m=0;title_new[m]!=undefined;m++){
    if (m%2==1){
    let DoBoldDiv = document.createElement("div");
    DoBoldDiv.className = `DoBold`;
    DoBoldDiv.append(title_new[m]);
    questionTitle.appendChild(DoBoldDiv);
    }else{
    if (title_array[n+1]==undefined){
    }
    questionTitle.append(title_new[m]);
    }
     }
     questionTitle.appendChild(document.createElement("br"));
     questionTitle.appendChild(document.createElement("br"));
    }
    //
    //
    //
    if (obj["audio"]!="") { questionTitle.appendChild(audioButton);   }
    questionTitle.appendChild(imageDiv);
    questionTitle.appendChild(questionText_2);

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

  let comparisonDiv = document.createElement("div");
  comparisonDiv.className = `comparison`;
  let comparison_question = document.createTextNode(obj["comparison_items"]);
  comparisonDiv.appendChild(comparison_question);
  answersArea.appendChild(comparisonDiv);

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
    theLabel.appendChild(theLabelText);
    theLabel.appendChild(theLabelPercent);

    theLabel.append(ansImageDiv);


    mainDiv.appendChild(radioInput);
    mainDiv.appendChild(theLabel);
    answersArea.appendChild(mainDiv);
    }

  

    let explanationTiltle = document.createElement("h2");
    explanationTiltle.className=`explanation_title`;
    let explanation_text1 = document.createTextNode(obj["explanation_1"]);
   // explanation_text1.className=`explanation_text1`;
    let explanation_text2 = document.createTextNode(obj["explanation_2"]);
    let myArray = (obj["explanation_2"]).split("$");
    console.log(myArray);
    let explanation_text3 = document.createTextNode(obj["explanation_3"]);

   // explanation_text2.className=`explanation_text2`;

    let img_explanation = document.createElement("IMG");
    img_explanation.src = obj["explanation_img"] ;
    let imageDiv_explanation = document.createElement("div");
    imageDiv_explanation.className=`imageDivision_explanation`;

    imageDiv_explanation.appendChild(img_explanation);

    explanationTiltle.append("Explanation:")
    explanationTiltle.appendChild(document.createElement("br"));

    explanationTiltle.appendChild(explanation_text1);
    explanationTiltle.appendChild(imageDiv_explanation);
//
//
//

for(let n=0;(myArray[n]!=undefined);n++){
  myArray[n]=(myArray[n]).replace("(Choice A)",(match) => {
  let newDiv = document.createElement("div");
  newDiv.className = `match`;
  newDiv.append(match);
  explanationTiltle.appendChild(newDiv);
    return "";
  });

  myArray[n]=(myArray[n]).replace("(Choice B)",(match) => {
    let newDiv = document.createElement("div");
    newDiv.className = `match`;
    newDiv.append(match);
    explanationTiltle.appendChild(newDiv);
    return "";
    });

    myArray[n]=(myArray[n]).replace("(Choice C)",(match) => {
    let newDiv = document.createElement("div");
    newDiv.className = `match`;
    newDiv.append(match);
    explanationTiltle.appendChild(newDiv);
    return "";
    });

    myArray[n]=(myArray[n]).replace("(Choice D)",(match) => {
    let newDiv = document.createElement("div");
    newDiv.className = `match`;
    newDiv.append(match);
    explanationTiltle.appendChild(newDiv);
    return "";
    });

   myArray[n]=(myArray[n]).replace("(Choice E)",(match) => {
   let newDiv = document.createElement("div");
   newDiv.className = `match`;
   newDiv.append(match);
   explanationTiltle.appendChild(newDiv);
   return "";
  });

  myArray[n]=(myArray[n]).replace("(Choice F)",(match) => {
  let newDiv = document.createElement("div");
  newDiv.className = `match`;
  newDiv.append(match);
  explanationTiltle.appendChild(newDiv);
  return "";
  });

  myArray[n]=(myArray[n]).replace("(Choice G)",(match) => {
  let newDiv = document.createElement("div");
  newDiv.className = `match`;
  newDiv.append(match);
  explanationTiltle.appendChild(newDiv);
  return "";
    });

  myArray[n]=(myArray[n]).replace("(Choice H)",(match) => {
  let newDiv = document.createElement("div");
  newDiv.className = `match`;
  newDiv.append(match);
  explanationTiltle.appendChild(newDiv);
  return "";
   });

  myArray[n]=(myArray[n]).replace("(Choice I)",(match) => {
  let newDiv = document.createElement("div");
  newDiv.className = `match`;
  newDiv.append(match);
  explanationTiltle.appendChild(newDiv);
   return "";
  });

  myArray[n]=(myArray[n]).replace("(Choice J)",(match) => {
  let newDiv = document.createElement("div");
  newDiv.className = `match`;
  newDiv.append(match);
  explanationTiltle.appendChild(newDiv);
   return "";
   });

  myArray[n]=(myArray[n]).replace("(Choice K)",(match) => {
  let newDiv = document.createElement("div");
  newDiv.className = `match`;
  newDiv.append(match);
   explanationTiltle.appendChild(newDiv);
     return "";
    });

    myArray[n]=(myArray[n]).replace("(Choice L)",(match) => {
    let newDiv = document.createElement("div");
    newDiv.className = `match`;
    newDiv.append(match);
    explanationTiltle.appendChild(newDiv);
    return "";
    });

   myArray[n]=(myArray[n]).replace("(Choice M)",(match) => {
   let newDiv = document.createElement("div");
   newDiv.className = `match`;
   newDiv.append(match);
   explanationTiltle.appendChild(newDiv);
   return "";
   });

  myArray[n]=(myArray[n]).replace("Educational Objectives",(apple) => {
   let objDiv = document.createElement("div");
   objDiv.className = `objective`;
   objDiv.append(apple);
   explanationTiltle.appendChild(objDiv);
   return "";
 });

 myArray[n]=(myArray[n]).replace("Educational Objective",(apple) => {
  let objDiv = document.createElement("div");
  objDiv.className = `objective`;
  objDiv.append(apple);
  explanationTiltle.appendChild(objDiv);
  return "";
});
myArray[n]=(myArray[n]).replace("Educational objective",(apple) => {
  let objDiv = document.createElement("div");
  objDiv.className = `objective`;
  objDiv.append(apple);
  explanationTiltle.appendChild(objDiv);
  return "";
});
myArray[n]=(myArray[n]).replace("Educational objectives",(apple) => {
  let objDiv = document.createElement("div");
  objDiv.className = `objective`;
  objDiv.append(apple);
  explanationTiltle.appendChild(objDiv);
  return "";
});

let newArray= (myArray[n]).split('#');
console.log(newArray);
for (m=0;newArray[m]!=undefined;m++){
if (m%2==1){
//console.log("hehe")
let DoBoldDiv = document.createElement("div");
DoBoldDiv.className = `DoBold`;
DoBoldDiv.append(newArray[m]);
explanationTiltle.appendChild(DoBoldDiv);
}else{ console.log("hehe")
if (myArray[n+1]==undefined){
explanationTiltle.appendChild(document.createElement("br"));
}
explanationTiltle.append(newArray[m]);
}
 }
  
explanationTiltle.appendChild(document.createElement("br"));
explanationTiltle.appendChild(document.createElement("br"));
}




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
  }}



//
//
//
//
//
//
//

  function addQuestionData_3(obj, count) {
  //  quizApp.style.display='block';
 //   quizArea.style.display='block';
    answersArea.style.display='block';
//    bullets.style.display='block';
    questionButtonsContainer.style.display = 'block';
  
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
  
      let audioButton = document.createElement("button");
      audioButton.innerText="audio";
      audioButton.class=`audio`;
      audioButton.onclick = () => {
      let audio=new Audio(obj["audio"]);
      audio.play();
      };

      //
      //
  
      //questionTitle.appendChild(questionText);
      let title_array = (obj[`title`]).split("$");
      for(let n=0;(title_array[n]!=undefined);n++){
      let title_new= (title_array[n]).split('#');
      for (m=0;title_new[m]!=undefined;m++){
      if (m%2==1){
      let DoBoldDiv = document.createElement("div");
      DoBoldDiv.className = `DoBold`;
      DoBoldDiv.append(title_new[m]);
      questionTitle.appendChild(DoBoldDiv);
      }else{
      if (title_array[n+1]==undefined){
      }
      questionTitle.append(title_new[m]);
      }
       }
      
       questionTitle.appendChild(document.createElement("br"));
       questionTitle.appendChild(document.createElement("br"));
      }
      //
      //
      if (obj["audio"]!="") { questionTitle.appendChild(audioButton);   }
      questionTitle.appendChild(imageDiv);
      questionTitle.appendChild(questionText_2);
  
  
  
  
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
  
      let comparisonDiv = document.createElement("div");
      comparisonDiv.className = `comparison`;
      let comparison_question = document.createTextNode(obj["comparison_items"]);
      comparisonDiv.appendChild(comparison_question);
      answersArea.appendChild(comparisonDiv);
  
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
      theLabel.appendChild(theLabelText);
      theLabel.appendChild(theLabelPercent);


      theLabel.append(ansImageDiv);


  
      mainDiv.appendChild(radioInput);
      mainDiv.appendChild(theLabel);
  
      answersArea.appendChild(mainDiv);
      }
  
  
  
      let explanationTiltle = document.createElement("h2");
      explanationTiltle.className=`explanation_title`;
      let explanation_text1 = document.createTextNode(obj["explanation_1"]);
     // explanation_text1.className=`explanation_text1`;
      let explanation_text2 = document.createTextNode(obj["explanation_2"]);
  
      let myArray = (obj[`explanation_2`]).split("$");
      //console.log(myArray);
      let explanation_text3 = document.createTextNode(obj["explanation_3"]);
  
     // explanation_text2.className=`explanation_text2`;
  
      let img_explanation = document.createElement("IMG");
      img_explanation.src = obj["explanation_img"] ;
      let imageDiv_explanation = document.createElement("div");
      imageDiv_explanation.className=`imageDivision_explanation`;
  
      imageDiv_explanation.appendChild(img_explanation);
  
      explanationTiltle.append("Explanation:")
      explanationTiltle.appendChild(document.createElement("br"));
  
      explanationTiltle.appendChild(explanation_text1);
      explanationTiltle.appendChild(imageDiv_explanation);
  

  for(let n=0;(myArray[n]!=undefined);n++){
    myArray[n]=(myArray[n]).replace("(Choice A)",(match) => {
    let newDiv = document.createElement("div");
    newDiv.className = `match`;
    newDiv.append(match);
    explanationTiltle.appendChild(newDiv);
      return "";
    });
  
    myArray[n]=(myArray[n]).replace("(Choice B)",(match) => {
      let newDiv = document.createElement("div");
      newDiv.className = `match`;
      newDiv.append(match);
      explanationTiltle.appendChild(newDiv);
      return "";
      });
  
      myArray[n]=(myArray[n]).replace("(Choice C)",(match) => {
      let newDiv = document.createElement("div");
      newDiv.className = `match`;
      newDiv.append(match);
      explanationTiltle.appendChild(newDiv);
      return "";
      });
  
      myArray[n]=(myArray[n]).replace("(Choice D)",(match) => {
      let newDiv = document.createElement("div");
      newDiv.className = `match`;
      newDiv.append(match);
      explanationTiltle.appendChild(newDiv);
      return "";
      });
  
     myArray[n]=(myArray[n]).replace("(Choice E)",(match) => {
     let newDiv = document.createElement("div");
     newDiv.className = `match`;
     newDiv.append(match);
     explanationTiltle.appendChild(newDiv);
     return "";
    });
  
    myArray[n]=(myArray[n]).replace("(Choice F)",(match) => {
    let newDiv = document.createElement("div");
    newDiv.className = `match`;
    newDiv.append(match);
    explanationTiltle.appendChild(newDiv);
    return "";
    });
  
    myArray[n]=(myArray[n]).replace("(Choice G)",(match) => {
    let newDiv = document.createElement("div");
    newDiv.className = `match`;
    newDiv.append(match);
    explanationTiltle.appendChild(newDiv);
    return "";
      });
  
    myArray[n]=(myArray[n]).replace("(Choice H)",(match) => {
    let newDiv = document.createElement("div");
    newDiv.className = `match`;
    newDiv.append(match);
    explanationTiltle.appendChild(newDiv);
    return "";
     });
  
    myArray[n]=(myArray[n]).replace("(Choice I)",(match) => {
    let newDiv = document.createElement("div");
    newDiv.className = `match`;
    newDiv.append(match);
    explanationTiltle.appendChild(newDiv);
     return "";
    });
  
    myArray[n]=(myArray[n]).replace("(Choice J)",(match) => {
    let newDiv = document.createElement("div");
    newDiv.className = `match`;
    newDiv.append(match);
    explanationTiltle.appendChild(newDiv);
     return "";
     });
  
    myArray[n]=(myArray[n]).replace("(Choice K)",(match) => {
    let newDiv = document.createElement("div");
    newDiv.className = `match`;
    newDiv.append(match);
     explanationTiltle.appendChild(newDiv);
       return "";
      });
  
      myArray[n]=(myArray[n]).replace("(Choice L)",(match) => {
      let newDiv = document.createElement("div");
      newDiv.className = `match`;
      newDiv.append(match);
      explanationTiltle.appendChild(newDiv);
      return "";
      });
  
     myArray[n]=(myArray[n]).replace("(Choice M)",(match) => {
     let newDiv = document.createElement("div");
     newDiv.className = `match`;
     newDiv.append(match);
     explanationTiltle.appendChild(newDiv);
     return "";
     });
  

  
   myArray[n]=(myArray[n]).replace("Educational Objectives",(apple) => {
    let objDiv = document.createElement("div");
    objDiv.className = `objective`;
    objDiv.append(apple);
    explanationTiltle.appendChild(objDiv);
    return "";
  });
 
  myArray[n]=(myArray[n]).replace("Educational Objective",(apple) => {
   let objDiv = document.createElement("div");
   objDiv.className = `objective`;
   objDiv.append(apple);
   explanationTiltle.appendChild(objDiv);
   return "";
 });
 myArray[n]=(myArray[n]).replace("Educational objective",(apple) => {
   let objDiv = document.createElement("div");
   objDiv.className = `objective`;
   objDiv.append(apple);
   explanationTiltle.appendChild(objDiv);
   return "";
 });
 myArray[n]=(myArray[n]).replace("Educational objectives",(apple) => {
   let objDiv = document.createElement("div");
   objDiv.className = `objective`;
   objDiv.append(apple);
   explanationTiltle.appendChild(objDiv);
   return "";
 });



  let newArray= (myArray[n]).split('#');
  for (m=0;newArray[m]!=undefined;m++){
  if (m%2==1){
  let DoBoldDiv = document.createElement("div");
  DoBoldDiv.className = `DoBold`;
  DoBoldDiv.append(newArray[m]);
  explanationTiltle.appendChild(DoBoldDiv);
  }else{
  if (myArray[n+1]==undefined){
  explanationTiltle.appendChild(document.createElement("br"));
  }
  explanationTiltle.append(newArray[m]);
  }
   }
    
  explanationTiltle.appendChild(document.createElement("br"));
  explanationTiltle.appendChild(document.createElement("br"));
  }


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
    }}
  
  

 
//
//
//
//
//
//




      // THIS FUNCTION REMOVES DUPLICATES BY CHECKING TITLE ONLY
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


function checkAnswer(rAnswer, count) {
   answers = document.getElementsByName("question");
  let theChoosenAnswer="";


  // color blue the question box if any answer is chosen.
  //
  let b=false;
  for (let i = 0; i < answers.length; i++) {
    b=b||(answers[i].checked) 
      }
      if (b==true){document.getElementById(`${currentIndex}`).style.backgroundColor= "#2e4aad"; }

      //--==-=====================================================================================================================================================================================================================================------------------------------------------
        
     /*
      let common_marked=[];
      for (let i = 0; i < all_marked.length; i++) {
           if (String(all_marked[i]['title']) == String(FINAL_ARRAY[currentIndex]['title'])) {
             common_marked.push(FINAL_ARRAY[currentIndex]);
         }}
*/


if(flag_checkbox.checked){
   document.getElementById(`status_${currentIndex}`).textContent = `*`;
  /*
      if (common_marked.length == 0){  
              all_marked.push(FINAL_ARRAY[currentIndex]);}
*/
all_marked.push(FINAL_ARRAY[currentIndex-1]);
//all_marked = uniqueByKeepLast(all_marked, it=> it.title);
    }else{
 document.getElementById(`status_${currentIndex}`).textContent = "";
//let array=FINAL_ARRAY[currentIndex];
 //all_marked.filter(item => !array.includes(item));
// all_marked = subtractArrays(all_marked, array);
 /* 

      if (common_marked.length != 0){       
      all_marked=arrayDiffByKey('title', all_marked, FINAL_ARRAY[currentIndex]);
    
      } 
*/      
}

//console.log(all_marked);


//==========================================================================================================================================================

flag_checkbox.checked=false;




  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
    theChoosenAnswer = answers[i].dataset.answer;
    chosen_Answers[currentIndex]=i;
    chosen_Answers_string[currentIndex]=theChoosenAnswer;
    }
  }

  if (theChoosenAnswer==""){
    chosen_Answers.push(100);
    chosen_Answers_string[currentIndex]="not answered";
  }

  // hdol 3l fadi
  if (rAnswer === theChoosenAnswer) {
    rightAnswers++;
  }


}



function checkAnswer_withoutScoring(rAnswer, count) {
  answers = document.getElementsByName("question");
  let theChoosenAnswer="";
// color blue the question box if any answer is chosen.
  let b=false;
 for (let i = 0; i < answers.length; i++) {
   b=b||(answers[i].checked) 
     }
     if (b==true){document.getElementById(`${currentIndex}`).style.backgroundColor= "#2e4aad"; }

if(flag_checkbox.checked){
document.getElementById(`status_${currentIndex}`).textContent = `*`;
//all_marked.push(FINAL_ARRAY[currentIndex-1]);
   }else{
document.getElementById(`status_${currentIndex}`).textContent = "";  
}
//==========================================================================================================================================================
flag_checkbox.checked=false;
 for (let i = 0; i < answers.length; i++) {
   if (answers[i].checked) {
   theChoosenAnswer = answers[i].dataset.answer;
   }
 }
}



// lgheto hada
function showResults(count) {
 
  let theResults;
  if (currentIndex === count) {
      

    quizArea.remove();
    answersArea.remove();
    nextButton.remove();
    bullets.remove();

    if (rightAnswers > count / 2 && rightAnswers < count) {
      theResults = `<span class="good">Good</span>, ${rightAnswers} From ${count}`;
    } else if (rightAnswers === count) {
      theResults = `<span class="perfect">Perfect</span>, All Answers Is Good`;
    } else {
      theResults = `<span class="bad">Wa7sh</span>, ${rightAnswers} From ${count}`;
    }

    resultsContainer.innerHTML = theResults;
    resultsContainer.style.padding = "10px";
    resultsContainer.style.backgroundColor = "white";
    resultsContainer.style.marginTop = "10px";
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

      countdownElement.innerHTML ="time remaining"+" "+`${minutes}:${seconds}`;

      if (--duration < 0) {
        clearInterval(countdownInterval);
        
        //finishExamButton.click();
        
        Finish();
      }
    }, 1000);
  }
}



function AllSubjects(){
    if(document.getElementById("AllSubjects").checked){
        makeZeros();
  document.getElementById("Medicine").checked = true;
  document.getElementById("Surgery").checked = true;
  document.getElementById("Biochemistry").checked = true;
  document.getElementById("Biostatsitics").checked = true;
  document.getElementById("Embryology").checked = true;
  document.getElementById("Genetics").checked = true;
  document.getElementById("Histology").checked = true;
  document.getElementById("Immunology").checked = true;
  document.getElementById("Microbiology").checked = true;
  document.getElementById("Pathology").checked = true;
  document.getElementById("Pathophysiology").checked = true;
  document.getElementById("Pharmacology").checked = true;
  document.getElementById("Physiology").checked = true;

  document.getElementById("AllSubjects_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);

}else{
    document.getElementById("Medicine").checked = false;
    document.getElementById("Surgery").checked = false;
    document.getElementById("Biochemistry").checked = false;
    document.getElementById("Biostatsitics").checked = false;
    document.getElementById("Embryology").checked = false;
    document.getElementById("Genetics").checked = false;
    document.getElementById("Histology").checked = false;
    document.getElementById("Immunology").checked = false;
    document.getElementById("Microbiology").checked = false;
    document.getElementById("Pathology").checked = false;
    document.getElementById("Pathophysiology").checked = false;
    document.getElementById("Pharmacology").checked = false;
    document.getElementById("Physiology").checked = false;


  }

  shownumber_medicine();
  shownumber_surgery();
  shownumber_biochem();
  shownumber_biostat();
  shownumber_embryology();
  shownumber_genetics();
  shownumber_histology();
  shownumber_immunology();
  shownumber_microbiology();
  shownumber_pathology();
  shownumber_Pathophysiology();
  shownumber_pharmacology();
  shownumber_physiology();


  // those inculde updateTest function
}



function shownumber_medicine() {
    if (document.getElementById("unused").checked){
    if(document.getElementById("Medicine").checked){
  subject_array=subject_array.concat(medicine_updated);

  for (let i = 0; i <  medicine_updated.length; i++) {
    for (let j = 0; j <respiratory_updated.length; j++) {
       if (medicine_updated[i].title == respiratory_updated[j].title) {
       mix_respiratory.push(medicine_updated[i]);
     }
 }}

for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <cardiovascular_updated.length; j++) {
     if (medicine_updated[i].title == cardiovascular_updated[j].title) {
     mix_cardiovascular.push(medicine_updated[i]);
   }
}
}

for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <renal_updated.length; j++) {
     if (medicine_updated[i].title == renal_updated[j].title) {
     mix_renal.push(medicine_updated[i]);
   }
}}


for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (medicine_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(medicine_updated[i]);
   }
}}


for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (medicine_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(medicine_updated[i]);
   }
}}


for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (medicine_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(medicine_updated[i]);
   }
}}


for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (medicine_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(medicine_updated[i]);
   }
}}
 

for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (medicine_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(medicine_updated[i]);
   }
}}


for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (medicine_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(medicine_updated[i]);
   }
}}

for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (medicine_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(medicine_updated[i]);
   }
}}


for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (medicine_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(medicine_updated[i]);
   }
}}

for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (medicine_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(medicine_updated[i]);
   }
}}

for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (medicine_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(medicine_updated[i]);
   }
}}


for (let i = 0; i <  medicine_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (medicine_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(medicine_updated[i]);
   }
}}


}else{
makeZeros();
   if (document.getElementById("Surgery").checked){ shownumber_surgery();}
   if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
   if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
   if (document.getElementById("Embryology").checked){ shownumber_embryology();}
   if (document.getElementById("Genetics").checked){ shownumber_genetics();}
   if (document.getElementById("Histology").checked){ shownumber_histology();}
   if (document.getElementById("Immunology").checked){ shownumber_immunology();}
   if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
   if (document.getElementById("Pathology").checked){ shownumber_pathology();}
   if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
   if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
   if (document.getElementById("Physiology").checked){ shownumber_physiology();}



}
update_texts();

//
}else if (document.getElementById("all-mode").checked){

  
  if(document.getElementById("Medicine").checked){
    subject_array=subject_array.concat(medicine_questions);
  
    for (let i = 0; i <  medicine_questions.length; i++) {
      for (let j = 0; j <respiratory_questions.length; j++) {
         if (medicine_questions[i].title == respiratory_questions[j].title) {
         mix_respiratory.push(medicine_questions[i]);
       }
   }}
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <cardiovascular_questions.length; j++) {
       if (medicine_questions[i].title == cardiovascular_questions[j].title) {
       mix_cardiovascular.push(medicine_questions[i]);
     }
  }
  }
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <renal_questions.length; j++) {
       if (medicine_questions[i].title == renal_questions[j].title) {
       mix_renal.push(medicine_questions[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <allergy_questions.length; j++) {
       if (medicine_questions[i].title == allergy_questions[j].title) {
       mix_Allergy.push(medicine_questions[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <dermatology_questions.length; j++) {
       if (medicine_questions[i].title == dermatology_questions[j].title) {
       mix_dermatology.push(medicine_questions[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <gastrointestinal_questions.length; j++) {
       if (medicine_questions[i].title == gastrointestinal_questions[j].title) {
       mix_gastrointestinal.push(medicine_questions[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <hematology_questions.length; j++) {
       if (medicine_questions[i].title == hematology_questions[j].title) {
       mix_hematology.push(medicine_questions[i]);
     }
  }}
   
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <neuro_questions.length; j++) {
       if (medicine_questions[i].title == neuro_questions[j].title) {
       mix_neuro.push(medicine_questions[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <rheumatology_questions.length; j++) {
       if (medicine_questions[i].title == rheumatology_questions[j].title) {
       mix_Rheumatology.push(medicine_questions[i]);
     }
  }}
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <infectious_questions.length; j++) {
       if (medicine_questions[i].title == infectious_questions[j].title) {
       mix_infectious.push(medicine_questions[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <endocrine_questions.length; j++) {
       if (medicine_questions[i].title == endocrine_questions[j].title) {
       mix_endocrine.push(medicine_questions[i]);
     }
  }}
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <reproductive_F_questions.length; j++) {
       if (medicine_questions[i].title == reproductive_F_questions[j].title) {
       mix_reproductive_F.push(medicine_questions[i]);
     }
  }}
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <reproductive_M_questions.length; j++) {
       if (medicine_questions[i].title == reproductive_M_questions[j].title) {
       mix_reproductive_M.push(medicine_questions[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_questions.length; i++) {
    for (let j = 0; j <pregnancy_questions.length; j++) {
       if (medicine_questions[i].title == pregnancy_questions[j].title) {
       mix_pregnancy.push(medicine_questions[i]);
     }
  }}
  
  
  }else{
  makeZeros();
     if (document.getElementById("Surgery").checked){ shownumber_surgery();}
     if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
     if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
     if (document.getElementById("Embryology").checked){ shownumber_embryology();}
     if (document.getElementById("Genetics").checked){ shownumber_genetics();}
     if (document.getElementById("Histology").checked){ shownumber_histology();}
     if (document.getElementById("Immunology").checked){ shownumber_immunology();}
     if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
     if (document.getElementById("Pathology").checked){ shownumber_pathology();}
     if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
     if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
     if (document.getElementById("Physiology").checked){ shownumber_physiology();}
  
  
  
  }
  update_texts_all_mode();



}else if (document.getElementById("incorrect").checked){

  
  if(document.getElementById("Medicine").checked){
    subject_array=subject_array.concat(medicine_incorrect);
  
    for (let i = 0; i <  medicine_incorrect.length; i++) {
      for (let j = 0; j <respiratory_incorrect.length; j++) {
         if (medicine_incorrect[i].title == respiratory_incorrect[j].title) {
         mix_respiratory.push(medicine_incorrect[i]);
       }
   }}
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <cardiovascular_incorrect.length; j++) {
       if (medicine_incorrect[i].title == cardiovascular_incorrect[j].title) {
       mix_cardiovascular.push(medicine_incorrect[i]);
     }
  }
  }
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <renal_incorrect.length; j++) {
       if (medicine_incorrect[i].title == renal_incorrect[j].title) {
       mix_renal.push(medicine_incorrect[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <allergy_incorrect.length; j++) {
       if (medicine_incorrect[i].title == allergy_incorrect[j].title) {
       mix_Allergy.push(medicine_incorrect[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <dermatology_incorrect.length; j++) {
       if (medicine_incorrect[i].title == dermatology_incorrect[j].title) {
       mix_dermatology.push(medicine_incorrect[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
       if (medicine_incorrect[i].title == gastrointestinal_incorrect[j].title) {
       mix_gastrointestinal.push(medicine_incorrect[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <hematology_incorrect.length; j++) {
       if (medicine_incorrect[i].title == hematology_incorrect[j].title) {
       mix_hematology.push(medicine_incorrect[i]);
     }
  }}
   
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <neuro_incorrect.length; j++) {
       if (medicine_incorrect[i].title == neuro_incorrect[j].title) {
       mix_neuro.push(medicine_incorrect[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <rheumatology_incorrect.length; j++) {
       if (medicine_incorrect[i].title == rheumatology_incorrect[j].title) {
       mix_Rheumatology.push(medicine_incorrect[i]);
     }
  }}
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <infectious_incorrect.length; j++) {
       if (medicine_incorrect[i].title == infectious_incorrect[j].title) {
       mix_infectious.push(medicine_incorrect[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <endocrine_incorrect.length; j++) {
       if (medicine_incorrect[i].title == endocrine_incorrect[j].title) {
       mix_endocrine.push(medicine_incorrect[i]);
     }
  }}
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <reproductive_F_incorrect.length; j++) {
       if (medicine_incorrect[i].title == reproductive_F_incorrect[j].title) {
       mix_reproductive_F.push(medicine_incorrect[i]);
     }
  }}
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <reproductive_M_incorrect.length; j++) {
       if (medicine_incorrect[i].title == reproductive_M_incorrect[j].title) {
       mix_reproductive_M.push(medicine_incorrect[i]);
     }
  }}
  
  
  for (let i = 0; i <  medicine_incorrect.length; i++) {
    for (let j = 0; j <pregnancy_incorrect.length; j++) {
       if (medicine_incorrect[i].title == pregnancy_incorrect[j].title) {
       mix_pregnancy.push(medicine_incorrect[i]);
     }
  }}
  
  
  }else{
  makeZeros();
     if (document.getElementById("Surgery").checked){ shownumber_surgery();}
     if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
     if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
     if (document.getElementById("Embryology").checked){ shownumber_embryology();}
     if (document.getElementById("Genetics").checked){ shownumber_genetics();}
     if (document.getElementById("Histology").checked){ shownumber_histology();}
     if (document.getElementById("Immunology").checked){ shownumber_immunology();}
     if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
     if (document.getElementById("Pathology").checked){ shownumber_pathology();}
     if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
     if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
     if (document.getElementById("Physiology").checked){ shownumber_physiology();}
  
  
  
  }
  update_texts_incorrect();



} else if (document.getElementById("marked").checked){
  if(document.getElementById("Medicine").checked){
subject_array=subject_array.concat(medicine_marked);

for (let i = 0; i <  medicine_marked.length; i++) {
  for (let j = 0; j <respiratory_marked.length; j++) {
     if (medicine_marked[i].title == respiratory_marked[j].title) {
     mix_respiratory.push(medicine_marked[i]);
   }
}}

for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <cardiovascular_marked.length; j++) {
   if (medicine_marked[i].title == cardiovascular_marked[j].title) {
   mix_cardiovascular.push(medicine_marked[i]);
 }
}
}

for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <renal_marked.length; j++) {
   if (medicine_marked[i].title == renal_marked[j].title) {
   mix_renal.push(medicine_marked[i]);
 }
}}


for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <allergy_marked.length; j++) {
   if (medicine_marked[i].title == allergy_marked[j].title) {
   mix_Allergy.push(medicine_marked[i]);
 }
}}


for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <dermatology_marked.length; j++) {
   if (medicine_marked[i].title == dermatology_marked[j].title) {
   mix_dermatology.push(medicine_marked[i]);
 }
}}


for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <gastrointestinal_marked.length; j++) {
   if (medicine_marked[i].title == gastrointestinal_marked[j].title) {
   mix_gastrointestinal.push(medicine_marked[i]);
 }
}}


for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <hematology_marked.length; j++) {
   if (medicine_marked[i].title == hematology_marked[j].title) {
   mix_hematology.push(medicine_marked[i]);
 }
}}


for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <neuro_marked.length; j++) {
   if (medicine_marked[i].title == neuro_marked[j].title) {
   mix_neuro.push(medicine_marked[i]);
 }
}}


for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <rheumatology_marked.length; j++) {
   if (medicine_marked[i].title == rheumatology_marked[j].title) {
   mix_Rheumatology.push(medicine_marked[i]);
 }
}}

for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <infectious_marked.length; j++) {
   if (medicine_marked[i].title == infectious_marked[j].title) {
   mix_infectious.push(medicine_marked[i]);
 }
}}


for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <endocrine_marked.length; j++) {
   if (medicine_marked[i].title == endocrine_marked[j].title) {
   mix_endocrine.push(medicine_marked[i]);
 }
}}

for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <reproductive_F_marked.length; j++) {
   if (medicine_marked[i].title == reproductive_F_marked[j].title) {
   mix_reproductive_F.push(medicine_marked[i]);
 }
}}

for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <reproductive_M_marked.length; j++) {
   if (medicine_marked[i].title == reproductive_M_marked[j].title) {
   mix_reproductive_M.push(medicine_marked[i]);
 }
}}


for (let i = 0; i <  medicine_marked.length; i++) {
for (let j = 0; j <pregnancy_marked.length; j++) {
   if (medicine_marked[i].title == pregnancy_marked[j].title) {
   mix_pregnancy.push(medicine_marked[i]);
 }
}}


}else{
makeZeros();
 if (document.getElementById("Surgery").checked){ shownumber_surgery();}
 if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
 if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
 if (document.getElementById("Embryology").checked){ shownumber_embryology();}
 if (document.getElementById("Genetics").checked){ shownumber_genetics();}
 if (document.getElementById("Histology").checked){ shownumber_histology();}
 if (document.getElementById("Immunology").checked){ shownumber_immunology();}
 if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
 if (document.getElementById("Pathology").checked){ shownumber_pathology();}
 if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
 if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
 if (document.getElementById("Physiology").checked){ shownumber_physiology();}



}
update_texts_marked();

//
}


}




 


function shownumber_surgery() {

    //
    if (document.getElementById("unused").checked){
      //

    if(document.getElementById("Surgery").checked){
  subject_array=subject_array.concat(surgery_updated);
  for (let i = 0; i <  surgery_updated.length; i++) {
    for (let j = 0; j <respiratory_updated.length; j++) {
       if (surgery_updated[i].title == respiratory_updated[j].title) {
       mix_respiratory.push(surgery_updated[i]);
     }
 }}
for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <cardiovascular_updated.length; j++) {
     if (surgery_updated[i].title == cardiovascular_updated[j].title) {
     mix_cardiovascular.push(surgery_updated[i]);
   }
}}
for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <renal_updated.length; j++) {
     if (surgery_updated[i].title == renal_updated[j].title) {
     mix_renal.push(surgery_updated[i]);
   }
}}

for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (surgery_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(surgery_updated[i]);
   }
}}


for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (surgery_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(surgery_updated[i]);
   }
}}


for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (surgery_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(surgery_updated[i]);
   }
}}



for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (surgery_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(surgery_updated[i]);
   }
}}


for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (surgery_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(surgery_updated[i]);
   }
}}




for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (surgery_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(surgery_updated[i]);
   }
}}


for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (surgery_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(surgery_updated[i]);
   }
}}


for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (surgery_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(surgery_updated[i]);
   }
}}

for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (surgery_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(surgery_updated[i]);
   }
}}

for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (surgery_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(surgery_updated[i]);
   }
}}

for (let i = 0; i <  surgery_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (surgery_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(surgery_updated[i]);
   }
}}


}else{
makeZeros();
   if(document.getElementById("Medicine").checked){shownumber_medicine();}
   if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
   if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
   if (document.getElementById("Embryology").checked){ shownumber_embryology();}
   if (document.getElementById("Genetics").checked){ shownumber_genetics();}
   if (document.getElementById("Histology").checked){ shownumber_histology();}
   if (document.getElementById("Immunology").checked){ shownumber_immunology();}
   if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
   if (document.getElementById("Pathology").checked){ shownumber_pathology();}
   if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
   if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
   if (document.getElementById("Physiology").checked){ shownumber_physiology();}



}
update_texts();


  } else if (document.getElementById("all-mode").checked){

  
    if(document.getElementById("Surgery").checked){
      subject_array=subject_array.concat(surgery_questions);
    
      for (let i = 0; i <  surgery_questions.length; i++) {
        for (let j = 0; j <respiratory_questions.length; j++) {
           if (surgery_questions[i].title == respiratory_questions[j].title) {
           mix_respiratory.push(surgery_questions[i]);
         }
     }}
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <cardiovascular_questions.length; j++) {
         if (surgery_questions[i].title == cardiovascular_questions[j].title) {
         mix_cardiovascular.push(surgery_questions[i]);
       }
    }
    }
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <renal_questions.length; j++) {
         if (surgery_questions[i].title == renal_questions[j].title) {
         mix_renal.push(surgery_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <allergy_questions.length; j++) {
         if (surgery_questions[i].title == allergy_questions[j].title) {
         mix_Allergy.push(surgery_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <dermatology_questions.length; j++) {
         if (surgery_questions[i].title == dermatology_questions[j].title) {
         mix_dermatology.push(surgery_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <gastrointestinal_questions.length; j++) {
         if (surgery_questions[i].title == gastrointestinal_questions[j].title) {
         mix_gastrointestinal.push(surgery_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <hematology_questions.length; j++) {
         if (surgery_questions[i].title == hematology_questions[j].title) {
         mix_hematology.push(surgery_questions[i]);
       }
    }}
     
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <neuro_questions.length; j++) {
         if (surgery_questions[i].title == neuro_questions[j].title) {
         mix_neuro.push(surgery_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <rheumatology_questions.length; j++) {
         if (surgery_questions[i].title == rheumatology_questions[j].title) {
         mix_Rheumatology.push(surgery_questions[i]);
       }
    }}
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <infectious_questions.length; j++) {
         if (surgery_questions[i].title == infectious_questions[j].title) {
         mix_infectious.push(surgery_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <endocrine_questions.length; j++) {
         if (surgery_questions[i].title == endocrine_questions[j].title) {
         mix_endocrine.push(surgery_questions[i]);
       }
    }}
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <reproductive_F_questions.length; j++) {
         if (surgery_questions[i].title == reproductive_F_questions[j].title) {
         mix_reproductive_F.push(surgery_questions[i]);
       }
    }}
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <reproductive_M_questions.length; j++) {
         if (surgery_questions[i].title == reproductive_M_questions[j].title) {
         mix_reproductive_M.push(surgery_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_questions.length; i++) {
      for (let j = 0; j <pregnancy_questions.length; j++) {
         if (surgery_questions[i].title == pregnancy_questions[j].title) {
         mix_pregnancy.push(surgery_questions[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
 
    
    
    
    }
    update_texts_all_mode();
  
  } else if (document.getElementById("incorrect").checked){

  
    if(document.getElementById("Surgery").checked){
      subject_array=subject_array.concat(surgery_incorrect);
    
      for (let i = 0; i <  surgery_incorrect.length; i++) {
        for (let j = 0; j <respiratory_incorrect.length; j++) {
           if (surgery_incorrect[i].title == respiratory_incorrect[j].title) {
           mix_respiratory.push(surgery_incorrect[i]);
         }
     }}
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <cardiovascular_incorrect.length; j++) {
         if (surgery_incorrect[i].title == cardiovascular_incorrect[j].title) {
         mix_cardiovascular.push(surgery_incorrect[i]);
       }
    }
    }
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <renal_incorrect.length; j++) {
         if (surgery_incorrect[i].title == renal_incorrect[j].title) {
         mix_renal.push(surgery_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <allergy_incorrect.length; j++) {
         if (surgery_incorrect[i].title == allergy_incorrect[j].title) {
         mix_Allergy.push(surgery_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <dermatology_incorrect.length; j++) {
         if (surgery_incorrect[i].title == dermatology_incorrect[j].title) {
         mix_dermatology.push(surgery_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
         if (surgery_incorrect[i].title == gastrointestinal_incorrect[j].title) {
         mix_gastrointestinal.push(surgery_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <hematology_incorrect.length; j++) {
         if (surgery_incorrect[i].title == hematology_incorrect[j].title) {
         mix_hematology.push(surgery_incorrect[i]);
       }
    }}
     
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <neuro_incorrect.length; j++) {
         if (surgery_incorrect[i].title == neuro_incorrect[j].title) {
         mix_neuro.push(surgery_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <rheumatology_incorrect.length; j++) {
         if (surgery_incorrect[i].title == rheumatology_incorrect[j].title) {
         mix_Rheumatology.push(surgery_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <infectious_incorrect.length; j++) {
         if (surgery_incorrect[i].title == infectious_incorrect[j].title) {
         mix_infectious.push(surgery_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <endocrine_incorrect.length; j++) {
         if (surgery_incorrect[i].title == endocrine_incorrect[j].title) {
         mix_endocrine.push(surgery_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <reproductive_F_incorrect.length; j++) {
         if (surgery_incorrect[i].title == reproductive_F_incorrect[j].title) {
         mix_reproductive_F.push(surgery_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <reproductive_M_incorrect.length; j++) {
         if (surgery_incorrect[i].title == reproductive_M_incorrect[j].title) {
         mix_reproductive_M.push(surgery_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  surgery_incorrect.length; i++) {
      for (let j = 0; j <pregnancy_incorrect.length; j++) {
         if (surgery_incorrect[i].title == pregnancy_incorrect[j].title) {
         mix_pregnancy.push(surgery_incorrect[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
 
    
    
    
    }
    update_texts_incorrect();
  
  
  
  }else if (document.getElementById("marked").checked){
    if(document.getElementById("Surgery").checked){
  subject_array=subject_array.concat(surgery_marked);
  
  for (let i = 0; i <  surgery_marked.length; i++) {
    for (let j = 0; j <respiratory_marked.length; j++) {
       if (surgery_marked[i].title == respiratory_marked[j].title) {
       mix_respiratory.push(surgery_marked[i]);
     }
  }}
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <cardiovascular_marked.length; j++) {
     if (surgery_marked[i].title == cardiovascular_marked[j].title) {
     mix_cardiovascular.push(surgery_marked[i]);
   }
  }
  }
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <renal_marked.length; j++) {
     if (surgery_marked[i].title == renal_marked[j].title) {
     mix_renal.push(surgery_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <allergy_marked.length; j++) {
     if (surgery_marked[i].title == allergy_marked[j].title) {
     mix_Allergy.push(surgery_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <dermatology_marked.length; j++) {
     if (surgery_marked[i].title == dermatology_marked[j].title) {
     mix_dermatology.push(surgery_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <gastrointestinal_marked.length; j++) {
     if (surgery_marked[i].title == gastrointestinal_marked[j].title) {
     mix_gastrointestinal.push(surgery_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <hematology_marked.length; j++) {
     if (surgery_marked[i].title == hematology_marked[j].title) {
     mix_hematology.push(surgery_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <neuro_marked.length; j++) {
     if (surgery_marked[i].title == neuro_marked[j].title) {
     mix_neuro.push(surgery_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <rheumatology_marked.length; j++) {
     if (surgery_marked[i].title == rheumatology_marked[j].title) {
     mix_Rheumatology.push(surgery_marked[i]);
   }
  }}
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <infectious_marked.length; j++) {
     if (surgery_marked[i].title == infectious_marked[j].title) {
     mix_infectious.push(surgery_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <endocrine_marked.length; j++) {
     if (surgery_marked[i].title == endocrine_marked[j].title) {
     mix_endocrine.push(surgery_marked[i]);
   }
  }}
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <reproductive_F_marked.length; j++) {
     if (surgery_marked[i].title == reproductive_F_marked[j].title) {
     mix_reproductive_F.push(surgery_marked[i]);
   }
  }}
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <reproductive_M_marked.length; j++) {
     if (surgery_marked[i].title == reproductive_M_marked[j].title) {
     mix_reproductive_M.push(surgery_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  surgery_marked.length; i++) {
  for (let j = 0; j <pregnancy_marked.length; j++) {
     if (surgery_marked[i].title == pregnancy_marked[j].title) {
     mix_pregnancy.push(surgery_marked[i]);
   }
  }}
  
  
  }else{
  makeZeros();
  if(document.getElementById("Medicine").checked){shownumber_medicine();}
  if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
  if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
  if (document.getElementById("Embryology").checked){ shownumber_embryology();}
  if (document.getElementById("Genetics").checked){ shownumber_genetics();}
  if (document.getElementById("Histology").checked){ shownumber_histology();}
  if (document.getElementById("Immunology").checked){ shownumber_immunology();}
  if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
  if (document.getElementById("Pathology").checked){ shownumber_pathology();}
  if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
  if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
  if (document.getElementById("Physiology").checked){ shownumber_physiology();}

  
  
  }
  update_texts_marked();
  
  //
  }
  
}




function shownumber_biochem() {

  if(document.getElementById("unused").checked){
  if(document.getElementById("Biochemistry").checked){
subject_array=subject_array.concat(Biochemistry_updated);
for (let i = 0; i <  Biochemistry_updated.length; i++) {
  for (let j = 0; j <respiratory_updated.length; j++) {
     if (Biochemistry_updated[i].title == respiratory_updated[j].title) {
     mix_respiratory.push(Biochemistry_updated[i]);
   }
}}
for (let i = 0; i <  Biochemistry_updated.length; i++) {
for (let j = 0; j <cardiovascular_updated.length; j++) {
   if (Biochemistry_updated[i].title == cardiovascular_updated[j].title) {
   mix_cardiovascular.push(Biochemistry_updated[i]);
 }
}}



for (let i = 0; i <  Biochemistry_updated.length; i++) {
for (let j = 0; j <renal_updated.length; j++) {
   if (Biochemistry_updated[i].title == renal_updated[j].title) {
   mix_renal.push(Biochemistry_updated[i]);
 }
}}

for (let i = 0; i <  Biochemistry_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (Biochemistry_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(Biochemistry_updated[i]);
   }
}}


for (let i = 0; i <  Biochemistry_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (Biochemistry_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(Biochemistry_updated[i]);
   }
}}


for (let i = 0; i <  Biochemistry_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (Biochemistry_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(Biochemistry_updated[i]);
   }
}}


for (let i = 0; i <  Biochemistry_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (Biochemistry_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(Biochemistry_updated[i]);
   }
}}


for (let i = 0; i <  Biochemistry_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (Biochemistry_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(Biochemistry_updated[i]);
   }
}}


for (let i = 0; i <  Biochemistry_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (Biochemistry_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(Biochemistry_updated[i]);
   }
}}



for (let i = 0; i <  Biochemistry_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (Biochemistry_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(Biochemistry_updated[i]);
   }
}}


for (let i = 0; i <  Biochemistry_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (Biochemistry_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(Biochemistry_updated[i]);
   }
}}

for (let i = 0; i <  Biochemistry_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (Biochemistry_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(Biochemistry_updated[i]);
   }
}}

for (let i = 0; i <  Biochemistry_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (Biochemistry_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(Biochemistry_updated[i]);
   }
}}

for (let i = 0; i <  Biochemistry_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (Biochemistry_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(Biochemistry_updated[i]);
   }
}}



}else{
makeZeros();
 if(document.getElementById("Medicine").checked){shownumber_medicine();}
 if(document.getElementById("Surgery").checked){shownumber_surgery();}
 if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
 if (document.getElementById("Embryology").checked){ shownumber_embryology();}
 if (document.getElementById("Genetics").checked){ shownumber_genetics();}
 if (document.getElementById("Histology").checked){ shownumber_histology();}
 if (document.getElementById("Immunology").checked){ shownumber_immunology();}
 if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
 if (document.getElementById("Pathology").checked){ shownumber_pathology();}
 if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
 if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
 if (document.getElementById("Physiology").checked){ shownumber_physiology();}







}
update_texts();



  } else if (document.getElementById("all-mode").checked){

  
    if(document.getElementById("Biochemistry").checked){
      subject_array=subject_array.concat(Biochemistry_questions);
    
      for (let i = 0; i <  Biochemistry_questions.length; i++) {
        for (let j = 0; j <respiratory_questions.length; j++) {
           if (Biochemistry_questions[i].title == respiratory_questions[j].title) {
           mix_respiratory.push(Biochemistry_questions[i]);
         }
     }}
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <cardiovascular_questions.length; j++) {
         if (Biochemistry_questions[i].title == cardiovascular_questions[j].title) {
         mix_cardiovascular.push(Biochemistry_questions[i]);
       }
    }
    }
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <renal_questions.length; j++) {
         if (Biochemistry_questions[i].title == renal_questions[j].title) {
         mix_renal.push(Biochemistry_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <allergy_questions.length; j++) {
         if (Biochemistry_questions[i].title == allergy_questions[j].title) {
         mix_Allergy.push(Biochemistry_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <dermatology_questions.length; j++) {
         if (Biochemistry_questions[i].title == dermatology_questions[j].title) {
         mix_dermatology.push(Biochemistry_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <gastrointestinal_questions.length; j++) {
         if (Biochemistry_questions[i].title == gastrointestinal_questions[j].title) {
         mix_gastrointestinal.push(Biochemistry_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <hematology_questions.length; j++) {
         if (Biochemistry_questions[i].title == hematology_questions[j].title) {
         mix_hematology.push(Biochemistry_questions[i]);
       }
    }}
     
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <neuro_questions.length; j++) {
         if (Biochemistry_questions[i].title == neuro_questions[j].title) {
         mix_neuro.push(Biochemistry_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <rheumatology_questions.length; j++) {
         if (Biochemistry_questions[i].title == rheumatology_questions[j].title) {
         mix_Rheumatology.push(Biochemistry_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <infectious_questions.length; j++) {
         if (Biochemistry_questions[i].title == infectious_questions[j].title) {
         mix_infectious.push(Biochemistry_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <endocrine_questions.length; j++) {
         if (Biochemistry_questions[i].title == endocrine_questions[j].title) {
         mix_endocrine.push(Biochemistry_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <reproductive_F_questions.length; j++) {
         if (Biochemistry_questions[i].title == reproductive_F_questions[j].title) {
         mix_reproductive_F.push(Biochemistry_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <reproductive_M_questions.length; j++) {
         if (Biochemistry_questions[i].title == reproductive_M_questions[j].title) {
         mix_reproductive_M.push(Biochemistry_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_questions.length; i++) {
      for (let j = 0; j <pregnancy_questions.length; j++) {
         if (Biochemistry_questions[i].title == pregnancy_questions[j].title) {
         mix_pregnancy.push(Biochemistry_questions[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_all_mode();
  
  } else if (document.getElementById("incorrect").checked){

  
    if(document.getElementById("Biochemistry").checked){
      subject_array=subject_array.concat(Biochemistry_incorrect);
    
      for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
        for (let j = 0; j <respiratory_incorrect.length; j++) {
           if (Biochemistry_incorrect[i].title == respiratory_incorrect[j].title) {
           mix_respiratory.push(Biochemistry_incorrect[i]);
         }
     }}
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <cardiovascular_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == cardiovascular_incorrect[j].title) {
         mix_cardiovascular.push(Biochemistry_incorrect[i]);
       }
    }
    }
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <renal_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == renal_incorrect[j].title) {
         mix_renal.push(Biochemistry_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <allergy_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == allergy_incorrect[j].title) {
         mix_Allergy.push(Biochemistry_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <dermatology_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == dermatology_incorrect[j].title) {
         mix_dermatology.push(Biochemistry_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == gastrointestinal_incorrect[j].title) {
         mix_gastrointestinal.push(Biochemistry_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <hematology_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == hematology_incorrect[j].title) {
         mix_hematology.push(Biochemistry_incorrect[i]);
       }
    }}
     
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <neuro_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == neuro_incorrect[j].title) {
         mix_neuro.push(Biochemistry_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <rheumatology_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == rheumatology_incorrect[j].title) {
         mix_Rheumatology.push(Biochemistry_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <infectious_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == infectious_incorrect[j].title) {
         mix_infectious.push(Biochemistry_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <endocrine_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == endocrine_incorrect[j].title) {
         mix_endocrine.push(Biochemistry_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <reproductive_F_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == reproductive_F_incorrect[j].title) {
         mix_reproductive_F.push(Biochemistry_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <reproductive_M_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == reproductive_M_incorrect[j].title) {
         mix_reproductive_M.push(Biochemistry_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Biochemistry_incorrect.length; i++) {
      for (let j = 0; j <pregnancy_incorrect.length; j++) {
         if (Biochemistry_incorrect[i].title == pregnancy_incorrect[j].title) {
         mix_pregnancy.push(Biochemistry_incorrect[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_incorrect();
  
  
  
  }else if (document.getElementById("marked").checked){
    if(document.getElementById("Biochemistry").checked){
  subject_array=subject_array.concat(Biochemistry_marked);
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
    for (let j = 0; j <respiratory_marked.length; j++) {
       if (Biochemistry_marked[i].title == respiratory_marked[j].title) {
       mix_respiratory.push(Biochemistry_marked[i]);
     }
  }}
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <cardiovascular_marked.length; j++) {
     if (Biochemistry_marked[i].title == cardiovascular_marked[j].title) {
     mix_cardiovascular.push(Biochemistry_marked[i]);
   }
  }
  }
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <renal_marked.length; j++) {
     if (Biochemistry_marked[i].title == renal_marked[j].title) {
     mix_renal.push(Biochemistry_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <allergy_marked.length; j++) {
     if (Biochemistry_marked[i].title == allergy_marked[j].title) {
     mix_Allergy.push(Biochemistry_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <dermatology_marked.length; j++) {
     if (Biochemistry_marked[i].title == dermatology_marked[j].title) {
     mix_dermatology.push(Biochemistry_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <gastrointestinal_marked.length; j++) {
     if (Biochemistry_marked[i].title == gastrointestinal_marked[j].title) {
     mix_gastrointestinal.push(Biochemistry_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <hematology_marked.length; j++) {
     if (Biochemistry_marked[i].title == hematology_marked[j].title) {
     mix_hematology.push(Biochemistry_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <neuro_marked.length; j++) {
     if (Biochemistry_marked[i].title == neuro_marked[j].title) {
     mix_neuro.push(Biochemistry_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <rheumatology_marked.length; j++) {
     if (Biochemistry_marked[i].title == rheumatology_marked[j].title) {
     mix_Rheumatology.push(Biochemistry_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <infectious_marked.length; j++) {
     if (Biochemistry_marked[i].title == infectious_marked[j].title) {
     mix_infectious.push(Biochemistry_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <endocrine_marked.length; j++) {
     if (Biochemistry_marked[i].title == endocrine_marked[j].title) {
     mix_endocrine.push(Biochemistry_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <reproductive_F_marked.length; j++) {
     if (Biochemistry_marked[i].title == reproductive_F_marked[j].title) {
     mix_reproductive_F.push(Biochemistry_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <reproductive_M_marked.length; j++) {
     if (Biochemistry_marked[i].title == reproductive_M_marked[j].title) {
     mix_reproductive_M.push(Biochemistry_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Biochemistry_marked.length; i++) {
  for (let j = 0; j <pregnancy_marked.length; j++) {
     if (Biochemistry_marked[i].title == pregnancy_marked[j].title) {
     mix_pregnancy.push(Biochemistry_marked[i]);
   }
  }}
  
  
  }else{
  makeZeros();
  if(document.getElementById("Medicine").checked){shownumber_medicine();}
  if(document.getElementById("Surgery").checked){shownumber_surgery();}
  if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
  if (document.getElementById("Embryology").checked){ shownumber_embryology();}
  if (document.getElementById("Genetics").checked){ shownumber_genetics();}
  if (document.getElementById("Histology").checked){ shownumber_histology();}
  if (document.getElementById("Immunology").checked){ shownumber_immunology();}
  if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
  if (document.getElementById("Pathology").checked){ shownumber_pathology();}
  if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
  if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
  if (document.getElementById("Physiology").checked){ shownumber_physiology();}
  
  
  
  }
  update_texts_marked();
  
  //
  }





}




function shownumber_biostat() {

  if(document.getElementById("unused").checked){

  if(document.getElementById("Biostatsitics").checked){
subject_array=subject_array.concat(biostat_updated);

for (let i = 0; i <  biostat_updated.length; i++) {
  for (let j = 0; j <respiratory_updated.length; j++) {
     if (biostat_updated[i].title == respiratory_updated[j].title) {
     mix_respiratory.push(biostat_updated[i]);
   }
}}

for (let i = 0; i <  biostat_updated.length; i++) {
for (let j = 0; j <cardiovascular_updated.length; j++) {
   if (biostat_updated[i].title == cardiovascular_updated[j].title) {
   mix_cardiovascular.push(biostat_updated[i]);
 }
}
}

for (let i = 0; i <  biostat_updated.length; i++) {
for (let j = 0; j <renal_updated.length; j++) {
   if (biostat_updated[i].title == renal_updated[j].title) {
   mix_renal.push(biostat_updated[i]);
 }
}}

for (let i = 0; i <  biostat_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (biostat_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(biostat_updated[i]);
   }
}}


for (let i = 0; i <  biostat_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (biostat_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(biostat_updated[i]);
   }
}}


for (let i = 0; i <  biostat_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (biostat_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(biostat_updated[i]);
   }
}}



for (let i = 0; i <  biostat_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (biostat_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(biostat_updated[i]);
   }
}}



for (let i = 0; i <  biostat_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (biostat_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(biostat_updated[i]);
   }
}}


for (let i = 0; i <  biostat_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (biostat_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(biostat_updated[i]);
   }
}}


for (let i = 0; i <  biostat_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (biostat_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(biostat_updated[i]);
   }
}}



for (let i = 0; i <  biostat_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (biostat_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(biostat_updated[i]);
   }
}}

for (let i = 0; i <  biostat_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (biostat_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(biostat_updated[i]);
   }
}}

for (let i = 0; i <  biostat_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (biostat_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(biostat_updated[i]);
   }
}}

for (let i = 0; i <  biostat_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (biostat_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(biostat_updated[i]);
   }
}}


}else{
makeZeros();
 if (document.getElementById("Medicine").checked){ shownumber_medicine();}
 if (document.getElementById("Surgery").checked){ shownumber_surgery();}
 if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
 if (document.getElementById("Embryology").checked){ shownumber_embryology();}
 if (document.getElementById("Genetics").checked){ shownumber_genetics();}
 if (document.getElementById("Histology").checked){ shownumber_histology();}
 if (document.getElementById("Immunology").checked){ shownumber_immunology();}
 if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
 if (document.getElementById("Pathology").checked){ shownumber_pathology();}
 if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
 if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
 if (document.getElementById("Physiology").checked){ shownumber_physiology();}




}
update_texts();

  }  else if (document.getElementById("all-mode").checked){

  
    if(document.getElementById("Biostatsitics").checked){
      subject_array=subject_array.concat(biostat_questions);
    
      for (let i = 0; i <  biostat_questions.length; i++) {
        for (let j = 0; j <respiratory_questions.length; j++) {
           if (biostat_questions[i].title == respiratory_questions[j].title) {
           mix_respiratory.push(biostat_questions[i]);
         }
     }}
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <cardiovascular_questions.length; j++) {
         if (biostat_questions[i].title == cardiovascular_questions[j].title) {
         mix_cardiovascular.push(biostat_questions[i]);
       }
    }
    }
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <renal_questions.length; j++) {
         if (biostat_questions[i].title == renal_questions[j].title) {
         mix_renal.push(biostat_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <allergy_questions.length; j++) {
         if (biostat_questions[i].title == allergy_questions[j].title) {
         mix_Allergy.push(biostat_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <dermatology_questions.length; j++) {
         if (biostat_questions[i].title == dermatology_questions[j].title) {
         mix_dermatology.push(biostat_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <gastrointestinal_questions.length; j++) {
         if (biostat_questions[i].title == gastrointestinal_questions[j].title) {
         mix_gastrointestinal.push(biostat_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <hematology_questions.length; j++) {
         if (biostat_questions[i].title == hematology_questions[j].title) {
         mix_hematology.push(biostat_questions[i]);
       }
    }}
     
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <neuro_questions.length; j++) {
         if (biostat_questions[i].title == neuro_questions[j].title) {
         mix_neuro.push(biostat_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <rheumatology_questions.length; j++) {
         if (biostat_questions[i].title == rheumatology_questions[j].title) {
         mix_Rheumatology.push(biostat_questions[i]);
       }
    }}
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <infectious_questions.length; j++) {
         if (biostat_questions[i].title == infectious_questions[j].title) {
         mix_infectious.push(biostat_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <endocrine_questions.length; j++) {
         if (biostat_questions[i].title == endocrine_questions[j].title) {
         mix_endocrine.push(biostat_questions[i]);
       }
    }}
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <reproductive_F_questions.length; j++) {
         if (biostat_questions[i].title == reproductive_F_questions[j].title) {
         mix_reproductive_F.push(biostat_questions[i]);
       }
    }}
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <reproductive_M_questions.length; j++) {
         if (biostat_questions[i].title == reproductive_M_questions[j].title) {
         mix_reproductive_M.push(biostat_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_questions.length; i++) {
      for (let j = 0; j <pregnancy_questions.length; j++) {
         if (biostat_questions[i].title == pregnancy_questions[j].title) {
         mix_pregnancy.push(biostat_questions[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if (document.getElementById("Medicine").checked){ shownumber_medicine();}
    if (document.getElementById("Surgery").checked){ shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_all_mode();
  
  } else if (document.getElementById("incorrect").checked){

  
    if(document.getElementById("Biostatsitics").checked){
      subject_array=subject_array.concat(biostat_incorrect);
    
      for (let i = 0; i <  biostat_incorrect.length; i++) {
        for (let j = 0; j <respiratory_incorrect.length; j++) {
           if (biostat_incorrect[i].title == respiratory_incorrect[j].title) {
           mix_respiratory.push(biostat_incorrect[i]);
         }
     }}
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <cardiovascular_incorrect.length; j++) {
         if (biostat_incorrect[i].title == cardiovascular_incorrect[j].title) {
         mix_cardiovascular.push(biostat_incorrect[i]);
       }
    }
    }
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <renal_incorrect.length; j++) {
         if (biostat_incorrect[i].title == renal_incorrect[j].title) {
         mix_renal.push(biostat_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <allergy_incorrect.length; j++) {
         if (biostat_incorrect[i].title == allergy_incorrect[j].title) {
         mix_Allergy.push(biostat_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <dermatology_incorrect.length; j++) {
         if (biostat_incorrect[i].title == dermatology_incorrect[j].title) {
         mix_dermatology.push(biostat_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
         if (biostat_incorrect[i].title == gastrointestinal_incorrect[j].title) {
         mix_gastrointestinal.push(biostat_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <hematology_incorrect.length; j++) {
         if (biostat_incorrect[i].title == hematology_incorrect[j].title) {
         mix_hematology.push(biostat_incorrect[i]);
       }
    }}
     
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <neuro_incorrect.length; j++) {
         if (biostat_incorrect[i].title == neuro_incorrect[j].title) {
         mix_neuro.push(biostat_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <rheumatology_incorrect.length; j++) {
         if (biostat_incorrect[i].title == rheumatology_incorrect[j].title) {
         mix_Rheumatology.push(biostat_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <infectious_incorrect.length; j++) {
         if (biostat_incorrect[i].title == infectious_incorrect[j].title) {
         mix_infectious.push(biostat_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <endocrine_incorrect.length; j++) {
         if (biostat_incorrect[i].title == endocrine_incorrect[j].title) {
         mix_endocrine.push(biostat_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <reproductive_F_incorrect.length; j++) {
         if (biostat_incorrect[i].title == reproductive_F_incorrect[j].title) {
         mix_reproductive_F.push(biostat_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <reproductive_M_incorrect.length; j++) {
         if (biostat_incorrect[i].title == reproductive_M_incorrect[j].title) {
         mix_reproductive_M.push(biostat_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  biostat_incorrect.length; i++) {
      for (let j = 0; j <pregnancy_incorrect.length; j++) {
         if (biostat_incorrect[i].title == pregnancy_incorrect[j].title) {
         mix_pregnancy.push(biostat_incorrect[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if (document.getElementById("Medicine").checked){ shownumber_medicine();}
    if (document.getElementById("Surgery").checked){ shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_incorrect();
  
  
  
  }else if (document.getElementById("marked").checked){
    if(document.getElementById("Biostatsitics").checked){
  subject_array=subject_array.concat(biostat_marked);
  
  for (let i = 0; i <  biostat_marked.length; i++) {
    for (let j = 0; j <respiratory_marked.length; j++) {
       if (biostat_marked[i].title == respiratory_marked[j].title) {
       mix_respiratory.push(biostat_marked[i]);
     }
  }}
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <cardiovascular_marked.length; j++) {
     if (biostat_marked[i].title == cardiovascular_marked[j].title) {
     mix_cardiovascular.push(biostat_marked[i]);
   }
  }
  }
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <renal_marked.length; j++) {
     if (biostat_marked[i].title == renal_marked[j].title) {
     mix_renal.push(biostat_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <allergy_marked.length; j++) {
     if (biostat_marked[i].title == allergy_marked[j].title) {
     mix_Allergy.push(biostat_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <dermatology_marked.length; j++) {
     if (biostat_marked[i].title == dermatology_marked[j].title) {
     mix_dermatology.push(biostat_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <gastrointestinal_marked.length; j++) {
     if (biostat_marked[i].title == gastrointestinal_marked[j].title) {
     mix_gastrointestinal.push(biostat_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <hematology_marked.length; j++) {
     if (biostat_marked[i].title == hematology_marked[j].title) {
     mix_hematology.push(biostat_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <neuro_marked.length; j++) {
     if (biostat_marked[i].title == neuro_marked[j].title) {
     mix_neuro.push(biostat_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <rheumatology_marked.length; j++) {
     if (biostat_marked[i].title == rheumatology_marked[j].title) {
     mix_Rheumatology.push(biostat_marked[i]);
   }
  }}
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <infectious_marked.length; j++) {
     if (biostat_marked[i].title == infectious_marked[j].title) {
     mix_infectious.push(biostat_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <endocrine_marked.length; j++) {
     if (biostat_marked[i].title == endocrine_marked[j].title) {
     mix_endocrine.push(biostat_marked[i]);
   }
  }}
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <reproductive_F_marked.length; j++) {
     if (biostat_marked[i].title == reproductive_F_marked[j].title) {
     mix_reproductive_F.push(biostat_marked[i]);
   }
  }}
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <reproductive_M_marked.length; j++) {
     if (biostat_marked[i].title == reproductive_M_marked[j].title) {
     mix_reproductive_M.push(biostat_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  biostat_marked.length; i++) {
  for (let j = 0; j <pregnancy_marked.length; j++) {
     if (biostat_marked[i].title == pregnancy_marked[j].title) {
     mix_pregnancy.push(biostat_marked[i]);
   }
  }}
  
  
  }else{
  makeZeros();
  if (document.getElementById("Medicine").checked){ shownumber_medicine();}
  if (document.getElementById("Surgery").checked){ shownumber_surgery();}
  if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
  if (document.getElementById("Embryology").checked){ shownumber_embryology();}
  if (document.getElementById("Genetics").checked){ shownumber_genetics();}
  if (document.getElementById("Histology").checked){ shownumber_histology();}
  if (document.getElementById("Immunology").checked){ shownumber_immunology();}
  if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
  if (document.getElementById("Pathology").checked){ shownumber_pathology();}
  if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
  if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
  if (document.getElementById("Physiology").checked){ shownumber_physiology();}
  
  
  
  }
  update_texts_marked();
  
  //
  }


}


function shownumber_embryology() {
  if(document.getElementById("unused").checked){


  if(document.getElementById("Embryology").checked){
subject_array=subject_array.concat(embryology_updated);
for (let i = 0; i <  embryology_updated.length; i++) {
  for (let j = 0; j <respiratory_updated.length; j++) {
     if (embryology_updated[i].title == respiratory_updated[j].title) {
     mix_respiratory.push(embryology_updated[i]);
   }
}}
for (let i = 0; i <  embryology_updated.length; i++) {
for (let j = 0; j <cardiovascular_updated.length; j++) {
   if (embryology_updated[i].title == cardiovascular_updated[j].title) {
   mix_cardiovascular.push(embryology_updated[i]);
 }
}}
for (let i = 0; i <  embryology_updated.length; i++) {
for (let j = 0; j <renal_updated.length; j++) {
   if (embryology_updated[i].title == renal_updated[j].title) {
   mix_renal.push(embryology_updated[i]);
 }
}}


for (let i = 0; i <  embryology_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (embryology_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(embryology_updated[i]);
   }
}}


for (let i = 0; i <  embryology_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (embryology_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(embryology_updated[i]);
   }
}}


for (let i = 0; i <  embryology_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (embryology_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(embryology_updated[i]);
   }
}}


for (let i = 0; i <  embryology_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (embryology_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(embryology_updated[i]);
   }
}}


for (let i = 0; i <  embryology_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (embryology_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(embryology_updated[i]);
   }
}}


for (let i = 0; i <  embryology_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (embryology_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(embryology_updated[i]);
   }
}}


for (let i = 0; i <  embryology_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (embryology_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(embryology_updated[i]);
   }
}}



for (let i = 0; i <  embryology_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (embryology_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(embryology_updated[i]);
   }
}}

for (let i = 0; i <  embryology_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (embryology_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(embryology_updated[i]);
   }
}}

for (let i = 0; i <  embryology_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (embryology_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(embryology_updated[i]);
   }
}}


for (let i = 0; i <  embryology_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (embryology_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(embryology_updated[i]);
   }
}}


}else{
makeZeros();
 if(document.getElementById("Medicine").checked){shownumber_medicine();}
 if(document.getElementById("Surgery").checked){shownumber_surgery();}
 if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
 if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
 if (document.getElementById("Genetics").checked){ shownumber_genetics();}
 if (document.getElementById("Histology").checked){ shownumber_histology();}
 if (document.getElementById("Immunology").checked){ shownumber_immunology();}
 if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
 if (document.getElementById("Pathology").checked){ shownumber_pathology();}
 if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
 if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
 if (document.getElementById("Physiology").checked){ shownumber_physiology();}



}
update_texts();

  }  else if (document.getElementById("all-mode").checked){

  
    if(document.getElementById("Embryology").checked){
      subject_array=subject_array.concat(embryology_questions);
    
      for (let i = 0; i <  embryology_questions.length; i++) {
        for (let j = 0; j <respiratory_questions.length; j++) {
           if (embryology_questions[i].title == respiratory_questions[j].title) {
           mix_respiratory.push(embryology_questions[i]);
         }
     }}
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <cardiovascular_questions.length; j++) {
         if (embryology_questions[i].title == cardiovascular_questions[j].title) {
         mix_cardiovascular.push(embryology_questions[i]);
       }
    }
    }
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <renal_questions.length; j++) {
         if (embryology_questions[i].title == renal_questions[j].title) {
         mix_renal.push(embryology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <allergy_questions.length; j++) {
         if (embryology_questions[i].title == allergy_questions[j].title) {
         mix_Allergy.push(embryology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <dermatology_questions.length; j++) {
         if (embryology_questions[i].title == dermatology_questions[j].title) {
         mix_dermatology.push(embryology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <gastrointestinal_questions.length; j++) {
         if (embryology_questions[i].title == gastrointestinal_questions[j].title) {
         mix_gastrointestinal.push(embryology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <hematology_questions.length; j++) {
         if (embryology_questions[i].title == hematology_questions[j].title) {
         mix_hematology.push(embryology_questions[i]);
       }
    }}
     
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <neuro_questions.length; j++) {
         if (embryology_questions[i].title == neuro_questions[j].title) {
         mix_neuro.push(embryology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <rheumatology_questions.length; j++) {
         if (embryology_questions[i].title == rheumatology_questions[j].title) {
         mix_Rheumatology.push(embryology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <infectious_questions.length; j++) {
         if (embryology_questions[i].title == infectious_questions[j].title) {
         mix_infectious.push(embryology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <endocrine_questions.length; j++) {
         if (embryology_questions[i].title == endocrine_questions[j].title) {
         mix_endocrine.push(embryology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <reproductive_F_questions.length; j++) {
         if (embryology_questions[i].title == reproductive_F_questions[j].title) {
         mix_reproductive_F.push(embryology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <reproductive_M_questions.length; j++) {
         if (embryology_questions[i].title == reproductive_M_questions[j].title) {
         mix_reproductive_M.push(embryology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  embryology_questions.length; i++) {
      for (let j = 0; j <pregnancy_questions.length; j++) {
         if (embryology_questions[i].title == pregnancy_questions[j].title) {
         mix_pregnancy.push(embryology_questions[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_all_mode();
  
  } else if (document.getElementById("incorrect").checked){
  
  
       if(document.getElementById("Embryology").checked){
         subject_array=subject_array.concat(embryology_incorrect);
       
         for (let i = 0; i <  embryology_incorrect.length; i++) {
           for (let j = 0; j <respiratory_incorrect.length; j++) {
              if (embryology_incorrect[i].title == respiratory_incorrect[j].title) {
              mix_respiratory.push(embryology_incorrect[i]);
            }
        }}
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <cardiovascular_incorrect.length; j++) {
            if (embryology_incorrect[i].title == cardiovascular_incorrect[j].title) {
            mix_cardiovascular.push(embryology_incorrect[i]);
          }
       }
       }
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <renal_incorrect.length; j++) {
            if (embryology_incorrect[i].title == renal_incorrect[j].title) {
            mix_renal.push(embryology_incorrect[i]);
          }
       }}
       
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <allergy_incorrect.length; j++) {
            if (embryology_incorrect[i].title == allergy_incorrect[j].title) {
            mix_Allergy.push(embryology_incorrect[i]);
          }
       }}
       
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <dermatology_incorrect.length; j++) {
            if (embryology_incorrect[i].title == dermatology_incorrect[j].title) {
            mix_dermatology.push(embryology_incorrect[i]);
          }
       }}
       
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
            if (embryology_incorrect[i].title == gastrointestinal_incorrect[j].title) {
            mix_gastrointestinal.push(embryology_incorrect[i]);
          }
       }}
       
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <hematology_incorrect.length; j++) {
            if (embryology_incorrect[i].title == hematology_incorrect[j].title) {
            mix_hematology.push(embryology_incorrect[i]);
          }
       }}
        
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <neuro_incorrect.length; j++) {
            if (embryology_incorrect[i].title == neuro_incorrect[j].title) {
            mix_neuro.push(embryology_incorrect[i]);
          }
       }}
       
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <rheumatology_incorrect.length; j++) {
            if (embryology_incorrect[i].title == rheumatology_incorrect[j].title) {
            mix_Rheumatology.push(embryology_incorrect[i]);
          }
       }}
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <infectious_incorrect.length; j++) {
            if (embryology_incorrect[i].title == infectious_incorrect[j].title) {
            mix_infectious.push(embryology_incorrect[i]);
          }
       }}
       
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <endocrine_incorrect.length; j++) {
            if (embryology_incorrect[i].title == endocrine_incorrect[j].title) {
            mix_endocrine.push(embryology_incorrect[i]);
          }
       }}
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <reproductive_F_incorrect.length; j++) {
            if (embryology_incorrect[i].title == reproductive_F_incorrect[j].title) {
            mix_reproductive_F.push(embryology_incorrect[i]);
          }
       }}
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <reproductive_M_incorrect.length; j++) {
            if (embryology_incorrect[i].title == reproductive_M_incorrect[j].title) {
            mix_reproductive_M.push(embryology_incorrect[i]);
          }
       }}
       
       
       for (let i = 0; i <  embryology_incorrect.length; i++) {
         for (let j = 0; j <pregnancy_incorrect.length; j++) {
            if (embryology_incorrect[i].title == pregnancy_incorrect[j].title) {
            mix_pregnancy.push(embryology_incorrect[i]);
          }
       }}
       
       
       }else{
       makeZeros();
       if(document.getElementById("Medicine").checked){shownumber_medicine();}
       if(document.getElementById("Surgery").checked){shownumber_surgery();}
       if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
       if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
       if (document.getElementById("Genetics").checked){ shownumber_genetics();}
       if (document.getElementById("Histology").checked){ shownumber_histology();}
       if (document.getElementById("Immunology").checked){ shownumber_immunology();}
       if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
       if (document.getElementById("Pathology").checked){ shownumber_pathology();}
       if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
       if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
       if (document.getElementById("Physiology").checked){ shownumber_physiology();}
       
       
       
       }
       update_texts_incorrect();
     
     
     
     }else if (document.getElementById("marked").checked){
      if(document.getElementById("Embryology").checked){
    subject_array=subject_array.concat(embryology_marked);
    
    for (let i = 0; i <  embryology_marked.length; i++) {
      for (let j = 0; j <respiratory_marked.length; j++) {
         if (embryology_marked[i].title == respiratory_marked[j].title) {
         mix_respiratory.push(embryology_marked[i]);
       }
    }}
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <cardiovascular_marked.length; j++) {
       if (embryology_marked[i].title == cardiovascular_marked[j].title) {
       mix_cardiovascular.push(embryology_marked[i]);
     }
    }
    }
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <renal_marked.length; j++) {
       if (embryology_marked[i].title == renal_marked[j].title) {
       mix_renal.push(embryology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <allergy_marked.length; j++) {
       if (embryology_marked[i].title == allergy_marked[j].title) {
       mix_Allergy.push(embryology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <dermatology_marked.length; j++) {
       if (embryology_marked[i].title == dermatology_marked[j].title) {
       mix_dermatology.push(embryology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <gastrointestinal_marked.length; j++) {
       if (embryology_marked[i].title == gastrointestinal_marked[j].title) {
       mix_gastrointestinal.push(embryology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <hematology_marked.length; j++) {
       if (embryology_marked[i].title == hematology_marked[j].title) {
       mix_hematology.push(embryology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <neuro_marked.length; j++) {
       if (embryology_marked[i].title == neuro_marked[j].title) {
       mix_neuro.push(embryology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <rheumatology_marked.length; j++) {
       if (embryology_marked[i].title == rheumatology_marked[j].title) {
       mix_Rheumatology.push(embryology_marked[i]);
     }
    }}
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <infectious_marked.length; j++) {
       if (embryology_marked[i].title == infectious_marked[j].title) {
       mix_infectious.push(embryology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <endocrine_marked.length; j++) {
       if (embryology_marked[i].title == endocrine_marked[j].title) {
       mix_endocrine.push(embryology_marked[i]);
     }
    }}
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <reproductive_F_marked.length; j++) {
       if (embryology_marked[i].title == reproductive_F_marked[j].title) {
       mix_reproductive_F.push(embryology_marked[i]);
     }
    }}
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <reproductive_M_marked.length; j++) {
       if (embryology_marked[i].title == reproductive_M_marked[j].title) {
       mix_reproductive_M.push(embryology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  embryology_marked.length; i++) {
    for (let j = 0; j <pregnancy_marked.length; j++) {
       if (embryology_marked[i].title == pregnancy_marked[j].title) {
       mix_pregnancy.push(embryology_marked[i]);
     }
    }}
    
    
    }else{
    makeZeros();
 if(document.getElementById("Medicine").checked){shownumber_medicine();}
 if(document.getElementById("Surgery").checked){shownumber_surgery();}
 if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
 if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
 if (document.getElementById("Genetics").checked){ shownumber_genetics();}
 if (document.getElementById("Histology").checked){ shownumber_histology();}
 if (document.getElementById("Immunology").checked){ shownumber_immunology();}
 if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
 if (document.getElementById("Pathology").checked){ shownumber_pathology();}
 if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
 if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
 if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_marked();
    
    //
    }
  
  
}




function shownumber_genetics() {
    if(document.getElementById("unused").checked){

  if(document.getElementById("Genetics").checked){
subject_array=subject_array.concat(Genetics_updated);
for (let i = 0; i <  Genetics_updated.length; i++) {
  for (let j = 0; j <respiratory_updated.length; j++) {
     if (Genetics_updated[i].title == respiratory_updated[j].title) {
     mix_respiratory.push(Genetics_updated[i]);
   }
}}


for (let i = 0; i <  Genetics_updated.length; i++) {
for (let j = 0; j <cardiovascular_updated.length; j++) {
   if (Genetics_updated[i].title == cardiovascular_updated[j].title) {
   mix_cardiovascular.push(Genetics_updated[i]);
 }
}}


for (let i = 0; i <  Genetics_updated.length; i++) {
for (let j = 0; j <renal_updated.length; j++) {
   if (Genetics_updated[i].title == renal_updated[j].title) {
   mix_renal.push(Genetics_updated[i]);
 }
}}

for (let i = 0; i <  Genetics_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (Genetics_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(Genetics_updated[i]);
   }
}}


for (let i = 0; i <  Genetics_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (Genetics_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(Genetics_updated[i]);
   }
}}


for (let i = 0; i <  Genetics_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (Genetics_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(Genetics_updated[i]);
   }
}}


for (let i = 0; i <  Genetics_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (Genetics_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(Genetics_updated[i]);
   }
}}


for (let i = 0; i <  Genetics_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (Genetics_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(Genetics_updated[i]);
   }
}}


for (let i = 0; i <  Genetics_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (Genetics_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(Genetics_updated[i]);
   }
}}


for (let i = 0; i <  Genetics_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (Genetics_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(Genetics_updated[i]);
   }
}}




for (let i = 0; i <  Genetics_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (Genetics_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(Genetics_updated[i]);
   }
}}

for (let i = 0; i <  Genetics_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (Genetics_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(Genetics_updated[i]);
   }
}}

for (let i = 0; i <  Genetics_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (Genetics_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(Genetics_updated[i]);
   }
}}


for (let i = 0; i <  Genetics_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (Genetics_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(Genetics_updated[i]);
   }
}}


}else{
makeZeros();
 if(document.getElementById("Medicine").checked){shownumber_medicine();}
 if(document.getElementById("Surgery").checked){shownumber_surgery();}
 if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
 if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
 if (document.getElementById("Embryology").checked){ shownumber_embryology();}
 if (document.getElementById("Histology").checked){ shownumber_histology();}
 if (document.getElementById("Immunology").checked){ shownumber_immunology();}
 if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
 if (document.getElementById("Pathology").checked){ shownumber_pathology();}
 if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
 if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
 if (document.getElementById("Physiology").checked){ shownumber_physiology();}



}
update_texts();

    } else if (document.getElementById("all-mode").checked){

      if(document.getElementById("Genetics").checked){
        subject_array=subject_array.concat(Genetics_questions);
      
        for (let i = 0; i <  Genetics_questions.length; i++) {
          for (let j = 0; j <respiratory_questions.length; j++) {
             if (Genetics_questions[i].title == respiratory_questions[j].title) {
             mix_respiratory.push(Genetics_questions[i]);
           }
       }}
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <cardiovascular_questions.length; j++) {
           if (Genetics_questions[i].title == cardiovascular_questions[j].title) {
           mix_cardiovascular.push(Genetics_questions[i]);
         }
      }
      }
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <renal_questions.length; j++) {
           if (Genetics_questions[i].title == renal_questions[j].title) {
           mix_renal.push(Genetics_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <allergy_questions.length; j++) {
           if (Genetics_questions[i].title == allergy_questions[j].title) {
           mix_Allergy.push(Genetics_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <dermatology_questions.length; j++) {
           if (Genetics_questions[i].title == dermatology_questions[j].title) {
           mix_dermatology.push(Genetics_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <gastrointestinal_questions.length; j++) {
           if (Genetics_questions[i].title == gastrointestinal_questions[j].title) {
           mix_gastrointestinal.push(Genetics_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <hematology_questions.length; j++) {
           if (Genetics_questions[i].title == hematology_questions[j].title) {
           mix_hematology.push(Genetics_questions[i]);
         }
      }}
       
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <neuro_questions.length; j++) {
           if (Genetics_questions[i].title == neuro_questions[j].title) {
           mix_neuro.push(Genetics_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <rheumatology_questions.length; j++) {
           if (Genetics_questions[i].title == rheumatology_questions[j].title) {
           mix_Rheumatology.push(Genetics_questions[i]);
         }
      }}
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <infectious_questions.length; j++) {
           if (Genetics_questions[i].title == infectious_questions[j].title) {
           mix_infectious.push(Genetics_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <endocrine_questions.length; j++) {
           if (Genetics_questions[i].title == endocrine_questions[j].title) {
           mix_endocrine.push(Genetics_questions[i]);
         }
      }}
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <reproductive_F_questions.length; j++) {
           if (Genetics_questions[i].title == reproductive_F_questions[j].title) {
           mix_reproductive_F.push(Genetics_questions[i]);
         }
      }}
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <reproductive_M_questions.length; j++) {
           if (Genetics_questions[i].title == reproductive_M_questions[j].title) {
           mix_reproductive_M.push(Genetics_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_questions.length; i++) {
        for (let j = 0; j <pregnancy_questions.length; j++) {
           if (Genetics_questions[i].title == pregnancy_questions[j].title) {
           mix_pregnancy.push(Genetics_questions[i]);
         }
      }}
      
      
      }else{
      makeZeros();
      if(document.getElementById("Medicine").checked){shownumber_medicine();}
      if(document.getElementById("Surgery").checked){shownumber_surgery();}
      if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
      if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
      if (document.getElementById("Embryology").checked){ shownumber_embryology();}
      if (document.getElementById("Histology").checked){ shownumber_histology();}
      if (document.getElementById("Immunology").checked){ shownumber_immunology();}
      if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
      if (document.getElementById("Pathology").checked){ shownumber_pathology();}
      if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
      if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
      if (document.getElementById("Physiology").checked){ shownumber_physiology();}
      
      
      
      }
      update_texts_all_mode();
    
    }else if (document.getElementById("incorrect").checked){


      if(document.getElementById("Genetics").checked){
        subject_array=subject_array.concat(Genetics_incorrect);
      
        for (let i = 0; i <  Genetics_incorrect.length; i++) {
          for (let j = 0; j <respiratory_incorrect.length; j++) {
             if (Genetics_incorrect[i].title == respiratory_incorrect[j].title) {
             mix_respiratory.push(Genetics_incorrect[i]);
           }
       }}
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <cardiovascular_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == cardiovascular_incorrect[j].title) {
           mix_cardiovascular.push(Genetics_incorrect[i]);
         }
      }
      }
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <renal_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == renal_incorrect[j].title) {
           mix_renal.push(Genetics_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <allergy_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == allergy_incorrect[j].title) {
           mix_Allergy.push(Genetics_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <dermatology_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == dermatology_incorrect[j].title) {
           mix_dermatology.push(Genetics_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == gastrointestinal_incorrect[j].title) {
           mix_gastrointestinal.push(Genetics_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <hematology_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == hematology_incorrect[j].title) {
           mix_hematology.push(Genetics_incorrect[i]);
         }
      }}
       
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <neuro_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == neuro_incorrect[j].title) {
           mix_neuro.push(Genetics_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <rheumatology_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == rheumatology_incorrect[j].title) {
           mix_Rheumatology.push(Genetics_incorrect[i]);
         }
      }}
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <infectious_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == infectious_incorrect[j].title) {
           mix_infectious.push(Genetics_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <endocrine_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == endocrine_incorrect[j].title) {
           mix_endocrine.push(Genetics_incorrect[i]);
         }
      }}
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <reproductive_F_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == reproductive_F_incorrect[j].title) {
           mix_reproductive_F.push(Genetics_incorrect[i]);
         }
      }}
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <reproductive_M_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == reproductive_M_incorrect[j].title) {
           mix_reproductive_M.push(Genetics_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Genetics_incorrect.length; i++) {
        for (let j = 0; j <pregnancy_incorrect.length; j++) {
           if (Genetics_incorrect[i].title == pregnancy_incorrect[j].title) {
           mix_pregnancy.push(Genetics_incorrect[i]);
         }
      }}
      
      
      }else{
      makeZeros();
      if(document.getElementById("Medicine").checked){shownumber_medicine();}
      if(document.getElementById("Surgery").checked){shownumber_surgery();}
      if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
      if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
      if (document.getElementById("Embryology").checked){ shownumber_embryology();}
      if (document.getElementById("Histology").checked){ shownumber_histology();}
      if (document.getElementById("Immunology").checked){ shownumber_immunology();}
      if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
      if (document.getElementById("Pathology").checked){ shownumber_pathology();}
      if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
      if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
      if (document.getElementById("Physiology").checked){ shownumber_physiology();}
      
      
      
      }
      update_texts_incorrect();
    
    
    
    }else if (document.getElementById("marked").checked){
      if(document.getElementById("Genetics").checked){
    subject_array=subject_array.concat(Genetics_marked);
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
      for (let j = 0; j <respiratory_marked.length; j++) {
         if (Genetics_marked[i].title == respiratory_marked[j].title) {
         mix_respiratory.push(Genetics_marked[i]);
       }
    }}
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <cardiovascular_marked.length; j++) {
       if (Genetics_marked[i].title == cardiovascular_marked[j].title) {
       mix_cardiovascular.push(Genetics_marked[i]);
     }
    }
    }
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <renal_marked.length; j++) {
       if (Genetics_marked[i].title == renal_marked[j].title) {
       mix_renal.push(Genetics_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <allergy_marked.length; j++) {
       if (Genetics_marked[i].title == allergy_marked[j].title) {
       mix_Allergy.push(Genetics_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <dermatology_marked.length; j++) {
       if (Genetics_marked[i].title == dermatology_marked[j].title) {
       mix_dermatology.push(Genetics_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <gastrointestinal_marked.length; j++) {
       if (Genetics_marked[i].title == gastrointestinal_marked[j].title) {
       mix_gastrointestinal.push(Genetics_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <hematology_marked.length; j++) {
       if (Genetics_marked[i].title == hematology_marked[j].title) {
       mix_hematology.push(Genetics_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <neuro_marked.length; j++) {
       if (Genetics_marked[i].title == neuro_marked[j].title) {
       mix_neuro.push(Genetics_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <rheumatology_marked.length; j++) {
       if (Genetics_marked[i].title == rheumatology_marked[j].title) {
       mix_Rheumatology.push(Genetics_marked[i]);
     }
    }}
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <infectious_marked.length; j++) {
       if (Genetics_marked[i].title == infectious_marked[j].title) {
       mix_infectious.push(Genetics_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <endocrine_marked.length; j++) {
       if (Genetics_marked[i].title == endocrine_marked[j].title) {
       mix_endocrine.push(Genetics_marked[i]);
     }
    }}
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <reproductive_F_marked.length; j++) {
       if (Genetics_marked[i].title == reproductive_F_marked[j].title) {
       mix_reproductive_F.push(Genetics_marked[i]);
     }
    }}
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <reproductive_M_marked.length; j++) {
       if (Genetics_marked[i].title == reproductive_M_marked[j].title) {
       mix_reproductive_M.push(Genetics_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Genetics_marked.length; i++) {
    for (let j = 0; j <pregnancy_marked.length; j++) {
       if (Genetics_marked[i].title == pregnancy_marked[j].title) {
       mix_pregnancy.push(Genetics_marked[i]);
     }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_marked();
    
    //
    }
    
}




function shownumber_histology() {
  if(document.getElementById("unused").checked){

  if(document.getElementById("Histology").checked){
subject_array=subject_array.concat(Histology_updated);
for (let i = 0; i <  Histology_updated.length; i++) {
  for (let j = 0; j <respiratory_updated.length; j++) {
     if (Histology_updated[i].title == respiratory_updated[j].title) {
     mix_respiratory.push(Histology_updated[i]);
   }
}}



for (let i = 0; i <  Histology_updated.length; i++) {
for (let j = 0; j <cardiovascular_updated.length; j++) {
   if (Histology_updated[i].title == cardiovascular_updated[j].title) {
   mix_cardiovascular.push(Histology_updated[i]);
 }
}}



for (let i = 0; i <  Histology_updated.length; i++) {
for (let j = 0; j <renal_updated.length; j++) {
   if (Histology_updated[i].title == renal_updated[j].title) {
   mix_renal.push(Histology_updated[i]);
 }
}}


for (let i = 0; i <  Histology_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (Histology_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(Histology_updated[i]);
   }
}}


for (let i = 0; i <  Histology_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (Histology_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(Histology_updated[i]);
   }
}}


for (let i = 0; i <  Histology_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (Histology_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(Histology_updated[i]);
   }
}}


for (let i = 0; i <  Histology_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (Histology_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(Histology_updated[i]);
   }
}}


for (let i = 0; i <  Histology_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (Histology_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(Histology_updated[i]);
   }
}}



for (let i = 0; i <  Histology_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (Histology_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(Histology_updated[i]);
   }
}}


for (let i = 0; i <  Histology_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (Histology_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(Histology_updated[i]);
   }
}}


for (let i = 0; i <  Histology_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (Histology_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(Histology_updated[i]);
   }
}}

for (let i = 0; i <  Histology_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (Histology_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(Histology_updated[i]);
   }
}}

for (let i = 0; i <  Histology_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (Histology_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(Histology_updated[i]);
   }
}}


for (let i = 0; i <  Histology_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (Histology_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(Histology_updated[i]);
   }
}}

}else{
makeZeros();
 if(document.getElementById("Medicine").checked){shownumber_medicine();}
 if(document.getElementById("Surgery").checked){shownumber_surgery();}
 if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
 if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
 if (document.getElementById("Embryology").checked){ shownumber_embryology();}
 if (document.getElementById("Genetics").checked){ shownumber_genetics();}
 if (document.getElementById("Immunology").checked){ shownumber_immunology();}
 if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
 if (document.getElementById("Pathology").checked){ shownumber_pathology();}
 if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
 if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
 if (document.getElementById("Physiology").checked){ shownumber_physiology();}



}
update_texts();

  }  else if (document.getElementById("all-mode").checked){
  
    if(document.getElementById("Histology").checked){
      subject_array=subject_array.concat(Histology_questions);
    
      for (let i = 0; i <  Histology_questions.length; i++) {
        for (let j = 0; j <respiratory_questions.length; j++) {
           if (Histology_questions[i].title == respiratory_questions[j].title) {
           mix_respiratory.push(Histology_questions[i]);
         }
     }}
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <cardiovascular_questions.length; j++) {
         if (Histology_questions[i].title == cardiovascular_questions[j].title) {
         mix_cardiovascular.push(Histology_questions[i]);
       }
    }
    }
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <renal_questions.length; j++) {
         if (Histology_questions[i].title == renal_questions[j].title) {
         mix_renal.push(Histology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <allergy_questions.length; j++) {
         if (Histology_questions[i].title == allergy_questions[j].title) {
         mix_Allergy.push(Histology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <dermatology_questions.length; j++) {
         if (Histology_questions[i].title == dermatology_questions[j].title) {
         mix_dermatology.push(Histology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <gastrointestinal_questions.length; j++) {
         if (Histology_questions[i].title == gastrointestinal_questions[j].title) {
         mix_gastrointestinal.push(Histology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <hematology_questions.length; j++) {
         if (Histology_questions[i].title == hematology_questions[j].title) {
         mix_hematology.push(Histology_questions[i]);
       }
    }}
     
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <neuro_questions.length; j++) {
         if (Histology_questions[i].title == neuro_questions[j].title) {
         mix_neuro.push(Histology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <rheumatology_questions.length; j++) {
         if (Histology_questions[i].title == rheumatology_questions[j].title) {
         mix_Rheumatology.push(Histology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <infectious_questions.length; j++) {
         if (Histology_questions[i].title == infectious_questions[j].title) {
         mix_infectious.push(Histology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <endocrine_questions.length; j++) {
         if (Histology_questions[i].title == endocrine_questions[j].title) {
         mix_endocrine.push(Histology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <reproductive_F_questions.length; j++) {
         if (Histology_questions[i].title == reproductive_F_questions[j].title) {
         mix_reproductive_F.push(Histology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <reproductive_M_questions.length; j++) {
         if (Histology_questions[i].title == reproductive_M_questions[j].title) {
         mix_reproductive_M.push(Histology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_questions.length; i++) {
      for (let j = 0; j <pregnancy_questions.length; j++) {
         if (Histology_questions[i].title == pregnancy_questions[j].title) {
         mix_pregnancy.push(Histology_questions[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_all_mode();
  
  } else if (document.getElementById("incorrect").checked){


    if(document.getElementById("Histology").checked){
      subject_array=subject_array.concat(Histology_incorrect);
    
      for (let i = 0; i <  Histology_incorrect.length; i++) {
        for (let j = 0; j <respiratory_incorrect.length; j++) {
           if (Histology_incorrect[i].title == respiratory_incorrect[j].title) {
           mix_respiratory.push(Histology_incorrect[i]);
         }
     }}
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <cardiovascular_incorrect.length; j++) {
         if (Histology_incorrect[i].title == cardiovascular_incorrect[j].title) {
         mix_cardiovascular.push(Histology_incorrect[i]);
       }
    }
    }
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <renal_incorrect.length; j++) {
         if (Histology_incorrect[i].title == renal_incorrect[j].title) {
         mix_renal.push(Histology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <allergy_incorrect.length; j++) {
         if (Histology_incorrect[i].title == allergy_incorrect[j].title) {
         mix_Allergy.push(Histology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <dermatology_incorrect.length; j++) {
         if (Histology_incorrect[i].title == dermatology_incorrect[j].title) {
         mix_dermatology.push(Histology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
         if (Histology_incorrect[i].title == gastrointestinal_incorrect[j].title) {
         mix_gastrointestinal.push(Histology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <hematology_incorrect.length; j++) {
         if (Histology_incorrect[i].title == hematology_incorrect[j].title) {
         mix_hematology.push(Histology_incorrect[i]);
       }
    }}
     
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <neuro_incorrect.length; j++) {
         if (Histology_incorrect[i].title == neuro_incorrect[j].title) {
         mix_neuro.push(Histology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <rheumatology_incorrect.length; j++) {
         if (Histology_incorrect[i].title == rheumatology_incorrect[j].title) {
         mix_Rheumatology.push(Histology_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <infectious_incorrect.length; j++) {
         if (Histology_incorrect[i].title == infectious_incorrect[j].title) {
         mix_infectious.push(Histology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <endocrine_incorrect.length; j++) {
         if (Histology_incorrect[i].title == endocrine_incorrect[j].title) {
         mix_endocrine.push(Histology_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <reproductive_F_incorrect.length; j++) {
         if (Histology_incorrect[i].title == reproductive_F_incorrect[j].title) {
         mix_reproductive_F.push(Histology_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <reproductive_M_incorrect.length; j++) {
         if (Histology_incorrect[i].title == reproductive_M_incorrect[j].title) {
         mix_reproductive_M.push(Histology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Histology_incorrect.length; i++) {
      for (let j = 0; j <pregnancy_incorrect.length; j++) {
         if (Histology_incorrect[i].title == pregnancy_incorrect[j].title) {
         mix_pregnancy.push(Histology_incorrect[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_incorrect();
  
  
  
  }else if (document.getElementById("marked").checked){
    if(document.getElementById("Histology").checked){
  subject_array=subject_array.concat(Histology_marked);
  
  for (let i = 0; i <  Histology_marked.length; i++) {
    for (let j = 0; j <respiratory_marked.length; j++) {
       if (Histology_marked[i].title == respiratory_marked[j].title) {
       mix_respiratory.push(Histology_marked[i]);
     }
  }}
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <cardiovascular_marked.length; j++) {
     if (Histology_marked[i].title == cardiovascular_marked[j].title) {
     mix_cardiovascular.push(Histology_marked[i]);
   }
  }
  }
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <renal_marked.length; j++) {
     if (Histology_marked[i].title == renal_marked[j].title) {
     mix_renal.push(Histology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <allergy_marked.length; j++) {
     if (Histology_marked[i].title == allergy_marked[j].title) {
     mix_Allergy.push(Histology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <dermatology_marked.length; j++) {
     if (Histology_marked[i].title == dermatology_marked[j].title) {
     mix_dermatology.push(Histology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <gastrointestinal_marked.length; j++) {
     if (Histology_marked[i].title == gastrointestinal_marked[j].title) {
     mix_gastrointestinal.push(Histology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <hematology_marked.length; j++) {
     if (Histology_marked[i].title == hematology_marked[j].title) {
     mix_hematology.push(Histology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <neuro_marked.length; j++) {
     if (Histology_marked[i].title == neuro_marked[j].title) {
     mix_neuro.push(Histology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <rheumatology_marked.length; j++) {
     if (Histology_marked[i].title == rheumatology_marked[j].title) {
     mix_Rheumatology.push(Histology_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <infectious_marked.length; j++) {
     if (Histology_marked[i].title == infectious_marked[j].title) {
     mix_infectious.push(Histology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <endocrine_marked.length; j++) {
     if (Histology_marked[i].title == endocrine_marked[j].title) {
     mix_endocrine.push(Histology_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <reproductive_F_marked.length; j++) {
     if (Histology_marked[i].title == reproductive_F_marked[j].title) {
     mix_reproductive_F.push(Histology_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <reproductive_M_marked.length; j++) {
     if (Histology_marked[i].title == reproductive_M_marked[j].title) {
     mix_reproductive_M.push(Histology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Histology_marked.length; i++) {
  for (let j = 0; j <pregnancy_marked.length; j++) {
     if (Histology_marked[i].title == pregnancy_marked[j].title) {
     mix_pregnancy.push(Histology_marked[i]);
   }
  }}
  
  
  }else{
  makeZeros();
  if(document.getElementById("Medicine").checked){shownumber_medicine();}
  if(document.getElementById("Surgery").checked){shownumber_surgery();}
  if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
  if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
  if (document.getElementById("Embryology").checked){ shownumber_embryology();}
  if (document.getElementById("Genetics").checked){ shownumber_genetics();}
  if (document.getElementById("Immunology").checked){ shownumber_immunology();}
  if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
  if (document.getElementById("Pathology").checked){ shownumber_pathology();}
  if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
  if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
  if (document.getElementById("Physiology").checked){ shownumber_physiology();}
  
  
  
  }
  update_texts_marked();
  
  //
  }
  

  
}




function shownumber_immunology() {
  if(document.getElementById("unused").checked){

  if(document.getElementById("Immunology").checked){
subject_array=subject_array.concat(Immunology_updated);
for (let i = 0; i <  Immunology_updated.length; i++) {
  for (let j = 0; j <respiratory_updated.length; j++) {
     if (Immunology_updated[i].title == respiratory_updated[j].title) {
     mix_respiratory.push(Immunology_updated[i]);
   }
}}


for (let i = 0; i <  Immunology_updated.length; i++) {
for (let j = 0; j <cardiovascular_updated.length; j++) {
   if (Immunology_updated[i].title == cardiovascular_updated[j].title) {
   mix_cardiovascular.push(Immunology_updated[i]);
 }
}}


for (let i = 0; i <  Immunology_updated.length; i++) {
for (let j = 0; j <renal_updated.length; j++) {
   if (Immunology_updated[i].title == renal_updated[j].title) {
   mix_renal.push(Immunology_updated[i]);
 }
}}

for (let i = 0; i <  Immunology_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (Immunology_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(Immunology_updated[i]);
   }
}}


for (let i = 0; i <  Immunology_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (Immunology_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(Immunology_updated[i]);
   }
}}



for (let i = 0; i <  Immunology_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (Immunology_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(Immunology_updated[i]);
   }
}}



for (let i = 0; i <  Immunology_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (Immunology_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(Immunology_updated[i]);
   }
}}



for (let i = 0; i <  Immunology_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (Immunology_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(Immunology_updated[i]);
   }
}}


for (let i = 0; i <  Immunology_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (Immunology_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(Immunology_updated[i]);
   }
}}


for (let i = 0; i <  Immunology_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (Immunology_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(Immunology_updated[i]);
   }
}}



for (let i = 0; i <  Immunology_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (Immunology_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(Immunology_updated[i]);
   }
}}

for (let i = 0; i <  Immunology_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (Immunology_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(Immunology_updated[i]);
   }
}}

for (let i = 0; i <  Immunology_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (Immunology_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(Immunology_updated[i]);
   }
}}


for (let i = 0; i <  Immunology_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (Immunology_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(Immunology_updated[i]);
   }
}}


}else{
makeZeros();
 if(document.getElementById("Medicine").checked){shownumber_medicine();}
 if(document.getElementById("Surgery").checked){shownumber_surgery();}
 if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
 if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
 if (document.getElementById("Embryology").checked){ shownumber_embryology();}
 if (document.getElementById("Genetics").checked){ shownumber_genetics();}
 if (document.getElementById("Histology").checked){ shownumber_histology();}
 if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
 if (document.getElementById("Pathology").checked){ shownumber_pathology();}
 if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
 if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
 if (document.getElementById("Physiology").checked){ shownumber_physiology();}


}
update_texts();

  }else if (document.getElementById("all-mode").checked){

  
    if(document.getElementById("Immunology").checked){
      subject_array=subject_array.concat(Immunology_questions);
    
      for (let i = 0; i <  Immunology_questions.length; i++) {
        for (let j = 0; j <respiratory_questions.length; j++) {
           if (Immunology_questions[i].title == respiratory_questions[j].title) {
           mix_respiratory.push(Immunology_questions[i]);
         }
     }}
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <cardiovascular_questions.length; j++) {
         if (Immunology_questions[i].title == cardiovascular_questions[j].title) {
         mix_cardiovascular.push(Immunology_questions[i]);
       }
    }
    }
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <renal_questions.length; j++) {
         if (Immunology_questions[i].title == renal_questions[j].title) {
         mix_renal.push(Immunology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <allergy_questions.length; j++) {
         if (Immunology_questions[i].title == allergy_questions[j].title) {
         mix_Allergy.push(Immunology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <dermatology_questions.length; j++) {
         if (Immunology_questions[i].title == dermatology_questions[j].title) {
         mix_dermatology.push(Immunology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <gastrointestinal_questions.length; j++) {
         if (Immunology_questions[i].title == gastrointestinal_questions[j].title) {
         mix_gastrointestinal.push(Immunology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <hematology_questions.length; j++) {
         if (Immunology_questions[i].title == hematology_questions[j].title) {
         mix_hematology.push(Immunology_questions[i]);
       }
    }}
     
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <neuro_questions.length; j++) {
         if (Immunology_questions[i].title == neuro_questions[j].title) {
         mix_neuro.push(Immunology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <rheumatology_questions.length; j++) {
         if (Immunology_questions[i].title == rheumatology_questions[j].title) {
         mix_Rheumatology.push(Immunology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <infectious_questions.length; j++) {
         if (Immunology_questions[i].title == infectious_questions[j].title) {
         mix_infectious.push(Immunology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <endocrine_questions.length; j++) {
         if (Immunology_questions[i].title == endocrine_questions[j].title) {
         mix_endocrine.push(Immunology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <reproductive_F_questions.length; j++) {
         if (Immunology_questions[i].title == reproductive_F_questions[j].title) {
         mix_reproductive_F.push(Immunology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <reproductive_M_questions.length; j++) {
         if (Immunology_questions[i].title == reproductive_M_questions[j].title) {
         mix_reproductive_M.push(Immunology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_questions.length; i++) {
      for (let j = 0; j <pregnancy_questions.length; j++) {
         if (Immunology_questions[i].title == pregnancy_questions[j].title) {
         mix_pregnancy.push(Immunology_questions[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_all_mode();
  
  }else if (document.getElementById("incorrect").checked){


    if(document.getElementById("Immunology").checked){
      subject_array=subject_array.concat(Immunology_incorrect);
    
      for (let i = 0; i <  Immunology_incorrect.length; i++) {
        for (let j = 0; j <respiratory_incorrect.length; j++) {
           if (Immunology_incorrect[i].title == respiratory_incorrect[j].title) {
           mix_respiratory.push(Immunology_incorrect[i]);
         }
     }}
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <cardiovascular_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == cardiovascular_incorrect[j].title) {
         mix_cardiovascular.push(Immunology_incorrect[i]);
       }
    }
    }
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <renal_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == renal_incorrect[j].title) {
         mix_renal.push(Immunology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <allergy_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == allergy_incorrect[j].title) {
         mix_Allergy.push(Immunology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <dermatology_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == dermatology_incorrect[j].title) {
         mix_dermatology.push(Immunology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == gastrointestinal_incorrect[j].title) {
         mix_gastrointestinal.push(Immunology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <hematology_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == hematology_incorrect[j].title) {
         mix_hematology.push(Immunology_incorrect[i]);
       }
    }}
     
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <neuro_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == neuro_incorrect[j].title) {
         mix_neuro.push(Immunology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <rheumatology_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == rheumatology_incorrect[j].title) {
         mix_Rheumatology.push(Immunology_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <infectious_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == infectious_incorrect[j].title) {
         mix_infectious.push(Immunology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <endocrine_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == endocrine_incorrect[j].title) {
         mix_endocrine.push(Immunology_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <reproductive_F_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == reproductive_F_incorrect[j].title) {
         mix_reproductive_F.push(Immunology_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <reproductive_M_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == reproductive_M_incorrect[j].title) {
         mix_reproductive_M.push(Immunology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Immunology_incorrect.length; i++) {
      for (let j = 0; j <pregnancy_incorrect.length; j++) {
         if (Immunology_incorrect[i].title == pregnancy_incorrect[j].title) {
         mix_pregnancy.push(Immunology_incorrect[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_incorrect();
  
  
  
  }else if (document.getElementById("marked").checked){
    if(document.getElementById("Immunology").checked){
  subject_array=subject_array.concat(Immunology_marked);
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
    for (let j = 0; j <respiratory_marked.length; j++) {
       if (Immunology_marked[i].title == respiratory_marked[j].title) {
       mix_respiratory.push(Immunology_marked[i]);
     }
  }}
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <cardiovascular_marked.length; j++) {
     if (Immunology_marked[i].title == cardiovascular_marked[j].title) {
     mix_cardiovascular.push(Immunology_marked[i]);
   }
  }
  }
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <renal_marked.length; j++) {
     if (Immunology_marked[i].title == renal_marked[j].title) {
     mix_renal.push(Immunology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <allergy_marked.length; j++) {
     if (Immunology_marked[i].title == allergy_marked[j].title) {
     mix_Allergy.push(Immunology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <dermatology_marked.length; j++) {
     if (Immunology_marked[i].title == dermatology_marked[j].title) {
     mix_dermatology.push(Immunology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <gastrointestinal_marked.length; j++) {
     if (Immunology_marked[i].title == gastrointestinal_marked[j].title) {
     mix_gastrointestinal.push(Immunology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <hematology_marked.length; j++) {
     if (Immunology_marked[i].title == hematology_marked[j].title) {
     mix_hematology.push(Immunology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <neuro_marked.length; j++) {
     if (Immunology_marked[i].title == neuro_marked[j].title) {
     mix_neuro.push(Immunology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <rheumatology_marked.length; j++) {
     if (Immunology_marked[i].title == rheumatology_marked[j].title) {
     mix_Rheumatology.push(Immunology_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <infectious_marked.length; j++) {
     if (Immunology_marked[i].title == infectious_marked[j].title) {
     mix_infectious.push(Immunology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <endocrine_marked.length; j++) {
     if (Immunology_marked[i].title == endocrine_marked[j].title) {
     mix_endocrine.push(Immunology_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <reproductive_F_marked.length; j++) {
     if (Immunology_marked[i].title == reproductive_F_marked[j].title) {
     mix_reproductive_F.push(Immunology_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <reproductive_M_marked.length; j++) {
     if (Immunology_marked[i].title == reproductive_M_marked[j].title) {
     mix_reproductive_M.push(Immunology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Immunology_marked.length; i++) {
  for (let j = 0; j <pregnancy_marked.length; j++) {
     if (Immunology_marked[i].title == pregnancy_marked[j].title) {
     mix_pregnancy.push(Immunology_marked[i]);
   }
  }}
  
  
  }else{
  makeZeros();
  if(document.getElementById("Medicine").checked){shownumber_medicine();}
  if(document.getElementById("Surgery").checked){shownumber_surgery();}
  if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
  if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
  if (document.getElementById("Embryology").checked){ shownumber_embryology();}
  if (document.getElementById("Genetics").checked){ shownumber_genetics();}
  if (document.getElementById("Histology").checked){ shownumber_histology();}
  if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
  if (document.getElementById("Pathology").checked){ shownumber_pathology();}
  if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
  if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
  if (document.getElementById("Physiology").checked){ shownumber_physiology();}
  
  
  
  }
  update_texts_marked();
  
  //
  }
  

}



function shownumber_microbiology() {
    if(document.getElementById("unused").checked){

  if(document.getElementById("Microbiology").checked){
subject_array=subject_array.concat(Microbiology_updated);
for (let i = 0; i <  Microbiology_updated.length; i++) {
  for (let j = 0; j <respiratory_updated.length; j++) {
     if (Microbiology_updated[i].title == respiratory_updated[j].title) {
     mix_respiratory.push(Microbiology_updated[i]);
   }
}}


for (let i = 0; i <  Microbiology_updated.length; i++) {
for (let j = 0; j <cardiovascular_updated.length; j++) {
   if (Microbiology_updated[i].title == cardiovascular_updated[j].title) {
   mix_cardiovascular.push(Microbiology_updated[i]);
 }
}}


for (let i = 0; i <  Microbiology_updated.length; i++) {
for (let j = 0; j <renal_updated.length; j++) {
   if (Microbiology_updated[i].title == renal_updated[j].title) {
   mix_renal.push(Microbiology_updated[i]);
 }
}}

for (let i = 0; i <  Microbiology_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (Microbiology_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(Microbiology_updated[i]);
   }
}}


for (let i = 0; i <  Microbiology_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (Microbiology_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(Microbiology_updated[i]);
   }
}}



for (let i = 0; i <  Microbiology_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (Microbiology_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(Microbiology_updated[i]);
   }
}}



for (let i = 0; i <  Microbiology_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (Microbiology_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(Microbiology_updated[i]);
   }
}}



for (let i = 0; i <  Microbiology_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (Microbiology_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(Microbiology_updated[i]);
   }
}}



for (let i = 0; i <  Microbiology_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (Microbiology_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(Microbiology_updated[i]);
   }
}}


for (let i = 0; i <  Microbiology_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (Microbiology_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(Microbiology_updated[i]);
   }
}}



for (let i = 0; i <  Microbiology_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (Microbiology_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(Microbiology_updated[i]);
   }
}}

for (let i = 0; i <  Microbiology_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (Microbiology_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(Microbiology_updated[i]);
   }
}}

for (let i = 0; i <  Microbiology_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (Microbiology_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(Microbiology_updated[i]);
   }
}}

for (let i = 0; i <  Microbiology_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (Microbiology_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(Microbiology_updated[i]);
   }
}}


}else{
makeZeros();
 if(document.getElementById("Medicine").checked){shownumber_medicine();}
 if(document.getElementById("Surgery").checked){shownumber_surgery();}
 if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
 if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
 if (document.getElementById("Embryology").checked){ shownumber_embryology();}
 if (document.getElementById("Genetics").checked){ shownumber_genetics();}
 if (document.getElementById("Histology").checked){ shownumber_histology();}
 if (document.getElementById("Immunology").checked){ shownumber_immunology();}
 if (document.getElementById("Pathology").checked){ shownumber_pathology();}
 if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
 if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
 if (document.getElementById("Physiology").checked){ shownumber_physiology();}


}
update_texts();

    } else if (document.getElementById("all-mode").checked){

  
      if(document.getElementById("Microbiology").checked){
        subject_array=subject_array.concat(Microbiology_questions);
      
        for (let i = 0; i <  Microbiology_questions.length; i++) {
          for (let j = 0; j <respiratory_questions.length; j++) {
             if (Microbiology_questions[i].title == respiratory_questions[j].title) {
             mix_respiratory.push(Microbiology_questions[i]);
           }
       }}
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <cardiovascular_questions.length; j++) {
           if (Microbiology_questions[i].title == cardiovascular_questions[j].title) {
           mix_cardiovascular.push(Microbiology_questions[i]);
         }
      }
      }
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <renal_questions.length; j++) {
           if (Microbiology_questions[i].title == renal_questions[j].title) {
           mix_renal.push(Microbiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <allergy_questions.length; j++) {
           if (Microbiology_questions[i].title == allergy_questions[j].title) {
           mix_Allergy.push(Microbiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <dermatology_questions.length; j++) {
           if (Microbiology_questions[i].title == dermatology_questions[j].title) {
           mix_dermatology.push(Microbiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <gastrointestinal_questions.length; j++) {
           if (Microbiology_questions[i].title == gastrointestinal_questions[j].title) {
           mix_gastrointestinal.push(Microbiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <hematology_questions.length; j++) {
           if (Microbiology_questions[i].title == hematology_questions[j].title) {
           mix_hematology.push(Microbiology_questions[i]);
         }
      }}
       
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <neuro_questions.length; j++) {
           if (Microbiology_questions[i].title == neuro_questions[j].title) {
           mix_neuro.push(Microbiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <rheumatology_questions.length; j++) {
           if (Microbiology_questions[i].title == rheumatology_questions[j].title) {
           mix_Rheumatology.push(Microbiology_questions[i]);
         }
      }}
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <infectious_questions.length; j++) {
           if (Microbiology_questions[i].title == infectious_questions[j].title) {
           mix_infectious.push(Microbiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <endocrine_questions.length; j++) {
           if (Microbiology_questions[i].title == endocrine_questions[j].title) {
           mix_endocrine.push(Microbiology_questions[i]);
         }
      }}
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <reproductive_F_questions.length; j++) {
           if (Microbiology_questions[i].title == reproductive_F_questions[j].title) {
           mix_reproductive_F.push(Microbiology_questions[i]);
         }
      }}
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <reproductive_M_questions.length; j++) {
           if (Microbiology_questions[i].title == reproductive_M_questions[j].title) {
           mix_reproductive_M.push(Microbiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_questions.length; i++) {
        for (let j = 0; j <pregnancy_questions.length; j++) {
           if (Microbiology_questions[i].title == pregnancy_questions[j].title) {
           mix_pregnancy.push(Microbiology_questions[i]);
         }
      }}
      
      
      }else{
      makeZeros();
      if(document.getElementById("Medicine").checked){shownumber_medicine();}
      if(document.getElementById("Surgery").checked){shownumber_surgery();}
      if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
      if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
      if (document.getElementById("Embryology").checked){ shownumber_embryology();}
      if (document.getElementById("Genetics").checked){ shownumber_genetics();}
      if (document.getElementById("Histology").checked){ shownumber_histology();}
      if (document.getElementById("Immunology").checked){ shownumber_immunology();}
      if (document.getElementById("Pathology").checked){ shownumber_pathology();}
      if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
      if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
      if (document.getElementById("Physiology").checked){ shownumber_physiology();}
      
      
      
      }
      update_texts_all_mode();
    
    }else if (document.getElementById("incorrect").checked){


      if(document.getElementById("Microbiology").checked){
        subject_array=subject_array.concat(Microbiology_incorrect);
      
        for (let i = 0; i <  Microbiology_incorrect.length; i++) {
          for (let j = 0; j <respiratory_incorrect.length; j++) {
             if (Microbiology_incorrect[i].title == respiratory_incorrect[j].title) {
             mix_respiratory.push(Microbiology_incorrect[i]);
           }
       }}
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <cardiovascular_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == cardiovascular_incorrect[j].title) {
           mix_cardiovascular.push(Microbiology_incorrect[i]);
         }
      }
      }
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <renal_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == renal_incorrect[j].title) {
           mix_renal.push(Microbiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <allergy_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == allergy_incorrect[j].title) {
           mix_Allergy.push(Microbiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <dermatology_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == dermatology_incorrect[j].title) {
           mix_dermatology.push(Microbiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == gastrointestinal_incorrect[j].title) {
           mix_gastrointestinal.push(Microbiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <hematology_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == hematology_incorrect[j].title) {
           mix_hematology.push(Microbiology_incorrect[i]);
         }
      }}
       
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <neuro_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == neuro_incorrect[j].title) {
           mix_neuro.push(Microbiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <rheumatology_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == rheumatology_incorrect[j].title) {
           mix_Rheumatology.push(Microbiology_incorrect[i]);
         }
      }}
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <infectious_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == infectious_incorrect[j].title) {
           mix_infectious.push(Microbiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <endocrine_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == endocrine_incorrect[j].title) {
           mix_endocrine.push(Microbiology_incorrect[i]);
         }
      }}
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <reproductive_F_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == reproductive_F_incorrect[j].title) {
           mix_reproductive_F.push(Microbiology_incorrect[i]);
         }
      }}
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <reproductive_M_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == reproductive_M_incorrect[j].title) {
           mix_reproductive_M.push(Microbiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Microbiology_incorrect.length; i++) {
        for (let j = 0; j <pregnancy_incorrect.length; j++) {
           if (Microbiology_incorrect[i].title == pregnancy_incorrect[j].title) {
           mix_pregnancy.push(Microbiology_incorrect[i]);
         }
      }}
      
      
      }else{
      makeZeros();
      if(document.getElementById("Medicine").checked){shownumber_medicine();}
      if(document.getElementById("Surgery").checked){shownumber_surgery();}
      if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
      if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
      if (document.getElementById("Embryology").checked){ shownumber_embryology();}
      if (document.getElementById("Genetics").checked){ shownumber_genetics();}
      if (document.getElementById("Histology").checked){ shownumber_histology();}
      if (document.getElementById("Immunology").checked){ shownumber_immunology();}
      if (document.getElementById("Pathology").checked){ shownumber_pathology();}
      if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
      if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
      if (document.getElementById("Physiology").checked){ shownumber_physiology();}
      
      
      
      }
      update_texts_incorrect();
    
    
    
    }else if (document.getElementById("marked").checked){
      if(document.getElementById("Microbiology").checked){
    subject_array=subject_array.concat(Microbiology_marked);
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
      for (let j = 0; j <respiratory_marked.length; j++) {
         if (Microbiology_marked[i].title == respiratory_marked[j].title) {
         mix_respiratory.push(Microbiology_marked[i]);
       }
    }}
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <cardiovascular_marked.length; j++) {
       if (Microbiology_marked[i].title == cardiovascular_marked[j].title) {
       mix_cardiovascular.push(Microbiology_marked[i]);
     }
    }
    }
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <renal_marked.length; j++) {
       if (Microbiology_marked[i].title == renal_marked[j].title) {
       mix_renal.push(Microbiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <allergy_marked.length; j++) {
       if (Microbiology_marked[i].title == allergy_marked[j].title) {
       mix_Allergy.push(Microbiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <dermatology_marked.length; j++) {
       if (Microbiology_marked[i].title == dermatology_marked[j].title) {
       mix_dermatology.push(Microbiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <gastrointestinal_marked.length; j++) {
       if (Microbiology_marked[i].title == gastrointestinal_marked[j].title) {
       mix_gastrointestinal.push(Microbiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <hematology_marked.length; j++) {
       if (Microbiology_marked[i].title == hematology_marked[j].title) {
       mix_hematology.push(Microbiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <neuro_marked.length; j++) {
       if (Microbiology_marked[i].title == neuro_marked[j].title) {
       mix_neuro.push(Microbiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <rheumatology_marked.length; j++) {
       if (Microbiology_marked[i].title == rheumatology_marked[j].title) {
       mix_Rheumatology.push(Microbiology_marked[i]);
     }
    }}
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <infectious_marked.length; j++) {
       if (Microbiology_marked[i].title == infectious_marked[j].title) {
       mix_infectious.push(Microbiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <endocrine_marked.length; j++) {
       if (Microbiology_marked[i].title == endocrine_marked[j].title) {
       mix_endocrine.push(Microbiology_marked[i]);
     }
    }}
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <reproductive_F_marked.length; j++) {
       if (Microbiology_marked[i].title == reproductive_F_marked[j].title) {
       mix_reproductive_F.push(Microbiology_marked[i]);
     }
    }}
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <reproductive_M_marked.length; j++) {
       if (Microbiology_marked[i].title == reproductive_M_marked[j].title) {
       mix_reproductive_M.push(Microbiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Microbiology_marked.length; i++) {
    for (let j = 0; j <pregnancy_marked.length; j++) {
       if (Microbiology_marked[i].title == pregnancy_marked[j].title) {
       mix_pregnancy.push(Microbiology_marked[i]);
     }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_marked();
    
    //
    }
    
    

}






function shownumber_pathology() {
  if(document.getElementById("unused").checked){

  if(document.getElementById("Pathology").checked){
subject_array=subject_array.concat(Pathology_updated);
for (let i = 0; i <  Pathology_updated.length; i++) {
  for (let j = 0; j <respiratory_updated.length; j++) {
     if (Pathology_updated[i].title == respiratory_updated[j].title) {
     mix_respiratory.push(Pathology_updated[i]);
   }
}}



for (let i = 0; i <  Pathology_updated.length; i++) {
for (let j = 0; j <cardiovascular_updated.length; j++) {
   if (Pathology_updated[i].title == cardiovascular_updated[j].title) {
   mix_cardiovascular.push(Pathology_updated[i]);
 }
}}




for (let i = 0; i <  Pathology_updated.length; i++) {
for (let j = 0; j <renal_updated.length; j++) {
   if (Pathology_updated[i].title == renal_updated[j].title) {
   mix_renal.push(Pathology_updated[i]);
 }
}}


for (let i = 0; i <  Pathology_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (Pathology_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(Pathology_updated[i]);
   }
}}


for (let i = 0; i <  Pathology_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (Pathology_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(Pathology_updated[i]);
   }
}}


for (let i = 0; i <  Pathology_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (Pathology_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(Pathology_updated[i]);
   }
}}



for (let i = 0; i <  Pathology_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (Pathology_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(Pathology_updated[i]);
   }
}}



for (let i = 0; i <  Pathology_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (Pathology_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(Pathology_updated[i]);
   }
}}



for (let i = 0; i <  Pathology_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (Pathology_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(Pathology_updated[i]);
   }
}}



for (let i = 0; i <  Pathology_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (Pathology_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(Pathology_updated[i]);
   }
}}


for (let i = 0; i <  Pathology_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (Pathology_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(Pathology_updated[i]);
   }
}}

for (let i = 0; i <  Pathology_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (Pathology_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(Pathology_updated[i]);
   }
}}

for (let i = 0; i <  Pathology_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (Pathology_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(Pathology_updated[i]);
   }
}}


for (let i = 0; i <  Pathology_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (Pathology_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(Pathology_updated[i]);
   }
}}


}else{
makeZeros();
 if(document.getElementById("Medicine").checked){shownumber_medicine();}
 if(document.getElementById("Surgery").checked){shownumber_surgery();}
 if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
 if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
 if (document.getElementById("Embryology").checked){ shownumber_embryology();}
 if (document.getElementById("Genetics").checked){ shownumber_genetics();}
 if (document.getElementById("Histology").checked){ shownumber_histology();}
 if (document.getElementById("Immunology").checked){ shownumber_immunology();}
 if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
 if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
 if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
 if (document.getElementById("Physiology").checked){ shownumber_physiology();}



}
update_texts();






  } else if (document.getElementById("all-mode").checked){

  
    if(document.getElementById("Pathology").checked){
      subject_array=subject_array.concat(Pathology_questions);
    
      for (let i = 0; i <  Pathology_questions.length; i++) {
        for (let j = 0; j <respiratory_questions.length; j++) {
           if (Pathology_questions[i].title == respiratory_questions[j].title) {
           mix_respiratory.push(Pathology_questions[i]);
         }
     }}
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <cardiovascular_questions.length; j++) {
         if (Pathology_questions[i].title == cardiovascular_questions[j].title) {
         mix_cardiovascular.push(Pathology_questions[i]);
       }
    }
    }
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <renal_questions.length; j++) {
         if (Pathology_questions[i].title == renal_questions[j].title) {
         mix_renal.push(Pathology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <allergy_questions.length; j++) {
         if (Pathology_questions[i].title == allergy_questions[j].title) {
         mix_Allergy.push(Pathology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <dermatology_questions.length; j++) {
         if (Pathology_questions[i].title == dermatology_questions[j].title) {
         mix_dermatology.push(Pathology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <gastrointestinal_questions.length; j++) {
         if (Pathology_questions[i].title == gastrointestinal_questions[j].title) {
         mix_gastrointestinal.push(Pathology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <hematology_questions.length; j++) {
         if (Pathology_questions[i].title == hematology_questions[j].title) {
         mix_hematology.push(Pathology_questions[i]);
       }
    }}
     
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <neuro_questions.length; j++) {
         if (Pathology_questions[i].title == neuro_questions[j].title) {
         mix_neuro.push(Pathology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <rheumatology_questions.length; j++) {
         if (Pathology_questions[i].title == rheumatology_questions[j].title) {
         mix_Rheumatology.push(Pathology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <infectious_questions.length; j++) {
         if (Pathology_questions[i].title == infectious_questions[j].title) {
         mix_infectious.push(Pathology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <endocrine_questions.length; j++) {
         if (Pathology_questions[i].title == endocrine_questions[j].title) {
         mix_endocrine.push(Pathology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <reproductive_F_questions.length; j++) {
         if (Pathology_questions[i].title == reproductive_F_questions[j].title) {
         mix_reproductive_F.push(Pathology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <reproductive_M_questions.length; j++) {
         if (Pathology_questions[i].title == reproductive_M_questions[j].title) {
         mix_reproductive_M.push(Pathology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_questions.length; i++) {
      for (let j = 0; j <pregnancy_questions.length; j++) {
         if (Pathology_questions[i].title == pregnancy_questions[j].title) {
         mix_pregnancy.push(Pathology_questions[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_all_mode();
  
  }else if (document.getElementById("incorrect").checked){


    if(document.getElementById("Pathology").checked){
      subject_array=subject_array.concat(Pathology_incorrect);
    
      for (let i = 0; i <  Pathology_incorrect.length; i++) {
        for (let j = 0; j <respiratory_incorrect.length; j++) {
           if (Pathology_incorrect[i].title == respiratory_incorrect[j].title) {
           mix_respiratory.push(Pathology_incorrect[i]);
         }
     }}
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <cardiovascular_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == cardiovascular_incorrect[j].title) {
         mix_cardiovascular.push(Pathology_incorrect[i]);
       }
    }
    }
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <renal_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == renal_incorrect[j].title) {
         mix_renal.push(Pathology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <allergy_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == allergy_incorrect[j].title) {
         mix_Allergy.push(Pathology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <dermatology_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == dermatology_incorrect[j].title) {
         mix_dermatology.push(Pathology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == gastrointestinal_incorrect[j].title) {
         mix_gastrointestinal.push(Pathology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <hematology_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == hematology_incorrect[j].title) {
         mix_hematology.push(Pathology_incorrect[i]);
       }
    }}
     
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <neuro_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == neuro_incorrect[j].title) {
         mix_neuro.push(Pathology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <rheumatology_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == rheumatology_incorrect[j].title) {
         mix_Rheumatology.push(Pathology_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <infectious_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == infectious_incorrect[j].title) {
         mix_infectious.push(Pathology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <endocrine_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == endocrine_incorrect[j].title) {
         mix_endocrine.push(Pathology_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <reproductive_F_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == reproductive_F_incorrect[j].title) {
         mix_reproductive_F.push(Pathology_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <reproductive_M_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == reproductive_M_incorrect[j].title) {
         mix_reproductive_M.push(Pathology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pathology_incorrect.length; i++) {
      for (let j = 0; j <pregnancy_incorrect.length; j++) {
         if (Pathology_incorrect[i].title == pregnancy_incorrect[j].title) {
         mix_pregnancy.push(Pathology_incorrect[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_incorrect();
  
  
  
  }else if (document.getElementById("marked").checked){
    if(document.getElementById("Pathology").checked){
  subject_array=subject_array.concat(Pathology_marked);
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
    for (let j = 0; j <respiratory_marked.length; j++) {
       if (Pathology_marked[i].title == respiratory_marked[j].title) {
       mix_respiratory.push(Pathology_marked[i]);
     }
  }}
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <cardiovascular_marked.length; j++) {
     if (Pathology_marked[i].title == cardiovascular_marked[j].title) {
     mix_cardiovascular.push(Pathology_marked[i]);
   }
  }
  }
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <renal_marked.length; j++) {
     if (Pathology_marked[i].title == renal_marked[j].title) {
     mix_renal.push(Pathology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <allergy_marked.length; j++) {
     if (Pathology_marked[i].title == allergy_marked[j].title) {
     mix_Allergy.push(Pathology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <dermatology_marked.length; j++) {
     if (Pathology_marked[i].title == dermatology_marked[j].title) {
     mix_dermatology.push(Pathology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <gastrointestinal_marked.length; j++) {
     if (Pathology_marked[i].title == gastrointestinal_marked[j].title) {
     mix_gastrointestinal.push(Pathology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <hematology_marked.length; j++) {
     if (Pathology_marked[i].title == hematology_marked[j].title) {
     mix_hematology.push(Pathology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <neuro_marked.length; j++) {
     if (Pathology_marked[i].title == neuro_marked[j].title) {
     mix_neuro.push(Pathology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <rheumatology_marked.length; j++) {
     if (Pathology_marked[i].title == rheumatology_marked[j].title) {
     mix_Rheumatology.push(Pathology_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <infectious_marked.length; j++) {
     if (Pathology_marked[i].title == infectious_marked[j].title) {
     mix_infectious.push(Pathology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <endocrine_marked.length; j++) {
     if (Pathology_marked[i].title == endocrine_marked[j].title) {
     mix_endocrine.push(Pathology_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <reproductive_F_marked.length; j++) {
     if (Pathology_marked[i].title == reproductive_F_marked[j].title) {
     mix_reproductive_F.push(Pathology_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <reproductive_M_marked.length; j++) {
     if (Pathology_marked[i].title == reproductive_M_marked[j].title) {
     mix_reproductive_M.push(Pathology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pathology_marked.length; i++) {
  for (let j = 0; j <pregnancy_marked.length; j++) {
     if (Pathology_marked[i].title == pregnancy_marked[j].title) {
     mix_pregnancy.push(Pathology_marked[i]);
   }
  }}
  
  
  }else{
  makeZeros();
  if(document.getElementById("Medicine").checked){shownumber_medicine();}
  if(document.getElementById("Surgery").checked){shownumber_surgery();}
  if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
  if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
  if (document.getElementById("Embryology").checked){ shownumber_embryology();}
  if (document.getElementById("Genetics").checked){ shownumber_genetics();}
  if (document.getElementById("Histology").checked){ shownumber_histology();}
  if (document.getElementById("Immunology").checked){ shownumber_immunology();}
  if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
  if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
  if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
  if (document.getElementById("Physiology").checked){ shownumber_physiology();}
  
  
  
  }
  update_texts_marked();
  
  //
  }
  
  
}




function shownumber_Pathophysiology() {
    if(document.getElementById("unused").checked){

  if(document.getElementById("Pathophysiology").checked){
subject_array=subject_array.concat(Pathophysiology_updated);
for (let i = 0; i <  Pathophysiology_updated.length; i++) {
  for (let j = 0; j <respiratory_updated.length; j++) {
     if (Pathophysiology_updated[i].title == respiratory_updated[j].title) {
     mix_respiratory.push(Pathophysiology_updated[i]);
   }
}}


for (let i = 0; i <  Pathophysiology_updated.length; i++) {
for (let j = 0; j <cardiovascular_updated.length; j++) {
   if (Pathophysiology_updated[i].title == cardiovascular_updated[j].title) {
   mix_cardiovascular.push(Pathophysiology_updated[i]);
 }
}}


for (let i = 0; i <  Pathophysiology_updated.length; i++) {
for (let j = 0; j <renal_updated.length; j++) {
   if (Pathophysiology_updated[i].title == renal_updated[j].title) {
   mix_renal.push(Pathophysiology_updated[i]);
 }
}}

for (let i = 0; i <  Pathophysiology_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (Pathophysiology_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(Pathophysiology_updated[i]);
   }
}}


for (let i = 0; i <  Pathophysiology_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (Pathophysiology_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(Pathophysiology_updated[i]);
   }
}}



for (let i = 0; i <  Pathophysiology_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (Pathophysiology_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(Pathophysiology_updated[i]);
   }
}}


for (let i = 0; i <  Pathophysiology_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (Pathophysiology_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(Pathophysiology_updated[i]);
   }
}}


for (let i = 0; i <  Pathophysiology_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (Pathophysiology_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(Pathophysiology_updated[i]);
   }
}}


for (let i = 0; i <  Pathophysiology_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (Pathophysiology_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(Pathophysiology_updated[i]);
   }
}}



for (let i = 0; i <  Pathophysiology_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (Pathophysiology_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(Pathophysiology_updated[i]);
   }
}}




for (let i = 0; i <  Pathophysiology_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (Pathophysiology_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(Pathophysiology_updated[i]);
   }
}}

for (let i = 0; i <  Pathophysiology_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (Pathophysiology_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(Pathophysiology_updated[i]);
   }
}}

for (let i = 0; i <  Pathophysiology_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (Pathophysiology_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(Pathophysiology_updated[i]);
   }
}}


for (let i = 0; i <  Pathophysiology_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (Pathophysiology_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(Pathophysiology_updated[i]);
   }
}}


}else{
makeZeros();
 if(document.getElementById("Medicine").checked){shownumber_medicine();}
 if(document.getElementById("Surgery").checked){shownumber_surgery();}
 if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
 if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
 if (document.getElementById("Embryology").checked){ shownumber_embryology();}
 if (document.getElementById("Genetics").checked){ shownumber_genetics();}
 if (document.getElementById("Histology").checked){ shownumber_histology();}
 if (document.getElementById("Immunology").checked){ shownumber_immunology();}
 if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
 if (document.getElementById("Pathology").checked){ shownumber_pathology();}
 if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
 if (document.getElementById("Physiology").checked){ shownumber_physiology();}

}
update_texts();





    }else if (document.getElementById("all-mode").checked){

  
      if(document.getElementById("Pathophysiology").checked){
        subject_array=subject_array.concat(Pathophysiology_questions);
      
        for (let i = 0; i <  Pathophysiology_questions.length; i++) {
          for (let j = 0; j <respiratory_questions.length; j++) {
             if (Pathophysiology_questions[i].title == respiratory_questions[j].title) {
             mix_respiratory.push(Pathophysiology_questions[i]);
           }
       }}
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <cardiovascular_questions.length; j++) {
           if (Pathophysiology_questions[i].title == cardiovascular_questions[j].title) {
           mix_cardiovascular.push(Pathophysiology_questions[i]);
         }
      }
      }
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <renal_questions.length; j++) {
           if (Pathophysiology_questions[i].title == renal_questions[j].title) {
           mix_renal.push(Pathophysiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <allergy_questions.length; j++) {
           if (Pathophysiology_questions[i].title == allergy_questions[j].title) {
           mix_Allergy.push(Pathophysiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <dermatology_questions.length; j++) {
           if (Pathophysiology_questions[i].title == dermatology_questions[j].title) {
           mix_dermatology.push(Pathophysiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <gastrointestinal_questions.length; j++) {
           if (Pathophysiology_questions[i].title == gastrointestinal_questions[j].title) {
           mix_gastrointestinal.push(Pathophysiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <hematology_questions.length; j++) {
           if (Pathophysiology_questions[i].title == hematology_questions[j].title) {
           mix_hematology.push(Pathophysiology_questions[i]);
         }
      }}
       
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <neuro_questions.length; j++) {
           if (Pathophysiology_questions[i].title == neuro_questions[j].title) {
           mix_neuro.push(Pathophysiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <rheumatology_questions.length; j++) {
           if (Pathophysiology_questions[i].title == rheumatology_questions[j].title) {
           mix_Rheumatology.push(Pathophysiology_questions[i]);
         }
      }}
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <infectious_questions.length; j++) {
           if (Pathophysiology_questions[i].title == infectious_questions[j].title) {
           mix_infectious.push(Pathophysiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <endocrine_questions.length; j++) {
           if (Pathophysiology_questions[i].title == endocrine_questions[j].title) {
           mix_endocrine.push(Pathophysiology_questions[i]);
         }
      }}
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <reproductive_F_questions.length; j++) {
           if (Pathophysiology_questions[i].title == reproductive_F_questions[j].title) {
           mix_reproductive_F.push(Pathophysiology_questions[i]);
         }
      }}
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <reproductive_M_questions.length; j++) {
           if (Pathophysiology_questions[i].title == reproductive_M_questions[j].title) {
           mix_reproductive_M.push(Pathophysiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_questions.length; i++) {
        for (let j = 0; j <pregnancy_questions.length; j++) {
           if (Pathophysiology_questions[i].title == pregnancy_questions[j].title) {
           mix_pregnancy.push(Pathophysiology_questions[i]);
         }
      }}
      
      
      }else{
      makeZeros();
      if(document.getElementById("Medicine").checked){shownumber_medicine();}
      if(document.getElementById("Surgery").checked){shownumber_surgery();}
      if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
      if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
      if (document.getElementById("Embryology").checked){ shownumber_embryology();}
      if (document.getElementById("Genetics").checked){ shownumber_genetics();}
      if (document.getElementById("Histology").checked){ shownumber_histology();}
      if (document.getElementById("Immunology").checked){ shownumber_immunology();}
      if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
      if (document.getElementById("Pathology").checked){ shownumber_pathology();}
      if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
      if (document.getElementById("Physiology").checked){ shownumber_physiology();}
      
      
      
      }
      update_texts_all_mode();
    
    }  else if (document.getElementById("incorrect").checked){


      if(document.getElementById("Pathophysiology").checked){
        subject_array=subject_array.concat(Pathophysiology_incorrect);
      
        for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
          for (let j = 0; j <respiratory_incorrect.length; j++) {
             if (Pathophysiology_incorrect[i].title == respiratory_incorrect[j].title) {
             mix_respiratory.push(Pathophysiology_incorrect[i]);
           }
       }}
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <cardiovascular_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == cardiovascular_incorrect[j].title) {
           mix_cardiovascular.push(Pathophysiology_incorrect[i]);
         }
      }
      }
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <renal_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == renal_incorrect[j].title) {
           mix_renal.push(Pathophysiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <allergy_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == allergy_incorrect[j].title) {
           mix_Allergy.push(Pathophysiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <dermatology_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == dermatology_incorrect[j].title) {
           mix_dermatology.push(Pathophysiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == gastrointestinal_incorrect[j].title) {
           mix_gastrointestinal.push(Pathophysiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <hematology_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == hematology_incorrect[j].title) {
           mix_hematology.push(Pathophysiology_incorrect[i]);
         }
      }}
       
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <neuro_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == neuro_incorrect[j].title) {
           mix_neuro.push(Pathophysiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <rheumatology_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == rheumatology_incorrect[j].title) {
           mix_Rheumatology.push(Pathophysiology_incorrect[i]);
         }
      }}
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <infectious_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == infectious_incorrect[j].title) {
           mix_infectious.push(Pathophysiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <endocrine_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == endocrine_incorrect[j].title) {
           mix_endocrine.push(Pathophysiology_incorrect[i]);
         }
      }}
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <reproductive_F_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == reproductive_F_incorrect[j].title) {
           mix_reproductive_F.push(Pathophysiology_incorrect[i]);
         }
      }}
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <reproductive_M_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == reproductive_M_incorrect[j].title) {
           mix_reproductive_M.push(Pathophysiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Pathophysiology_incorrect.length; i++) {
        for (let j = 0; j <pregnancy_incorrect.length; j++) {
           if (Pathophysiology_incorrect[i].title == pregnancy_incorrect[j].title) {
           mix_pregnancy.push(Pathophysiology_incorrect[i]);
         }
      }}
      
      
      }else{
      makeZeros();
      if(document.getElementById("Medicine").checked){shownumber_medicine();}
      if(document.getElementById("Surgery").checked){shownumber_surgery();}
      if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
      if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
      if (document.getElementById("Embryology").checked){ shownumber_embryology();}
      if (document.getElementById("Genetics").checked){ shownumber_genetics();}
      if (document.getElementById("Histology").checked){ shownumber_histology();}
      if (document.getElementById("Immunology").checked){ shownumber_immunology();}
      if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
      if (document.getElementById("Pathology").checked){ shownumber_pathology();}
      if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
      if (document.getElementById("Physiology").checked){ shownumber_physiology();}
      
      
      
      }
      update_texts_incorrect();
    
    
    
    }else if (document.getElementById("marked").checked){
      if(document.getElementById("Pathophysiology").checked){
    subject_array=subject_array.concat(Pathophysiology_marked);
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
      for (let j = 0; j <respiratory_marked.length; j++) {
         if (Pathophysiology_marked[i].title == respiratory_marked[j].title) {
         mix_respiratory.push(Pathophysiology_marked[i]);
       }
    }}
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <cardiovascular_marked.length; j++) {
       if (Pathophysiology_marked[i].title == cardiovascular_marked[j].title) {
       mix_cardiovascular.push(Pathophysiology_marked[i]);
     }
    }
    }
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <renal_marked.length; j++) {
       if (Pathophysiology_marked[i].title == renal_marked[j].title) {
       mix_renal.push(Pathophysiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <allergy_marked.length; j++) {
       if (Pathophysiology_marked[i].title == allergy_marked[j].title) {
       mix_Allergy.push(Pathophysiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <dermatology_marked.length; j++) {
       if (Pathophysiology_marked[i].title == dermatology_marked[j].title) {
       mix_dermatology.push(Pathophysiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <gastrointestinal_marked.length; j++) {
       if (Pathophysiology_marked[i].title == gastrointestinal_marked[j].title) {
       mix_gastrointestinal.push(Pathophysiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <hematology_marked.length; j++) {
       if (Pathophysiology_marked[i].title == hematology_marked[j].title) {
       mix_hematology.push(Pathophysiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <neuro_marked.length; j++) {
       if (Pathophysiology_marked[i].title == neuro_marked[j].title) {
       mix_neuro.push(Pathophysiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <rheumatology_marked.length; j++) {
       if (Pathophysiology_marked[i].title == rheumatology_marked[j].title) {
       mix_Rheumatology.push(Pathophysiology_marked[i]);
     }
    }}
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <infectious_marked.length; j++) {
       if (Pathophysiology_marked[i].title == infectious_marked[j].title) {
       mix_infectious.push(Pathophysiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <endocrine_marked.length; j++) {
       if (Pathophysiology_marked[i].title == endocrine_marked[j].title) {
       mix_endocrine.push(Pathophysiology_marked[i]);
     }
    }}
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <reproductive_F_marked.length; j++) {
       if (Pathophysiology_marked[i].title == reproductive_F_marked[j].title) {
       mix_reproductive_F.push(Pathophysiology_marked[i]);
     }
    }}
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <reproductive_M_marked.length; j++) {
       if (Pathophysiology_marked[i].title == reproductive_M_marked[j].title) {
       mix_reproductive_M.push(Pathophysiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Pathophysiology_marked.length; i++) {
    for (let j = 0; j <pregnancy_marked.length; j++) {
       if (Pathophysiology_marked[i].title == pregnancy_marked[j].title) {
       mix_pregnancy.push(Pathophysiology_marked[i]);
     }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_marked();
    
    //
    }
    
}



function shownumber_pharmacology() {

  if(document.getElementById("unused").checked){
  if(document.getElementById("Pharmacology").checked){
subject_array=subject_array.concat(Pharmacology_updated);
for (let i = 0; i <  Pharmacology_updated.length; i++) {
  for (let j = 0; j <respiratory_updated.length; j++) {
     if (Pharmacology_updated[i].title == respiratory_updated[j].title) {
     mix_respiratory.push(Pharmacology_updated[i]);
   }
}}



for (let i = 0; i <  Pharmacology_updated.length; i++) {
for (let j = 0; j <cardiovascular_updated.length; j++) {
   if (Pharmacology_updated[i].title == cardiovascular_updated[j].title) {
   mix_cardiovascular.push(Pharmacology_updated[i]);
 }
}}



for (let i = 0; i <  Pharmacology_updated.length; i++) {
for (let j = 0; j <renal_updated.length; j++) {
   if (Pharmacology_updated[i].title == renal_updated[j].title) {
   mix_renal.push(Pharmacology_updated[i]);
 }
}}


for (let i = 0; i <  Pharmacology_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (Pharmacology_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(Pharmacology_updated[i]);
   }
}}



for (let i = 0; i <  Pharmacology_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (Pharmacology_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(Pharmacology_updated[i]);
   }
}}



for (let i = 0; i <  Pharmacology_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (Pharmacology_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(Pharmacology_updated[i]);
   }
}}



for (let i = 0; i <  Pharmacology_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (Pharmacology_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(Pharmacology_updated[i]);
   }
}}



for (let i = 0; i <  Pharmacology_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (Pharmacology_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(Pharmacology_updated[i]);
   }
}}


for (let i = 0; i <  Pharmacology_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (Pharmacology_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(Pharmacology_updated[i]);
   }
}}



for (let i = 0; i <  Pharmacology_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (Pharmacology_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(Pharmacology_updated[i]);
   }
}}


for (let i = 0; i <  Pharmacology_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (Pharmacology_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(Pharmacology_updated[i]);
   }
}}

for (let i = 0; i <  Pharmacology_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (Pharmacology_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(Pharmacology_updated[i]);
   }
}}

for (let i = 0; i <  Pharmacology_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (Pharmacology_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(Pharmacology_updated[i]);
   }
}}

for (let i = 0; i <  Pharmacology_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (Pharmacology_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(Pharmacology_updated[i]);
   }
}}


}else{
makeZeros();
 if(document.getElementById("Medicine").checked){shownumber_medicine();}
 if(document.getElementById("Surgery").checked){shownumber_surgery();}
 if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
 if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
 if (document.getElementById("Embryology").checked){ shownumber_embryology();}
 if (document.getElementById("Genetics").checked){ shownumber_genetics();}
 if (document.getElementById("Histology").checked){ shownumber_histology();}
 if (document.getElementById("Immunology").checked){ shownumber_immunology();}
 if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
 if (document.getElementById("Pathology").checked){ shownumber_pathology();}
 if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
 if (document.getElementById("Physiology").checked){ shownumber_physiology();}



}
update_texts();




  }else if (document.getElementById("all-mode").checked){

  
    if(document.getElementById("Pharmacology").checked){
      subject_array=subject_array.concat(Pharmacology_questions);
    
      for (let i = 0; i <  Pharmacology_questions.length; i++) {
        for (let j = 0; j <respiratory_questions.length; j++) {
           if (Pharmacology_questions[i].title == respiratory_questions[j].title) {
           mix_respiratory.push(Pharmacology_questions[i]);
         }
     }}
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <cardiovascular_questions.length; j++) {
         if (Pharmacology_questions[i].title == cardiovascular_questions[j].title) {
         mix_cardiovascular.push(Pharmacology_questions[i]);
       }
    }
    }
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <renal_questions.length; j++) {
         if (Pharmacology_questions[i].title == renal_questions[j].title) {
         mix_renal.push(Pharmacology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <allergy_questions.length; j++) {
         if (Pharmacology_questions[i].title == allergy_questions[j].title) {
         mix_Allergy.push(Pharmacology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <dermatology_questions.length; j++) {
         if (Pharmacology_questions[i].title == dermatology_questions[j].title) {
         mix_dermatology.push(Pharmacology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <gastrointestinal_questions.length; j++) {
         if (Pharmacology_questions[i].title == gastrointestinal_questions[j].title) {
         mix_gastrointestinal.push(Pharmacology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <hematology_questions.length; j++) {
         if (Pharmacology_questions[i].title == hematology_questions[j].title) {
         mix_hematology.push(Pharmacology_questions[i]);
       }
    }}
     
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <neuro_questions.length; j++) {
         if (Pharmacology_questions[i].title == neuro_questions[j].title) {
         mix_neuro.push(Pharmacology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <rheumatology_questions.length; j++) {
         if (Pharmacology_questions[i].title == rheumatology_questions[j].title) {
         mix_Rheumatology.push(Pharmacology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <infectious_questions.length; j++) {
         if (Pharmacology_questions[i].title == infectious_questions[j].title) {
         mix_infectious.push(Pharmacology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <endocrine_questions.length; j++) {
         if (Pharmacology_questions[i].title == endocrine_questions[j].title) {
         mix_endocrine.push(Pharmacology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <reproductive_F_questions.length; j++) {
         if (Pharmacology_questions[i].title == reproductive_F_questions[j].title) {
         mix_reproductive_F.push(Pharmacology_questions[i]);
       }
    }}
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <reproductive_M_questions.length; j++) {
         if (Pharmacology_questions[i].title == reproductive_M_questions[j].title) {
         mix_reproductive_M.push(Pharmacology_questions[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_questions.length; i++) {
      for (let j = 0; j <pregnancy_questions.length; j++) {
         if (Pharmacology_questions[i].title == pregnancy_questions[j].title) {
         mix_pregnancy.push(Pharmacology_questions[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_all_mode();
  
  } else if (document.getElementById("incorrect").checked){


    if(document.getElementById("Pharmacology").checked){
      subject_array=subject_array.concat(Pharmacology_incorrect);
    
      for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
        for (let j = 0; j <respiratory_incorrect.length; j++) {
           if (Pharmacology_incorrect[i].title == respiratory_incorrect[j].title) {
           mix_respiratory.push(Pharmacology_incorrect[i]);
         }
     }}
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <cardiovascular_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == cardiovascular_incorrect[j].title) {
         mix_cardiovascular.push(Pharmacology_incorrect[i]);
       }
    }
    }
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <renal_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == renal_incorrect[j].title) {
         mix_renal.push(Pharmacology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <allergy_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == allergy_incorrect[j].title) {
         mix_Allergy.push(Pharmacology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <dermatology_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == dermatology_incorrect[j].title) {
         mix_dermatology.push(Pharmacology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == gastrointestinal_incorrect[j].title) {
         mix_gastrointestinal.push(Pharmacology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <hematology_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == hematology_incorrect[j].title) {
         mix_hematology.push(Pharmacology_incorrect[i]);
       }
    }}
     
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <neuro_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == neuro_incorrect[j].title) {
         mix_neuro.push(Pharmacology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <rheumatology_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == rheumatology_incorrect[j].title) {
         mix_Rheumatology.push(Pharmacology_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <infectious_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == infectious_incorrect[j].title) {
         mix_infectious.push(Pharmacology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <endocrine_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == endocrine_incorrect[j].title) {
         mix_endocrine.push(Pharmacology_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <reproductive_F_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == reproductive_F_incorrect[j].title) {
         mix_reproductive_F.push(Pharmacology_incorrect[i]);
       }
    }}
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <reproductive_M_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == reproductive_M_incorrect[j].title) {
         mix_reproductive_M.push(Pharmacology_incorrect[i]);
       }
    }}
    
    
    for (let i = 0; i <  Pharmacology_incorrect.length; i++) {
      for (let j = 0; j <pregnancy_incorrect.length; j++) {
         if (Pharmacology_incorrect[i].title == pregnancy_incorrect[j].title) {
         mix_pregnancy.push(Pharmacology_incorrect[i]);
       }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Physiology").checked){ shownumber_physiology();}
    
    
    
    }
    update_texts_incorrect();
  
  
  
  }else if (document.getElementById("marked").checked){
    if(document.getElementById("Pharmacology").checked){
  subject_array=subject_array.concat(Pharmacology_marked);
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
    for (let j = 0; j <respiratory_marked.length; j++) {
       if (Pharmacology_marked[i].title == respiratory_marked[j].title) {
       mix_respiratory.push(Pharmacology_marked[i]);
     }
  }}
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <cardiovascular_marked.length; j++) {
     if (Pharmacology_marked[i].title == cardiovascular_marked[j].title) {
     mix_cardiovascular.push(Pharmacology_marked[i]);
   }
  }
  }
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <renal_marked.length; j++) {
     if (Pharmacology_marked[i].title == renal_marked[j].title) {
     mix_renal.push(Pharmacology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <allergy_marked.length; j++) {
     if (Pharmacology_marked[i].title == allergy_marked[j].title) {
     mix_Allergy.push(Pharmacology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <dermatology_marked.length; j++) {
     if (Pharmacology_marked[i].title == dermatology_marked[j].title) {
     mix_dermatology.push(Pharmacology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <gastrointestinal_marked.length; j++) {
     if (Pharmacology_marked[i].title == gastrointestinal_marked[j].title) {
     mix_gastrointestinal.push(Pharmacology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <hematology_marked.length; j++) {
     if (Pharmacology_marked[i].title == hematology_marked[j].title) {
     mix_hematology.push(Pharmacology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <neuro_marked.length; j++) {
     if (Pharmacology_marked[i].title == neuro_marked[j].title) {
     mix_neuro.push(Pharmacology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <rheumatology_marked.length; j++) {
     if (Pharmacology_marked[i].title == rheumatology_marked[j].title) {
     mix_Rheumatology.push(Pharmacology_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <infectious_marked.length; j++) {
     if (Pharmacology_marked[i].title == infectious_marked[j].title) {
     mix_infectious.push(Pharmacology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <endocrine_marked.length; j++) {
     if (Pharmacology_marked[i].title == endocrine_marked[j].title) {
     mix_endocrine.push(Pharmacology_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <reproductive_F_marked.length; j++) {
     if (Pharmacology_marked[i].title == reproductive_F_marked[j].title) {
     mix_reproductive_F.push(Pharmacology_marked[i]);
   }
  }}
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <reproductive_M_marked.length; j++) {
     if (Pharmacology_marked[i].title == reproductive_M_marked[j].title) {
     mix_reproductive_M.push(Pharmacology_marked[i]);
   }
  }}
  
  
  for (let i = 0; i <  Pharmacology_marked.length; i++) {
  for (let j = 0; j <pregnancy_marked.length; j++) {
     if (Pharmacology_marked[i].title == pregnancy_marked[j].title) {
     mix_pregnancy.push(Pharmacology_marked[i]);
   }
  }}
  
  
  }else{
  makeZeros();
  if(document.getElementById("Medicine").checked){shownumber_medicine();}
  if(document.getElementById("Surgery").checked){shownumber_surgery();}
  if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
  if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
  if (document.getElementById("Embryology").checked){ shownumber_embryology();}
  if (document.getElementById("Genetics").checked){ shownumber_genetics();}
  if (document.getElementById("Histology").checked){ shownumber_histology();}
  if (document.getElementById("Immunology").checked){ shownumber_immunology();}
  if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
  if (document.getElementById("Pathology").checked){ shownumber_pathology();}
  if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
  if (document.getElementById("Physiology").checked){ shownumber_physiology();}
  
  
  
  }
  update_texts_marked();
  
  //
  }
  
  
}






function shownumber_physiology() {
    if(document.getElementById("unused").checked){

  if(document.getElementById("Physiology").checked){
subject_array=subject_array.concat(Physiology_updated);
for (let i = 0; i <  Physiology_updated.length; i++) {
  for (let j = 0; j <respiratory_updated.length; j++) {
     if (Physiology_updated[i].title == respiratory_updated[j].title) {
     mix_respiratory.push(Physiology_updated[i]);
   }
}}


for (let i = 0; i <  Physiology_updated.length; i++) {
for (let j = 0; j <cardiovascular_updated.length; j++) {
   if (Physiology_updated[i].title == cardiovascular_updated[j].title) {
   mix_cardiovascular.push(Physiology_updated[i]);
 }
}}


for (let i = 0; i <  Physiology_updated.length; i++) {
for (let j = 0; j <renal_updated.length; j++) {
   if (Physiology_updated[i].title == renal_updated[j].title) {
   mix_renal.push(Physiology_updated[i]);
 }
}}


for (let i = 0; i <  Physiology_updated.length; i++) {
  for (let j = 0; j <allergy_updated.length; j++) {
     if (Physiology_updated[i].title == allergy_updated[j].title) {
     mix_Allergy.push(Physiology_updated[i]);
   }
}}


for (let i = 0; i <  Physiology_updated.length; i++) {
  for (let j = 0; j <dermatology_updated.length; j++) {
     if (Physiology_updated[i].title == dermatology_updated[j].title) {
     mix_dermatology.push(Physiology_updated[i]);
   }
}}



for (let i = 0; i <  Physiology_updated.length; i++) {
  for (let j = 0; j <gastrointestinal_updated.length; j++) {
     if (Physiology_updated[i].title == gastrointestinal_updated[j].title) {
     mix_gastrointestinal.push(Physiology_updated[i]);
   }
}}


for (let i = 0; i <  Physiology_updated.length; i++) {
  for (let j = 0; j <hematology_updated.length; j++) {
     if (Physiology_updated[i].title == hematology_updated[j].title) {
     mix_hematology.push(Physiology_updated[i]);
   }
}}


for (let i = 0; i <  Physiology_updated.length; i++) {
  for (let j = 0; j <neuro_updated.length; j++) {
     if (Physiology_updated[i].title == neuro_updated[j].title) {
     mix_neuro.push(Physiology_updated[i]);
   }
}}



for (let i = 0; i <  Physiology_updated.length; i++) {
  for (let j = 0; j <rheumatology_updated.length; j++) {
     if (Physiology_updated[i].title == rheumatology_updated[j].title) {
     mix_Rheumatology.push(Physiology_updated[i]);
   }
}}


for (let i = 0; i <  Physiology_updated.length; i++) {
  for (let j = 0; j <infectious_updated.length; j++) {
     if (Physiology_updated[i].title == infectious_updated[j].title) {
     mix_infectious.push(Physiology_updated[i]);
   }
}}


for (let i = 0; i <  Physiology_updated.length; i++) {
  for (let j = 0; j <endocrine_updated.length; j++) {
     if (Physiology_updated[i].title == endocrine_updated[j].title) {
     mix_endocrine.push(Physiology_updated[i]);
   }
}}

for (let i = 0; i <  Physiology_updated.length; i++) {
  for (let j = 0; j <reproductive_F_updated.length; j++) {
     if (Physiology_updated[i].title == reproductive_F_updated[j].title) {
     mix_reproductive_F.push(Physiology_updated[i]);
   }
}}

for (let i = 0; i <  Physiology_updated.length; i++) {
  for (let j = 0; j <reproductive_M_updated.length; j++) {
     if (Physiology_updated[i].title == reproductive_M_updated[j].title) {
     mix_reproductive_M.push(Physiology_updated[i]);
   }
}}

for (let i = 0; i <  Physiology_updated.length; i++) {
  for (let j = 0; j <pregnancy_updated.length; j++) {
     if (Physiology_updated[i].title == pregnancy_updated[j].title) {
     mix_pregnancy.push(Physiology_updated[i]);
   }
}}

}else{
makeZeros();
 if(document.getElementById("Medicine").checked){shownumber_medicine();}
 if(document.getElementById("Surgery").checked){shownumber_surgery();}
 if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
 if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
 if (document.getElementById("Embryology").checked){ shownumber_embryology();}
 if (document.getElementById("Genetics").checked){ shownumber_genetics();}
 if (document.getElementById("Histology").checked){ shownumber_histology();}
 if (document.getElementById("Immunology").checked){ shownumber_immunology();}
 if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
 if (document.getElementById("Pathology").checked){ shownumber_pathology();}
 if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
 if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}



}
update_texts();






    }else if (document.getElementById("all-mode").checked){

  
      if(document.getElementById("Physiology").checked){
        subject_array=subject_array.concat(Physiology_questions);
      
        for (let i = 0; i <  Physiology_questions.length; i++) {
          for (let j = 0; j <respiratory_questions.length; j++) {
             if (Physiology_questions[i].title == respiratory_questions[j].title) {
             mix_respiratory.push(Physiology_questions[i]);
           }
       }}
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <cardiovascular_questions.length; j++) {
           if (Physiology_questions[i].title == cardiovascular_questions[j].title) {
           mix_cardiovascular.push(Physiology_questions[i]);
         }
      }
      }
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <renal_questions.length; j++) {
           if (Physiology_questions[i].title == renal_questions[j].title) {
           mix_renal.push(Physiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <allergy_questions.length; j++) {
           if (Physiology_questions[i].title == allergy_questions[j].title) {
           mix_Allergy.push(Physiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <dermatology_questions.length; j++) {
           if (Physiology_questions[i].title == dermatology_questions[j].title) {
           mix_dermatology.push(Physiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <gastrointestinal_questions.length; j++) {
           if (Physiology_questions[i].title == gastrointestinal_questions[j].title) {
           mix_gastrointestinal.push(Physiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <hematology_questions.length; j++) {
           if (Physiology_questions[i].title == hematology_questions[j].title) {
           mix_hematology.push(Physiology_questions[i]);
         }
      }}
       
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <neuro_questions.length; j++) {
           if (Physiology_questions[i].title == neuro_questions[j].title) {
           mix_neuro.push(Physiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <rheumatology_questions.length; j++) {
           if (Physiology_questions[i].title == rheumatology_questions[j].title) {
           mix_Rheumatology.push(Physiology_questions[i]);
         }
      }}
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <infectious_questions.length; j++) {
           if (Physiology_questions[i].title == infectious_questions[j].title) {
           mix_infectious.push(Physiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <endocrine_questions.length; j++) {
           if (Physiology_questions[i].title == endocrine_questions[j].title) {
           mix_endocrine.push(Physiology_questions[i]);
         }
      }}
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <reproductive_F_questions.length; j++) {
           if (Physiology_questions[i].title == reproductive_F_questions[j].title) {
           mix_reproductive_F.push(Physiology_questions[i]);
         }
      }}
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <reproductive_M_questions.length; j++) {
           if (Physiology_questions[i].title == reproductive_M_questions[j].title) {
           mix_reproductive_M.push(Physiology_questions[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_questions.length; i++) {
        for (let j = 0; j <pregnancy_questions.length; j++) {
           if (Physiology_questions[i].title == pregnancy_questions[j].title) {
           mix_pregnancy.push(Physiology_questions[i]);
         }
      }}
      
      
      }else{
      makeZeros();
      if(document.getElementById("Medicine").checked){shownumber_medicine();}
      if(document.getElementById("Surgery").checked){shownumber_surgery();}
      if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
      if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
      if (document.getElementById("Embryology").checked){ shownumber_embryology();}
      if (document.getElementById("Genetics").checked){ shownumber_genetics();}
      if (document.getElementById("Histology").checked){ shownumber_histology();}
      if (document.getElementById("Immunology").checked){ shownumber_immunology();}
      if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
      if (document.getElementById("Pathology").checked){ shownumber_pathology();}
      if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
      if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
      
      
      
      }
      update_texts_all_mode();
    
    }else if (document.getElementById("incorrect").checked){

      if(document.getElementById("Physiology").checked){
        subject_array=subject_array.concat(Physiology_incorrect);
      
        for (let i = 0; i <  Physiology_incorrect.length; i++) {
          for (let j = 0; j <respiratory_incorrect.length; j++) {
             if (Physiology_incorrect[i].title == respiratory_incorrect[j].title) {
             mix_respiratory.push(Physiology_incorrect[i]);
           }
       }}
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <cardiovascular_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == cardiovascular_incorrect[j].title) {
           mix_cardiovascular.push(Physiology_incorrect[i]);
         }
      }
      }
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <renal_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == renal_incorrect[j].title) {
           mix_renal.push(Physiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <allergy_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == allergy_incorrect[j].title) {
           mix_Allergy.push(Physiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <dermatology_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == dermatology_incorrect[j].title) {
           mix_dermatology.push(Physiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <gastrointestinal_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == gastrointestinal_incorrect[j].title) {
           mix_gastrointestinal.push(Physiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <hematology_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == hematology_incorrect[j].title) {
           mix_hematology.push(Physiology_incorrect[i]);
         }
      }}
       
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <neuro_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == neuro_incorrect[j].title) {
           mix_neuro.push(Physiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <rheumatology_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == rheumatology_incorrect[j].title) {
           mix_Rheumatology.push(Physiology_incorrect[i]);
         }
      }}
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <infectious_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == infectious_incorrect[j].title) {
           mix_infectious.push(Physiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <endocrine_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == endocrine_incorrect[j].title) {
           mix_endocrine.push(Physiology_incorrect[i]);
         }
      }}
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <reproductive_F_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == reproductive_F_incorrect[j].title) {
           mix_reproductive_F.push(Physiology_incorrect[i]);
         }
      }}
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <reproductive_M_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == reproductive_M_incorrect[j].title) {
           mix_reproductive_M.push(Physiology_incorrect[i]);
         }
      }}
      
      
      for (let i = 0; i <  Physiology_incorrect.length; i++) {
        for (let j = 0; j <pregnancy_incorrect.length; j++) {
           if (Physiology_incorrect[i].title == pregnancy_incorrect[j].title) {
           mix_pregnancy.push(Physiology_incorrect[i]);
         }
      }}
      
      
      }else{
      makeZeros();
      if(document.getElementById("Medicine").checked){shownumber_medicine();}
      if(document.getElementById("Surgery").checked){shownumber_surgery();}
      if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
      if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
      if (document.getElementById("Embryology").checked){ shownumber_embryology();}
      if (document.getElementById("Genetics").checked){ shownumber_genetics();}
      if (document.getElementById("Histology").checked){ shownumber_histology();}
      if (document.getElementById("Immunology").checked){ shownumber_immunology();}
      if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
      if (document.getElementById("Pathology").checked){ shownumber_pathology();}
      if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
      if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
      
      
      
      }
      update_texts_incorrect();
    
    
    
    }else if (document.getElementById("marked").checked){
      if(document.getElementById("Physiology").checked){
    subject_array=subject_array.concat(Physiology_marked);
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
      for (let j = 0; j <respiratory_marked.length; j++) {
         if (Physiology_marked[i].title == respiratory_marked[j].title) {
         mix_respiratory.push(Physiology_marked[i]);
       }
    }}
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <cardiovascular_marked.length; j++) {
       if (Physiology_marked[i].title == cardiovascular_marked[j].title) {
       mix_cardiovascular.push(Physiology_marked[i]);
     }
    }
    }
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <renal_marked.length; j++) {
       if (Physiology_marked[i].title == renal_marked[j].title) {
       mix_renal.push(Physiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <allergy_marked.length; j++) {
       if (Physiology_marked[i].title == allergy_marked[j].title) {
       mix_Allergy.push(Physiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <dermatology_marked.length; j++) {
       if (Physiology_marked[i].title == dermatology_marked[j].title) {
       mix_dermatology.push(Physiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <gastrointestinal_marked.length; j++) {
       if (Physiology_marked[i].title == gastrointestinal_marked[j].title) {
       mix_gastrointestinal.push(Physiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <hematology_marked.length; j++) {
       if (Physiology_marked[i].title == hematology_marked[j].title) {
       mix_hematology.push(Physiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <neuro_marked.length; j++) {
       if (Physiology_marked[i].title == neuro_marked[j].title) {
       mix_neuro.push(Physiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <rheumatology_marked.length; j++) {
       if (Physiology_marked[i].title == rheumatology_marked[j].title) {
       mix_Rheumatology.push(Physiology_marked[i]);
     }
    }}
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <infectious_marked.length; j++) {
       if (Physiology_marked[i].title == infectious_marked[j].title) {
       mix_infectious.push(Physiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <endocrine_marked.length; j++) {
       if (Physiology_marked[i].title == endocrine_marked[j].title) {
       mix_endocrine.push(Physiology_marked[i]);
     }
    }}
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <reproductive_F_marked.length; j++) {
       if (Physiology_marked[i].title == reproductive_F_marked[j].title) {
       mix_reproductive_F.push(Physiology_marked[i]);
     }
    }}
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <reproductive_M_marked.length; j++) {
       if (Physiology_marked[i].title == reproductive_M_marked[j].title) {
       mix_reproductive_M.push(Physiology_marked[i]);
     }
    }}
    
    
    for (let i = 0; i <  Physiology_marked.length; i++) {
    for (let j = 0; j <pregnancy_marked.length; j++) {
       if (Physiology_marked[i].title == pregnancy_marked[j].title) {
       mix_pregnancy.push(Physiology_marked[i]);
     }
    }}
    
    
    }else{
    makeZeros();
    if(document.getElementById("Medicine").checked){shownumber_medicine();}
    if(document.getElementById("Surgery").checked){shownumber_surgery();}
    if (document.getElementById("Biochemistry").checked){ shownumber_biochem();}
    if (document.getElementById("Biostatsitics").checked){ shownumber_biostat();}
    if (document.getElementById("Embryology").checked){ shownumber_embryology();}
    if (document.getElementById("Genetics").checked){ shownumber_genetics();}
    if (document.getElementById("Histology").checked){ shownumber_histology();}
    if (document.getElementById("Immunology").checked){ shownumber_immunology();}
    if (document.getElementById("Microbiology").checked){ shownumber_microbiology();}
    if (document.getElementById("Pathology").checked){ shownumber_pathology();}
    if (document.getElementById("Pathophysiology").checked){ shownumber_Pathophysiology();}
    if (document.getElementById("Pharmacology").checked){ shownumber_pharmacology();}
    
    
    
    }
    update_texts_marked();
    
    //
    }
    
    
}






function AllSystems(){
  if( document.getElementById("AllSystems").checked  ){
    systems_array=[];

    document.getElementById("Respiratory").checked=true;
    document.getElementById("Cardiovascular").checked=true;
    document.getElementById("Renal").checked=true;
    document.getElementById("Allergy").checked=true;
    document.getElementById("Dermatology").checked=true;
    document.getElementById("Gastrointestinal").checked=true;
    document.getElementById("Hematology").checked=true;
    document.getElementById("Neurology").checked=true;
    document.getElementById("Rheumatology").checked=true;
    document.getElementById("Infectious").checked=true;
    document.getElementById("Endocrine").checked=true;
    document.getElementById("Reproductive_F").checked=true;
    document.getElementById("Reproductive_M").checked=true;
    document.getElementById("Pregnancy").checked=true;



mix_all_remove_duplicates=mix_cardiovascular.concat(mix_renal,mix_respiratory,mix_Allergy,mix_dermatology,mix_gastrointestinal,mix_hematology,mix_neuro,mix_Rheumatology,mix_infectious,mix_endocrine,mix_reproductive_F,mix_reproductive_M,mix_pregnancy);

mix_all_remove_duplicates =uniqueByKeepLast(mix_all_remove_duplicates, it=> it.title);
document.getElementById("AllSystems_remain_text").innerHTML = mix_all_remove_duplicates.length; 

shownumber_respiratory();
shownumber_renal();
shownumber_cardiovascular();
shownumber_allergy();
shownumber_dermatology();
shownumber_gastrointestinal();
shownumber_hematology();
shownumber_neurology();
shownumber_rheumatology();
shownumber_infectious();
shownumber_endocrine();
shownumber_Reproductive_F();
shownumber_Reproductive_M();
shownumber_pregnancy();



  }else{
systems_array=[];
    document.getElementById("Respiratory").checked=false;
    document.getElementById("Cardiovascular").checked=false;
    document.getElementById("Renal").checked=false;
    document.getElementById("Allergy").checked=false;
    document.getElementById("Dermatology").checked=false;
    document.getElementById("Gastrointestinal").checked=false;
    document.getElementById("Hematology").checked=false;
    document.getElementById("Neurology").checked=false;
    document.getElementById("Rheumatology").checked=false;
    document.getElementById("Infectious").checked=false;
    document.getElementById("Endocrine").checked=false;
    document.getElementById("Reproductive_F").checked=false;
    document.getElementById("Reproductive_M").checked=false;
    document.getElementById("Pregnancy").checked=false;

  }


  if(document.getElementById("unused").checked){  
  update_texts()
} else if (document.getElementById("all-mode").checked){
  update_texts_all_mode();
}else if (document.getElementById("incorrect").checked){
  update_texts_incorrect();
}else if (document.getElementById("marked").checked){
  update_texts_marked();
}


}




function shownumber_respiratory() {
  if( document.getElementById("Respiratory").checked  ){

    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(respiratory_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(respiratory_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(respiratory_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(respiratory_marked);
    }



//  document.getElementById("respiratory_remain_text").innerHTML = "Respiratory System"+"("+mix_respiratory.length+")"; 
  }else{
    systems_array=[];
    if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
    if( document.getElementById("Renal").checked){shownumber_renal()}
    if( document.getElementById("Allergy").checked){shownumber_allergy()}
    if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
    if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
    if( document.getElementById("Hematology").checked){shownumber_hematology()}
    if( document.getElementById("Neurology").checked){shownumber_neurology()}
    if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
    if( document.getElementById("Infectious").checked){shownumber_infectious()}
    if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
    if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
    if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}
    if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}

}}





// eza kan batee2 kter lama t3mal uncheck 7awel etra7 a7san mn eno tebdo mn awal w jdeed
function shownumber_cardiovascular() {
  if( document.getElementById("Cardiovascular").checked  ){

    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(cardiovascular_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(cardiovascular_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(cardiovascular_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(cardiovascular_marked);
    }

    // document.getElementById("cardiovascular_remain_text").innerHTML = "Cardiovascular System"+"("+mix_cardiovascular.length+")"; 
}else{
  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Renal").checked){shownumber_renal()}
  if( document.getElementById("Allergy").checked){shownumber_allergy()}
  if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
  if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
  if( document.getElementById("Hematology").checked){shownumber_hematology()}
  if( document.getElementById("Neurology").checked){shownumber_neurology()}
  if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
  if( document.getElementById("Infectious").checked){shownumber_infectious()}
  if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
  if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
  if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}
  if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}


}}


function shownumber_renal() {
  if( document.getElementById("Renal").checked  ){


    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(renal_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(renal_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(renal_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(renal_marked);
    }

}else{  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
  if( document.getElementById("Allergy").checked){shownumber_allergy()}
  if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
  if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
  if( document.getElementById("Hematology").checked){shownumber_hematology()}
  if( document.getElementById("Neurology").checked){shownumber_neurology()}
  if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
  if( document.getElementById("Infectious").checked){shownumber_infectious()}
  if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
  if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
  if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}
  if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}


}}


function shownumber_allergy() {
  if( document.getElementById("Allergy").checked  ){


    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(allergy_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(allergy_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(allergy_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(allergy_marked);
    }
  
  }else{  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
  if( document.getElementById("Renal").checked){shownumber_renal()}
  if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
  if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
  if( document.getElementById("Hematology").checked){shownumber_hematology()}
  if( document.getElementById("Neurology").checked){shownumber_neurology()}
  if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
  if( document.getElementById("Infectious").checked){shownumber_infectious()}
  if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
  if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
  if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}
  if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}


}}



function shownumber_dermatology() {
  if( document.getElementById("Dermatology").checked  ){

    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(dermatology_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(dermatology_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(dermatology_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(dermatology_marked);
    }


}else{  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
  if( document.getElementById("Renal").checked){shownumber_renal()}
  if( document.getElementById("Allergy").checked){shownumber_allergy()}
  if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
  if( document.getElementById("Hematology").checked){shownumber_hematology()}
  if( document.getElementById("Neurology").checked){shownumber_neurology()}
  if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
  if( document.getElementById("Infectious").checked){shownumber_infectious()}
  if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
  if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
  if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}
  if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}


}}


function shownumber_gastrointestinal() {
  if( document.getElementById("Gastrointestinal").checked  ){

    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(gastrointestinal_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(gastrointestinal_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(gastrointestinal_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(gastrointestinal_marked);
    }

}else{  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
  if( document.getElementById("Renal").checked){shownumber_renal()}
  if( document.getElementById("Allergy").checked){shownumber_allergy()}
  if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
  if( document.getElementById("Hematology").checked){shownumber_hematology()}
  if( document.getElementById("Neurology").checked){shownumber_neurology()}
  if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
  if( document.getElementById("Infectious").checked){shownumber_infectious()}
  if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
  if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
  if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}
  if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}


}}



function shownumber_hematology() {
  if( document.getElementById("Hematology").checked  ){

    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(hematology_updated);
    } else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(hematology_questions);
    } else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(hematology_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(hematology_marked);
    }

}else{  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
  if( document.getElementById("Renal").checked){shownumber_renal()}
  if( document.getElementById("Allergy").checked){shownumber_allergy()}
  if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
  if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
  if( document.getElementById("Neurology").checked){shownumber_neurology()}
  if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
  if( document.getElementById("Infectious").checked){shownumber_infectious()}
  if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
  if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
  if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}
  if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}



}}



function shownumber_neurology() {
  if( document.getElementById("Neurology").checked  ){


    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(neuro_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(neuro_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(neuro_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(neuro_marked);
    }

}else{  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
  if( document.getElementById("Renal").checked){shownumber_renal()}
  if( document.getElementById("Allergy").checked){shownumber_allergy()}
  if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
  if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
  if( document.getElementById("Hematology").checked){shownumber_hematology()}
  if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
  if( document.getElementById("Infectious").checked){shownumber_infectious()}
  if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
  if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
  if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}
  if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}

}}


function shownumber_rheumatology() {
  if( document.getElementById("Rheumatology").checked  ){


    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(rheumatology_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(rheumatology_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(rheumatology_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(rheumatology_marked);
    }

}else{  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
  if( document.getElementById("Renal").checked){shownumber_renal()}
  if( document.getElementById("Allergy").checked){shownumber_allergy()}
  if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
  if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
  if( document.getElementById("Hematology").checked){shownumber_hematology()}
  if( document.getElementById("Neurology").checked){shownumber_neurology()}
  if( document.getElementById("Infectious").checked){shownumber_infectious()}
  if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
  if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
  if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}
  if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}

}}


function shownumber_infectious() {
  if( document.getElementById("Infectious").checked  ){


    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(infectious_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(infectious_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(infectious_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(infectious_marked);
    }

}else{  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
  if( document.getElementById("Renal").checked){shownumber_renal()}
  if( document.getElementById("Allergy").checked){shownumber_allergy()}
  if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
  if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
  if( document.getElementById("Hematology").checked){shownumber_hematology()}
  if( document.getElementById("Neurology").checked){shownumber_neurology()}
  if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
  if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
  if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
  if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}
  if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}


}}



function shownumber_endocrine() {
  if( document.getElementById("Endocrine").checked  ){


    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(endocrine_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(endocrine_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(endocrine_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(endocrine_marked);
    }

}else{  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
  if( document.getElementById("Renal").checked){shownumber_renal()}
  if( document.getElementById("Allergy").checked){shownumber_allergy()}
  if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
  if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
  if( document.getElementById("Hematology").checked){shownumber_hematology()}
  if( document.getElementById("Neurology").checked){shownumber_neurology()}
  if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
  if( document.getElementById("Infectious").checked){shownumber_infectious()}
  if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
  if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}
  if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}


}}


function shownumber_Reproductive_F() {
  if( document.getElementById("Reproductive_F").checked  ){

    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(reproductive_F_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(reproductive_F_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(reproductive_F_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(reproductive_F_marked);
    }

}else{  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
  if( document.getElementById("Renal").checked){shownumber_renal()}
  if( document.getElementById("Allergy").checked){shownumber_allergy()}
  if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
  if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
  if( document.getElementById("Hematology").checked){shownumber_hematology()}
  if( document.getElementById("Neurology").checked){shownumber_neurology()}
  if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
  if( document.getElementById("Infectious").checked){shownumber_infectious()}
  if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
  if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}
  if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}

}}

function shownumber_Reproductive_M() {
  if( document.getElementById("Reproductive_M").checked  ){


    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(reproductive_M_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(reproductive_M_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(reproductive_M_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(reproductive_M_marked);
    }
  
  }else{  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
  if( document.getElementById("Renal").checked){shownumber_renal()}
  if( document.getElementById("Allergy").checked){shownumber_allergy()}
  if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
  if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
  if( document.getElementById("Hematology").checked){shownumber_hematology()}
  if( document.getElementById("Neurology").checked){shownumber_neurology()}
  if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
  if( document.getElementById("Infectious").checked){shownumber_infectious()}
  if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
  if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
  if( document.getElementById("Pregnancy").checked){shownumber_pregnancy()}


}}


function shownumber_pregnancy() {
  if( document.getElementById("Pregnancy").checked ){

    if(document.getElementById("unused").checked){
      systems_array=systems_array.concat(pregnancy_updated);
    }else if (document.getElementById("all-mode").checked){
      systems_array=systems_array.concat(pregnancy_questions);
    }else if (document.getElementById("incorrect").checked){
      systems_array=systems_array.concat(pregnancy_incorrect);
    }else if (document.getElementById("marked").checked){
      systems_array=systems_array.concat(pregnancy_marked);
    }

}else{  systems_array=[];
  if( document.getElementById("Respiratory").checked){shownumber_respiratory()}
  if( document.getElementById("Cardiovascular").checked){shownumber_cardiovascular()}
  if( document.getElementById("Renal").checked){shownumber_renal()}
  if( document.getElementById("Allergy").checked){shownumber_allergy()}
  if( document.getElementById("Dermatology").checked){shownumber_dermatology()}
  if( document.getElementById("Gastrointestinal").checked){shownumber_gastrointestinal()}
  if( document.getElementById("Hematology").checked){shownumber_hematology()}
  if( document.getElementById("Neurology").checked){shownumber_neurology()}
  if( document.getElementById("Rheumatology").checked){shownumber_rheumatology()}
  if( document.getElementById("Infectious").checked){shownumber_infectious()}
  if( document.getElementById("Endocrine").checked){shownumber_endocrine()}
  if( document.getElementById("Reproductive_F").checked){shownumber_Reproductive_F()}
  if( document.getElementById("Reproductive_M").checked){shownumber_Reproductive_M()}

}}







function Uncheck_2(){


  document.getElementById("incorrect_text_remain_text").innerHTML = Number(all_incorrect.length);
  document.getElementById("unused_text_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
  document.getElementById("all_mode_text_remain_text").innerHTML = Number(medicine_questions.length)+Number(surgery_questions.length)+Number(Biochemistry_questions.length)+Number(biostat_questions.length)+Number(embryology_questions.length)+Number(Genetics_questions.length)+Number(Histology_questions.length)+Number(Immunology_questions.length)+Number(Microbiology_questions.length)+Number(Pathology_questions.length)+Number(Pathophysiology_questions.length)+Number(Pharmacology_questions.length)+Number(Physiology_questions.length);
  document.getElementById("marked_text_remain_text").innerHTML = Number(all_marked.length);


  document.getElementById("AllSubjects_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
    
    

    document.getElementById("medicine_remain_text").innerHTML = medicine_updated_count; 
    document.getElementById("surgery_remain_text").innerHTML = surgery_updated_count; 
    document.getElementById("biochemistry_remain_text").innerHTML = Biochemistry_updated_count; 
    document.getElementById("biostat_remain_text").innerHTML = biostat_updated_count; 
    document.getElementById("embryology_remain_text").innerHTML = embryology_updated_count; 
    document.getElementById("genetics_remain_text").innerHTML = Genetics_updated_count; 
    document.getElementById("histology_remain_text").innerHTML = Histology_updated_count; 
    document.getElementById("immunology_remain_text").innerHTML = Immunology_updated_count; 
    document.getElementById("microbiology_remain_text").innerHTML = Microbiology_updated_count; 
    document.getElementById("pathology_remain_text").innerHTML = Pathology_updated_count; 
    document.getElementById("pathophysiology_remain_text").innerHTML = Pathology_updated_count; 
    document.getElementById("pharmacology_remain_text").innerHTML = Pharmacology_updated_count; 
    document.getElementById("physiology_remain_text").innerHTML = Physiology_updated_count; 





    document.getElementById("AllSystems_remain_text").innerHTML = 0; 
    document.getElementById("respiratory_remain_text").innerHTML = 0; 
    document.getElementById("cardiovascular_remain_text").innerHTML = 0; 
    document.getElementById("renal_remain_text").innerHTML = 0; 
    document.getElementById("allergy_remain_text").innerHTML = 0; 
    document.getElementById("dermatology_remain_text").innerHTML = 0; 
    document.getElementById("gastrointestinal_remain_text").innerHTML = 0; 
    document.getElementById("hematology_remain_text").innerHTML = 0; 
    document.getElementById("neurology_remain_text").innerHTML = 0; 
    document.getElementById("rheumatology_remain_text").innerHTML = 0; 
    document.getElementById("infectious_remain_text").innerHTML = 0; 
    document.getElementById("endocrine_remain_text").innerHTML = 0; 
    document.getElementById("Reproductive_f_remain_text").innerHTML = 0; 
    document.getElementById("Reproductive_M_remain_text").innerHTML = 0; 
    document.getElementById("pregnancy_remain_text").innerHTML = 0; 



    document.getElementById("AllSubjects").checked=false;
    document.getElementById("Medicine").checked=false;
    document.getElementById("Surgery").checked=false;
    document.getElementById("Biochemistry").checked=false;
    document.getElementById("Biostatsitics").checked=false;
    document.getElementById("Embryology").checked=false;
    document.getElementById("Genetics").checked=false;
    document.getElementById("Histology").checked=false;
    document.getElementById("Immunology").checked=false;
    document.getElementById("Microbiology").checked=false;
    document.getElementById("Pathology").checked=false;
    document.getElementById("Pathophysiology").checked=false;
    document.getElementById("Pharmacology").checked=false;
    document.getElementById("Physiology").checked=false;



    document.getElementById("AllSystems").checked=false;
    document.getElementById("Respiratory").checked=false;
    document.getElementById("Cardiovascular").checked=false;
    document.getElementById("Renal").checked=false;
    document.getElementById("Allergy").checked=false;
    document.getElementById("Dermatology").checked=false;
    document.getElementById("Gastrointestinal").checked=false;
    document.getElementById("Hematology").checked=false;
    document.getElementById("Neurology").checked=false;
    document.getElementById("Rheumatology").checked=false;
    document.getElementById("Infectious").checked=false;
    document.getElementById("Endocrine").checked=false;
    document.getElementById("Reproductive_F").checked=false;
    document.getElementById("Reproductive_M").checked=false;
    document.getElementById("Pregnancy").checked=false;




    if ((medicine_updated.length)+(surgery_updated.length)+(Biochemistry_updated.length)+(biostat_updated.length)+(embryology_updated.length)+(Genetics_updated.length)+(Histology_updated.length)+(Immunology_updated.length)+(Microbiology_updated.length)+(Pathology_updated.length)+(Pathophysiology_updated.length)+(Pharmacology_updated.length)+(Physiology_updated.length)== 0){
        document.getElementById("AllSubjects").disabled = true;
    document.getElementById("color_AllSubjects").style.color='grey'
  }else{
    document.getElementById("AllSubjects").disabled = false;
    document.getElementById("color_AllSubjects").style.color='black'

  }


    if (medicine_updated.length == 0){
        document.getElementById("Medicine").disabled = true;
   document.getElementById("color_Medicine").style.color='grey';
  }else{
    document.getElementById("Medicine").disabled= false;
    document.getElementById("color_Medicine").style.color='black';
  }

    if (surgery_updated.length == 0){
        document.getElementById("Surgery").disabled = true;
    document.getElementById("color_Surgery").style.color='grey'
  }else{
    document.getElementById("Surgery").disabled= false;
    document.getElementById("color_Surgery").style.color='black';
  }

  if (Biochemistry_updated.length == 0){
    document.getElementById("Biochemistry").disabled = true;
    document.getElementById("color_Biochemistry").style.color='grey'
  }else{
    document.getElementById("Biochemistry").disabled= false;
    document.getElementById("color_Biochemistry").style.color='black';
  }

if (biostat_updated.length == 0){
  document.getElementById("Biostatsitics").disabled = true;
  document.getElementById("color_Biostatsitics").style.color='grey'
  }else{
    document.getElementById("Biostatsitics").disabled= false;
    document.getElementById("color_Biostatsitics").style.color='black';
  }


if (embryology_updated.length == 0){
  document.getElementById("Embryology").disabled = true;
  document.getElementById("color_Embryology").style.color='grey'
  }else{
    document.getElementById("Embryology").disabled= false;
    document.getElementById("color_Embryology").style.color='black';
  }


if (Genetics_updated.length == 0){
  document.getElementById("Genetics").disabled = true;
  document.getElementById("color_Genetics").style.color='grey'
  }else{
    document.getElementById("Genetics").disabled= false;
    document.getElementById("color_Genetics").style.color='black';
  }


if (Histology_updated.length == 0){
  document.getElementById("Histology").disabled = true;
  document.getElementById("color_Histology").style.color='grey'
  }else{
  document.getElementById("Histology").disabled= false;
  document.getElementById("color_Histology").style.color='black';
  }


if (Immunology_updated.length == 0){
  document.getElementById("Immunology").disabled = true;
  document.getElementById("color_Immunology").style.color='grey'
  }else{
    document.getElementById("Immunology").disabled = false;
    document.getElementById("color_Immunology").style.color = 'black';
    }

if (Microbiology_updated.length == 0){
  document.getElementById("Microbiology").disabled = true;
  document.getElementById("color_Microbiology").style.color='grey'
  }else{
    document.getElementById("Microbiology").disabled = false;
    document.getElementById("color_Microbiology").style.color = 'black';
    }

if (Pathology_updated.length == 0){
  document.getElementById("Pathology").disabled = true;
  document.getElementById("color_Pathology").style.color = 'grey'
  }else{
    document.getElementById("Pathology").disabled= false;
    document.getElementById("color_Pathology").style.color = 'black';
    }

if (Pathophysiology_updated.length == 0){
  document.getElementById("Pathophysiology").disabled = true;
  document.getElementById("color_Pathophysiology").style.color = 'grey'
  }else{
    document.getElementById("Pathophysiology").disabled  = false;
    document.getElementById("color_Pathophysiology").style.color = 'black';
    }

if (Pharmacology_updated.length == 0){
  document.getElementById("Pharmacology").disabled = true;
  document.getElementById("color_Pharmacology").style.color='grey'
  }else{
    document.getElementById("Pharmacology").disabled = false;
    document.getElementById("color_Pharmacology").style.color= 'black';
    }

if (Physiology_updated.length == 0){
  document.getElementById("Physiology").disabled = true;
  document.getElementById("color_Physiology").style.color ='grey'
 }else{
  document.getElementById("Physiology").disabled = false;
  document.getElementById("color_Physiology").style.color = 'black';
  }







    if ((respiratory_updated.length+cardiovascular_updated.length+renal_updated.length+allergy_updated.length+dermatology_updated.length+gastrointestinal_updated.length+hematology_updated.length+neuro_updated.length+rheumatology_updated.length+infectious_updated.length+endocrine_updated.length+reproductive_F_updated.length+reproductive_M_updated.length+pregnancy_updated.length) == 0){
        document.getElementById("AllSystems").disabled = true;
    document.getElementById("color_AllSystems").style.color='grey';
  }


    
    if (respiratory_updated.length == 0){
        document.getElementById("Respiratory").disabled = true;
    document.getElementById("color_Respiratory").style.color='grey'
  }
    
    if (renal_updated.length == 0){
        document.getElementById("Renal").disabled = true;
    document.getElementById("color_Renal").style.color='grey'
  }
    
    if (cardiovascular_updated.length == 0){
        document.getElementById("Cardiovascular").disabled = true;
    document.getElementById("color_Cardiovascular").style.color='grey'
  }

  if (allergy_updated.length == 0){
    document.getElementById("Allergy").disabled = true;
document.getElementById("color_Allergy").style.color='grey'
}

if (dermatology_updated.length == 0){
  document.getElementById("Dermatology").disabled = true;
document.getElementById("color_Dermatology").style.color='grey'
}


if (gastrointestinal_updated.length == 0){
  document.getElementById("Gastrointestinal").disabled = true;
document.getElementById("color_Gastrointestinal").style.color='grey'
}


if (hematology_updated.length == 0){
  document.getElementById("Hematology").disabled = true;
document.getElementById("color_Hematology").style.color='grey'
}



if (neuro_updated.length == 0){
  document.getElementById("Neurology").disabled = true;
document.getElementById("color_Neurology").style.color='grey'
}



if (rheumatology_updated.length == 0){
  document.getElementById("Rheumatology").disabled = true;
document.getElementById("color_Rheumatology").style.color='grey'
}


if (infectious_updated.length == 0){
  document.getElementById("Infectious").disabled = true;
document.getElementById("color_Infectious").style.color='grey'
}


if (endocrine_updated.length == 0){
  document.getElementById("Endocrine").disabled = true;
document.getElementById("color_Endocrine").style.color='grey'
}


if (reproductive_F_updated.length == 0){
  document.getElementById("Reproductive_F").disabled = true;
document.getElementById("color_Reproductive_F").style.color='grey'
}


if (reproductive_M_updated.length == 0){
  document.getElementById("Reproductive_M").disabled = true;
document.getElementById("color_Reproductive_M").style.color='grey'
}

if (pregnancy_updated.length == 0){
  document.getElementById("Pregnancy").disabled = true;
document.getElementById("color_Pregnancy").style.color='grey'
}







    document.getElementById("AllSystems").disabled = true;
    document.getElementById("Respiratory").disabled=true;
    document.getElementById("Cardiovascular").disabled=true;
    document.getElementById("Renal").disabled=true;
    document.getElementById("Allergy").disabled=true;
    document.getElementById("Dermatology").disabled=true;
    document.getElementById("Gastrointestinal").disabled=true;
    document.getElementById("Hematology").disabled=true;
    document.getElementById("Neurology").disabled=true;
    document.getElementById("Rheumatology").disabled=true;
    document.getElementById("Infectious").disabled=true;
    document.getElementById("Endocrine").disabled=true;
    document.getElementById("Reproductive_F").disabled=true;
    document.getElementById("Reproductive_M").disabled=true;
    document.getElementById("Pregnancy").disabled=true;


    makeZeros();
}





function makeZeros(){
    mix_all_remove_duplicates=[];

    mix_cardiovascular=[];
    mix_renal=[];
    mix_respiratory=[];
    mix_Allergy=[];
    mix_dermatology=[];
    mix_gastrointestinal=[];
    mix_hematology=[];
    mix_neuro=[];
    mix_Rheumatology=[];
    mix_infectious=[];
    mix_endocrine=[];
    mix_reproductive_F=[];
    mix_reproductive_M=[];
    mix_pregnancy=[];

    systems_array=[];
    subject_array=[];

    document.getElementById("AllSystems").checked = false;
    document.getElementById("Respiratory").checked = false;
    document.getElementById("Cardiovascular").checked = false;
    document.getElementById("Renal").checked = false;
    document.getElementById("Allergy").checked = false;
    document.getElementById("Dermatology").checked = false;
    document.getElementById("Gastrointestinal").checked = false;
    document.getElementById("Hematology").checked = false;
    document.getElementById("Neurology").checked = false;
    document.getElementById("Rheumatology").checked = false;
    document.getElementById("Infectious").checked = false;
    document.getElementById("Endocrine").checked = false;
    document.getElementById("Reproductive_F").checked = false;
    document.getElementById("Reproductive_M").checked = false;
    document.getElementById("Pregnancy").checked = false;


}



function update_texts(){
  
  //getSavedValues();
  //
  //hdol kano makhfyen
    //document.getElementById("unused_text_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
    //document.getElementById("all_mode_text_remain_text").innerHTML = Number(medicine_questions.length)+Number(surgery_questions.length)+Number(Biochemistry_questions.length)+Number(biostat_questions.length)+Number(embryology_questions.length)+Number(Genetics_questions.length)+Number(Histology_questions.length)+Number(Immunology_questions.length)+Number(Microbiology_questions.length)+Number(Pathology_questions.length)+Number(Pathophysiology_questions.length)+Number(Pharmacology_questions.length)+Number(Physiology_questions.length);
  //
    //
    //document.getElementById("incorrect_text_remain_text").innerHTML = Number(all_incorrect.length);
    //document.getElementById("marked_text_remain_text").innerHTML = Number(all_marked.length);
//
//

    document.getElementById("AllSubjects_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);

    
    document.getElementById("medicine_remain_text").innerHTML = medicine_updated_count; 
    document.getElementById("surgery_remain_text").innerHTML = surgery_updated_count; 
    document.getElementById("biochemistry_remain_text").innerHTML = Biochemistry_updated_count; 
    document.getElementById("biostat_remain_text").innerHTML = biostat_updated_count; 
    document.getElementById("embryology_remain_text").innerHTML = embryology_updated_count; 
    document.getElementById("genetics_remain_text").innerHTML = Genetics_updated_count; 
    document.getElementById("histology_remain_text").innerHTML = Histology_updated_count; 
    document.getElementById("immunology_remain_text").innerHTML = Immunology_updated_count; 
    document.getElementById("microbiology_remain_text").innerHTML = Microbiology_updated_count; 
    document.getElementById("pathology_remain_text").innerHTML = Pathology_updated_count; 
    document.getElementById("pathophysiology_remain_text").innerHTML = Pathophysiology_updated_count; 
    document.getElementById("pharmacology_remain_text").innerHTML = Pharmacology_updated_count; 
    document.getElementById("physiology_remain_text").innerHTML = Physiology_updated_count; 


    document.getElementById("respiratory_remain_text").innerHTML = mix_respiratory.length; 
    document.getElementById("cardiovascular_remain_text").innerHTML = mix_cardiovascular.length; 
    document.getElementById("renal_remain_text").innerHTML = mix_renal.length; 
    document.getElementById("allergy_remain_text").innerHTML = mix_Allergy.length; 
    document.getElementById("dermatology_remain_text").innerHTML = mix_dermatology.length; 
    document.getElementById("gastrointestinal_remain_text").innerHTML = mix_gastrointestinal.length; 
    document.getElementById("hematology_remain_text").innerHTML = mix_hematology.length; 
    document.getElementById("neurology_remain_text").innerHTML = mix_neuro.length; 
    document.getElementById("rheumatology_remain_text").innerHTML = mix_Rheumatology.length; 
    document.getElementById("infectious_remain_text").innerHTML = mix_infectious.length; 
    document.getElementById("endocrine_remain_text").innerHTML = mix_endocrine.length; 
    document.getElementById("Reproductive_f_remain_text").innerHTML = mix_reproductive_F.length; 
    document.getElementById("Reproductive_M_remain_text").innerHTML = mix_reproductive_M.length; 
    document.getElementById("pregnancy_remain_text").innerHTML = mix_pregnancy.length; 



    mix_all_remove_duplicates=mix_cardiovascular.concat(mix_renal,mix_respiratory,mix_Allergy,mix_dermatology,mix_gastrointestinal,mix_hematology,mix_Rheumatology,mix_infectious,mix_endocrine,mix_reproductive_F,mix_reproductive_M,mix_pregnancy);


    mix_all_remove_duplicates =uniqueByKeepLast(mix_all_remove_duplicates, it=> it.title);
    document.getElementById("AllSystems_remain_text").innerHTML = mix_all_remove_duplicates.length; 
    
    if ((mix_all_remove_duplicates.length) != 0){document.getElementById("AllSystems").disabled = false;
    document.getElementById("color_AllSystems").style.color='black'
  }
    
    if (mix_respiratory.length != 0){document.getElementById("Respiratory").disabled = false;
    document.getElementById("color_Respiratory").style.color='black'
  }
    
    if (mix_renal.length != 0){document.getElementById("Renal").disabled = false;
    document.getElementById("color_Renal").style.color='black'
  }
    
    if (mix_cardiovascular.length != 0){document.getElementById("Cardiovascular").disabled = false;
    document.getElementById("color_Cardiovascular").style.color='black'
  }

  if (mix_Allergy.length != 0){document.getElementById("Allergy").disabled = false;
  document.getElementById("color_Allergy").style.color='black'
}

if (mix_dermatology.length != 0){document.getElementById("Dermatology").disabled = false;
document.getElementById("color_Dermatology").style.color='black'
}

if (mix_gastrointestinal.length != 0){document.getElementById("Gastrointestinal").disabled = false;
document.getElementById("color_Gastrointestinal").style.color='black'
}


if (mix_hematology.length != 0){document.getElementById("Hematology").disabled = false;
document.getElementById("color_Hematology").style.color='black'
}


if (mix_neuro.length != 0){document.getElementById("Neurology").disabled = false;
document.getElementById("color_Neurology").style.color='black'
}

if (mix_Rheumatology.length != 0){document.getElementById("Rheumatology").disabled = false;
document.getElementById("color_Rheumatology").style.color='black'
}


if (mix_infectious.length != 0){document.getElementById("Infectious").disabled = false;
document.getElementById("color_Infectious").style.color='black'
}


if (mix_endocrine.length != 0){document.getElementById("Endocrine").disabled = false;
document.getElementById("color_Endocrine").style.color='black'
}


if (mix_reproductive_F.length != 0){document.getElementById("Reproductive_F").disabled = false;
document.getElementById("color_Reproductive_F").style.color='black'
}


if (mix_reproductive_M.length != 0){document.getElementById("Reproductive_M").disabled = false;
document.getElementById("color_Reproductive_M").style.color='black'
}

if (mix_pregnancy.length != 0){document.getElementById("Pregnancy").disabled = false;
document.getElementById("color_Pregnancy").style.color='black'
}



    if((!document.getElementById("Surgery").checked)&&(!document.getElementById("Medicine").checked)&&(!document.getElementById("Biochemistry").checked)&&(!document.getElementById("Biostatsitics").checked)&&(!document.getElementById("Embryology").checked)&&(!document.getElementById("Genetics").checked)&&(!document.getElementById("Histology").checked)&&(!document.getElementById("Immunology").checked)&&(!document.getElementById("Microbiology").checked)&&(!document.getElementById("Pathology").checked)&&(!document.getElementById("Pathophysiology").checked)&&(!document.getElementById("Pharmacology").checked)&&(!document.getElementById("Physiology").checked)){


        document.getElementById("AllSystems").disabled = true;
        document.getElementById("Respiratory").disabled = true;
        document.getElementById("Cardiovascular").disabled = true;
        document.getElementById("Renal").disabled = true;
        document.getElementById("Allergy").disabled = true;
        document.getElementById("Dermatology").disabled = true;
        document.getElementById("Gastrointestinal").disabled = true;
        document.getElementById("Hematology").disabled = true;
        document.getElementById("Neurology").disabled = true;
        document.getElementById("Rheumatology").disabled = true;
        document.getElementById("Infectious").disabled = true;
        document.getElementById("Endocrine").disabled = true;
        document.getElementById("Reproductive_F").disabled = true;
        document.getElementById("Reproductive_M").disabled = true;
        document.getElementById("Pregnancy").disabled = true;


        document.getElementById("color_AllSystems").style.color='grey'
        document.getElementById("color_Respiratory").style.color='grey'
        document.getElementById("color_Cardiovascular").style.color='grey'
        document.getElementById("color_Renal").style.color='grey'
        document.getElementById("color_Allergy").style.color='grey'
        document.getElementById("color_Dermatology").style.color='grey'
        document.getElementById("color_Gastrointestinal").style.color='grey'
        document.getElementById("color_Hematology").style.color='grey'
        document.getElementById("color_Neurology").style.color='grey'
        document.getElementById("color_Rheumatology").style.color='grey'
        document.getElementById("color_Infectious").style.color='grey'
        document.getElementById("color_Endocrine").style.color='grey'
        document.getElementById("color_Reproductive_F").style.color='grey'
        document.getElementById("color_Reproductive_M").style.color='grey'
        document.getElementById("color_Pregnancy").style.color='grey'

    }
}








function makeButtons(FINAL_ARRAY,chosen_Answers){
  quizApp.style.display='block';
  quizArea.style.display='block';
  answersArea.style.display='block';
  bullets.style.display='block';



// edited
  startButton.style.display = 'block';
  chooseQuestionsClass.style.display= 'block';
// end edited



  questionButtonsContainer.style.display = 'none';

 // questionButtonsContainer.style.display = 'none';


  startButton.style.display = 'block';
 // chooseQuestionsClass.style.display= 'block';
  resultsContainer.style.display='none'
  theResults="";
 
  nextButton.style.display='none';

   n=FINAL_ARRAY.length;
   Final_Count=FINAL_ARRAY.length;
   console.log(FINAL_ARRAY);
   console.log(chosen_Answers);

 let list_2=document.getElementById("myReview");
 while (list_2.hasChildNodes()) {
  list_2.removeChild(list_2.firstChild);
}

//
//
//
//
//
//
//



//
//
//
//
//
//
//
//






 
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

      //
      //
      //
      //
      //
  
      //
      //
      //
      //
      //

     currentIndex=i-1;
     nextButton.style.display='none';
 
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

 
    for (let m =0 ;m< answers.length;m++){ answers[m].disabled='true' }
 
  }  

}
}




function Z_score(){

  Z++;
  //
Exams[`Exam_${Z}`] = FINAL_ARRAY;
Answers[`Answer_${Z}`]=chosen_Answers;
Dates[`Date_${Z}`]= new Date().toLocaleString();
scores[`score_${Z}`] = score/n;
//

let sum=0;
for (let i = 1; i <= Z; i++) {
sum=sum+(scores[`score_${i}`]*(Exams[`Exam_${i}`].length));
}
let sum_solved=0;
for (let i = 1; i <= Z; i++) {
  sum_solved=sum_solved+Exams[`Exam_${i}`].length;
  }

//
if (sum_solved==0)(sum_solved=1);
//
//

SUM=(sum/ sum_solved)*100;


}






finishExamButton.onclick = () => {

  var result = confirm('Are you sure you want to submit all asnwers?');

  if (result) {
    Finish();

  } else {}
}

function Finish(){
  
    //
    //
    //bzon lazem getSavedValues
    //
    theRightAnswer = FINAL_ARRAY[currentIndex].right_answer;
    currentIndex++;
  checkAnswer(theRightAnswer, Final_Count);
  
/* // previously/
  for ( i=0 ; i<n; i++){
    real_Answers[i]=(FINAL_ARRAY[i].right_answer);
    if (String(real_Answers[i])===String(chosen_Answers_string[i+1])){
     score++;
   }else{
     all_incorrect=all_incorrect.concat(FINAL_ARRAY[i]);
     }}
all_incorrect = uniqueByKeepLast(all_incorrect, it=> it.title);
*/


// First = all questions that are answered correctly in this exam.
let First=[];
  for ( i=0 ; i<n; i++){
   real_Answers[i]=(FINAL_ARRAY[i].right_answer);
   if (String(real_Answers[i])===String(chosen_Answers_string[i+1])){
    score++;
    First=First.concat(FINAL_ARRAY[i]);
  }else{
    all_incorrect=all_incorrect.concat(FINAL_ARRAY[i]);
    }}
all_incorrect = uniqueByKeepLast(all_incorrect, it=> it.title);
First = uniqueByKeepLast(First, it=> it.title);

// Second= all questions that are answered correctly and mutual of the previously called incorrect questions. for a reason to edit the newly incorrect questions by subtraction.   
let Second=[];
for (let i = 0; i < all_incorrect.length; i++) {
for (let j = 0; j < First.length; j++) {
   if (all_incorrect[i].title == First[j].title) {
    Second.push(all_incorrect[i]);
 }}}
// common_array_allincorrect_correctNow = uniqueByKeepLast(common_array_allincorrect_correctNow, it=> it.title);
// here i will subtract the previously incorrect minus the correctly answerd now of them, to remove the correct from the incoorect array.

all_incorrect=arrayDiffByKey('title', all_incorrect, Second);
   
// if it is too slow, shoten this, put only(if uncorrectwas checked); or put it in a new finish_incorrect function, and remove scoring/
//
//



  // hdol elli ta7t ew3ak tghayer m7alhom

surgery_incorrect=[];
for (let i = 0; i < surgery_questions.length; i++) {
 for (let j = 0; j < all_incorrect.length; j++) {
    if (surgery_questions[i].title == all_incorrect[j].title) {
    surgery_incorrect.push(surgery_questions[i]);
  }    }    }
surgery_incorrect_count=surgery_incorrect.length;




medicine_incorrect=[];
for (let i = 0; i < medicine_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (medicine_questions[i].title == all_incorrect[j].title) {
medicine_incorrect.push(medicine_questions[i]);
}}}
medicine_incorrect_count=medicine_incorrect.length;




Biochemistry_incorrect=[];
for (let i = 0; i < Biochemistry_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (Biochemistry_questions[i].title == all_incorrect[j].title) {
Biochemistry_incorrect.push(Biochemistry_questions[i]);
}    }    }
Biochemistry_incorrect_count=Biochemistry_incorrect.length;




biostat_incorrect=[];
for (let i = 0; i < biostat_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (biostat_questions[i].title == all_incorrect[j].title) {
 biostat_incorrect.push(biostat_questions[i]);
}    }    }
biostat_incorrect_count=biostat_incorrect.length;



embryology_incorrect=[];
for (let i = 0; i < embryology_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (embryology_questions[i].title == all_incorrect[j].title) {
 embryology_incorrect.push(embryology_questions[i]);
}}}
embryology_incorrect_count=embryology_incorrect.length;



Genetics_incorrect=[];
for (let i = 0; i < Genetics_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (Genetics_questions[i].title == all_incorrect[j].title) {
 Genetics_incorrect.push(Genetics_questions[i]);
}}}
Genetics_incorrect_count=Genetics_incorrect.length;





Histology_incorrect=[];
for (let i = 0; i < Histology_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (Histology_questions[i].title == all_incorrect[j].title) {
 Histology_incorrect.push(Histology_questions[i]);
}}}
Histology_incorrect_count=Histology_incorrect.length;




Immunology_incorrect=[];
for (let i = 0; i < Immunology_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
   if (Immunology_questions[i].title == all_incorrect[j].title) {
     Immunology_incorrect.push(Immunology_questions[i]);
 }}}
 Immunology_incorrect_count=Immunology_incorrect.length;


 

 Microbiology_incorrect=[];
for (let i = 0; i < Microbiology_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (Microbiology_questions[i].title == all_incorrect[j].title) {
Microbiology_incorrect.push(Microbiology_questions[i]);
}}}
Microbiology_incorrect_count=Microbiology_incorrect.length;





Pathology_incorrect=[];
for (let i = 0; i < Pathology_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (Pathology_questions[i].title == all_incorrect[j].title) {
Pathology_incorrect.push(Pathology_questions[i]);
}}}
Pathology_incorrect_count=Pathology_incorrect.length;





Pathophysiology_incorrect=[];
for (let i = 0; i < Pathophysiology_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (Pathophysiology_questions[i].title == all_incorrect[j].title) {
Pathophysiology_incorrect.push(Pathophysiology_questions[i]);
}}}
Pathophysiology_incorrect_count=Pathophysiology_incorrect.length;




Pharmacology_incorrect=[];
for (let i = 0; i < Pharmacology_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (Pharmacology_questions[i].title == all_incorrect[j].title) {
Pharmacology_incorrect.push(Pharmacology_questions[i]);
}}}
Pharmacology_incorrect_count=Pharmacology_incorrect.length;




Physiology_incorrect=[];
for (let i = 0; i < Physiology_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (Physiology_questions[i].title == all_incorrect[j].title) {
Physiology_incorrect.push(Physiology_questions[i]);
}}}
Physiology_incorrect_count=Physiology_incorrect.length;





renal_incorrect=[];
for (let i = 0; i < renal_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (renal_questions[i].title == all_incorrect[j].title) {
renal_incorrect.push(renal_questions[i]);
}}}
renal_incorrect_count=renal_incorrect.length;




cardiovascular_incorrect=[];
for (let i = 0; i < cardiovascular_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (cardiovascular_questions[i].title == all_incorrect[j].title) {
cardiovascular_incorrect.push(cardiovascular_questions[i]);
}}}
cardiovascular_incorrect_count=cardiovascular_incorrect.length;




respiratory_incorrect=[];
for (let i = 0; i < respiratory_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (respiratory_questions[i].title == all_incorrect[j].title) {
respiratory_incorrect.push(respiratory_questions[i]);
}}}
respiratory_incorrect_count=respiratory_incorrect.length;




allergy_incorrect=[];
for (let i = 0; i < allergy_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (allergy_questions[i].title == all_incorrect[j].title) {
 allergy_incorrect.push(allergy_questions[i]);
}}}
allergy_incorrect_count=allergy_incorrect.length;




dermatology_incorrect=[];
for (let i = 0; i < dermatology_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (dermatology_questions[i].title == all_incorrect[j].title) {
dermatology_incorrect.push(dermatology_questions[i]);
}}}
dermatology_incorrect_count=dermatology_incorrect.length;





gastrointestinal_incorrect=[];
for (let i = 0; i < gastrointestinal_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (gastrointestinal_questions[i].title == all_incorrect[j].title) {
gastrointestinal_incorrect.push(gastrointestinal_questions[i]);
}}}
gastrointestinal_incorrect_count=gastrointestinal_incorrect.length;





hematology_incorrect=[];
for (let i = 0; i < hematology_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (hematology_questions[i].title == all_incorrect[j].title) {
hematology_incorrect.push(hematology_questions[i]);
}}}
hematology_incorrect_count=hematology_incorrect.length;
        

 

neuro_incorrect=[];
for (let i = 0; i < neuro_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (neuro_questions[i].title == all_incorrect[j].title) {
neuro_incorrect.push(neuro_questions[i]);
}}}
neuro_incorrect_count=neuro_incorrect.length;   
     



rheumatology_incorrect=[];
for (let i = 0; i < rheumatology_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (rheumatology_questions[i].title == all_incorrect[j].title) {
rheumatology_incorrect.push(rheumatology_questions[i]);
}}}
rheumatology_incorrect_count=rheumatology_incorrect.length;  




infectious_incorrect=[];
for (let i = 0; i < infectious_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (infectious_questions[i].title == all_incorrect[j].title) {
 infectious_incorrect.push(infectious_questions[i]);
}}}
infectious_incorrect_count=infectious_incorrect.length;  



endocrine_incorrect=[];
for (let i = 0; i < endocrine_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (endocrine_questions[i].title == all_incorrect[j].title) {
 endocrine_incorrect.push(endocrine_questions[i]);
 }}}
 endocrine_incorrect_count=endocrine_incorrect.length;  

 
 

reproductive_F_incorrect=[];
for (let i = 0; i < reproductive_F_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (reproductive_F_questions[i].title == all_incorrect[j].title) {
 reproductive_F_incorrect.push(reproductive_F_questions[i]);
}}}
reproductive_F_incorrect_count=reproductive_F_incorrect.length;  




reproductive_M_incorrect=[];
for (let i = 0; i < reproductive_M_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (reproductive_M_questions[i].title == all_incorrect[j].title) {
 reproductive_M_incorrect.push(reproductive_M_questions[i]);
}}}
reproductive_M_incorrect_count=reproductive_M_incorrect.length;  




pregnancy_incorrect=[];
for (let i = 0; i < pregnancy_questions.length; i++) {
for (let j = 0; j < all_incorrect.length; j++) {
if (pregnancy_questions[i].title == all_incorrect[j].title) {
 pregnancy_incorrect.push(pregnancy_questions[i]);
 }}}
 pregnancy_incorrect_count=pregnancy_incorrect.length; 







 //
 //
 //
 //
 ///
 //========================================================================================================'

 surgery_marked=[];
for (let i = 0; i < surgery_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (surgery_questions[i].title == all_marked[j].title) {
    surgery_marked.push(surgery_questions[i]);
  }
}
}
surgery_marked_count = surgery_marked.length;


medicine_marked=[];
for (let i = 0; i < medicine_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (medicine_questions[i].title == all_marked[j].title) {
    medicine_marked.push(medicine_questions[i]);
  }
}
}
medicine_marked_count = medicine_marked.length;


Biochemistry_marked=[];
for (let i = 0; i < Biochemistry_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (Biochemistry_questions[i].title == all_marked[j].title) {
    Biochemistry_marked.push(Biochemistry_questions[i]);
  }
}
}
Biochemistry_marked_count = Biochemistry_marked.length;


biostat_marked=[];
for (let i = 0; i < biostat_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (biostat_questions[i].title == all_marked[j].title) {
    biostat_marked.push(biostat_questions[i]);
  }
}
}
biostat_marked_count = biostat_marked.length;


embryology_marked=[];
for (let i = 0; i < embryology_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (embryology_questions[i].title == all_marked[j].title) {
    embryology_marked.push(embryology_questions[i]);
  }
}
}
embryology_marked_count = embryology_marked.length;


Genetics_marked=[];
for (let i = 0; i < Genetics_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (Genetics_questions[i].title == all_marked[j].title) {
    Genetics_marked.push(Genetics_questions[i]);
  }
}
}
Genetics_marked_count = Genetics_marked.length;


Histology_marked=[];
for (let i = 0; i < Histology_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (Histology_questions[i].title == all_marked[j].title) {
    Histology_marked.push(Histology_questions[i]);
  }
}
}
Histology_marked_count = Histology_marked.length;


Immunology_marked=[];
for (let i = 0; i < Immunology_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (Immunology_questions[i].title == all_marked[j].title) {
    Immunology_marked.push(Immunology_questions[i]);
  }
}
}
Immunology_marked_count = Immunology_marked.length;


Microbiology_marked=[];
for (let i = 0; i < Microbiology_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (Microbiology_questions[i].title == all_marked[j].title) {
    Microbiology_marked.push(Microbiology_questions[i]);
  }
}
}
Microbiology_marked_count = Microbiology_marked.length;


Pathology_marked=[];
for (let i = 0; i < Pathology_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (Pathology_questions[i].title == all_marked[j].title) {
    Pathology_marked.push(Pathology_questions[i]);
  }
}
}
Pathology_marked_count = Pathology_marked.length;


Pathophysiology_marked=[];
for (let i = 0; i < Pathophysiology_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (Pathophysiology_questions[i].title == all_marked[j].title) {
    Pathophysiology_marked.push(Pathophysiology_questions[i]);
  }
}
}
Pathophysiology_marked_count = Pathophysiology_marked.length;


Pharmacology_marked=[];
for (let i = 0; i < Pharmacology_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (Pharmacology_questions[i].title == all_marked[j].title) {
    Pharmacology_marked.push(Pharmacology_questions[i]);
  }
}
}
Pharmacology_marked_count = Pharmacology_marked.length;


Physiology_marked=[];
for (let i = 0; i < Physiology_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (Physiology_questions[i].title == all_marked[j].title) {
    Physiology_marked.push(Physiology_questions[i]);
  }
}
}
Physiology_marked_count = Physiology_marked.length;


renal_marked=[];
for (let i = 0; i < renal_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (renal_questions[i].title == all_marked[j].title) {
    renal_marked.push(renal_questions[i]);
  }
}
}
renal_marked_count = renal_marked.length;


cardiovascular_marked=[];
for (let i = 0; i < cardiovascular_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (cardiovascular_questions[i].title == all_marked[j].title) {
    cardiovascular_marked.push(cardiovascular_questions[i]);
  }
}
}
cardiovascular_marked_count = cardiovascular_marked.length;


respiratory_marked=[];
for (let i = 0; i < respiratory_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (respiratory_questions[i].title == all_marked[j].title) {
    respiratory_marked.push(respiratory_questions[i]);
  }
}
}
respiratory_marked_count = respiratory_marked.length;


allergy_marked=[];
for (let i = 0; i < allergy_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (allergy_questions[i].title == all_marked[j].title) {
    allergy_marked.push(allergy_questions[i]);
  }
}
}
allergy_marked_count = allergy_marked.length;


dermatology_marked=[];
for (let i = 0; i < dermatology_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (dermatology_questions[i].title == all_marked[j].title) {
    dermatology_marked.push(dermatology_questions[i]);
  }
}
}
dermatology_marked_count = dermatology_marked.length;


gastrointestinal_marked=[];
for (let i = 0; i < gastrointestinal_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (gastrointestinal_questions[i].title == all_marked[j].title) {
    gastrointestinal_marked.push(gastrointestinal_questions[i]);
  }
}
}
gastrointestinal_marked_count = gastrointestinal_marked.length;


hematology_marked=[];
for (let i = 0; i < hematology_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (hematology_questions[i].title == all_marked[j].title) {
    hematology_marked.push(hematology_questions[i]);
  }
}
}
hematology_marked_count = hematology_marked.length;


neuro_marked=[];
for (let i = 0; i < neuro_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (neuro_questions[i].title == all_marked[j].title) {
    neuro_marked.push(neuro_questions[i]);
  }
}
}
neuro_marked_count = neuro_marked.length;


rheumatology_marked=[];
for (let i = 0; i < rheumatology_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (rheumatology_questions[i].title == all_marked[j].title) {
    rheumatology_marked.push(rheumatology_questions[i]);
  }
}
}
rheumatology_marked_count = rheumatology_marked.length;


infectious_marked=[];
for (let i = 0; i < infectious_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (infectious_questions[i].title == all_marked[j].title) {
    infectious_marked.push(infectious_questions[i]);
  }
}
}
infectious_marked_count = infectious_marked.length;


endocrine_marked=[];
for (let i = 0; i < endocrine_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (endocrine_questions[i].title == all_marked[j].title) {
    endocrine_marked.push(endocrine_questions[i]);
  }
}
}
endocrine_marked_count = endocrine_marked.length;


reproductive_F_marked=[];
for (let i = 0; i < reproductive_F_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (reproductive_F_questions[i].title == all_marked[j].title) {
    reproductive_F_marked.push(reproductive_F_questions[i]);
  }
}
}
reproductive_F_marked_count = reproductive_F_marked.length;


reproductive_M_marked=[];
for (let i = 0; i < reproductive_M_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (reproductive_M_questions[i].title == all_marked[j].title) {
    reproductive_M_marked.push(reproductive_M_questions[i]);
  }
}
}
reproductive_M_marked_count = reproductive_M_marked.length;


pregnancy_marked=[];
for (let i = 0; i < pregnancy_questions.length; i++) {
for (let j = 0; j < all_marked.length; j++) {
  if (pregnancy_questions[i].title == all_marked[j].title) {
    pregnancy_marked.push(pregnancy_questions[i]);
  }
}
}
pregnancy_marked_count = pregnancy_marked.length;


//=====================================================================================================



//
//
  resultsContainer.style.display='block'
  quizArea.style.display='none';
  answersArea.style.display='none';
  nextButton.style.display='none'
  bullets.style.display='none';
  questionButtonsContainer.style.display = 'none';
  finishExamButton.style.display = 'none';
//    





  if (score > n / 2 && score < n) {
  theResults = `<span class="good">Good</span>, ${score} From ${n}`;
  } else if (score === n) {
  theResults = `<span class="perfect">Perfect</span>, All Answers Is Good`;
  } else {
  theResults = `<span class="bad">Wa7sh</span>, ${score} From ${n}`;
  }
  
  resultsContainer.innerHTML = theResults;
  resultsContainer.style.padding = "10px";
  resultsContainer.style.backgroundColor = "white";
  resultsContainer.style.marginTop = "10px";
  console.log(score);

  

 // console.log(all_marked);
  /*
for ( let i=1;i<= FINAL_ARRAY.length;i++){
all_marked[i]=0;
}

for ( let i=1;i<= FINAL_ARRAY.length;i++){

all_marked[i]=0;
}
*/

console.log("pk",all_marked);
  


//
//
//
  Z_score();
  //
  //
  

  /*
let common_array_solved=[];
let unused_updated=[];
unused_updated=medicine_updated.concat(surgery_updated,Biochemistry_updated,biostat_updated,embryology_updated,Genetics_updated,Histology_updated,Immunology_updated,Microbiology_updated,Pathology_updated,Pathophysiology_updated,Pharmacology_updated,Physiology_updated); // common between final array of All-questions mode & Unused questions.
console.log("m",unused_updated.length);
console.log("n",FINAL_ARRAY.length);



for (let i = 0; i < unused_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
if (unused_updated[i].title == FINAL_ARRAY[j].title) {
  common_array_solved.push(unused_updated[i]);
 }}}

 //common_array_solved = uniqueByKeepLast(common_array_solved, it=> it.title);

 */


 solved=Number(solved)+Number(toBeSolved);

//  console.log("solved",solved);

  saveValues();
  localStorage.setItem("solved", solved);    
 //  console.log(SUM);
 window.location.href = "home.html"; 
  // alot of things can be removed now including the exam_i_buttons in html and here.


};


//
//
//
//





const blockButton = i => {
  document.body.addEventListener( 'click',  (event)  => {
    if(event.target.id === i.toString()){ 
      document.body.disabled=true;
  }});
}
//
//
//
//




const buttonEvent = i => {
document.body.addEventListener( 'click',  (event)  => {
    //
    //
if(event.target.id === i.toString()){ 
//
//

//
//
//
//

      // Hide all "@" buttons
      atButtons.forEach(atButton => atButton.classList.remove('visible-button'));
      // Show the corresponding "@" button
      atButtons[i - 1].classList.add('visible-button');
      //
      //
      //
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


addQuestionData(FINAL_ARRAY[currentIndex], Final_Count);
            
  answers = document.getElementsByName("question");
  for (let m =0 ;m< answers.length;m++){
    if (chosen_Answers[currentIndex+1]==m){answers[m].checked=true}
    }
  


    if (atButtonClicked[i - 1]==true) {
      atButtons[i - 1].click();
    } 
};
     //     event.preventDefault();    
        });


      }




function saveValues(){

// subjects
localStorage.setItem("medicine_updated",JSON.stringify(medicine_updated));
localStorage.setItem("surgery_updated",JSON.stringify(surgery_updated));
localStorage.setItem("Biochemistry_updated",JSON.stringify(Biochemistry_updated));
localStorage.setItem("biostat_updated",JSON.stringify(biostat_updated));
localStorage.setItem("embryology_updated",JSON.stringify(embryology_updated));
localStorage.setItem("Genetics_updated",JSON.stringify(Genetics_updated));
localStorage.setItem("Histology_updated",JSON.stringify(Histology_updated));
localStorage.setItem("Immunology_updated",JSON.stringify(Immunology_updated));
localStorage.setItem("Microbiology_updated",JSON.stringify(Microbiology_updated));
localStorage.setItem("Pathology_updated",JSON.stringify(Pathology_updated));
localStorage.setItem("Pathophysiology_updated",JSON.stringify(Pathophysiology_updated));
localStorage.setItem("Pharmacology_updated",JSON.stringify(Pharmacology_updated));
localStorage.setItem("Physiology_updated",JSON.stringify(Physiology_updated));


// subjects count
localStorage.setItem("medicine_updated_count", medicine_updated_count);
localStorage.setItem("surgery_updated_count", surgery_updated_count);
localStorage.setItem("Biochemistry_updated_count", Biochemistry_updated_count);
localStorage.setItem("biostat_updated_count", biostat_updated_count);
localStorage.setItem("embryology_updated_count", embryology_updated_count);
localStorage.setItem("Genetics_updated_count", Genetics_updated_count);
localStorage.setItem("Histology_updated_count", Histology_updated_count);
localStorage.setItem("Immunology_updated_count", Immunology_updated_count);
localStorage.setItem("Microbiology_updated_count", Microbiology_updated_count);
localStorage.setItem("Pathology_updated_count", Pathology_updated_count);
localStorage.setItem("Pathophysiology_updated_count", Pathophysiology_updated_count);
localStorage.setItem("Pharmacology_updated_count", Pharmacology_updated_count);
localStorage.setItem("Physiology_updated_count", Physiology_updated_count);





// systems
localStorage.setItem("cardiovascular_updated",JSON.stringify(cardiovascular_updated));
localStorage.setItem("respiratory_updated",JSON.stringify(respiratory_updated));
localStorage.setItem("renal_updated",JSON.stringify(renal_updated));
localStorage.setItem("allergy_updated",JSON.stringify(allergy_updated));
localStorage.setItem("dermatology_updated",JSON.stringify(dermatology_updated));
localStorage.setItem("gastrointestinal_updated",JSON.stringify(gastrointestinal_updated));
localStorage.setItem("hematology_updated",JSON.stringify(hematology_updated));
localStorage.setItem("neuro_updated",JSON.stringify(neuro_updated));
localStorage.setItem("rheumatology_updated",JSON.stringify(rheumatology_updated));
localStorage.setItem("infectious_updated",JSON.stringify(infectious_updated));
localStorage.setItem("endocrine_updated",JSON.stringify(endocrine_updated));
localStorage.setItem("reproductive_F_updated",JSON.stringify(reproductive_F_updated));
localStorage.setItem("reproductive_M_updated",JSON.stringify(reproductive_M_updated));
localStorage.setItem("pregnancy_updated",JSON.stringify(pregnancy_updated));


// systems count
localStorage.setItem("cardiovascular_updated_count", cardiovascular_updated_count);
localStorage.setItem("respiratory_updated_count", respiratory_updated_count);
localStorage.setItem("renal_updated_count", renal_updated_count);
localStorage.setItem("allergy_updated_count", allergy_updated_count);
localStorage.setItem("dermatology_updated_count", dermatology_updated_count);
localStorage.setItem("gastrointestinal_updated_count", gastrointestinal_updated_count);
localStorage.setItem("hematology_updated_count", hematology_updated_count);
localStorage.setItem("neuro_updated_count", neuro_updated_count);
localStorage.setItem("rheumatology_updated_count", rheumatology_updated_count);
localStorage.setItem("infectious_updated_count", infectious_updated_count);
localStorage.setItem("endocrine_updated_count", endocrine_updated_count);
localStorage.setItem("reproductive_F_updated_count", reproductive_F_updated_count);
localStorage.setItem("reproductive_M_updated_count", reproductive_M_updated_count);
localStorage.setItem("pregnancy_updated_count", pregnancy_updated_count);













//
//not updated 


//not updated  subjects
localStorage.setItem("medicine_questions",JSON.stringify(medicine_questions));
localStorage.setItem("surgery_questions",JSON.stringify(surgery_questions));
localStorage.setItem("Biochemistry_questions",JSON.stringify(Biochemistry_questions));
localStorage.setItem("biostat_questions",JSON.stringify(biostat_questions));
localStorage.setItem("embryology_questions",JSON.stringify(embryology_questions));
localStorage.setItem("Genetics_questions",JSON.stringify(Genetics_questions));
localStorage.setItem("Histology_questions",JSON.stringify(Histology_questions));
localStorage.setItem("Immunology_questions",JSON.stringify(Immunology_questions));
localStorage.setItem("Microbiology_questions",JSON.stringify(Microbiology_questions));
localStorage.setItem("Pathology_questions",JSON.stringify(Pathology_questions));
localStorage.setItem("Pathophysiology_questions",JSON.stringify(Pathophysiology_questions));
localStorage.setItem("Pharmacology_questions",JSON.stringify(Pharmacology_questions));
localStorage.setItem("Physiology_questions",JSON.stringify(Physiology_questions));


//not updated  subjects count
localStorage.setItem("medicine_count", medicine_count);
localStorage.setItem("surgery_count", surgery_count);
localStorage.setItem("Biochemistry_count", Biochemistry_count);
localStorage.setItem("biostat_count", biostat_count);
localStorage.setItem("embryology_count", embryology_count);
localStorage.setItem("Genetics_count", Genetics_count);
localStorage.setItem("Histology_count", Histology_count);
localStorage.setItem("Immunology_count", Immunology_count);
localStorage.setItem("Microbiology_count", Microbiology_count);
localStorage.setItem("Pathology_count", Pathology_count);
localStorage.setItem("Pathophysiology_count", Pathophysiology_count);
localStorage.setItem("Pharmacology_count", Pharmacology_count);
localStorage.setItem("Physiology_count", Physiology_count);



// not updated systems
localStorage.setItem("cardiovascular_questions",JSON.stringify(cardiovascular_questions));
localStorage.setItem("respiratory_questions",JSON.stringify(respiratory_questions));
localStorage.setItem("renal_questions",JSON.stringify(renal_questions));
localStorage.setItem("allergy_questions",JSON.stringify(allergy_questions));
localStorage.setItem("dermatology_questions",JSON.stringify(dermatology_questions));
localStorage.setItem("gastrointestinal_questions",JSON.stringify(gastrointestinal_questions));
localStorage.setItem("hematology_questions",JSON.stringify(hematology_questions));
localStorage.setItem("neuro_questions",JSON.stringify(neuro_questions));
localStorage.setItem("rheumatology_questions",JSON.stringify(rheumatology_questions));
localStorage.setItem("infectious_questions",JSON.stringify(infectious_questions));
localStorage.setItem("endocrine_questions",JSON.stringify(endocrine_questions));
localStorage.setItem("reproductive_F_questions",JSON.stringify(reproductive_F_questions));
localStorage.setItem("reproductive_M_questions",JSON.stringify(reproductive_M_questions));
localStorage.setItem("pregnancy_questions",JSON.stringify(pregnancy_questions));



//
// not updated systems count
localStorage.setItem("cardiovascular_count", cardiovascular_count);
localStorage.setItem("respiratory_count", respiratory_count);
localStorage.setItem("renal_count", renal_count);
localStorage.setItem("allergy_count", allergy_count);
localStorage.setItem("dermatology_count", dermatology_count);
localStorage.setItem("gastrointestinal_count", gastrointestinal_count);
localStorage.setItem("hematology_count", hematology_count);
localStorage.setItem("neuro_count", neuro_count);
localStorage.setItem("rheumatology_count", rheumatology_count);
localStorage.setItem("infectious_count", infectious_count);
localStorage.setItem("endocrine_count", endocrine_count);
localStorage.setItem("reproductive_F_count", reproductive_F_count);
localStorage.setItem("reproductive_M_count", reproductive_M_count);
localStorage.setItem("pregnancy_count", pregnancy_count);

















// incorrect
//incorrect subjects
localStorage.setItem("medicine_incorrect",JSON.stringify(medicine_incorrect));
localStorage.setItem("surgery_incorrect",JSON.stringify(surgery_incorrect));
localStorage.setItem("Biochemistry_incorrect",JSON.stringify(Biochemistry_incorrect));
localStorage.setItem("biostat_incorrect",JSON.stringify(biostat_incorrect));
localStorage.setItem("embryology_incorrect",JSON.stringify(embryology_incorrect));
localStorage.setItem("Genetics_incorrect",JSON.stringify(Genetics_incorrect));
localStorage.setItem("Histology_incorrect",JSON.stringify(Histology_incorrect));
localStorage.setItem("Immunology_incorrect",JSON.stringify(Immunology_incorrect));
localStorage.setItem("Microbiology_incorrect",JSON.stringify(Microbiology_incorrect));
localStorage.setItem("Pathology_incorrect",JSON.stringify(Pathology_incorrect));
localStorage.setItem("Pathophysiology_incorrect",JSON.stringify(Pathophysiology_incorrect));
localStorage.setItem("Pharmacology_incorrect",JSON.stringify(Pharmacology_incorrect));
localStorage.setItem("Physiology_incorrect",JSON.stringify(Physiology_incorrect));


//incorrect subjects count
localStorage.setItem("medicine_incorrect_count", medicine_incorrect_count);
localStorage.setItem("surgery_incorrect_count", surgery_incorrect_count);
localStorage.setItem("Biochemistry_incorrect_count", Biochemistry_incorrect_count);
localStorage.setItem("biostat_incorrect_count", biostat_incorrect_count);
localStorage.setItem("embryology_incorrect_count", embryology_incorrect_count);
localStorage.setItem("Genetics_incorrect_count", Genetics_incorrect_count);
localStorage.setItem("Histology_incorrect_count", Histology_incorrect_count);
localStorage.setItem("Immunology_incorrect_count", Immunology_incorrect_count);
localStorage.setItem("Microbiology_incorrect_count", Microbiology_incorrect_count);
localStorage.setItem("Pathology_incorrect_count", Pathology_incorrect_count);
localStorage.setItem("Pathophysiology_incorrect_count", Pathophysiology_incorrect_count);
localStorage.setItem("Pharmacology_incorrect_count", Pharmacology_incorrect_count);
localStorage.setItem("Physiology_incorrect_count", Physiology_incorrect_count);



// incorrect systems
localStorage.setItem("cardiovascular_incorrect",JSON.stringify(cardiovascular_incorrect));
localStorage.setItem("respiratory_incorrect",JSON.stringify(respiratory_incorrect));
localStorage.setItem("renal_incorrect",JSON.stringify(renal_incorrect));
localStorage.setItem("allergy_incorrect",JSON.stringify(allergy_incorrect));
localStorage.setItem("dermatology_incorrect",JSON.stringify(dermatology_incorrect));
localStorage.setItem("gastrointestinal_incorrect",JSON.stringify(gastrointestinal_incorrect));
localStorage.setItem("hematology_incorrect",JSON.stringify(hematology_incorrect));
localStorage.setItem("neuro_incorrect",JSON.stringify(neuro_incorrect));
localStorage.setItem("rheumatology_incorrect",JSON.stringify(rheumatology_incorrect));
localStorage.setItem("infectious_incorrect",JSON.stringify(infectious_incorrect));
localStorage.setItem("endocrine_incorrect",JSON.stringify(endocrine_incorrect));
localStorage.setItem("reproductive_F_incorrect",JSON.stringify(reproductive_F_incorrect));
localStorage.setItem("reproductive_M_incorrect",JSON.stringify(reproductive_M_incorrect));
localStorage.setItem("pregnancy_incorrect",JSON.stringify(pregnancy_incorrect));


// incorrect systems count
localStorage.setItem("cardiovascular_incorrect_count", cardiovascular_incorrect_count);
localStorage.setItem("respiratory_incorrect_count", respiratory_incorrect_count);
localStorage.setItem("renal_incorrect_count", renal_incorrect_count);
localStorage.setItem("allergy_incorrect_count", allergy_incorrect_count);
localStorage.setItem("dermatology_incorrect_count", dermatology_incorrect_count);
localStorage.setItem("gastrointestinal_incorrect_count", gastrointestinal_incorrect_count);
localStorage.setItem("hematology_incorrect_count", hematology_incorrect_count);
localStorage.setItem("neuro_incorrect_count", neuro_incorrect_count);
localStorage.setItem("rheumatology_incorrect_count", rheumatology_incorrect_count);
localStorage.setItem("infectious_incorrect_count", infectious_incorrect_count);
localStorage.setItem("endocrine_incorrect_count", endocrine_incorrect_count);
localStorage.setItem("reproductive_F_incorrect_count", reproductive_F_incorrect_count);
localStorage.setItem("reproductive_M_incorrect_count", reproductive_M_incorrect_count);
localStorage.setItem("pregnancy_incorrect_count", pregnancy_incorrect_count);



//
//
localStorage.setItem("all_incorrect",JSON.stringify(all_incorrect));
//
//








// marked
//marked subjects
localStorage.setItem("medicine_marked", JSON.stringify(medicine_marked));
localStorage.setItem("surgery_marked", JSON.stringify(surgery_marked));
localStorage.setItem("Biochemistry_marked", JSON.stringify(Biochemistry_marked));
localStorage.setItem("biostat_marked", JSON.stringify(biostat_marked));
localStorage.setItem("embryology_marked", JSON.stringify(embryology_marked));
localStorage.setItem("Genetics_marked", JSON.stringify(Genetics_marked));
localStorage.setItem("Histology_marked", JSON.stringify(Histology_marked));
localStorage.setItem("Immunology_marked", JSON.stringify(Immunology_marked));
localStorage.setItem("Microbiology_marked", JSON.stringify(Microbiology_marked));
localStorage.setItem("Pathology_marked", JSON.stringify(Pathology_marked));
localStorage.setItem("Pathophysiology_marked", JSON.stringify(Pathophysiology_marked));
localStorage.setItem("Pharmacology_marked", JSON.stringify(Pharmacology_marked));
localStorage.setItem("Physiology_marked", JSON.stringify(Physiology_marked));

//marked subjects count
localStorage.setItem("medicine_marked_count", medicine_marked_count);
localStorage.setItem("surgery_marked_count", surgery_marked_count);
localStorage.setItem("Biochemistry_marked_count", Biochemistry_marked_count);
localStorage.setItem("biostat_marked_count", biostat_marked_count);
localStorage.setItem("embryology_marked_count", embryology_marked_count);
localStorage.setItem("Genetics_marked_count", Genetics_marked_count);
localStorage.setItem("Histology_marked_count", Histology_marked_count);
localStorage.setItem("Immunology_marked_count", Immunology_marked_count);
localStorage.setItem("Microbiology_marked_count", Microbiology_marked_count);
localStorage.setItem("Pathology_marked_count", Pathology_marked_count);
localStorage.setItem("Pathophysiology_marked_count", Pathophysiology_marked_count);
localStorage.setItem("Pharmacology_marked_count", Pharmacology_marked_count);
localStorage.setItem("Physiology_marked_count", Physiology_marked_count);

// marked systems
localStorage.setItem("cardiovascular_marked", JSON.stringify(cardiovascular_marked));
localStorage.setItem("respiratory_marked", JSON.stringify(respiratory_marked));
localStorage.setItem("renal_marked", JSON.stringify(renal_marked));
localStorage.setItem("allergy_marked", JSON.stringify(allergy_marked));
localStorage.setItem("dermatology_marked", JSON.stringify(dermatology_marked));
localStorage.setItem("gastrointestinal_marked", JSON.stringify(gastrointestinal_marked));
localStorage.setItem("hematology_marked", JSON.stringify(hematology_marked));
localStorage.setItem("neuro_marked", JSON.stringify(neuro_marked));
localStorage.setItem("rheumatology_marked", JSON.stringify(rheumatology_marked));
localStorage.setItem("infectious_marked", JSON.stringify(infectious_marked));
localStorage.setItem("endocrine_marked", JSON.stringify(endocrine_marked));
localStorage.setItem("reproductive_F_marked", JSON.stringify(reproductive_F_marked));
localStorage.setItem("reproductive_M_marked", JSON.stringify(reproductive_M_marked));
localStorage.setItem("pregnancy_marked", JSON.stringify(pregnancy_marked));

// marked systems count
localStorage.setItem("cardiovascular_marked_count", cardiovascular_marked_count);
localStorage.setItem("respiratory_marked_count", respiratory_marked_count);
localStorage.setItem("renal_marked_count", renal_marked_count);
localStorage.setItem("allergy_marked_count", allergy_marked_count);
localStorage.setItem("dermatology_marked_count", dermatology_marked_count);
localStorage.setItem("gastrointestinal_marked_count", gastrointestinal_marked_count);
localStorage.setItem("hematology_marked_count", hematology_marked_count);
localStorage.setItem("neuro_marked_count", neuro_marked_count);
localStorage.setItem("rheumatology_marked_count", rheumatology_marked_count);
localStorage.setItem("infectious_marked_count", infectious_marked_count);
localStorage.setItem("endocrine_marked_count", endocrine_marked_count);
localStorage.setItem("reproductive_F_marked_count", reproductive_F_marked_count);
localStorage.setItem("reproductive_M_marked_count", reproductive_M_marked_count);
localStorage.setItem("pregnancy_marked_count", pregnancy_marked_count);

// 
localStorage.setItem("all_marked", JSON.stringify(all_marked));
//




//currentIndex ;
//rightAnswers ;
//score;



//  localStorage.setItem("chosen_Answers", chosen_Answers);


for(let i=1;i<=300;i++){
localStorage.setItem(`Exam_${i}`, JSON.stringify(Exams[`Exam_${i}`]));
localStorage.setItem(`Answer_${i}`, JSON.stringify(Answers[`Answer_${i}`]));
localStorage.setItem(`Date_${i}`, JSON.stringify(Dates[`Date_${i}`]));
localStorage.setItem(`score_${i}`,scores[`score_${i}`]);

}

localStorage.setItem("Z", Z);

localStorage.setItem("solved", solved);
localStorage.setItem("toBeSolved", toBeSolved);
localStorage.setItem("SUM", SUM);


localStorage.setItem("FINAL_ARRAY",JSON.stringify(FINAL_ARRAY));
localStorage.setItem("Final_Count",Final_Count);

}





























function getSavedValues(){

  //subjects
  medicine_updated = JSON.parse(localStorage.getItem("medicine_updated"));
  surgery_updated = JSON.parse(localStorage.getItem("surgery_updated"));
  Biochemistry_updated = JSON.parse(localStorage.getItem("Biochemistry_updated"));
  biostat_updated = JSON.parse(localStorage.getItem("biostat_updated"));
  embryology_updated = JSON.parse(localStorage.getItem("embryology_updated"));
  Genetics_updated = JSON.parse(localStorage.getItem("Genetics_updated"));
  Histology_updated = JSON.parse(localStorage.getItem("Histology_updated"));
  Immunology_updated = JSON.parse(localStorage.getItem("Immunology_updated"));
  Microbiology_updated = JSON.parse(localStorage.getItem("Microbiology_updated"));
  Pathology_updated = JSON.parse(localStorage.getItem("Pathology_updated"));
  Pathophysiology_updated = JSON.parse(localStorage.getItem("Pathophysiology_updated"));
  Pharmacology_updated = JSON.parse(localStorage.getItem("Pharmacology_updated"));
  Physiology_updated = JSON.parse(localStorage.getItem("Physiology_updated"));


// subjects count
  medicine_updated_count=localStorage.getItem("medicine_updated_count");
  surgery_updated_count=localStorage.getItem("surgery_updated_count");
  Biochemistry_updated_count=localStorage.getItem("Biochemistry_updated_count");
  biostat_updated_count=localStorage.getItem("biostat_updated_count");
  embryology_updated_count=localStorage.getItem("embryology_updated_count");
  Genetics_updated_count=localStorage.getItem("Genetics_updated_count");
  Histology_updated_count=localStorage.getItem("Histology_updated_count");
  Immunology_updated_count=localStorage.getItem("Immunology_updated_count");
  Microbiology_updated_count=localStorage.getItem("Microbiology_updated_count");
  Pathology_updated_count=localStorage.getItem("Pathology_updated_count");
  Pathophysiology_updated_count=localStorage.getItem("Pathophysiology_updated_count");
  Pharmacology_updated_count=localStorage.getItem("Pharmacology_updated_count");
  Physiology_updated_count=localStorage.getItem("Physiology_updated_count");

  
  // systems
  cardiovascular_updated = JSON.parse(localStorage.getItem("cardiovascular_updated"));
  respiratory_updated = JSON.parse(localStorage.getItem("respiratory_updated"));
  renal_updated = JSON.parse(localStorage.getItem("renal_updated"));
  allergy_updated = JSON.parse(localStorage.getItem("allergy_updated"));
  dermatology_updated = JSON.parse(localStorage.getItem("dermatology_updated"));
  gastrointestinal_updated = JSON.parse(localStorage.getItem("gastrointestinal_updated"));
  hematology_updated = JSON.parse(localStorage.getItem("hematology_updated"));
  neuro_updated = JSON.parse(localStorage.getItem("neuro_updated"));
  rheumatology_updated = JSON.parse(localStorage.getItem("rheumatology_updated"));
  infectious_updated = JSON.parse(localStorage.getItem("infectious_updated"));
  endocrine_updated = JSON.parse(localStorage.getItem("endocrine_updated"));
  reproductive_F_updated = JSON.parse(localStorage.getItem("reproductive_F_updated"));
  reproductive_M_updated = JSON.parse(localStorage.getItem("reproductive_M_updated"));
  pregnancy_updated = JSON.parse(localStorage.getItem("pregnancy_updated"));



// systems count
cardiovascular_updated_count=localStorage.getItem("cardiovascular_updated_count");
respiratory_updated_count=localStorage.getItem("respiratory_updated_count");
renal_updated_count=localStorage.getItem("renal_updated_count");
allergy_updated_count=localStorage.getItem("allergy_updated_count");
dermatology_updated_count=localStorage.getItem("dermatology_updated_count");
gastrointestinal_updated_count=localStorage.getItem("gastrointestinal_updated_count");
hematology_updated_count=localStorage.getItem("hematology_updated_count");
neuro_updated_count=localStorage.getItem("neuro_updated_count");
rheumatology_updated_count=localStorage.getItem("rheumatology_updated_count");
infectious_updated_count=localStorage.getItem("infectious_updated_count");
endocrine_updated_count=localStorage.getItem("endocrine_updated_count");
reproductive_F_updated_count=localStorage.getItem("reproductive_F_updated_count");
reproductive_M_updated_count=localStorage.getItem("reproductive_M_updated_count");
pregnancy_updated_count=localStorage.getItem("pregnancy_updated_count");














// not updated subjects
  medicine_questions = JSON.parse(localStorage.getItem("medicine_questions"));
  surgery_questions = JSON.parse(localStorage.getItem("surgery_questions"));
  Biochemistry_questions = JSON.parse(localStorage.getItem("Biochemistry_questions"));
  biostat_questions = JSON.parse(localStorage.getItem("biostat_questions"));
  embryology_questions = JSON.parse(localStorage.getItem("embryology_questions"));
  Genetics_questions = JSON.parse(localStorage.getItem("Genetics_questions"));
  Histology_questions = JSON.parse(localStorage.getItem("Histology_questions"));
  Immunology_questions = JSON.parse(localStorage.getItem("Immunology_questions"));
  Microbiology_questions = JSON.parse(localStorage.getItem("Microbiology_questions"));
  Pathology_questions = JSON.parse(localStorage.getItem("Pathology_questions"));
  Pathophysiology_questions = JSON.parse(localStorage.getItem("Pathophysiology_questions"));
  Pharmacology_questions = JSON.parse(localStorage.getItem("Pharmacology_questions"));
  Physiology_questions = JSON.parse(localStorage.getItem("Physiology_questions"));


// not updated subjects count
  medicine_count=localStorage.getItem("medicine_count");
  surgery_count=localStorage.getItem("surgery_count");
  Biochemistry_count=localStorage.getItem("Biochemistry_count");
  biostat_count=localStorage.getItem("biostat_count");
  embryology_count=localStorage.getItem("embryology_count");
  Genetics_count=localStorage.getItem("Genetics_count");
  Histology_count=localStorage.getItem("Histology_count");
  Immunology_count=localStorage.getItem("Immunology_count");
  Microbiology_count=localStorage.getItem("Microbiology_count");
  Pathology_count=localStorage.getItem("Pathology_count");
  Pathophysiology_count=localStorage.getItem("Pathophysiology_count");
  Pharmacology_count=localStorage.getItem("Pharmacology_count");
  Physiology_count=localStorage.getItem("Physiology_count");

  
  //not updated systems
  cardiovascular_questions = JSON.parse(localStorage.getItem("cardiovascular_questions"));
  respiratory_questions = JSON.parse(localStorage.getItem("respiratory_questions"));
  renal_questions = JSON.parse(localStorage.getItem("renal_questions"));
  allergy_questions = JSON.parse(localStorage.getItem("allergy_questions"));
  dermatology_questions = JSON.parse(localStorage.getItem("dermatology_questions"));
  gastrointestinal_questions = JSON.parse(localStorage.getItem("gastrointestinal_questions"));
  hematology_questions = JSON.parse(localStorage.getItem("hematology_questions"));
  neuro_questions = JSON.parse(localStorage.getItem("neuro_questions"));
  rheumatology_questions = JSON.parse(localStorage.getItem("rheumatology_questions"));
  infectious_questions = JSON.parse(localStorage.getItem("infectious_questions"));
  endocrine_questions = JSON.parse(localStorage.getItem("endocrine_questions"));
  reproductive_F_questions = JSON.parse(localStorage.getItem("reproductive_F_questions"));
  reproductive_M_questions = JSON.parse(localStorage.getItem("reproductive_M_questions"));
  pregnancy_questions = JSON.parse(localStorage.getItem("pregnancy_questions"));



// not updated systems count
cardiovascular_count=localStorage.getItem("cardiovascular_count");
respiratory_count=localStorage.getItem("respiratory_count");
renal_count=localStorage.getItem("renal_count");
allergy_count=localStorage.getItem("allergy_count");
dermatology_count=localStorage.getItem("dermatology_count");
gastrointestinal_count=localStorage.getItem("gastrointestinal_count");
hematology_count=localStorage.getItem("hematology_count");
neuro_count=localStorage.getItem("neuro_count");
rheumatology_count=localStorage.getItem("rheumatology_count");
infectious_count=localStorage.getItem("infectious_count");
endocrine_count=localStorage.getItem("endocrine_count");
reproductive_F_count=localStorage.getItem("reproductive_F_count");
reproductive_M_count=localStorage.getItem("reproductive_M_count");
pregnancy_count=localStorage.getItem("pregnancy_count");









//incorrect
// incorrectsubjects
  medicine_incorrect = JSON.parse(localStorage.getItem("medicine_incorrect"));
  surgery_incorrect = JSON.parse(localStorage.getItem("surgery_incorrect"));
  Biochemistry_incorrect = JSON.parse(localStorage.getItem("Biochemistry_incorrect"));
  biostat_incorrect = JSON.parse(localStorage.getItem("biostat_incorrect"));
  embryology_incorrect = JSON.parse(localStorage.getItem("embryology_incorrect"));
  Genetics_incorrect = JSON.parse(localStorage.getItem("Genetics_incorrect"));
  Histology_incorrect = JSON.parse(localStorage.getItem("Histology_incorrect"));
  Immunology_incorrect = JSON.parse(localStorage.getItem("Immunology_incorrect"));
  Microbiology_incorrect = JSON.parse(localStorage.getItem("Microbiology_incorrect"));
  Pathology_incorrect = JSON.parse(localStorage.getItem("Pathology_incorrect"));
  Pathophysiology_incorrect = JSON.parse(localStorage.getItem("Pathophysiology_incorrect"));
  Pharmacology_incorrect = JSON.parse(localStorage.getItem("Pharmacology_incorrect"));
  Physiology_incorrect = JSON.parse(localStorage.getItem("Physiology_incorrect"));


// incorrect subjects count
  medicine_incorrect_count=localStorage.getItem("medicine_incorrect_count");
  surgery_incorrect_count=localStorage.getItem("surgery_incorrect_count");
  Biochemistry_incorrect_count=localStorage.getItem("Biochemistry_incorrect_count");
  biostat_incorrect_count=localStorage.getItem("biostat_incorrect_count");
  embryology_incorrect_count=localStorage.getItem("embryology_incorrect_count");
  Genetics_incorrect_count=localStorage.getItem("Genetics_incorrect_count");
  Histology_incorrect_count=localStorage.getItem("Histology_incorrect_count");
  Immunology_incorrect_count=localStorage.getItem("Immunology_incorrect_count");
  Microbiology_incorrect_count=localStorage.getItem("Microbiology_incorrect_count");
  Pathology_incorrect_count=localStorage.getItem("Pathology_incorrect_count");
  Pathophysiology_incorrect_count=localStorage.getItem("Pathophysiology_incorrect_count");
  Pharmacology_incorrect_count=localStorage.getItem("Pharmacology_incorrect_count");
  Physiology_incorrect_count=localStorage.getItem("Physiology_incorrect_count");

  
  // incorrect systems
  cardiovascular_incorrect = JSON.parse(localStorage.getItem("cardiovascular_incorrect"));
  respiratory_incorrect = JSON.parse(localStorage.getItem("respiratory_incorrect"));
  renal_incorrect = JSON.parse(localStorage.getItem("renal_incorrect"));
  allergy_incorrect = JSON.parse(localStorage.getItem("allergy_incorrect"));
  dermatology_incorrect = JSON.parse(localStorage.getItem("dermatology_incorrect"));
  gastrointestinal_incorrect = JSON.parse(localStorage.getItem("gastrointestinal_incorrect"));
  hematology_incorrect = JSON.parse(localStorage.getItem("hematology_incorrect"));
  neuro_incorrect = JSON.parse(localStorage.getItem("neuro_incorrect"));
  rheumatology_incorrect = JSON.parse(localStorage.getItem("rheumatology_incorrect"));
  infectious_incorrect = JSON.parse(localStorage.getItem("infectious_incorrect"));
  endocrine_incorrect = JSON.parse(localStorage.getItem("endocrine_incorrect"));
  reproductive_F_incorrect = JSON.parse(localStorage.getItem("reproductive_F_incorrect"));
  reproductive_M_incorrect = JSON.parse(localStorage.getItem("reproductive_M_incorrect"));
  pregnancy_incorrect = JSON.parse(localStorage.getItem("pregnancy_incorrect"));



//incorrect systems count
cardiovascular_incorrect_count=localStorage.getItem("cardiovascular_incorrect_count");
respiratory_incorrect_count=localStorage.getItem("respiratory_incorrect_count");
renal_incorrect_count=localStorage.getItem("renal_incorrect_count");
allergy_incorrect_count=localStorage.getItem("allergy_incorrect_count");
dermatology_incorrect_count=localStorage.getItem("dermatology_incorrect_count");
gastrointestinal_incorrect_count=localStorage.getItem("gastrointestinal_incorrect_count");
hematology_incorrect_count=localStorage.getItem("hematology_incorrect_count");
neuro_incorrect_count=localStorage.getItem("neuro_incorrect_count");
rheumatology_incorrect_count=localStorage.getItem("rheumatology_incorrect_count");
infectious_incorrect_count=localStorage.getItem("infectious_incorrect_count");
endocrine_incorrect_count=localStorage.getItem("endocrine_incorrect_count");
reproductive_F_incorrect_count=localStorage.getItem("reproductive_F_incorrect_count");
reproductive_M_incorrect_count=localStorage.getItem("reproductive_M_incorrect_count");
pregnancy_incorrect_count=localStorage.getItem("pregnancy_incorrect_count");




//
//
all_incorrect = JSON.parse(localStorage.getItem("all_incorrect"));
//
//





//marked
// markedsubjects
medicine_marked = JSON.parse(localStorage.getItem("medicine_marked"));
surgery_marked = JSON.parse(localStorage.getItem("surgery_marked"));
Biochemistry_marked = JSON.parse(localStorage.getItem("Biochemistry_marked"));
biostat_marked = JSON.parse(localStorage.getItem("biostat_marked"));
embryology_marked = JSON.parse(localStorage.getItem("embryology_marked"));
Genetics_marked = JSON.parse(localStorage.getItem("Genetics_marked"));
Histology_marked = JSON.parse(localStorage.getItem("Histology_marked"));
Immunology_marked = JSON.parse(localStorage.getItem("Immunology_marked"));
Microbiology_marked = JSON.parse(localStorage.getItem("Microbiology_marked"));
Pathology_marked = JSON.parse(localStorage.getItem("Pathology_marked"));
Pathophysiology_marked = JSON.parse(localStorage.getItem("Pathophysiology_marked"));
Pharmacology_marked = JSON.parse(localStorage.getItem("Pharmacology_marked"));
Physiology_marked = JSON.parse(localStorage.getItem("Physiology_marked"));


// marked subjects count
medicine_marked_count = localStorage.getItem("medicine_marked_count");
surgery_marked_count = localStorage.getItem("surgery_marked_count");
Biochemistry_marked_count = localStorage.getItem("Biochemistry_marked_count");
biostat_marked_count = localStorage.getItem("biostat_marked_count");
embryology_marked_count = localStorage.getItem("embryology_marked_count");
Genetics_marked_count = localStorage.getItem("Genetics_marked_count");
Histology_marked_count = localStorage.getItem("Histology_marked_count");
Immunology_marked_count = localStorage.getItem("Immunology_marked_count");
Microbiology_marked_count = localStorage.getItem("Microbiology_marked_count");
Pathology_marked_count = localStorage.getItem("Pathology_marked_count");
Pathophysiology_marked_count = localStorage.getItem("Pathophysiology_marked_count");
Pharmacology_marked_count = localStorage.getItem("Pharmacology_marked_count");
Physiology_marked_count = localStorage.getItem("Physiology_marked_count");


// marked systems
cardiovascular_marked = JSON.parse(localStorage.getItem("cardiovascular_marked"));
respiratory_marked = JSON.parse(localStorage.getItem("respiratory_marked"));
renal_marked = JSON.parse(localStorage.getItem("renal_marked"));
allergy_marked = JSON.parse(localStorage.getItem("allergy_marked"));
dermatology_marked = JSON.parse(localStorage.getItem("dermatology_marked"));
gastrointestinal_marked = JSON.parse(localStorage.getItem("gastrointestinal_marked"));
hematology_marked = JSON.parse(localStorage.getItem("hematology_marked"));
neuro_marked = JSON.parse(localStorage.getItem("neuro_marked"));
rheumatology_marked = JSON.parse(localStorage.getItem("rheumatology_marked"));
infectious_marked = JSON.parse(localStorage.getItem("infectious_marked"));
endocrine_marked = JSON.parse(localStorage.getItem("endocrine_marked"));
reproductive_F_marked = JSON.parse(localStorage.getItem("reproductive_F_marked"));
reproductive_M_marked = JSON.parse(localStorage.getItem("reproductive_M_marked"));
pregnancy_marked = JSON.parse(localStorage.getItem("pregnancy_marked"));



//marked systems count
cardiovascular_marked_count = localStorage.getItem("cardiovascular_marked_count");
respiratory_marked_count = localStorage.getItem("respiratory_marked_count");
renal_marked_count = localStorage.getItem("renal_marked_count");
allergy_marked_count = localStorage.getItem("allergy_marked_count");
dermatology_marked_count = localStorage.getItem("dermatology_marked_count");
gastrointestinal_marked_count = localStorage.getItem("gastrointestinal_marked_count");
hematology_marked_count = localStorage.getItem("hematology_marked_count");
neuro_marked_count = localStorage.getItem("neuro_marked_count");
rheumatology_marked_count = localStorage.getItem("rheumatology_marked_count");
infectious_marked_count = localStorage.getItem("infectious_marked_count");
endocrine_marked_count = localStorage.getItem("endocrine_marked_count");
reproductive_F_marked_count = localStorage.getItem("reproductive_F_marked_count");
reproductive_M_marked_count = localStorage.getItem("reproductive_M_marked_count");
pregnancy_marked_count = localStorage.getItem("pregnancy_marked_count");




//
//
all_marked = JSON.parse(localStorage.getItem("all_marked"));
//











for(let i=1;i<=300;i++){
  Exams[`Exam_${i}`] =JSON.parse(localStorage.getItem(`Exam_${i}`));
  Answers[`Answer_${i}`] =JSON.parse(localStorage.getItem(`Answer_${i}`));
  Dates[`Date_${i}`] =JSON.parse(localStorage.getItem(`Date_${i}`));
  scores[`score_${i}`]=localStorage.getItem(`score_${i}`); 
  }
//
//

Z=localStorage.getItem("Z");


solved=localStorage.getItem("solved");
toBeSolved=localStorage.getItem("toBeSolved");
SUM = localStorage.getItem("SUM");

FINAL_ARRAY=  JSON.parse(localStorage.getItem("FINAL_ARRAY"));
Final_Count= localStorage.getItem("Final_Count");

}






window.onload = function() {


  if (localStorage.getItem("triggerFunction") === "true") {
    // Call the function
  ResetFunction();
  makeZeros();
  update_texts();


  // Remove the flag to avoid re-triggering

   setTimeout(function() {
      document.getElementById("unused_text_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
      document.getElementById("all_mode_text_remain_text").innerHTML = Number(medicine_questions.length)+Number(surgery_questions.length)+Number(Biochemistry_questions.length)+Number(biostat_questions.length)+Number(embryology_questions.length)+Number(Genetics_questions.length)+Number(Histology_questions.length)+Number(Immunology_questions.length)+Number(Microbiology_questions.length)+Number(Pathology_questions.length)+Number(Pathophysiology_questions.length)+Number(Pharmacology_questions.length)+Number(Physiology_questions.length);
      document.getElementById("AllSubjects_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
      //
      //
      document.getElementById("unused").click();
   if  (document.getElementById("unused").checked==true){}else{document.getElementById("unused").click();};

      }, 200);
    
      localStorage.removeItem("triggerFunction");

  }else{
  getSavedValues();
  makeZeros();
  update_texts();

  setTimeout(function() {
    document.getElementById("unused_text_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
    document.getElementById("all_mode_text_remain_text").innerHTML = Number(medicine_questions.length)+Number(surgery_questions.length)+Number(Biochemistry_questions.length)+Number(biostat_questions.length)+Number(embryology_questions.length)+Number(Genetics_questions.length)+Number(Histology_questions.length)+Number(Immunology_questions.length)+Number(Microbiology_questions.length)+Number(Pathology_questions.length)+Number(Pathophysiology_questions.length)+Number(Pharmacology_questions.length)+Number(Physiology_questions.length);
    document.getElementById("AllSubjects_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
// byelzam kaman click?    

  //    
  DoUnused();
  //
  //

  }, 200); // 10000 milliseconds = 10 seconds //0.1 second
}


  // Retrieve the stored data
// Use the stored data as needed

}






window.addEventListener("beforeunload", function(event) {
  // Store the data using localStorage or sessionStorage

  saveValues();
  // Optionally, prompt the user with a confirmation message
  // event.preventDefault();
  // event.returnValue = "Are you sure you want to leave?";
});



function ResetFunction() {
  console.log("Reset Function has been triggered!");
  // Add your function logic here

Z=0;

chosen_Answers=[]; // contains 0,1,2,3,4,5 which indicates answer number
chosen_Answers_string=[];
real_Answers=[];

//
Exams={};
for(let i=1;i<=300;i++){
  Exams[`Exam_${i}`]="";
  }

Answers={};
for(let i=1;i<=300;i++){
  Answers[`Answer_${i}`]="";
  }

Dates={};
  for(let i=1;i<=300;i++){
  Dates[`Date_${i}`]="";
 }

scores={};
for(let i=1;i<=300;i++){
scores[`score_${i}`]=0;
}

// msh 3aref eza byelzam       let FINAL_ARRAY=[]; 


// Set Options
// begin of editing to reset 
currentIndex = 0;
rightAnswers = 0;
score=0;

solved=0;
toBeSolved=0
SUM=0;
//
//

bring_medicine();
bring_surgery();
bring_Biochemistry();
bring_Biostat();
bring_Embryology();
bring_Genetics();
bring_Histology();
bring_Immunology();
bring_Microbiology();
bring_Pathology();
bring_Pathophysiology();
bring_Pharmacology();
bring_Physiology();




bring_renal();
bring_respiratory();
bring_cardiovascular();
bring_Allergy();
bring_dermatology();
bring_Gastrointestinal();
bring_Hematology();
bring_Neuro();
bring_Rheumatology();
bring_Infectious();
bring_Endocrine();
bring_Reproductive_F();
bring_Reproductive_M();
bring_Pregnancy();


//hdol bzon lazem am7i l let mnhom kolhom, 
let common_array_medicine;
let common_array_surgery;
let common_array_Biochemistry;
let common_array_Biostatsitics;
let common_array_Embryology;
let common_array_Genetics;
let common_array_Histology;
let common_array_Immunology;
let common_array_Microbiology;
let common_array_Pathology;
let common_array_Pathophysiology;
let common_array_Pharmacology;
let common_array_Physiology;


let common_array_respiratory;
let common_array_renal;
let common_array_cardiovascular;
let common_array_allergy;
let common_array_Dermatology;
let common_array_Gastrointestinal;
let common_array_Hematology;
let common_array_Neuro;
let common_array_Rheumatology;
let common_array_infectious;
let common_array_endocrine;
let common_array_Reproductive_F;
let common_array_Reproductive_M;
let common_array_Pregnancy;


// i removed =[] from all and put make zeros function in reset order.
let subject_array;
let systems_array;



let mix_respiratory;
let mix_cardiovascular;
let mix_renal;
let mix_Allergy;
let mix_dermatology;
let mix_gastrointestinal;
let mix_hematology;
let mix_neuro;
let mix_Rheumatology;
let mix_infectious;
let mix_endocrine;
let mix_reproductive_F;
let mix_reproductive_M;
let mix_pregnancy;



let mix_all_remove_duplicates;

// end of editing
medicine_incorrect=[];
medicine_incorrect_count=0;
medicine_marked=[];
medicine_marked_count=0;

surgery_incorrect=[];
surgery_incorrect_count=0;
surgery_marked=[];
surgery_marked_count=0;

Biochemistry_incorrect=[];
Biochemistry_incorrect_count=0;
Biochemistry_marked=[];
Biochemistry_marked_count=0;

biostat_incorrect=[];
biostat_incorrect_count=0;
biostat_marked=[];
biostat_marked_count=0;

embryology_incorrect=[];
embryology_incorrect_count=0;
embryology_marked=[];
embryology_marked_count=0;

Genetics_incorrect=[];
Genetics_incorrect_count=0;
Genetics_marked=[];
Genetics_marked_count=0;

Histology_incorrect=[];
Histology_incorrect_count=0;
Histology_marked=[];
Histology_marked_count=0;

Immunology_incorrect=[];
Immunology_incorrect_count=0;
Immunology_marked=[];
Immunology_marked_count=0;

Microbiology_incorrect=[];
Microbiology_incorrect_count=0;
Microbiology_marked=[];
Microbiology_marked_count=0;

Pathology_incorrect=[];
Pathology_incorrect_count=0;
Pathology_marked=[];
Pathology_marked_count=0;

Pathophysiology_incorrect=[];
Pathophysiology_incorrect_count=0;
Pathophysiology_marked=[];
Pathophysiology_marked_count=0;

Pharmacology_incorrect=[];
Pharmacology_incorrect_count=0;
Pharmacology_marked=[];
Pharmacology_marked_count=0;

Physiology_incorrect=[];
Physiology_incorrect_count=0;
Physiology_marked=[];
Physiology_marked_count=0;


//
//
//
//


cardiovascular_incorrect=[];
cardiovascular_incorrect_count=0;
cardiovascular_marked=[];
cardiovascular_marked_count=0;

respiratory_incorrect=[];
respiratory_incorrect_count=0;
respiratory_marked=[];
respiratory_marked_count=0;

renal_incorrect=[];
renal_incorrect_count=0;
renal_marked=[];
renal_marked_count=0;

allergy_incorrect=[];
allergy_incorrect_count=0;
allergy_marked=[];
allergy_marked_count=0;

dermatology_incorrect=[];
dermatology_incorrect_count=0;
dermatology_marked=[];
dermatology_marked_count=0;

gastrointestinal_incorrect=[];
gastrointestinal_incorrect_count=0;
gastrointestinal_marked=[];
gastrointestinal_marked_count=0;

hematology_incorrect=[];
hematology_incorrect_count=0;
hematology_marked=[];
hematology_marked_count=0;

neuro_incorrect=[];
neuro_incorrect_count=0;
neuro_marked=[];
neuro_marked_count=0;

rheumatology_incorrect=[];
rheumatology_incorrect_count=0;
rheumatology_marked=[];
rheumatology_marked_count=0;

infectious_incorrect=[];
infectious_incorrect_count=0;
infectious_marked=[];
infectious_marked_count=0;

endocrine_incorrect=[];
endocrine_incorrect_count=0;
endocrine_marked=[];
endocrine_marked_count=0;

reproductive_F_incorrect=[];
reproductive_F_incorrect_count=0;
reproductive_F_marked=[];
reproductive_F_marked_count=0;

reproductive_M_incorrect=[];
reproductive_M_incorrect_count=0;
reproductive_M_marked=[];
reproductive_M_marked_count=0;

pregnancy_incorrect=[];
pregnancy_incorrect_count=0;
pregnancy_marked=[];
pregnancy_marked_count=0;

//

//
//
all_incorrect=[];
//
all_marked=[];
//


allSubjectsCheckbox[0].disabled=false
medicineCheckbox[0].disabled = false;
surgeryCheckbox[0].disabled  = false;
BiochemistryCheckbox[0].disabled  = false;
BiostatCheckbox[0].disabled  = false;
EmbryologyCheckbox[0].disabled  = false;
GeneticsCheckbox[0].disabled  = false;
HistologyCheckbox[0].disabled  = false;
ImmunologyCheckbox[0].disabled  = false;
MicrobiologyCheckbox[0].disabled  = false;
PathologyCheckbox[0].disabled  = false;
PathophysiologyCheckbox[0].disabled  = false;
PharmacologyCheckbox[0].disabled  = false;
PhysiologyCheckbox[0].disabled  = false;



allSystemsCheckbox[0].disabled=true;
document.getElementById("color_AllSystems").style.color='grey'


respiratoryCheckbox[0].disabled = true;
document.getElementById("color_Respiratory").style.color='grey'

renalCheckbox[0].disabled = true;
document.getElementById("color_Renal").style.color='grey'

cardiovascCheckbox[0].disabled = true;
document.getElementById("color_Cardiovascular").style.color='grey'

allergyCheckbox[0].disabled = true;
document.getElementById("color_Allergy").style.color='grey'

DermatologyCheckbox[0].disabled = true;
document.getElementById("color_Dermatology").style.color='grey'

GastrointestinalCheckbox[0].disabled = true;
document.getElementById("color_Gastrointestinal").style.color='grey'

HemtologyCheckbox[0].disabled = true;
document.getElementById("color_Hematology").style.color='grey'


NeuroCheckbox[0].disabled = true;
document.getElementById("color_Neurology").style.color='grey'


RheumatologyCheckbox[0].disabled = true;
document.getElementById("color_Rheumatology").style.color='grey'


InfectiousCheckbox[0].disabled = true;
document.getElementById("color_Infectious").style.color='grey'


EndocrineCheckbox[0].disabled = true;
document.getElementById("color_Endocrine").style.color='grey'


Reproductive_F_Checkbox[0].disabled = true;
document.getElementById("color_Reproductive_F").style.color='grey'

Reproductive_M_Checkbox[0].disabled = true;
document.getElementById("color_Reproductive_M").style.color='grey'


Pregnancy_Checkbox[0].disabled = true;
document.getElementById("color_Pregnancy").style.color='grey'


makeZeros();
update_texts();  
}



//


function getQuestions_All() {
  n=document.getElementById('NumberOfQurstions').value
  if ( n>=1 && n<=40 )  {
       FINAL_ARRAY = [];
    
    for (let i = 0; i < subject_array.length; i++) {
      for (let j = 0; j < systems_array.length; j++) {
         if (subject_array[i].title == systems_array[j].title) {
         FINAL_ARRAY.push(subject_array[i]); }   } }

   // removing duplicates from final array
   FINAL_ARRAY =uniqueByKeepLast(FINAL_ARRAY, it=> it.title);

   // choosing n numbers of questions
   if ( n > FINAL_ARRAY.length)alert("enter a maximum number of "+ FINAL_ARRAY.length);
else {

   // randomzing final array
   let array2 = [];
   while(FINAL_ARRAY.length !== 0) {
   let randomIndex= Math.floor(Math.random() * FINAL_ARRAY.length);
   array2.push(FINAL_ARRAY [randomIndex]);
   FINAL_ARRAY.splice(randomIndex, 1);
   }
   FINAL_ARRAY = array2;
   
   currentIndex = 0;
   rightAnswers = 0;
   score=0;

   let list=document.getElementById("myList");
   while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  finishExamButton.style.display='block';
  nextAnsButton.style.display='none';

  if (currentIndex>=(n-1)){nextButton.style.display='none'}else{
    nextButton.style.display='block' }

   FINAL_ARRAY=FINAL_ARRAY.slice(0,n);
   Final_Count= FINAL_ARRAY.length;
       
//
//--------------------------------------------------------------------

for(let i=1;i<=n;i++){
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
  bullets.style.display='block';
  
  review_questions.onclick=() =>{
    let new_index=currentIndex;
    new_index++;
  let answers=document.getElementsByName("question");

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
   // theChoosenAnswer = answers[i].dataset.answer;
    chosen_Answers[new_index]=i;
   // chosen_Answers_string[new_index]=theChoosenAnswer;
    }  }
//
  currentIndex=i-1; // i added let
  //  nextButton.style.display='none';
  quizArea.innerHTML = "";
  answersArea.innerHTML = "";
  explanationArea.innerHTML="";
  addQuestionData_3(FINAL_ARRAY[currentIndex],Final_Count );
  //let answers=document.getElementsByName("question");
  // hon bs btghayerha la one question msh array
  for (let m =0 ;m< answers.length;m++){
        if (chosen_Answers[currentIndex+1]==m){
        answers[m].checked=true 
        }   }


for (let m =0 ;m< answers.length;m++){ answers[m].disabled='true' }
atButtonClicked[i - 1] = true; // Mark this "i@" button as clicked
//i want it to disappear when "submit" is clicked.
review_questions.style.display = 'none';
//
 } 
//if (i==1) review_questions.click();
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
    // Status.textContent="0"
    firstBtn.click(buttonEvent(i));
    list.appendChild(firstBtn);
    list.appendChild(Status);  
    //container.appendChild(firstBtn);
    firstButtons.push(firstBtn);
    // erja3ehma momken 7asbak l score aw check asnwer marteeen/
    firstButtons[0].click();
    }
     
    //
    //
    //------------------------------------------------------------------



        // to edit the percantage of solved question correctly, so a question will not count twice.
        
  let common_array_solved=[];
  let unused_updated=[];
  unused_updated=medicine_updated.concat(surgery_updated,Biochemistry_updated,biostat_updated,embryology_updated,Genetics_updated,Histology_updated,Immunology_updated,Microbiology_updated,Pathology_updated,Pathophysiology_updated,Pharmacology_updated,Physiology_updated); // common between final array of All-questions mode & Unused questions.
  console.log("unused_updated",unused_updated.length);
  console.log("FINAL_ARRAY",FINAL_ARRAY.length);



  for (let i = 0; i < unused_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (unused_updated[i].title == FINAL_ARRAY[j].title) {
    common_array_solved.push(unused_updated[i]);
   }}}

  common_array_solved = uniqueByKeepLast(common_array_solved, it=> it.title);
  //console.log("common_array_solved",common_array_solved.length);
  toBeSolved=common_array_solved.length;
  //  console.log("toBeSolved",toBeSolved.length);
  localStorage.setItem("toBeSolved", toBeSolved);
  localStorage.setItem("FINAL_ARRAY",JSON.stringify(FINAL_ARRAY));
  localStorage.setItem("Final_Count",Final_Count);

  // remember, if you want to do getsaveddata function in finish exams button, you have to add these three items 





  // hdol elli ta7t ew3ak tghayer m7alhom
 common_array_surgery=[];
 for (let i = 0; i < surgery_updated.length; i++) {
   for (let j = 0; j < FINAL_ARRAY.length; j++) {
      if (surgery_updated[i].title == FINAL_ARRAY[j].title) {
      common_array_surgery.push(surgery_updated[i]);
    }    }    }
surgery_updated=arrayDiffByKey('title', surgery_updated, common_array_surgery);
surgery_updated_count=surgery_updated.length;
//console.log(surgery_updated);


common_array_medicine=[];
for (let i = 0; i < medicine_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (medicine_updated[i].title == FINAL_ARRAY[j].title) {
  common_array_medicine.push(medicine_updated[i]);
}}}
medicine_updated=arrayDiffByKey('title', medicine_updated, common_array_medicine);
medicine_updated_count=medicine_updated.length;


common_array_Biochemistry=[];
for (let i = 0; i < Biochemistry_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (Biochemistry_updated[i].title == FINAL_ARRAY[j].title) {
  common_array_Biochemistry.push(Biochemistry_updated[i]);
}    }    }
Biochemistry_updated=arrayDiffByKey('title', Biochemistry_updated, common_array_Biochemistry);
Biochemistry_updated_count=Biochemistry_updated.length;


common_array_Biostatsitics=[];
for (let i = 0; i < biostat_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (biostat_updated[i].title == FINAL_ARRAY[j].title) {
   common_array_Biostatsitics.push(biostat_updated[i]);
}    }    }
biostat_updated=arrayDiffByKey('title', biostat_updated, common_array_Biostatsitics);
biostat_updated_count=biostat_updated.length;

common_array_Embryology=[];
for (let i = 0; i < embryology_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (embryology_updated[i].title == FINAL_ARRAY[j].title) {
   common_array_Embryology.push(embryology_updated[i]);
}}}
embryology_updated=arrayDiffByKey('title', embryology_updated, common_array_Embryology);
embryology_updated_count=embryology_updated.length;



common_array_Genetics=[];
for (let i = 0; i < Genetics_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (Genetics_updated[i].title == FINAL_ARRAY[j].title) {
   common_array_Genetics.push(Genetics_updated[i]);
}}}
Genetics_updated=arrayDiffByKey('title', Genetics_updated, common_array_Genetics);
Genetics_updated_count=Genetics_updated.length;


common_array_Histology=[];
for (let i = 0; i < Histology_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (Histology_updated[i].title == FINAL_ARRAY[j].title) {
   common_array_Histology.push(Histology_updated[i]);
}}}
Histology_updated=arrayDiffByKey('title', Histology_updated, common_array_Histology);
Histology_updated_count=Histology_updated.length;


common_array_Immunology=[];
for (let i = 0; i < Immunology_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
     if (Immunology_updated[i].title == FINAL_ARRAY[j].title) {
       common_array_Immunology.push(Immunology_updated[i]);
   }}}
   Immunology_updated=arrayDiffByKey('title', Immunology_updated, common_array_Immunology);
   Immunology_updated_count=Immunology_updated.length;


   
common_array_Microbiology=[];
for (let i = 0; i < Microbiology_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
if (Microbiology_updated[i].title == FINAL_ARRAY[j].title) {
common_array_Microbiology.push(Microbiology_updated[i]);
}}}
Microbiology_updated=arrayDiffByKey('title', Microbiology_updated, common_array_Microbiology);
Microbiology_updated_count=Microbiology_updated.length;



 common_array_Pathology=[];
 for (let i = 0; i < Pathology_updated.length; i++) {
 for (let j = 0; j < FINAL_ARRAY.length; j++) {
 if (Pathology_updated[i].title == FINAL_ARRAY[j].title) {
 common_array_Pathology.push(Pathology_updated[i]);
 }}}
 Pathology_updated=arrayDiffByKey('title', Pathology_updated, common_array_Pathology);
 Pathology_updated_count=Pathology_updated.length;


 common_array_Pathophysiology=[];
 for (let i = 0; i < Pathophysiology_updated.length; i++) {
 for (let j = 0; j < FINAL_ARRAY.length; j++) {
 if (Pathophysiology_updated[i].title == FINAL_ARRAY[j].title) {
 common_array_Pathophysiology.push(Pathophysiology_updated[i]);
 }}}
Pathophysiology_updated=arrayDiffByKey('title', Pathophysiology_updated, common_array_Pathophysiology);
Pathophysiology_updated_count=Pathophysiology_updated.length;


common_array_Pharmacology=[];
for (let i = 0; i < Pharmacology_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
if (Pharmacology_updated[i].title == FINAL_ARRAY[j].title) {
common_array_Pharmacology.push(Pharmacology_updated[i]);
}}}
Pharmacology_updated=arrayDiffByKey('title', Pharmacology_updated, common_array_Pharmacology);
Pharmacology_updated_count=Pharmacology_updated.length;


common_array_Physiology=[];
for (let i = 0; i < Physiology_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
if (Physiology_updated[i].title == FINAL_ARRAY[j].title) {
 common_array_Physiology.push(Physiology_updated[i]);
}}}
Physiology_updated=arrayDiffByKey('title', Physiology_updated, common_array_Physiology);
Physiology_updated_count=Physiology_updated.length;








//
//
common_array_renal=[];
for (let i = 0; i < renal_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (renal_updated[i].title == FINAL_ARRAY[j].title) {
  common_array_renal.push(renal_updated[i]);
}}}
renal_updated=arrayDiffByKey('title', renal_updated, common_array_renal);
renal_updated_count=renal_updated.length;


common_array_cardiovascular=[];
for (let i = 0; i < cardiovascular_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (cardiovascular_updated[i].title == FINAL_ARRAY[j].title) {
  common_array_cardiovascular.push(cardiovascular_updated[i]);
}}}
cardiovascular_updated=arrayDiffByKey('title', cardiovascular_updated, common_array_cardiovascular);
cardiovascular_updated_count=cardiovascular_updated.length;



common_array_respiratory=[];
for (let i = 0; i < respiratory_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (respiratory_updated[i].title == FINAL_ARRAY[j].title) {
  common_array_respiratory.push(respiratory_updated[i]);
}}}
respiratory_updated=arrayDiffByKey('title', respiratory_updated, common_array_respiratory);
respiratory_updated_count=respiratory_updated.length;




common_array_allergy=[];
for (let i = 0; i < allergy_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (allergy_updated[i].title == FINAL_ARRAY[j].title) {
   common_array_allergy.push(allergy_updated[i]);
}}}
allergy_updated=arrayDiffByKey('title', allergy_updated, common_array_allergy);
allergy_updated_count=allergy_updated.length;


 common_array_Dermatology=[];
 for (let i = 0; i < dermatology_updated.length; i++) {
 for (let j = 0; j < FINAL_ARRAY.length; j++) {
 if (dermatology_updated[i].title == FINAL_ARRAY[j].title) {
 common_array_Dermatology.push(dermatology_updated[i]);
  }}}
 dermatology_updated=arrayDiffByKey('title', dermatology_updated, common_array_Dermatology);
 dermatology_updated_count=dermatology_updated.length;


 common_array_Gastrointestinal=[];
 for (let i = 0; i < gastrointestinal_updated.length; i++) {
 for (let j = 0; j < FINAL_ARRAY.length; j++) {
 if (gastrointestinal_updated[i].title == FINAL_ARRAY[j].title) {
 common_array_Gastrointestinal.push(gastrointestinal_updated[i]);
}}}
 gastrointestinal_updated=arrayDiffByKey('title', gastrointestinal_updated, common_array_Gastrointestinal);
 gastrointestinal_updated_count=gastrointestinal_updated.length;


common_array_Hematology=[];
for (let i = 0; i < hematology_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
if (hematology_updated[i].title == FINAL_ARRAY[j].title) {
common_array_Hematology.push(hematology_updated[i]);
}}}
hematology_updated=arrayDiffByKey('title', hematology_updated, common_array_Hematology);
hematology_updated_count=hematology_updated.length;
          

   
common_array_Neuro=[];
for (let i = 0; i < neuro_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
if (neuro_updated[i].title == FINAL_ARRAY[j].title) {
 common_array_Neuro.push(neuro_updated[i]);
}}}
neuro_updated=arrayDiffByKey('title', neuro_updated, common_array_Neuro);
neuro_updated_count=neuro_updated.length;   
       

common_array_Rheumatology=[];
for (let i = 0; i < rheumatology_updated.length; i++) {
for (let j = 0; j < FINAL_ARRAY.length; j++) {
if (rheumatology_updated[i].title == FINAL_ARRAY[j].title) {
 common_array_Rheumatology.push(rheumatology_updated[i]);
 }}}
 rheumatology_updated=arrayDiffByKey('title', rheumatology_updated, common_array_Rheumatology);
 rheumatology_updated_count=rheumatology_updated.length;  


 common_array_infectious=[];
 for (let i = 0; i < infectious_updated.length; i++) {
 for (let j = 0; j < FINAL_ARRAY.length; j++) {
 if (infectious_updated[i].title == FINAL_ARRAY[j].title) {
   common_array_infectious.push(infectious_updated[i]);
  }}}
  infectious_updated=arrayDiffByKey('title', infectious_updated, common_array_infectious);
  infectious_updated_count=infectious_updated.length;  



  common_array_endocrine=[];
  for (let i = 0; i < endocrine_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (endocrine_updated[i].title == FINAL_ARRAY[j].title) {
   common_array_endocrine.push(endocrine_updated[i]);
   }}}
   endocrine_updated=arrayDiffByKey('title', endocrine_updated, common_array_endocrine);
   endocrine_updated_count=endocrine_updated.length;  

   
   
 common_array_Reproductive_F=[];
 for (let i = 0; i < reproductive_F_updated.length; i++) {
 for (let j = 0; j < FINAL_ARRAY.length; j++) {
 if (reproductive_F_updated[i].title == FINAL_ARRAY[j].title) {
   common_array_Reproductive_F.push(reproductive_F_updated[i]);
  }}}
  reproductive_F_updated=arrayDiffByKey('title', reproductive_F_updated, common_array_Reproductive_F);
  reproductive_F_updated_count=reproductive_F_updated.length;  


  
 common_array_Reproductive_M=[];
 for (let i = 0; i < reproductive_M_updated.length; i++) {
 for (let j = 0; j < FINAL_ARRAY.length; j++) {
 if (reproductive_M_updated[i].title == FINAL_ARRAY[j].title) {
   common_array_Reproductive_M.push(reproductive_M_updated[i]);
  }}}
  reproductive_M_updated=arrayDiffByKey('title', reproductive_M_updated, common_array_Reproductive_M);
  reproductive_M_updated_count=reproductive_M_updated.length;  



  common_array_Pregnancy=[];
  for (let i = 0; i < pregnancy_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (pregnancy_updated[i].title == FINAL_ARRAY[j].title) {
   common_array_Pregnancy.push(pregnancy_updated[i]);
   }}}
   pregnancy_updated=arrayDiffByKey('title', pregnancy_updated, common_array_Pregnancy);
   pregnancy_updated_count=pregnancy_updated.length; 



   Uncheck_All_mode();
      //(JSON.stringify  // hai ana m7etha w zebet 
      // Create Bullets + Set Questions Count

      quizArea.innerHTML = "";
      answersArea.innerHTML = "";
      explanationArea.innerHTML="";

      // Add Question Data
      addQuestionData(FINAL_ARRAY[currentIndex], Final_Count);

      // Start CountDown
     // countdown(20, Final_Count);

      for ( let i=0;i<n;i++){
      chosen_Answers_string[i]="";
      }
      for ( i=0;i<n;i++){
        chosen_Answers[i]="100";
        }

      // Click On Submit
      nextButton.onclick = () => {
        firstButtons[currentIndex+1].click();

      }

      quizApp.style.display='block';
      quizArea.style.display='block';
      answersArea.style.display='block';
      //nextButton.style.display='block';
      bullets.style.display='block';
      startButton.style.display = 'none';
      chooseQuestionsClass.style.display= 'none';
      questionButtonsContainer.style.display = 'block';


    } }else alert ("enter a number between 1 & 40")
    }








    
function Uncheck_All_mode(){
//console.log("check", respiratory_questions)

document.getElementById("incorrect_text_remain_text").innerHTML = Number(all_incorrect.length);
document.getElementById("unused_text_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
document.getElementById("all_mode_text_remain_text").innerHTML = Number(medicine_questions.length)+Number(surgery_questions.length)+Number(Biochemistry_questions.length)+Number(biostat_questions.length)+Number(embryology_questions.length)+Number(Genetics_questions.length)+Number(Histology_questions.length)+Number(Immunology_questions.length)+Number(Microbiology_questions.length)+Number(Pathology_questions.length)+Number(Pathophysiology_questions.length)+Number(Pharmacology_questions.length)+Number(Physiology_questions.length);
document.getElementById("marked_text_remain_text").innerHTML = Number(all_marked.length);


document.getElementById("AllSubjects_remain_text").innerHTML =Number( medicine_count)+Number(surgery_count)+Number(biostat_count)+Number(biostat_count)+Number(embryology_count)+Number(Genetics_count)+Number(Histology_count)+Number(Immunology_count)+Number(Microbiology_count)+Number(Pathology_count)+Number(Pathophysiology_count)+Number(Pharmacology_count)+Number(Physiology_count);
    
  document.getElementById("medicine_remain_text").innerHTML = medicine_count; 
  document.getElementById("surgery_remain_text").innerHTML = surgery_count; 
  document.getElementById("biochemistry_remain_text").innerHTML = Biochemistry_count; 
  document.getElementById("biostat_remain_text").innerHTML = biostat_count; 
  document.getElementById("embryology_remain_text").innerHTML = embryology_count; 
  document.getElementById("genetics_remain_text").innerHTML = Genetics_count; 
  document.getElementById("histology_remain_text").innerHTML = Histology_count; 
  document.getElementById("immunology_remain_text").innerHTML = Immunology_count; 
  document.getElementById("microbiology_remain_text").innerHTML = Microbiology_count; 
  document.getElementById("pathology_remain_text").innerHTML = Pathology_count; 
  document.getElementById("pathophysiology_remain_text").innerHTML = Pathophysiology_count; 
  document.getElementById("pharmacology_remain_text").innerHTML = Pharmacology_count; 
  document.getElementById("physiology_remain_text").innerHTML = Physiology_count; 




  document.getElementById("AllSystems_remain_text").innerHTML = 0; 
  document.getElementById("respiratory_remain_text").innerHTML = 0; 
  document.getElementById("cardiovascular_remain_text").innerHTML = 0; 
  document.getElementById("renal_remain_text").innerHTML = 0; 
  document.getElementById("allergy_remain_text").innerHTML = 0; 
  document.getElementById("dermatology_remain_text").innerHTML = 0; 
  document.getElementById("gastrointestinal_remain_text").innerHTML = 0; 
  document.getElementById("hematology_remain_text").innerHTML = 0; 
  document.getElementById("neurology_remain_text").innerHTML = 0; 
  document.getElementById("rheumatology_remain_text").innerHTML = 0; 
  document.getElementById("infectious_remain_text").innerHTML = 0; 
  document.getElementById("endocrine_remain_text").innerHTML = 0; 
  document.getElementById("Reproductive_f_remain_text").innerHTML = 0; 
  document.getElementById("Reproductive_M_remain_text").innerHTML = 0; 
  document.getElementById("pregnancy_remain_text").innerHTML = 0; 



  document.getElementById("AllSubjects").checked=false;
  document.getElementById("Medicine").checked=false;
  document.getElementById("Surgery").checked=false;
  document.getElementById("Biochemistry").checked=false;
  document.getElementById("Biostatsitics").checked=false;
  document.getElementById("Embryology").checked=false;
  document.getElementById("Genetics").checked=false;
  document.getElementById("Histology").checked=false;
  document.getElementById("Immunology").checked=false;
  document.getElementById("Microbiology").checked=false;
  document.getElementById("Pathology").checked=false;
  document.getElementById("Pathophysiology").checked=false;
  document.getElementById("Pharmacology").checked=false;
  document.getElementById("Physiology").checked=false;



  document.getElementById("AllSystems").checked=false;
  document.getElementById("Respiratory").checked=false;
  document.getElementById("Cardiovascular").checked=false;
  document.getElementById("Renal").checked=false;
  document.getElementById("Allergy").checked=false;
  document.getElementById("Dermatology").checked=false;
  document.getElementById("Gastrointestinal").checked=false;
  document.getElementById("Hematology").checked=false;
  document.getElementById("Neurology").checked=false;
  document.getElementById("Rheumatology").checked=false;
  document.getElementById("Infectious").checked=false;
  document.getElementById("Endocrine").checked=false;
  document.getElementById("Reproductive_F").checked=false;
  document.getElementById("Reproductive_M").checked=false;
  document.getElementById("Pregnancy").checked=false;













  


    document.getElementById("AllSubjects").disabled = false;
document.getElementById("color_AllSubjects").style.color='black'


    document.getElementById("Medicine").disabled = false;
document.getElementById("color_Medicine").style.color='black'


    document.getElementById("Surgery").disabled = false;
document.getElementById("color_Surgery").style.color='black'


document.getElementById("Biochemistry").disabled = false;
document.getElementById("color_Biochemistry").style.color='black'


document.getElementById("Biostatsitics").disabled = false;
document.getElementById("color_Biostatsitics").style.color='black'


document.getElementById("Embryology").disabled = false;
document.getElementById("color_Embryology").style.color='black'


document.getElementById("Genetics").disabled = false;
document.getElementById("color_Genetics").style.color='black'


document.getElementById("Histology").disabled = false;
document.getElementById("color_Histology").style.color='black'


document.getElementById("Immunology").disabled = false;
document.getElementById("color_Immunology").style.color='black'


document.getElementById("Microbiology").disabled = false;
document.getElementById("color_Microbiology").style.color='black'


document.getElementById("Pathology").disabled = false;
document.getElementById("color_Pathology").style.color='black'


document.getElementById("Pathophysiology").disabled = false;
document.getElementById("color_Pathophysiology").style.color='black'

document.getElementById("Pharmacology").disabled = false;
document.getElementById("color_Pharmacology").style.color='black'


document.getElementById("Physiology").disabled = false;
document.getElementById("color_Physiology").style.color='black'







  document.getElementById("AllSystems").disabled = true;
  document.getElementById("Respiratory").disabled=true;
  document.getElementById("Cardiovascular").disabled=true;
  document.getElementById("Renal").disabled=true;
  document.getElementById("Allergy").disabled=true;
  document.getElementById("Dermatology").disabled=true;
  document.getElementById("Gastrointestinal").disabled=true;
  document.getElementById("Hematology").disabled=true;
  document.getElementById("Neurology").disabled=true;
  document.getElementById("Rheumatology").disabled=true;
  document.getElementById("Infectious").disabled=true;
  document.getElementById("Endocrine").disabled=true;
  document.getElementById("Reproductive_F").disabled=true;
  document.getElementById("Reproductive_M").disabled=true;
  document.getElementById("Pregnancy").disabled=true;


  makeZeros();
}






function update_texts_all_mode(){
document.getElementById("incorrect_text_remain_text").innerHTML = Number(all_incorrect.length);
document.getElementById("unused_text_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
document.getElementById("all_mode_text_remain_text").innerHTML = Number(medicine_questions.length)+Number(surgery_questions.length)+Number(Biochemistry_questions.length)+Number(biostat_questions.length)+Number(embryology_questions.length)+Number(Genetics_questions.length)+Number(Histology_questions.length)+Number(Immunology_questions.length)+Number(Microbiology_questions.length)+Number(Pathology_questions.length)+Number(Pathophysiology_questions.length)+Number(Pharmacology_questions.length)+Number(Physiology_questions.length);
document.getElementById("marked_text_remain_text").innerHTML = Number(all_marked.length);

document.getElementById("AllSubjects_remain_text").innerHTML = Number(medicine_count)+Number(surgery_count)+Number(Biochemistry_count)+Number(biostat_count)+Number(embryology_count)+Number(Genetics_count)+Number(Histology_count)+Number(Immunology_count)+Number(Microbiology_count)+Number(Pathology_count)+Number(Pathophysiology_count)+Number(Pharmacology_count)+Number(Physiology_count);
  
  document.getElementById("medicine_remain_text").innerHTML = medicine_count; 
  document.getElementById("surgery_remain_text").innerHTML = surgery_count; 
  document.getElementById("biochemistry_remain_text").innerHTML = Biochemistry_count; 
  document.getElementById("biostat_remain_text").innerHTML = biostat_count; 
  document.getElementById("embryology_remain_text").innerHTML = embryology_count; 
  document.getElementById("genetics_remain_text").innerHTML = Genetics_count; 
  document.getElementById("histology_remain_text").innerHTML = Histology_count; 
  document.getElementById("immunology_remain_text").innerHTML = Immunology_count; 
  document.getElementById("microbiology_remain_text").innerHTML = Microbiology_count; 
  document.getElementById("pathology_remain_text").innerHTML = Pathology_count; 
  document.getElementById("pathophysiology_remain_text").innerHTML = Pathophysiology_count; 
  document.getElementById("pharmacology_remain_text").innerHTML = Pharmacology_count; 
  document.getElementById("physiology_remain_text").innerHTML = Physiology_count; 


  document.getElementById("respiratory_remain_text").innerHTML = mix_respiratory.length; 
  document.getElementById("cardiovascular_remain_text").innerHTML = mix_cardiovascular.length; 
  document.getElementById("renal_remain_text").innerHTML = mix_renal.length; 
  document.getElementById("allergy_remain_text").innerHTML = mix_Allergy.length; 
  document.getElementById("dermatology_remain_text").innerHTML = mix_dermatology.length; 
  document.getElementById("gastrointestinal_remain_text").innerHTML = mix_gastrointestinal.length; 
  document.getElementById("hematology_remain_text").innerHTML = mix_hematology.length; 
  document.getElementById("neurology_remain_text").innerHTML = mix_neuro.length; 
  document.getElementById("rheumatology_remain_text").innerHTML = mix_Rheumatology.length; 
  document.getElementById("infectious_remain_text").innerHTML = mix_infectious.length; 
  document.getElementById("endocrine_remain_text").innerHTML = mix_endocrine.length; 
  document.getElementById("Reproductive_f_remain_text").innerHTML = mix_reproductive_F.length; 
  document.getElementById("Reproductive_M_remain_text").innerHTML = mix_reproductive_M.length; 
  document.getElementById("pregnancy_remain_text").innerHTML = mix_pregnancy.length; 




  mix_all_remove_duplicates=mix_cardiovascular.concat(mix_renal,mix_respiratory,mix_Allergy,mix_dermatology,mix_gastrointestinal,mix_hematology,mix_Rheumatology,mix_infectious,mix_endocrine,mix_reproductive_F,mix_reproductive_M,mix_pregnancy);


  mix_all_remove_duplicates =uniqueByKeepLast(mix_all_remove_duplicates, it=> it.title);
  document.getElementById("AllSystems_remain_text").innerHTML = mix_all_remove_duplicates.length; 
  
  if ((mix_all_remove_duplicates.length) != 0){document.getElementById("AllSystems").disabled = false;
  document.getElementById("color_AllSystems").style.color='black'
}
  
  if (mix_respiratory.length != 0){document.getElementById("Respiratory").disabled = false;
  document.getElementById("color_Respiratory").style.color='black'
}
  
  if (mix_renal.length != 0){document.getElementById("Renal").disabled = false;
  document.getElementById("color_Renal").style.color='black'
}
  
  if (mix_cardiovascular.length != 0){document.getElementById("Cardiovascular").disabled = false;
  document.getElementById("color_Cardiovascular").style.color='black'
}

if (mix_Allergy.length != 0){document.getElementById("Allergy").disabled = false;
document.getElementById("color_Allergy").style.color='black'
}

if (mix_dermatology.length != 0){document.getElementById("Dermatology").disabled = false;
document.getElementById("color_Dermatology").style.color='black'
}

if (mix_gastrointestinal.length != 0){document.getElementById("Gastrointestinal").disabled = false;
document.getElementById("color_Gastrointestinal").style.color='black'
}


if (mix_hematology.length != 0){document.getElementById("Hematology").disabled = false;
document.getElementById("color_Hematology").style.color='black'
}


if (mix_neuro.length != 0){document.getElementById("Neurology").disabled = false;
document.getElementById("color_Neurology").style.color='black'
}

if (mix_Rheumatology.length != 0){document.getElementById("Rheumatology").disabled = false;
document.getElementById("color_Rheumatology").style.color='black'
}


if (mix_infectious.length != 0){document.getElementById("Infectious").disabled = false;
document.getElementById("color_Infectious").style.color='black'
}


if (mix_endocrine.length != 0){document.getElementById("Endocrine").disabled = false;
document.getElementById("color_Endocrine").style.color='black'
}


if (mix_reproductive_F.length != 0){document.getElementById("Reproductive_F").disabled = false;
document.getElementById("color_Reproductive_F").style.color='black'
}


if (mix_reproductive_M.length != 0){document.getElementById("Reproductive_M").disabled = false;
document.getElementById("color_Reproductive_M").style.color='black'
}

if (mix_pregnancy.length != 0){document.getElementById("Pregnancy").disabled = false;
document.getElementById("color_Pregnancy").style.color='black'
}



  if((!document.getElementById("Surgery").checked)&&(!document.getElementById("Medicine").checked)&&(!document.getElementById("Biochemistry").checked)&&(!document.getElementById("Biostatsitics").checked)&&(!document.getElementById("Embryology").checked)&&(!document.getElementById("Genetics").checked)&&(!document.getElementById("Histology").checked)&&(!document.getElementById("Immunology").checked)&&(!document.getElementById("Microbiology").checked)&&(!document.getElementById("Pathology").checked)&&(!document.getElementById("Pathophysiology").checked)&&(!document.getElementById("Pharmacology").checked)&&(!document.getElementById("Physiology").checked)){


      document.getElementById("AllSystems").disabled = true;
      document.getElementById("Respiratory").disabled = true;
      document.getElementById("Cardiovascular").disabled = true;
      document.getElementById("Renal").disabled = true;
      document.getElementById("Allergy").disabled = true;
      document.getElementById("Dermatology").disabled = true;
      document.getElementById("Gastrointestinal").disabled = true;
      document.getElementById("Hematology").disabled = true;
      document.getElementById("Neurology").disabled = true;
      document.getElementById("Rheumatology").disabled = true;
      document.getElementById("Infectious").disabled = true;
      document.getElementById("Endocrine").disabled = true;
      document.getElementById("Reproductive_F").disabled = true;
      document.getElementById("Reproductive_M").disabled = true;
      document.getElementById("Pregnancy").disabled = true;


      document.getElementById("color_AllSystems").style.color='grey'
      document.getElementById("color_Respiratory").style.color='grey'
      document.getElementById("color_Cardiovascular").style.color='grey'
      document.getElementById("color_Renal").style.color='grey'
      document.getElementById("color_Allergy").style.color='grey'
      document.getElementById("color_Dermatology").style.color='grey'
      document.getElementById("color_Gastrointestinal").style.color='grey'
      document.getElementById("color_Hematology").style.color='grey'
      document.getElementById("color_Neurology").style.color='grey'
      document.getElementById("color_Rheumatology").style.color='grey'
      document.getElementById("color_Infectious").style.color='grey'
      document.getElementById("color_Endocrine").style.color='grey'
      document.getElementById("color_Reproductive_F").style.color='grey'
      document.getElementById("color_Reproductive_M").style.color='grey'
      document.getElementById("color_Pregnancy").style.color='grey'

  }
}




function getQuestions_incorrect(){
  n=document.getElementById('NumberOfQurstions').value
  if ( n>=1 && n<=40 )  {
       FINAL_ARRAY = [];
    
    for (let i = 0; i < subject_array.length; i++) {
      for (let j = 0; j < systems_array.length; j++) {
         if (subject_array[i].title == systems_array[j].title) {
         FINAL_ARRAY.push(subject_array[i]); }   } }

   // removing duplicates from final array
   FINAL_ARRAY =uniqueByKeepLast(FINAL_ARRAY, it=> it.title);

   // choosing n numbers of questions
   if ( n > FINAL_ARRAY.length)alert("enter a maximum number of "+ FINAL_ARRAY.length);
else {

   // randomzing final array
   let array2 = [];
   while(FINAL_ARRAY.length !== 0) {
   let randomIndex= Math.floor(Math.random() * FINAL_ARRAY.length);
   array2.push(FINAL_ARRAY [randomIndex]);
   FINAL_ARRAY.splice(randomIndex, 1);
   }
   FINAL_ARRAY = array2;
   
   currentIndex = 0;
   rightAnswers = 0;
   score=0;

   let list=document.getElementById("myList");
   while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  finishExamButton.style.display='block';
  nextAnsButton.style.display='none';

  if (currentIndex>=(n-1)){nextButton.style.display='none'}else{
    nextButton.style.display='block' }

   FINAL_ARRAY=FINAL_ARRAY.slice(0,n);
   Final_Count= FINAL_ARRAY.length;
       //========================================================================================
/*
  for (let i = 1; i <= n; i++) {
        let Button = document.createElement("button");
        let Status = document.createElement("label");
        Status.className='status';
        Status.id=`status_${i}`;
        Button.className=`new_buttons`;
        Button.id = `${i}`;
        Button.textContent = `${i}`
       // Status.textContent="0"

        Button.click(buttonEvent(i));
        list.appendChild(Button);
        list.appendChild(Status);}
    */
   //
//
//
for(let i=1;i<=n;i++){
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
  bullets.style.display='block';
  
  review_questions.onclick=() =>{
    let new_index=currentIndex;
    new_index++;
  let answers=document.getElementsByName("question");

  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
   // theChoosenAnswer = answers[i].dataset.answer;
    chosen_Answers[new_index]=i;
   // chosen_Answers_string[new_index]=theChoosenAnswer;
    }  }
//
  currentIndex=i-1; // i added let
  //  nextButton.style.display='none';
  quizArea.innerHTML = "";
  answersArea.innerHTML = "";
  explanationArea.innerHTML="";
  addQuestionData_3(FINAL_ARRAY[currentIndex],Final_Count );
  //let answers=document.getElementsByName("question");
  // hon bs btghayerha la one question msh array
  for (let m =0 ;m< answers.length;m++){
        if (chosen_Answers[currentIndex+1]==m){
        answers[m].checked=true 
        }   }


for (let m =0 ;m< answers.length;m++){ answers[m].disabled='true' }
atButtonClicked[i - 1] = true; // Mark this "i@" button as clicked
//i want it to disappear when "submit" is clicked.
review_questions.style.display = 'none';
//
 } 
//if (i==1) review_questions.click();
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
    // Status.textContent="0"
    firstBtn.click(buttonEvent(i));
    list.appendChild(firstBtn);
    list.appendChild(Status);  
    //container.appendChild(firstBtn);
    firstButtons.push(firstBtn);
    // erja3ehma momken 7asbak l score aw check asnwer marteeen/
    firstButtons[0].click();
    }
     
//===============================================================================================      
  let common_array_solved=[];
  let unused_updated=[];
  unused_updated=medicine_updated.concat(surgery_updated,Biochemistry_updated,biostat_updated,embryology_updated,Genetics_updated,Histology_updated,Immunology_updated,Microbiology_updated,Pathology_updated,Pathophysiology_updated,Pharmacology_updated,Physiology_updated); // common between final array of All-questions mode & Unused questions.

  for (let i = 0; i < unused_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (unused_updated[i].title == FINAL_ARRAY[j].title) {
    common_array_solved.push(unused_updated[i]);
   }}}

   common_array_solved = uniqueByKeepLast(common_array_solved, it=> it.title);
   toBeSolved=common_array_solved.length;
   localStorage.setItem("toBeSolved", toBeSolved);
   localStorage.setItem("FINAL_ARRAY",JSON.stringify(FINAL_ARRAY));
   localStorage.setItem("Final_Count",Final_Count);




Uncheck_incorrect();
      //(JSON.stringify  // hai ana m7etha w zebet 
      // Create Bullets + Set Questions Count

      quizArea.innerHTML = "";
      answersArea.innerHTML = "";
      explanationArea.innerHTML="";

      // Add Question Data
      addQuestionData(FINAL_ARRAY[currentIndex], Final_Count);

      // Start CountDown
     // countdown(20, Final_Count);

      for ( let i=0;i<n;i++){
      chosen_Answers_string[i]="";
      }
      for ( i=0;i<n;i++){
        chosen_Answers[i]="100";
        }

      // Click On Submit
      nextButton.onclick = () => {
        firstButtons[currentIndex+1].click();

      }

      quizApp.style.display='block';
      quizArea.style.display='block';
      answersArea.style.display='block';
      //nextButton.style.display='block';
      bullets.style.display='block';
      startButton.style.display = 'none';
      chooseQuestionsClass.style.display= 'none';
      questionButtonsContainer.style.display = 'block';


    } }else alert ("enter a number between 1 & 40")
   

}










function Uncheck_incorrect(){
  document.getElementById("incorrect_text_remain_text").innerHTML = Number(all_incorrect.length);
  document.getElementById("unused_text_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
  document.getElementById("all_mode_text_remain_text").innerHTML = Number(medicine_questions.length)+Number(surgery_questions.length)+Number(Biochemistry_questions.length)+Number(biostat_questions.length)+Number(embryology_questions.length)+Number(Genetics_questions.length)+Number(Histology_questions.length)+Number(Immunology_questions.length)+Number(Microbiology_questions.length)+Number(Pathology_questions.length)+Number(Pathophysiology_questions.length)+Number(Pharmacology_questions.length)+Number(Physiology_questions.length);
  document.getElementById("marked_text_remain_text").innerHTML = Number(all_marked.length);

  document.getElementById("AllSubjects_remain_text").innerHTML =all_incorrect.length;
    
    document.getElementById("medicine_remain_text").innerHTML = medicine_incorrect_count; 
    document.getElementById("surgery_remain_text").innerHTML = surgery_incorrect_count; 
    document.getElementById("biochemistry_remain_text").innerHTML = Biochemistry_incorrect_count; 
    document.getElementById("biostat_remain_text").innerHTML = biostat_incorrect_count; 
    document.getElementById("embryology_remain_text").innerHTML = embryology_incorrect_count; 
    document.getElementById("genetics_remain_text").innerHTML = Genetics_incorrect_count; 
    document.getElementById("histology_remain_text").innerHTML = Histology_incorrect_count; 
    document.getElementById("immunology_remain_text").innerHTML = Immunology_incorrect_count; 
    document.getElementById("microbiology_remain_text").innerHTML = Microbiology_incorrect_count; 
    document.getElementById("pathology_remain_text").innerHTML = Pathology_incorrect_count; 
    document.getElementById("pathophysiology_remain_text").innerHTML = Pathophysiology_incorrect_count; 
    document.getElementById("pharmacology_remain_text").innerHTML = Pharmacology_incorrect_count; 
    document.getElementById("physiology_remain_text").innerHTML = Physiology_incorrect_count; 
  
  
  
  
  
    document.getElementById("AllSystems_remain_text").innerHTML = 0; 
    document.getElementById("respiratory_remain_text").innerHTML = 0; 
    document.getElementById("cardiovascular_remain_text").innerHTML = 0; 
    document.getElementById("renal_remain_text").innerHTML = 0; 
    document.getElementById("allergy_remain_text").innerHTML = 0; 
    document.getElementById("dermatology_remain_text").innerHTML = 0; 
    document.getElementById("gastrointestinal_remain_text").innerHTML = 0; 
    document.getElementById("hematology_remain_text").innerHTML = 0; 
    document.getElementById("neurology_remain_text").innerHTML = 0; 
    document.getElementById("rheumatology_remain_text").innerHTML = 0; 
    document.getElementById("infectious_remain_text").innerHTML = 0; 
    document.getElementById("endocrine_remain_text").innerHTML = 0; 
    document.getElementById("Reproductive_f_remain_text").innerHTML = 0; 
    document.getElementById("Reproductive_M_remain_text").innerHTML = 0; 
    document.getElementById("pregnancy_remain_text").innerHTML = 0; 
  
  
  
    document.getElementById("AllSubjects").checked=false;
    document.getElementById("Medicine").checked=false;
    document.getElementById("Surgery").checked=false;
    document.getElementById("Biochemistry").checked=false;
    document.getElementById("Biostatsitics").checked=false;
    document.getElementById("Embryology").checked=false;
    document.getElementById("Genetics").checked=false;
    document.getElementById("Histology").checked=false;
    document.getElementById("Immunology").checked=false;
    document.getElementById("Microbiology").checked=false;
    document.getElementById("Pathology").checked=false;
    document.getElementById("Pathophysiology").checked=false;
    document.getElementById("Pharmacology").checked=false;
    document.getElementById("Physiology").checked=false;
  
  
  
    document.getElementById("AllSystems").checked=false;
    document.getElementById("Respiratory").checked=false;
    document.getElementById("Cardiovascular").checked=false;
    document.getElementById("Renal").checked=false;
    document.getElementById("Allergy").checked=false;
    document.getElementById("Dermatology").checked=false;
    document.getElementById("Gastrointestinal").checked=false;
    document.getElementById("Hematology").checked=false;
    document.getElementById("Neurology").checked=false;
    document.getElementById("Rheumatology").checked=false;
    document.getElementById("Infectious").checked=false;
    document.getElementById("Endocrine").checked=false;
    document.getElementById("Reproductive_F").checked=false;
    document.getElementById("Reproductive_M").checked=false;
    document.getElementById("Pregnancy").checked=false;
  
  












    if ((medicine_incorrect.length)+(surgery_incorrect.length)+(Biochemistry_incorrect.length)+(biostat_incorrect.length)+(embryology_incorrect.length)+(Genetics_incorrect.length)+(Histology_incorrect.length)+(Immunology_incorrect.length)+(Microbiology_incorrect.length)+(Pathology_incorrect.length)+(Pathophysiology_incorrect.length)+(Pharmacology_incorrect.length)+(Physiology_incorrect.length)== 0){
      document.getElementById("AllSubjects").disabled = true;
      document.getElementById("color_AllSubjects").style.color='grey'
  } else {
      document.getElementById("AllSubjects").disabled = false;
      document.getElementById("color_AllSubjects").style.color='black'
  }
  
  if (medicine_incorrect.length == 0){
      document.getElementById("Medicine").disabled = true;
      document.getElementById("color_Medicine").style.color='grey';
  } else {
      document.getElementById("Medicine").disabled= false;
      document.getElementById("color_Medicine").style.color='black';
  }
  
  if (surgery_incorrect.length == 0){
      document.getElementById("Surgery").disabled = true;
      document.getElementById("color_Surgery").style.color='grey'
  } else {
      document.getElementById("Surgery").disabled= false;
      document.getElementById("color_Surgery").style.color='black';
  }
  
  if (Biochemistry_incorrect.length == 0){
      document.getElementById("Biochemistry").disabled = true;
      document.getElementById("color_Biochemistry").style.color='grey'
  } else {
      document.getElementById("Biochemistry").disabled= false;
      document.getElementById("color_Biochemistry").style.color='black';
  }
  
  if (biostat_incorrect.length == 0){
      document.getElementById("Biostatsitics").disabled = true;
      document.getElementById("color_Biostatsitics").style.color='grey'
  } else {
      document.getElementById("Biostatsitics").disabled= false;
      document.getElementById("color_Biostatsitics").style.color='black';
  }
  
  if (embryology_incorrect.length == 0){
      document.getElementById("Embryology").disabled = true;
      document.getElementById("color_Embryology").style.color='grey'
  } else {
      document.getElementById("Embryology").disabled= false;
      document.getElementById("color_Embryology").style.color='black';
  }
  
  if (Genetics_incorrect.length == 0){
      document.getElementById("Genetics").disabled = true;
      document.getElementById("color_Genetics").style.color='grey'
  } else {
      document.getElementById("Genetics").disabled= false;
      document.getElementById("color_Genetics").style.color='black';
  }
  
  if (Histology_incorrect.length == 0){
      document.getElementById("Histology").disabled = true;
      document.getElementById("color_Histology").style.color='grey'
  } else {
      document.getElementById("Histology").disabled= false;
      document.getElementById("color_Histology").style.color='black';
  }
  
  if (Immunology_incorrect.length == 0){
      document.getElementById("Immunology").disabled = true;
      document.getElementById("color_Immunology").style.color='grey'
  } else {
      document.getElementById("Immunology").disabled = false;
      document.getElementById("color_Immunology").style.color = 'black';
  }
  
  if (Microbiology_incorrect.length == 0){
      document.getElementById("Microbiology").disabled = true;
      document.getElementById("color_Microbiology").style.color='grey'
  } else {
      document.getElementById("Microbiology").disabled = false;
      document.getElementById("color_Microbiology").style.color = 'black';
  }
  
  if (Pathology_incorrect.length == 0){
      document.getElementById("Pathology").disabled = true;
      document.getElementById("color_Pathology").style.color = 'grey'
  } else {
      document.getElementById("Pathology").disabled= false;
      document.getElementById("color_Pathology").style.color = 'black';
  }
  console.log("hon",Pathophysiology_incorrect.length);
  if (Pathophysiology_incorrect.length == 0){
      document.getElementById("Pathophysiology").disabled = true;
      document.getElementById("color_Pathophysiology").style.color = 'grey'
  } else {
      document.getElementById("Pathophysiology").disabled  = false;
      document.getElementById("color_Pathophysiology").style.color = 'black';
  }
  
  if (Pharmacology_incorrect.length == 0){
      document.getElementById("Pharmacology").disabled = true;
      document.getElementById("color_Pharmacology").style.color='grey'
  } else {
      document.getElementById("Pharmacology").disabled = false;
      document.getElementById("color_Pharmacology").style.color= 'black';
  }
  
  if (Physiology_incorrect.length == 0){
      document.getElementById("Physiology").disabled = true;
      document.getElementById("color_Physiology").style.color ='grey'
  } else {
      document.getElementById("Physiology").disabled = false;
      document.getElementById("color_Physiology").style.color = 'black';
  }
  









  if ((respiratory_incorrect.length+cardiovascular_incorrect.length+renal_incorrect.length+allergy_incorrect.length+dermatology_incorrect.length+gastrointestinal_incorrect.length+hematology_incorrect.length+neuro_incorrect.length+rheumatology_incorrect.length+infectious_incorrect.length+endocrine_incorrect.length+reproductive_F_incorrect.length+reproductive_M_incorrect.length+pregnancy_incorrect.length) == 0){
      document.getElementById("AllSystems").disabled = true;
      document.getElementById("color_AllSystems").style.color='grey';
  }
  
  if (respiratory_incorrect.length == 0){
      document.getElementById("Respiratory").disabled = true;
      document.getElementById("color_Respiratory").style.color='grey'
  }
  
  if (renal_incorrect.length == 0){
      document.getElementById("Renal").disabled = true;
      document.getElementById("color_Renal").style.color='grey'
  }
  
  if (cardiovascular_incorrect.length == 0){
      document.getElementById("Cardiovascular").disabled = true;
      document.getElementById("color_Cardiovascular").style.color='grey'
  }
  
  if (allergy_incorrect.length == 0){
      document.getElementById("Allergy").disabled = true;
      document.getElementById("color_Allergy").style.color='grey'
  }
  
  if (dermatology_incorrect.length == 0){
      document.getElementById("Dermatology").disabled = true;
      document.getElementById("color_Dermatology").style.color='grey'
  }
  
  if (gastrointestinal_incorrect.length == 0){
      document.getElementById("Gastrointestinal").disabled = true;
      document.getElementById("color_Gastrointestinal").style.color='grey'
  }
  
  if (hematology_incorrect.length == 0){
      document.getElementById("Hematology").disabled = true;
      document.getElementById("color_Hematology").style.color='grey'
  }
  
  if (neuro_incorrect.length == 0){
      document.getElementById("Neurology").disabled = true;
      document.getElementById("color_Neurology").style.color='grey'
  }
  
  if (rheumatology_incorrect.length == 0){
      document.getElementById("Rheumatology").disabled = true;
      document.getElementById("color_Rheumatology").style.color='grey'
  }
  
  if (infectious_incorrect.length == 0){
      document.getElementById("Infectious").disabled = true;
      document.getElementById("color_Infectious").style.color='grey'
  }
  
  if (endocrine_incorrect.length == 0){
      document.getElementById("Endocrine").disabled = true;
      document.getElementById("color_Endocrine").style.color='grey'
  }
  
  if (reproductive_F_incorrect.length == 0){
      document.getElementById("Reproductive_F").disabled = true;
      document.getElementById("color_Reproductive_F").style.color='grey'
  }
  
  if (reproductive_M_incorrect.length == 0){
      document.getElementById("Reproductive_M").disabled = true;
      document.getElementById("color_Reproductive_M").style.color='grey'
  }
  
  if (pregnancy_incorrect.length == 0){
      document.getElementById("Pregnancy").disabled = true;
      document.getElementById("color_Pregnancy").style.color='grey'
  }
  
















 
  
  
    document.getElementById("AllSystems").disabled = true;
    document.getElementById("Respiratory").disabled=true;
    document.getElementById("Cardiovascular").disabled=true;
    document.getElementById("Renal").disabled=true;
    document.getElementById("Allergy").disabled=true;
    document.getElementById("Dermatology").disabled=true;
    document.getElementById("Gastrointestinal").disabled=true;
    document.getElementById("Hematology").disabled=true;
    document.getElementById("Neurology").disabled=true;
    document.getElementById("Rheumatology").disabled=true;
    document.getElementById("Infectious").disabled=true;
    document.getElementById("Endocrine").disabled=true;
    document.getElementById("Reproductive_F").disabled=true;
    document.getElementById("Reproductive_M").disabled=true;
    document.getElementById("Pregnancy").disabled=true;
  
  
    makeZeros();
}







function update_texts_incorrect(){
document.getElementById("incorrect_text_remain_text").innerHTML = Number(all_incorrect.length);
document.getElementById("unused_text_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
document.getElementById("all_mode_text_remain_text").innerHTML = Number(medicine_questions.length)+Number(surgery_questions.length)+Number(Biochemistry_questions.length)+Number(biostat_questions.length)+Number(embryology_questions.length)+Number(Genetics_questions.length)+Number(Histology_questions.length)+Number(Immunology_questions.length)+Number(Microbiology_questions.length)+Number(Pathology_questions.length)+Number(Pathophysiology_questions.length)+Number(Pharmacology_questions.length)+Number(Physiology_questions.length);
document.getElementById("marked_text_remain_text").innerHTML = Number(all_marked.length);

document.getElementById("AllSubjects_remain_text").innerHTML = all_incorrect.length;
  
  document.getElementById("medicine_remain_text").innerHTML = medicine_incorrect_count; 
  document.getElementById("surgery_remain_text").innerHTML = surgery_incorrect_count; 
  document.getElementById("biochemistry_remain_text").innerHTML = Biochemistry_incorrect_count; 
  document.getElementById("biostat_remain_text").innerHTML = biostat_incorrect_count; 
  document.getElementById("embryology_remain_text").innerHTML = embryology_incorrect_count; 
  document.getElementById("genetics_remain_text").innerHTML = Genetics_incorrect_count; 
  document.getElementById("histology_remain_text").innerHTML = Histology_incorrect_count; 
  document.getElementById("immunology_remain_text").innerHTML = Immunology_incorrect_count; 
  document.getElementById("microbiology_remain_text").innerHTML = Microbiology_incorrect_count; 
  document.getElementById("pathology_remain_text").innerHTML = Pathology_incorrect_count; 
  document.getElementById("pathophysiology_remain_text").innerHTML = Pathophysiology_incorrect_count; 
  document.getElementById("pharmacology_remain_text").innerHTML = Pharmacology_incorrect_count; 
  document.getElementById("physiology_remain_text").innerHTML = Physiology_incorrect_count; 




  document.getElementById("respiratory_remain_text").innerHTML = mix_respiratory.length; 
  document.getElementById("cardiovascular_remain_text").innerHTML = mix_cardiovascular.length; 
  document.getElementById("renal_remain_text").innerHTML = mix_renal.length; 
  document.getElementById("allergy_remain_text").innerHTML = mix_Allergy.length; 
  document.getElementById("dermatology_remain_text").innerHTML = mix_dermatology.length; 
  document.getElementById("gastrointestinal_remain_text").innerHTML = mix_gastrointestinal.length; 
  document.getElementById("hematology_remain_text").innerHTML = mix_hematology.length; 
  document.getElementById("neurology_remain_text").innerHTML = mix_neuro.length; 
  document.getElementById("rheumatology_remain_text").innerHTML = mix_Rheumatology.length; 
  document.getElementById("infectious_remain_text").innerHTML = mix_infectious.length; 
  document.getElementById("endocrine_remain_text").innerHTML = mix_endocrine.length; 
  document.getElementById("Reproductive_f_remain_text").innerHTML = mix_reproductive_F.length; 
  document.getElementById("Reproductive_M_remain_text").innerHTML = mix_reproductive_M.length; 
  document.getElementById("pregnancy_remain_text").innerHTML = mix_pregnancy.length; 




  mix_all_remove_duplicates=mix_cardiovascular.concat(mix_renal,mix_respiratory,mix_Allergy,mix_dermatology,mix_gastrointestinal,mix_hematology,mix_Rheumatology,mix_infectious,mix_endocrine,mix_reproductive_F,mix_reproductive_M,mix_pregnancy);


  mix_all_remove_duplicates =uniqueByKeepLast(mix_all_remove_duplicates, it=> it.title);
  document.getElementById("AllSystems_remain_text").innerHTML = mix_all_remove_duplicates.length; 
  
  if ((mix_all_remove_duplicates.length) != 0){document.getElementById("AllSystems").disabled = false;
  document.getElementById("color_AllSystems").style.color='black'
}
  
  if (mix_respiratory.length != 0){document.getElementById("Respiratory").disabled = false;
  document.getElementById("color_Respiratory").style.color='black'
}
  
  if (mix_renal.length != 0){document.getElementById("Renal").disabled = false;
  document.getElementById("color_Renal").style.color='black'
}
  
  if (mix_cardiovascular.length != 0){document.getElementById("Cardiovascular").disabled = false;
  document.getElementById("color_Cardiovascular").style.color='black'
}

if (mix_Allergy.length != 0){document.getElementById("Allergy").disabled = false;
document.getElementById("color_Allergy").style.color='black'
}

if (mix_dermatology.length != 0){document.getElementById("Dermatology").disabled = false;
document.getElementById("color_Dermatology").style.color='black'
}

if (mix_gastrointestinal.length != 0){document.getElementById("Gastrointestinal").disabled = false;
document.getElementById("color_Gastrointestinal").style.color='black'
}


if (mix_hematology.length != 0){document.getElementById("Hematology").disabled = false;
document.getElementById("color_Hematology").style.color='black'
}


if (mix_neuro.length != 0){document.getElementById("Neurology").disabled = false;
document.getElementById("color_Neurology").style.color='black'
}

if (mix_Rheumatology.length != 0){document.getElementById("Rheumatology").disabled = false;
document.getElementById("color_Rheumatology").style.color='black'
}


if (mix_infectious.length != 0){document.getElementById("Infectious").disabled = false;
document.getElementById("color_Infectious").style.color='black'
}


if (mix_endocrine.length != 0){document.getElementById("Endocrine").disabled = false;
document.getElementById("color_Endocrine").style.color='black'
}


if (mix_reproductive_F.length != 0){document.getElementById("Reproductive_F").disabled = false;
document.getElementById("color_Reproductive_F").style.color='black'
}


if (mix_reproductive_M.length != 0){document.getElementById("Reproductive_M").disabled = false;
document.getElementById("color_Reproductive_M").style.color='black'
}

if (mix_pregnancy.length != 0){document.getElementById("Pregnancy").disabled = false;
document.getElementById("color_Pregnancy").style.color='black'
}



  if((!document.getElementById("Surgery").checked)&&(!document.getElementById("Medicine").checked)&&(!document.getElementById("Biochemistry").checked)&&(!document.getElementById("Biostatsitics").checked)&&(!document.getElementById("Embryology").checked)&&(!document.getElementById("Genetics").checked)&&(!document.getElementById("Histology").checked)&&(!document.getElementById("Immunology").checked)&&(!document.getElementById("Microbiology").checked)&&(!document.getElementById("Pathology").checked)&&(!document.getElementById("Pathophysiology").checked)&&(!document.getElementById("Pharmacology").checked)&&(!document.getElementById("Physiology").checked)){


      document.getElementById("AllSystems").disabled = true;
      document.getElementById("Respiratory").disabled = true;
      document.getElementById("Cardiovascular").disabled = true;
      document.getElementById("Renal").disabled = true;
      document.getElementById("Allergy").disabled = true;
      document.getElementById("Dermatology").disabled = true;
      document.getElementById("Gastrointestinal").disabled = true;
      document.getElementById("Hematology").disabled = true;
      document.getElementById("Neurology").disabled = true;
      document.getElementById("Rheumatology").disabled = true;
      document.getElementById("Infectious").disabled = true;
      document.getElementById("Endocrine").disabled = true;
      document.getElementById("Reproductive_F").disabled = true;
      document.getElementById("Reproductive_M").disabled = true;
      document.getElementById("Pregnancy").disabled = true;


      document.getElementById("color_AllSystems").style.color='grey'
      document.getElementById("color_Respiratory").style.color='grey'
      document.getElementById("color_Cardiovascular").style.color='grey'
      document.getElementById("color_Renal").style.color='grey'
      document.getElementById("color_Allergy").style.color='grey'
      document.getElementById("color_Dermatology").style.color='grey'
      document.getElementById("color_Gastrointestinal").style.color='grey'
      document.getElementById("color_Hematology").style.color='grey'
      document.getElementById("color_Neurology").style.color='grey'
      document.getElementById("color_Rheumatology").style.color='grey'
      document.getElementById("color_Infectious").style.color='grey'
      document.getElementById("color_Endocrine").style.color='grey'
      document.getElementById("color_Reproductive_F").style.color='grey'
      document.getElementById("color_Reproductive_M").style.color='grey'
      document.getElementById("color_Pregnancy").style.color='grey'
  }

}




function getQuestions_marked(){

  n=document.getElementById('NumberOfQurstions').value
  if ( n>=1 && n<=40 )  {
       FINAL_ARRAY = [];
    
    for (let i = 0; i < subject_array.length; i++) {
      for (let j = 0; j < systems_array.length; j++) {
         if (subject_array[i].title == systems_array[j].title) {
         FINAL_ARRAY.push(subject_array[i]); }   } }

   // removing duplicates from final array
   FINAL_ARRAY =uniqueByKeepLast(FINAL_ARRAY, it=> it.title);

   // choosing n numbers of questions
   if ( n > FINAL_ARRAY.length)alert("enter a maximum number of "+ FINAL_ARRAY.length);
else {

   // randomzing final array
   let array2 = [];
   while(FINAL_ARRAY.length !== 0) {
   let randomIndex= Math.floor(Math.random() * FINAL_ARRAY.length);
   array2.push(FINAL_ARRAY [randomIndex]);
   FINAL_ARRAY.splice(randomIndex, 1);
   }
   FINAL_ARRAY = array2;
   
   currentIndex = 0;
   rightAnswers = 0;
   score=0;

   let list=document.getElementById("myList");
   while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }

  finishExamButton.style.display='block';
  nextAnsButton.style.display='none';

  if (currentIndex>=(n-1)){nextButton.style.display='none'}else{
    nextButton.style.display='block' }

   FINAL_ARRAY=FINAL_ARRAY.slice(0,n);
   Final_Count= FINAL_ARRAY.length;
       //===========================================================================
/*
  for (let i = 1; i <= n; i++) {
        let Button = document.createElement("button");
        let Status = document.createElement("label");
        Status.className='status';
        Status.id=`status_${i}`;
        Button.className=`new_buttons`;
        Button.id = `${i}`;
        Button.textContent = `${i}`
       // Status.textContent="0"

        Button.click(buttonEvent(i));
        list.appendChild(Button);
        list.appendChild(Status);}
    */
        for(let i=1;i<=n;i++){
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
          bullets.style.display='block';
          
          review_questions.onclick=() =>{
            let new_index=currentIndex;
            new_index++;
          let answers=document.getElementsByName("question");
        
          for (let i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
           // theChoosenAnswer = answers[i].dataset.answer;
            chosen_Answers[new_index]=i;
           // chosen_Answers_string[new_index]=theChoosenAnswer;
            }  }
        //
          currentIndex=i-1; // i added let
          //  nextButton.style.display='none';
          quizArea.innerHTML = "";
          answersArea.innerHTML = "";
          explanationArea.innerHTML="";
          addQuestionData_3(FINAL_ARRAY[currentIndex],Final_Count );
          //let answers=document.getElementsByName("question");
          // hon bs btghayerha la one question msh array
          for (let m =0 ;m< answers.length;m++){
                if (chosen_Answers[currentIndex+1]==m){
                answers[m].checked=true 
                }   }

        
        for (let m =0 ;m< answers.length;m++){ answers[m].disabled='true' }
        atButtonClicked[i - 1] = true; // Mark this "i@" button as clicked
        //i want it to disappear when "submit" is clicked.
        review_questions.style.display = 'none';
        //
         } 
        //if (i==1) review_questions.click();
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
            // Status.textContent="0"
            firstBtn.click(buttonEvent(i));
            list.appendChild(firstBtn);
            list.appendChild(Status);  
            //container.appendChild(firstBtn);
            firstButtons.push(firstBtn);
            // erja3ehma momken 7asbak l score aw check asnwer marteeen/
            firstButtons[0].click();
            }
             
   //
      //-=========================================================================
  let common_array_solved=[];
  let unused_updated=[];
  unused_updated=medicine_updated.concat(surgery_updated,Biochemistry_updated,biostat_updated,embryology_updated,Genetics_updated,Histology_updated,Immunology_updated,Microbiology_updated,Pathology_updated,Pathophysiology_updated,Pharmacology_updated,Physiology_updated); // common between final array of All-questions mode & Unused questions.

  for (let i = 0; i < unused_updated.length; i++) {
  for (let j = 0; j < FINAL_ARRAY.length; j++) {
  if (unused_updated[i].title == FINAL_ARRAY[j].title) {
    common_array_solved.push(unused_updated[i]);
   }}}

   common_array_solved = uniqueByKeepLast(common_array_solved, it=> it.title);
   toBeSolved=common_array_solved.length;
   localStorage.setItem("toBeSolved", toBeSolved);
   localStorage.setItem("FINAL_ARRAY",JSON.stringify(FINAL_ARRAY));
   localStorage.setItem("Final_Count",Final_Count);




Uncheck_marked();


      //(JSON.stringify  // hai ana m7etha w zebet 
      // Create Bullets + Set Questions Count

      quizArea.innerHTML = "";
      answersArea.innerHTML = "";
      explanationArea.innerHTML="";

      // Add Question Data
      addQuestionData(FINAL_ARRAY[currentIndex], Final_Count);

      // Start CountDown
     // countdown(20, Final_Count);

      for ( let i=0;i<n;i++){
      chosen_Answers_string[i]="";
      }
      for ( i=0;i<n;i++){
        chosen_Answers[i]="100";
        }

      // Click On Submit
      nextButton.onclick = () => {
        firstButtons[currentIndex+1].click();
      }

      quizApp.style.display='block';
      quizArea.style.display='block';
      answersArea.style.display='block';
      //nextButton.style.display='block';
      bullets.style.display='block';
      startButton.style.display = 'none';
      chooseQuestionsClass.style.display= 'none';
      questionButtonsContainer.style.display = 'block';


    } }else alert ("enter a number between 1 & 40")
   




}








function Uncheck_marked(){

  document.getElementById("incorrect_text_remain_text").innerHTML = Number(all_incorrect.length);
  document.getElementById("unused_text_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
  document.getElementById("all_mode_text_remain_text").innerHTML = Number(medicine_questions.length)+Number(surgery_questions.length)+Number(Biochemistry_questions.length)+Number(biostat_questions.length)+Number(embryology_questions.length)+Number(Genetics_questions.length)+Number(Histology_questions.length)+Number(Immunology_questions.length)+Number(Microbiology_questions.length)+Number(Pathology_questions.length)+Number(Pathophysiology_questions.length)+Number(Pharmacology_questions.length)+Number(Physiology_questions.length);
  document.getElementById("marked_text_remain_text").innerHTML = Number(all_marked.length);

  document.getElementById("AllSubjects_remain_text").innerHTML =all_marked.length;
    


  
document.getElementById("medicine_remain_text").innerHTML = medicine_marked_count; 
document.getElementById("surgery_remain_text").innerHTML = surgery_marked_count; 
document.getElementById("biochemistry_remain_text").innerHTML = Biochemistry_marked_count; 
document.getElementById("biostat_remain_text").innerHTML = biostat_marked_count; 
document.getElementById("embryology_remain_text").innerHTML = embryology_marked_count; 
document.getElementById("genetics_remain_text").innerHTML = Genetics_marked_count; 
document.getElementById("histology_remain_text").innerHTML = Histology_marked_count; 
document.getElementById("immunology_remain_text").innerHTML = Immunology_marked_count; 
document.getElementById("microbiology_remain_text").innerHTML = Microbiology_marked_count; 
document.getElementById("pathology_remain_text").innerHTML = Pathology_marked_count; 
document.getElementById("pathophysiology_remain_text").innerHTML = Pathophysiology_marked_count; 
document.getElementById("pharmacology_remain_text").innerHTML = Pharmacology_marked_count; 
document.getElementById("physiology_remain_text").innerHTML = Physiology_marked_count;
  
  
  
    document.getElementById("AllSystems_remain_text").innerHTML = 0; 
    document.getElementById("respiratory_remain_text").innerHTML = 0; 
    document.getElementById("cardiovascular_remain_text").innerHTML = 0; 
    document.getElementById("renal_remain_text").innerHTML = 0; 
    document.getElementById("allergy_remain_text").innerHTML = 0; 
    document.getElementById("dermatology_remain_text").innerHTML = 0; 
    document.getElementById("gastrointestinal_remain_text").innerHTML = 0; 
    document.getElementById("hematology_remain_text").innerHTML = 0; 
    document.getElementById("neurology_remain_text").innerHTML = 0; 
    document.getElementById("rheumatology_remain_text").innerHTML = 0; 
    document.getElementById("infectious_remain_text").innerHTML = 0; 
    document.getElementById("endocrine_remain_text").innerHTML = 0; 
    document.getElementById("Reproductive_f_remain_text").innerHTML = 0; 
    document.getElementById("Reproductive_M_remain_text").innerHTML = 0; 
    document.getElementById("pregnancy_remain_text").innerHTML = 0; 
  
  
  
    document.getElementById("AllSubjects").checked=false;
    document.getElementById("Medicine").checked=false;
    document.getElementById("Surgery").checked=false;
    document.getElementById("Biochemistry").checked=false;
    document.getElementById("Biostatsitics").checked=false;
    document.getElementById("Embryology").checked=false;
    document.getElementById("Genetics").checked=false;
    document.getElementById("Histology").checked=false;
    document.getElementById("Immunology").checked=false;
    document.getElementById("Microbiology").checked=false;
    document.getElementById("Pathology").checked=false;
    document.getElementById("Pathophysiology").checked=false;
    document.getElementById("Pharmacology").checked=false;
    document.getElementById("Physiology").checked=false;
  
  
  
    document.getElementById("AllSystems").checked=false;
    document.getElementById("Respiratory").checked=false;
    document.getElementById("Cardiovascular").checked=false;
    document.getElementById("Renal").checked=false;
    document.getElementById("Allergy").checked=false;
    document.getElementById("Dermatology").checked=false;
    document.getElementById("Gastrointestinal").checked=false;
    document.getElementById("Hematology").checked=false;
    document.getElementById("Neurology").checked=false;
    document.getElementById("Rheumatology").checked=false;
    document.getElementById("Infectious").checked=false;
    document.getElementById("Endocrine").checked=false;
    document.getElementById("Reproductive_F").checked=false;
    document.getElementById("Reproductive_M").checked=false;
    document.getElementById("Pregnancy").checked=false;
  
  








    if ((medicine_marked.length)+(surgery_marked.length)+(Biochemistry_marked.length)+(biostat_marked.length)+(embryology_marked.length)+(Genetics_marked.length)+(Histology_marked.length)+(Immunology_marked.length)+(Microbiology_marked.length)+(Pathology_marked.length)+(Pathophysiology_marked.length)+(Pharmacology_marked.length)+(Physiology_marked.length)== 0){
      document.getElementById("AllSubjects").disabled = true;
      document.getElementById("color_AllSubjects").style.color='grey'
  } else {
      document.getElementById("AllSubjects").disabled = false;
      document.getElementById("color_AllSubjects").style.color='black'
  }
  
  if (medicine_marked.length == 0){
      document.getElementById("Medicine").disabled = true;
      document.getElementById("color_Medicine").style.color='grey';
  } else {
      document.getElementById("Medicine").disabled= false;
      document.getElementById("color_Medicine").style.color='black';
  }
  
  if (surgery_marked.length == 0){
      document.getElementById("Surgery").disabled = true;
      document.getElementById("color_Surgery").style.color='grey'
  } else {
      document.getElementById("Surgery").disabled= false;
      document.getElementById("color_Surgery").style.color='black';
  }
  
  if (Biochemistry_marked.length == 0){
      document.getElementById("Biochemistry").disabled = true;
      document.getElementById("color_Biochemistry").style.color='grey'
  } else {
      document.getElementById("Biochemistry").disabled= false;
      document.getElementById("color_Biochemistry").style.color='black';
  }
  
  if (biostat_marked.length == 0){
      document.getElementById("Biostatsitics").disabled = true;
      document.getElementById("color_Biostatsitics").style.color='grey'
  } else {
      document.getElementById("Biostatsitics").disabled= false;
      document.getElementById("color_Biostatsitics").style.color='black';
  }
  
  if (embryology_marked.length == 0){
      document.getElementById("Embryology").disabled = true;
      document.getElementById("color_Embryology").style.color='grey'
  } else {
      document.getElementById("Embryology").disabled= false;
      document.getElementById("color_Embryology").style.color='black';
  }
  
  if (Genetics_marked.length == 0){
      document.getElementById("Genetics").disabled = true;
      document.getElementById("color_Genetics").style.color='grey'
  } else {
      document.getElementById("Genetics").disabled= false;
      document.getElementById("color_Genetics").style.color='black';
  }
  
  if (Histology_marked.length == 0){
      document.getElementById("Histology").disabled = true;
      document.getElementById("color_Histology").style.color='grey'
  } else {
      document.getElementById("Histology").disabled= false;
      document.getElementById("color_Histology").style.color='black';
  }
  
  if (Immunology_marked.length == 0){
      document.getElementById("Immunology").disabled = true;
      document.getElementById("color_Immunology").style.color='grey'
  } else {
      document.getElementById("Immunology").disabled = false;
      document.getElementById("color_Immunology").style.color = 'black';
  }
  
  if (Microbiology_marked.length == 0){
      document.getElementById("Microbiology").disabled = true;
      document.getElementById("color_Microbiology").style.color='grey'
  } else {
      document.getElementById("Microbiology").disabled = false;
      document.getElementById("color_Microbiology").style.color = 'black';
  }
  
  if (Pathology_marked.length == 0){
      document.getElementById("Pathology").disabled = true;
      document.getElementById("color_Pathology").style.color = 'grey'
  } else {
      document.getElementById("Pathology").disabled= false;
      document.getElementById("color_Pathology").style.color = 'black';
  }
  
  if (Pathophysiology_marked.length == 0){
      document.getElementById("Pathophysiology").disabled = true;
      document.getElementById("color_Pathophysiology").style.color = 'grey'
  } else {
      document.getElementById("Pathophysiology").disabled  = false;
      document.getElementById("color_Pathophysiology").style.color = 'black';
  }
  
  if (Pharmacology_marked.length == 0){
      document.getElementById("Pharmacology").disabled = true;
      document.getElementById("color_Pharmacology").style.color='grey'
  } else {
      document.getElementById("Pharmacology").disabled = false;
      document.getElementById("color_Pharmacology").style.color= 'black';
  }
  
  if (Physiology_marked.length == 0){
      document.getElementById("Physiology").disabled = true;
      document.getElementById("color_Physiology").style.color ='grey'
  } else {
      document.getElementById("Physiology").disabled = false;
      document.getElementById("color_Physiology").style.color = 'black';
  }
  










  if ((respiratory_marked.length+cardiovascular_marked.length+renal_marked.length+allergy_marked.length+dermatology_marked.length+gastrointestinal_marked.length+hematology_marked.length+neuro_marked.length+rheumatology_marked.length+infectious_marked.length+endocrine_marked.length+reproductive_F_marked.length+reproductive_M_marked.length+pregnancy_marked.length) == 0){
      document.getElementById("AllSystems").disabled = true;
      document.getElementById("color_AllSystems").style.color='grey';
  }
  
  if (respiratory_marked.length == 0){
      document.getElementById("Respiratory").disabled = true;
      document.getElementById("color_Respiratory").style.color='grey'
  }
  
  if (renal_marked.length == 0){
      document.getElementById("Renal").disabled = true;
      document.getElementById("color_Renal").style.color='grey'
  }
  
  if (cardiovascular_marked.length == 0){
      document.getElementById("Cardiovascular").disabled = true;
      document.getElementById("color_Cardiovascular").style.color='grey'
  }
  
  if (allergy_marked.length == 0){
      document.getElementById("Allergy").disabled = true;
      document.getElementById("color_Allergy").style.color='grey'
  }
  
  if (dermatology_marked.length == 0){
      document.getElementById("Dermatology").disabled = true;
      document.getElementById("color_Dermatology").style.color='grey'
  }
  
  if (gastrointestinal_marked.length == 0){
      document.getElementById("Gastrointestinal").disabled = true;
      document.getElementById("color_Gastrointestinal").style.color='grey'
  }
  
  if (hematology_marked.length == 0){
      document.getElementById("Hematology").disabled = true;
      document.getElementById("color_Hematology").style.color='grey'
  }
  
  if (neuro_marked.length == 0){
      document.getElementById("Neurology").disabled = true;
      document.getElementById("color_Neurology").style.color='grey'
  }
  
  if (rheumatology_marked.length == 0){
      document.getElementById("Rheumatology").disabled = true;
      document.getElementById("color_Rheumatology").style.color='grey'
  }
  
  if (infectious_marked.length == 0){
      document.getElementById("Infectious").disabled = true;
      document.getElementById("color_Infectious").style.color='grey'
  }
  
  if (endocrine_marked.length == 0){
      document.getElementById("Endocrine").disabled = true;
      document.getElementById("color_Endocrine").style.color='grey'
  }
  
  if (reproductive_F_marked.length == 0){
      document.getElementById("Reproductive_F").disabled = true;
      document.getElementById("color_Reproductive_F").style.color='grey'
  }
  
  if (reproductive_M_marked.length == 0){
      document.getElementById("Reproductive_M").disabled = true;
      document.getElementById("color_Reproductive_M").style.color='grey'
  }
  
  if (pregnancy_marked.length == 0){
      document.getElementById("Pregnancy").disabled = true;
      document.getElementById("color_Pregnancy").style.color='grey'
  }
  












  
  
  
    document.getElementById("AllSystems").disabled = true;
    document.getElementById("Respiratory").disabled=true;
    document.getElementById("Cardiovascular").disabled=true;
    document.getElementById("Renal").disabled=true;
    document.getElementById("Allergy").disabled=true;
    document.getElementById("Dermatology").disabled=true;
    document.getElementById("Gastrointestinal").disabled=true;
    document.getElementById("Hematology").disabled=true;
    document.getElementById("Neurology").disabled=true;
    document.getElementById("Rheumatology").disabled=true;
    document.getElementById("Infectious").disabled=true;
    document.getElementById("Endocrine").disabled=true;
    document.getElementById("Reproductive_F").disabled=true;
    document.getElementById("Reproductive_M").disabled=true;
    document.getElementById("Pregnancy").disabled=true;
  
  
    makeZeros();
}








function update_texts_marked(){  
document.getElementById("incorrect_text_remain_text").innerHTML = Number(all_incorrect.length);
document.getElementById("unused_text_remain_text").innerHTML = Number(medicine_updated_count)+Number(surgery_updated_count)+Number(Biochemistry_updated_count)+Number(biostat_updated_count)+Number(embryology_updated_count)+Number(Genetics_updated_count)+Number(Histology_updated_count)+Number(Immunology_updated_count)+Number(Microbiology_updated_count)+Number(Pathology_updated_count)+Number(Pathophysiology_updated_count)+Number(Pharmacology_updated_count)+Number(Physiology_updated_count);
document.getElementById("all_mode_text_remain_text").innerHTML = Number(medicine_questions.length)+Number(surgery_questions.length)+Number(Biochemistry_questions.length)+Number(biostat_questions.length)+Number(embryology_questions.length)+Number(Genetics_questions.length)+Number(Histology_questions.length)+Number(Immunology_questions.length)+Number(Microbiology_questions.length)+Number(Pathology_questions.length)+Number(Pathophysiology_questions.length)+Number(Pharmacology_questions.length)+Number(Physiology_questions.length);
document.getElementById("marked_text_remain_text").innerHTML = Number(all_marked.length);


document.getElementById("AllSubjects_remain_text").innerHTML = all_marked.length;
  

document.getElementById("medicine_remain_text").innerHTML = medicine_marked_count; 
document.getElementById("surgery_remain_text").innerHTML = surgery_marked_count; 
document.getElementById("biochemistry_remain_text").innerHTML = Biochemistry_marked_count; 
document.getElementById("biostat_remain_text").innerHTML = biostat_marked_count; 
document.getElementById("embryology_remain_text").innerHTML = embryology_marked_count; 
document.getElementById("genetics_remain_text").innerHTML = Genetics_marked_count; 
document.getElementById("histology_remain_text").innerHTML = Histology_marked_count; 
document.getElementById("immunology_remain_text").innerHTML = Immunology_marked_count; 
document.getElementById("microbiology_remain_text").innerHTML = Microbiology_marked_count; 
document.getElementById("pathology_remain_text").innerHTML = Pathology_marked_count; 
document.getElementById("pathophysiology_remain_text").innerHTML = Pathophysiology_marked_count; 
document.getElementById("pharmacology_remain_text").innerHTML = Pharmacology_marked_count; 
document.getElementById("physiology_remain_text").innerHTML = Physiology_marked_count;




  document.getElementById("respiratory_remain_text").innerHTML = mix_respiratory.length; 
  document.getElementById("cardiovascular_remain_text").innerHTML = mix_cardiovascular.length; 
  document.getElementById("renal_remain_text").innerHTML = mix_renal.length; 
  document.getElementById("allergy_remain_text").innerHTML = mix_Allergy.length; 
  document.getElementById("dermatology_remain_text").innerHTML = mix_dermatology.length; 
  document.getElementById("gastrointestinal_remain_text").innerHTML = mix_gastrointestinal.length; 
  document.getElementById("hematology_remain_text").innerHTML = mix_hematology.length; 
  document.getElementById("neurology_remain_text").innerHTML = mix_neuro.length; 
  document.getElementById("rheumatology_remain_text").innerHTML = mix_Rheumatology.length; 
  document.getElementById("infectious_remain_text").innerHTML = mix_infectious.length; 
  document.getElementById("endocrine_remain_text").innerHTML = mix_endocrine.length; 
  document.getElementById("Reproductive_f_remain_text").innerHTML = mix_reproductive_F.length; 
  document.getElementById("Reproductive_M_remain_text").innerHTML = mix_reproductive_M.length; 
  document.getElementById("pregnancy_remain_text").innerHTML = mix_pregnancy.length; 




  mix_all_remove_duplicates=mix_cardiovascular.concat(mix_renal,mix_respiratory,mix_Allergy,mix_dermatology,mix_gastrointestinal,mix_hematology,mix_Rheumatology,mix_infectious,mix_endocrine,mix_reproductive_F,mix_reproductive_M,mix_pregnancy);


  mix_all_remove_duplicates =uniqueByKeepLast(mix_all_remove_duplicates, it=> it.title);
  document.getElementById("AllSystems_remain_text").innerHTML = mix_all_remove_duplicates.length; 
  
  if ((mix_all_remove_duplicates.length) != 0){document.getElementById("AllSystems").disabled = false;
  document.getElementById("color_AllSystems").style.color='black'
}
  
  if (mix_respiratory.length != 0){document.getElementById("Respiratory").disabled = false;
  document.getElementById("color_Respiratory").style.color='black'
}
  
  if (mix_renal.length != 0){document.getElementById("Renal").disabled = false;
  document.getElementById("color_Renal").style.color='black'
}
  
  if (mix_cardiovascular.length != 0){document.getElementById("Cardiovascular").disabled = false;
  document.getElementById("color_Cardiovascular").style.color='black'
}

if (mix_Allergy.length != 0){document.getElementById("Allergy").disabled = false;
document.getElementById("color_Allergy").style.color='black'
}

if (mix_dermatology.length != 0){document.getElementById("Dermatology").disabled = false;
document.getElementById("color_Dermatology").style.color='black'
}

if (mix_gastrointestinal.length != 0){document.getElementById("Gastrointestinal").disabled = false;
document.getElementById("color_Gastrointestinal").style.color='black'
}


if (mix_hematology.length != 0){document.getElementById("Hematology").disabled = false;
document.getElementById("color_Hematology").style.color='black'
}


if (mix_neuro.length != 0){document.getElementById("Neurology").disabled = false;
document.getElementById("color_Neurology").style.color='black'
}

if (mix_Rheumatology.length != 0){document.getElementById("Rheumatology").disabled = false;
document.getElementById("color_Rheumatology").style.color='black'
}


if (mix_infectious.length != 0){document.getElementById("Infectious").disabled = false;
document.getElementById("color_Infectious").style.color='black'
}


if (mix_endocrine.length != 0){document.getElementById("Endocrine").disabled = false;
document.getElementById("color_Endocrine").style.color='black'
}


if (mix_reproductive_F.length != 0){document.getElementById("Reproductive_F").disabled = false;
document.getElementById("color_Reproductive_F").style.color='black'
}


if (mix_reproductive_M.length != 0){document.getElementById("Reproductive_M").disabled = false;
document.getElementById("color_Reproductive_M").style.color='black'
}

if (mix_pregnancy.length != 0){document.getElementById("Pregnancy").disabled = false;
document.getElementById("color_Pregnancy").style.color='black'
}



if((!document.getElementById("Surgery").checked)&&(!document.getElementById("Medicine").checked)&&(!document.getElementById("Biochemistry").checked)&&(!document.getElementById("Biostatsitics").checked)&&(!document.getElementById("Embryology").checked)&&(!document.getElementById("Genetics").checked)&&(!document.getElementById("Histology").checked)&&(!document.getElementById("Immunology").checked)&&(!document.getElementById("Microbiology").checked)&&(!document.getElementById("Pathology").checked)&&(!document.getElementById("Pathophysiology").checked)&&(!document.getElementById("Pharmacology").checked)&&(!document.getElementById("Physiology").checked)){


      document.getElementById("AllSystems").disabled = true;
      document.getElementById("Respiratory").disabled = true;
      document.getElementById("Cardiovascular").disabled = true;
      document.getElementById("Renal").disabled = true;
      document.getElementById("Allergy").disabled = true;
      document.getElementById("Dermatology").disabled = true;
      document.getElementById("Gastrointestinal").disabled = true;
      document.getElementById("Hematology").disabled = true;
      document.getElementById("Neurology").disabled = true;
      document.getElementById("Rheumatology").disabled = true;
      document.getElementById("Infectious").disabled = true;
      document.getElementById("Endocrine").disabled = true;
      document.getElementById("Reproductive_F").disabled = true;
      document.getElementById("Reproductive_M").disabled = true;
      document.getElementById("Pregnancy").disabled = true;


      document.getElementById("color_AllSystems").style.color='grey'
      document.getElementById("color_Respiratory").style.color='grey'
      document.getElementById("color_Cardiovascular").style.color='grey'
      document.getElementById("color_Renal").style.color='grey'
      document.getElementById("color_Allergy").style.color='grey'
      document.getElementById("color_Dermatology").style.color='grey'
      document.getElementById("color_Gastrointestinal").style.color='grey'
      document.getElementById("color_Hematology").style.color='grey'
      document.getElementById("color_Neurology").style.color='grey'
      document.getElementById("color_Rheumatology").style.color='grey'
      document.getElementById("color_Infectious").style.color='grey'
      document.getElementById("color_Endocrine").style.color='grey'
      document.getElementById("color_Reproductive_F").style.color='grey'
      document.getElementById("color_Reproductive_M").style.color='grey'
      document.getElementById("color_Pregnancy").style.color='grey'
  }
}




function subtractArrays(arr1, arr2) {
  return arr1.filter(item => !arr2.includes(item));
}



