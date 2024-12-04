//If there is only one element with that class name in the whole html document
//const heroShotContainer = document.querySelector('.hero-shot-container')

//If there is one element with that class name in exerciseBtn
//const heroShotContainer = exerciseBtn.querySelector('.hero-shot-container')

const exerciseBtn = document.querySelectorAll('.exercise-btn');
const exercise = document.querySelectorAll('.exercise');
for (const [i] of exerciseBtn.entries()){
exerciseBtn[i].addEventListener('click', () => {
exercise[i].classList.toggle("js-exercise");
});
}

const studentName = document.querySelectorAll('.student-name');
const studentSection = document.querySelectorAll('.student-section');
for(const [i] of studentName.entries()) {
studentName[i].addEventListener('click', (e) => {
  studentName.forEach((name) => name.classList.remove('js-student-name'));
  studentSection.forEach((section) => section.classList.remove('js-student-section'));
  studentSection[i].classList.add('js-student-section');
  studentName[i].classList.add('js-student-name');
});
}