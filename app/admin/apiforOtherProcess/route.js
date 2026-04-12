// app/api/publish/route.ts

import { NextResponse } from 'next/server';

export async function POST(request,response) {
    const data = await request.json();
    

    // 1. Check if we are running locally or in production
    
            // 2. ONLY import the library if we are local.
            // This prevents Cloudflare from crashing during the build/deploy.
            const { publishToQueue } = await import('@/app/utils/rabbitmq');
            
            await publishToQueue("blog.generated", {url:data.url,summary:data.summary});
            return NextResponse.json({ success: true, message: "Queued locally" });
         
    

    // 3. Fallback for Cloudflare (Production)
    // You can either return a fake success or a message saying it's disabled.
    return NextResponse.json({ 
        success: true, 
        message: "Running on Edge: RabbitMQ skipped (Local only)" 
    });
}
