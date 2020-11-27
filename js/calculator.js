var calcView = document.getElementById('calcView');

function pushBtn(obj) {
  var pushed = obj.innerHTML;

  if (pushed == '=') {
    calcView.innerHTML = eval(calcView.innerHTML);

  } else if (pushed == 'AC') {
    calcView.innerHTML = '0';
  } else {
    if (calcView.innerHTML == '0') {
        calcView.innerHTML = pushed;
    } else {
       calcView.innerHTML += pushed;
    }
  }
}

function calcAverage() {
    return nums.reduce((a, b) => (a + b)) / nums.length;

}