import axios from "axios";
import Parser from "rss-parser";
let parser = new Parser();

export async function getArticles(source: string) {
  console.log("get articles");
  return parser.parseURL(
    `${
      process.env.REACT_APP_ENV === "local"
        ? "https://cors-anywhere.herokuapp.com/"
        : ""
    }${source}`
  );
}
