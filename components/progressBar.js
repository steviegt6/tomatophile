export function startTimer() {
  window.setInterval(function () {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = /*Math.round(*/scrollPercent * 100/*)*/;

    if (winHeight >= docHeight) {
      scrollPercentRounded = 100;
    }

    document.getElementById("progress-bar").style.width =
      scrollPercentRounded + "%";
  }, 1);
}
