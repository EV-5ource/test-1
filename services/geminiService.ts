
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export interface AuditRequest {
  businessName: string;
  businessType: string;
  mainPainPoint: string;
  teamSize: string;
}

export interface AuditResponse {
  summary: string;
  estimatedTimeSavings: string;
  suggestedAutomations: string[];
  nextSteps: string;
}

export const generateAIAudit = async (data: AuditRequest): Promise<AuditResponse> => {
  try {
    const prompt = `Perform a mini AI strategy audit for this business:
    Name: ${data.businessName}
    Type: ${data.businessType}
    Main Pain Point: ${data.mainPainPoint}
    Team Size: ${data.teamSize}
    
    Provide actionable AI automation suggestions and estimated hours saved per week.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            estimatedTimeSavings: { type: Type.STRING },
            suggestedAutomations: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            nextSteps: { type: Type.STRING }
          },
          required: ["summary", "estimatedTimeSavings", "suggestedAutomations", "nextSteps"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Audit Generation Error:", error);
    throw new Error("Failed to generate audit. Please try again.");
  }
};
