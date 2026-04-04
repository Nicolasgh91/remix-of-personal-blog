import article001Banner from "@/assets/article-001/customer-lifetime-value-graph.webp";

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

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
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
    title: "Ink-Stained Insights",
    subtitle: "The art of journaling for a more intentional lifestyle",
    category: "Lifestyle",
    date: "Oct 23, 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1920&q=80",
    author: {
      name: "Sofia Rodriguez",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      bio: "Creative writer and mindfulness practitioner",
    },
    content: {
      introduction: "There's something profound about putting pen to paper—the way ink flows across the page, capturing thoughts that might otherwise evaporate. In our digital age, the practice of journaling offers a rare opportunity to slow down, reflect, and connect with ourselves in a tangible, meaningful way.",
      sections: [
        {
          heading: "Why Analog Matters",
          content: "While digital tools have their place, there's neuroscience behind why handwriting engages our brain differently. The physical act of writing slows our thinking, allowing for deeper processing and reflection. It's a form of mindfulness in action, anchoring us in the present moment while we explore our inner landscape.",
        },
        {
          heading: "Creating Your Practice",
          content: "Your journaling practice doesn't need to be elaborate or time-consuming. Start with five minutes each morning or evening. Write freely without judgment—this isn't about perfect prose or profound insights. It's about showing up for yourself, creating space for reflection, and building a relationship with your thoughts and feelings.",
        },
        {
          heading: "Prompts for Deeper Reflection",
          content: "When you're not sure what to write, prompts can guide you: What am I grateful for today? What challenged me and what did I learn? What do I need more of in my life? What can I let go of? These questions invite introspection and help us identify patterns in our thoughts and behaviors.",
        },
        {
          heading: "The Gift of Looking Back",
          content: "One of journaling's greatest gifts reveals itself over time. Looking back through old entries, we see how we've grown, what we've overcome, and patterns we might want to change. This historical perspective offers wisdom we can't access in the present moment alone.",
        },
      ],
      conclusion: "Journaling is more than record-keeping—it's a practice of self-discovery and intentional living. Those ink-stained pages become a map of your inner journey, a testament to your growth, and a tool for creating the life you envision. Start today, even if just for five minutes. Your future self will thank you.",
    },
    tags: ["journaling", "mindfulness", "self-reflection", "lifestyle"],
  },
  {
    id: "003",
    title: "Musings in Grayscale",
    subtitle: "Finding beauty and clarity in life's neutral moments",
    category: "Community",
    date: "Dec 4, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1920&q=80",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Community builder and contemplative writer",
    },
    content: {
      introduction: "We often seek the extremes—the peaks of joy, the depths of sorrow, the bright colors that define our experiences. But what about the in-between? The neutral moments, the grayscale of everyday life that makes up most of our existence? There's unexpected beauty and wisdom in these spaces.",
      sections: [
        {
          heading: "The Overlooked Majority",
          content: "Most of life isn't dramatic. It's morning coffee, routine commutes, quiet evenings, and ordinary conversations. We tend to overlook these moments, waiting for something 'significant' to happen. Yet these grayscale moments—when approached with presence and appreciation—contain their own quiet richness.",
        },
        {
          heading: "Community in the Mundane",
          content: "Some of the deepest community connections happen not in grand gestures but in ordinary moments: the neighbor who waves each morning, the barista who remembers your order, the colleague who checks in during a regular Tuesday. These small, repeated interactions create the texture of belonging.",
        },
        {
          heading: "Finding Clarity in Neutrality",
          content: "When we're not caught up in emotional extremes, we can see more clearly. The grayscale moments offer perspective—a chance to observe our lives without the distortion of intense emotion. This clarity helps us make better decisions and understand what truly matters to us.",
        },
        {
          heading: "Cultivating Appreciation",
          content: "Learning to appreciate the neutral doesn't mean settling for less—it means expanding our capacity for contentment. It's recognizing that a quiet Sunday afternoon, a simple meal with friends, or a walk without destination has its own value. This appreciation makes us resilient and less dependent on external circumstances for our sense of wellbeing.",
        },
      ],
      conclusion: "Life in grayscale isn't boring—it's the canvas on which everything else appears. By learning to appreciate these neutral moments and the community connections within them, we enrich our entire experience. The next time you find yourself in an 'ordinary' moment, pause and look closer. You might be surprised by what you find.",
    },
    tags: ["mindfulness", "community", "presence", "contentment"],
  },
  {
    id: "W001",
    title: "Finding Balance: How to Create a Sustainable Self-Care Routine",
    subtitle: "Developing practices that actually stick",
    category: "Wellness",
    date: "Mar 19, 2025",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",
    author: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      bio: "Certified wellness coach and holistic health practitioner",
    },
    content: {
      introduction: "Self-care has become a buzzword, often associated with spa days and indulgent treats. While these have their place, true self-care is about sustainable practices that support your physical, mental, and emotional wellbeing consistently—not just when you're burned out.",
      sections: [
        {
          heading: "Understanding Your Needs",
          content: "Before building a self-care routine, you need to understand what you actually need. Are you lacking physical movement, mental rest, emotional processing, or social connection? Self-care isn't one-size-fits-all. Take time to honestly assess where you're depleted and what would genuinely nourish you.",
        },
        {
          heading: "Start Small and Specific",
          content: "The biggest mistake people make with self-care is trying to overhaul everything at once. Instead, start with one small, specific practice. Maybe it's five minutes of stretching each morning, or drinking a glass of water before coffee, or spending ten minutes outside daily. Small, consistent actions create lasting change.",
        },
        {
          heading: "The Four Pillars of Wellness",
          content: "A balanced self-care routine addresses four key areas: physical health (movement, nutrition, sleep), mental health (stress management, learning, rest), emotional health (processing feelings, connection, creativity), and spiritual health (meaning, purpose, values alignment). You don't need elaborate practices in each area—just intentional attention.",
        },
        {
          heading: "Making It Sustainable",
          content: "Sustainability comes from integration, not addition. Instead of adding more to your already full schedule, look for ways to integrate self-care into existing routines. Take walking meetings, practice mindful eating during meals you already eat, or turn your commute into a time for podcasts that inspire you.",
        },
        {
          heading: "When Self-Care Feels Selfish",
          content: "Many people struggle with guilt around self-care, especially caregivers. Remember: you can't pour from an empty cup. Taking care of yourself isn't selfish—it's necessary for showing up as your best self for others. Your wellbeing matters, not just as a means to serve others, but as an end in itself.",
        },
      ],
      conclusion: "A sustainable self-care routine isn't about perfection or elaborate practices. It's about consistent, intentional actions that support your wellbeing across all dimensions of health. Start small, be patient with yourself, and remember that self-care is a practice, not a destination.",
    },
    tags: ["self-care", "wellness", "mindfulness", "sustainable living"],
  },
  {
    id: "T001",
    title: "The Art of Slow Travel: Embracing Local Experiences",
    subtitle: "Discovering depth over distance in your journeys",
    category: "Travel",
    date: "Mar 15, 2025",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80",
    author: {
      name: "Marcus Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      bio: "Slow travel advocate and cultural immersion specialist",
    },
    content: {
      introduction: "In an age of whirlwind tours and bucket-list chasing, slow travel offers a radical alternative: staying longer, going deeper, and truly experiencing a place rather than just seeing it. It's not about how many countries you've visited, but how deeply you've connected with the places you've been.",
      sections: [
        {
          heading: "What Is Slow Travel?",
          content: "Slow travel is a philosophy that prioritizes depth over breadth, quality over quantity. It means staying in fewer places for longer periods, developing routines in new locations, shopping at local markets, and building relationships with locals. It's about experiencing a destination as a temporary resident rather than a tourist passing through.",
        },
        {
          heading: "The Benefits of Slowing Down",
          content: "When you slow down, travel becomes richer and more meaningful. You notice details you'd miss when rushing from sight to sight. You have time for spontaneous conversations, unexpected discoveries, and genuine cultural exchange. You also return home less exhausted and with deeper memories than a photo collection of landmarks.",
        },
        {
          heading: "Practical Steps for Slow Travel",
          content: "Start by choosing one place and staying at least a week—two or more is even better. Rent an apartment instead of staying in hotels. Shop at local markets, take local transportation, and establish routines like a regular cafe or morning walk. Say yes to invitations from locals. Allow for unplanned time in your schedule.",
        },
        {
          heading: "Overcoming FOMO",
          content: "The biggest challenge of slow travel is overcoming the fear of missing out. You might not see every museum or landmark. That's okay. You're choosing depth over breadth, experience over completion. Remember: the goal isn't to check off a list—it's to truly experience and understand a place.",
        },
        {
          heading: "Environmental and Cultural Benefits",
          content: "Slow travel is inherently more sustainable. Fewer flights, more local spending, less overtourism impact. It's also more respectful to local communities. When you stay longer and engage more deeply, you contribute more meaningfully to local economies and build bridges of understanding between cultures.",
        },
      ],
      conclusion: "Slow travel isn't just a way of moving through the world—it's a mindset that values presence, connection, and understanding. In slowing down, we paradoxically experience more. The next time you travel, consider going fewer places and staying longer. You might discover that the journey becomes infinitely richer.",
    },
    tags: ["slow travel", "sustainable travel", "cultural immersion", "mindful exploration"],
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
