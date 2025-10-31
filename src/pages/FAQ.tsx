import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const faqs = [
  {
    category: "Servicios",
    questions: [
      {
        question: "¿Qué tipos de servicios de limpieza ofrecen?",
        answer:
          "Ofrecemos una amplia gama de servicios incluyendo limpieza general, limpieza profunda, limpieza de oficinas, limpieza de ventanas, cocinas, baños, limpieza post-obra, para mudanzas, jardines, alfombras, desinfección y organización.",
      },
      {
        question: "¿Cuánto tiempo toma un servicio de limpieza?",
        answer:
          "El tiempo varía según el tipo de servicio y el tamaño del espacio. Una limpieza general puede tomar de 2-4 horas, mientras que una limpieza profunda puede tomar de 4-8 horas. Los profesionales te darán un estimado más preciso al revisar tu solicitud.",
      },
      {
        question: "¿Los profesionales traen sus propios materiales de limpieza?",
        answer:
          "La mayoría de nuestros profesionales traen sus propios productos y herramientas de limpieza. Sin embargo, puedes especificar si prefieres que usen productos específicos o los tuyos propios al hacer la reserva.",
      },
    ],
  },
  {
    category: "Reservas y Pagos",
    questions: [
      {
        question: "¿Cómo reservo un servicio?",
        answer:
          "Simplemente navega a nuestra página de profesionales, selecciona el trabajador que prefieras según su ubicación, calificación y tarifa, y haz clic en 'Reservar'. Deberás iniciar sesión o crear una cuenta para completar la reserva.",
      },
      {
        question: "¿Cuáles son los métodos de pago aceptados?",
        answer:
          "Aceptamos tarjetas de crédito/débito, transferencias bancarias y pagos en efectivo. Todos los pagos en línea son procesados de forma segura a través de nuestra plataforma encriptada.",
      },
      {
        question: "¿Puedo cancelar o reprogramar mi reserva?",
        answer:
          "Sí, puedes cancelar o reprogramar tu reserva hasta 24 horas antes del servicio sin costo adicional. Cancelaciones con menos de 24 horas de anticipación pueden estar sujetas a una tarifa de cancelación.",
      },
      {
        question: "¿Cuándo se realiza el pago?",
        answer:
          "El pago se procesa después de que el servicio se haya completado satisfactoriamente. Mantenemos los fondos de forma segura durante el servicio y los liberamos al profesional una vez que confirmes la finalización del trabajo.",
      },
    ],
  },
  {
    category: "Seguridad y Verificación",
    questions: [
      {
        question: "¿Cómo verifican a los profesionales?",
        answer:
          "Todos nuestros profesionales pasan por un riguroso proceso de verificación que incluye verificación de identidad, revisión de antecedentes, validación de experiencia y referencias. Los profesionales con el badge 'Verificado' han completado exitosamente este proceso.",
      },
      {
        question: "¿Qué pasa si no estoy satisfecho con el servicio?",
        answer:
          "Tu satisfacción es nuestra prioridad. Si no estás conforme con el servicio, contacta a nuestro equipo de soporte dentro de las 24 horas posteriores. Revisaremos tu caso y trabajaremos para encontrar una solución, que puede incluir un reembolso parcial o total, o un nuevo servicio sin costo.",
      },
      {
        question: "¿Los profesionales están asegurados?",
        answer:
          "Recomendamos a todos nuestros profesionales mantener un seguro de responsabilidad civil. Muchos de nuestros profesionales verificados cuentan con este seguro. Puedes consultar esta información en su perfil o preguntar directamente antes de reservar.",
      },
    ],
  },
  {
    category: "Para Profesionales",
    questions: [
      {
        question: "¿Cómo puedo registrarme como profesional de limpieza?",
        answer:
          "Haz clic en el botón 'Ofrecer Servicios' en nuestra página principal, completa el formulario con tu información y servicios que ofreces, y luego crea tu cuenta. Nuestro equipo revisará tu solicitud y te contactará para completar el proceso de verificación.",
      },
      {
        question: "¿Cuánto cobran por usar la plataforma?",
        answer:
          "CasaLimpia cobra una pequeña comisión del 15% sobre cada servicio completado. Esto cubre el procesamiento de pagos, soporte al cliente, marketing y el uso de nuestra plataforma. No hay tarifas mensuales ni costos ocultos.",
      },
      {
        question: "¿Cuándo recibo el pago por mis servicios?",
        answer:
          "Los pagos se procesan automáticamente 48 horas después de completar cada servicio, una vez que el cliente confirme la finalización. Los fondos se transfieren directamente a tu cuenta bancaria registrada.",
      },
      {
        question: "¿Puedo establecer mi propia tarifa?",
        answer:
          "Sí, como profesional independiente, tú estableces tu propia tarifa por hora. Recomendamos investigar las tarifas del mercado en tu área para mantener competitividad. Puedes ajustar tu tarifa en cualquier momento desde tu perfil.",
      },
    ],
  },
];

const FAQ = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Preguntas Frecuentes
              </h1>
              <p className="text-xl text-muted-foreground">
                Encuentra respuestas rápidas a las preguntas más comunes sobre
                CasaLimpia
              </p>
            </div>

            <div className="space-y-12">
              {faqs.map((category, idx) => (
                <div key={idx}>
                  <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-2 border-primary/20">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, qIdx) => (
                      <AccordionItem
                        key={qIdx}
                        value={`${idx}-${qIdx}`}
                        className="border-2 rounded-lg px-6 hover:border-primary/50 transition-colors"
                      >
                        <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¿No encontraste tu respuesta?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nuestro equipo de soporte está listo para ayudarte
              </p>
              <Button
                size="lg"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    document.getElementById("support")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                Contactar Soporte
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
