// // medicine = Anatomy
// Surgery = Behavioral Science
//
//
// make sure there are no duplicates in incorrect and arked then remove the removeDuplicatesAndLog function

// hdol l variables e3malhom global w 7othom b save w b reset, 3shan ma ydal ye7sebzl l 7maaar
//const unused_text = removeDuplicatesAndLog(Object.values(unusedgroupAData).flat(), item => item.id);
//const incorrect_text = removeDuplicatesAndLog(Object.values(incorrectGroupAData).flat(), item => item.id);
//const original_text = removeDuplicatesAndLog(Object.values(originalGroupAData).flat(), item => item.id);
//const marked_text = removeDuplicatesAndLog(Object.values(markedGroupAData).flat(), item => item.id);
//
//
//kelmet json khalleha bs bl reset .

// connect.js

const uid = localStorage.getItem("uid");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  setDoc,
    deleteDoc  // ✅ Add this line

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
       FinalArray_IDs-allData.FinalArray_IDs;

      // Handle any missing or undefined fields
      if (unusedIdsArrayCloud === undefined || incorrectIdsArrayCloud === undefined) {
        console.error("❌ Missing required fields in loaded data.");
        return;
      }

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

for (let i = 1; i <= Z; i++) {
//Exams[`Exam_${i}_${uid}`]=Object.values(groupAndSortByCustomId(originalGroupAData, examIdsArray[`examIdsArray_${i}_${uid}`])).flat();
}

//FINAL_ARRAY = Object.values(groupAndSortByCustomId(originalGroupAData, FinalArray_IDs)).flat();

//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

unusedgroupAData = groupAndSortByCustomId(originalGroupAData, unusedIdsArrayCloud);
unusedgroupBData = groupAndSortByCustomId(originalGroupBData, unusedIdsArrayCloud);

incorrectGroupAData = groupAndSortByCustomId(originalGroupAData, incorrectIdsArrayCloud);
incorrectGroupBData = groupAndSortByCustomId(originalGroupBData, incorrectIdsArrayCloud);

markedGroupAData = groupAndSortByCustomId(originalGroupAData, markedIdsArrayCloud);
markedGroupBData = groupAndSortByCustomId(originalGroupBData, markedIdsArrayCloud);

//console.log("hioooooooooooooooooosh")
console.log("loadedmarkedIdsArrayCloud",markedIdsArrayCloud)
console.log("markedGroupBData",markedGroupBData)
}


let unusedgroupAData = {};
let unusedgroupBData = {};

let originalGroupAData = {};
let originalGroupBData = {};

let incorrectGroupAData = {};
let incorrectGroupBData = {};

let markedGroupAData = {};
let markedGroupBData = {};

let selectedOverlappingQuestions = [];

const nestedGroups = {
  B1: 6, B2: 6, B3: 11, B4: 10, B5: 10, B6: 9, B7: 13, B8: 16, B9: 9,
  B10: 8, B11: 10, B12: 7, B13: 2, B14: 2, B15: 5, B16: 1, B17: 10,
  B18: 2, B19: 2, B20: 6, B21: 1, B22: 5, B23: 6, B24: 5, B25: 3, B26: 4
};

  
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




function disableParentIfAllSubgroupsDisabled() {
  for (let i = 1; i <= 26; i++) {
    const groupId = `groupB${i}`;
    const parentCb = document.getElementById(groupId);
    const count = nestedGroups[`B${i}`];  // number of subgroups

    if (!parentCb || !count) continue;  // skip if no parent checkbox or no subgroups

    let allDisabled = true;

    for (let j = 1; j <= count; j++) {
      const subId = `${groupId}_${j}`;
      const subCb = document.getElementById(subId);
      if (subCb && !subCb.disabled) {
        allDisabled = false;
        break;  // found an enabled checkbox, no need to check more
      }
    }

    parentCb.disabled = allDisabled;
  }
}



// → updatedA now contains all groupA arrays with overlaps removed
function syncAllGroupBParents() {
  for (let i = 1; i <= 26; i++) {
    const groupId = `groupB${i}`;
    const parentCb = document.getElementById(groupId);
    const count = nestedGroups[`B${i}`];  // number of subgroups

    if (!parentCb || !count) continue;  // skip if no parent checkbox or no subgroups

    let anyChecked = false;

    for (let j = 1; j <= count; j++) {
      const subId = `${groupId}_${j}`;
      const subCb = document.getElementById(subId);
      if (subCb && subCb.checked) {
        anyChecked = true;
        break;  // no need to check further, we found one checked
      }
    }

    parentCb.checked = anyChecked;
  }
}

function syncGroupWithSubgroups(groupId) {
  const parent = document.getElementById(groupId);
  const isChecked = parent.checked;
  const subgroupContainer = document.getElementById(`${groupId}-subgroups`);
  if (subgroupContainer) {
    const inputs = subgroupContainer.querySelectorAll("input[type='checkbox']");
    inputs.forEach(cb => {
      if (!cb.disabled) cb.checked = isChecked;
    });
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



window.toggleSubgroups = function (groupId) {
  const subContainer = document.getElementById(`${groupId}-subgroups`);
  const arrow = document.getElementById(`${groupId}-arrow`);
  const visible = subContainer.style.display === "block";
  subContainer.style.display = visible ? "none" : "block";
  //arrow.textContent = visible ? "➕" : " ➖";



  arrow.innerHTML = visible 
  ? '<img src="icons/showmore.png" alt="Toggle" style="width:15px; height:15px;">'
  : '<img src="icons/showless.png" alt="Toggle" style="width:15px; height:15px;">';

}
// 

//unused
function _0x102b(_0x2d8695,_0x38e29d){const _0xcacb50=_0xcacb();return _0x102b=function(_0x102b59,_0x166a97){_0x102b59=_0x102b59-0x17d;let _0x5200b2=_0xcacb50[_0x102b59];return _0x5200b2;},_0x102b(_0x2d8695,_0x38e29d);}function _0xcacb(){const _0x58ced2=['all_mode_text_remain_text','count','values','black','7CeKzPg','closest','has','color','2141748wOfSsb','allGroupA','444485MaigVw','overlap','filter','gray','add','getElementById','innerHTML','label','unused_text_remain_text','flat','checked','groupA','push','1673984oEKSdi','length','613881QazsNr','overlapgroupB_all','Selected:\x20','textContent','61848ClRKYu','style','disabled','includes','groupB_all','entries','11366bZiaiF','109453iyJRPR','parentElement','110mzVlmH','9nfbYam','remove','size','classList','forEach'];_0xcacb=function(){return _0x58ced2;};return _0xcacb();}(function(_0x16b8e3,_0x8c6cb0){const _0x296676=_0x102b,_0x493d8b=_0x16b8e3();while(!![]){try{const _0x4c0b81=parseInt(_0x296676(0x180))/0x1+parseInt(_0x296676(0x17f))/0x2*(parseInt(_0x296676(0x183))/0x3)+parseInt(_0x296676(0x1a5))/0x4+-parseInt(_0x296676(0x192))/0x5+-parseInt(_0x296676(0x190))/0x6+parseInt(_0x296676(0x18c))/0x7*(-parseInt(_0x296676(0x19f))/0x8)+-parseInt(_0x296676(0x1a1))/0x9*(-parseInt(_0x296676(0x182))/0xa);if(_0x4c0b81===_0x8c6cb0)break;else _0x493d8b['push'](_0x493d8b['shift']());}catch(_0x58ad34){_0x493d8b['push'](_0x493d8b['shift']());}}}(_0xcacb,0x39e68));function updateUnused(){const _0x413de8=_0x102b;removeCustomClass();const _0x301c5b=new Set();let _0x46cde2=0x0;for(let _0x534758=0x1;_0x534758<=0xd;_0x534758++){const _0x3fc371=_0x413de8(0x19d)+_0x534758,_0x455b5d=unusedgroupAData[_0x3fc371]||[];_0x46cde2+=_0x455b5d['length'];const _0x2ea16f=document[_0x413de8(0x197)](_0x413de8(0x189)+_0x3fc371);if(_0x2ea16f)_0x2ea16f[_0x413de8(0x1a4)]=_0x455b5d[_0x413de8(0x1a0)];const _0x4b15ac=document[_0x413de8(0x197)](_0x3fc371);_0x4b15ac&&(_0x455b5d['length']===0x0?(_0x4b15ac[_0x413de8(0x19c)]=![],_0x4b15ac[_0x413de8(0x1a7)]=!![],_0x4b15ac[_0x413de8(0x18d)](_0x413de8(0x199))[_0x413de8(0x186)][_0x413de8(0x196)](_0x413de8(0x1a7)),_0x2ea16f[_0x413de8(0x181)][_0x413de8(0x1a6)][_0x413de8(0x18f)]=_0x413de8(0x195)):(_0x4b15ac['disabled']=![],_0x4b15ac['closest'](_0x413de8(0x199))[_0x413de8(0x186)][_0x413de8(0x184)](_0x413de8(0x1a7)),_0x2ea16f[_0x413de8(0x181)][_0x413de8(0x1a6)][_0x413de8(0x18f)]='black')),_0x4b15ac&&_0x4b15ac['checked']&&_0x455b5d[_0x413de8(0x187)](_0x351c4c=>_0x301c5b['add'](_0x351c4c['id']));}const _0x54d4f2=Object[_0x413de8(0x18a)](unusedgroupAData)[_0x413de8(0x19b)]();document[_0x413de8(0x197)]('countAllA')[_0x413de8(0x1a4)]=_0x54d4f2[_0x413de8(0x1a0)];const _0x5a8d6b=document[_0x413de8(0x197)](_0x413de8(0x191));_0x5a8d6b&&(_0x46cde2===0x0?(_0x5a8d6b[_0x413de8(0x19c)]=![],_0x5a8d6b['disabled']=!![],_0x5a8d6b['closest'](_0x413de8(0x199))[_0x413de8(0x186)][_0x413de8(0x196)](_0x413de8(0x1a7))):(_0x5a8d6b[_0x413de8(0x1a7)]=![],_0x5a8d6b[_0x413de8(0x18d)](_0x413de8(0x199))[_0x413de8(0x186)][_0x413de8(0x184)](_0x413de8(0x1a7))));document['getElementById']('selectedCount')[_0x413de8(0x1a4)]=_0x413de8(0x1a3)+_0x301c5b[_0x413de8(0x185)];const _0x1313e9=[];let _0x359834=0x0;Object[_0x413de8(0x17e)](unusedgroupBData)[_0x413de8(0x187)](([_0x282b65,_0x3d78f0])=>{const _0x2d8c90=_0x413de8,_0x1fd3c2=document[_0x2d8c90(0x197)](_0x282b65),_0x4f03aa=document[_0x2d8c90(0x197)](_0x2d8c90(0x193)+_0x282b65),_0x268ed5=_0x3d78f0[_0x2d8c90(0x194)](_0x55430a=>_0x301c5b[_0x2d8c90(0x18e)](_0x55430a['id']));if(_0x4f03aa)_0x4f03aa[_0x2d8c90(0x1a4)]=_0x268ed5['length'];_0x359834+=_0x268ed5['length'],_0x1fd3c2&&(_0x268ed5[_0x2d8c90(0x1a0)]===0x0?(_0x1fd3c2[_0x2d8c90(0x19c)]=![],_0x1fd3c2[_0x2d8c90(0x1a7)]=!![],_0x1fd3c2[_0x2d8c90(0x18d)](_0x2d8c90(0x199))['classList']['add'](_0x2d8c90(0x1a7))):(_0x1fd3c2[_0x2d8c90(0x1a7)]=![],_0x1fd3c2[_0x2d8c90(0x18d)](_0x2d8c90(0x199))['classList'][_0x2d8c90(0x184)](_0x2d8c90(0x1a7))),_0x4f03aa['parentElement'][_0x2d8c90(0x1a6)][_0x2d8c90(0x18f)]=_0x2d8c90(0x18b),_0x282b65[_0x2d8c90(0x1a8)]('_')&&_0x1fd3c2&&_0x1fd3c2[_0x2d8c90(0x19c)]&&_0x1313e9[_0x2d8c90(0x19e)](..._0x268ed5));});const _0x18394b=document[_0x413de8(0x197)](_0x413de8(0x17d)),_0x4e77a0=document[_0x413de8(0x197)](_0x413de8(0x1a2));if(_0x4e77a0){const _0x1229d4=Object['values'](unusedgroupBData)[_0x413de8(0x19b)]();_0x4e77a0[_0x413de8(0x1a4)]=_0x1229d4['length'];}_0x18394b&&(_0x359834===0x0?(_0x18394b[_0x413de8(0x19c)]=![],_0x18394b[_0x413de8(0x1a7)]=!![],_0x18394b[_0x413de8(0x18d)](_0x413de8(0x199))['classList'][_0x413de8(0x196)](_0x413de8(0x1a7))):(_0x18394b[_0x413de8(0x1a7)]=![],_0x18394b['closest']('label')[_0x413de8(0x186)][_0x413de8(0x184)](_0x413de8(0x1a7))));const _0x3fde94={};_0x1313e9[_0x413de8(0x187)](_0x41adbc=>_0x3fde94[_0x41adbc['id']]=_0x41adbc);const _0x54c305=Object[_0x413de8(0x18a)](_0x3fde94);selectedOverlappingQuestions=_0x54c305;const _0x338b95=Object['values'](unusedgroupAData)[_0x413de8(0x19b)](),_0x3ab128=Object[_0x413de8(0x18a)](incorrectGroupAData)[_0x413de8(0x19b)](),_0x2ffc64=Object[_0x413de8(0x18a)](originalGroupAData)['flat'](),_0x40aabe=removeDuplicatesAndLog(Object[_0x413de8(0x18a)](markedGroupAData)['flat'](),_0x345a63=>_0x345a63['id']);document[_0x413de8(0x197)](_0x413de8(0x19a))[_0x413de8(0x198)]=_0x338b95[_0x413de8(0x1a0)],document[_0x413de8(0x197)]('incorrect_text_remain_text')[_0x413de8(0x198)]=_0x3ab128[_0x413de8(0x1a0)],document['getElementById']('marked_text_remain_text')['innerHTML']=_0x40aabe[_0x413de8(0x1a0)],document[_0x413de8(0x197)](_0x413de8(0x188))[_0x413de8(0x198)]=_0x2ffc64[_0x413de8(0x1a0)],updateAllMainGroupOverlaps(),syncAllGroupBParents(),disableParentIfAllSubgroupsDisabled(),document[_0x413de8(0x197)]('selectedCountB')[_0x413de8(0x1a4)]=_0x413de8(0x1a3)+selectedOverlappingQuestions['length'];}
//incorrecct
(function(_0x1da75a,_0x4e230f){const _0x1d1d33=_0x38f7,_0x388480=_0x1da75a();while(!![]){try{const _0x539dd6=parseInt(_0x1d1d33(0x9c))/0x1+-parseInt(_0x1d1d33(0x9b))/0x2+-parseInt(_0x1d1d33(0x9d))/0x3+parseInt(_0x1d1d33(0xb3))/0x4+-parseInt(_0x1d1d33(0xb9))/0x5+parseInt(_0x1d1d33(0xa2))/0x6*(-parseInt(_0x1d1d33(0xb0))/0x7)+-parseInt(_0x1d1d33(0xa9))/0x8*(-parseInt(_0x1d1d33(0x9e))/0x9);if(_0x539dd6===_0x4e230f)break;else _0x388480['push'](_0x388480['shift']());}catch(_0x572d37){_0x388480['push'](_0x388480['shift']());}}}(_0x1920,0x2e93e));function _0x38f7(_0x2441c4,_0x13823a){const _0x1920d1=_0x1920();return _0x38f7=function(_0x38f748,_0x3b872f){_0x38f748=_0x38f748-0x98;let _0x5b1aa0=_0x1920d1[_0x38f748];return _0x5b1aa0;},_0x38f7(_0x2441c4,_0x13823a);}function updateIncorrect(){const _0x3a7e6e=_0x38f7;removeCustomClass();const _0x54d840=new Set();let _0x582975=0x0;for(let _0x1fc3be=0x1;_0x1fc3be<=0xd;_0x1fc3be++){const _0x23533f=_0x3a7e6e(0xa0)+_0x1fc3be,_0x32eb8e=incorrectGroupAData[_0x23533f]||[];_0x582975+=_0x32eb8e[_0x3a7e6e(0xb2)];const _0x405476=document['getElementById']('count'+_0x23533f);if(_0x405476)_0x405476[_0x3a7e6e(0xa5)]=_0x32eb8e[_0x3a7e6e(0xb2)];const _0x58c590=document[_0x3a7e6e(0xac)](_0x23533f);_0x58c590&&(_0x32eb8e['length']===0x0?(_0x58c590[_0x3a7e6e(0xb6)]=![],_0x58c590['disabled']=!![],_0x58c590['closest']('label')[_0x3a7e6e(0xa7)][_0x3a7e6e(0xa4)](_0x3a7e6e(0xa6)),_0x405476[_0x3a7e6e(0xab)]['style'][_0x3a7e6e(0xb8)]=_0x3a7e6e(0xb5)):(_0x58c590[_0x3a7e6e(0xa6)]=![],_0x58c590[_0x3a7e6e(0x9f)]('label')[_0x3a7e6e(0xa7)][_0x3a7e6e(0xae)](_0x3a7e6e(0xa6)),_0x405476[_0x3a7e6e(0xab)]['style'][_0x3a7e6e(0xb8)]='black')),_0x58c590&&_0x58c590[_0x3a7e6e(0xb6)]&&_0x32eb8e[_0x3a7e6e(0x9a)](_0x4ff6f1=>_0x54d840[_0x3a7e6e(0xa4)](_0x4ff6f1['id']));}const _0x56c219=Object[_0x3a7e6e(0xba)](incorrectGroupAData)['flat']();document[_0x3a7e6e(0xac)](_0x3a7e6e(0xa8))[_0x3a7e6e(0xa5)]=_0x56c219[_0x3a7e6e(0xb2)];const _0xb8f1d=document[_0x3a7e6e(0xac)](_0x3a7e6e(0xad));_0xb8f1d&&(_0x582975===0x0?(_0xb8f1d[_0x3a7e6e(0xb6)]=![],_0xb8f1d[_0x3a7e6e(0xa6)]=!![],_0xb8f1d[_0x3a7e6e(0x9f)](_0x3a7e6e(0xa1))['classList'][_0x3a7e6e(0xa4)](_0x3a7e6e(0xa6))):(_0xb8f1d['disabled']=![],_0xb8f1d[_0x3a7e6e(0x9f)](_0x3a7e6e(0xa1))[_0x3a7e6e(0xa7)][_0x3a7e6e(0xae)](_0x3a7e6e(0xa6))));document[_0x3a7e6e(0xac)](_0x3a7e6e(0xaa))['textContent']=_0x3a7e6e(0xb7)+_0x54d840['size'];const _0x29fe96=[];let _0xe7574b=0x0;Object[_0x3a7e6e(0x99)](incorrectGroupBData)[_0x3a7e6e(0x9a)](([_0x512cf6,_0x38298])=>{const _0x15b29e=_0x3a7e6e,_0x58b327=document['getElementById'](_0x512cf6),_0x39cbf2=document[_0x15b29e(0xac)]('overlap'+_0x512cf6),_0x4bd1ca=_0x38298[_0x15b29e(0xb4)](_0x388a49=>_0x54d840['has'](_0x388a49['id']));if(_0x39cbf2)_0x39cbf2[_0x15b29e(0xa5)]=_0x4bd1ca['length'];_0xe7574b+=_0x4bd1ca[_0x15b29e(0xb2)],_0x58b327&&(_0x4bd1ca[_0x15b29e(0xb2)]===0x0?(_0x58b327[_0x15b29e(0xb6)]=![],_0x58b327['disabled']=!![],_0x58b327[_0x15b29e(0x9f)](_0x15b29e(0xa1))['classList']['add'](_0x15b29e(0xa6))):(_0x58b327[_0x15b29e(0xa6)]=![],_0x58b327[_0x15b29e(0x9f)](_0x15b29e(0xa1))[_0x15b29e(0xa7)][_0x15b29e(0xae)](_0x15b29e(0xa6))),_0x512cf6[_0x15b29e(0xaf)]('_')&&_0x58b327&&_0x58b327[_0x15b29e(0xb6)]&&_0x29fe96[_0x15b29e(0x98)](..._0x4bd1ca));});const _0x34b25d=document[_0x3a7e6e(0xac)]('groupB_all'),_0x18f948=document[_0x3a7e6e(0xac)]('overlapgroupB_all');if(_0x18f948){const _0xd92109=Object[_0x3a7e6e(0xba)](incorrectGroupBData)[_0x3a7e6e(0xb1)]();_0x18f948['textContent']=_0xd92109[_0x3a7e6e(0xb2)];}_0x34b25d&&(_0xe7574b===0x0?(_0x34b25d[_0x3a7e6e(0xb6)]=![],_0x34b25d['disabled']=!![],_0x34b25d[_0x3a7e6e(0x9f)](_0x3a7e6e(0xa1))[_0x3a7e6e(0xa7)][_0x3a7e6e(0xa4)](_0x3a7e6e(0xa6))):(_0x34b25d[_0x3a7e6e(0xa6)]=![],_0x34b25d['closest'](_0x3a7e6e(0xa1))[_0x3a7e6e(0xa7)][_0x3a7e6e(0xae)](_0x3a7e6e(0xa6))));const _0x544b29={};_0x29fe96[_0x3a7e6e(0x9a)](_0x54935a=>_0x544b29[_0x54935a['id']]=_0x54935a);const _0x17da08=Object[_0x3a7e6e(0xba)](_0x544b29);selectedOverlappingQuestions=_0x17da08,updateAllMainGroupOverlaps(),syncAllGroupBParents(),disableParentIfAllSubgroupsDisabled(),document[_0x3a7e6e(0xac)](_0x3a7e6e(0xa3))[_0x3a7e6e(0xa5)]=_0x3a7e6e(0xb7)+selectedOverlappingQuestions[_0x3a7e6e(0xb2)];}function _0x1920(){const _0x5e41dd=['forEach','407554OVdVSW','55775AMjsVX','821067YOKwDQ','9sdvSru','closest','groupA','label','6WRwmSg','selectedCountB','add','textContent','disabled','classList','countAllA','7527968qcXJYN','selectedCount','parentElement','getElementById','allGroupA','remove','includes','624757FEROQK','flat','length','482932eJZsXf','filter','gray','checked','Selected:\x20','color','1800025dmeJkn','values','push','entries'];_0x1920=function(){return _0x5e41dd;};return _0x1920();}
//marked
(function(_0x2b885f,_0x1d8774){const _0x6a2c23=_0x3eb3,_0x17896a=_0x2b885f();while(!![]){try{const _0x3896a0=parseInt(_0x6a2c23(0x1e7))/0x1+parseInt(_0x6a2c23(0x1df))/0x2+-parseInt(_0x6a2c23(0x203))/0x3+-parseInt(_0x6a2c23(0x1de))/0x4+parseInt(_0x6a2c23(0x1fe))/0x5*(parseInt(_0x6a2c23(0x200))/0x6)+-parseInt(_0x6a2c23(0x1f8))/0x7+-parseInt(_0x6a2c23(0x1fa))/0x8*(-parseInt(_0x6a2c23(0x1f3))/0x9);if(_0x3896a0===_0x1d8774)break;else _0x17896a['push'](_0x17896a['shift']());}catch(_0x3c173f){_0x17896a['push'](_0x17896a['shift']());}}}(_0xd45b,0xc7763));function _0xd45b(){const _0x24e653=['checked','8SybjuX','forEach','length','has','306715mKzwQB','classList','66fBZnaY','getElementById','color','656487LtjjlT','disabled','6266272fJEWWX','2852758hoODfn','flat','parentElement','selectedCount','includes','groupB_all','Selected:\x20','count','677620oTpXyW','gray','remove','label','entries','style','groupA','size','values','closest','textContent','add','9656397ffHpZX','allGroupA','push','black','overlap','8745191FueFbA'];_0xd45b=function(){return _0x24e653;};return _0xd45b();}function _0x3eb3(_0x5d9e5b,_0x5a444f){const _0xd45ba9=_0xd45b();return _0x3eb3=function(_0x3eb390,_0x2dc7f0){_0x3eb390=_0x3eb390-0x1de;let _0xc32aff=_0xd45ba9[_0x3eb390];return _0xc32aff;},_0x3eb3(_0x5d9e5b,_0x5a444f);}function updateMarked(){const _0x1d5a95=_0x3eb3;removeCustomClass();const _0x1cfa64=new Set();let _0x3d1298=0x0;for(let _0x38918c=0x1;_0x38918c<=0xd;_0x38918c++){const _0x305a17=_0x1d5a95(0x1ed)+_0x38918c,_0x54acff=markedGroupAData[_0x305a17]||[];_0x3d1298+=_0x54acff[_0x1d5a95(0x1fc)];const _0x58abf1=document['getElementById'](_0x1d5a95(0x1e6)+_0x305a17);if(_0x58abf1)_0x58abf1['textContent']=_0x54acff[_0x1d5a95(0x1fc)];const _0x4058b5=document[_0x1d5a95(0x201)](_0x305a17);_0x4058b5&&(_0x54acff[_0x1d5a95(0x1fc)]===0x0?(_0x4058b5[_0x1d5a95(0x1f9)]=![],_0x4058b5[_0x1d5a95(0x204)]=!![],_0x4058b5['closest'](_0x1d5a95(0x1ea))['classList'][_0x1d5a95(0x1f2)](_0x1d5a95(0x204)),_0x58abf1['parentElement'][_0x1d5a95(0x1ec)]['color']=_0x1d5a95(0x1e8)):(_0x4058b5[_0x1d5a95(0x204)]=![],_0x4058b5['closest'](_0x1d5a95(0x1ea))[_0x1d5a95(0x1ff)]['remove'](_0x1d5a95(0x204)),_0x58abf1[_0x1d5a95(0x1e1)][_0x1d5a95(0x1ec)][_0x1d5a95(0x202)]=_0x1d5a95(0x1f6))),_0x4058b5&&_0x4058b5[_0x1d5a95(0x1f9)]&&_0x54acff['forEach'](_0x17a465=>_0x1cfa64[_0x1d5a95(0x1f2)](_0x17a465['id']));}const _0x5a44f0=removeDuplicatesAndLog(Object[_0x1d5a95(0x1ef)](markedGroupAData)[_0x1d5a95(0x1e0)](),_0x1b4473=>_0x1b4473['id']);console['log']('up\x20is\x20markedA'),document['getElementById']('countAllA')[_0x1d5a95(0x1f1)]=_0x5a44f0[_0x1d5a95(0x1fc)];const _0x5d629e=document[_0x1d5a95(0x201)](_0x1d5a95(0x1f4));_0x5d629e&&(_0x3d1298===0x0?(_0x5d629e[_0x1d5a95(0x1f9)]=![],_0x5d629e[_0x1d5a95(0x204)]=!![],_0x5d629e[_0x1d5a95(0x1f0)](_0x1d5a95(0x1ea))[_0x1d5a95(0x1ff)][_0x1d5a95(0x1f2)](_0x1d5a95(0x204))):(_0x5d629e[_0x1d5a95(0x204)]=![],_0x5d629e[_0x1d5a95(0x1f0)](_0x1d5a95(0x1ea))[_0x1d5a95(0x1ff)]['remove'](_0x1d5a95(0x204))));document[_0x1d5a95(0x201)](_0x1d5a95(0x1e2))['textContent']=_0x1d5a95(0x1e5)+_0x1cfa64[_0x1d5a95(0x1ee)];const _0x526c8c=[];let _0x3e99aa=0x0;Object[_0x1d5a95(0x1eb)](markedGroupBData)[_0x1d5a95(0x1fb)](([_0x3de671,_0x585add])=>{const _0x12ba00=_0x1d5a95,_0x45e8ff=document['getElementById'](_0x3de671),_0x176abf=document[_0x12ba00(0x201)](_0x12ba00(0x1f7)+_0x3de671),_0x2bd963=_0x585add['filter'](_0x27c2fa=>_0x1cfa64[_0x12ba00(0x1fd)](_0x27c2fa['id']));if(_0x176abf)_0x176abf[_0x12ba00(0x1f1)]=_0x2bd963[_0x12ba00(0x1fc)];_0x3e99aa+=_0x2bd963[_0x12ba00(0x1fc)],_0x45e8ff&&(_0x2bd963['length']===0x0?(_0x45e8ff['checked']=![],_0x45e8ff[_0x12ba00(0x204)]=!![],_0x45e8ff[_0x12ba00(0x1f0)](_0x12ba00(0x1ea))[_0x12ba00(0x1ff)]['add'](_0x12ba00(0x204))):(_0x45e8ff['disabled']=![],_0x45e8ff[_0x12ba00(0x1f0)](_0x12ba00(0x1ea))[_0x12ba00(0x1ff)]['remove']('disabled')),_0x3de671[_0x12ba00(0x1e3)]('_')&&_0x45e8ff&&_0x45e8ff['checked']&&_0x526c8c[_0x12ba00(0x1f5)](..._0x2bd963));});const _0x291886=document[_0x1d5a95(0x201)](_0x1d5a95(0x1e4)),_0x355fcb=document[_0x1d5a95(0x201)]('overlapgroupB_all');if(_0x355fcb){const _0xc785d8=removeDuplicatesAndLog(Object[_0x1d5a95(0x1ef)](markedGroupBData)[_0x1d5a95(0x1e0)](),_0xd31461=>_0xd31461['id']);_0x355fcb[_0x1d5a95(0x1f1)]=_0xc785d8[_0x1d5a95(0x1fc)];}_0x291886&&(_0x3e99aa===0x0?(_0x291886['checked']=![],_0x291886[_0x1d5a95(0x204)]=!![],_0x291886[_0x1d5a95(0x1f0)](_0x1d5a95(0x1ea))[_0x1d5a95(0x1ff)]['add'](_0x1d5a95(0x204))):(_0x291886[_0x1d5a95(0x204)]=![],_0x291886[_0x1d5a95(0x1f0)](_0x1d5a95(0x1ea))[_0x1d5a95(0x1ff)][_0x1d5a95(0x1e9)](_0x1d5a95(0x204))));const _0x2f0587={};_0x526c8c['forEach'](_0x2da4eb=>_0x2f0587[_0x2da4eb['id']]=_0x2da4eb);const _0x7e0349=Object[_0x1d5a95(0x1ef)](_0x2f0587);selectedOverlappingQuestions=_0x7e0349,updateAllMainGroupOverlaps(),syncAllGroupBParents(),disableParentIfAllSubgroupsDisabled(),document[_0x1d5a95(0x201)]('selectedCountB')[_0x1d5a95(0x1f1)]=_0x1d5a95(0x1e5)+selectedOverlappingQuestions[_0x1d5a95(0x1fc)];}
// original
function _0x3ae0(){const _0x29a5b9=['groupA','length','2937400ODOWFI','7hFXvsh','allGroupA','includes','537644SbULmH','forEach','559913afXRtc','size','getElementById','color','classList','values','11127dWIiXE','flat','push','disabled','closest','has','388WuoElh','count','381580uFtiRq','2028600nQFJoh','black','style','checked','2942155BWsTQf','groupB_all','entries','Selected:\x20','remove','144KLPgLQ','overlap','label','selectedCount','add','countAllA','selectedCountB','overlapgroupB_all','parentElement','textContent'];_0x3ae0=function(){return _0x29a5b9;};return _0x3ae0();}(function(_0x22e63e,_0x4e77b9){const _0x372d9e=_0x5864,_0x489e35=_0x22e63e();while(!![]){try{const _0x1d2a68=parseInt(_0x372d9e(0x85))/0x1+parseInt(_0x372d9e(0x83))/0x2+-parseInt(_0x372d9e(0x8b))/0x3*(parseInt(_0x372d9e(0x91))/0x4)+parseInt(_0x372d9e(0x98))/0x5+parseInt(_0x372d9e(0x94))/0x6+-parseInt(_0x372d9e(0x80))/0x7*(parseInt(_0x372d9e(0x7f))/0x8)+-parseInt(_0x372d9e(0x9d))/0x9*(parseInt(_0x372d9e(0x93))/0xa);if(_0x1d2a68===_0x4e77b9)break;else _0x489e35['push'](_0x489e35['shift']());}catch(_0x3b2e92){_0x489e35['push'](_0x489e35['shift']());}}}(_0x3ae0,0x65ffe));function _0x5864(_0x1744b0,_0x1324f5){const _0x3ae000=_0x3ae0();return _0x5864=function(_0x586453,_0x12d810){_0x586453=_0x586453-0x77;let _0x2ce194=_0x3ae000[_0x586453];return _0x2ce194;},_0x5864(_0x1744b0,_0x1324f5);}function updateOriginal(){const _0x4b74d3=_0x5864;removeCustomClass();const _0x5d5049=new Set();let _0x354521=0x0;for(let _0x306211=0x1;_0x306211<=0xd;_0x306211++){const _0x50a89d=_0x4b74d3(0x7d)+_0x306211,_0xa33fdd=originalGroupAData[_0x50a89d]||[];_0x354521+=_0xa33fdd['length'];const _0x340c1a=document[_0x4b74d3(0x87)](_0x4b74d3(0x92)+_0x50a89d);if(_0x340c1a)_0x340c1a[_0x4b74d3(0x7c)]=_0xa33fdd['length'];const _0x3a5815=document['getElementById'](_0x50a89d);_0x3a5815&&(_0xa33fdd[_0x4b74d3(0x7e)]===0x0?(_0x3a5815[_0x4b74d3(0x97)]=![],_0x3a5815[_0x4b74d3(0x8e)]=!![],_0x3a5815[_0x4b74d3(0x8f)](_0x4b74d3(0x9f))['classList'][_0x4b74d3(0x77)](_0x4b74d3(0x8e)),_0x340c1a[_0x4b74d3(0x7b)][_0x4b74d3(0x96)][_0x4b74d3(0x88)]='gray'):(_0x3a5815[_0x4b74d3(0x8e)]=![],_0x3a5815[_0x4b74d3(0x8f)]('label')['classList'][_0x4b74d3(0x9c)]('disabled'),_0x340c1a[_0x4b74d3(0x7b)]['style'][_0x4b74d3(0x88)]=_0x4b74d3(0x95))),_0x3a5815&&_0x3a5815[_0x4b74d3(0x97)]&&_0xa33fdd[_0x4b74d3(0x84)](_0x169c2d=>_0x5d5049[_0x4b74d3(0x77)](_0x169c2d['id']));}const _0x191d79=Object[_0x4b74d3(0x8a)](originalGroupAData)[_0x4b74d3(0x8c)]();document['getElementById'](_0x4b74d3(0x78))[_0x4b74d3(0x7c)]=_0x191d79[_0x4b74d3(0x7e)];const _0xf056c9=document['getElementById'](_0x4b74d3(0x81));_0xf056c9&&(_0x354521===0x0?(_0xf056c9[_0x4b74d3(0x97)]=![],_0xf056c9[_0x4b74d3(0x8e)]=!![],_0xf056c9[_0x4b74d3(0x8f)]('label')[_0x4b74d3(0x89)][_0x4b74d3(0x77)]('disabled')):(_0xf056c9['disabled']=![],_0xf056c9['closest'](_0x4b74d3(0x9f))[_0x4b74d3(0x89)][_0x4b74d3(0x9c)](_0x4b74d3(0x8e))));document[_0x4b74d3(0x87)](_0x4b74d3(0xa0))[_0x4b74d3(0x7c)]=_0x4b74d3(0x9b)+_0x5d5049[_0x4b74d3(0x86)];const _0x418069=[];let _0x28c8fb=0x0;Object[_0x4b74d3(0x9a)](originalGroupBData)[_0x4b74d3(0x84)](([_0x45cecc,_0x315812])=>{const _0x10a9a1=_0x4b74d3,_0x46bbb2=document[_0x10a9a1(0x87)](_0x45cecc),_0x1a8463=document[_0x10a9a1(0x87)](_0x10a9a1(0x9e)+_0x45cecc),_0x29d841=_0x315812['filter'](_0x244772=>_0x5d5049[_0x10a9a1(0x90)](_0x244772['id']));if(_0x1a8463)_0x1a8463[_0x10a9a1(0x7c)]=_0x29d841[_0x10a9a1(0x7e)];_0x28c8fb+=_0x29d841['length'],_0x46bbb2&&(_0x29d841[_0x10a9a1(0x7e)]===0x0?(_0x46bbb2[_0x10a9a1(0x97)]=![],_0x46bbb2['disabled']=!![],_0x46bbb2[_0x10a9a1(0x8f)](_0x10a9a1(0x9f))[_0x10a9a1(0x89)][_0x10a9a1(0x77)]('disabled')):(_0x46bbb2[_0x10a9a1(0x8e)]=![],_0x46bbb2['closest']('label')['classList'][_0x10a9a1(0x9c)](_0x10a9a1(0x8e))),_0x45cecc[_0x10a9a1(0x82)]('_')&&_0x46bbb2&&_0x46bbb2['checked']&&_0x418069[_0x10a9a1(0x8d)](..._0x29d841));});const _0x563f40=document[_0x4b74d3(0x87)](_0x4b74d3(0x99)),_0x487adb=document[_0x4b74d3(0x87)](_0x4b74d3(0x7a));if(_0x487adb){const _0x3dff49=Object['values'](originalGroupBData)[_0x4b74d3(0x8c)]();_0x487adb[_0x4b74d3(0x7c)]=_0x3dff49[_0x4b74d3(0x7e)];}_0x563f40&&(_0x28c8fb===0x0?(_0x563f40[_0x4b74d3(0x97)]=![],_0x563f40[_0x4b74d3(0x8e)]=!![],_0x563f40[_0x4b74d3(0x8f)]('label')[_0x4b74d3(0x89)][_0x4b74d3(0x77)]('disabled')):(_0x563f40['disabled']=![],_0x563f40['closest']('label')[_0x4b74d3(0x89)]['remove'](_0x4b74d3(0x8e))));const _0x5209bd={};_0x418069['forEach'](_0x3ad4f2=>_0x5209bd[_0x3ad4f2['id']]=_0x3ad4f2);const _0x2e78ec=Object['values'](_0x5209bd);selectedOverlappingQuestions=_0x2e78ec,updateAllMainGroupOverlaps(),syncAllGroupBParents(),disableParentIfAllSubgroupsDisabled(),document[_0x4b74d3(0x87)](_0x4b74d3(0x79))[_0x4b74d3(0x7c)]=_0x4b74d3(0x9b)+selectedOverlappingQuestions[_0x4b74d3(0x7e)];}
// init
function _0x4172(_0xdcd9ab,_0x3a9535){const _0x33c051=_0x33c0();return _0x4172=function(_0x417299,_0x5f21b6){_0x417299=_0x417299-0x14c;let _0x339c4e=_0x33c051[_0x417299];return _0x339c4e;},_0x4172(_0xdcd9ab,_0x3a9535);}(function(_0x2fda88,_0x481bb7){const _0x4031fa=_0x4172,_0x1057aa=_0x2fda88();while(!![]){try{const _0x18165e=-parseInt(_0x4031fa(0x154))/0x1*(parseInt(_0x4031fa(0x160))/0x2)+parseInt(_0x4031fa(0x14d))/0x3+-parseInt(_0x4031fa(0x158))/0x4*(parseInt(_0x4031fa(0x14f))/0x5)+parseInt(_0x4031fa(0x161))/0x6+parseInt(_0x4031fa(0x15d))/0x7+-parseInt(_0x4031fa(0x14c))/0x8+parseInt(_0x4031fa(0x162))/0x9;if(_0x18165e===_0x481bb7)break;else _0x1057aa['push'](_0x1057aa['shift']());}catch(_0x501a6c){_0x1057aa['push'](_0x1057aa['shift']());}}}(_0x33c0,0xdc18c));function _0x33c0(){const _0x4c707a=['textContent','5588612gmGXgO','\x0a\x20\x20\x20\x20<div\x20class=\x22group-label-A\x22>\x0a\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22','Group\x20B','addEventListener','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22group-label\x20nested\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22','5779004hZTiyT','groupA','groupB','8UuZQbe','8488434pYCHrs','9264519thPGON','overlap','groupA-left','\x20<span\x20id=\x22count','\x22>\x20','all-mode','Group\x20A','incorrect','\x22\x20\x20\x20class=\x22count-style\x22\x20\x20\x20\x20>0</span></label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>','innerHTML','groupB-root','-subgroups','marked','\x22\x20class=\x22count-style\x22>0</span></label>\x0a\x20\x20\x20\x20</div>','change','3512840tgdvhp','1898208qcXFWw','hasOwnProperty','5gnsHiC','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22group-label\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22','groupA-right','getElementById','groupA-container','291166lZKlXC','checked','\x20<span\x20id=\x22overlap'];_0x33c0=function(){return _0x4c707a;};return _0x33c0();}async function init(){const _0x4492cc=_0x4172,_0x23e93a=document['getElementById'](_0x4492cc(0x164)),_0x151428=document[_0x4492cc(0x152)](_0x4492cc(0x151)),_0x18faf1=document[_0x4492cc(0x152)](_0x4492cc(0x153));for(let _0x11d04a=0x1;_0x11d04a<=0xd;_0x11d04a++){const _0x54413f=_0x4492cc(0x15e)+_0x11d04a,_0x426b1f=groupACustomNames[_0x54413f]||_0x4492cc(0x168)+_0x11d04a,_0xbd0881=_0x4492cc(0x159)+_0x54413f+'\x22>'+_0x426b1f+_0x4492cc(0x165)+_0x54413f+_0x4492cc(0x16f);_0x11d04a<=0x7?_0x23e93a[_0x4492cc(0x16b)]+=_0xbd0881:_0x151428[_0x4492cc(0x16b)]+=_0xbd0881;}for(let _0x2e1edb=0x1;_0x2e1edb<=0x1a;_0x2e1edb++){const _0x414265=_0x4492cc(0x15f)+_0x2e1edb,_0x55525f=_0x414265,_0x30f130=groupBCustomNames[_0x55525f]||_0x4492cc(0x15a)+_0x2e1edb,_0x11b489=nestedGroups[_0x4492cc(0x14e)]('B'+_0x2e1edb),_0x5d88c2=_0x11b489?document['getElementById'](_0x55525f+_0x4492cc(0x16d)):document['getElementById'](_0x4492cc(0x16c));!document['getElementById'](_0x55525f)&&(_0x5d88c2[_0x4492cc(0x16b)]+=_0x4492cc(0x150)+_0x55525f+'\x22>\x20'+_0x30f130+_0x4492cc(0x156)+_0x55525f+'\x22\x20\x20\x20\x20class=\x22count-style\x22\x20\x20>0</span></label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>');if(_0x11b489){const _0x17b5a8=document[_0x4492cc(0x152)](_0x55525f+_0x4492cc(0x16d)),_0x11d1ed=nestedGroups['B'+_0x2e1edb];for(let _0xcdf540=0x1;_0xcdf540<=_0x11d1ed;_0xcdf540++){const _0x3b0c0c=_0x55525f+'_'+_0xcdf540,_0x595ffc=subgroupCustomNames[_0x55525f]?.[_0xcdf540-0x1]||''+_0x3b0c0c;_0x17b5a8[_0x4492cc(0x16b)]+=_0x4492cc(0x15c)+_0x3b0c0c+_0x4492cc(0x166)+_0x595ffc+_0x4492cc(0x156)+_0x3b0c0c+_0x4492cc(0x16a),setTimeout(()=>{const _0x1fa380=_0x4492cc,_0x1e6618=document[_0x1fa380(0x152)](_0x3b0c0c);_0x1e6618&&_0x1e6618[_0x1fa380(0x15b)](_0x1fa380(0x170),()=>{const _0x1e56ce=_0x1fa380;document['getElementById']('unused')[_0x1e56ce(0x155)]===!![]&&updateUnused();});},0x0);}let _0x1e879e=0x0;for(let _0x5e1cc4=0x1;_0x5e1cc4<=_0x11d1ed;_0x5e1cc4++){const _0x5d4ee9=_0x55525f+'_'+_0x5e1cc4,_0x39daec=document['getElementById'](_0x4492cc(0x163)+_0x5d4ee9);_0x39daec&&(_0x1e879e+=parseInt(_0x39daec[_0x4492cc(0x157)])||0x0);}const _0x40101c=document[_0x4492cc(0x152)](_0x4492cc(0x163)+_0x55525f);_0x40101c&&(_0x40101c[_0x4492cc(0x157)]=_0x1e879e);}document[_0x4492cc(0x152)](_0x55525f)[_0x4492cc(0x15b)]('change',()=>{const _0x15a23a=_0x4492cc;syncGroupWithSubgroups(_0x55525f);document[_0x15a23a(0x152)]('unused')[_0x15a23a(0x155)]==!![]&&updateUnused();;document[_0x15a23a(0x152)](_0x15a23a(0x169))['checked']==!![]&&updateIncorrect();;document[_0x15a23a(0x152)](_0x15a23a(0x16e))[_0x15a23a(0x155)]==!![]&&updateMarked();;document['getElementById'](_0x15a23a(0x167))[_0x15a23a(0x155)]==!![]&&updateOriginal();;});}setupCheckboxListeners();document['getElementById']('unused')[_0x4492cc(0x155)]==!![]&&updateUnused();;document['getElementById'](_0x4492cc(0x169))['checked']==!![]&&updateIncorrect();;document[_0x4492cc(0x152)](_0x4492cc(0x16e))[_0x4492cc(0x155)]==!![]&&updateMarked();;document[_0x4492cc(0x152)](_0x4492cc(0x167))['checked']==!![]&&updateOriginal();;}





function setupCheckboxListeners() {
  // All Group A
  const allA = document.getElementById("allGroupA");
  allA.addEventListener("change", () => {
    for (let i = 1; i <= 13; i++) {
      const cb = document.getElementById(`groupA${i}`);
      if (!cb.disabled) cb.checked = allA.checked;
    }
    //
    //



if (document.getElementById("unused").checked==true){  
   updateUnused()

  
  };
  if (document.getElementById("incorrect").checked==true){
    
    
    updateIncorrect()
  

/*
      fetch("/updateIncorrect")
  .then(res => res.json())
  .then(data => console.log("updateIncorrect result:", data.result));
*/
  
  };
  if (document.getElementById("marked").checked==true){
    
    
    updateMarked()
  

/*
  fetch("/updateMarked")
  .then(res => res.json())
  .then(data => console.log("updateMarked result:", data.result));
*/


  
  };
  if (document.getElementById("all-mode").checked==true){
    
    
    
    updateOriginal()
  
  /*
        fetch("/updateOriginal")
  .then(res => res.json())
  .then(data => console.log("updateOriginal result:", data.result));
*/
  
  };

  });

  // Individual A groups
  for (let i = 1; i <= 13; i++) {
    const cb = document.getElementById(`groupA${i}`);
    cb.addEventListener("change", () => {
      const allChecked = [...Array(13)].every((_, j) =>
        document.getElementById(`groupA${j + 1}`).checked
      );
      allA.checked = allChecked;


if (document.getElementById("unused").checked==true){
  
  updateUnused()






};
if (document.getElementById("incorrect").checked==true){
  

  updateIncorrect()


/*
      fetch("/updateIncorrect")
  .then(res => res.json())
  .then(data => console.log("updateIncorrect result:", data.result));
*/



};
if (document.getElementById("marked").checked==true){


    
  updateMarked()


/*
fetch("/updateMarked")
  .then(res => res.json())
  .then(data => console.log("updateMarked result:", data.result));
*/


};
if (document.getElementById("all-mode").checked==true){
  
  
  updateOriginal()


/*
     fetch("/updateOriginal")
  .then(res => res.json())
  .then(data => console.log("updateOriginal result:", data.result));
*/



};

    });
  }

  // All Group B
  const groupBAll = document.getElementById("groupB_all");
  groupBAll.addEventListener("change", () => {
  

if (document.getElementById("unused").checked==true){
      Object.keys(unusedgroupBData).forEach(id => {
      const cb = document.getElementById(id);
      if (cb && !cb.disabled) cb.checked = groupBAll.checked;
    });


    
  updateUnused()







};






if (document.getElementById("incorrect").checked==true){
        Object.keys(incorrectGroupBData).forEach(id => {
      const cb = document.getElementById(id);
      if (cb && !cb.disabled) cb.checked = groupBAll.checked;
    });

    
  updateIncorrect()



/*
      fetch("/updateIncorrect")
  .then(res => res.json())
  .then(data => console.log("updateIncorrect result:", data.result));
*/

  };



if (document.getElementById("marked").checked==true){
  
    Object.keys(markedGroupBData).forEach(id => {
    const cb = document.getElementById(id);
    if (cb && !cb.disabled) cb.checked = groupBAll.checked;
    });
  
    
  updateMarked()
  

/*
  fetch("/updateMarked")
  .then(res => res.json())
  .then(data => console.log("updateMarked result:", data.result));
*/


};
if (document.getElementById("all-mode").checked==true){
  
    Object.keys(originalGroupBData).forEach(id => {
    const cb = document.getElementById(id);
    if (cb && !cb.disabled) cb.checked = groupBAll.checked;
    });
    
    

    
  updateOriginal()



/*
     fetch("/updateOriginal")
  .then(res => res.json())
  .then(data => console.log("updateOriginal result:", data.result));
*/



};

  });
////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// All B checkboxes


//if (document.getElementById("unused").checked==true){


  Object.keys(originalGroupBData).forEach(id => {
    const cb = document.getElementById(id);
    if (cb) {
      cb.addEventListener("change", () => {
        syncGroupWithSubgroups(id);
if (document.getElementById("unused").checked==true){



  updateUnused()




};
if (document.getElementById("incorrect").checked==true){
  
  
  updateIncorrect()



/*
      fetch("/updateIncorrect")
  .then(res => res.json())
  .then(data => console.log("updateIncorrect result:", data.result));
*/



};
if (document.getElementById("marked").checked==true){

    
  updateMarked()


/*
fetch("/updateMarked")
  .then(res => res.json())
  .then(data => console.log("updateMarked result:", data.result));
*/


};
if (document.getElementById("all-mode").checked==true){
  
  

  updateOriginal()


/*
     fetch("/updateOriginal")
  .then(res => res.json())
  .then(data => console.log("updateOriginal result:", data.result));
*/



};

      });
    }    
  });
  //


//}


/*
if (document.getElementById("incorrect").checked==true){
  Object.keys(incorrectGroupBData).forEach(id => {
    const cb = document.getElementById(id);
    if (cb) {
      cb.addEventListener("change", () => {
        syncGroupWithSubgroups(id);
if (document.getElementById("unused").checked==true){updateUnused()};
if (document.getElementById("incorrect").checked==true){updateIncorrect()};
if (document.getElementById("marked").checked==true){updateMarked()};
if (document.getElementById("all-mode").checked==true){updateOriginal()};

      });
    }    
  });
  //
}



if (document.getElementById("marked").checked==true){
  Object.keys(markedGroupBData).forEach(id => {
    const cb = document.getElementById(id);
    if (cb) {
      cb.addEventListener("change", () => {
        syncGroupWithSubgroups(id);
if (document.getElementById("unused").checked==true){updateUnused()};
if (document.getElementById("incorrect").checked==true){updateIncorrect()};
if (document.getElementById("marked").checked==true){updateMarked()};
if (document.getElementById("all-mode").checked==true){updateOriginal()};

      });
    }    
  });
  //
}



if (document.getElementById("all-mode").checked==true){
  Object.keys(originalGroupBData).forEach(id => {
    const cb = document.getElementById(id);
    if (cb) {
      cb.addEventListener("change", () => {
        syncGroupWithSubgroups(id);
if (document.getElementById("unused").checked==true){updateUnused()};
if (document.getElementById("incorrect").checked==true){updateIncorrect()};
if (document.getElementById("marked").checked==true){updateMarked()};
if (document.getElementById("all-mode").checked==true){updateOriginal()};

      });
    }    
  });
  //
}


*/







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




function updateMainGroupOverlap(groupId, count) {
  let total = 0;
  for (let j = 1; j <= count; j++) {
    const subId = `${groupId}_${j}`;
    const el = document.getElementById(`overlap${subId}`);
    if (el) total += parseInt(el.textContent) || 0;
   
////////////////////////////////////////////////////////////////////////////////////
if (el) {
  const label = el.closest("label");
  if (label) {
    label.style.color = (parseInt(el.textContent)===0) ? "gray" : "black";
  }
}
/////////////////////////////////////////////////////////////////////////////////////

  }
  const mainEl = document.getElementById(`overlap${groupId}`);
  if (mainEl) mainEl.textContent = total;

///////////////////////////////////////////////////////////////////////////////////////
if (mainEl) {
  const label = mainEl.closest("label");
  if (label) {
    label.style.color = (total === 0) ? "gray" : "black";
  }
}
////////////////////////////////////////////////////////////////////////////////////////
}



function updateAllMainGroupOverlaps() {
  for (let i = 1; i <= 26; i++) {
    const groupId = `groupB${i}`;
    const count = nestedGroups[`B${i}`];
    if (count) {


      updateMainGroupOverlap(groupId, count);

    }
  }
}





document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'visible') {
    // Page became active again → hide spinner just in case
    loadingScreen.style.display = 'none';


  }
});



window.onload =  async function() {

await initFirebase();

  //
  //
loadingScreen.style.display='none';
  async function checkTriggerFunction() {
  const triggerDoc = await db.get("triggerFunction").catch(err => null);
  if (triggerDoc && triggerDoc.data === "true") {
await db.remove(triggerDoc);
    // localStorage.removeItem("triggerFunction");
/*const doc = await db.get("triggerFunction").catch(() => null);
if (doc) {
  await db.remove(doc);
}*/
loadingScreen.style.display='flex';
await  ResetFunction();
  }else{}
}
await checkTriggerFunction();
main();
}



async function main() {
  await ComboLoadValuesFromFirestore();
    init();
}


let dbClosed = false;
window.addEventListener('beforeunload', async () => {
    dbClosed = true;
    await db.close();
});



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

//----------------------------------------------------------------





const loadingScreen = document.getElementById('loadingScreen');




let icon_visibility;
let sidebar = document.querySelector(".sidebar");
let quizArea = document.querySelector(".quiz-area");
let answersArea = document.querySelector(".answers-area");
let flag_checkbox=document.querySelector(".flag-checkbox")
let Z ;
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
let chooseQuestionsClass= document.querySelector(".choose-questions");
let n; 

let all_incorrect;
let all_marked;

let startButton = document.querySelector(".start-button");
let FINAL_ARRAY; 

let currentIndex ;
let countdownInterval;

let number_of_solved_questions;

let score;
let scores={};

let string_array = [];
let status_string={};

let submitted_array =[];
let submitted_string={};

let SUM;
let isTimed; 

window.handleCheckboxChange =  async function(clicked) {
    console.time("MyFunction Time"); // ⏱ Start timer

await clickAllGroupAOnceThenMaybeAgain_2();
  const checkboxes = [
    "unused",
    "incorrect",
    "marked",
    "all-mode",
    "custom-mode"
  ];

  checkboxes.forEach(id => {
    const box = document.getElementById(id);
    box.checked = (box === clicked);
  });


   // toggleAllGroupCheckboxesSmart();
  if (clicked.id === "unused") {
    
  
    updateUnused();
    
  
  }
  if (clicked.id === "incorrect") {
    
    
    
    updateIncorrect();


/*
      fetch("/updateIncorrect")
  .then(res => res.json())
  .then(data => console.log("updateIncorrect result:", data.result));
*/






  }
  if (clicked.id === "marked") {
    
    

updateMarked();


/*
fetch("/updateMarked")
  .then(res => res.json())
  .then(data => console.log("updateMarked result:", data.result));
*/



  }
  if (clicked.id === "all-mode") {
    
    
    updateOriginal();


/*
     fetch("/updateOriginal")
  .then(res => res.json())
  .then(data => console.log("updateOriginal result:", data.result));
*/





  }
  if (clicked.id === "custom-mode") updateCustom();
  
    console.timeEnd("MyFunction Time"); // ⏱ End timer & log

};


async function CombosaveMinimalToFirestore() {
  console.time("🕒 Firestore Save Duration (Minimal)"); // ⏱ Start timer
  if (dbClosed) return;
  if (!uid) {
    console.error("❌ UID not found. Cannot save user-specific data.");
    return;
  }

  FinalArray_IDs=Array.from(new Set(FINAL_ARRAY.map(q => q.id)));


  try {
    const selectedData = {
      FinalArray_IDs,
      n,
      Z,
      isTimed
    };

    const userDocRef = doc(firestore, "userData", uid);
    await setDoc(userDocRef, selectedData, { merge: true });

    console.timeEnd("🕒 Firestore Save Duration (Minimal)");
    console.log(`✅ FINAL_ARRAY, n, Z, isTimed saved to Firestore with merge for UID: ${uid}`);
  } catch (error) {
    console.error("❌ Failed to save minimal data to Firestore:", error);
  }
}



startButton.onclick = () => {
if (document.getElementById("timed").checked){isTimed=true}else{isTimed=false};

if (document.getElementById("unused").checked || document.getElementById("all-mode").checked || document.getElementById("incorrect").checked || document.getElementById("marked").checked) {
    n=document.getElementById('NumberOfQurstions').value

  if ( n>=1 && n<=40 )  {
       FINAL_ARRAY = selectedOverlappingQuestions;
// FINAL_ARRAY = shuffleArray(FINAL_ARRAY);
if ( n > FINAL_ARRAY.length)alert("enter a maximum number of "+ FINAL_ARRAY.length);
else {


checkSubscription().then(isSubscribed => {
  if (isSubscribed || (Z<4) ) {

// FINAL_ARRAY=FINAL_ARRAY.slice(0,n);
FINAL_ARRAY=randomizeSliceStickPairs(FINAL_ARRAY,originalGroupAData,n);
//console.log("v",FINAL_ARRAY);
//
Z++
test_result_index=Z;
//

   async function SaveAndGo() {
    try {
        await CombosaveMinimalToFirestore();
        window.location.href = "showexam.html";  // ✅ only then redirect
    } catch (err) {
        console.error("❌ Error saving Final_Question:", err);
        alert("Failed to save. Please try again.");
    }
}
 SaveAndGo();
  } else {
        window.location.href = "subscription.html";  // ✅ only then redirect
}
});












}
 }else alert ("enter a number between 1 & 40")
  }

  if (document.getElementById("custom-mode").checked){ 


    const input = document.getElementById('userInput').value.trim();

        // Check if input is empty
        if (input === "") {
            alert("⚠ Please enter some numbers.");
            return;
        }

        // Step 1: split by comma, trim spaces, convert to numbers, filter NaN
        let numberArray = input.split(',')
            .map(x => x.trim())
            .map(Number)
            .filter(x => !isNaN(x));

        // Check if after filtering we have numbers
        if (numberArray.length === 0) {
            alert("⚠ No valid numbers found.");
            return;
        }

        // Step 2: sort the array
        numberArray.sort((a, b) => a - b);
        selectedOverlappingQuestions = filterByIds(originalGroupAData, numberArray);
   //     console.log("✅ Sorted numbers:", numberArray);
     //   alert("Sorted numbers: " + numberArray.join(', '));

//console.log(selectedOverlappingQuestions);
//console.log(selectedOverlappingQuestions.length);


  if ( selectedOverlappingQuestions.length>=1 && selectedOverlappingQuestions.length<=10 )  {
   FINAL_ARRAY = selectedOverlappingQuestions;
//
//
//
 FINAL_ARRAY = shuffleArray(FINAL_ARRAY);
//
//
//

   n=FINAL_ARRAY.length;

Z++
test_result_index=Z;


async function SaveAndGo() {
    try {
        await CombosaveMinimalToFirestore();
        window.location.href = "showexam.html";  // ✅ only then redirect
    } catch (err) {
        console.error("❌ Error saving Final_Question:", err);
        alert("Failed to save. Please try again.");
    }
}
SaveAndGo();
  }else alert ("you can enter up to 5 IDs")
  }
  if (!document.getElementById("unused").checked && !document.getElementById("all-mode").checked && !document.getElementById("incorrect").checked && !document.getElementById("marked").checked && !document.getElementById("custom-mode").checked){alert("select question mode first.");}
};


async function ResetFunction() {
await deleteCurrentUserData();

console.log("Reset Function has been triggered!");

console.time("🟢 Load all JSON files");

const groupAIds = Array.from({ length: 13 }, (_, i) => `groupA${i + 1}`);
const groupAFiles = groupAIds.map(id => `${id}_Qs.json`);
const groupAPromises = groupAFiles.map((file, idx) =>
  loadQuestions(file).then(data => {
    const id = groupAIds[idx];
    unusedgroupAData[id] = data;
    originalGroupAData[id] = data;
    incorrectGroupAData[id] = [];
    markedGroupAData[id] = [];
  })
);

await Promise.all(groupAPromises);
///////////////////////////////////////////////////

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
          unusedgroupBData[subId] = data;
          originalGroupBData[subId] = data;
          incorrectGroupBData[subId] = [];
          markedGroupBData[subId] = [];
        })
      );
    }
  }
}

// Wait for all subgroups to finish loading
await Promise.all(groupBPromises);




//console.log("resettedmarkedGroupBData",markedGroupBData),





console.timeEnd("🟢 Load all JSON files");
console.time("🟡");



updateUnused();



console.timeEnd("🟡");
console.time("🔵");
Z=0;

/////////////////////////
test_result_index=0;
FINAL_ARRAY=[];
Final_Count=0;
//////////
chosen_Answers=[]; // contains 0,1,2,3,4,5 which indicates answer number
chosen_Answers_string=[];
real_Answers=[];

icon_visibility=[];

currentIndex = 0;
score=0;
SUM=0;
number_of_solved_questions=0;
all_incorrect=[];
all_marked=[];
///////////////////////////////////////////////////////////////////////////////
const allIds = getAllIdsFromGroupA(unusedgroupAData);
//console.log(allIds)
unusedIdsArrayCloud=allIds;
markedIdsArrayCloud=[];
FinalArray_IDs=[];
incorrectIdsArrayCloud=[]
//examIdsArray[`examIdsArray_${Z}_${uid}`] = extractExamIds(Z, uid, Exams);
console.timeEnd("🔵");
console.time("🟣");

const unused_text = Object.values(unusedgroupAData).flat();
const incorrect_text = Object.values(incorrectGroupAData).flat();
const original_text = Object.values(originalGroupAData).flat();
const marked_text = removeDuplicatesAndLog(Object.values(markedGroupAData).flat(), item => item.id);
//console.log("up is markedA");
console.timeEnd("🟣");
console.time("🔷");
  document.getElementById("unused_text_remain_text").innerHTML =unused_text.length;
  document.getElementById("incorrect_text_remain_text").innerHTML = incorrect_text.length;
  document.getElementById("marked_text_remain_text").innerHTML = marked_text.length;
  document.getElementById("all_mode_text_remain_text").innerHTML = original_text.length;      //
console.timeEnd("🔷");
console.time("🔶");

async function saveAll() {
    console.time("🕒 saveAll Duration"); // ⏱ Start timer
  try {
    await Promise.all([
      CombosaveValuesToFirestore()
    ]);
    console.log("✅ Both PouchDB and Firestore saved.");
  } catch (err) {
    console.error("❌ One or both save operations failed:", err);
  }
    console.timeEnd("🕒 saveAll Duration"); // ⏱ End timer

}
await saveAll();
console.timeEnd("🔶");
loadingScreen.style.display='none';

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


function removeDuplicatesAndLog(arr, keyFn) {
  const seen = new Map();
  const duplicates = [];

  arr.forEach(item => {
    const key = keyFn(item);
    if (seen.has(key)) {
      duplicates.push(item); // Found duplicate
    }
    seen.set(key, item); // Always overwrite to "keep last"
  });

  if (duplicates.length) {
    console.log("🔁 Duplicates removed:", duplicates);
  } else {
    console.log("✅ No duplicates found.");
  }
  return Array.from(seen.values());
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

function updateCustom(){
showCustomClass();
}

function showCustomClass(){
document.querySelectorAll('.box').forEach(el => {
    el.style.display = 'none';
});
document.querySelectorAll('.number_label').forEach(el => {
    el.style.display = 'none';
});
document.getElementById('NumberOfQurstions').style.display = 'none';
document.getElementById('textBoxContainer').style.display = 'block';
}


function removeCustomClass (){
document.querySelectorAll('.box').forEach(el => {
    el.style.display = 'block';
});

document.querySelectorAll('.number_label').forEach(el => {
    el.style.display = 'block';
});
document.getElementById('NumberOfQurstions').style.display = 'block';
document.getElementById('textBoxContainer').style.display = 'none';
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


function filterByIds(originalGroupAData, numberArray) {
    const idSet = new Set(numberArray.map(String));

    // Flatten all group arrays into one big array
    const dataArray = Object.values(originalGroupAData).flat();
    const filtered = dataArray.filter(item => idSet.has(item.id));
    return filtered;
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [array[i], array[j]] = [array[j], array[i]];  // swap elements
  }
  return array;
}

function randomizeSliceStickPairs(array, original_array, n) {
    const allPairs = [
        ["2076", "2077"],
        ["8332", "8333"],
        ["10507", "10508"],
        ["2090", "2091"],
        ["2101","2102"],
        ["2086","2087"],
        ["2068","2069"],
        ["2082","2083"],
        ["2110","2111"],
        ["7228","7229"],
        ["7666","7667"],
        ["2074","2075"],
        ["7214","7215"],
        ["2092","2093"],
        ["2084","2085"],
        ["7670","7671"],
        ["2072","2073"],
        ["7226","7227"],
        ["2080","2081"],
        ["2099","2100"],
        ["7218","7219"],
        ["2070","2071"],
        ["2097","2098"],
        ["2061","2062"],
        ["2088","2089"],
        ["7660","7661"],
        ["7238","7239"]
    ];

    // Flatten original_array (nested)
    const flatOriginal = Object.values(original_array).flat()

    // Fisher-Yates shuffle
    function fisherYatesShuffle(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // Step 1: shuffle + slice array
    let shuffled = fisherYatesShuffle([...array]);
    let sliced = shuffled.slice(0, n);

    for (const [id1, id2] of allPairs) {
        const idx1 = sliced.findIndex(el => el.id === id1);
        const idx2 = sliced.findIndex(el => el.id === id2);
        const hasId1 = idx1 !== -1;
        const hasId2 = idx2 !== -1;

        if (hasId1 && hasId2) {
            // Both present → remove both
            const item1 = sliced.splice(idx1, 1)[0];
            const idx2Updated = sliced.findIndex(el => el.id === id2);
            const item2 = sliced.splice(idx2Updated, 1)[0];
            // Insert in correct order
            sliced.unshift(item1, item2); // id1 first, id2 second
        } else if (hasId1 || hasId2) {
            // Only one present → pull twin from original_array
            const presentId = hasId1 ? id1 : id2;
            const missingId = hasId1 ? id2 : id1;
            const presentIdx = hasId1 ? idx1 : idx2;

            const presentItem = sliced.splice(presentIdx, 1)[0];
            const missingItem = flatOriginal.find(el => el.id === missingId);

            if (missingItem) {
                // Remove random to keep length n
                if (sliced.length >= n) {
                    const randomIdx = Math.floor(Math.random() * sliced.length);
                    sliced.splice(randomIdx, 1);
                }
                // Insert in correct order
                if (presentId === id1) {
                    sliced.unshift(presentItem, missingItem); // id1, id2
                } else {
                    sliced.unshift(missingItem, presentItem); // id1, id2
                }
            } else {
                // Twin not found → put presentItem back
                sliced.unshift(presentItem);
            }
        }
        // If none found, do nothing
    }

    // Final trim to ensure exactly n elements
    sliced = sliced.slice(0, n);
    return sliced;
}





/////////////////////////////////////////////

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

////////////////////////////////
  for (const subgroupName in data) {
    result[subgroupName] = [];
  }
////////////////////////////



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

window.extractExamIds = function (Z, uid, Exams) {
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


async function CombosaveValuesToFirestore() {
console.time("🕒 Firestore Save Duration"); // ⏱ Start timer
FinalArray_IDs=Array.from(new Set(FINAL_ARRAY.map(q => q.id)));

const allIds = getAllIdsFromGroupA(unusedgroupAData);
//console.log(allIds)
unusedIdsArrayCloud=allIds;



//console.log("markedIdsArrayCloud",markedIdsArrayCloud);
//console.log("markedIdsArrayCloud",markedIdsArrayCloud);
//console.log("markedIdsArrayCloud",markedIdsArrayCloud);

//console.log("markedIdsArrayCloud",markedIdsArrayCloud);

  if (dbClosed) return;
  if (!uid) {
    console.error("❌ UID not found. Cannot save user-specific data.");
    return;
  }

  try {
  const allData = {
      unusedIdsArrayCloud,
      incorrectIdsArrayCloud,
      markedIdsArrayCloud,
      test_result_index,
      Z,
      icon_visibility,
      number_of_solved_questions,
      SUM,
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


function clickAllGroupAOnceThenMaybeAgain_2() {
  return new Promise(resolve => {
    const checkbox = document.getElementById("allGroupA");
    if (!checkbox) return resolve();

    checkbox.click();

      if (checkbox.checked) {
        checkbox.click();
      }
      resolve();
  });
}


async function deleteCurrentUserData() {
  if (!uid) {
    console.error("❌ UID not found. Cannot delete data.");
    return;
  }

  try {
    await deleteDoc(doc(firestore, "userData", uid));
    console.log(`🗑️ Deleted all Firestore data for UID: ${uid}`);
  } catch (error) {
    console.error("❌ Failed to delete Firestore data:", error);
  }
}




























async function checkSubscription() {
  if (!uid) {
    console.log("❌ No user ID found");
    return false;
  }

  const subscriptionID = localStorage.getItem(`subscriptionID_${uid}`);
  if (!subscriptionID) {
    console.log("❌ No subscription found for this user");
    return false;
  }

  try {
    const res = await fetch(`/check-subscription?subscriptionID=${subscriptionID}`);
    const data = await res.json();

    console.log("Subscription status:", data.status);

    const isActive = data.status === "ACTIVE";
    localStorage.setItem(`isSubscribed_${uid}`, isActive ? "true" : "false");

    return isActive;
  } catch (err) {
    console.error("❌ Error checking subscription:", err);
    return false;
  }
}

