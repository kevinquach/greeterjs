'use strict';


$('#greet-form').on('submit', function(e){
  e.preventDefault();
  var name = $('#name').val();
  var numberOfGreets = $('#number-of-greets').val();
  $("#greeter li").remove();
  if(name !== '' && numberOfGreets !== ''){

     var numGreets = parseInt(numberOfGreets);

    for(var i = 0; i < numGreets; i++) {
      var $li = $("<li>").html("Hi there, " + name);
      $("#greeter").append($li);
    };
  }
  else {
    alert('Please supply values for both fields');
  }
});
