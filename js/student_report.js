/**
 * Created by willowcheng on 4/23/2015.
 */
var message = '';
var student;
var answer;
var flag = false;

var students = [
    {
        name: "Liu",
        track: "iOS",
        achievements: '2',
        points: '120'
    },
    {
        name: "Xiaoyu",
        track: "Web Design",
        achievements: '3',
        points: '221'
    },
    {
        name: "Huanhuan",
        track: "Front End Development",
        achievements: '4',
        points: '114'
    },
    {
        name: "Kaixiang",
        track: "Front End Development",
        achievements: '3',
        points: '110'
    }
];

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

do {
    answer = prompt("Input student name, please.");
    answer = answer.toLowerCase();
    console.log(answer);
    if(answer === null || answer === "quit") flag = true;
    else {
        for (var i = 0; i < students.length; i++) {
            student = students[i];
            if(student.name.toLowerCase() === answer) {
                console.log(answer);
                message = '<h2>Student: ' + student.name + '</h2>';
                message += '<p>Track: ' + student.track + '</p>';
                message += '<p>Points: ' + student.points + '</p>';
                message += '<p>Achievements: ' + student.achievements + '</p>';
                print(message);
                flag = true;
            }
        }
    }
} while(!flag);