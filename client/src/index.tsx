import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/App'
import { store } from './store'
import 'shared/assets/styles'

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
)
