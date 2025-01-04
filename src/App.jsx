import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarContextProvider } from "./contexts/SidebarContext";
import AppLayout from "./layout/App/AppLayout";
import HomePage from "./pages/HomePage";
import GlobalStyles from "./styles/GlobalStyle";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClients = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 0 },
    },
  });

  return (
    <QueryClientProvider client={queryClients}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SidebarContextProvider>
        <GlobalStyles />
        <AppLayout>
          <HomePage />
        </AppLayout>
      </SidebarContextProvider>
    </QueryClientProvider>
  );
}

export default App;
