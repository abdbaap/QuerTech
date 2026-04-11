// app/api/publish/route.ts
export const runtime = 'edge'; 
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

export async function POST() {
    const data = await request.json();

    // 1. Check if we are running locally or in production
    const isLocal = process.env.NODE_ENV === 'development';

    if (isLocal) {
        try {
            // 2. ONLY import the library if we are local.
            // This prevents Cloudflare from crashing during the build/deploy.
            const { publishToQueue } = await import('@/app/utils/rabbitmq');
            
            await publishToQueue("blog.generated", data);
            return NextResponse.json({ success: true, message: "Queued locally" });
        } catch (error) {
            console.error("Local RabbitMQ Error:", error);
            return NextResponse.json({ success: false, error: "Local queue failed" }, { status: 500 });
        }
    }

    // 3. Fallback for Cloudflare (Production)
    // You can either return a fake success or a message saying it's disabled.
    return NextResponse.json({ 
        success: true, 
        message: "Running on Edge: RabbitMQ skipped (Local only)" 
    });
}