import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

// router.route('/').get((req, res) => {
//     res.send('hellow');
// });

router.route('/').post(async (req, res) => {  // async placed correctly here
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
        });

        const image = aiResponse.data // Fixed variable name typo
        res.status(200).json({ photo: image });
    } catch (error) {
        console.log(error);
    }

});

export default router;
