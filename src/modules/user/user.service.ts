import { IUser } from "./user.interface"
import User from "./user.mode"

const createUserToDB = async (data: IUser):Promise<IUser> => {

//     const data = {
// //   id: '779',
//   role: 'student',
//   password: 'alskd',
//   name: {
//     firstName: 'Md. Amirul',
//     middleName: " Islam ",
//     lastName: "Hridoy",
//   },
//   dateOfBirth: '10/1/2000',
//   gender: "male",
//   email: 'amirulislamhridoy30687@gmail.com',
//   contactNo: '01518325108',
//   emergencyContactNo: '01714499963',
//   presentAddress: "Haydarabad, Tonngi, Gazipur",
//   permanentAddress: "Same",
// }
    const user = new User(data)
    await user.save()
    console.log(user)
    return user
  }
const getUsersToDB = async():Promise<IUser[]> => {
    const users = await User.find();
    return users
}

export {createUserToDB, getUsersToDB};