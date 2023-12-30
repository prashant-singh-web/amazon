import { NextApiRequest, NextApiResponse } from 'next';
require('dotenv').config();
import bcrypt from 'bcryptjs';
import USER from '@/modals/user_modal';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken'
import { connect } from '@/dbconfig/dbconfig';

interface UserModal {
  name: string;
  password: string;
}
connect()
export  async function POST(req: NextRequest, res: NextResponse) {
  try {
    const reqBody = await req.json();
    const { name, password }: UserModal = reqBody;
    

    const userExists = await USER.findOne({ name:name });
    if (!userExists) {
      return NextResponse.json({ success: false, message: 'User not found' });
    } else {
      const isPasswordValid = await bcrypt.compare(password, userExists.password);
      

      if (isPasswordValid) {
        // User is valid, proceed with login
        let user = await USER.findOne({ name:name});
        let data = {
          userid: user._id,
          username: user.name,
          useremail: user.email,
        }
       
        const tokan =jwt.sign(data,process.env.JWT_TOKEN!,{expiresIn:"1d"})
        const responce = NextResponse.json({ success:true, message:"login successful",user});
        responce.cookies.set("tokan",tokan,{
          httpOnly: true,
        });
        return responce
      } else {
        return NextResponse.json({ success: false, message: 'Invalid password' });
      }
    }
  } catch (error:any)
   {
    console.error(error);
    return NextResponse.json({ error: error.message });
  }
}
