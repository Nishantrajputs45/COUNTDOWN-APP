const userDay = document.querySelector("#day");
const userHour = document.querySelector("#hour");
const userMinute = document.querySelector("#minute");
const userSecond = document.querySelector("#second");
const result = document.querySelector(".result");

let dataInMilliSecond = 0;
let setIntervalResult;
function countDownStart() {
  if (userDay) {
    dataInMilliSecond =
      dataInMilliSecond + Number(userDay.value) * 24 * 60 * 60 * 1000;
  }
  if (userHour) {
    dataInMilliSecond =
      dataInMilliSecond + Number(userHour.value) * 60 * 60 * 1000;
  }
  if (userMinute) {
    dataInMilliSecond =
      dataInMilliSecond + Number(userMinute.value) * 60 * 1000;
  }
  if (userSecond) {
    dataInMilliSecond = dataInMilliSecond + Number(userSecond.value) * 1000;
  }
  if (dataInMilliSecond > 0) {
    setIntervalResult = setInterval(() => {
      dataInMilliSecond = dataInMilliSecond - 100;
      if (dataInMilliSecond === 0) {
        clearInterval(setIntervalResult);
      }
      let day = "";
      let hour = "";
      let minute = "";
      let second = "";
      if (Math.floor(dataInMilliSecond / (24 * 60 * 60 * 1000)) < 10) {
        day = "0" + day + Math.floor(dataInMilliSecond / (24 * 60 * 60 * 1000));
      } else {
        day = day + Math.floor(dataInMilliSecond / (24 * 60 * 60 * 1000));
      }
      if (
        Math.floor(
          (dataInMilliSecond % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
        ) < 10
      ) {
        hour =
          "0" +
          hour +
          Math.floor(
            (dataInMilliSecond % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
          );
      } else {
        hour =
          hour +
          Math.floor(
            (dataInMilliSecond % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
          );
      }
      if (
        minute +
          Math.floor((dataInMilliSecond % (60 * 60 * 1000)) / (60 * 1000)) <
        10
      ) {
        minute =
          "0" +
          minute +
          Math.floor((dataInMilliSecond % (60 * 60 * 1000)) / (60 * 1000));
      } else {
        minute =
          minute +
          Math.floor((dataInMilliSecond % (60 * 60 * 1000)) / (60 * 1000));
      }
      if (second + Math.floor((dataInMilliSecond % (60 * 1000)) / 1000) < 10) {
        second =
          "0" + second + Math.floor((dataInMilliSecond % (60 * 1000)) / 1000);
      } else {
        second = second + Math.floor((dataInMilliSecond % (60 * 1000)) / 1000);
      }
      result.innerText =
        "Day : " +
        day +
        " Hour : " +
        hour +
        " Minute : " +
        minute +
        " Second : " +
        second;
    }, 100);
  }
}
