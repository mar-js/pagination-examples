import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'

import {App} from './App.tsx'

const $ROOT = document.getElementById('root')

ReactDOM
  .createRoot($ROOT)
  .render(
    <StrictMode>
      <App />
    </StrictMode>
  )
