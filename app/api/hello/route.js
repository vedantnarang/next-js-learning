import { NextResponse } from "next/server";


export let users=[
    { 
        id:1,
        name: "Alice Johnson",
        dob: "1990-05-15",
        phone: "555-0101" 
    },
    { 
        id:2,
        name: "Bob Smith",
        dob: "1985-11-22",
        phone: "555-0102" 
    },
    { 
        id:3,
        name: "Charlie Davis",
        dob: "1992-03-10",
        phone: "555-0103" 
    },

];


export async function GET(request) {
    try {
    return NextResponse.json({
        success:true,
        data:users,
        total:users.length
    })  
        
    } catch (error) {
        return NextResponse.json({
            success:false,error:"failed to get users "
        })
    }
    {status:500}
}