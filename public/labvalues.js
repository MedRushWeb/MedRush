function showSerumTable() {
    document.getElementById("test-header").textContent = "Serum";

  const body = document.getElementById("serum-table-body");
  const container = document.getElementById("serum-table-container");

  container.style.display = "block";

  const data = `Alanine aminotransferase (ALT)	10-40 U/L
Aspartate aminotransferase (AST)	12-38 U/L
Alkaline phosphatase	25-100 U/L
Amylase	25-125 U/L
Total Bilirubin	0.1-1.0 mg/dL
Direct Bilirubin	0.0-0.3 mg/dL
Calcium	8.4-10.2 mg/dL
Cholesterol - Total (Normal)	<200 mg/dL
Cholesterol - Total (High)	>240 mg/dL
HDL	40-60 mg/dL
LDL	<160 mg/dL
Triglycerides - Normal	<150 mg/dL
Triglycerides - Borderline	151-199 mg/dL
Cortisol - 0800 h	5-23 μg/dL
Cortisol - 1600 h	3-15 μg/dL
Cortisol - 2000 h	<50% of 0800 h
Creatine kinase - Male	25-90 U/L
Creatine kinase - Female	10-70 U/L
Creatinine	0.6-1.2 mg/dL
Urea nitrogen	7-18 mg/dL
Sodium (Na+)	136-146 mEq/L
Potassium (K+)	3.5-5.0 mEq/L
Chloride (Cl-)	95-105 mEq/L
Bicarbonate (HCO3-)	22-28 mEq/L
Magnesium (Mg2+)	1.5-2.0 mEq/L
Ferritin - Male	20-250 ng/mL
Ferritin - Female	10-120 ng/mL
FSH - Male	4-25 mIU/mL
FSH - Female (Premenopause)	4-30 mIU/mL
FSH - Female (Midcycle Peak)	10-90 mIU/mL
FSH - Female (Postmenopause)	40-250 mIU/mL
Glucose - Fasting	70-110 mg/dL
Glucose - Random	<140 mg/dL
GH - Fasting	<5 ng/mL
GH - Provocative Stimuli	>7 ng/mL
Iron - Male	65-175 μg/dL
Iron - Female	50-170 μg/dL
TIBC	250-400 μg/dL
Transferrin	200-360 mg/dL
LDH	45-200 U/L
LH - Male	6-23 mIU/mL
LH - Female (Follicular)	5-30 mIU/mL
LH - Female (Midcycle)	75-150 mIU/mL
LH - Female (Postmenopause)	30-200 mIU/mL
Osmolality	275-295 mOsmol/kg
PTH	10-60 pg/mL
Phosphorus	3.0-4.5 mg/dL
Prolactin - Male	<17 ng/mL
Prolactin - Female	<25 ng/mL
Protein - Total	6.0-7.8 g/dL
Albumin	3.5-5.5 g/dL
Globulin	2.3-3.5 g/dL
Troponin I	<0.04 ng/dL
TSH	0.4-4.0 μU/mL
Thyroid Iodine Uptake	8%-30% / 24 h
Thyroxine (T4)	5-12 μg/dL
Free T4	0.9-1.7 ng/dL
T3	100-200 ng/dL
T3 Resin Uptake	25%-35%
Uric Acid	3.0-8.2 mg/dL
IgA	76-390 mg/dL
IgE	0-380 IU/mL
IgG	650-1500 mg/dL
IgM	50-300 mg/dL
pH (arterial)	7.35-7.45
Pco2 (arterial)	33-45 mm Hg
Po2 (arterial)	75-105 mm Hg`;
    
  body.innerHTML = data.split('\n').map(row => {
    const [test, range] = row.split('\t');
    return `<tr><td>${test}</td><td>${range}</td></tr>`;
  }).join('');
}

function showCSFTable() {
    document.getElementById("test-header").textContent = "Cerebrospinal Fluid";

  const body = document.getElementById("serum-table-body");
  const container = document.getElementById("serum-table-container");

  container.style.display = "block";

  const data = `Cell count	0-5/mm3
Chloride	118-132 mEq/L
Gamma globulin	3%-12% total proteins
Glucose	40-70 mg/dL
Pressure	70-180 mm H2O
Proteins, total	<40 mg/dL`;

  body.innerHTML = data.split('\n').map(row => {
    const [test, range] = row.split('\t');
    return `<tr><td>${test}</td><td>${range}</td></tr>`;
  }).join('');
}


function showBloodTable() {
    document.getElementById("test-header").textContent = "Hematologic";

  const body = document.getElementById("serum-table-body");
  const container = document.getElementById("serum-table-container");

  container.style.display = "block";

  const data = `Erythrocyte count-Male	4.3-5.9 million/mm3
Erythrocyte count-Female	3.5-5.5 million/mm3
ESR-Male	0-15 mm/h
ESR-Female	0-20 mm/h
Hematocrit-Male	41%-53%
Hematocrit-Female	36%-46%
Hemoglobin-Male	13.5-17.5 g/dL
Hemoglobin-Female	12.0-16.0 g/dL
Hemoglobin A1c	≤6%
Hemoglobin, plasma	<4 mg/dL
Leukocyte count (WBC)	4500-11,000/mm3
Neutrophils, segmented	54%-62%
Neutrophils, bands	3%-5%
Eosinophils	1%-3%
Basophils	0%-0.75%
Lymphocytes	25%-33%
Monocytes	3%-7%
CD4+ T-lymphocyte count	≥500/mm3
Platelet count	150,000-400,000/mm3
Reticulocyte count	0.5%-1.5%
D-Dimer	≤250 ng/mL
Partial thromboplastin time (PTT)(activated)	25-40 seconds
Prothrombin time (PT)	11-15 seconds
Mean corpuscular hemoglobin (MCH)	25-35 pg/cell
Mean corpuscular hemoglobin concentration (MCHC)	31%-36% Hb/cell
Mean corpuscular volume (MCV)	80-100 μm3
Plasma Volume-Male\t25-43 mL/kg
Plasma Volume-Female\t28-45 mL/kg
Red cell Volume-Male\t20-36 mL/kg
Red cell Volume-Female\t19-31 mL/kg`;

  body.innerHTML = data.split('\n').map(row => {
    const [test, range] = row.split('\t');
    return `<tr><td>${test}</td><td>${range}</td></tr>`;
  }).join('');
}










function showUrineTable() {
    document.getElementById("test-header").textContent = "Urine";

  const body = document.getElementById("serum-table-body");
  const container = document.getElementById("serum-table-container");

  container.style.display = "block";

  const data = `Calcium	100-300 mg/24 h
Creatine clearance-Male	97-137 mL/min
Creatine clearance-Female	88-128 mL/min
Osmolality	50-1200 mOsmol/kg H2O
Oxalate	8-40 μg/mL
Proteins, total	<150 mg/24 h
17-Hydroxycorticosteroids-Male	3.0-10.0 mg/24 h
17-Hydroxycorticosteroids-Female	2.0-8.0 mg/24 h
17-Ketosteroids, total-Male	8-20 mg/24 h
17-Ketosteroids, total-Female	6-15 mg/24 h
Body Mass Index (BMI) Adult:\t 19-25 kg/m2`;

  body.innerHTML = data.split('\n').map(row => {
    const [test, range] = row.split('\t');
    return `<tr><td>${test}</td><td>${range}</td></tr>`;
  }).join('');
}














function openLabModal() {
  document.getElementById('lab-modal').style.display = 'flex';
}

function closeLabModal() {
  document.getElementById('lab-modal').style.display = 'none';
}