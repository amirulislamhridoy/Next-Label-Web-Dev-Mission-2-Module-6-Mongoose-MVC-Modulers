import User from "./user.mode"

const createUserToDB = async () => {

    const user = new User({
    //   id: '779',
      role: 'student',
      password: 'alskd',
      name: {
        firstName: 'Md. Amirul',
        middleName: " Islam ",
        lastName: "Hridoy",
      },
      dateOfBirth: '10/1/2000',
      gender: "male",
      email: 'amirulislamhridoy30687@gmail.com',
      contactNo: '01518325108',
      emergencyContactNo: '01714499963',
      presentAddress: "Haydarabad, Tonngi, Gazipur",
      permanentAddress: "Same",
    })
    await user.save()
    console.log(user)
    return user
  }

export default createUserToDB;