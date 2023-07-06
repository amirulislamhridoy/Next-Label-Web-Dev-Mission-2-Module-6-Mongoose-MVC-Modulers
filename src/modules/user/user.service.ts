import { IUser } from "./user.interface"
import User from "./user.mode"

const createUserToDB = async (data: IUser): Promise<IUser> => {

  // const data = {
  //   id: '7779',
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
  return user
}
const getUsersToDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users
}
const getUserById = async (id: string): Promise<IUser | null> => {
  const user = await User.findById(id)
  return user
}
const getUserByMyId = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1 })
  return user
}
export { createUserToDB, getUsersToDB, getUserById, getUserByMyId };