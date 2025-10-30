import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, CheckCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface Worker {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  location: string;
  verified: boolean;
  services: string[];
  experience: string;
  availability: string;
}

const workers: Worker[] = [
  {
    id: 1,
    name: "María González",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 15,
    location: "Ciudad Central",
    verified: true,
    services: ["Limpieza general", "Limpieza profunda", "Organización"],
    experience: "5 años de experiencia",
    availability: "Disponible hoy",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 98,
    hourlyRate: 18,
    location: "Zona Norte",
    verified: true,
    services: ["Limpieza de oficinas", "Desinfección", "Ventanas"],
    experience: "7 años de experiencia",
    availability: "Disponible mañana",
  },
  {
    id: 3,
    name: "Ana Martínez",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    rating: 5.0,
    reviewCount: 156,
    hourlyRate: 20,
    location: "Zona Sur",
    verified: true,
    services: ["Limpieza profunda", "Cocina", "Baños"],
    experience: "8 años de experiencia",
    availability: "Disponible hoy",
  },
  {
    id: 4,
    name: "Jorge López",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 82,
    hourlyRate: 16,
    location: "Zona Este",
    verified: true,
    services: ["Limpieza general", "Jardines", "Exteriores"],
    experience: "4 años de experiencia",
    availability: "Disponible pasado mañana",
  },
  {
    id: 5,
    name: "Patricia Silva",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 143,
    hourlyRate: 17,
    location: "Ciudad Central",
    verified: true,
    services: ["Limpieza post-obra", "Mudanzas", "Organización"],
    experience: "6 años de experiencia",
    availability: "Disponible hoy",
  },
  {
    id: 6,
    name: "Roberto Fernández",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 71,
    hourlyRate: 14,
    location: "Zona Oeste",
    verified: false,
    services: ["Limpieza general", "Alfombras"],
    experience: "3 años de experiencia",
    availability: "Disponible mañana",
  },
  {
    id: 7,
    name: "Laura Ramírez",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 109,
    hourlyRate: 19,
    location: "Zona Norte",
    verified: true,
    services: ["Limpieza profunda", "Desinfección", "Organización"],
    experience: "6 años de experiencia",
    availability: "Disponible hoy",
  },
  {
    id: 8,
    name: "Miguel Torres",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 95,
    hourlyRate: 16,
    location: "Zona Sur",
    verified: true,
    services: ["Limpieza de oficinas", "Mantenimiento", "Cristales"],
    experience: "5 años de experiencia",
    availability: "Disponible mañana",
  },
];

const Workers = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const filteredWorkers = selectedLocation === "all" 
    ? workers 
    : workers.filter(worker => worker.location === selectedLocation);

  const locations = ["all", ...Array.from(new Set(workers.map(w => w.location)))];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Encuentra tu Profesional Ideal
            </h1>
            <p className="text-xl text-muted-foreground">
              Todos nuestros trabajadores están verificados y tienen excelentes calificaciones
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Button
              variant={selectedLocation === "all" ? "default" : "outline"}
              onClick={() => setSelectedLocation("all")}
            >
              Todas las zonas
            </Button>
            {locations.slice(1).map((location) => (
              <Button
                key={location}
                variant={selectedLocation === location ? "default" : "outline"}
                onClick={() => setSelectedLocation(location)}
              >
                {location}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWorkers.map((worker) => (
              <Card
                key={worker.id}
                className="border-2 hover:shadow-lg hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader className="pb-3">
                  <div className="relative">
                    <img
                      src={worker.image}
                      alt={worker.name}
                      className="w-full h-48 object-cover rounded-lg mb-3"
                    />
                    {worker.verified && (
                      <Badge className="absolute top-2 right-2 bg-primary">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verificado
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{worker.name}</CardTitle>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-semibold">{worker.rating}</span>
                    </div>
                    <span className="text-muted-foreground">
                      ({worker.reviewCount} reseñas)
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">{worker.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{worker.availability}</span>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-sm text-muted-foreground mb-2">
                      {worker.experience}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {worker.services.map((service, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-between border-t">
                    <div>
                      <p className="text-2xl font-bold text-foreground">
                        ${worker.hourlyRate}
                      </p>
                      <p className="text-xs text-muted-foreground">por hora</p>
                    </div>
                    <Link to="/auth">
                      <Button size="sm">
                        Reservar
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Workers;
