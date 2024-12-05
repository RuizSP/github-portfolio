import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { QueryClientProvider } from "react-query"

import { Layout } from "./layouts/Layout"
import { Home } from "./pages/Home"
import queryClient from "./lib/queryClient"

function App() {
  

  return (
    <>
        <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
              </Route>
          </Routes>
        </Router>
        </QueryClientProvider>
    </>
  )
}

export default App
