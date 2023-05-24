function getStudentAverage (students) {
  const studentsAverage = []

  for (let index = 0; index < students.length; index++) {
    const student = students[index]

    const averageStudent = student.grades.reduce((acumulador, average) => acumulador + average, 0)

    const average = parseFloat((averageStudent / student.grades.length).toFixed(2))
    studentsAverage.push({ name: student.name, average })
  }

  const classAverage = studentsAverage.reduce((acumulador, student) => acumulador + student.average, 0)

  const rta = {
    classAverage: parseFloat((classAverage / studentsAverage.length).toFixed(2)),
    students: studentsAverage
  }

  return rta
}

getStudentAverage([
  {
    name: 'Pedro',
    grades: [90, 87, 88, 90]
  },
  {
    name: 'Jose',
    grades: [99, 71, 88, 96]
  },
  {
    name: 'Maria',
    grades: [92, 81, 80, 96]
  }
])
