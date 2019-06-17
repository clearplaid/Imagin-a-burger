$(document).ready(function() {
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
    $(".create-burger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burgerName").val().trim(),
        devoured: 0
      };
      console.log(newBurger);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new awesome burger!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".burgerToEat").on("click", function(event) {
      event.preventDefault();
      var burgerId = $(this).data("id");
      var burgerDevoured = $(this).data("devoured");
      var updateBurger = {
          devoured: 1
      };
      console.log("burgerId: " + burgerId);
      console.log("burgerDev: " + burgerDevoured);
      console.log("update: " + JSON.stringify(updateBurger));
  
      // Send the UPDATE request.
      $.ajax("/api/burgers/" + burgerId, {
        type: "PUT",
        data: updateBurger
      }).then(
        function() {
          console.log("updated burger: " + burgerDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
});