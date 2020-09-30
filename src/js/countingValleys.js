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
        if (aGrade < 38) {
            arrayOfGrades[indexOfGrade] = aGrade;
        } else if (aGrade % 5 == 0) {
            arrayOfGrades[indexOfGrade] = aGrade;
        } else if ((aGrade % 5) == 3 || (aGrade % 5 == 4)) {
            arrayOfGrades[indexOfGrade] = aGrade + (5 - aGrade % 5);
        }
    }
    return grades;
}

