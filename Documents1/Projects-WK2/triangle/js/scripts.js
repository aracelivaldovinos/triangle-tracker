function add(lenght1, lenght2){
  return lenght1 + lenght2;
}
function add(lenght1, lenght3){
  return lenght1 + lenght3;
}
function add(lenght2, lenght3){
  return lenght2 + lenght3;
}


$("document").ready(function(){
  $("form#formOne").submit(function(event){
  event.preventDefault(); 
  const lenght1 = parseInt($("input#lenght1").val());
  const lenght2 = parseInt($("input#lenght2").val());
  const lenght3 = parseInt($("input#lenght3").val());
  const result1 = add(lenght1, lenght2);
  const result2 = add(lenght1, lenght3);
  const result3 = add(lenght2, lenght3);
  

  let type =""; 
  if (lenght1 === lenght2 === lenght3) {
    type = "Equilateral";
  }
  else if (lenght1 === lenght2 || lenght2 === lenght3 && lenght1 !== lenght3) {
    type ="Isosceles";
  }
  else if (lenght1 === lenght3 || lenght2 === lenght3 && lenght1 !== lenght2) {
    type ="Isosceles";
  }
  else if (result1 <= lenght3 || result2 <= lenght2 || result3 <= lenght1) {
    type="Not a triangle";
  }
  else {
    type ="Squalene";
  }
  
  $("#shape").text(type)

  });
});