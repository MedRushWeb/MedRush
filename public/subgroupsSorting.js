const unusedgroupAData = {};


async function loadQuestions(file) {
  const res = await fetch(file);
  return await res.json();
}

const groupAIds = Array.from({ length: 13 }, (_, i) => `groupA${i + 1}`);
const groupAFiles = groupAIds.map(id => `${id}_Qs.json`);

const groupAPromises = groupAFiles.map((file, idx) =>

    
  loadQuestions(file).then(data => {
    const id = groupAIds[idx];
    unusedgroupAData[id] = data;

  })

  
);




(async () => {
  await Promise.all(groupAPromises);
  // Continue your logic here after everything is loaded


  


const subgrouping = [  1801 , 20879  ];

const flattened = Object.values(unusedgroupAData).flat();
const sortedData = sortByCustomIdOrder(flattened, subgrouping);
console.log(sortedData);
document.getElementById("myTextBox").value = sortedData.map(q => JSON.stringify(q)).join(',\n\n');





})();


function sortByCustomIdOrder(array, customOrder) {
  const existingIds = new Set(array.map(item => String(item.id)));
  const notFoundIds = [];

  const sorted = customOrder.map(id => {
    const stringId = String(id);
    const found = array.find(item => String(item.id) === stringId);
    if (!found) notFoundIds.push(id);
    return found;
  }).filter(item => item !== undefined);

  if (notFoundIds.length > 0) {
    console.warn("❌ These IDs were not found in the array:", notFoundIds);
  }

  return sorted;
}
