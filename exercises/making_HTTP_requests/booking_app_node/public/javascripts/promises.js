async function getInfo(pathEnd) {
  try {
    let data = await fetch('/api/' + pathEnd);
    let json = await data.json();
    console.log(json);
  } catch (e) {
    console.error(e);
  }
}

let staff = getInfo('staff_members');
let students = getInfo('students');
let schedules = getInfo('schedules');

// fetchRequest('staff_members').then(res => console.log(res));
// fetchRequest('students').then(res => console.log(res));
// fetchRequest('schedules').then(res => console.log(res.filter(obj => obj.student_email !== null)));

// console.log(staff)

// makeRequest().then(res => console.log(res));
// makeRequest().then(res => console.log(res));
// makeRequest().then(res => console.log(res.filter(obj => obj.student_email !== null)));