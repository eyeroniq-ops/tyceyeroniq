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
        "Entrega de todo el material gráfico (logos, fotos) y textos finales antes del inicio del desarrollo.",
        "Proporcionar accesos a hosting y dominio si ya fueron contratados.",
        "Feedback consolidado en un solo documento por cada ronda de revisión.",
        "El cliente es responsable legal de los derechos de autor de las imágenes proporcionadas."
      ]
    },
    revisions: {
      title: "Política de Cambios y Revisiones",
      items: [
        "El proyecto incluye: 1 Revisión Mayor (Estructural/UX) y 2 Revisiones Menores (Ajustes Finales).",
        "Solicitud en Bloque: Todos los cambios deben enviarse en un único documento o correo enumerado. No se aceptan cambios por mensajes de audio o textos dispersos.",
        "Revisión Menor (Incluida): Ajustes de texto (typos), cambios de color simples (CSS), o sustitución de imágenes puntuales sin cambiar dimensiones.",
        "Revisión Mayor (Costo Extra si excede límite): Cambios estructurales del layout (mover secciones), nuevas funcionalidades no cotizadas, o agregar páginas nuevas.",
        "Cualquier cambio estructural fuera de la maqueta aprobada se cotizará como hora extra.",
        "Los cambios solicitados después de la entrega final tendrán un costo adicional de mantenimiento."
      ]
    },
    inclusions: {
      title: "Lo que HACEMOS (Según plan contratado)",
      items: [
        "Diseño UX/UI responsive (adaptable a móviles).",
        "Redacción de contenidos (copywriting) y optimización de textos para web.",
        "Gestión y compra de dominio y hosting (según términos del plan).",
        "Optimización básica de velocidad y SEO técnico inicial.",
        "Integración con Google Analytics/Tag Manager.",
        "Capacitación de 1 hora para administración del sitio (si aplica CMS)."
      ]
    },
    exclusions: {
      title: "Lo que NO HACEMOS (Exclusiones)",
      items: [
        "Carga masiva de productos (más de 10 productos) en e-commerce sin cotización previa.",
        "Soporte técnico 24/7 post-entrega sin póliza de mantenimiento.",
        "Desarrollo de software a medida complejo no especificado en la cotización."
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
        "Completar el cuestionario de marca (Briefing) con total sinceridad.",
        "Designar a una única persona para la toma de decisiones y aprobaciones.",
        "Respetar los tiempos de respuesta y aprobación (máximo 3 días hábiles) para no afectar el cronograma.",
        "Tener lista la información de marca (productos, precios, servicios) y entregarla dentro de los tiempos del cronograma establecido."
      ]
    },
    revisions: {
      title: "Política de Cambios y Revisiones",
      items: [
        "La cantidad de revisiones incluidas (Mayor/Menor) se determina estrictamente según el plan contratado.",
        "Solicitud en Bloque: Todos los cambios deben enviarse en un único documento o correo enumerado. No se aceptan cambios por mensajes de audio o textos dispersos.",
        "Revisión Menor (Según plan): Ajustes de interletraje, variaciones de tono de color, refinamiento de trazos o proporciones.",
        "Revisión Mayor (Nuevo Proyecto): Cambio total del nombre de la marca, cambio radical de estilo gráfico o rediseño del símbolo tras aprobación inicial.",
        "Cambios radicales de concepto una vez elegida la ruta contarán como un nuevo proyecto."
      ]
    },
    inclusions: {
      title: "Lo que HACEMOS (Según plan contratado)",
      items: [
        "Entrega de archivos editables (AI, EPS) y de uso final (PNG, JPG, SVG).",
        "Manual de uso de marca (Brandbook) básico o completo según plan.",
        "Versiones del logo (positivo, negativo, monocromo).",
        "Cesión de derechos patrimoniales sobre el diseño final una vez liquidado el pago."
      ]
    },
    exclusions: {
      title: "Lo que NO HACEMOS (Exclusiones)",
      items: [
        "Trámite de registro de marca ante el IMPI u organismos legales (aunque entregamos archivos listos).",
        "Impresión de papelería (entregamos los archivos listos para imprenta)."
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
        "Aprobación de la parrilla de contenidos mensual máximo 3 días antes de comenzar la primera semana del periodo.",
        "Proporcionar material crudo (fotos/videos de productos) si no se contrata sesión de fotos.",
        "Responder a dudas operativas en menos de 24 horas para no frenar la publicación.",
        "Enviar y mantener actualizados los datos de contacto, así como la lista de productos, servicios y precios."
      ]
    },
    revisions: {
      title: "Política de Cambios y Revisiones",
      items: [
        "El servicio incluye por mes: 1 Revisión Mayor (Concepto/Parrilla) y 2 Revisiones Menores (Edición).",
        "Solicitud en Bloque: Todos los cambios deben enviarse en un único documento o correo enumerado. No se aceptan cambios por mensajes de audio o textos dispersos.",
        "Revisión Menor (Incluida): Correcciones ortográficas, cambios de copy sencillos, o sustitución de fotos de stock.",
        "Revisión Mayor (Costo Extra si excede límite): Rediseño total de artes, cambio de concepto de campaña ya aprobada, o re-edición completa de videos.",
        "Una vez aprobado y programado el contenido, cualquier cambio de emergencia tiene costo extra."
      ]
    },
    inclusions: {
      title: "Lo que HACEMOS (Según plan contratado)",
      items: [
        "Diseño gráfico y redacción de posts según el plan contratado.",
        "Gestión de campañas de publicidad (Ads) y segmentación.",
        "Programación de publicaciones en herramientas de gestión.",
        "Reporte mensual de métricas y rendimiento.",
        "Community Management básico (responder comentarios en horario laboral)."
      ]
    },
    exclusions: {
      title: "Lo que NO HACEMOS (Exclusiones)",
      items: [
        "Diseños solicitados fuera del calendario aprobado (tienen costo extra).",
        "Atención a clientes o ventas directas por DM (canalizamos al cliente).",
        "Gestión de crisis de reputación fuera del horario laboral sin fee de emergencia."
      ]
    }
  }
};