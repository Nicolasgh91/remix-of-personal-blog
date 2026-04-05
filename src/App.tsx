import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const Article = lazy(() => import("./pages/Article"));
const Creativity = lazy(() => import("./pages/Creativity"));
const Growth = lazy(() => import("./pages/Growth"));
const About = lazy(() => import("./pages/About"));
const Authors = lazy(() => import("./pages/Authors"));
const Contact = lazy(() => import("./pages/Contact"));
const StyleGuide = lazy(() => import("./pages/StyleGuide"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PageFallback = () => (
  <div
    className="min-h-[40vh] flex items-center justify-center text-muted-foreground text-sm"
    aria-busy="true"
    aria-live="polite"
  >
    Cargando…
  </div>
);

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/creativity" element={<Creativity />} />
          <Route path="/growth" element={<Growth />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
