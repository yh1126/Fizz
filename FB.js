function FB(){
  for(var i = 1; i < 31 ; i++){
    if(i % 15 == 0){
      document.write("<p>");
      document.write(i);
      document.write(" FizzBuzz");
      document.write("</p>");
    }else if(i % 3 == 0){
      document.write("<p>");
      document.write(i);
      document.write(" Fizz")
      document.write("</p>"); 
    }else if(i % 5 == 0){
      document.write("<p>"); 
      document.write(i);
      document.write(" Buzz");
      document.write("</p>"); 
    }else{
      document.write("<p>");
      document.write(i);
      document.write("</p>");
    }
  }
}
