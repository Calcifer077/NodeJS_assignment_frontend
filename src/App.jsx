import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Choice from "./pages/Choice";
import AddSchools from "./pages/AddSchools";
import ListSchools from "./pages/ListSchools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Choice />} />
          <Route path="addSchool" element={<AddSchools />} />
          <Route path="listSchools" element={<ListSchools />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
