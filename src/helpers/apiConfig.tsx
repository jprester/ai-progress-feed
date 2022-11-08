export const PROXY_SERVER = "https://cors-proxy-janko.herokuapp.com";
export const FEED_SOURCES = {
  ARXIV_ML: {
    FEED: "https://export.arxiv.org/api/query?search_query=cat:cs.LG&sortBy=submittedDate&sortOrder=descending",
    WEB_LINK: "https://arxiv.org/list/cs.LG/recent",
    TYPE: "scipapers",
    NAME: "Arxiv Machine Learning Papers",
  },
  ARXIV_AI: {
    FEED: "https://export.arxiv.org/api/query?search_query=cat:cs.AI&sortBy=submittedDate&sortOrder=descending",
    WEB_LINK: "https://arxiv.org/list/cs.AI/recent",
    TYPE: "scipapers",
    NAME: "Arxiv AI Papers",
  },
  TWO_MINUTE_PAPERS: {
    FEED: "https://www.youtube.com/feeds/videos.xml?channel_id=UCbfYPyITQ-7l4upoX8nvctg",
    WEB_LINK: "https://www.youtube.com/c/K%C3%A1rolyZsolnai/featured",
    TYPE: "videos",
    NAME: "Two Minute Papers",
  },
  MICROSOFT: {
    FEED: "https://www.microsoft.com/en-us/research/feed/",
    WEB_LINK:
      "https://www.microsoft.com/en-us/research/blog/category/intelligence/artifical-intelligence/",
    TYPE: "articles",
    NAME: "Microsoft AI",
  },
  NVIDIA: {
    FEED: "https://feeds.feedburner.com/nvidiablog?format=xml",
    WEB_LINK:
      "https://news.developer.nvidia.com/category/artificial-intelligence/",
    TYPE: "articles",
    NAME: "Nvidia AI",
  },
  DEEPMIND: {
    FEED: "https://deepmind.com/blog/feed/basic/",
    WEB_LINK: "https://deepmind.com/blog",
    TYPE: "articles",
    NAME: "Deep Mind",
  },
  OPENAI: {
    FEED: "https://openai.com/blog/rss/",
    WEB_LINK: "https://openai.com/blog/",
    TYPE: "articles",
    NAME: "OpenAI",
  },
  AMAZON: {
    FEED: "https://aws.amazon.com/blogs/machine-learning/feed/",
    WEB_LINK: "https://aws.amazon.com/blogs/machine-learning/",
    TYPE: "articles",
    NAME: "Amazon AI",
  },
  YANNIC_KILCHER: {
    FEED: "https://www.youtube.com/feeds/videos.xml?channel_id=UCZHmQk67mSJgfCCTn7xBfew",
    WEB: "https://www.youtube.com/channel/UCZHmQk67mSJgfCCTn7xBfew",
    TYPE: "videos",
    NAME: "Yannic Kilcher",
  },
  WHATS_AI: {
    FEED: "https://www.youtube.com/feeds/videos.xml?channel_id=UCUzGQrN-lyyc0BWTYoJM_Sg",
    WEB: "https://www.youtube.com/channel/UCUzGQrN-lyyc0BWTYoJM_Sg",
    TYPE: "videos",
    NAME: "What's AI",
  },
  LEX_FRIDMAN: {
    FEED: "https://www.youtube.com/feeds/videos.xml?channel_id=UCSHZKyawb77ixDdsGog4iWA",
    WEB: "https://www.youtube.com/channel/UCSHZKyawb77ixDdsGog4iWA",
    TYPE: "videos",
    NAME: "Lex Fridman",
  },
  GOOGLE: {
    FEED: "http://feeds.feedburner.com/blogspot/gJZg?format=xml",
    WEB: "https://ai.googleblog.com/",
    TYPE: "scipapers",
    NAME: "Google AI",
  },
};
