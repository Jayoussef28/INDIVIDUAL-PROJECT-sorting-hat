const randomHouse = ['Slytherin, Gryffindor, Hufflepuff, Ravenclaw']
const students = [
  { id: 1,
    name: "Harry Potter",
    house: "Gryffindor"
  },
  {
    id: 2,
    name: "Draco Malfoy",
    house: "Slytherin"
  },
  {
    id: 3,
    name: "Bellatrix Lestrange",
    house: "Slytherin"
  },
  {
    id: 4,
    name: "Luna Lovegood",
    house: "Ravenclaw"
  },
  {
    id: 5,
    name: "Cedric Diggory",
    house: "Hufflepuff"
  },
  
];



  const targetingApp = document.querySelector('#first-year')
  const greenBtn = document.getElementById("#green");
  const redBtn = document.getElementById("#red");
  const yellowBtn = document.getElementById("#yellow");
  const blueBtn = document.getElementById("#blue");




  let domString = ""
  students.forEach(student => {
    domString+= `
  <div class="card" style="width: 9rem; display: flex; margin: 10px; padding: 10px">
    <div class-header>
    <h5 class="card-title">${student.name}</h5>
    </div>
    <div class="card-body">
      <p class="card-text">${student.house}</p>
      <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
    </div>
  </div>`;
  });

targetingApp.innerHTML = domString;




const showGreen = () => {
  domString = ''
  <div class="card" style="width: 9rem; display: flex; margin: 10px; padding: 10px">
    <div class-header>
    <h5 class="card-title">${student.name}</h5>
    </div>
    <div class="card-body">
      <p class="card-text">${student.house}</p>
      <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
    </div>
  </div>`;
    }
    
    targetingApp.innerHTML = domString;
    
  });
