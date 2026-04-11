// app/api/publish/route.ts
export const runtime = 'edge';
export const dynamic = 'force-dynamic'; // Add this line


import { NextResponse } from 'next/server';
//import { publishToQueue } from '@/app/utils/rabbitmq';

export async function POST(request) {
    const data = await request.json();
    try {
        //await publishToQueue("blog.generated", data);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ success: false, error: "Failed to queue" }, { status: 500 });
    }
}
