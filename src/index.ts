import app from "./app";
import {createServer} from "http";

const port: number = Number(process.env.PORT) || 5000;

const server = createServer(app);

server.listen(port, () => {
  console.log(`SemicolonDesign Styles Server on ${port}`);
});

export default server;