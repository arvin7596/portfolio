// import { useState } from "react";

import { SidebarContextProvider } from "./contexts/SidebarContext";
import AppLayout from "./layout/App/AppLayout";
import HomePage from "./pages/HomePage";
import GlobalStyles from "./styles/GlobalStyle";

function App() {
  return (
    <SidebarContextProvider>
      <GlobalStyles />
      <AppLayout>
        <HomePage />
      </AppLayout>
    </SidebarContextProvider>
  );
}

export default App;
