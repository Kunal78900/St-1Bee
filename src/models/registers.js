const mongoose = require("mongoose");
 
            // defining the schema as per required
            const employeeSchema = new mongoose.Schema({
                firstname: {
                    type:String,
                    required:true
                },
                lastname: {
                    type:String,
                    required:true
                },
                email: {
                    type:String,
                    required:true,
                    unique:true
                },
                gender: {
                    type:String,
                    required:true,
                },
                phone: {
                    type:Number,
                    required:true,
                    unique:true
                },
                age: {
                    type:Number,
                    required:true,
                },
                password: {
                    type:String,
                    required:true,
                },
                confirmpassword: {
                    type:String,
                    required:true,
                }
            })
 
            // creating a collection
            // for collections we need to first create the model
            const Register = new mongoose.model("Register", employeeSchema);
 
            // exporting the model we created
            module.exports = Register;
