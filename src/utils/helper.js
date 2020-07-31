export function getRuntime(runtime) {
  let hour = runtime / 60;
  let minute = runtime % 60;
  let time = Math.floor(hour) + 'h ' + minute + 'm';
  return time;
}

export function getGenres(data) {
  let str = '';
  for (let i = 0; i < data.length; i++) {
    str = str + data[i].name + ', ';
  }
  return str.substring(0, str.length - 2);
}

export function getVideoID(data) {
  let idList = [];
  for (let i = 0; i < data.length; i++) {
    idList.push(data[i].key);
  }
  return idList;
}

export function getGender(int) {
  let gender = 'Male';
  if (int === 1) {
    gender = 'Female';
    return gender;
  }
  return gender;
}
