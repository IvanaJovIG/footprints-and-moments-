//If there is only one element with that class name in the whole html document
//const heroShotContainer = document.querySelector('.hero-shot-container')

//If there is one element with that class name in exerciseBtn
//const heroShotContainer = exerciseBtn.querySelector('.hero-shot-container')

const exerciseBtn = document.querySelectorAll('.exercise-btn');
const exercise = document.querySelectorAll('.exercise');
//Exercises open and close (toggle) but they can be seen all open
// for (const [i] of exerciseBtn.entries()){
// exerciseBtn[i].addEventListener('click', () => {
// exercise[i].classList.toggle("js-exercise");
// });
// }

//Exercises can be open only one at a time but they toggle too
exerciseBtn && exerciseBtn.forEach((el) => {
  el.addEventListener('click', (e) => {
    let currentExercise = e.target;
    //console.log(el)
    if (currentExercise.innerText == "TITLES") {
      document.getElementById('titles').classList.toggle("js-exercise");
    }  else {
      document.getElementById('titles').classList.remove("js-exercise");
    }
    if (currentExercise.innerText == "LISTS") {
      document.getElementById('lists').classList.toggle("js-exercise");
    }else {
      document.getElementById('lists').classList.remove("js-exercise");

    }
    if (currentExercise.innerText == "TABLE") {
      document.getElementById('table').classList.toggle("js-exercise");
    } else {
      document.getElementById('table').classList.remove("js-exercise")

    }
  })
})

// exerciseBtn && exerciseBtn.forEach((el) => {
//   el.addEventListener('click', (e) => {
//     let currentExercise = exercise;
// exercise.forEach((el) => {
//   if (el == currentExercise) {
//     exercise.classList.toggle('js-exercise');
//   } else {
//     el.classList.remove('js-exercise')
//   }
// })
//   })
// })

const studentName = document.querySelectorAll('.student-name');
const studentSection = document.querySelectorAll('.student-section');
for(const [i] of studentName.entries()) {
studentName[i].addEventListener('click', (e) => {
  studentName.forEach((name) => name.classList.remove('js-student-name'));
  studentSection.forEach((section) => section.classList.remove('js-student-section'));
  studentSection[i].classList.add('js-student-section');
  studentName[i].classList.add('js-student-name');
});
};
//Changing footer by name
const studentFooterBtn = document.querySelectorAll('.student-footer-btn');
const studentFooter = document.querySelectorAll('.student-footer');

for(const [j] of studentFooterBtn.entries()) {
  //console.log(studentFooterBtn[j].length)
  //studentFooter[j].style.display = "none";
  studentFooterBtn[j].addEventListener('click', () => {
    studentFooter.forEach((student) => student.classList.remove('js-student-footer'));
    studentFooter[j].classList.add('js-student-footer');
    //console.log(studentFooterBtn[j] + "clicked")
   // studentFooter[j].style.display = "block"

  })
}