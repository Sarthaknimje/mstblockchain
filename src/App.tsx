import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ColorProvider } from "@/contexts/ColorContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index.tsx";
import UseCasePage from "./pages/UseCasePage.tsx";
import GrantsPage from "./pages/GrantsPage.tsx";
import AmbassadorPage from "./pages/AmbassadorPage.tsx";
import AcademyPage from "./pages/AcademyPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ColorProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/use-case/:id" element={<UseCasePage />} />
              <Route path="/grants" element={<GrantsPage />} />
              <Route path="/ambassador" element={<AmbassadorPage />} />
              <Route path="/academy" element={<AcademyPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ColorProvider>
  </QueryClientProvider>
);

export default App;
