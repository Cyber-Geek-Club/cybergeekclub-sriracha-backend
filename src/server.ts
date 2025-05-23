import http from "node:http";
import app from "./app";

const PORT: number = process.env.SERVER_PORT ? parseInt(process.env.SERVER_PORT) : 8080;
const HOST: string = process.env.SERVER_HOST || "127.0.0.1";

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});