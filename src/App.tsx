import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Home from "@/components/Home/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Main>
        <Home />
      </Main>
    </QueryClientProvider>
  );
}

export default App;
