import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Gestiona tu horario y disponibilidad",
  "Recibe pagos seguros y puntuales",
  "Accede a una base de clientes amplia",
  "Sin costos de inscripción",
];

const ProfessionalsCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ¿Eres Especialista en Limpieza?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Únete a CasaLimpia y aumenta tus ingresos trabajando de forma independiente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8 py-6 hover-scale">
                Regístrate como Profesional
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Comienza a recibir solicitudes en menos de 24 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsCTA;
