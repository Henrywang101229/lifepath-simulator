function chooseNormalFamily() {
  let english = 35;
  let math = 45;
  let stress = 30;
  let money = 50;

  document.getElementById("result").innerHTML = `
    <h2>普通家庭</h2>
    <p>English: ${english}</p >
    <p>Math: ${math}</p >
    <p>Stress: ${stress}</p >
    <p>Money: ${money}</p >
  `;
}
