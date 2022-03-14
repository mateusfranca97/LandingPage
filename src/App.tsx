import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { ButtonFixed } from "./components/ButtonFixed";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <Header/>
      <Main/>

      <ButtonFixed href="https://www.linkedin.com/in/mateusfranca97/" target="_blank"/>
      <GlobalStyle/>
    </>
  )
}

export default App
