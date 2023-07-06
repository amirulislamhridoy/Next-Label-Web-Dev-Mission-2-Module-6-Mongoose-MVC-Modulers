import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods,UserModel } from "./user.interface";

// type UserModel = Model<IUser, {}, IUserMethods> //It use time is (when only use instance method & now instance method+static use )
const userSchema = new Schema<IUser, UserModel, IUserMethods>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ['student', 'admin'], // The enum validator is an array that will check if the value given is an item in the array. If the value is not in the array, Mongoose will throw a ValidationError when you try to save().
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
            type: String,
        },
        lastName: {
            type: String,
            required: true
        },
    },
    dateOfBirth: {
        type:String,
        required: true,
    },
    gender: {
        type:String,
        required: true,
        enum: ['male','female'], // The enum validator is an array that will check if the value given is an item in the array. If the value is not in the array, Mongoose will throw a ValidationError when you try to save().
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
        required: true,
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    }
})
userSchema.method('fullName',function fullName(){
    return this.name.firstName + " " + this.name.lastName
})
userSchema.static('getAdminUsers',async function getAdminUsers(){
    return this.find({role: 'student'})
})
const User = model<IUser, UserModel>('user', userSchema);

export default User