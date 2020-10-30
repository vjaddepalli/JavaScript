let student={
    name : 'Vijay',
    course : 'CSE',
    marks : 100,
    grade : 'A+'
}

let template1 = "<ul>" +
                    "<li>" + student.name + "<li>" +
                    "<li>" + student.course + "<li>" +
                    "<li>" + student.marks + "<li>" +
                    "<li>" + student.grade + "<li>" 
                + "</u>"

console.log(template1);

let template2 = `
                    <ul>
                        <li> ${student.name}<li>
                        <li> ${student.course}<li>
                        <li> ${student.marks}<li>
                        <li> ${student.grade}<li>
                    </ul>
                `
console.log(template2);