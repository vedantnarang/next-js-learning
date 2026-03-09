import { NextResponse } from "next/server";
import { users } from "../../hello/route";

export async function PATCH(request,{params}) {
    try {
        const {id}=await params;
        const userIndex=users.findIndex(u=>u.id==id);
        if(userIndex==-1){
            return NextResponse.json({
                success:false,
                error:"user not found"
            },{status:404})
        }
        const body=await request.json();
        users[userIndex]={
            ...users[userIndex],
            ...body,
            id:id
        };
        return NextResponse.json({
            success:true,data:users,message:"user updated!!"
        },{status:200})

    } catch (error) {   
        return NextResponse.json({
            success:false,
            error:"failed to update user"
        },{status:500})
    }
}