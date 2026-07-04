class StudentManager {
  constructor() {
    this.students = []
  }

  addStudent(name, age, id) {
    const newStudent = { name, age, id }
    this.students.push(newStudent)
    console.log(`Đã thêm sinh viên: ${name} (ID: ${id})`)
  }

  displayStudents() {
    if (this.students.length === 0) {
      console.log('Danh sách sinh viên trống.')
      return
    }
    console.log('\n--- DANH SÁCH SINH VIÊN ---')
    this.students.forEach((s, index) => {
      console.log(`${index + 1}. ID: ${s.id} | Tên: ${s.name} | Tuổi: ${s.age}`)
    })
  }

  removeStudent(id) {
    const index = this.students.findIndex((s) => s.id === id)

    if (index !== -1) {
      const removed = this.students.splice(index, 1)
      console.log(`Đã xóa sinh viên: ${removed[0].name} (ID: ${id})`)
    } else {
      console.error(`Lỗi: Không tìm thấy sinh viên có ID là ${id}`)
    }
  }
}

const myClass = new StudentManager()

myClass.addStudent('Nguyễn  Dat', 20, 'SV001')
myClass.addStudent('Lê Văn AA', 22, 'SV002')

myClass.displayStudents()

myClass.removeStudent('SV002') // Xóa thành công
myClass.removeStudent('SV999999') // Lỗi không tồn tại

myClass.displayStudents()
