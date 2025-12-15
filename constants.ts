import { ServiceTerms, ServiceType } from './types';

export const TERMS_DATA: Record<ServiceType, ServiceTerms> = {
  [ServiceType.WEB]: {
    id: ServiceType.WEB,
    name: "Desarrollo Web",
    icon: "Globe",
    description: "Creación de experiencias digitales, sitios corporativos y e-commerce.",
    responsibilities: {
      title: "Responsabilidades del Cliente",
      items: [
        {
          text: "Entrega de todo el material gráfico (logos, fotos) y textos finales antes del inicio del desarrollo.",
          tooltip: "Ej: Logo en formato vectorial (AI, SVG) y textos de 'Quiénes Somos' o 'Servicios' revisados y aprobados."
        },
        {
          text: "Proporcionar accesos a hosting y dominio si ya fueron contratados.",
          tooltip: "Ej: Usuario y contraseña de GoDaddy, HostGator o acceso al cPanel."
        },
        {
          text: "Feedback consolidado en un solo documento por cada ronda de revisión.",
          tooltip: "Ej: Un archivo PDF o Word listando todos los cambios solicitados, en lugar de 10 correos separados."
        },
        {
          text: "El cliente es responsable legal de los derechos de autor de las imágenes proporcionadas.",
          tooltip: "Ej: Si nos envías fotos descargadas de Google, asumes la responsabilidad si tienen copyright."
        }
      ]
    },
    revisions: {
      title: "Política de Cambios y Revisiones",
      items: [
        {
          text: "El proyecto incluye: 1 Revisión Mayor (Estructural/UX) y 2 Revisiones Menores (Ajustes Finales).",
          tooltip: "Ej: Mayor = Mover el menú de lugar. Menor = Cambiar una foto o corregir un texto."
        },
        {
          text: "Solicitud en Bloque: Todos los cambios deben enviarse en un único documento o correo enumerado.",
          tooltip: "Ej: No enviar audios de WhatsApp por cada corrección. Enviar una lista numerada del 1 al 10."
        },
        {
          text: "Revisión Menor (Incluida): Ajustes de texto (typos), cambios de color simples (CSS), o sustitución de imágenes puntuales.",
          tooltip: "Ej: Corregir una falta de ortografía en el 'Home' o cambiar el color de un botón de azul a verde."
        },
        {
          text: "Revisión Mayor (Costo Extra si excede límite): Cambios estructurales del layout, nuevas funcionalidades o agregar páginas.",
          tooltip: "Ej: Agregar una sección de 'Noticias' que no estaba en el plan original o cambiar toda la estructura del Home."
        },
        {
          text: "Cualquier cambio estructural fuera de la maqueta aprobada se cotizará como hora extra.",
          tooltip: "Ej: Si se aprobó el diseño en Figma y al programar se pide cambiar la estructura, genera costo adicional."
        },
        {
          text: "Los cambios solicitados después de la entrega final tendrán un costo adicional de mantenimiento.",
          tooltip: "Ej: Un mes después de lanzar la web, pedir cambiar los teléfonos de contacto."
        }
      ]
    },
    inclusions: {
      title: "Lo que HACEMOS (Según plan contratado)",
      items: [
        {
          text: "Diseño UX/UI responsive (adaptable a móviles).",
          tooltip: "Ej: El sitio se verá bien tanto en iPhone, Android como en computadoras de escritorio."
        },
        {
          text: "Redacción de contenidos (copywriting) y optimización de textos para web.",
          tooltip: "Ej: Ajustar tus textos para que sean más atractivos para el usuario y legibles para Google."
        },
        {
          text: "Gestión y compra de dominio y hosting (según términos del plan).",
          tooltip: "Ej: Configuración de DNS y puesta en marcha del servidor (si está incluido en tu factura)."
        },
        {
          text: "Optimización básica de velocidad y SEO técnico inicial.",
          tooltip: "Ej: Compresión de imágenes para carga rápida y configuración de meta-etiquetas básicas."
        },
        {
          text: "Integración con Google Analytics/Tag Manager.",
          tooltip: "Ej: Instalación del código de rastreo para que puedas ver cuántas visitas tienes."
        },
        {
          text: "Capacitación de 1 hora para administración del sitio (si aplica CMS).",
          tooltip: "Ej: Una videollamada donde te enseñamos a cambiar fotos o subir productos nuevos."
        }
      ]
    },
    exclusions: {
      title: "Lo que NO HACEMOS (Exclusiones)",
      items: [
        {
          text: "Carga masiva de productos (más de 10 productos) en e-commerce sin cotización previa.",
          tooltip: "Ej: Si tienes 500 productos, cargaremos los primeros 10 de ejemplo y te enseñaremos a subir el resto."
        },
        {
          text: "Soporte técnico 24/7 post-entrega sin póliza de mantenimiento.",
          tooltip: "Ej: Si el sitio falla un domingo a las 3AM, se revisará en horario laboral lunes a la mañana."
        },
        {
          text: "Desarrollo de software a medida complejo no especificado en la cotización.",
          tooltip: "Ej: Crear un sistema tipo 'Uber' o 'Airbnb' dentro de una página web informativa."
        }
      ]
    }
  },
  [ServiceType.BRANDING]: {
    id: ServiceType.BRANDING,
    name: "Branding & Identidad",
    icon: "Palette",
    description: "Construcción de marca, logotipos y sistemas visuales.",
    responsibilities: {
      title: "Responsabilidades del Cliente",
      items: [
        {
          text: "Completar el cuestionario de marca (Briefing) con total sinceridad.",
          tooltip: "Ej: Definir claramente tu público objetivo y los valores que quieres que tu marca represente."
        },
        {
          text: "Designar a una única persona para la toma de decisiones y aprobaciones.",
          tooltip: "Ej: Evitar que opinen 5 socios distintos con gustos diferentes, centralizar feedback en un gerente."
        },
        {
          text: "Respetar los tiempos de respuesta y aprobación (máximo 3 días hábiles).",
          tooltip: "Ej: Si tardas 2 semanas en aprobar un boceto, la fecha de entrega final se retrasará igual tiempo."
        },
        {
          text: "Tener lista la información de marca (productos, precios, servicios) y entregarla a tiempo.",
          tooltip: "Ej: Saber exactamente qué vendes y a qué precio para poder diseñar las piezas gráficas acorde al mercado."
        }
      ]
    },
    revisions: {
      title: "Política de Cambios y Revisiones",
      items: [
        {
          text: "La cantidad de revisiones incluidas se determina estrictamente según el plan contratado.",
          tooltip: "Ej: Plan Básico incluye 2 rondas de cambios. Cambios adicionales se cobran aparte."
        },
        {
          text: "Solicitud en Bloque: Todos los cambios deben enviarse en un único documento.",
          tooltip: "Ej: Listar todos los ajustes de color y forma en un solo correo, no en hilos separados."
        },
        {
          text: "Revisión Menor (Según plan): Ajustes de interletraje, variaciones de tono, refinamiento.",
          tooltip: "Ej: 'Hacer el azul un poco más oscuro' o 'separar un poco más las letras del nombre'."
        },
        {
          text: "Revisión Mayor (Nuevo Proyecto): Cambio total del nombre, estilo gráfico o rediseño del símbolo.",
          tooltip: "Ej: Si después de ver las propuestas minimalistas decides que ahora quieres algo estilo vintage y cargado."
        },
        {
          text: "Cambios radicales de concepto una vez elegida la ruta contarán como un nuevo proyecto.",
          tooltip: "Ej: Aprobar el boceto A y a mitad de desarrollo pedir cambiar al boceto B."
        }
      ]
    },
    inclusions: {
      title: "Lo que HACEMOS (Según plan contratado)",
      items: [
        {
          text: "Entrega de archivos editables (AI, EPS) y de uso final (PNG, JPG, SVG).",
          tooltip: "Ej: Te entregamos el archivo original de Illustrator y los logos con fondo transparente para tus redes."
        },
        {
          text: "Manual de uso de marca (Brandbook) básico o completo según plan.",
          tooltip: "Ej: Un documento PDF que dice qué tipografías usar y qué colores son los oficiales de tu marca."
        },
        {
          text: "Versiones del logo (positivo, negativo, monocromo).",
          tooltip: "Ej: Logo en color original, logo todo blanco para fondos oscuros y logo todo negro para facturas."
        },
        {
          text: "Cesión de derechos patrimoniales sobre el diseño final una vez liquidado el pago.",
          tooltip: "Ej: El logo es 100% tuyo y puedes usarlo donde quieras sin pagarnos regalías."
        }
      ]
    },
    exclusions: {
      title: "Lo que NO HACEMOS (Exclusiones)",
      items: [
        {
          text: "Trámite de registro de marca ante el IMPI u organismos legales.",
          tooltip: "Ej: Diseñamos el logo, pero no somos abogados para registrarlo legalmente ante el gobierno."
        },
        {
          text: "Impresión de papelería (entregamos los archivos listos para imprenta).",
          tooltip: "Ej: Te damos el archivo de la tarjeta de presentación, pero tú debes llevarlo a imprimir."
        }
      ]
    },
    additionalClauses: {
      title: "Cláusulas de Pausa y Cancelación",
      items: [
        {
          text: "Si el proyecto se pausa o el cliente no responde por falta de información, se cobrará una comisión de reactivación.",
          tooltip: "Ej: Si dejas el proyecto en 'stand-by' durante semanas porque te falta información, reactivarlo tendrá un costo."
        },
        {
          text: "Eyeroniq se reserva el derecho de terminar el proyecto SIN REEMBOLSO si la inactividad es prolongada.",
          tooltip: "Ej: Si pasas meses sin respondernos, cerraremos el proyecto y no se devolverá el dinero abonado."
        }
      ]
    }
  },
  [ServiceType.SOCIAL]: {
    id: ServiceType.SOCIAL,
    name: "Social Media",
    icon: "Smartphone",
    description: "Gestión de redes, creación de contenido y estrategia digital.",
    responsibilities: {
      title: "Responsabilidades del Cliente",
      items: [
        {
          text: "Aprobación de la parrilla de contenidos mensual máximo 3 días antes de comenzar.",
          tooltip: "Ej: Aprobar los posts de Febrero antes del 28 de Enero para poder programar a tiempo."
        },
        {
          text: "Proporcionar material crudo (fotos/videos de productos) si no se contrata sesión.",
          tooltip: "Ej: Enviar fotos de los platillos o videos de la tienda tomados con celular si no hay fotógrafo."
        },
        {
          text: "Responder a dudas operativas en menos de 24 horas.",
          tooltip: "Ej: Confirmar si hay stock de un producto antes de que publiquemos la oferta."
        },
        {
          text: "Enviar y mantener actualizados los datos de contacto, productos y precios.",
          tooltip: "Ej: Avisarnos si cambiaron el número de WhatsApp o si subieron los precios del menú."
        }
      ]
    },
    revisions: {
      title: "Política de Cambios y Revisiones",
      items: [
        {
          text: "El servicio incluye: 1 Revisión Mayor (Concepto) y 2 Revisiones Menores (Edición).",
          tooltip: "Ej: Mayor = Cambiar el tema del mes. Menor = Corregir un precio o una frase."
        },
        {
          text: "Solicitud en Bloque: Todos los cambios deben enviarse en un único documento.",
          tooltip: "Ej: Revisar toda la parrilla mensual de una vez y mandar una lista única de correcciones."
        },
        {
          text: "Revisión Menor (Incluida): Correcciones ortográficas, cambios de copy, sustitución de stock.",
          tooltip: "Ej: Cambiar 'Llámanos' por 'Escríbenos' o cambiar una foto de banco de imágenes."
        },
        {
          text: "Revisión Mayor (Costo Extra): Rediseño total de artes o cambio de concepto ya aprobado.",
          tooltip: "Ej: Si se aprobaron diseños minimalistas y luego se piden diseños coloridos y complejos."
        },
        {
          text: "Una vez aprobado y programado el contenido, cualquier cambio de emergencia tiene costo extra.",
          tooltip: "Ej: Pedir borrar un post ya publicado para cambiarle una fecha."
        }
      ]
    },
    inclusions: {
      title: "Lo que HACEMOS (Según plan contratado)",
      items: [
        {
          text: "Diseño gráfico y redacción de posts según el plan contratado.",
          tooltip: "Ej: Crear la imagen atractiva y el texto (caption) que acompaña la publicación en Instagram."
        },
        {
          text: "Gestión de campañas de publicidad (Ads) y segmentación.",
          tooltip: "Ej: Configurar Facebook Ads para que tu anuncio le salga a personas de 25-35 años en tu ciudad."
        },
        {
          text: "Programación de publicaciones en herramientas de gestión.",
          tooltip: "Ej: Dejar todo listo en Meta Business Suite para que se publique automáticamente."
        },
        {
          text: "Reporte mensual de métricas y rendimiento.",
          tooltip: "Ej: Un PDF al mes mostrando cuánto crecieron los seguidores y el alcance de las publicaciones."
        }
      ]
    },
    exclusions: {
      title: "Lo que NO HACEMOS (Exclusiones)",
      items: [
        {
          text: "Diseños solicitados fuera del calendario aprobado (tienen costo extra).",
          tooltip: "Ej: Pedir un diseño urgente por el 'Día del Gato' que no estaba planeado en el mes."
        },
        {
          text: "Atención a clientes o ventas directas por DM (canalizamos al cliente).",
          tooltip: "Ej: No cerramos ventas ni cobramos por ti, solo dirigimos al cliente a tu WhatsApp."
        },
        {
          text: "Gestión de crisis de reputación fuera del horario laboral sin fee de emergencia.",
          tooltip: "Ej: Si recibes malos comentarios el sábado a la noche, se gestionan el lunes o con pago extra."
        }
      ]
    }
  }
};