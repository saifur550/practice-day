var studentMarks =100;

if(mark > 100 && mark > 0 ){
    console.log("invalid number");
} else if (studentMarks >= 80 && studentMarks <= 100) {
    console.log("A+");

} else if (studentMarks >= 70 && studentMarks <= 79) {
    console.log("A");

} else if (studentMarks >= 60 && studentMarks <= 69) {
    console.log("A-");

} else if (studentMarks >= 50 && studentMarks <= 59) {
    console.log("B");

} else if (studentMarks >= 40 && studentMarks <= 49) {
    console.log("c");

}else if(studentMarks >= 33 && studentMarks<=39){
    console.log("D");
}else{
    console.log("fail");
}



//grade 

var mark = 0;

if(mark > 100 || mark < 0 ){
    console.log("invalid number");
}else if(mark >= 80 && mark <=100){
    console.log("A+");
}else if (mark >= 70 && mark <=79){
    console.log("A-");
}else if(mark >= 60 && mark <=69){
    console.log("B");
}else if(mark >= 50 && mark <=59){
    console.log("C");
}else if(mark >= 40 && mark <=49){
    console.log("D");
}else{
    console.log("Fail");
}