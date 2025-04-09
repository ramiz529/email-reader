import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { createOpenAI } from '@ai-sdk/openai';
import { generateText } from 'ai';
import { env } from '$env/dynamic/private';


const openai = createOpenAI({
    apiKey: env.OPENAI_API_KEY,
});


export const POST: RequestHandler = async ({ request }) => {
    const file = await request.arrayBuffer()
    const model = openai("chatgpt-4o-latest")
    const result = await generateText({
        model,
        messages: [
            {
                role: 'user',
                content: [
                    { type: 'text', text: 'Tell me the contents of the email' },
                    {
                        type: 'image',
                        image: file
                    },
                ],
            },
        ],
    });
    return json({
        success: true,
        answer: result.text
    });
}



