import React from "react";

interface IErrorPageProps {
  location: {
    pathname: string;
  };
}

const ErrorPage: React.FC<IErrorPageProps> = ({ location }) => (
  <div>
    <h2 className="page-title">
      No match found for <code>{location.pathname}</code>
    </h2>
  </div>
);

export default ErrorPage;
