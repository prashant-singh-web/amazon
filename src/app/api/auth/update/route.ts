import { NextRequest, NextResponse } from "next/server";
import USER from "@/modals/user_modal";
import { connect } from "@/dbconfig/dbconfig";
import mongoose from "mongoose";

interface IUser {
    name: string;
    email: string;
    number: string;
    password: string;
  }

connect()
export async function POST(request:NextRequest, res: NextResponse){
    try {
      // 
      let url = await request.nextUrl.search;
      url = url.replace("?", "")
    
      const reqBody = await request.json();
      
     const {searchParams}= await new URL(request.url)
     const id: any = await searchParams.get("id");
     
     if (!id){
      return NextResponse.json("please edit after login")
     }
     console.log(id)
    //  const data = await USER.find({name: "singh"})
    const mid = new mongoose.Types.ObjectId(id);
     const data = await USER.findByIdAndUpdate<any>(mid,reqBody);
     
     if (data){
      return NextResponse.json({
        success: true,
        status: "success",
        massage:"succefully updated"
      },{status:200})
     } else{
      return NextResponse.json({status:404})
     }
      } catch (error) {
        return NextResponse.json({ "error": error,"f":"fffff" }, { status: 500 });
      }
}