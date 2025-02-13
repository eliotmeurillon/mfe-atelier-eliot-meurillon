import './App.css';
import React, { Suspense } from 'react';
import { loadRemote } from '@module-federation/runtime';

const RemoteButton = React.lazy(() => loadRemote('federation_provider/button'));

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <div>
        <Suspense fallback="Loading...">
          <RemoteButton />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
