import openai from './config/openai.js';

async function main() {
    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user', content: 'What is the capital of florida' }
        ],
    });

    console.log(chatCompletion.choices[0].message.content);
}

main();