import { Schema, model } from "mongoose";
import {IUser} from './user.interface';

const userSchema = new Schema<IUser>({
    // id: {
    //   type: String,
    //   requred: true,
    //   unique: true,
    // },
    role: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      firstName: {
        type: String,
        required: true,
      },
      middleName: {
        type: String
      },
      lastName: {
        type: String,
        required: true,
      }
    },
    dateOfBirth: {
      type: String,
      reqiured: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female'] // The enum validator is an array that will check if the value given is an item in the array. If the value is not in the array, Mongoose will throw a ValidationError when you try to save().
    },
    email: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyContactNo: {
      type: String,
      required: true
    },
    presentAddress: {
      type: String,
      required: true
    },
    permanentAddress: {
      type: String,
      required: true
    }
  });
  const User = model<IUser>("User", userSchema);

  export default User;