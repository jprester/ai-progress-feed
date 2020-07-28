export interface IAppProps {
  history: any;
  articlesData: [];
  startFetchArxivFeed: () => void;
  clearData: () => void;
  showMenu: (value: boolean) => void;
  menuVisible: boolean;
  isFetching: boolean;
}
