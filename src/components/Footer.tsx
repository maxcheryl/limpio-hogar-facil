import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            <span className="text-2xl font-bold">Limpieza Hogar</span>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-white/80">
              © 2024 Limpieza Hogar. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
