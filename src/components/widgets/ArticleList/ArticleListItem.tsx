import { formatDate } from "../../../helpers/utils";
import { IArticleDataItem } from "../../../types/types";

const ArticleListItem = ({
  title,
  link,
  contentSnippet,
  isoDate,
  type,
  id,
}: IArticleDataItem) => {
  let url = Array.isArray(link) || !link ? id : link;

  if (type === "videos") {
    let videoUrl = url.split(":");
    url = videoUrl[2];
  }

  return (
    <li
      className={`article-list-item ${
        type === "videos" ? "video-item" : "text-item"
      }`}>
      {isoDate && <p className="list-item-date">{formatDate(isoDate)}</p>}
      <a
        href={
          type === "videos" ? `https://www.youtube.com/watch?v=${url}` : url
        }>
        {title}
      </a>
      {type === "videos" && (
        <iframe
          src={`https://www.youtube.com/embed/${url}`}
          className="video-list-mini-player"></iframe>
      )}
      {type === "articles" && contentSnippet && (
        <p className="article-text-snippet">{contentSnippet}</p>
      )}
    </li>
  );
};

export default ArticleListItem;
