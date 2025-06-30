import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { ConfigProvider } from 'antd'
import { mainTheme } from './theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={mainTheme}>
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>,
)
