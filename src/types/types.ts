export interface IState {
  menuVisible: boolean;
  feedData: IArticleList[];
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IAppProps {
  showMenu: (value: boolean) => void;
  menuVisible: boolean;
  startDataFeedFetch: any;
  feedData: IArticleList[];
}
export interface IHomePageProps {
  feedData: IArticleList[];
  startDataFeedFetch: any;
  historyData?: any;
}

export interface IArticleDataItem {
  title: string;
  isoDate: string;
  link: string;
  gid?: string;
  contentSnippet?: string;
  type: string;
  id: string;
}

export interface ISciPaperDataItem {
  title: string;
  id?: string;
  isoDate: string;
  link: string;
}

export interface IArticleList {
  data: IArticleDataItem[];
  moreButton?: string;
  name: string;
  feedName?: string;
  webLink?: string;
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
