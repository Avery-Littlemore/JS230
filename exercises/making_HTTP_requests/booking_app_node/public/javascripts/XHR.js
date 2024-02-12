function makeRequest(endpoint) {
  return new Promise(res => {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/' + endpoint);
    request.responseType = 'json';

    request.addEventListener('load', () => {
      res(request.response);
    });

    request.send();
  });
}

makeRequest('staff_members').then(res => console.log(res));
makeRequest('students').then(res => console.log(res));
makeRequest('schedules').then(res => console.log(res.filter(obj => obj.student_email !== null)));