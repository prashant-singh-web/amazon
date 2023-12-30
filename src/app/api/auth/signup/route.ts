import { NextRequest, NextResponse } from "next/server";
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

import USER from "@/modals/user_modal";
import { connect } from "@/dbconfig/dbconfig";

interface IUser {
    name: string;
    email: string;
    number: string;
    password: string;
  }

connect()
export async function POST(request:NextRequest, res: NextResponse){
  try {
      const reqBody = await request.json();
      const { name, email, number,password }:IUser = reqBody;
     
      if(name === "" || email === "" || password === "" || number === ""){
          return NextResponse.json({statusText:"Please fill all required fields"},{status:401})
      }
      if(password){
         const hashedPwd = await bcrypt.hash(password,salt)
         const user_is_valid = await USER.find({name:name, email:email})
         
         if(user_is_valid.length > 0){
          
          return NextResponse.json({statusText:"User found"},{status:200})
         }
         else{
          const newUser = new USER({  name:name, email:email, password:hashedPwd, number:number});
           const SavedData = await newUser.save();
           
           return NextResponse.json({SavedData},{status:200});
         }
      }else{
        return NextResponse.json({"errr":"reeeeeeee"})
      }
      
    } catch (error:any) {
      console.error(error.message);
      return NextResponse.json({ "error": "An error occurred", },{status : 500});
    }
}

