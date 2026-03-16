const { GoogleGenerativeAI } = require("@google/generative-ai")
require("dotenv").config();


 async function testarGemini() {

  try {

    const genAI = new GoogleGenerativeAI(process.env.CHAVE_API);

    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview"
    });

    const result = await model.generateContent("Explique o que é programação em 1 frase");

    const resposta = (await result.response).text();

    console.log("Resposta da IA:");
    console.log(resposta);

  } catch (erro) {

    console.log("Erro ao conectar com Gemini:");
    console.log(erro);

  }

}


module.exports = {testarGemini}