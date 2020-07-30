import axios from "axios";
import Parser from "rss-parser";

import { PROXY_SERVER } from "../helpers/apiConfig";
let parser = new Parser();

export async function getArticles(source: string) {
  return parser.parseURL(`${PROXY_SERVER}/${source}`);
}
