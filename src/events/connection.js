import qrcode from "qrcode-terminal"
import { ConectBot} from "../../bot.js"


export function connectionEvents (sock) {

sock.ev.on("connection.update" , (update)=>{
    const { connection , qr } = update
    if(qr){

        console.log("Escaneia o Qr code ---->>>")
        qrcode.generate(qr , {small:true});
    }
    
    if(connection == "close")
    {
    console.log("  **** Conexao Fechada ****")
    ConectBot();
    }else if(connection == "open"){
        console.log("Bot conectado!!")
    }
    

}) ; 
    
}
