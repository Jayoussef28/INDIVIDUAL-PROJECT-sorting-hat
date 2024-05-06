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

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const targetingApp = document.querySelector ('#first-year');
const allBtn = document.querySelector("#showAll");
const greenBtn = document.querySelector("#green");
const redBtn = document.querySelector("#red");
const yellowBtn = document.querySelector("#yellow");
const blueBtn = document.querySelector("#blue");



  let domString = "";

  students.forEach(student => {
    domString+= `
  <div class="card" style="width: 9rem; display: flex; margin: 10px">
    <div class-header>
    <h3 class="card-title">${student.name}</h3>
    </div>
    <div class="card-body">
      <p class="card-text">${student.house}</p>
      <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
    </div>
  </div>`;
  });

      targetingApp.innerHTML = domString;

  

      const showAllSlytherin = () => {
        domString = ''
        students.forEach((student) => {
          if (student.house === "Slytherin") {
          domString += `<div class="card" style="width: 9rem; display: flex; margin: 10px">
          <div class-header>
          <h3 class="card-title">${student.name}</h3>
          </div>
          <div class="card-body">
            <p class="card-text">${student.house}</p>
            <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
          </div>
        </div>`;
          }
          targetingApp.innerHTML = domString;
          
        });
      
      }




      const showAllGryffindor = () => {
        domString = ''
        students.forEach((student) => {
          if (student.house === "Gryffindor") {
          domString += `<div class="card" style="width: 9rem; display: flex; margin: 10px">
          <div class-header>
          <h3 class="card-title">${student.name}</h3>
          </div>
          <div class="card-body">
            <p class="card-text">${student.house}</p>
            <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
          </div>
        </div>`;
          }
          targetingApp.innerHTML = domString;
          
        });
      
      } 



      const showAllHufflepuff = () => {
        domString = ''
        students.forEach((student) => {
          if (student.house === "Hufflepuff") {
          domString += `<div class="card" style="width: 9rem; display: flex; margin: 10px">
          <div class-header>
          <h3 class="card-title">${student.name}</h3>
          </div>
          <div class="card-body">
            <p class="card-text">${student.house}</p>
            <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
          </div>
        </div>`;
          }
          targetingApp.innerHTML = domString;
          
        });
      
      }





      const showAllRavenclaw = () => {
        domString = ''
        students.forEach((student) => {
          if (student.house === "Ravenclaw") {
          domString += `<div class="card" style="width: 9rem; display: flex; margin: 10px">
          <div class-header>
          <h3 class="card-title">${student.name}</h3>
          </div>
          <div class="card-body">
            <p class="card-text">${student.house}</p>
            <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
          </div>
        </div>`;
          }
          targetingApp.innerHTML = domString;
          
        });
      
      }



      const showAll = () => {
      students.forEach(student => {
        domString+= `
      <div class="card" style="width: 9rem; display: flex; margin: 10px">
        <div class-header>
        <h3 class="card-title">${student.name}</h3>
        </div>
        <div class="card-body">
          <p class="card-text">${student.house}</p>
          <button class="btn btn-danger" id="delete--${student.id}">Expel</button>
        </div>
      </div>`;
      })
    
          targetingApp.innerHTML = domString;
    }





    const form = document.querySelector('form')


      const createStudent = (e) => {
        domString = ""
        e.preventDefault();
        const newStudent =  {
          id: students.length + 1,
          name: document.getElementById("studentName").value,

        }
        students.push(newStudent)
        showAll()
        form.reset()
      }
      form.addEventListener("submit", createStudent)








 allBtn.addEventListener("click", showAll)
greenBtn.addEventListener("click", showAllSlytherin)
redBtn.addEventListener("click", showAllGryffindor)
yellowBtn.addEventListener("click", showAllHufflepuff)
blueBtn.addEventListener("click", showAllRavenclaw)
