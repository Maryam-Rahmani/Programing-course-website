

AllCoursesAPI()
.then((res) => {
    setCourse(res.data)
    console.log(res.data)})

    



const [course, setCourse] = useState<CourseProps>({
    teacher: {
      email: "",
      fullName: "",
      profile: "",
      id: "",
    },
    lesson: {
      startDate: "",
      id: "",
      topics: [];
      lessonName: "",
      description: "",
    },
    course: {
      capacity: "",
      cost:  "",
      endDate: "",
      id: "",
      title: "",
    },
    cost: "",
    students: [],
  })