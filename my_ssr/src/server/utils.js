import { renderToString } from 'react-dom/server';
import {  StaticRouter } from 'react-router-dom'; 
import React from 'react'
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

export const render = (store, routes, req, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    </Provider>
  );
  const helmet = Helmet.renderStatic();

  const cssStr = context.css.length ? context.css.join('\n') : '';

  return  `
    <html>
      <head>
        <style>${cssStr}</style>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.context = {
            state: ${JSON.stringify(store.getState())}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `
};