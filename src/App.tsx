import Footer from "./components/Footer";
import Header from "./components/Header";
import { GlobalStyle } from "./global/GlobalStyles";
import Home from "./pages/Home";
import * as S from "./styles";

function App() {
  return (
    <S.Container>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </S.Container>
  );
}

export default App;
