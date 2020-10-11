export interface IState {
  menuVisible: boolean;
  arxivFeedData: number[];
  microsoftFeedData: number[];
  deepMindFeedData: number[];
  openAIFeedData: number[];
  nvidiaFeedData: number[];
  googleFeedData: number[];
  searchQuery: string;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IAppProps {
  history: any;
  showMenu: (value: boolean) => void;
  menuVisible: boolean;
  startFetchArxivFeed: any;
  startFetchYoutubeFeed: any;
  startFetchMicrosoftFeed: any;
  startFetchOpenAIFeed: any;
  startFetchDeepMindFeed: any;
  startFetchNvidiaFeed: any;
  startFetchGoogleAIFeed: any;
}
export interface IHomePageProps {
  arxivFeedData: [];
  youtubeFeedData: [];
  microsoftFeedData: [];
  deepMindFeedData: [];
  openAIFeedData: [];
  nvidiaFeedData: [];
  googleFeedData: [];
  historyData?: any;
}

export interface IArticleDataItem {
  title: string;
  isoDate: string;
  link: string;
  gid?: string;
  contentSnippet: string;
}

export interface ISciPaperDataItem {
  title: string;
  id?: string;
  isoDate: string;
  link: string;
}

export interface IArticleListProps {
  data: IArticleDataItem[];
  moreButton?: string;
}

export interface ISciPaperListProps {
  data: ISciPaperDataItem[];
  moreButton?: string;
}

export interface IVideoListProps {
  data: IArticleDataItem[];
  moreButton?: string;
}
