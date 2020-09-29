"use strict";

//Counting Valleys
function countingValleys(n, s) {
    var valleyCount = 0;
    var seaLevel = 0;

    for (var i = 0; i < n; i++) {
        if (s[i] == "U") {
            seaLevel += 1;
            if (seaLevel == 0) {
                valleyCount += 1;
            }
        } else if (s[i] == "D") {
            seaLevel -= 1;
        }
    }
    return valleyCount;

}

//Grading students
function gradingStudents(grades) {
    //returns original input
    return grades;
}

function gradingStudents(grades) {
    grades.forEach(myFunction)
    function myFunction(aGrade, indexOfGrade, arrayOfGrades) {
        if (aGrade < 70) {
            arrayOfGrades[indexOfGrade] = aGrade * 10;
        } else {
            arrayOfGrades[indexOfGrade] = aGrade * 1000;
        }
    }
    return grades;
}
