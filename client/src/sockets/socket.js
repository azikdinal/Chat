import {io} from "socket.io-client";

const socket = io(process.env.APP_URL)

socket.on("connection", () => console.log("Connected! Id: ", socket.id))
socket.on("error", () => console.log("Couldn't connect to server!"))

socket.on("close", () => console.log("Disconnected"))

export default socket