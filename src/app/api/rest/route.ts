
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbconfig/dbconfig";
import Product_Query from "@/modals/query_modal";
import { NextApiRequest, NextApiResponse } from "next";
connect()
export async function GET(){
 try {
  const data = await Product_Query.find();
 
  return NextResponse.json(data);
 } catch (error:any) {
  return NextResponse.json(error);
 }
}

