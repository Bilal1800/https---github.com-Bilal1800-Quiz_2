var courseCount = 0;

function NumberOfCourse() {
    courseCount = +document.getElementById('cou').value;
    if (courseCount >= 1 && courseCount <= 6) {
        showCourseTable();
    } else {
        alert('Please enter a number between 1 and 6 for the number of courses.');
    }
}

function showCourseTable() {
    var courseTable = document.getElementById('tab');
    courseTable.style.display = 'block';

    var courseList = document.getElementById('tb');
    courseList.innerHTML = '';

    for (var i = 0; i < courseCount; i++) {
        courseList.innerHTML += `
            <tr>
                <td><input type='text'></td>
                <td><input type='number' min='1' max='4'></td>
                <td><input type='number' min='0' max='100'></td>
            </tr>
        `;
    }
}

function calculate() {
    var courseList = document.getElementById('tb');
    var totalCreditHours = 0;
    var totalGradePoints = 0;

    for (var i = 0; i < courseCount; i++) {
        var creditHours = +courseList.querySelectorAll('input[type="number"]')[i * 2].value;
        var marks = +courseList.querySelectorAll('input[type="number"]')[i * 2 + 1].value;


        var gradePoints = calculateGradePoints(marks);
        totalCreditHours += creditHours;
        totalGradePoints += creditHours * gradePoints;
    }

    var finalGPA = totalGradePoints / totalCreditHours;
    document.getElementById('res').innerHTML = finalGPA.toFixed(2);
    document.getElementById('dis').style.display = 'block';
}

function calculateGradePoints(marks) {
    if (marks >= 85) return 4.0;
    if (marks >= 80) return 3.66;
    if (marks >= 75) return 3.33;
    if (marks >= 71) return 3.0;
    if (marks >= 68) return 2.66;
    if (marks >= 64) return 2.33;
    if (marks >= 61) return 2.0;
    if (marks >= 58) return 1.66;
    if (marks >= 54) return 1.30;
    if (marks >= 50) return 1.0;
    return 0.0;
}

function reset() {
    document.getElementById('tb').innerHTML = '';
    document.getElementById('cou').value = '';
    document.getElementById('dis').style.display = 'none';
    document.getElementById('tab').style.display = 'none';
}

