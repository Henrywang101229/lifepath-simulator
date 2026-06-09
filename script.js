const backgrounds = {
  normal: {
    name: "普通家庭",
    english: 35,
    math: 45,
    social: 45,
    creativity: 40,
    health: 60,
    discipline: 45,
    stress: 30,
    money: 50
  },

  education: {
    name: "教育资源强家庭",
    english: 50,
    math: 55,
    social: 40,
    creativity: 45,
    health: 55,
    discipline: 55,
    stress: 45,
    money: 80
  },

  pressure: {
    name: "经济压力家庭",
    english: 25,
    math: 35,
    social: 50,
    creativity: 45,
    health: 55,
    discipline: 50,
    stress: 55,
    money: 25
  },

  immigrant: {
    name: "移民家庭",
    english: 55,
    math: 35,
    social: 35,
    creativity: 50,
    health: 55,
    discipline: 45,
    stress: 50,
    money: 45
  }
};

function chooseBackground(type) {
  const character = backgrounds[type];

  document.getElementById("result").innerHTML = `
    <h2>${character.name}</h2>
    <p>English: ${character.english}</p >
    <p>Math: ${character.math}</p >
    <p>Social: ${character.social}</p >
    <p>Creativity: ${character.creativity}</p >
    <p>Health: ${character.health}</p >
    <p>Discipline: ${character.discipline}</p >
    <p>Stress: ${character.stress}</p >
    <p>Money: ${character.money}</p >
  `;
}
