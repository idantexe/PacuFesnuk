
import { GoogleGenAI, Type } from "@google/genai";

// Standard initialization for Gemini API using the environment variable API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIStylingAdvice = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are an expert female fashion stylist for 'Berryly Belle'. Your tone is elegant, encouraging, and feminine. Provide specific fashion advice, material suggestions, and color palettes."
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, my styling intuition is a bit clouded right now. Let me try again!";
  }
};

export const estimateMeasurements = async (weight: number, height: number, age: number) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Estimate standard female body measurements for: Height ${height}cm, Weight ${weight}kg, Age ${age}.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            chest: { type: Type.NUMBER, description: 'Chest circumference in cm' },
            waist: { type: Type.NUMBER, description: 'Waist circumference in cm' },
            hips: { type: Type.NUMBER, description: 'Hips circumference in cm' },
            armLength: { type: Type.NUMBER, description: 'Arm length in cm' },
          },
          required: ['chest', 'waist', 'hips', 'armLength']
        }
      }
    });
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Measurement Estimation Error:", error);
    return null;
  }
};
