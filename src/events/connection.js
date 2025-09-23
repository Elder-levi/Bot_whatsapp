import qrcode from "qrcode-terminal"
import { conectBot} from "@bot.js"


export function connectionEvents (sock) {

sock.ev.on("connection.update" , (update)=>{
    const { connction , qr } = update
    if(qr){

        console.log("Escaneia o Qr code ---->>>")
        qrcode.generate(qr , {small:true});
    }
    
    if(connction == "close")
    {
    console.log("  **** Conexao Fechada ****")
    conectBot();
    }else if(connction == "open"){
        console.log("Bot conectado!!")
    }
    

}) ; 
    
}
