import { NextResponse } from "next/server";
import {users} from "../hello/route"


export async function POST(request) {
    try {
        const {name,dob,phone}=await request.json();
        if(!name || !dob || !phone){
            return NextResponse.json({
                success:false,error:"name and phone are required"
            },
            {status:400}
        );
        }

        const newUser={
            name:name,
            dob:dob,
            phone:phone
        }
        users.push(newUser);

        return NextResponse.json({success:true,data:users,message:"user created"},{status:201})
    } catch (error) {
        return NextResponse.json({
            success:false,
            error:"falied",
        });

    }
    
}

