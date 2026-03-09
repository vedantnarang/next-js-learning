import { NextResponse } from "next/server";
import { users } from "../route";

export async function GET(request, { params }) {
    try {
        const { id } = await params;
        console.log(id);
        const userId = parseInt(id);

        console.log(userId)
        
        const user = users.find(u => u.id == id);
        console.log(user);

        if (!user) {
            return NextResponse.json({
                success:false,
                error:"user not found"
            },{
                status:404
            })            
        }

        return NextResponse.json(
            { success: true, data: user },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { success: false, error: "Failed to get user" },
            { status: 500 }
        );
    }
}