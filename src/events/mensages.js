import { handleCommands } from "../handles/commands.js";

export function messageEvents(sock){
 //aqui eu crio um ouvinte para o evento 
 // esse evento sempre dispara quando chega uma mensagen    
 sock.ev.on("messages.upsert", async (msg) =>{
const message = msg.messages[0]; 
//usando o baileys eu posso mandar varias mensagen ao mesmo tempo 
// com esse metodo eu mando mensagen pra primeira mensagen recebida


if (!message.message)return; //retorna caso nao acha mensagen

 if (message.message.buttonsResponseMessage) {
    console.log("Botão clicado:", message.message.buttonsResponseMessage.selectedButtonId);
    return;
  }

const from = message.key.remoteJid; // pega o id do grupo ou numero do usuario
const text = message.message.conversation || message.message.extendedTextMessage?.text;
//pega o texto enviado ou a mensagem emcaminhada pelo usuario


console.log("📩 Mensagem de:", from, "→", text);
//aparece no console numero e mensagem enviada pela pessoa


await handleCommands(sock, from, text);
// aqui chamo meu metodo onde eu passo o numero da pessoa e o conteudo da mensagen 


 })


}