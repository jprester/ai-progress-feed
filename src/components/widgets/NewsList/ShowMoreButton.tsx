import React from 'react';

interface IShowMoreButtonProps {
  showMoreItems: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ShowMoreButton: React.FC<IShowMoreButtonProps>  = ({ showMoreItems }) => (
  <button className="show-more-button" onClick={showMoreItems}>Show More</button>
);

export default ShowMoreButton;
