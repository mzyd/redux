import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'
const store = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root'),
    )
  })
}

registerServiceWorker();

1. Add redux promise 中间件
2. Add redux debug tools
3. 使用 configureStore 为开发环境和生产环境智能加载 store (prod 去掉 log)
4. 添加 hmx
5. 把要修改的环境变量放到 .env 文件, 执行 start 时会自动加载此文件
