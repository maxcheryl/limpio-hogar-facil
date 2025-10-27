import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import deepCleanImage from "@/assets/service-deep-clean.jpg";
import regularImage from "@/assets/service-regular.jpg";
import officeImage from "@/assets/service-office.jpg";

const services = [
  {
    title: "Limpieza Profunda",
    description:
      "Limpieza detallada de cada rincón de tu hogar. Ideal para preparar eventos o simplemente mantener tu casa impecable.",
    image: deepCleanImage,
    features: ["Todas las habitaciones", "Cocina y baños", "Ventanas y espejos", "Áreas de difícil acceso"],
  },
  {
    title: "Limpieza Regular",
    description:
      "Mantenimiento periódico de tu hogar. Servicio semanal o quincenal para mantener todo en orden.",
    image: regularImage,
    features: ["Aspirado y trapeado", "Superficies y muebles", "Baños sanitizados", "Organización general"],
  },
  {
    title: "Limpieza de Oficinas",
    description:
      "Servicios especializados para espacios comerciales. Mantén tu oficina profesional y acogedora.",
    image: officeImage,
    features: ["Áreas de trabajo", "Salas de reuniones", "Cocinas corporativas", "Espacios comunes"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground">
            Ofrecemos soluciones de limpieza adaptadas a tus necesidades específicas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
