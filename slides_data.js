// Base de datos de diapositivas técnicas y test interactivo para Muros Pantalla
// Normativa de referencia: CTE DB-SE-C, Eurocódigo 7, NTE-CCP y Guía Geotécnica

const PRESENTATION = {
  title: "MUROS PANTALLA • Geotecnia y Cimentaciones Profundas",
  subject: "CTE DB-SE-C • Eurocódigo 7 • NTE-CCP • Maquinaria, Lodos, Ferralla y Anclajes",
  totalSlides: 23,
  chapters: [
    { id: 1, name: "1. Principios y Fases Constructivas", range: [1, 4], slideStart: 1 },
    { id: 2, name: "2. Maquinaria y Lodos Bentoníticos", range: [5, 13], slideStart: 5 },
    { id: 3, name: "3. Armaduras, Juntas y Hormigonado Tremie", range: [14, 20], slideStart: 14 },
    { id: 4, name: "4. Viga de Coronación y Anclajes al Terreno", range: [21, 23], slideStart: 21 }
  ],
  slides: [
    {
      id: 1,
      image: "slides/slide-01.png",
      rawImage: "MUROS PANTALLA.jpg",
      title: "Proceso Global de Ejecución de Muros Pantalla",
      subtitle: "Secuencia Constructiva Completa en 8 Fases de Paneles Primarios y Secundarios",
      chapterId: 1,
      chapterName: "1. Principios y Fases Constructivas",
      normative: "CTE DB-SE-C | EUROCÓDIGO 7 | NTE-CCP",
      tags: ["Secuencia 8 Fases", "Muretes Guía", "Lodos Bentoníticos", "Tubo Tremie", "Paneles Primarios/Secundarios"],
      summary: "Visión global del proceso constructivo de un muro pantalla de hormigón armado moldeado in situ: 1) Replanteo y construcción de muretes guía; 2) Excavación de zanja bajo suspensión de lodos bentoníticos o polímeros; 3) Colocación de juntas laterales (tubos junta o planchas con waterstop); 4) Introducción de la jaula de armadura prefabricada izada con grúa; 5) Hormigonado sumergido con tubería Tremie desde el fondo; 6) Extracción de tubos junta en fraguado inicial; 7) Descabezado y demolición de hormigón contaminado; 8) Viga de coronación y vaciado por niveles con anclajes."
    },
    {
      id: 2,
      image: "slides/slide-02.png",
      rawImage: "muro_guia_funciones_murete.png",
      title: "Diseño y Geometría del Murete Guía",
      subtitle: "Cotas Reglamentarias, Armaduras y Sostenimiento Superior de la Zanja",
      chapterId: 1,
      chapterName: "1. Principios y Fases Constructivas",
      normative: "NTE-CCP | MANUAL DE PANTALLAS",
      tags: ["Murete Guía", "Holgura E + 3 cm", "H = 0.80-1.00 m", "Cota Coronación", "Estabilidad Zanja"],
      summary: "Parámetros geométricos y estructurales indispensables de los muretes guía de hormigón armado (baja cuantía HA-25): Ancho interior igual al espesor nominal del muro más una holgura de 3 a 5 cm para el libre desplazamiento de la cuchara; altura vertical mínima de 0.80 a 1.20 m empotrada en terreno virgen; ala superior de apoyo para soportar el peso de las armaduras colgadas; garantizan la alineación milimétrica del muro, evitan desprendimientos del terreno superficial y mantienen el nivel hidrostático de los lodos bentoníticos al menos 1.0 a 1.5 m sobre el nivel freático exterior."
    },
    {
      id: 3,
      image: "slides/slide-03.png",
      rawImage: "muro_pantalla_617_250_3EEB069C.jpg",
      title: "Esquema Secuencial del Batache o Panel",
      subtitle: "Apertura Primaria, Perforación Central y Cierre de Avance",
      chapterId: 1,
      chapterName: "1. Principios y Fases Constructivas",
      normative: "CTE DB-SE-C • CONTROL DE AVANCE",
      tags: ["Batache", "Mordiscos Extremos", "Mordisco Central", "Paneles Primarios", "Juntas Hormigonadas"],
      summary: "Estrategia de excavación de paneles de longitud típica 4.50 a 6.00 m mediante técnica de mordiscos alternos: se inician dos mordiscos en los extremos del panel (mordisco 1 y mordisco 2), y posteriormente se extrae el núcleo de tierra central (mordisco 3). Este método minimiza desviaciones de plomo y previene atascos de la cuchara bivalva. Una vez hormigonados los paneles primarios dejando una separación de 4 a 6 m, se procede a excavar el panel secundario o de cierre, rascando la cara exterior de los tubos junta hormigonados."
    },
    {
      id: 4,
      image: "slides/slide-04.png",
      rawImage: "Pantalla-D1-1-1-600x350.jpg",
      title: "Suspensión de la Jaula en Muretes Guía",
      subtitle: "Apeo de Cuelgue, Tacos de Apoyo y Nivelación de Armadura",
      chapterId: 1,
      chapterName: "1. Principios y Fases Constructivas",
      normative: "NTE-CCP | DETALLE DE CUELGUE",
      tags: ["Cuelgue de Armadura", "Perfiles de Suspensión", "Tacos de Hormigón", "Cota de Descabezado"],
      summary: "Dispositivo de cuelgue y fijación de la armadura: la jaula no apoya jamás en el fondo de la zanja para evitar que se hunda en el fango bentonítico y pierda el recubrimiento inferior. Se suspende mediante redondos o perfiles de acero laminado que apoyan directamente sobre la coronación de los muretes guía. El anclaje temporal soporta el empuje ascendente (flotabilidad por empuje de Arquímedes) que experimenta la armadura durante el vaciado del hormigón fluido."
    },
    {
      id: 5,
      image: "slides/slide-05.png",
      rawImage: "78747-15168311.jpg",
      title: "Grúa sobre Orugas con Cuchara Bivalva",
      subtitle: "Equipo Principal de Excavación Pesada por Gravedad y Cables",
      chapterId: 2,
      chapterName: "2. Maquinaria y Lodos Bentoníticos",
      normative: "UNE-EN 1538 | MAQUINARIA PESADA",
      tags: ["Grúa Celosía", "Orugas", "Cuchara Pesada", "Capacidad 50-80 t", "Lanza de Guiado"],
      summary: "Grúa de celosía sobre orugas de gran tonelaje (50 a 80 toneladas) dotada de doble cabrestante para maniobra de caída libre y apertura/cierre de valvas. El conjunto de cuchara oscila entre 8 y 25 toneladas de peso muerto, necesario para penetrar por impacto en gravas, arenas densas y arcillas duras. El mástil de guiado o pluma asegura la verticalidad durante la bajada y subida continua de detritus."
    },
    {
      id: 6,
      image: "slides/slide-06.png",
      rawImage: "Captura de pantalla 2026-05-17 194516.png",
      title: "Cuchara Bivalva Hidráulica de Alta Penetración",
      subtitle: "Cilindros Hidráulicos de Cierre, Dientes de Ataque y Guiado Vertical",
      chapterId: 2,
      chapterName: "2. Maquinaria y Lodos Bentoníticos",
      normative: "EQUIPOS ESPECIALES DE PERFORACIÓN",
      tags: ["Cuchara Hidráulica", "Fuerza de Cierre 120 kN", "Dientes de Widia", "Inclinómetros"],
      summary: "Cuchara bivalva hidráulica gobernada mediante circuito de mangueras a alta presión (250-350 bar). A diferencia de la mecánica por cables, los cilindros hidráulicos desarrollan una fuerza de cierre independiente del peso propio del útil, logrando hincar dientes de tungsteno/widia en estratos cementados o bolos rocosos. Incorpora sensores de verticalidad (inclinómetros biaxiales) y aletas laterales de guiado para corregir desviaciones durante la perforación."
    },
    {
      id: 7,
      image: "slides/slide-07.png",
      rawImage: "Captura de pantalla 2026-05-20 143510.png",
      title: "Cuchara Mecánica de Cables Tipo Benoto",
      subtitle: "Sistema de Doble Tambor, Caída Libre y Poleas Desmultiplicadoras",
      chapterId: 2,
      chapterName: "2. Maquinaria y Lodos Bentoníticos",
      normative: "SISTEMAS BENOTO DE CABLES",
      tags: ["Cuchara Benoto", "Cable de Cierre", "Cable de Sostén", "Caída Libre", "Robustez Mecánica"],
      summary: "Cuchara mecánica suspendida por cables de alta resistencia: cable portante o de sostén y cable de maniobra/cierre que acciona el juego de poleas inferiores de las mandíbulas. Diseñada con un cuerpo macizo de acero fundido para conseguir máxima energía cinética en caída libre y fracturar capas duras de terreno no cohesivo o arcilloso."
    },
    {
      id: 8,
      image: "slides/slide-08.png",
      rawImage: "Captura de pantalla 2026-05-20 143538.png",
      title: "Cuchara Guiada Tipo Keller",
      subtitle: "Mástil Rígido Telescópico y Control de Desviación Milimétrica",
      chapterId: 2,
      chapterName: "2. Maquinaria y Lodos Bentoníticos",
      normative: "PRECISIÓN GEOTÉCNICA KELLER",
      tags: ["Keller Kelly", "Mástil Guiado", "Desviación < 0.5%", "Alineación Rígida"],
      summary: "Sistema de cuchara guiada mediante barra kelly telescópica rígida: elimina la oscilación pendular propia de las cucharas de cable libre. Garantiza una tolerancia de verticalidad inferior al 0.5% (frente al 1.0-1.5% admisible con cable), cualidad crítica en muros pantalla de más de 30 metros de profundidad o colindantes con cimentaciones existentes sensibles a descompresiones."
    },
    {
      id: 9,
      image: "slides/slide-09.png",
      rawImage: "Captura de pantalla 2026-05-20 143558.png",
      title: "Gama de Equipos de Perforación (Kelly y Tranchesol)",
      subtitle: "Comparativa de Chasis Oruga, Mástiles y Sistemas de Elevación",
      chapterId: 2,
      chapterName: "2. Maquinaria y Lodos Bentoníticos",
      normative: "CATÁLOGO DE MAQUINARIA PESADA",
      tags: ["Chasis Pesado", "Kelly Telescópico", "Tranchesol", "Rango 30-70 m"],
      summary: "Panorámica de los equipos industriales más utilizados en ingeniería de cimentaciones: perforadoras sobre chasis de orugas anchas con contrapesos regulables, mástiles abatibles de transporte rápido y configuraciones modulares con cucharas bivalvas mecánicas, hidráulicas o hidrofresas para alcanzar profundidades de hasta 70 metros."
    },
    {
      id: 10,
      image: "slides/slide-10.png",
      rawImage: "Cuchara-2-Bentonita-Cemento.jpg",
      title: "Operación en Obra: Cuchara Pesada en Muretes Guía",
      subtitle: "Extracción de Tierras y Circulación Continua de Bentonita",
      chapterId: 2,
      chapterName: "2. Maquinaria y Lodos Bentoníticos",
      normative: "CONTROL DE EJECUCIÓN IN SITU",
      tags: ["Excavación Activa", "Lodos en Zanja", "Nivel Freático", "Cake Bentonítico"],
      summary: "Fotografía real de obra urbana mostrando la extracción de cuchara cargada de lodo y detritus a través de los muretes guía. El nivel de la suspensión de bentonita se mantiene en todo momento rozando la cota superior del murete para generar la sobrepresión hidrostática de 10 a 20 kPa que sostiene las paredes de la zanja e impermeabiliza los poros mediante la formación del 'cake' (torta bentonítica)."
    },
    {
      id: 11,
      image: "slides/slide-11.png",
      rawImage: "schema_HYDROMILL_primary_uk-ok-Vingiani.jpg",
      title: "Hidrofresa: Excavación por Mordiscos Múltiples",
      subtitle: "Esquema Cinemático de Fresado Continuo y Bombeo Reverso",
      chapterId: 2,
      chapterName: "2. Maquinaria y Lodos Bentoníticos",
      normative: "SISTEMAS HIDROMILL / HIDROFRESA",
      tags: ["Hidrofresa", "Tambores Rotativos", "Circulación Inversa", "Roca Dura > 100 MPa"],
      summary: "Mecanismo cinemático de la hidrofresa: conjunto de 2 a 4 tambores dentados giratorios contrarrotantes impulsados por motores hidráulicos de alto par. Trituran roca dura (pizarras, granitos, calizas > 100 MPa) en partículas finas. En el centro de los tambores, una bomba de lodo sumergida aspira la mezcla de lodo bentonítico y detritus hacia la superficie mediante circulación inversa a caudales de 400-500 m³/h."
    },
    {
      id: 12,
      image: "slides/slide-12.png",
      rawImage: "bauer_proceso_hidrofresa_schlitzwand.jpg",
      title: "Proceso Bauer: Bataches Primarios y Secundarios",
      subtitle: "Fresado Lateral de Traslape para Juntas Estancas Sin Tubo Junta",
      chapterId: 2,
      chapterName: "2. Maquinaria y Lodos Bentoníticos",
      normative: "BAUER SPECIAL FOUNDATIONS",
      tags: ["Batache Bauer", "Sobre-fresado", "Junta Estanca", "Hormigón Fresado"],
      summary: "Tecnología de ejecución de muros pantalla con hidrofresa según Bauer: los paneles primarios se ejecutan sin tubos junta laterales. Al excavar los paneles secundarios de cierre, la hidrofresa 'come' (fresa) de 10 a 20 cm del hormigón ya endurecido de los paneles primarios colindantes, creando una junta fría perfectamente limpia, rugosa y 100% estanca al agua subterránea sin necesidad de juntas elastoméricas."
    },
    {
      id: 13,
      image: "slides/slide-13.png",
      rawImage: "Figura-2-1.jpg",
      title: "Planta de Lodos Bentoníticos y Desarenado",
      subtitle: "Circuito de Mezcla, Silos de Bentonita, Hidrociclones y Balsas",
      chapterId: 2,
      chapterName: "2. Maquinaria y Lodos Bentoníticos",
      normative: "UNE-EN 1538 | CONTROL DE LODOS",
      tags: ["Planta de Lodos", "Desarenador", "Hidrociclón", "Densidad 1.03-1.15 g/cm³", "Contenido Arena < 3%"],
      summary: "Circuito cerrado de tratamiento de lodos tixotrópicos: silo de bentonita sódica en polvo, turbomezclador de alta cizalla, balsas de hidratación y maduración (24 h). En excavación, el lodo cargado de arena se bombea a la planta de desarenado compuesta por cribas vibratorias y baterías de hidrociclones que expulsan la arena y devuelven el lodo purificado a la zanja con densidad < 1.15 g/cm³ y contenido de arena < 3% antes del hormigonado."
    },
    {
      id: 14,
      image: "slides/slide-14.png",
      rawImage: "Captura de pantalla 2026-05-20 143705.png",
      title: "Despiece Estructural de la Jaula de Armadura",
      subtitle: "Barras Longitudinales, Cercos, Rigidizadores y Tubos Guía Tremie",
      chapterId: 3,
      chapterName: "3. Armaduras, Juntas y Hormigonado Tremie",
      normative: "CTE DB-SE-C | EHE-08 / CÓDIGO ESTRUCTURAL",
      tags: ["Jaula de Ferralla", "Rigidizadores Cruz de San Andrés", "Separadores 70 mm", "Hueco Tubo Tremie"],
      summary: "Anatomía de la jaula de armadura para muro pantalla: barras longitudinales en ambas caras (cara trasdós tierras y cara intradós excavación), cercos de atado y estribos cerrados, diagonales de rigidización o cruces de San Andrés para dotar a la estructura de rigidez tridimensional durante el volteo e izado, tubos guía centrales para permitir el paso expedito de la columna Tremie hasta el fondo, y patines/separadores rodantes de hormigón (mínimo 70 mm de recubrimiento) cada 2 metros."
    },
    {
      id: 15,
      image: "slides/slide-15.png",
      rawImage: "Captura de pantalla 2026-05-20 143734.png",
      title: "Armaduras Según el Tipo de Junta Lateral",
      subtitle: "Geometría de Extremos: Tubo Junta Circular, Plancha Metálica y Waterstop",
      chapterId: 3,
      chapterName: "3. Armaduras, Juntas y Hormigonado Tremie",
      normative: "DETALLES DE JUNTAS ESTRUCTURALES",
      tags: ["Junta Circular", "Tubo Junta", "Junta Plana", "Banda Waterstop"],
      summary: "Modificación del armado perimetral según el sistema de junta: en juntas circulares con tubo extractor, la jaula presenta extremos cóncavos con solape de cercos; en juntas planas tipo CWS o con banda de PVC waterstop hidroexpansiva, los extremos de la armadura integran perfiles guía o cajas de fijación para mantener la estanqueidad entre paneles contiguos e impedir filtraciones freáticas al vaciar el sótano."
    },
    {
      id: 16,
      image: "slides/slide-16.png",
      rawImage: "Captura de pantalla 2026-05-20 143753.png",
      title: "Caso Paneles Alternos con Tubos-Junta",
      subtitle: "Secuencia de Extracción Gradual: Despegue Hidráulico y Grúa",
      chapterId: 3,
      chapterName: "3. Armaduras, Juntas y Hormigonado Tremie",
      normative: "BUENA PRÁCTICA EN EJECUCIÓN",
      tags: ["Extracción Tubo Junta", "Gatos Hidráulicos", "Fraguado Inicial", "Tiempo Crítico 3-5 h"],
      summary: "Secuencia crítica de desmoldeo del tubo junta: una vez concluido el hormigonado, se espera al inicio del fraguado del hormigón (usualmente entre 3 y 5 horas, según temperatura y aditivos retardadores). Con gatos hidráulicos de tracción se realiza el despegue inicial milimétrico del tubo para romper la adherencia. Seguidamente, una grúa extrae los tramos tubulares hacia arriba antes de que el hormigón alcance alta resistencia y quede bloqueado."
    },
    {
      id: 17,
      image: "slides/slide-17.png",
      rawImage: "Muro-pantalla-11-320.png",
      title: "Colocación de la Jaula de Armadura con Grúa",
      subtitle: "Maniobra de Volteo Vertical y Descenso en Zanja de Lodo",
      chapterId: 3,
      chapterName: "3. Armaduras, Juntas y Hormigonado Tremie",
      normative: "SEGURIDAD E IZADO DE CARGAS",
      tags: ["Izado Jaula", "Grúa Principal y Auxiliar", "Balancín de Carga", "Volteo 90°", "Descenso Suave"],
      summary: "Maniobra crítica de izado y volteo de la jaula: se realiza comúnmente con dos grúas (o una grúa con doble cabrestante y balancín). La grúa principal suspende la cabeza de la jaula y la auxiliar la cola. Mediante rotación controlada se lleva la jaula de posición horizontal a perfecta vertical de 90° sin flexiones excesivas, introduciéndola lentamente en la zanja inundada de lodo bentonítico para no erosionar las paredes."
    },
    {
      id: 18,
      image: "slides/slide-18.png",
      rawImage: "ejecucion-muros-pantalla-armado-preparado.jpg",
      title: "Montaje Horizontal de Jaula en Parcela",
      subtitle: "Bancos de Ferralla in Situ, Empalmes y Solapes de Armadura",
      chapterId: 3,
      chapterName: "3. Armaduras, Juntas y Hormigonado Tremie",
      normative: "MONTAJE DE FERRALLA EN OBRA",
      tags: ["Banco de Ferralla", "Solape Soldado", "Rigidizadores en Cruz", "Organización Parcela"],
      summary: "Banco de ferrallado horizontal sobre el terreno de la parcela: las jaulas se ensamblan sobre carreras metálicas elevadas para facilitar el paso de cercos y estribos. Para jaulas de gran longitud (> 15 m) que no pueden transportarse completas, se ejecutan en dos tramos unidos mediante empalmes por solape con soldadura o manguitos mecánicos roscados suspendidos sobre la boca del murete guía."
    },
    {
      id: 19,
      image: "slides/slide-19.png",
      rawImage: "IMG_4043.jpg",
      title: "Jaulas Industriales Tridimensionales en Taller",
      subtitle: "Fabricación Automatizada, Soldadura Estructural y Control Dimensional",
      chapterId: 3,
      chapterName: "3. Armaduras, Juntas y Hormigonado Tremie",
      normative: "CONTROL DE FERRALLA INDUSTRIAL",
      tags: ["Ferralla Industrial", "Taller Especializado", "Geometría Precisa", "Rigidez Tridimensional"],
      summary: "Fabricación de armaduras tridimensionales en instalaciones fijas de taller: soldadura por puntos de atado robotizada, corte por control numérico y colocación milimétrica de rigidizadores tubulares y arriostramientos provisionales para el transporte por carretera. Garantiza tolerancias dimensionales estrictas que evitan atascos contra los tubos junta al bajar a la zanja."
    },
    {
      id: 20,
      image: "slides/slide-20.png",
      rawImage: "muro_pantalla_seccion_alzado_armaduras.png",
      title: "Plano Estructural Completo: Alzados, Sección y Planta",
      subtitle: "Lectura de Planos Geotécnicos: Cuantías, Empotramiento y Coronación",
      chapterId: 3,
      chapterName: "3. Armaduras, Juntas y Hormigonado Tremie",
      normative: "CTE DB-SE-C | PROYECTO EJECUTIVO",
      tags: ["Plano de Armaduras", "Alzado y Planta", "Cota de Empotramiento", "Nivel Freático", "Canto Muro"],
      summary: "Lectura e interpretación del plano ejecutivo de muro pantalla: plano de alzado con modulación de paneles (primarios, secundarios, esquineros); sección vertical con identificación de armadura de intradós (tracciones por empuje de tierras) y trasdós; longitud de empotramiento bajo la cota de excavación final; cota teórica de descabezado; y armadura en espera para unión monolítica con la viga de coronación y los forjados de sótano."
    },
    {
      id: 21,
      image: "slides/slide-21.png",
      rawImage: "imagen_513_333_02ECC9F0.jpg",
      title: "Detalle de Viga de Coronación y Unión con Forjado",
      subtitle: "Demolición de Hormigón Pobre, Descabezado y Solape Monolítico",
      chapterId: 4,
      chapterName: "4. Viga de Coronación y Anclajes al Terreno",
      normative: "CTE DB-SE-C • NUDO CORONACIÓN",
      tags: ["Viga Coronación", "Descabezado", "Hormigón Lavado", "Encuentro Forjado", "Reparto Cargas"],
      summary: "Nudo estructural superior de la pantalla: demolición mediante martillo demoledor de los primeros 50 a 100 cm de hormigón superior ('descabezado'), el cual se encuentra contaminado por lodo bentonítico y detritus flotantes. Sobre las armaduras longitudinales limpias y descubiertas se arma y hormigona la viga de coronación, que ata todos los paneles entre sí, uniformiza los asientos diferenciales y sirve de apoyo para el forjado de planta baja."
    },
    {
      id: 22,
      image: "slides/slide-22.png",
      rawImage: "imagen_535_898_833D9E5A.jpg",
      title: "Viga de Coronación: En Una Fase vs en Dos Fases",
      subtitle: "Tipologías Constructivas Según el Encuentro con Forjados y Calzadas",
      chapterId: 4,
      chapterName: "4. Viga de Coronación y Anclajes al Terreno",
      normative: "SOLUCIONES DE CORONACIÓN NTE-CCP",
      tags: ["Viga 1 Fase", "Viga 2 Fases", "Junta de Hormigonado", "Apoyo de Forjado"],
      summary: "Comparativa entre sistemas de ejecución de viga de coronación: 1) Ejecución en una sola fase: hormigonado completo del zuncho superior previo a cualquier excavación, ideal cuando el forjado apoya directamente sobre su cara superior; 2) Ejecución en dos fases: hormigonado de un primer prisma de atado y hormigonado posterior del remate junto con el forjado de planta baja, dejando conectores en espera para asegurar la continuidad estructural."
    },
    {
      id: 23,
      image: "slides/slide-23.png",
      rawImage: "ChatGPT-Image-3-sept-2025-16_37_28.png",
      title: "Anatomía del Anclaje al Terreno",
      subtitle: "Cabeza de Anclaje, Bulbo Inyectado, Zona Libre y Pretensado Activo",
      chapterId: 4,
      chapterName: "4. Viga de Coronación y Anclajes al Terreno",
      normative: "CTE DB-SE-C • UNE-EN 1537",
      tags: ["Anclaje Activo", "Bulbo Inyectado", "Longitud Libre", "Cabeza Cónica", "Cuñas", "Tensado Hidráulico"],
      summary: "Esquema tridimensional completo de anclaje provisional o permanente al terreno: 1) Cabeza de anclaje exterior con placa de reparto, cuñas de mordaza y tuerca de apoyo; 2) Longitud libre donde los cordones de acero de alta resistencia van enfundados en vainas de polietileno con grasa anticorrosión para estirarse libremente durante el tensado; 3) Bulbo de anclaje inyectado con lechada de cemento a presión en el estrato competente, que transmite las tracciones por rozamiento fuste-terreno; 4) Ensayo de carga y retesado al 120-150% de la carga de servicio."
    }
  ],

  // 15 Comprehensive Technical Quiz Questions
  quiz: [
    {
      id: 1,
      question: "¿Cuál es la función reglamentaria primordial de los muretes guía en la ejecución de un muro pantalla?",
      options: [
        "Soportar las cargas verticales definitivas de la estructura del edificio",
        "Alinear y guiar la cuchara excavadora, sostener la parte superior de la zanja y servir de cota de nivelación y cuelgue",
        "Impermeabilizar permanentemente el contacto con el nivel freático exterior",
        "Servir como encofrado perdido para la viga de coronación final"
      ],
      correct: 1,
      slideRef: 2,
      explanation: "Según la NTE-CCP y el CTE DB-SE-C, los muretes guía son elementos provisionales de hormigón armado cuya misión es guiar verticalmente el útil de excavación (cuchara/hidrofresa), evitar el colapso del terreno superficial suelto, mantener la sobrepresión de los lodos bentoníticos y servir de apoyo para suspender las jaulas de armadura."
    },
    {
      id: 2,
      question: "¿Qué holgura dimensional debe existir reglamentariamente entre las caras interiores de los muretes guía y el espesor nominal del muro pantalla?",
      options: [
        "Exactamente 0 cm (contacto ajustado)",
        "De 3 a 5 cm (E + 3 a 5 cm) para evitar atascos y fricción de la cuchara",
        "Al menos 20 cm para permitir el vertido manual de hormigón",
        "Depende exclusivamente de la marca del cemento"
      ],
      correct: 1,
      slideRef: 2,
      explanation: "El ancho libre interior entre los dos muretes guía debe ser igual al espesor nominal del muro (E) más una holgura de 3 a 5 cm (típicamente 1.5-2.5 cm por cara), lo que garantiza el paso libre de la herramienta de perforación sin desgastar las aristas del hormigón."
    },
    {
      id: 3,
      question: "¿Cómo consiguen los lodos bentoníticos estabilizar las paredes verticales de la zanja sin encofrado?",
      options: [
        "Fraguando como un mortero rápido en contacto con la tierra",
        "Mediante sobrepresión hidrostática superior a la freática y formación de una película impermeable tixotrópica ('cake')",
        "Enfriando el terreno a temperaturas bajo cero",
        "Disolviendo las rocas circundantes para compactarlas"
      ],
      correct: 1,
      slideRef: 10,
      explanation: "La suspensión tixotrópica de bentonita ejerce una presión hidrostática continua contra las paredes de la zanja (manteniendo el nivel del lodo 1.0-1.5 m sobre el nivel freático exterior) y sus plaquetas minerales colmatan los poros formando una fina membrana impermeable llamada 'cake', que retiene la presión del fluido impidiendo el derrumbe."
    },
    {
      id: 4,
      question: "En la excavación de un batache o panel típico de 5 a 6 metros con cuchara bivalva, ¿cuál es la secuencia correcta de mordiscos?",
      options: [
        "Un único mordisco rápido de lado a lado",
        "Dos mordiscos extremos y finalmente el mordisco central para mantener el guiado y verticalidad",
        "Primero el mordisco central y luego excavar hacia los laterales a la vez",
        "Excavar aleatoriamente según la consistencia que encuentre el maquinista"
      ],
      correct: 1,
      slideRef: 3,
      explanation: "Para evitar desviaciones de plomo y atascos de las valvas, la buena práctica geotécnica establece excavar primero los dos extremos del batache (mordisco 1 y mordisco 2) y posteriormente perforar el bloque de tierra central (mordisco 3), guiado simétricamente por los huecos laterales."
    },
    {
      id: 5,
      question: "¿Qué parámetro de calidad del lodo bentonítico debe verificarse rigurosamente antes de autorizar el hormigonado sumergido?",
      options: [
        "Que su color sea completamente transparente",
        "Densidad controlada (≤ 1.15 g/cm³) y contenido de arena inferior al 3% tras pasar por desarenadores",
        "Que la temperatura del lodo supere los 60 °C",
        "Que la bentonita haya precipitado al fondo del panel"
      ],
      correct: 1,
      slideRef: 13,
      explanation: "La norma UNE-EN 1538 exige desarenar el lodo antes de hormigonar. Si el lodo contiene más de un 3-4% de arena en suspensión o su densidad supera 1.15-1.20 g/cm³, el hormigón Tremie no podrá desplazarlo eficientemente hacia arriba, provocando embolsamientos de lodo y coqueras en el fuste del muro."
    },
    {
      id: 6,
      question: "¿Por qué el hormigonado de un muro pantalla se realiza obligatoriamente mediante tubería Tremie sumergida desde el fondo?",
      options: [
        "Para acelerar el tiempo de fraguado del hormigón",
        "Para evitar la segregación del hormigón y el lavado de cemento por el lodo bentonítico, elevando la columna por empuje ascendente",
        "Porque la grúa no tiene alcance para vaciar desde arriba con cubilote",
        "Para evitar que el hormigón salpique a los operarios en superficie"
      ],
      correct: 1,
      slideRef: 1,
      explanation: "El método Tremie consiste en verter hormigón muy fluido (cono de Abrams 18-22 cm) a través de una tubería estanca cuya boca inferior permanece sumergida 2 a 3 metros dentro de la masa fresca de hormigón. El hormigón sube por desplazamiento hidrostático continuo, expulsando el lodo bentonítico hacia la superficie sin mezclarse con él."
    },
    {
      id: 7,
      question: "¿Cuál es la principal ventaja técnica de la Hidrofresa frente a la cuchara bivalva convencional?",
      options: [
        "Es mucho más barata y ligera de transportar",
        "Permite excavar rocas duras (> 100 MPa), garantiza mayor verticalidad y permite sobrefresar juntas estancas sin tubos junta",
        "No requiere el uso de lodos de perforación ni agua",
        "Puede funcionar sin operarios de forma totalmente remota"
      ],
      correct: 1,
      slideRef: 11,
      explanation: "La hidrofresa monta tambores rotativos con picas de carburo de tungsteno que trituran rocas y estratos muy duros inalcanzables para una cuchara. Además, extrae el detritus por circulación inversa continua y permite 'morder' y fresar el hormigón del panel contiguo (sistema Bauer), logrando una unión estanca sin tubos de junta."
    },
    {
      id: 8,
      question: "¿Por qué no se debe permitir jamás que la jaula de armadura apoye directamente sobre el fondo excavado de la zanja?",
      options: [
        "Porque rompería los dientes de la cuchara en el siguiente panel",
        "Porque se hundiría en el fango sedimentado perdiendo el recubrimiento inferior de hormigón y la cota de diseño",
        "Porque la normativa exige que las armaduras queden flotando en el aire",
        "Para que la grúa trabaje constantemente durante el fraguado"
      ],
      correct: 1,
      slideRef: 4,
      explanation: "En el fondo de la zanja siempre decanta una capa de detritus y lodo pesado. Si la jaula apoya en el fondo, las barras se embeben en barro sin recubrimiento de hormigón, provocando corrosión prematura. La jaula se suspende en cabeza apoyando barras transversales sobre los muretes guía."
    },
    {
      id: 9,
      question: "¿Cuál es el recubrimiento libre mínimo exigido por la normativa para las armaduras de un muro pantalla en contacto con el terreno?",
      options: [
        "15 a 20 mm",
        "25 a 30 mm",
        "60 a 75 mm (típicamente 70 mm con separadores de hormigón de patín ancho)",
        "150 mm en todos los casos"
      ],
      correct: 2,
      slideRef: 14,
      explanation: "Al tratarse de hormigón vertido in situ contra el terreno natural y en presencia de lodos, el CTE DB-SE-C y la EHE-08 / Código Estructural prescriben recubrimientos nominales mínimos de 60 a 75 mm (usualmente 70 mm) garantizados mediante separadores circulares o rodantes de hormigón."
    },
    {
      id: 10,
      question: "En la ejecución con tubos-junta circulares recuperables, ¿cuál es el momento crítico para iniciar su extracción con gatos hidráulicos?",
      options: [
        "Inmediatamente antes de empezar a verter el hormigón",
        "Durante el fraguado inicial (a las 3-5 horas del vertido), antes de que el hormigón adquiera resistencia y quede bloqueado",
        "A los 28 días de finalizar el muro",
        "Cuando se haya vaciado totalmente el sótano"
      ],
      correct: 1,
      slideRef: 16,
      explanation: "Si el tubo se extrae demasiado pronto, el hormigón fluido invadirá el espacio de la junta deformándose; si se extrae demasiado tarde, el hormigón fraguado atrapará el tubo con una fuerza de adherencia inamovible que romperá la maquinaria. La ventana óptima oscila entre 3 y 5 horas, iniciando el despegue milimétrico con gatos hidráulicos."
    },
    {
      id: 11,
      question: "¿En qué consiste la operación de 'descabezado' del muro pantalla y por qué es obligatoria?",
      options: [
        "Pintar la parte superior del muro con pintura asfáltica",
        "Demoler los primeros 50 a 100 cm de hormigón superior por estar contaminado con lodos bentoníticos y detritus",
        "Cortar las armaduras a ras de suelo para que no sobresalgan",
        "Hacer perforaciones con corona para instalar tuberías de saneamiento"
      ],
      correct: 1,
      slideRef: 21,
      explanation: "Durante el hormigonado sumergido, la parte frontal del hormigón ascendente va empujando y lavando el lodo y los finos decantados. Por ello, el metro superior de la pantalla contiene hormigón de baja resistencia y contaminado ('lechada/hormigón pobre'). Se hormigona por encima de la cota final y posteriormente se demuele con compresor hasta descubrir hormigón sano y limpio."
    },
    {
      id: 12,
      question: "¿Cuál es la misión estructural fundamental de la 'viga de coronación' construida sobre las pantallas descabezadas?",
      options: [
        "Actuar de zócalo estético para las vallas de cerramiento",
        "Arriostrar y solidarizar todos los paneles entre sí, homogeneizar asientos diferenciales y repartir esfuerzos de forjados y anclajes",
        "Evitar que el agua de lluvia caiga sobre el muro",
        "Servir de contrapeso para que el muro no se eleve por el nivel freático"
      ],
      correct: 1,
      slideRef: 21,
      explanation: "La viga de coronación es un elemento lineal continuo de hormigón armado fuertemente zunchado que une las cabezas de todos los paneles individuales, transformándolos en una estructura espacial monolítica capaz de resistir empujes desequilibrados y servir de apoyo de forjado."
    },
    {
      id: 13,
      question: "En un anclaje activo al terreno (Slide 23), ¿cuál es la diferencia entre la 'longitud libre' y la 'longitud de bulbo'?",
      options: [
        "No hay diferencia, ambas partes van soldadas al muro",
        "La longitud libre puede deformarse elásticamente sin adherencia al terreno, mientras que el bulbo va inyectado a presión para anclarse por rozamiento",
        "La longitud libre está fuera del terreno y el bulbo en el murete guía",
        "La longitud libre es de plástico y el bulbo de acero inoxidable"
      ],
      correct: 1,
      slideRef: 23,
      explanation: "En la longitud libre, los tirantes o cordones van enfundados individualmente en vainas plásticas con grasa, lo que les permite estirarse al aplicar la tensión con el gato hidráulico. La longitud de bulbo va inyectada directamente contra el terreno virgen competente mediante lechada de cemento a alta presión, transfiriendo la carga por adherencia y rozamiento fuste-terreno."
    },
    {
      id: 14,
      question: "¿Qué ensayo se realiza sobre los anclajes pretensados en obra para verificar su capacidad portante antes del bloqueo definitivo?",
      options: [
        "Ensayo de ultrasonidos en las cuñas",
        "Ensayo de tensión con gato hidráulico al 120-150% de la carga de servicio con medición de deformación elástica",
        "Ensayo de golpeo con maza en la placa de reparto",
        "Medición de temperatura superficial con pirómetro"
      ],
      correct: 1,
      slideRef: 23,
      explanation: "Según la norma UNE-EN 1537, cada anclaje pretensado se somete a una prueba de carga in situ utilizando un gato hidráulico calibrado que tracciona los cordones hasta el 120-150% de la carga de servicio prevista en el cálculo, controlando que la deformación corresponda a la longitud libre teórica y verificando que no existan deslizamientos del bulbo."
    },
    {
      id: 15,
      question: "¿Cuál es el motivo de incorporar rigidizadores diagonales ('cruces de San Andrés') en las jaulas de armadura?",
      options: [
        "Requisitos estéticos exigidos por la dirección facultativa",
        "Conferir rigidez tridimensional a la jaula para evitar deformaciones, pandeos y alabeos durante la maniobra de izado y volteo a 90°",
        "Aumentar el peso de la armadura para que venza la flotabilidad del hormigón",
        "Permitir la circulación del lodo bentonítico a través del centro"
      ],
      correct: 1,
      slideRef: 14,
      explanation: "Las jaulas de pantalla tienen grandes dimensiones (hasta 30-40 metros de longitud y varias toneladas). Durante el volteo de posición horizontal a vertical, las fuerzas dinámicas de flexión son enormes; los rigidizadores soldados en diagonal triangulan la sección e impiden que la jaula se retuerza o desmonte durante el izado con grúa."
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PRESENTATION;
}
