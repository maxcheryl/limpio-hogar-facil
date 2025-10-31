import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-cleaning.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-accent/90" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
            <Sparkles className="h-5 w-5" />
            <span className="font-medium">Servicios Profesionales de Limpieza</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Tu Casa Limpia
            <span className="block mt-2">Sin complicaciones</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Servicios de limpieza domiciliarios profesionales. Confiables, eficientes y con
            atención al detalle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => navigate("/workers")}
              className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-6"
            >
              Solicitar Servicio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-6"
              onClick={() => {
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ofrecer Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
