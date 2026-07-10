import jsPDF from "jspdf";

const generatePDF = (analysis) => {

const doc = new jsPDF();

doc.setFontSize(20);

doc.text(
"AI Resume Analysis",
20,
20
);

doc.setFontSize(14);

doc.text(
`ATS Score: ${analysis.atsScore}`,
20,
40
);

doc.text(
"Matching Skills",
20,
60
);

analysis.matchingSkills.forEach(
(skill,index)=>{

doc.text(
`• ${skill}`,
30,
70+index*8
);

}
);

doc.save("ResumeAnalysis.pdf");

};

export default generatePDF;