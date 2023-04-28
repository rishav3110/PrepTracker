const taskList = document.querySelector('#task-list');
const progress = document.querySelector('#progress');
const percentage = document.querySelector('#percentage');

function updateProgress() {
  const checkboxes = taskList.querySelectorAll('input[type="checkbox"]');
  const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
  const progressPercentage = (checkedCount / checkboxes.length) * 100;
  progress.style.width = progressPercentage + '%';
  percentage.innerText = Math.floor(progressPercentage) + '%';
}

updateProgress();
