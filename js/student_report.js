/**
 * Created by willowcheng on 4/23/2015.
 */
var message = '';
var student;

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

for (var i = 0; i < students.length; i++) {
    student = students[i];
    message += '<h2>Student: ' + student.name + '</h2>';
    message += '<p>Track: ' + student.track + '</p>';
    message += '<p>Points: ' + student.points + '</p>';
    message += '<p>Achievements: ' + student.achievements + '</p>';
}

console.log(message);
print(message);