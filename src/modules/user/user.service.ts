import { IUser } from "./user.interface";
import User from "./user.model"

const getAllUsers = async():Promise<IUser[]> => {
    const users = await User.find()
    return users;
}
const createUserService = async(use:IUser):Promise<IUser> => {
    const user = {
    id: '2444',
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
  }
    const data = await new User(user)  //new User => create a class && data is instance on new User/class
    data.save()
    // console.log(data.fullName())
    return data
}
const findUserByIdService = async(id:string):Promise<IUser|null> => {
    const user = await User.findById(id)
    return user;
}
const findUserByMyIdService = async(payload:string):Promise<IUser|null> => {
    const user = await User.findOne({id:payload}, {name:1})
    return user
}

export {getAllUsers, createUserService,findUserByIdService, findUserByMyIdService}
