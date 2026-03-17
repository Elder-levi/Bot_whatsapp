const { GoogleGenerativeAI } = require("@google/generative-ai")
require("dotenv").config();
const { useMultiFileAuthState } = require("@whiskeysockets/baileys")
const makeWASockect  = require("@whiskeysockets/baileys").default
const qrcode = require("qrcode-terminal");


async function testarGemini() { 
  try { 
    
    const genAI = new GoogleGenerativeAI(process.env.CHAVE_API); 
    
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" }); 
    
    const result = await model.generateContent("Explique o que é programação em 1 frase"); 
    
    const resposta = (await result.response).text(); 
    
    console.log("Resposta da IA:"); console.log(resposta); } 
    catch (erro) 
    { 
      console.log("Erro ao conectar com Gemini:"); 
      console.log(erro); } 
      }

async function ConectaZap(){

  try {

    const { state, saveCreds } = await useMultiFileAuthState("auth");
    

    const sock = makeWASockect({
      auth: state
    });

    sock.ev.on("connection.update", (update) => {

      const { connection, qr } = update;

      if (qr) {
        console.log("Escaneie o QR Code:");
        qrcode.generate(qr, { small: true });
      }

      if (connection === "open") {
        console.log("WhatsApp conectado!");
      }

    });

    sock.ev.on("creds.update", saveCreds);

  } catch (error) {

    console.log("Erro ao conectar com WhatsApp:");
    console.log(error);

  }

}

async function main(){

  await testarGemini();
  await ConectaZap();

}

module.exports = { main };