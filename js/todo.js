$(document).ready(function() {

  $(".btn-secondary").on("click", function(e) {
    e.preventDefault();

    var newDate = $("#newDate").val();
    var newToDo = $("#newToDo").val();

    var newRow = $("<tr>");
    var dateTd = $("<td>").addClass("date-td").append(newDate);
    var toDoTd = $("<td>").addClass("to-do-td").append(newToDo);
    var removeBtn = $("<button>").addClass("btn btn-danger").append("remove");
    var removeTd = $("<td>").addClass("remove-td").append(removeBtn);
    var checkBtn = $("<button>").addClass("btn btn-success").append("complete");
    var checkTd = $("<td>").addClass("check-td").append(checkBtn);

    newRow.append(dateTd).append(toDoTd).append(removeTd).append(checkTd);
    $("tbody").append(newRow);

    $("#newDate").val("").focus();
    $("#newToDo").val("");
  })

  $("table").on("click", ".btn-danger", function() {
    $(this).parent().parent().remove();
    });

  $("table").on("click", ".btn-success", function() {
    $(this).parent().parent().addClass("tsk-complete"); 
   });

});