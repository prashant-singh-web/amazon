// import { connect } from "@/dbconfig/dbconfig";
// import Product_Query from "@/modals/query_modal";
import { NextRequest, NextResponse } from "next/server";


// import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "@/dbconfig/dbconfig";
import Product_Query from "@/modals/query_modal";
import { NextApiRequest, NextApiResponse } from "next";
import { URL } from "url";

connect();


export async function GET(req: NextRequest) {
  
 
    try {
      let url = req.nextUrl.search;
      url = url.replace("?", "")
     
      

     const {searchParams}= new URL(req.url)
     const ind = searchParams.get("id");
     const query = searchParams.get("all");
     
      const dat = await Product_Query.find({_id : `${ind}`})
      
      
      if (dat){
       
          return NextResponse.json(dat, { status: 200 });
        
      }else{
        return NextResponse.json({massage:"data not found"}, { status: 404});
      }
    } catch (error) {
      return NextResponse.json({ "error": error }, { status: 500 });
    }
  }



