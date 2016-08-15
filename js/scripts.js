$(document).ready(function(){
  $("#favThings").submit(function(event){
    var favNumber = $("input#number").val();
    var favAnimal = $("input#animal").val();
    var favFood = $("input#food").val();
    var favCountry = $("input#country").val();
    var favColor = $("input#color").val();

    var favArray = [favNumber, favAnimal, favFood, favCountry, favColor];

    var newArray = ([favArray[1], favArray[2], favArray[0]]);

    newArray.push(favArray[0]);
    newArray.push(favArray[1]);
    newArray.push(favArray[2]);
    newArray.push(favArray[3]);
    newArray.push(favArray[4]);
    alert(newArray);

  $("#result").append("<li>" + newArray[0] + "</li>");
  $("#result").append("<li>" + newArray[1] + "</li>");
  $("#result").append("<li>" + newArray[2] + "</li>");
  $("#result").append("<li>" + newArray[3] + "</li>");
  $("#result").append("<li>" + newArray[4] + "</li>");
  $("#result").append("<li>" + newArray[5] + "</li>");
  $("#result").append("<li>" + newArray[6] + "</li>");
  $("#result").append("<li>" + newArray[7] + "</li>");

    event.preventDefault();
  });
});
