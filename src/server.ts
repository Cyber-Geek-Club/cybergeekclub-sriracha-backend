import http from "node:http";
import app from "./app";
import config from "./config/config";


const server = http.createServer(app);

server.listen(config.port, config.host, () => {
  console.log(`Server running at http://${config.host}:${config.port}`);
});