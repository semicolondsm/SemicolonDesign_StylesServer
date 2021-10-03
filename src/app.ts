import * as express from "express";
import { dark, light } from './colors'
import { getColorScheme } from "./utils";

const app: express.Application = express();

type UserAgentPrefix = 'auto' | 'light' | 'dark';
const getUserAgentThemePrefix = (userAgent: string): UserAgentPrefix => {
  const themes = ["dark", "light"];
  const theme = userAgent.split(" ").reverse()[0];
  return (themes.includes(theme) ? theme : 'auto') as UserAgentPrefix; 
}


app.get("/style.css", (req: express.Request, res: express.Response) => {
  const theme = getUserAgentThemePrefix(req.headers["user-agent"]);
  res.sendFile(__dirname + `/styles/${theme}.css`)
})


export default app;