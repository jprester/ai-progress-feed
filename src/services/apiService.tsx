import { XMLParser } from "fast-xml-parser";

import { PROXY_SERVER } from "../helpers/apiConfig";
const parser = new XMLParser();

export async function getArticles(source: string) {
  return parser.parse(`${PROXY_SERVER}/${source}`);
}
