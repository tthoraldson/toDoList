$(document).ready(function(){
  // DISPLAY ALL TASKS FROM DATABASE
  getAllTasks();

  // COMPLETE CLICKED TASK
  $('.uncompletedTasksContainer').on('click', '.glyphicon-ok', completeClickedTask);

  // DELETE CLICKED TASK
  $('.uncompletedTasksContainer').on('click', '.glyphicon-remove', deleteClickedTask);

  // ADD TASK TO SERVER
  $('.addTask').on('click', '#addTask', postTask);

});

// GET ALL TASKS
function getAllTasks(){
  getUncompletedTasks()
  getCompletedTasks()
}

// GET ALL UNCOMPLETED TASKS FROM DATABASE
function getUncompletedTasks(){
  $.ajax({
  type: 'GET',
  url: '/uncompletedTasks',
  success: function(tasks) {
    console.log(tasks);
    $('.uncompletedTasksContainer').empty();
    console.log('GET /uncompletedTasks returns:', tasks);
    tasks.forEach(function(task, i) {
      var $el = $('<li class="list-group-item" data-id="' + task.id + '"><span class="glyphicon glyphicon-ok" alt="complete task"></span>&nbsp;&nbsp;<span class="glyphicon glyphicon-remove" alt="delete task">&nbsp;&nbsp;</span><span>' + task.task + '</span></li>')
      $('.uncompletedTasksContainer').append($el);
    });
  },
  error: function(response) {
    console.log('Getting Tasks failed...');
    $('uncompletedTasksContainer').empty();
    $('uncompletedTasksContainer').append('<div class="alert alert-danger fade in" role="alert"><b>Error!</b> Looks like there was a problem loading Uncompleted Tasks!</div>')
  }
});
}

// GET ALL COMPLETED TASKS FROM DATABASE
function getCompletedTasks(){
  $.ajax({
  type: 'GET',
  url: '/completedTasks',
  success: function(tasks) {
    console.log(tasks);
    $('.completedTasksContainer').empty();
    console.log('GET /completedTasks returns:', tasks);
    tasks.forEach(function(task, i) {
      var $el = $('<li class="list-group-item" data-id="' + task.id + '"><span>' + task.task + '</span></li>')
      $('.completedTasksContainer').append($el);
    });
  },
  error: function(response) {
    console.log('Getting Completed Tasks failed...');
    $('completedTasksContainer').empty();
    $('completedTasksContainer').append('<div class="alert alert-danger fade in" role="alert"><b>Error!</b> Looks like there was a problem loading Completed Tasks!</div>')
  }
});
}

// COMPLETE CLICKED TASK - MOVE TO COMPLETED TASKS
function completeClickedTask(){
  console.log('starting completeClickedTask');
}

// DELETE CLICKED TASK - REMOVE FROM DATABASE
function deleteClickedTask(){
  console.log('starting deleteClickedTask');
}

// ADD TASK TO DATABASE
function postTask(){
  console.log('starting postTask');
}
