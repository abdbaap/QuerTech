import { NextResponse } from "next/server";
import listofallBlogs from "../blogData/listofallblogs.json"
export async function GET(){

    return NextResponse.json({sucess:true,listofallBlogs})
}