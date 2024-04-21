import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import app from "../config/config";


class GeminiService {
    MODEL_NAME = "";
    API_KEY = "YOUR_API_KEY";
    constructor() {
        this.model_name = "gemini-1.0-pro";
        this.api_key = app.gemini_api_key
    }

    async runChat(prompt_text) {
        try {
            console.log("api_key", this.api_key);
            const genAI = new GoogleGenerativeAI(this.api_key);
            const model = genAI.getGenerativeModel({ model: this.model_name });

            const generationConfig = {
                temperature: 0.9,
                topK: 1,
                topP: 1,
                maxOutputTokens: 2048,
            };

            const safetySettings = [
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
                },
            ];

            const chat = model.startChat({
                generationConfig,
                safetySettings,
                history: [
                ],
            });

            const result = await chat.sendMessage(prompt_text);
            const response = result.response;
            return response.text()
        } catch (err) {
            return null;
        }
    }

}

export default new GeminiService;