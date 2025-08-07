export function updateUnused() {
/////////////////////////

  removeCustomClass();

  const selectedSet = new Set();

  // Refresh A counts
  let totalAllA = 0;
  for (let i = 1; i <= 13; i++) {
    const id = `groupA${i}`;
    const data = unusedgroupAData[id] || [];
    totalAllA += data.length;
    const el = document.getElementById(`count${id}`);
    if (el) el.textContent = data.length;

    const cb = document.getElementById(id);
    if (cb) {
      if (data.length === 0) {
        cb.checked = false;
        cb.disabled = true;
        cb.closest("label").classList.add("disabled");



          el.parentElement.style.color = "gray";
       



      } else {
        cb.disabled = false;
        cb.closest("label").classList.remove("disabled");


          el.parentElement.style.color = "black";
       



      }
    }

    if (cb && cb.checked) {
      data.forEach(q => selectedSet.add(q.id));
    }
  }
//


const dedupedArray = Object.values(unusedgroupAData).flat();

document.getElementById("countAllA").textContent = dedupedArray.length;


const allACheckbox = document.getElementById("allGroupA");
  if (allACheckbox) {
    if (totalAllA === 0) {
      allACheckbox.checked = false;
      allACheckbox.disabled = true;
      allACheckbox.closest("label").classList.add("disabled");

    } else {
      allACheckbox.disabled = false;
      allACheckbox.closest("label").classList.remove("disabled");
    }
  }

  // Update selected count
  document.getElementById("selectedCount").textContent = `Selected: ${selectedSet.size}`;

  // Group B overlap
  const selectedB = [];
  let totalOverlapB = 0;

  Object.entries(unusedgroupBData).forEach(([id, arr]) => {
    const box = document.getElementById(id);
    const span = document.getElementById(`overlap${id}`);
    const overlap = arr.filter(q => selectedSet.has(q.id));
    if (span) span.textContent = overlap.length;
    totalOverlapB += overlap.length;


 //   console.log("selectedSet",selectedSet);
  //          console.log("id",id);
  //          console.log("arr",arr);
  //      console.log("span",overlap);
  //      console.log("totalOverlapB",totalOverlapB);
  //     console.log("overlap",overlap);

    if (box) {
      if (overlap.length === 0) {
        box.checked = false;
        box.disabled = true;
        box.closest("label").classList.add("disabled");
    


      } else {
        box.disabled = false;
        box.closest("label").classList.remove("disabled");
      }


    span.parentElement.style.color = "black"; // make the label text gray


      
  if (id.includes("_") && box && box.checked) {
    selectedB.push(...overlap);
  }


    }

  });

  // All Group B logic
  const groupBAll = document.getElementById("groupB_all");

  
  const spanAll = document.getElementById("overlapgroupB_all");

  if (spanAll) {

    const dedupedArray = Object.values(unusedgroupBData).flat();
    spanAll.textContent = dedupedArray.length;
    
  }


  if (groupBAll) {
    if (totalOverlapB === 0) {
      groupBAll.checked = false;
      groupBAll.disabled = true;
      groupBAll.closest("label").classList.add("disabled");

    } else {
      groupBAll.disabled = false;
      groupBAll.closest("label").classList.remove("disabled");
    }
  }

  const unique = {};
  selectedB.forEach(q => unique[q.id] = q);
  const overlaps = Object.values(unique);
  selectedOverlappingQuestions = overlaps;

//  console.log("selectedA",selectedSet);
//  console.log("selectedB",selectedB);
//  console.log("selectedOverlappingQuestions",selectedOverlappingQuestions);

    const unused_text = Object.values(unusedgroupAData).flat();
    const incorrect_text = Object.values(incorrectGroupAData).flat();
    const original_text = Object.values(originalGroupAData).flat();
// i will change later when  i make sure they do not have duplicates
    const marked_text = removeDuplicatesAndLog(Object.values(markedGroupAData).flat(), item => item.id);
//console.log("up is markedA");

      document.getElementById("unused_text_remain_text").innerHTML =unused_text.length;
      document.getElementById("incorrect_text_remain_text").innerHTML = incorrect_text.length;
      document.getElementById("marked_text_remain_text").innerHTML = marked_text.length;
      document.getElementById("all_mode_text_remain_text").innerHTML = original_text.length;    



updateAllMainGroupOverlaps();      
syncAllGroupBParents();
disableParentIfAllSubgroupsDisabled();

document.getElementById("selectedCountB").textContent = `Selected: ${selectedOverlappingQuestions.length}`;




    }







export function updateMarked() {
////////////////////////////

  removeCustomClass();
  const selectedSet = new Set();

  // Refresh A counts
  let totalAllA = 0;
  for (let i = 1; i <= 13; i++) {
    const id = `groupA${i}`;
    const data = markedGroupAData[id] || [];
    totalAllA += data.length;
    const el = document.getElementById(`count${id}`);
    if (el) el.textContent = data.length;

    const cb = document.getElementById(id);
    if (cb) {
      if (data.length === 0) {
        cb.checked = false;
        cb.disabled = true;
        cb.closest("label").classList.add("disabled");



      el.parentElement.style.color = "gray";



                  
      } else {
        cb.disabled = false;
        cb.closest("label").classList.remove("disabled");

          el.parentElement.style.color = "black";


      }
    }

    if (cb && cb.checked) {
      data.forEach(q => selectedSet.add(q.id));
    }
  }

 const dedupedArray = removeDuplicatesAndLog(Object.values(markedGroupAData).flat(), item => item.id);
 console.log("up is markedA");
 document.getElementById("countAllA").textContent = dedupedArray.length;

 const allACheckbox = document.getElementById("allGroupA");
  if (allACheckbox) {
    if (totalAllA === 0) {
      allACheckbox.checked = false;
      allACheckbox.disabled = true;
      allACheckbox.closest("label").classList.add("disabled");
    } else {
      allACheckbox.disabled = false;
      allACheckbox.closest("label").classList.remove("disabled");
    }
  }

  // Update selected count
  document.getElementById("selectedCount").textContent = `Selected: ${selectedSet.size}`;

  // Group B overlap
  const selectedB = [];
  let totalOverlapB = 0;

  Object.entries(markedGroupBData).forEach(([id, arr]) => {
    const box = document.getElementById(id);
    const span = document.getElementById(`overlap${id}`);
    const overlap = arr.filter(q => selectedSet.has(q.id));
    if (span) span.textContent = overlap.length;
    totalOverlapB += overlap.length;




//console.log("markedGroupAData",markedGroupBData)

//console.log("markedGroupAData",markedGroupAData)
//console.log("selectedSet",selectedSet);
  //          console.log("id",id);
    //        console.log("arr",arr);
      //      console.log("span",overlap);
      //  console.log("totalOverlapB",totalOverlapB);
      //  console.log("overlap",overlap);


    if (box) {
      if (overlap.length === 0) {
        box.checked = false;
        box.disabled = true;
        box.closest("label").classList.add("disabled");



      } else {
        box.disabled = false;
        box.closest("label").classList.remove("disabled");
      }

  if (id.includes("_") && box && box.checked) {
    selectedB.push(...overlap);
  }
}
  });

  // All Group B logic
  const groupBAll = document.getElementById("groupB_all");
  const spanAll = document.getElementById("overlapgroupB_all");
  
  if (spanAll) {
    const dedupedArray = removeDuplicatesAndLog(Object.values(markedGroupBData).flat(), item => item.id);
   // console.log("up is markedB");
    spanAll.textContent = dedupedArray.length;
  }

  if (groupBAll) {
    if (totalOverlapB === 0) {
      groupBAll.checked = false;
      groupBAll.disabled = true;
      groupBAll.closest("label").classList.add("disabled");
    } else {
      groupBAll.disabled = false;
      groupBAll.closest("label").classList.remove("disabled");
    }
  }

  const unique = {};
  selectedB.forEach(q => unique[q.id] = q);
  const overlaps = Object.values(unique);
  selectedOverlappingQuestions = overlaps;

updateAllMainGroupOverlaps();      
syncAllGroupBParents();
disableParentIfAllSubgroupsDisabled();

document.getElementById("selectedCountB").textContent = `Selected: ${selectedOverlappingQuestions.length}`;

}















export function updateOriginal() {
////////////////////////////


    removeCustomClass();
  const selectedSet = new Set();
  // Refresh A counts
  let totalAllA = 0;
  for (let i = 1; i <= 13; i++) {
    const id = `groupA${i}`;
    const data = originalGroupAData[id] || [];
    totalAllA += data.length;
    const el = document.getElementById(`count${id}`);
    if (el) el.textContent = data.length;

    const cb = document.getElementById(id);
    if (cb) {
      if (data.length === 0) {
        cb.checked = false;
        cb.disabled = true;
        cb.closest("label").classList.add("disabled");


          el.parentElement.style.color = "gray";
       


      } else {
        cb.disabled = false;
        cb.closest("label").classList.remove("disabled");


        el.parentElement.style.color = "black";


      }
    }

    if (cb && cb.checked) {
      data.forEach(q => selectedSet.add(q.id));
    }
  }

const dedupedArray = Object.values(originalGroupAData).flat();
document.getElementById("countAllA").textContent = dedupedArray.length;

  const allACheckbox = document.getElementById("allGroupA");
  if (allACheckbox) {
    if (totalAllA === 0) {
      allACheckbox.checked = false;
      allACheckbox.disabled = true;
      allACheckbox.closest("label").classList.add("disabled");
    } else {
      allACheckbox.disabled = false;
      allACheckbox.closest("label").classList.remove("disabled");
    }
  }
  // Update selected count
  document.getElementById("selectedCount").textContent = `Selected: ${selectedSet.size}`;

  // Group B overlap
  const selectedB = [];
  let totalOverlapB = 0;

  Object.entries(originalGroupBData).forEach(([id, arr]) => {
    const box = document.getElementById(id);
    const span = document.getElementById(`overlap${id}`);
    const overlap = arr.filter(q => selectedSet.has(q.id));
    if (span) span.textContent = overlap.length;
    totalOverlapB += overlap.length;

  //  console.log("selectedSet",selectedSet);
   //         console.log("id",id);
   //         console.log("arr",arr);
   //         console.log("span",overlap);
   //     console.log("totalOverlapB",totalOverlapB);
   //    console.log("overlap",overlap);


    if (box) {
      if (overlap.length === 0) {
        box.checked = false;
        box.disabled = true;
        box.closest("label").classList.add("disabled");
      } else {
        box.disabled = false;
        box.closest("label").classList.remove("disabled");
      }

  if (id.includes("_") && box && box.checked) {
    selectedB.push(...overlap);
  }
}
  });

  // All Group B logic
  const groupBAll = document.getElementById("groupB_all");
  const spanAll = document.getElementById("overlapgroupB_all");

 // if (spanAll) spanAll.textContent = totalOverlapB;
 if (spanAll) {

  const dedupedArray = Object.values(originalGroupBData).flat();
  spanAll.textContent = dedupedArray.length;
}

  if (groupBAll) {
    if (totalOverlapB === 0) {
      groupBAll.checked = false;
      groupBAll.disabled = true;
      groupBAll.closest("label").classList.add("disabled");
    } else {
      groupBAll.disabled = false;
      groupBAll.closest("label").classList.remove("disabled");
    }
  }

  const unique = {};
  selectedB.forEach(q => unique[q.id] = q);
  const overlaps = Object.values(unique);
  selectedOverlappingQuestions = overlaps;

updateAllMainGroupOverlaps();      
syncAllGroupBParents();
disableParentIfAllSubgroupsDisabled();


document.getElementById("selectedCountB").textContent = `Selected: ${selectedOverlappingQuestions.length}`;

}





export function updateIncorrect() {

////////////////////////////


    removeCustomClass();
  const selectedSet = new Set();

  // Refresh A counts
  let totalAllA = 0;
  for (let i = 1; i <= 13; i++) {
    const id = `groupA${i}`;
    const data = incorrectGroupAData[id] || [];
    totalAllA += data.length;
    const el = document.getElementById(`count${id}`);
    if (el) el.textContent = data.length;

    const cb = document.getElementById(id);
    if (cb) {
      if (data.length === 0) {
        cb.checked = false;
        cb.disabled = true;
        cb.closest("label").classList.add("disabled");



          el.parentElement.style.color = "gray";
       
       
       

      } else {
        cb.disabled = false;
        cb.closest("label").classList.remove("disabled");

          el.parentElement.style.color = "black";





      }
    }

    if (cb && cb.checked) {
      data.forEach(q => selectedSet.add(q.id));
    }
  }

  const dedupedArray = Object.values(incorrectGroupAData).flat();
  document.getElementById("countAllA").textContent = dedupedArray.length;
  const allACheckbox = document.getElementById("allGroupA");

  if (allACheckbox) {
    if (totalAllA === 0) {
      allACheckbox.checked = false;
      allACheckbox.disabled = true;
      allACheckbox.closest("label").classList.add("disabled");
    } else {
      allACheckbox.disabled = false;
      allACheckbox.closest("label").classList.remove("disabled");
    }
  }

  // Update selected count
  document.getElementById("selectedCount").textContent = `Selected: ${selectedSet.size}`;

  // Group B overlap
  const selectedB = [];
  let totalOverlapB = 0;

  Object.entries(incorrectGroupBData).forEach(([id, arr]) => {
    const box = document.getElementById(id);
    const span = document.getElementById(`overlap${id}`);
    const overlap = arr.filter(q => selectedSet.has(q.id));
    if (span) span.textContent = overlap.length;
    totalOverlapB += overlap.length;

   // console.log("selectedSet",selectedSet);
    //        console.log("id",id);
     //       console.log("arr",arr);
      //      console.log("span",overlap);
      //  console.log("totalOverlapB",totalOverlapB);
      // console.log("overlap",overlap);


    if (box) {
      if (overlap.length === 0) {
        box.checked = false;
        box.disabled = true;
        box.closest("label").classList.add("disabled");
      } else {
        box.disabled = false;
        box.closest("label").classList.remove("disabled");
      }
  if (id.includes("_") && box && box.checked) {
    selectedB.push(...overlap);
  }

}
  });

  // All Group B logic
  const groupBAll = document.getElementById("groupB_all");
  const spanAll = document.getElementById("overlapgroupB_all");
 if (spanAll) {
  const dedupedArray = Object.values(incorrectGroupBData).flat();
  spanAll.textContent = dedupedArray.length;
}
  if (groupBAll) {
    if (totalOverlapB === 0) {
      groupBAll.checked = false;
      groupBAll.disabled = true;
      groupBAll.closest("label").classList.add("disabled");
    } else {
      groupBAll.disabled = false;
      groupBAll.closest("label").classList.remove("disabled");
    }
  }
  const unique = {};
  selectedB.forEach(q => unique[q.id] = q);
  const overlaps = Object.values(unique);
  selectedOverlappingQuestions = overlaps;



updateAllMainGroupOverlaps();      
syncAllGroupBParents();
disableParentIfAllSubgroupsDisabled();

document.getElementById("selectedCountB").textContent = `Selected: ${selectedOverlappingQuestions.length}`;


}






export function updateMainGroupOverlap(groupId, count) {
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