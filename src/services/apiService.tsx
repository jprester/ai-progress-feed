import axios from "axios";
import Parser from "rss-parser";
let parser = new Parser();

export async function getArticles(source: string) {
  return parser.parseURL(`${"https://cors-anywhere.herokuapp.com/"}${source}`);
}
