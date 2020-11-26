export interface IState {
  menuVisible: boolean;
  arxivFeedData: number[];
  microsoftFeedData: number[];
  deepMindFeedData: number[];
  openAIFeedData: number[];
  nvidiaFeedData: number[];
  googleFeedData: number[];
  feedData: number[];
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IAppProps {
  history: any;
  showMenu: (value: boolean) => void;
  menuVisible: boolean;
  startDataFeedFetch: any;
}
export interface IHomePageProps {
  feedData: [];
  historyData?: any;
}

export interface IArticleDataItem {
  title: string;
  isoDate: string;
  link: string;
  gid?: string;
  contentSnippet?: string;
  type: string;
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
  name: string;
  type: "articles" | "videos" | "scipapers";
}

export interface ISciPaperListProps {
  data: ISciPaperDataItem[];
  moreButton?: string;
}

export interface IVideoListProps {
  data: IArticleDataItem[];
  moreButton?: string;
}
