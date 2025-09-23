import { type } from "os";

export async function handleCommands(sock,from, text) {
if(!text)return;
const lower = text.toLowerCase(); //Transformo tudo em minusculo 
    
if(lower === "ola")
{
    await sock.sendMessage(from, {
        text: "Seja bem vindo a nossa academia ",
        buttons:[
              {buttonId: "btn1", buttonText: {displayText: "Sim"}, type: 1},
              {buttonId: "btn2", buttonText: {displayText: "Nao"}, type: 2},
                ],
            headerType: 1
    })
}
}