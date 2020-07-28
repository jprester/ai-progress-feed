export const API_KEY = process.env.REACT_APP_NEWSAPI_KEY;

export const SOURCES = {
  AI_PAPERS: {
    ARXIV:
      "http://export.arxiv.org/api/query?search_query=cat:cs.LG&sortBy=submittedDate&sortOrder=descending",
  },
  // VIDEOS: {
  //   LEX_FRIEDMAN: "",
  //   TWO_MINUTE_PAPERS: "",
  // },
  COMPANIES: {
    MICROSOFT: "https://www.microsoft.com/en-us/research/feed/",
    OPENAI: "https://openai.com/blog/rss/",
    DEEPMIND: "https://deepmind.com/blog/feed/basic/",
    // GOOGLE: "http://feeds.feedburner.com/blogspot/gJZg",
  },
};
