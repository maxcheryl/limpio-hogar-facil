import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, CheckCircle, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import MariaImg from "../assets/Maria.jpeg";
import MasterCImg from "../assets/Master_Chief.jpeg";
import LaraCImg from "../assets/Lara_Croft.jpeg";
import LeonImg from "../assets/Leon_S._Kennedy.jpeg";
import JoelImg from "../assets/Joel_Miller.jpeg";
import GordonFImg from "../assets/Gordon_Freeman.jpeg";
import CurlyImg from "../assets/Curly.jpeg";
import AnakinImg from "../assets/Anakin_Skywalker.jpeg";

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
    id: 8,
    name: "Anakin Skywalker",
    image: AnakinImg,
    rating: 4.7,
    reviewCount: 95,
    hourlyRate: 16,
    location: "Tatooine",
    verified: true,
    services: ["Limpieza de oficinas", "Mantenimiento", "Cristales"],
    experience: "5 años de experiencia",
    availability: "Disponible mañana",
  },
  {
    id: 1,
    name: "María",
    image: MariaImg,
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 15,
    location: "Silent Hill",
    verified: true,
    services: ["Limpieza general", "Limpieza profunda", "Organización"],
    experience: "5 años de experiencia",
    availability: "Disponible hoy",
  },
  {
    id: 2,
    name: "Master Chief",
    image: MasterCImg,
    rating: 4.8,
    reviewCount: 98,
    hourlyRate: 18,
    location: "UNSC Pillar of Autumn",
    verified: true,
    services: ["Limpieza de oficinas", "Desinfección", "Ventanas"],
    experience: "7 años de experiencia",
    availability: "Disponible mañana",
  },
  {
    id: 3,
    name: "Lara Croft",
    image: LaraCImg,
    rating: 5.0,
    reviewCount: 156,
    hourlyRate: 20,
    location: "Desierto de Atacama",
    verified: true,
    services: ["Limpieza profunda", "Cocina", "Baños"],
    experience: "8 años de experiencia",
    availability: "Disponible hoy",
  },
  {
    id: 4,
    name: "Leon S. Kennedy",
    image: LeonImg,
    rating: 4.7,
    reviewCount: 82,
    hourlyRate: 16,
    location: "Washington D.C.",
    verified: true,
    services: ["Limpieza general", "Jardines", "Exteriores"],
    experience: "4 años de experiencia",
    availability: "Disponible pasado mañana",
  },
  {
    id: 5,
    name: "Joel Miller",
    image: JoelImg,
    rating: 4.9,
    reviewCount: 143,
    hourlyRate: 17,
    location: "Jackson, Wyoming.",
    verified: true,
    services: ["Limpieza post-obra", "Mudanzas", "Organización"],
    experience: "6 años de experiencia",
    availability: "Disponible hoy",
  },
  {
    id: 6,
    name: "Gordon Freeman",
    image: GordonFImg,
    rating: 4.6,
    reviewCount: 71,
    hourlyRate: 14,
    location: "Nuevo México",
    verified: false,
    services: ["Limpieza general", "Alfombras"],
    experience: "3 años de experiencia",
    availability: "Disponible mañana",
  },
  {
    id: 7,
    name: "Curly",
    image: CurlyImg,
    rating: 4.8,
    reviewCount: 109,
    hourlyRate: 19,
    location: "Nave Interestelar",
    verified: true,
    services: ["Limpieza profunda", "Desinfección", "Organización"],
    experience: "6 años de experiencia",
    availability: "Disponible hoy",
  },
];

const Workers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const filteredWorkers =
    selectedLocation === "all"
      ? workers
      : workers.filter((worker) => worker.location === selectedLocation);

  const locations = [
    "all",
    ...Array.from(new Set(workers.map((w) => w.location))),
  ];

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
              Todos nuestros trabajadores están verificados y tienen excelentes
              calificaciones
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
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs"
                        >
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
                      <Button size="sm">Reservar</Button>
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
