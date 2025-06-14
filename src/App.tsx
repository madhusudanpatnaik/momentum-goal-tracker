import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import AnalyticsPage from "./pages/AnalyticsPage";
import SDLCPage from "./pages/SDLCPage";
import NotFound from "./pages/NotFound";
import CalendarPage from "./pages/Calendar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={
            <>
              <Navigation />
              <Dashboard />
            </>
          } />
          <Route path="/goals" element={
            <>
              <Navigation />
              <Goals />
            </>
          } />
          <Route path="/calendar" element={
            <>
              <Navigation />
              <CalendarPage />
            </>
          } />
          <Route path="/analytics" element={
            <>
              <Navigation />
              <AnalyticsPage />
            </>
          } />
          <Route path="/sdlc" element={
            <>
              <Navigation />
              <SDLCPage />
            </>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
