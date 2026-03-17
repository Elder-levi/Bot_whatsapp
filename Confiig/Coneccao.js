const { GoogleGenerativeAI } = require("@google/generative-ai")
require("dotenv").config();
const { useMultiFileAuthState } = require("@whiskeysockets/baileys")
const makeWASockect  = require("@whiskeysockets/baileys").default



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

async function ConectaZap(){
try {
  const {state , saveCreds} = await useMultiFileAuthState("auth");


const sock = makeWASockect({
    auth: state
})


sock.ev.on('concection.update' , (upadet)=>{


const {connection , qr} = upadet


if(qr)
   {
   console.log("Leia o QR code para conectar o WhatsApp:")
   console.log(qr) 
   }
if(connection === "open")
  {
   console.log("Conexão com WhatsApp estabelecida com sucesso!")
  }
})


sock.ev.on('creds.update' , saveCreds)
} catch (error) {
  console.log("Erro ao conectar com WhatsApp:")
}

}

async function main(){

  testarGemini();
  ConectaZap();
}

module.exports = {main}