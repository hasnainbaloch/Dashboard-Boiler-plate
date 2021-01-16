import socketIOClient from "socket.io-client";
const ENDPOINT = "https://sabhi-task.com/";

const socket = socketIOClient(ENDPOINT);

export default socket;