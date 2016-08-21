$(document).ready(function(){

  // COMPLETE CLICKED TASK
  $('.uncompletedTasksContainer').on('click', '.glyphicon-ok', completeClickedTask);
});

// GET ALL TASKS
function getAllTasks(){
  
}

// GET ALL UNCOMPLETED TASKS FROM DATABASE
function getUncompletedTasks(){

}

// GET ALL COMPLETED TASKS FROM DATABASE
function getCompletedTasks(){

}

// COMPLETE CLICKED TASK - MOVE TO COMPLETED TASKS
function completeClickedTask(){
  console.log('starting completeClickedTask');
}

// DELETE CLICKED TASK - REMOVE FROM DATABASE
function deleteClickedTask(){
  console.log('starting deleteClickedTask');
}
