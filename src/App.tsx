import * as S from "./styles";
import { GlobalStyle } from "./global/GlobalStyles";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
