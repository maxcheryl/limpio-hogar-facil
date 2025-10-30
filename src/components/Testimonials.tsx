import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "María González",
    role: "Cliente Regular",
    rating: 5,
    comment: "Excelente servicio. El personal es muy profesional y puntual. Mi casa queda impecable cada vez. Llevo 6 meses usando CasaLimpia y no lo cambiaría por nada.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Carlos Rodríguez",
    role: "Trabajador Independiente",
    rating: 5,
    comment: "Como trabajador, esta plataforma ha transformado mi negocio. Gestiono mi horario fácilmente y recibo pagos seguros. ¡Recomendado al 100%!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Ana Martínez",
    role: "Cliente",
    rating: 5,
    comment: "La mejor decisión fue contratar a través de CasaLimpia. El proceso es súper fácil, los precios son justos y la calidad del trabajo es excepcional.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Jorge López",
    role: "Trabajador Independiente",
    rating: 5,
    comment: "Antes me costaba conseguir clientes. Ahora con CasaLimpia tengo una agenda llena y puedo organizar mi tiempo como quiero. El sistema de pagos es confiable y rápido.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Patricia Silva",
    role: "Cliente Regular",
    rating: 5,
    comment: "Contraté para una limpieza profunda antes de mudarme y quedé sorprendida. Ahora uso el servicio quincenal. El personal es confiable y la atención es perfecta.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
  {
    name: "Roberto Fernández",
    role: "Cliente",
    rating: 5,
    comment: "Trabajo muchas horas y necesitaba ayuda con la limpieza. CasaLimpia me facilitó todo. Reservar es rápido, el pago es seguro y siempre llegan a tiempo.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    const updateSlides = () => {
      const slides = api.slideNodes();
      const scrollProgress = api.scrollProgress();
      const selectedIndex = api.selectedScrollSnap();

      slides.forEach((slide: HTMLElement, index: number) => {
        const distance = Math.abs(selectedIndex - index);
        const scale = Math.max(0.7, 1 - distance * 0.15);
        const opacity = Math.max(0.3, 1 - distance * 0.35);
        const rotateY = (selectedIndex - index) * 25;
        const translateZ = distance === 0 ? 0 : -100 * distance;

        slide.style.transform = `
          scale(${scale}) 
          rotateY(${rotateY}deg) 
          translateZ(${translateZ}px)
        `;
        slide.style.opacity = `${opacity}`;
        slide.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      });
    };

    api.on("scroll", updateSlides);
    api.on("select", updateSlides);
    updateSlides();

    return () => {
      api.off("scroll", updateSlides);
      api.off("select", updateSlides);
    };
  }, [api]);

  return (
    <section id="testimonials" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Usuarios
          </h2>
          <p className="text-xl text-muted-foreground">
            Testimonios reales de clientes y trabajadores satisfechos
          </p>
        </div>

        <div className="relative" style={{ perspective: "1000px" }}>
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card className="border-2 h-full">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-center text-center space-y-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                          />
                          <div className="flex gap-1">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 fill-amber-400 text-amber-400"
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground italic">
                            "{testimonial.comment}"
                          </p>
                          <div>
                            <p className="font-semibold text-foreground">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
