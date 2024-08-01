import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes"
import { ContadorProvider } from "./contexts/contador"

export function App() {

  return (
    <>
      <ContadorProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ContadorProvider>
    </>
  )
}

export default App
