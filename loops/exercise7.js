var marks = [80, 77, 88, 95, 68];
var i;
var sum = 0;
var average;
for (i = 0; i < marks.length; i++) {

    sum = sum + marks[i]

   if (marks[i]<100 && marks[i]>= 90) {
       marks[i]="A";
   } else if (marks[i]<90 && marks[i]>= 80) {
    marks[i]="B";
   } else if (marks[i]<80 && marks[i]>= 70) {
    marks[i]="C";
   } else if (marks[i]<70 && marks[i]>= 60) {
    marks[i]="D";
   } else if (marks[i]<60 ) {
    marks[i]="F";
   }
}

console.log(average= sum/marks.length);

console.log(marks);

