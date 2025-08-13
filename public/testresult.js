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




let average;

/////////////////////////////////////////////////////////////////////









let originalGroupAData = {};
let originalGroupBData = {};


let all_incorrect;
let all_marked;
//
//
let Final_Question;
let final_answer_1;
let time_spent_1;
//
//
let Exams={};
let Answers={};
let Dates={};
let scores={};
let status_string={};
let string_array=[];

let Z;


//
let timeperQuestion={};
//
//
let test_result_index;
//
//

let solved;
let toBeSolved;
let SUM;

let FINAL_ARRAY; 
let Final_Count;



const nestedGroups = {
  B1: 6, B2: 6, B3: 11, B4: 10, B5: 10, B6: 9, B7: 13, B8: 16, B9: 9,
  B10: 8, B11: 10, B12: 7, B13: 2, B14: 2, B15: 5, B16: 1, B17: 10,
  B18: 2, B19: 2, B20: 6, B21: 1, B22: 5, B23: 6, B24: 5, B25: 3, B26: 4
};

//
  
const groupACustomNames  = {
  groupA1: "Anatomy",
  groupA2: "Behavioral science",
  groupA3: "Biochemistry",
  groupA4: "Biostatistics",
  groupA5: "Embryology",
  groupA6: "Genetics",
  groupA7: "Histology",
  groupA8: "Immunology",
  groupA9: "Microbiology",
  groupA10: "Pathology",
  groupA11: "Pathophysiology",
  groupA12: "Pharmacology",
  groupA13: "Physiology"
};
  

const groupBCustomNames = {
  groupB1: "Allergy & Immunology",
  groupB2: "Dermatology",
  groupB3: "Cardiovascular System",
  groupB4: "Pulmonary & Critical Care",
  groupB5: "Gastrointestinal & Nutrition",
  groupB6: "Hematology & Oncology",
  groupB7: "Renal, Urinary Systems & Electrolytes",
  groupB8: "Nervous System",
  groupB9: "Rheumatology/Orthopedics & Sports",
  groupB10: "Infectious Diseases",
  groupB11: "Endocrine, Diabetes & Metabolism",
  groupB12: "Female Reproductive System & Breast",
  groupB13: "Male Reproductive System",
  groupB14: "Pregnancy, Childbirth & Puerperium",
  groupB15: "Biostatistics & Epidemiology",
  groupB16: "Ear, Nose & Throat (ENT)",
  groupB17: "Psychiatric/Behavioral & Substance Use Disorder",
  groupB18: "Poisoning & Environmental Exposure",
  groupB19: "Ophthalmology",
  groupB20: "Social Sciences (Ethics/Legal/Professional)",
  groupB21: "Miscellaneous (Multisystem)",
  groupB22: "Biochemistry (General Principles)",
  groupB23: "Genetics (General Principles)",
  groupB24: "Microbiology (General Principles)",
  groupB25: "Pathology (General Principles)",
  groupB26: "Pharmacology (General Principles)"
};



const subgroupCustomNames = {
    groupB1: ["Anaphylaxis and allergic reactions", "Miscellaneous", "Autoimmune diseases", "Transplant medicine", "Immune deficiencies", "Principles of immunology"], // 6
    groupB2: ["Skin and soft tissue infections", "Skin tumors and tumor-like lesions", "Normal structure and function of skin", "Inflammatory dermatoses and bullous diseases", "Disorders of epidermal appendages", "Miscellaneous"],                 // 6
    groupB3: ["Aortic and peripheral artery diseases", "Congenital heart disease", "Coronary heart disease", "Valvular heart diseases", "Myopericardial diseases", "Cardiac arrhythmias", "Cardiovascular drugs", "Miscellaneous", "Hypertension", "Heart failure and shock", "Normal structure and function of the cardiovascular system"], // 11
    groupB4: ["Pulmonary infections", "Obstructive lung disease", "Pulmonary vascular disease", "Miscellaneous", "Normal pulmonary structure and function", "Critical care medicine", "Lung cancer", "Interstitial lung disease", "Congenital and developmental anomalies", "Sleep disorders"],     // 10
    groupB5: ["Hepatic disorders", "Biliary tract disorders", "Miscellaneous", "Tumors of the GI tract", "Intestinal and colorectal disorders", "Congenital and developmental anomalies", "Normal structure and function of the GI tract", "Gastroesophageal disorders", "Pancreatic disorders", "Disorders of nutrition"],     // 10
    groupB6: ["White blood cell disorders", "Platelet disorders", "Red blood cell disorders", "Hemostasis and thrombosis", "Miscellaneous", "Normal hematologic structure and function", "Principles of oncology", "Transfusion medicine", "Plasma cell disorders"],         // 9
    groupB7: ["Glomerular diseases", "Congenital and developmental anomalies", "Cystic kidney diseases", "Neoplasms of the kidneys and urinary tract", "Diabetes insipidus", "Chronic kidney disease", "Bone metabolism", "Fluid, electrolytes, and acid-base", "Miscellaneous", "Normal structure and function of the kidneys and urinary system", "Acute kidney injury", "Nephrolithiasis and urinary tract obstruction", "Urinary incontinence"], // 13
    groupB8: ["Cerebrovascular disease", "Hydrocephalus", "Neurodegenerative disorders and dementias", "Spinal cord disorders", "Disorders of peripheral nerves and muscles", "CNS infections", "Seizures and epilepsy", "Congenital and developmental anomalies", "Traumatic brain injuries", "Sleep disorders", "Headache", "Normal structure and function of the nervous system", "Miscellaneous", "Tumors of the nervous system", "Anesthesia", "Demyelinating diseases"], // 16
    groupB9: ["Arthritis and spondyloarthropathies", "Autoimmune disorders and vasculitides", "Miscellaneous", "Bone/joint injuries and infections", "Spinal disorders and back pain", "Metabolic bone disorders", "Congenital and developmental anomalies", "Normal structure and function of the musculoskeletal system", "Bone tumors and tumor-like lesions"],         // 9
    groupB10: ["Viral infections", "HIV and sexually transmitted infections", "Parasitic and helminthic infections", "Fungal infections", "Bacterial infections", "Antimicrobial drugs", "Infection control", "Miscellaneous"],            // 8
    groupB11: ["Obesity and dyslipidemia", "Hypothalamus and pituitary disorders", "Reproductive endocrinology", "Endocrine tumors", "Congenital and developmental anomalies", "Adrenal disorders", "Diabetes mellitus", "Thyroid disorders", "Miscellaneous","Normal structure and function of endocrine glands"],        // 10
    groupB12: ["Genitourinary tract infections", "Genital tract tumors and tumor-like lesions", "Normal structure and function of the female reproductive system and breast", "Congenital and developmental anomalies", "Menstrual disorders and contraception", "Breast disorders", "Miscellaneous"],                // 7
    groupB13: ["Normal structure and function of the male reproductive system", "Disorders of the male reproductive system"],                                    // 2
    groupB14: ["Disorders of pregnancy, childbirth, and puerperium", "Normal pregnancy, childbirth, and puerperium"],                                    // 2
    groupB15: ["Probability and principles of testing", "Study design and interpretation", "Epidemiology and population health", "Measures and distribution of data", "Miscellaneous"],                        // 5
    groupB16: ["Disorders of the ear, nose, and throat"] ,                                       // 1
    groupB17: ["Psychotic disorders", "Anxiety and trauma-related disorders", "Substance use disorders", "Mood disorders", "Miscellaneous", "Normal behavior and development", "Eating disorders", "Personality disorders", "Neurodevelopmental disorders", "Somatoform disorders"],    // 10
    groupB18: ["Toxicology", "Environmental exposure"],                                    // 2
    groupB19: ["Normal structure and function of the eye and associated structures", "Disorders of the eye and associated structures"],                                    // 2
    groupB20: ["Healthcare policy and economics", "Patient safety", "Miscellaneous", "Communication and interpersonal skills", "Medical ethics and jurisprudence", "System based-practice and quality improvement"],                    // 6
    groupB21: ["Miscellaneous"] ,                                       // 1
    groupB22: ["Cell and molecular biology", "Amino acids, proteins, and enzymes", "Bioenergetics and carbohydrate metabolism", "Lipid metabolism", "Miscellaneous"],                        // 5
    groupB23: ["Clinical genetics", "DNA structure, replication, and repair", "RNA structure, synthesis, and processing", "Miscellaneous", "Gene expression and regulation", "Protein synthesis"],                    // 6
    groupB24: ["Virology", "Mycology", "Bacteriology", "Miscellaneous", "Parasitology"],                        // 5
    groupB25: ["Cellular pathology", "Neoplasia", "Inflammation and repair"],                                // 3
    groupB26: ["Drug metabolism and toxicity", "Pharmacokinetics", "Drug receptors and pharmacodynamics", "Miscellaneous"]                             // 4
  
};




async function loadIndex() {
  try {

    const test_result_indexDoc = await db.get("test_result_index");
    test_result_index = test_result_indexDoc.data;

    console.log("✅ Loaded test_result_index:", test_result_index);
  } catch (error) {
    console.error("❌ Failed to load from PouchDB:", error);
    // Optionally set a default:
    test_result_index = 0;
  }
}





async function ComboloadIndex() {
  if (!uid) {
    console.warn("❌ UID not found in localStorage.");
    test_result_index = 0;
    return;
  }

  try {
    const test_result_indexDoc = await db.get(`test_result_index_${uid}`);
    test_result_index = test_result_indexDoc.data;

    console.log("✅ Loaded test_result_index:", test_result_index);
  } catch (error) {
    console.error("❌ Failed to load test_result_index from PouchDB:", error);
    test_result_index = 0; // Optional fallback
  }
}





    (async () => {
await initFirebase();

await loadTestResultIndexOnly();
await ComboLoadValuesFromFirestore();

updateProgressBar(parseFloat((scores[`score_${test_result_index}_${uid}`]*100).toFixed(1)));



 createTable();
})();


async function createTable() {
  const headers = ["Number", "Status", "id", "Subject", "System", "Categories", "Correct others","Time to answer", "Visit question"];
  const table = document.createElement("table");

  // Create header row
  const headerRow = table.insertRow();
  for (let header of headers) {
    const th = document.createElement("th");
    th.innerText = header;
    headerRow.appendChild(th);
  }





//const examEntries = Exams[`Exam_${Z}`] || [];

const examEntries = Exams[`Exam_${test_result_index}_${uid}`] || [];

const Timeentries= timeperQuestion[`timeperQuestion_${test_result_index}_${uid}`] || [];



average=0;



for (let i = 0; i < examEntries.length; i++) {
  const row = table.insertRow();
  const idValue = examEntries[i]?.id || "";
  const status_entry = status_string[`status_string_${test_result_index}_${uid}`] || [];
const statusValue = status_entry[i] || "";  // fallback to empty if undefined



  for (let j = 0; j < headers.length; j++) {
    const cell = row.insertCell();

    if (j === 0) {
      cell.innerText = i + 1;
    } else if (j === 1) {
  if (statusValue === "true") {
    cell.innerText = "✔";
    cell.style.color = "green";
  } else if (statusValue === "false") {
    cell.innerText = "✘";
    cell.style.color = "red";
  } else {
    cell.innerText = "";
  }
    } else if (j === 2) {
      cell.innerText = idValue || "N/A";
    } else if (j === 3) {
      // Group A names replaced
      const matchesA = findGroupAById(idValue);
      const readableA = matchesA.map(g => groupACustomNames[g] || g);
      cell.innerText = readableA.join(", ");
    } else if (j === 4) {
      // Group B parent group names replaced
      const matchesB = findGroupBById(idValue);
      const parentGroups = matchesB
        .map(g => g.split("_")[0])
        .filter((v, i, arr) => arr.indexOf(v) === i);
      const readableB = parentGroups.map(p => groupBCustomNames[p] || p);
      cell.innerText = readableB.join(", ");
    } else if (j === 5) {
      // Group B subgroup names replaced
      const matchesB = findGroupBById(idValue);
      const subgroupLabels = [];

      for (const full of matchesB) {
        if (full.includes("_")) {
          const [parent, index] = full.split("_");
          const idx = parseInt(index) - 1;
          const name = subgroupCustomNames[parent]?.[idx];
          if (name) subgroupLabels.push(name);
        }
      }

      cell.innerText = subgroupLabels.join(", ");
    } else if (j === 6) {

const right = examEntries[i].right_answer?.trim() || "";
const match = right.match(/[A-V]/);  // Finds first capital A–F

const letter = match ? match[0] : null;
const index = letter ?  letter.charCodeAt(0) - 64: null;
const percentage = index ? examEntries[i][`percent_${index}`] : "";

//average += Number(percentage.replace('%', '')) || 0;
average += Number(
  (percentage !== undefined ? percentage.replace('%', '') : "50")
) || 0;

cell.innerText = percentage;

//     const right = examEntries[i].right_answer?.trim();
//     const letter = right?.[0];
///    const index = "ABCDEF".indexOf(letter) + 1;
//     const percentage = examEntries[i][`percent_${index}`] || "";
//    cell.innerText = percentage;
    }else if(j === 7){

let displayTime;

if (Timeentries[i+1] >= 60) {
    let minutes = Timeentries[i+1] / 60;
    displayTime = minutes.toFixed(1) + " minutes";
} else {
    let wholeSeconds = Math.floor(Timeentries[i+1]);

if (Number.isNaN(wholeSeconds)) {
    wholeSeconds = "";
displayTime = "-";
}else{
  displayTime = wholeSeconds + " seconds";

}


}
     cell.innerText = displayTime || "--";
    }else if (j === 8) {
  const img = document.createElement("img");
  img.id = `inspect_${i + 1}`;
  img.src = "icons/inspect.png";  // adjust path as needed
  img.alt = "Inspect";
  img.style.width = "30px";        // set size
  img.style.height = "30px";
  img.style.cursor = "pointer";    // make it clickable

  img.addEventListener("click", () => {


Final_Question=  [Exams[`Exam_${test_result_index}_${uid}`][i]];
final_answer_1= [Answers[`Answer_${test_result_index}_${uid}`][i+1]]
time_spent_1=[Timeentries[i+1]]




async function handleSaveAndRedirect() {
    try {
      //  await CombosaveFinal_Question();    // ✅ wait for save
        await savetoInspect();

    } catch (err) {
        console.error("❌ Error saving Final_Question:", err);
        alert("Failed to save. Please try again.");
    }
} 

  handleSaveAndRedirect(); // Step 2: Save & Redirect

  });
  
  
  cell.appendChild(img);
} else {
      cell.innerText = "";
    }
  }
}



//alert (average/examEntries.length);


  const scoreValue = document.getElementById('averageScore');
  scoreValue.textContent = " "+ average/examEntries.length + ' %';




  const container = document.getElementById("tableContainer");
  container.innerHTML = "";
  container.appendChild(table);
}



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


function findGroupBById(questionId) {
  const matches = [];

  for (const groupName in originalGroupBData) {
    const group = originalGroupBData[groupName];
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


function updateProgressBar(percentage) {
  const progressBarFill = document.getElementById('progressBarFill');
  const scoreValue = document.getElementById('scoreValue');

  progressBarFill.style.width = percentage + '%';
  scoreValue.textContent = percentage + '%';

}



    document.getElementById("fullscreen-btn").addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });




async function CombosaveFinal_Question() {
  if (!uid) {
    console.warn("❌ UID not found in localStorage.");
    return;
  }
  try {
    await saveOrUpdateDoc(`Final_Question_${uid}`, Final_Question);
    await saveOrUpdateDoc(`final_answer_1_${uid}`, final_answer_1);
    await saveOrUpdateDoc(`time_spent_1_${uid}`, time_spent_1);
    console.log("✅ Final_Question data saved for UID:", uid);
  } catch (error) {
    console.error("❌ Failed to save Final_Question data to PouchDB:", error);
  }
}



async function savetoInspect() {




if (!uid) {
    console.error("❌ UID not found. Cannot save user-specific data.");
    return;}
try {



    if (!Array.isArray(time_spent_1) || time_spent_1.length === 0) {
      time_spent_1 = [0];
    } else if (time_spent_1[0] === undefined) {
      time_spent_1[0] = 0;
    }


    if (!Array.isArray(final_answer_1) || final_answer_1.length === 0) {
      final_answer_1 = [100];
    } else if (final_answer_1[0] === undefined) {
      final_answer_1[0] = 100;
    }


    const allData = {
      Final_Question,
      final_answer_1,
      time_spent_1
    };

  console.log(Final_Question[0]);
  console.log(final_answer_1[0]);
  console.log(time_spent_1[0]);


    await setDoc(doc(firestore, "userData", uid), allData, { merge: true });
    console.log(`✅ test_result_index saved to Firestore for UID: ${uid}`);


    window.location.href = "inspect.html";  // ✅ only then redirect

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

     
      examIdsArray[`examIdsArray_${test_result_index}_${uid}`] = allData[`examIdsArray_${test_result_index}_${uid}`];
      Answers[`Answer_${test_result_index}_${uid}`] = allData[`Answer_${test_result_index}_${uid}`];
      Dates[`Date_${test_result_index}_${uid}`] = allData[`Date_${test_result_index}_${uid}`];
      scores[`score_${test_result_index}_${uid}`]  = allData[`score_${test_result_index}_${uid}`];
      status_string[`status_string_${test_result_index}_${uid}`]  = allData[`status_string_${test_result_index}_${uid}`];
      timeperQuestion[`timeperQuestion_${test_result_index}_${uid}`] = allData[`timeperQuestion_${test_result_index}_${uid}`];

       test_result_index = allData.test_result_index;
       SUM = allData.SUM;
       Final_Count = allData.Final_Count;
    // FinalArray_IDs=allData.FinalArray_IDs;
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

//this is the ignorable undefined value i get in console load  
Exams[`Exam_${test_result_index}_${uid}`] = Object
    .values(groupAndSortByCustomId(originalGroupAData, examIdsArray[`examIdsArray_${test_result_index}_${uid}`]))
    .flat();
}

async function loadTestResultIndexOnly() {
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
      test_result_index = data.test_result_index;
      console.log("✅ test_result_index loaded:", test_result_index);
    } else {
      console.error("❌ No document found for UID:", uid);
    }

    console.timeEnd("🕒 Load test_result_index Duration");
  } catch (error) {
    console.error("❌ Failed to load test_result_index from Firestore:", error);
  }
}
