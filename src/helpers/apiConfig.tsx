export const PROXY_SERVER = "https://cors-proxy-janko.herokuapp.com";
export const SOURCES = {
  AI_PAPERS: {
    ARXIV:
      "https://export.arxiv.org/api/query?search_query=cat:cs.LG&sortBy=submittedDate&sortOrder=descending",
  },

  YOUTUBE: {
    LEX_FRIEDMAN:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCSHZKyawb77ixDdsGog4iWA",
    TWO_MINUTE_PAPERS:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCbfYPyITQ-7l4upoX8nvctg",
    YANNIC_KILCHER:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCZHmQk67mSJgfCCTn7xBfew",
    WIAI:
      "https://www.youtube.com/feeds/videos.xml?channel_id=UCUzGQrN-lyyc0BWTYoJM_Sg",
  },

  COMPANIES: {
    MICROSOFT: "https://www.microsoft.com/en-us/research/feed/",
    OPENAI: "https://openai.com/blog/rss/",
    DEEPMIND: "https://deepmind.com/blog/feed/basic/",
    NVIDIA: "https://feeds.feedburner.com/nvidiablog?format=xml",
    GOOGLE: "http://feeds.feedburner.com/blogspot/gJZg?format=xml",
  },
};
