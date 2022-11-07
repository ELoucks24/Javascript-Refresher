let student1 = { firstName: 'Sue', lastName: 'Smith', gpa: 3.6, vollyball: true }
let student2 = { firstName: 'Bob', lastName: 'Loblaw', gpa: 1.9, vollyball: false }


let allStudents = [student1, student2]
console.log(allStudents)

let student3 = { firstName: 'Lucy', lastName: 'Finley', gpa: 4.8, vollyball: true }

allStudents.push(student3)

console.log(allStudents)

for(let i=0; i < allStudents.length; i++){
    aboutStudent(allStudents[i])
}




function aboutStudent(student) {
    if (student.vollyball) {
        console.log(student.firstName + ' ' + student.lastName + ' has a gpa of ' + student.gpa + ' and plays vollyball')
    } else {
        console.log(student.firstName + ' ' + student.lastName + ' has a gpa of ' + student.gpa + ' and does not play vollyball')
    }
}
