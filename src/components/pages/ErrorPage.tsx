import React from 'react';

const ErrorPage = ({ location }: any) => (
   <div>
      <h2 className="page-title">No match found for <code>{location.pathname}</code></h2>
   </div>
);

export default ErrorPage;
