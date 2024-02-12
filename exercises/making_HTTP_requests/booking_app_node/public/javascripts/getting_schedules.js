async function getInfo(pathEnd) {
  try {
    let data = await fetch('/api/' + pathEnd);
    let json = await data.json();
    console.log(json);
  } catch (e) {
    console.error(e);
  }
}

let schedules = getInfo('schedules');
