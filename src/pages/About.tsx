import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-slide-down">
            Estratega digital. Especialista en growth. Tu guía para escalar negocios.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed animate-slide-up stagger-1">
            Bienvenido a mi espacio. Soy Alex. Un estratega digital enfocado en desmitificar el crecimiento orgánico y la
            adquisición de usuarios para empresas y emprendedores.
          </p>
        </div>

        {/* Trayectoria */}
        <section className="mb-16 space-y-4 text-muted-foreground animate-slide-up stagger-2">
          <h2 className="text-3xl font-bold text-foreground mb-2">Mi trayectoria en marketing</h2>
          <p className="leading-relaxed">
            A lo largo de la última década, he liderado estrategias de adquisición y retención para empresas de base
            tecnológica y proveedores B2B. Mi enfoque nació de una frustración común en la industria: la dependencia
            absoluta de la pauta publicitaria. Tras auditar decenas de embudos de venta, comprobé que el verdadero cuello
            de botella rara vez es la falta de tráfico, sino la incapacidad de convertir y retener a esos usuarios a
            largo plazo.
          </p>
          <p className="leading-relaxed">
            Creo en el growth hacking no como una serie de tácticas temporales, sino como la alineación matemática entre
            el producto, el marketing y la experiencia del usuario. Mi metodología se basa en instalar sistemas de
            crecimiento predecibles, apalancando datos de origen (first-party data), optimización de la tasa de
            conversión (CRO) y arquitecturas de automatización.
          </p>
        </section>

        {/* Por qué hago esto */}
        <section className="mb-16 rounded-2xl bg-card p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Por qué hago esto</h2>
          <p className="text-muted-foreground">
            Transformando datos complejos en estrategias accionables para que cualquier negocio pueda escalar sin depender
            exclusivamente de pauta publicitaria.
          </p>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Valores</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Transparencia</h3>
              <p className="text-muted-foreground">
                Comparto métricas reales y casos de estudio de crecimiento sin filtros.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Rigor analítico</h3>
              <p className="text-muted-foreground">
                Cada táctica recomendada está estrictamente respaldada por la experimentación empírica.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Adaptabilidad</h3>
              <p className="text-muted-foreground">
                Metodologías ágiles que evolucionan al ritmo de los cambios en los motores de búsqueda.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted">
              <h3 className="text-xl font-semibold mb-3">Crecimiento sostenible</h3>
              <p className="text-muted-foreground">
                Enfoque en la retención a largo plazo del cliente, evitando métricas vanidosas.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 rounded-2xl bg-card">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
            <Mail className="mr-2 h-4 w-4" />
            Conectá conmigo
          </Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
