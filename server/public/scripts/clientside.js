$(document).ready(function(){
  // DISPLAY ALL TASKS FROM DATABASE
  getAllTasks();

  // COMPLETE CLICKED TASK
  $('.uncompletedTasksContainer').on('click', '.glyphicon-ok', completeClickedTask);

  // DELETE CLICKED TASK
  $('.uncompletedTasksContainer').on('click', '.glyphicon-remove', deleteClickedTask);

  // ADD TASK TO SERVER
  $('.addTask').on('click', '#submit', postTask);

  //

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
    console.log('GET /uncompletedTasks returns:', tasks);
    $('.uncompletedTasksContainer').empty();
    if (tasks.length < 1) {
      $('.uncompletedTasksContainer').append('<div class="alert alert-info" role="alert"><b>All tasks completed!</b> Try adding some new tasks to your to-do list!<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>');
    }
    else {
      tasks.forEach(function(task, i) {
        var $el = $('<li class="list-group-item" data-id="' + task.id + '"><span class="glyphicon glyphicon-ok" alt="complete task"></span>&nbsp;&nbsp;<span class="glyphicon glyphicon-remove" alt="delete task">&nbsp;&nbsp;</span><span>' + task.task + '</span></li>')
        $('.uncompletedTasksContainer').append($el);
      });
      }
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
    console.log('GET /completedTasks returns:', tasks);
    $('.completedTasksContainer').empty();
    if (tasks.length < 1) {
      $('.completedTasksContainer').append('<div class="alert alert-info" role="alert"><b>Nothing to show here...</b> Try completing a task to make it show here!<a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>');
    }
    else {
      tasks.forEach(function(task, i) {
        var $el = $('<li class="list-group-item" data-id="' + task.id + '"><span>' + task.task + '</span></li>')
        $('.completedTasksContainer').append($el);
      })
    }
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
  var taskID = $(this).parent().data('id');
  $.ajax({
    type: 'PUT',
    data: taskID,
    url: '/completeClickedTask/' + taskID,
    success: function(){
      console.log(taskID);
      console.log('PUT /completedClickedTask/' + taskID + ' success!');
      getAllTasks();
    },
    error: function(){
      console.log('ERROR PUT /books/' + taskID);
    }
  });
}

// DELETE CLICKED TASK - REMOVE FROM DATABASE
function deleteClickedTask(){
  console.log('starting deleteClickedTask');
  var deleteConfirm = confirm('Are you sure you want to delete this task?');
  if (deleteConfirm){
    var taskID = $(this).parent().data('id');

    $.ajax({
      type: 'DELETE',
      url: '/deleteClickedTask/' + taskID,
      success: function(){
        console.log('DELETE success');
        getAllTasks();
      },
      error: function(){
        console.log('DELETE failed');
      }
    });
  }
}

// ADD TASK TO DATABASE
function postTask(){
  console.log('starting postTask');
  event.preventDefault();

  var task = {};

  $.each($('#taskForm').serializeArray(), function (i, field) {
    task[field.name] = field.value;
  });

  console.log('task: ', task);

  $.ajax({
    type: 'POST',
    url: '/postTask',
    data: task,
    success: function () {
      console.log('POST /books works!');
      $('.modalAlerts').empty();
      $('.modalAlerts').append('<div class="alert alert-success fade in" role="alert"><b>Success!</b> The task was added successfully!</div>');
      getAllTasks();

      	$('#task').val('');
    },

    error: function (response) {
      console.log('POST /postTask does not work...');
    },
  });
}
