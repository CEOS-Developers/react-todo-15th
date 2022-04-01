import ReactDOM from 'react-dom';
import App from './App';
import ItemListProvider from './contexts/ItemListContext';

ReactDOM.render(
  <ItemListProvider>
    <App />
  </ItemListProvider>,
  document.getElementById('root')
);
