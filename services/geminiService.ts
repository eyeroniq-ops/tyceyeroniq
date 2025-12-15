import { GoogleGenAI } from "@google/genai";
import { ServiceTerms } from '../types';

export const generateAnswer = async (question: string, context: ServiceTerms): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Error: API Key no configurada. Por favor contacta al administrador.";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  // Helper to extract text from items
  const extractItems = (items: { text: string }[]) => items.map(i => i.text).join('; ');

  const systemInstruction = `
    Actúa como el asistente legal virtual de la agencia creativa "Eyeroniq".
    Tu objetivo es responder dudas de los clientes sobre los Términos y Condiciones basándote EXCLUSIVAMENTE en la información proporcionada.
    
    Contexto del Servicio Actual: ${context.name}
    
    Información Oficial:
    - Responsabilidades: ${extractItems(context.responsibilities.items)}
    - Política de Cambios: ${extractItems(context.revisions.items)}
    - Qué Hacemos: ${extractItems(context.inclusions.items)}
    - Qué NO Hacemos: ${extractItems(context.exclusions.items)}
    ${context.additionalClauses ? `- Cláusulas Adicionales: ${extractItems(context.additionalClauses.items)}` : ''}

    Reglas:
    1. Sé amable, profesional y directo.
    2. Si la respuesta no está en la información proporcionada, indica que deben contactar a un representante humano de Eyeroniq.
    3. No inventes políticas ni asumas servicios que no están listados explícitamente en "Qué Hacemos".
    4. Responde siempre en español.
    5. Mantén las respuestas breves (menos de 100 palabras).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: question,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Lo siento, no pude procesar tu pregunta en este momento.";
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    return "Hubo un error al consultar al asistente. Por favor intenta de nuevo.";
  }
};