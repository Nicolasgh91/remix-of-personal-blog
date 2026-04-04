import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import { articles } from "@/data/articles";

const Index = () => {
  const featuredArticles = articles.slice(0, 6);

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection />

        {/* Featured Articles Grid */}
        <section id="articles" className="py-12">
          <div className="flex items-center justify-end mb-12 animate-slide-up">
            <a
              href="#articles"
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors px-4 py-2 rounded-full hover:bg-muted/60"
            >
              Ver todo →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <div key={article.id} className={`animate-slide-up stagger-${Math.min(index + 1, 6)}`}>
                <ArticleCard {...article} size="small" />
              </div>
            ))}
          </div>
        </section>

        {/* Casos de éxito */}
        <section className="max-w-4xl mx-auto py-12 md:py-8 px-4 animate-fade-in" aria-labelledby="casos-heading">
          <div className="text-center space-y-6">
            <h2 id="casos-heading" className="text-3xl md:text-4xl font-bold leading-tight animate-slide-up">
              Casos de éxito
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-up stagger-1">
              Estrategias de adquisición aplicadas con resultados medibles.
            </p>
          </div>
        </section>

        {/* Newsletter Section */}
        <section
          id="newsletter"
          className="my-20 rounded-[2.5rem] bg-card p-12 md:p-16 text-center animate-scale-in"
        >
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Mantenete actualizado</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              No te pierdas ninguna tendencia del algoritmo. Suscribite para recibir tácticas de growth hacking y
              auditorías SEO directamente en tu correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo"
                className="flex-1 px-6 py-4 rounded-full border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              />
              <button className="px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all">
                Suscribite
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
