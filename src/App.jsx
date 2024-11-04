// import { useState } from "react";

import AppLayout from "./layout/App/AppLayout";
import HomePage from "./pages/HomePage";
import GlobalStyles from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppLayout>
        <HomePage />
      </AppLayout>
    </>
  );
}

export default App;
