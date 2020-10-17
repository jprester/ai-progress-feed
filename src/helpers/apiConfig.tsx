export const PROXY_SERVER = "https://cors-proxy-janko.herokuapp.com";
export const SOURCES = {
  AI_PAPERS: {
    ARXIV: {
      FEED:
        "https://export.arxiv.org/api/query?search_query=cat:cs.LG&sortBy=submittedDate&sortOrder=descending",
      WEB: "https://arxiv.org/list/cs.LG/recent",
    },
  },

  YOUTUBE: {
    LEX_FRIEDMAN: {
      FEED:
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCSHZKyawb77ixDdsGog4iWA",
      WEB: "",
    },

    TWO_MINUTE_PAPERS: {
      FEED:
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCbfYPyITQ-7l4upoX8nvctg",
      WEB: "https://www.youtube.com/c/K%C3%A1rolyZsolnai/featured",
    },

    YANNIC_KILCHER: {
      FEED:
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCZHmQk67mSJgfCCTn7xBfew",
      WEB: "",
    },
    WIAI: {
      FEED:
        "https://www.youtube.com/feeds/videos.xml?channel_id=UCUzGQrN-lyyc0BWTYoJM_Sg",
      WEB: "",
    },
  },

  COMPANIES: {
    MICROSOFT: {
      FEED: "https://www.microsoft.com/en-us/research/feed/",
      WEB:
        "https://www.microsoft.com/en-us/research/blog/category/intelligence/artifical-intelligence/",
    },
    OPENAI: {
      FEED: "https://openai.com/blog/rss/",
      WEB: "https://openai.com/blog/",
    },
    DEEPMIND: {
      FEED: "https://deepmind.com/blog/feed/basic/",
      WEB: "https://deepmind.com/blog",
    },
    NVIDIA: {
      FEED: "https://feeds.feedburner.com/nvidiablog?format=xml",
      WEB:
        "https://news.developer.nvidia.com/category/artificial-intelligence/",
    },
    AMAZON: {
      FEED: "https://aws.amazon.com/blogs/machine-learning/feed/",
      WEB: "https://aws.amazon.com/blogs/machine-learning/",
    },
    GOOGLE: {
      FEED: "http://feeds.feedburner.com/blogspot/gJZg?format=xml",
      WEB: "",
    },
  },
};
