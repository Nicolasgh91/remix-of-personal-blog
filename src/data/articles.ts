import article001Banner from "@/assets/article-001/customer-lifetime-value-graph.webp";
import article002Banner from "@/assets/article 002/SEO-en-videos-cortos.webp";
import article003Banner from "@/assets/article 04/think-bigger.png";
import article005Banner from "@/assets/article-005/predictive-analytics-hero.jpg";
import article006Banner from "@/assets/article-006/first-party-data-hero.jpg";

/** Texto único (cursiva en UI) o bloque con título + párrafos. Cadena vacía = sin bloque de conclusión. */
export type ArticleConclusion =
  | string
  | {
      heading: string;
      paragraphs: string[];
    };

export function isStructuredArticleConclusion(
  c: ArticleConclusion
): c is { heading: string; paragraphs: string[] } {
  return typeof c === "object" && c !== null && "heading" in c && "paragraphs" in c;
}

export type ArticleSection = {
  heading: string;
  content?: string;
  paragraphs?: string[];
  orderedList?: string[];
  unorderedList?: string[];
  blockquote?: string;
};

/** Bibliografía al pie, opcional; se renderiza antes del bloque de conclusión. */
export type ArticleBibliography = {
  heading: string;
  content?: string;
  unorderedList: string[];
};

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  /** `object-position` del hero en la página de artículo (no afecta thumbnails). Solo definir cuando el encuadre con `object-cover` lo requiera. */
  heroImagePosition?: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    introduction: string;
    /** Reutiliza `article.image` entre la intro y la primera sección. */
    inlineHeroAfterIntroduction?: boolean;
    /** Leyenda visible (SEO); se usa en `<figcaption>` si hay imagen inline. */
    inlineImageCaption?: string;
    sections: ArticleSection[];
    conclusion: ArticleConclusion;
    bibliography?: ArticleBibliography;
  };
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "AJ001",
    title: "Análisis profundo: tácticas de automatización para embudos de retención",
    subtitle: "Alex Jensen | Analista de crecimiento y estratega digital",
    category: "Growth",
    date: "4 abr 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
    author: {
      name: "Alex Jensen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
      bio: "Analista de crecimiento y estratega digital",
    },
    content: {
      introduction:
        "En un ecosistema digital lleno de ruido y tácticas contradictorias, a veces la mejor estrategia es observar los datos con claridad para cortar el caos. El growth hacking no se trata solo de métricas vanidosas; se trata de entender el comportamiento de tus usuarios y alinear tus recursos con los canales que realmente convierten.",
      sections: [
        {
          heading: "El poder del análisis profundo",
          content:
            "antes de lanzar una nueva campaña de adquisición, a menudo nos apresuramos a copiar a la competencia o probar la última red social de moda. Sin embargo, los descubrimientos más rentables suelen aparecer cuando damos un paso atrás y analizamos nuestros propios embudos de venta. Tomarse el tiempo para la experimentación estructurada nos permite conectar con las verdaderas necesidades de nuestra audiencia y entender qué significa realmente la retención para nuestro producto, no lo que la industria nos dice que debería significar.",
        },
        {
          heading: "Construyendo conciencia analítica",
          content:
            "el verdadero crecimiento comienza con la medición de eventos. Esto significa evaluar honestamente dónde estás perdiendo usuarios, comprender los patrones de navegación y reconocer los cuellos de botella en tus formularios de pago. No se trata de buscar culpables, sino de tener una observación basada en datos. Cuando podemos ver nuestra realidad analítica claramente, estamos empoderados para ejecutar iteraciones intencionales.",
        },
        {
          heading: "Pequeños pasos, cambio duradero",
          content:
            "las mejores estrategias de growth nos guían hacia micro-optimizaciones sostenibles en lugar de rediseños completos del producto. Quizás sea automatizar una secuencia de correos para carritos abandonados, optimizar el tiempo de carga de tu landing page o realizar pruebas A/B en el color de tus botones de llamada a la acción. Estas mejoras técnicas, aplicadas consistentemente, apalancan el interés compuesto y crean un crecimiento exponencial a lo largo del tiempo.",
        },
        {
          heading: "Estrategia basada en retención",
          content:
            "cuando alineamos nuestras decisiones de adquisición con el valor de vida del cliente (LTV), el marketing se convierte en una herramienta predecible para escalar. Preguntate: ¿cuál es la métrica que define el éxito principal de mi usuario? ¿Cómo pueden mis cambios de interfaz reducir la fricción? Las respuestas a estas preguntas son la verdadera brújula para navegar la escalabilidad de tu negocio.",
        },
      ],
      conclusion: "",
    },
    tags: ["growth hacking", "retención", "LTV", "experimentación"],
  },
  {
    id: "001",
    title: "Priorizar la retención sobre la adquisición: la métrica que define la supervivencia",
    subtitle:
      "Ante el aumento del costo de adquisición (CAC), el crecimiento sostenible depende de maximizar el valor de vida del cliente (LTV).",
    category: "Growth",
    date: "10 abr 2026",
    readTime: "6 min",
    image: article001Banner,
    author: {
      name: "Alex Jensen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
      bio: "Analista de crecimiento y estratega digital",
    },
    content: {
      introduction:
        "En el ecosistema digital actual, la obsesión por adquirir nuevos usuarios ha cegado a muchas empresas ante una realidad matemática ineludible: la adquisición se está volviendo insostenible. Con los costos de publicidad en máximos históricos y la depreciación de las cookies de terceros, la verdadera batalla por la rentabilidad ya no se libra en la parte superior del embudo, sino en la capacidad de retener y expandir el valor de los clientes existentes.",
      inlineHeroAfterIntroduction: true,
      inlineImageCaption:
        "Evolución del customer lifetime value en función del canal de adquisición",
      sections: [
        {
          heading: "El fin de la era de la adquisición barata",
          paragraphs: [
            "Durante la última década, las estrategias de marketing se centraron en escalar el presupuesto publicitario. Sin embargo, el Costo de Adquisición de Clientes (CAC) ha aumentado drásticamente. Las empresas que basan su modelo exclusivamente en atraer nuevos leads están construyendo sobre arena. Llenar un balde agujereado con más agua resulta en un esfuerzo operativo enorme que destruye los márgenes de ganancia.",
            "La solución a este cuello de botella no es gastar más en pauta, sino desviar el enfoque hacia la lealtad y el éxito del cliente.",
          ],
        },
        {
          heading: "LTV como el verdadero motor de crecimiento",
          paragraphs: [
            "El Valor de Vida del Cliente (LTV o CLV) proyecta los ingresos totales que un negocio puede esperar de una sola cuenta a lo largo de su relación. Generar informes predictivos sobre el valor de vida del cliente a partir de sus interacciones es fundamental para entender la salud financiera del proyecto.",
            "Una regla empírica en el growth hacking establece que una relación LTV:CAC saludable debe ser de al menos 3:1. Si un negocio recupera el costo de adquisición en la primera compra pero nunca vuelve a ver a ese cliente, está operando al límite del fracaso. Aumentar la retención en un 5% puede incrementar los beneficios entre un 25% y un 95%, simplemente porque venderle a un usuario existente elimina la fricción y el costo publicitario inicial.",
          ],
        },
        {
          heading: "Tácticas accionables para blindar la retención",
          content:
            "Para transformar la retención en un canal de crecimiento predecible, es imperativo implementar sistemas que aporten valor continuo:",
          orderedList: [
            "Onboarding implacable: los primeros 14 días dictan el futuro de la relación. Si el usuario no experimenta el valor de la solución de forma rápida (el momento «Aha!»), la tasa de abandono (churn) se dispara.",
            "Estrategias de venta adicional (upsell y cross-sell): la retención facilita la identificación de oportunidades para aumentar el valor del cliente. Ofrecer mejoras o productos complementarios en el momento exacto en que el usuario los necesita no es vender, es aportar soluciones.",
            "Comunidades y exclusividad: migrar a los clientes de alto valor hacia ecosistemas privados (Slack, Discord, programas VIP) genera un costo de cambio (switching cost) psicológico y social muy alto.",
          ],
          blockquote:
            "El crecimiento real no proviene de adquirir usuarios de forma masiva, sino de construir un producto del que los usuarios actuales no puedan prescindir.",
        },
        {
          heading: "Medir para iterar",
          content:
            "El análisis de cohortes es la herramienta principal para auditar la retención. Observar cómo se comportan los usuarios agrupados por su mes de adquisición permite detectar exactamente en qué momento se interrumpe el ciclo de vida. Al alinear los esfuerzos técnicos y de marketing hacia la retención, las empresas logran que cada nuevo cliente adquirido actúe como un interés compuesto en el balance general.",
        },
        {
          heading: "Bibliografía de referencia",
          content:
            "Para la elaboración de este análisis y la definición de las estrategias de retención, se han consultado los siguientes marcos teóricos y estudios de la industria:",
          unorderedList: [
            "Bain & Company (Reichheld, F.): «Prescription for cutting costs» — estudio fundamental sobre el impacto de la retención del 5% en el aumento de beneficios.",
            "Ellis, S. y Brown, M. (2017): Hacking Growth: How Today's Fastest-Growing Companies Drive Breakout Success (metodologías ágiles y análisis de cohortes).",
            "Blank, S. (2013): The Four Steps to the Epiphany (desarrollo y retención de clientes B2B).",
            "Harvard Business Review: «The Value of Keeping the Right Customers» (análisis sobre la relación LTV:CAC en empresas SaaS).",
          ],
        },
      ],
      conclusion: {
        heading: "Conclusión: la retención como ventaja competitiva",
        paragraphs: [
          "El cambio de paradigma es claro: adquirir usuarios a cualquier costo es una métrica de vanidad del pasado. En un entorno donde el costo de adquisición sigue escalando, la verdadera rentabilidad reside en blindar la base actual de usuarios. Como se ha expuesto, aumentar la retención en apenas un 5% puede disparar los beneficios entre un 25% y un 95%, demostrando empíricamente que el esfuerzo operativo debe enfocarse en el valor a largo plazo y no solo en la tracción inicial.",
          "Mantener una relación LTV:CAC superior a 3:1 mediante un onboarding impecable, análisis de cohortes y estrategias de venta adicional transforma el embudo de ventas tradicional en un ciclo de crecimiento compuesto. Los negocios que liderarán sus mercados no serán los que gasten más en publicidad, sino aquellos que construyan experiencias de las que sus clientes simplemente no quieran prescindir.",
        ],
      },
    },
    tags: ["retención", "LTV", "CAC", "growth hacking", "fidelización"],
  },
  {
    id: "002",
    title: "SEO en videos cortos: cómo dominar el nuevo motor de búsqueda audiovisual",
    subtitle:
      "TikTok y Reels dejaron de ser plataformas exclusivas de entretenimiento para convertirse en los motores de búsqueda locales preferidos por las nuevas generaciones.",
    category: "Growth",
    date: "15 abr 2026",
    readTime: "5 min",
    image: article002Banner,
    author: {
      name: "Alex Jensen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
      bio: "Analista de crecimiento y estratega digital",
    },
    content: {
      introduction:
        "El comportamiento de descubrimiento digital está atravesando su mayor mutación desde la invención del motor de búsqueda. Hoy, cuando la Generación Z y los millennials buscan un restaurante, una reseña de software o un tutorial rápido, ya no abren Google; abren TikTok o Instagram. Esta transición representa un desafío masivo para las estrategias de adquisición tradicionales, pero también abre una ventana de oportunidad asimétrica para los estrategas de growth que entiendan cómo indexar contenido en el ecosistema de video vertical.",
      sections: [
        {
          heading: "El declive del monopolio de la búsqueda tradicional",
          paragraphs: [
            "El cambio en la intención de búsqueda responde a una necesidad de fricción cero y validación visual instantánea. Los usuarios modernos desconfían de las páginas web corporativas y de las reseñas de texto anónimas que pueden ser fácilmente manipuladas. Buscan autenticidad, contexto visual y respuestas en menos de 60 segundos.",
            "Los algoritmos de plataformas como TikTok han evolucionado de simples motores de recomendación de entretenimiento a sofisticados indexadores de contenido. Ya no solo evalúan el engagement (retención del video y compartidos), sino que procesan el lenguaje natural del audio, los textos en pantalla y los metadatos para resolver consultas de búsqueda específicas.",
          ],
        },
        {
          heading: "Anatomía de la optimización audiovisual",
          content:
            "Hacer SEO en video requiere entender que el algoritmo es ciego, pero tiene una capacidad de lectura y escucha excepcional. Para posicionar un video corto frente a una intención de búsqueda, es necesario estructurar la información en múltiples capas:",
          orderedList: [
            "Ingeniería del guion (Speech-to-text): el algoritmo transcribe automáticamente el audio del video. Las palabras clave principales deben ser pronunciadas claramente en los primeros 3 segundos. Si el video trata sobre «herramientas de automatización para PyMEs», esa frase exacta debe ser el gancho vocal.",
            "Superposiciones de texto nativo: el texto que se añade utilizando el editor interno de la plataforma es indexado con alta prioridad. Un título flotante actúa como la etiqueta H1 de una página web tradicional.",
            "Optimización de la descripción (Captioning): la descripción ya no es el lugar para emojis aleatorios. Funciona como la etiqueta meta-descripción. Debe contener párrafos ricos en palabras clave long-tail que respondan a las dudas específicas del usuario.",
          ],
        },
        {
          heading: "Hackeando el descubrimiento local (GEO SEO)",
          paragraphs: [
            "Para los negocios físicos o de servicios hiper-localizados, el video corto es el nuevo Google Mi Negocio. La clave de la adquisición radica en acotar la competencia mediante la geo-localización.",
            "En lugar de competir por términos amplios como «mejor cafetería de especialidad», la estrategia de crecimiento dicta atacar combinaciones locales exactas: añadir etiquetas de ubicación precisas, mencionar barrios específicos en el audio y utilizar hashtags geolocalizados (ej. #CafeteriaPalermo #EmprendedoresCABA). Al hacerlo, el algoritmo empareja la dirección IP y el historial de ubicación del usuario con el contenido hiper-local.",
          ],
          blockquote:
            "El SEO ya no se trata solo de indexar texto en rastreadores web; se trata de indexar contexto, ubicación y autenticidad en algoritmos de recomendación visual.",
        },
      ],
      conclusion: {
        heading: "Conclusión: la adaptación visual como mandato de supervivencia",
        paragraphs: [
          "Ignorar la optimización de búsqueda en videos cortos es el equivalente moderno a no tener una página web responsiva hace una década. Las marcas que continúen tratando a TikTok o Reels exclusivamente como canales de «baile» o tendencias virales perderán sistemáticamente cuota de mercado frente a competidores que entiendan el juego de la retención visual orientada a la búsqueda. La estrategia ganadora consiste en crear contenido que no solo interrumpa el scroll, sino que responda a preguntas precisas.",
        ],
      },
      bibliography: {
        heading: "Bibliografía de referencia",
        content:
          "Para la elaboración de este análisis sobre el comportamiento algorítmico y visual, se han consultado las siguientes fuentes de la industria:",
        unorderedList: [
          "Prabhakar Raghavan (Senior Vice President, Google): declaraciones públicas en la conferencia Brainstorm Tech sobre el impacto de TikTok e Instagram en las búsquedas principales de Google Maps y Search.",
          "HubSpot: State of Marketing Report (tendencias de ROI en formatos de video corto y adopción por parte de equipos de marketing B2B).",
          "Hootsuite: Social Media Trends Report (análisis de la evolución de las redes sociales como motores de descubrimiento y comercio social).",
        ],
      },
    },
    tags: ["SEO", "TikTok", "Reels", "growth hacking", "búsqueda local"],
  },
  {
    id: "003",
    title: "Micro-influenciadores B2B en LinkedIn: el nuevo motor de confianza empresarial",
    subtitle:
      "Por qué las marcas empresariales están abandonando el alcance masivo para aliarse con referentes técnicos de nicho en la red profesional.",
    category: "Growth",
    date: "20 abr 2026",
    readTime: "6 min",
    image: article003Banner,
    heroImagePosition: "center 35%",
    author: {
      name: "Alex Jensen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
      bio: "Analista de crecimiento y estratega digital",
    },
    content: {
      introduction:
        "En el ecosistema del marketing de consumo (B2C), la influencia digital se ha medido tradicionalmente en volumen: millones de seguidores, alcance masivo y viralidad instantánea. Sin embargo, cuando se trata de vender software corporativo, servicios de consultoría o arquitecturas de infraestructura, el volumen es irrelevante. En el entorno B2B, la métrica reina no es el alcance, sino la confianza.\n\nAnte la saturación de los canales de publicidad tradicionales y la creciente desconfianza hacia los anuncios corporativos, las empresas están encontrando un canal de adquisición altamente calificado: la colaboración con referentes técnicos en LinkedIn.",
      sections: [
        {
          heading: "El colapso de la influencia masiva en B2B",
          paragraphs: [
            "El ciclo de ventas empresarial es complejo. Involucra a múltiples tomadores de decisiones, auditorías de seguridad y presupuestos significativos. Un director de tecnología (CTO) no va a aprobar la migración a un nuevo proveedor de servidores en la nube porque un influenciador masivo de estilo de vida lo mencione en un video.",
            "La influencia en B2B requiere validación de pares. Cuando una marca intenta hablar directamente a su audiencia a través de anuncios pagados, el mensaje es percibido como un discurso de ventas (pitch). Pero cuando un ingeniero de software senior o un analista de datos respetado analiza y valida esa misma herramienta en su feed de LinkedIn, el mensaje se transforma en una recomendación técnica.",
          ],
        },
        {
          heading: "Anatomía del micro-influenciador técnico",
          paragraphs: [
            "A diferencia de los creadores de contenido tradicionales, el micro-influenciador B2B rara vez se dedica exclusivamente a crear contenido. Son profesionales activos en su industria: ingenieros, arquitectos de software, gerentes de producto o fundadores de agencias boutique.",
            "Sus audiencias suelen ser pequeñas (entre 5.000 y 30.000 seguidores), pero su nivel de engagement es asimétrico. Una publicación técnica detallando la arquitectura de un sistema puede generar cientos de comentarios de otros directores y gerentes de alto perfil. Poseen el activo más caro y difícil de adquirir en el mercado empresarial: el respeto intelectual de un nicho hiper-segmentado.",
          ],
        },
        {
          heading: "Tácticas de colaboración estratégica",
          content:
            "Para integrar a estos referentes en un embudo de growth, las empresas deben abandonar el modelo transaccional de «pago por publicación» y adoptar un enfoque de co-creación de valor:",
          orderedList: [
            "Auditorías públicas y casos de estudio: en lugar de pagar por una mención superficial, se le otorga acceso gratuito a la plataforma al referente técnico para que realice una auditoría real y publique sus hallazgos de forma transparente, incluyendo áreas de mejora.",
            "Webinars y paneles técnicos conjuntos: utilizar la plataforma de la empresa para amplificar la voz del experto, ofreciendo un seminario web donde se resuelva un problema real de la industria (ej. «Cómo reducir la latencia en bases de datos distribuidas»).",
            "Distribución de whitepapers co-autorados: desarrollar documentos de investigación o guías técnicas donde el influenciador aporte el marco teórico y la marca aporte la infraestructura de datos.",
          ],
        },
      ],
      bibliography: {
        heading: "Bibliografía de referencia",
        content:
          "Para estructurar este análisis sobre la confianza en el ecosistema B2B, se han tomado como base los siguientes reportes y marcos teóricos:",
        unorderedList: [
          "Edelman Trust Barometer (2025): reporte sobre la confianza institucional y cómo los expertos técnicos y pares de la industria superan a los CEOs como fuentes de información creíble.",
          "Ogilvy: B2B Influence: The New Era of Enterprise Marketing (estudio sobre el retorno de inversión en colaboraciones de nicho versus publicidad tradicional).",
          "LinkedIn B2B Institute: The B2B Effectiveness Code (análisis de estrategias creativas y de construcción de marca a largo plazo en la red profesional).",
        ],
      },
      conclusion: {
        heading: "Conclusión: la autoridad no se compra, se toma prestada",
        paragraphs: [
          "La transición hacia el marketing de micro-influenciadores en LinkedIn representa la maduración del ecosistema B2B. En mercados donde el costo de equivocarse es altísimo para el comprador, la prueba social no puede ser fabricada mediante presupuesto publicitario. Al colaborar estratégicamente con las mentes más respetadas de un sector, las empresas logran algo que ninguna campaña de retargeting puede ofrecer: el préstamo temporal de una reputación técnica impecable. La autoridad se transfiere por asociación, convirtiendo a la comunidad del influenciador en prospectos altamente pre-calificados.",
        ],
      },
    },
    tags: ["LinkedIn", "B2B", "micro-influencers", "autoridad", "growth hacking"],
  },
  {
    id: "005",
    title: "Calificación predictiva de leads: algoritmos para optimizar la conversión B2B",
    subtitle:
      "Cómo el análisis de datos y el aprendizaje automático están reemplazando la intuición humana para predecir qué contactos tienen probabilidad real de compra.",
    category: "Growth",
    date: "25 abr 2026",
    readTime: "8 min",
    image: article005Banner,
    author: {
      name: "Alex Jensen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
      bio: "Analista de crecimiento y estratega digital",
    },
    content: {
      introduction:
        "El volumen de contactos generados en la parte superior del embudo (ToFu) ha dejado de ser la métrica principal de éxito para los equipos de crecimiento. En el entorno B2B, donde los ciclos de venta son largos y requieren múltiples puntos de contacto, inundar a los representantes de ventas con prospectos no calificados genera fatiga operativa, desperdicio de recursos y un incremento injustificado en el costo de adquisición (CAC).\n\nPara resolver este cuello de botella, la industria está transicionando de los modelos manuales de puntuación hacia la calificación predictiva de leads (predictive lead scoring), una metodología que utiliza algoritmos de aprendizaje automático para analizar el historial de conversiones y predecir qué prospectos tienen una intención real de compra.",
      sections: [
        {
          heading: "El fracaso de la calificación heurística tradicional",
          paragraphs: [
            "Durante años, las empresas han utilizado sistemas de lead scoring basados en reglas manuales o heurísticas. Un gerente de marketing definía arbitrariamente que descargar un PDF sumaba 10 puntos, visitar la página de precios sumaba 15 puntos y tener un cargo de «Director» sumaba 20 puntos. Al alcanzar los 50 puntos, el contacto era enviado al equipo comercial.",
            "Este enfoque presenta fallas estructurales graves:",
          ],
          orderedList: [
            "Sesgo humano: las reglas se basan en suposiciones de lo que «debería» indicar intención de compra, no en correlaciones estadísticas reales.",
            "Falsos positivos: un estudiante investigando para una tesis puede descargar tres documentos técnicos y visitar la página de precios, alcanzando el umbral de calificación sin tener presupuesto ni intención comercial.",
            "Incapacidad de escalar: a medida que se añaden nuevos canales de adquisición y productos, mantener las reglas manuales se vuelve logísticamente imposible.",
          ],
        },
        {
          heading: "Arquitectura de un modelo predictivo",
          paragraphs: [
            "El lead scoring predictivo elimina la intuición de la ecuación. Alimenta un modelo de aprendizaje automático con datos históricos del CRM (tanto de negocios ganados como perdidos) para que el algoritmo descubra patrones matemáticos ocultos.",
            "Para que el modelo sea preciso, requiere la ingesta de cuatro capas de datos fundamentales:",
          ],
          unorderedList: [
            "Datos demográficos y firmográficos: tamaño de la empresa, facturación anual, sector industrial y cargo del contacto.",
            "Datos de comportamiento explícito: interacciones directas con los activos de la empresa (apertura de correos, asistencia a webinars, uso de pruebas gratuitas).",
            "Datos de intención de terceros (Intent data): información recolectada fuera del ecosistema de la empresa. Por ejemplo, si los empleados de una cuenta objetivo están buscando activamente en foros sobre «software de automatización de marketing».",
            "Datos de tecnografía: el conjunto de tecnologías (stack tecnológico) que la empresa objetivo ya utiliza, lo cual puede indicar compatibilidad o madurez digital para adoptar la solución ofrecida.",
          ],
        },
        {
          heading: "Implementación algorítmica en el embudo de ventas",
          paragraphs: [
            "Una vez que el modelo procesa estas capas, no emite una puntuación estática, sino una probabilidad dinámica de conversión (por ejemplo, 87%). Esta predicción permite estructurar flujos de trabajo automatizados mucho más eficientes.",
            "Los prospectos con una probabilidad superior al 80% (considerados Sales Qualified Leads o SQL) son enrutados instantáneamente al equipo comercial para un abordaje personalizado. Por el contrario, los prospectos en el rango del 40% al 79% se mantienen en secuencias de nutrición (nurturing) automatizadas hasta que su comportamiento eleve su puntuación predictiva. Aquellos por debajo del 40% son descartados o enviados a campañas masivas de muy bajo costo operativo.",
          ],
        },
        {
          heading: "Alineación entre marketing y ventas (Smarketing)",
          paragraphs: [
            "Uno de los beneficios colaterales más poderosos de la calificación predictiva es la eliminación de la fricción entre los departamentos. Históricamente, ventas acusa a marketing de enviar prospectos irrelevantes («leads basura»), mientras que marketing acusa a ventas de no dar seguimiento a los contactos generados.",
            "Al establecer un modelo matemático objetivo, el criterio de lo que constituye un prospecto calificado deja de ser una opinión departamental para convertirse en un acuerdo de nivel de servicio (SLA) respaldado por datos. Esto optimiza drásticamente el tiempo de los representantes, quienes ahora invierten sus horas exclusivamente en cuentas con alta propensión de cierre, elevando la tasa de ganancia (win rate).",
          ],
        },
      ],
      bibliography: {
        heading: "Bibliografía de referencia",
        content:
          "Para la estructuración de este análisis sobre modelos de puntuación algorítmica, se han consultado las siguientes fuentes técnicas y reportes de mercado:",
        unorderedList: [
          "Syam, N., & Sharma, A. (2018): «Waiting for a sales renaissance in the fourth industrial revolution: Machine learning and artificial intelligence in sales research and practice.» Industrial Marketing Management.",
          "Gartner (2024): The Future of Sales: Transitioning to Predictive and Prescriptive Analytics (estudio sobre la adopción de IA en la priorización del pipeline B2B).",
          "Forrester Research: The Forrester Wave: B2B Predictive Marketing Analytics (análisis comparativo de plataformas de datos de intención y calificación automatizada).",
        ],
      },
      conclusion: {
        heading: "Conclusión: el tiempo como activo no renovable",
        paragraphs: [
          "La implementación de algoritmos predictivos para la calificación de leads no es simplemente una actualización de software; es una reestructuración profunda de cómo una empresa valora el tiempo de su talento humano. Forzar a ejecutivos de ventas altamente capacitados a contactar prospectos fríos basándose en puntuaciones arbitrarias es un error de arquitectura de negocios. Al delegar la fase de calificación a modelos matemáticos impulsados por datos históricos e intención de compra, las organizaciones logran que la intervención humana ocurra únicamente en el punto de máximo apalancamiento, garantizando un crecimiento escalable y márgenes operativos superiores.",
        ],
      },
    },
    tags: ["lead scoring", "IA", "ventas B2B", "automatización", "growth hacking"],
  },
  {
    id: "006",
    title: "Estrategias de datos de origen: el fin de las cookies y la soberanía de la información",
    subtitle:
      "La eliminación progresiva de las cookies de terceros obliga a las empresas a construir ecosistemas propios de recolección de datos mediante intercambio de valor directo.",
    category: "Growth",
    date: "30 abr 2026",
    readTime: "7 min",
    image: article006Banner,
    author: {
      name: "Alex Jensen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80",
      bio: "Analista de crecimiento y estratega digital",
    },
    content: {
      introduction:
        "Durante más de una década, el crecimiento digital se basó en un ecosistema frágil: el alquiler de audiencias a través de rastreadores de terceros. Las empresas construyeron embudos de adquisición enteros dependiendo de la capacidad de plataformas publicitarias para rastrear a los usuarios a través de múltiples sitios web. Con la implementación global de leyes de privacidad estrictas y el bloqueo nativo de cookies por parte de los principales navegadores y sistemas operativos, ese paradigma ha llegado a su fin.\n\nLa depreciación de las cookies de terceros no es el fin del marketing digital, sino el final del marketing perezoso. Obliga a las organizaciones a transicionar hacia un modelo donde los datos de los usuarios no se extraen de forma invisible, sino que se ganan activamente.",
      sections: [
        {
          heading: "La ilusión de alquilar audiencias",
          paragraphs: [
            "Depender exclusivamente del píxel de una red social para entender el comportamiento del consumidor implica delegar el activo más importante de la empresa a un proveedor externo. Cuando los algoritmos cambian o las políticas de privacidad de los dispositivos móviles bloquean el rastreo, los costos de adquisición (CAC) se disparan y las campañas de retargeting pierden precisión.",
            "Para construir un negocio escalable, la arquitectura de datos debe ser propia. Aquí es donde entra en juego el first-party data (datos de origen), información recolectada directamente por la empresa a través de sus propios canales: su sitio web, su aplicación, su CRM o sus interacciones de soporte.",
          ],
        },
        {
          heading: "First-party y zero-party data como activos de infraestructura",
          paragraphs: [
            "Mientras que el first-party data se basa en el comportamiento observable en plataformas propias (qué páginas visita un usuario, qué productos añade al carrito), el ecosistema más valioso es el zero-party data. Este último se refiere a la información que un cliente comparte de manera proactiva e intencional.",
            "Poseer estos datos permite segmentar con precisión milimétrica sin violar normativas de privacidad. Un modelo de aprendizaje automático alimentado por datos limpios de origen supera sistemáticamente a cualquier campaña segmentada por intereses genéricos en redes sociales.",
          ],
        },
        {
          heading: "Intercambio de valor: tácticas de recolección activa",
          content:
            "Los usuarios modernos protegen su información personal. Ya no entregan su correo electrónico a cambio de un boletín genérico. La recolección de datos de origen requiere ingeniería de valor; es decir, ofrecer una utilidad tan alta que justifique la transacción de la información.",
          orderedList: [
            "Herramientas interactivas y calculadoras: ofrecer una utilidad de software gratuita (por ejemplo, una calculadora de retorno de inversión o un auditor de SEO) a cambio de datos corporativos precisos. El usuario obtiene una respuesta inmediata y la empresa obtiene datos técnicos altamente calificados.",
            "Cuestionarios de perfilado progresivo: en lugar de formularios estáticos e interminables, utilizar cuestionarios interactivos de opción múltiple que recomienden un producto o servicio específico basado en las respuestas. Esto genera zero-party data de extrema calidad, revelando puntos de dolor exactos.",
            "Comunidades y programas de fidelización cerrados: exigir la creación de una cuenta gratuita para acceder a contenido premium, foros exclusivos o descuentos escalonados. El registro marca el inicio de la recolección de datos propios en un entorno autenticado.",
          ],
        },
      ],
      bibliography: {
        heading: "Bibliografía de referencia",
        content:
          "Para el análisis técnico y estratégico sobre la transición hacia infraestructuras de datos propios, se han consultado los siguientes reportes del sector:",
        unorderedList: [
          "McKinsey & Company (2023): The demise of third-party cookies and identifiers (estudio sobre el impacto en el gasto publicitario y la necesidad de arquitecturas de datos de origen).",
          "Forrester Research: Zero-Party Data Will Save Your Personalization Strategy (definición y aplicación práctica de los datos compartidos proactivamente por el usuario).",
          "Interactive Advertising Bureau (IAB): State of Data Report (guías sobre cumplimiento normativo, privacidad e infraestructuras de recolección directa).",
        ],
      },
      conclusion: {
        heading: "Conclusión: la soberanía de los datos como ventaja competitiva",
        paragraphs: [
          "La transición hacia una estrategia de first-party data requiere abandonar el pensamiento transaccional de corto plazo. Construir bases de datos propias exige invertir en infraestructura tecnológica (CRMs avanzados, arquitecturas serverless) y, sobre todo, en contenido de valor real. Las empresas que asuman la responsabilidad de poseer, proteger y aprovechar sus propios datos no solo sobrevivirán al «apocalipsis de las cookies», sino que construirán un foso defensivo inexpugnable. Quien controla la relación directa y la información del cliente, controla la escalabilidad del negocio.",
        ],
      },
    },
    tags: ["first-party data", "cookies", "privacidad", "captación", "growth hacking"],
  },
  {
    id: "G001",
    title: "Minimalist Living: Creating Space for What Matters Most",
    subtitle: "The freedom found in letting go",
    category: "Growth",
    date: "Mar 10, 2025",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1920&q=80",
    author: {
      name: "David Kim",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
      bio: "Minimalism advocate and intentional living coach",
    },
    content: {
      introduction: "Minimalism isn't about having less for the sake of having less—it's about making room for more: more clarity, more freedom, more focus on what truly matters. In our consumer-driven culture, choosing to live with less is a radical act of intentionality.",
      sections: [
        {
          heading: "Beyond the Aesthetic",
          content: "Minimalism has been co-opted by a certain aesthetic—white walls, sparse furniture, perfectly curated spaces. But true minimalism is about values, not visuals. It's about removing excess so you can focus on what adds value to your life. Your minimalist life might look different from someone else's, and that's exactly as it should be.",
        },
        {
          heading: "The Process of Letting Go",
          content: "Minimalism is as much psychological as it is physical. As you sort through possessions, you're also examining attachments, identities, and habits. That box of college textbooks isn't just books—it's who you used to be. Learning to let go of physical items helps us practice letting go in other areas of life too.",
        },
        {
          heading: "Quality Over Quantity",
          content: "Minimalism isn't about deprivation—it's about being selective. Instead of ten mediocre pairs of shoes, keep three you love. Instead of a closet full of clothes you never wear, maintain a smaller collection of pieces that make you feel great. When you reduce quantity, you can increase quality.",
        },
        {
          heading: "Mental and Digital Minimalism",
          content:
            "Physical clutter is just one dimension. Consider your commitments, your schedule, your digital life. Do you need to be on five social media platforms? Must you say yes to every invitation? Minimalism applies to time and attention too. Protect your mental space as carefully as your physical space.",
        },
        {
          heading: "The Freedom of Less",
          content: "Here's what minimalism creates: less time spent cleaning and organizing, fewer decisions to make, less financial pressure, more mental clarity, greater focus on relationships and experiences. In removing what doesn't matter, we make room for what does. That's the true gift of minimalism.",
        },
      ],
      conclusion: "Minimalism is a journey, not a destination. You don't need to purge everything or live in an empty room. Start with one drawer, one category, one area of life. As you experience the lightness that comes from letting go, you'll naturally want to continue. What you'll discover isn't just less stuff—it's more freedom, clarity, and space for what truly matters.",
    },
    tags: ["minimalism", "intentional living", "simplicity", "personal growth"],
  },
];

export function getArticleById(id: string): Article | undefined {
  return articles.find(article => article.id === id);
}

export function getRelatedArticles(currentId: string, limit: number = 3): Article[] {
  const currentArticle = getArticleById(currentId);
  if (!currentArticle) return articles.slice(0, limit);
  
  // Get articles from the same category, excluding current
  const related = articles.filter(
    article => article.id !== currentId && article.category === currentArticle.category
  );
  
  // If not enough from same category, add others
  if (related.length < limit) {
    const others = articles.filter(
      article => article.id !== currentId && article.category !== currentArticle.category
    );
    return [...related, ...others].slice(0, limit);
  }
  
  return related.slice(0, limit);
}
