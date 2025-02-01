import fs from  'node:fs';

export type CollegeData = {
  name: string;
  acceptedStudents: number;
  appliedStudents: number;
  localAcceptanceRate: number;
  nationalAcceptanceRate: number;
}

function CDB(name: string, acceptedStudents: number, appliedStudents: number, nationalAcceptanceRate: number): CollegeData {
  return {
    name,
    acceptedStudents,
    appliedStudents,
    localAcceptanceRate: Math.floor((acceptedStudents / appliedStudents) * 100),
    nationalAcceptanceRate
  }
}

const AdmissionsData: CollegeData[] = [
  CDB('Boston College', 7, 59, 18),
  CDB('Tufts University', 7, 47, 9),
  CDB('Boston University', 29, 112, 18),
  CDB('Worcester Polytechnic Institute', 8, 30, 60),
  CDB('Providence College', 8, 25, 48),
  CDB('Brandeis University', 7, 20, 31),
  CDB('University of Massachusetts Amherst', 65, 153, 58),
  CDB('Northeastern University', 57, 132, 19),
  CDB('Syracuse University', 10, 20, 49),
  CDB('Clark University', 12, 23, 42),
  CDB('University of Rhode Island', 12, 22, 69),
  CDB('University of Connecticut', 27, 40, 48),
  CDB('Bentley University', 23, 34, 43),
  CDB('Emmanuel College', 36, 52, 77),
  CDB('University of New Hampshire', 24, 48, 76),
  CDB('University of Massachusetts Lowell', 99, 130, 71),
  CDB('Suffolk University', 57, 74, 78),
  CDB('Simmons University', 26, 33, 69),
  CDB('Framingham State University', 32, 40, 82),
  CDB('Pennsylvania State University', 14, 17, 56),
  CDB('University of Massachusetts Boston', 142, 171, 77),
  CDB('University of Massachusetts Dartmouth', 59, 70, 77),
  CDB('Wentworth Institute of Technology', 44, 51, 85),
  CDB('Salem State University', 46, 53, 66),
  CDB('Bridgewater State University', 54, 62, 90),
  CDB('Curry College', 43, 46, 78),
  CDB('Massachusetts College of Pharmacy and Health Sciences', 29, 31, 93),
  CDB('Lesley University', 18, 19, 75),
  CDB('Fitchburg State University', 17, 22, 77),
]

const jsonData = JSON.stringify(AdmissionsData, null, 2);

fs.writeFile('admissionsData.json', jsonData, (err) => {
  if (err) console.error(err);
  else {
    console.log('it worked!');
  }
})