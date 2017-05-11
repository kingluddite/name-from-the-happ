import React from 'react';
import { Link } from 'react-router';

const NotFound = () => (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page Not Found</h1>
        <p>Don&apos;t panic. Just type the page URL again and maybe it will work this time.</p>
        <Link to="/" className="button button--pill">
        Head Home!
      </Link>
      </div>
    </div>
  );

export default NotFound;
