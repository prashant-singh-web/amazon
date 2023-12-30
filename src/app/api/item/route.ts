import { connect } from "@/dbconfig/dbconfig";
import Item from "@/modals/modal"
import { NextRequest, NextResponse } from "next/server";
connect()

export async function POST(request: NextRequest){
  try {
    const reqBody = await request.json();
    const { name, email, number,fname } = reqBody;
    console.log(reqBody);
    const user = await Item.findOne({ name, email, number, fname});

    if (user) {
      return NextResponse.json({ "userfound": "user already ragisterd" }, { status: 404 });
    }
    else if (name === "" || email === "" || number === "" || fname === "" ) {
      return NextResponse.json({ "userfound": "please fill all field" }, { status: 404 });
    } else {
      const newUser = new Item(reqBody);
      const data = await newUser.save();
      return  NextResponse.json({ "usercreated": data }, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ "error": error }, { status: 500 });
  }
}
export async function GET(){
  try {
    const data = await Item.find({})
    console.log(data);
    if (data){
        return NextResponse.json(data, { status: 200 });
      
    }
  } catch (error) {
    return NextResponse.json({ "error": error }, { status: 500 });
  }
}

