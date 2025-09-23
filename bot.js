import makeWASocket from "baileys";
import { authConfig  } from "./src/config/auth";
import { connectionEvents } from "./src/events/connection";
import { messageEvents } from "./src/events/mensages";


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