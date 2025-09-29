import makeWASocket from "baileys";
import { authConfig  } from "./src/config/auth.js";
import { connectionEvents } from "./src/events/connection.js";
import { messageEvents } from "./src/events/mensages.js";


export async function  ConectBot() {
    const {state , saveCreds} =  await authConfig();
     

    const sock = makeWASocket({
      auth : state,
    })

    sock.ev.on("creds.update", saveCreds);

    connectionEvents(sock);
    messageEvents(sock);


    return sock;
}