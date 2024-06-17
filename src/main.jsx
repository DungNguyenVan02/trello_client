import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import { ToastContainer } from 'react-toastify'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
// Mui dialog
import { ConfirmProvider } from 'material-ui-confirm'
// Router dom
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import theme from './theme'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <CssVarsProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <ConfirmProvider
        defaultOptions={{
          allowClose: false,
          dialogProps: { maxWidth: 'xs' },
          confirmationButtonProps: { color: 'error', variant: 'outlined' },
          cancellationButtonProps: { color: 'inherit' }
        }}
      >
        <Provider store={store}>
          <App />
        </Provider>
        <ToastContainer position="bottom-left" theme="colored" />
      </ConfirmProvider>
    </BrowserRouter>
  </CssVarsProvider>
  // </React.StrictMode>
)
