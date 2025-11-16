// =======================
// Datos de las recetas
// =======================
const recetas = [
  {
    id: 1,
    nombre: "Txangurro a la Donostiarra",
    tipo: "caliente",
    ingredientes: [
      "1 buey de mar grande ya cocido",
      "1 cebolla grande muy picada",
      "1 puerro pequeño picado fino",
      "1 tomate maduro rallado o picado",
      "100 ml de brandy",
      "Pan rallado",
      "Aceite de oliva, sal y pimienta negra"
    ],
    preparacion: [
      "Abre el buey de mar y retira con cuidado toda la carne del interior, incluidas las patas. Procura que no queden trocitos de cáscara mezclados con la carne.",
      "Pica la carne del txangurro en trozos pequeños pero visibles y resérvala en un cuenco. Lava el caparazón, ya que se usará como recipiente para servir.",
      "Calienta una sartén amplia con un buen chorro de aceite. Sofríe la cebolla y el puerro a fuego medio–suave, removiendo de vez en cuando, hasta que queden muy tiernos y ligeramente dorados.",
      "Añade el tomate rallado a la sartén y cocina unos minutos más hasta que se evapore gran parte del agua y obtengas una salsa espesa y sabrosa.",
      "Incorpora la carne del buey de mar, mezcla bien y deja que se cocine un par de minutos para que coja sabor. Vierte el brandy y flambea o deja que el alcohol se evapore a fuego vivo.",
      "Prueba y ajusta de sal y pimienta. Rellena el caparazón del buey con la mezcla, presionando ligeramente con una cuchara.",
      "Cubre la superficie con una fina capa de pan rallado y un chorrito de aceite de oliva. Hornea a 180 ºC durante unos 10 minutos, hasta que la parte superior esté dorada."
    ],
    tiempo_coccion: "Aprox. 25–30 minutos entre sofrito y horneado",
    frio: false,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Txangurro.jpg",
    alergenos: ["marisco"]
  },
  {
    id: 2,
    nombre: "Ensalada Vasca de Pimientos Asados",
    tipo: "frío",
    ingredientes: [
      "4–5 pimientos rojos asados y pelados",
      "1–2 dientes de ajo muy picados",
      "Aceite de oliva virgen extra",
      "Vinagre de Jerez o similar",
      "Sal fina"
    ],
    preparacion: [
      "Corta los pimientos asados en tiras anchas y colócalos en una fuente amplia, repartiendo bien para que formen una capa uniforme.",
      "Añade el ajo muy picado por encima. Si prefieres un sabor más suave, puedes dorar ligeramente el ajo en un poco de aceite antes de añadirlo.",
      "Aliña con un buen chorro de aceite de oliva virgen extra, unas gotas de vinagre y sal al gusto.",
      "Remueve con cuidado con una cuchara para que los pimientos se impregnen del aliño sin romperse demasiado.",
      "Deja reposar al menos 30 minutos en la nevera antes de servir para que los sabores se integren. Sirve la ensalada fría o a temperatura ambiente."
    ],
    tiempo_coccion:
      "Sin cocción en el momento; se usan pimientos asados previamente",
    frio: true,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/e/e8/Pimientos_asados.JPG",
    alergenos: []
  },
  {
    id: 3,
    nombre: "Bacalao a la Vizcaína",
    tipo: "caliente",
    ingredientes: [
      "4 lomos de bacalao desalado",
      "2 pimientos choriceros hidratados",
      "2 cebollas",
      "3 tomates maduros rallados",
      "Caldo de pescado suave",
      "Aceite de oliva y sal"
    ],
    preparacion: [
      "Abre los pimientos choriceros hidratados y raspa con una cuchara la pulpa del interior. Deshazte de las pieles y reserva solo la pulpa.",
      "Pica muy fina la cebolla y sofríela en una cazuela con aceite de oliva a fuego lento, removiendo, hasta que quede muy tierna y ligeramente dorada.",
      "Añade el tomate rallado y cocina unos 10 minutos, hasta que la salsa reduzca y espese.",
      "Incorpora la pulpa de pimiento choricero y un poco de caldo de pescado. Deja que cueza a fuego suave unos minutos para que se mezclen bien los sabores.",
      "Coloca los lomos de bacalao sobre la salsa, con la piel hacia arriba. Cocina a fuego muy suave, sin que llegue a hervir fuerte, unos 10–15 minutos.",
      "Mueve la cazuela en vaivén de vez en cuando para ayudar a que el bacalao suelte su gelatina y la salsa quede más ligada y brillante."
    ],
    tiempo_coccion: "Unos 30 minutos en total",
    frio: false,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/Bacalao_a_la_vizcaina.jpg",
    alergenos: ["pescado"]
  },
  {
    id: 4,
    nombre: "Merluza a la Vasca",
    tipo: "caliente",
    ingredientes: [
      "8 rodajas de merluza fresca",
      "2 dientes de ajo",
      "Perejil fresco picado",
      "200 g de almejas",
      "200 g de gambas",
      "Caldo de pescado",
      "Aceite de oliva y sal"
    ],
    preparacion: [
      "Sala ligeramente las rodajas de merluza y resérvalas a temperatura ambiente mientras preparas la salsa.",
      "En una cazuela amplia, dora los ajos laminados con aceite de oliva a fuego suave hasta que tomen color dorado claro, sin quemarse.",
      "Añade una cucharada generosa de perejil picado y un poco de caldo de pescado. Remueve para que se forme una salsa verde ligera.",
      "Coloca las rodajas de merluza en la cazuela y cocina a fuego suave moviendo la cazuela en movimientos circulares para que la salsa emulsione.",
      "A mitad de cocción incorpora las almejas y las gambas. Cocina unos minutos más hasta que las almejas se abran y la merluza esté en su punto.",
      "Rectifica de sal y sirve inmediatamente con más perejil fresco por encima."
    ],
    tiempo_coccion: "15–20 minutos",
    frio: false,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/Merluza_a_la_vasca_estilo_basque_style_hake.jpg",
    alergenos: ["pescado", "marisco"]
  },
  {
    id: 5,
    nombre: "Pintxo de Gilda",
    tipo: "frío",
    ingredientes: [
      "Aceitunas verdes rellenas",
      "Anchoas en aceite",
      "Piparras o guindillas verdes en vinagre",
      "Palillos de madera"
    ],
    preparacion: [
      "Escurre bien las anchoas y las piparras para eliminar el exceso de líquido.",
      "Inserta en cada palillo una aceituna, una piparra doblada y una anchoa enrollada.",
      "Coloca las gildas en un plato y, si quieres, añade un chorrito de aceite de oliva por encima.",
      "Mantén en la nevera hasta el momento de servir y sírvelas frías como aperitivo."
    ],
    tiempo_coccion: "Sin cocción",
    frio: true,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Pintxo_Gilda.JPG",
    alergenos: ["pescado"]
  },
  {
    id: 6,
    nombre: "Marmitako",
    tipo: "caliente",
    ingredientes: [
      "600 g de atún o bonito en dados",
      "4 patatas",
      "1 pimiento verde",
      "1 cebolla",
      "2 dientes de ajo",
      "Caldo de pescado",
      "Aceite de oliva, sal y pimentón"
    ],
    preparacion: [
      "Pela las patatas y córtalas 'chascándolas' para que suelten almidón y espesen el guiso.",
      "Pocha la cebolla, el ajo y el pimiento verde picados en una cazuela con aceite de oliva hasta que queden blandos.",
      "Añade una cucharadita de pimentón dulce, remueve rápidamente y agrega las patatas. Cubre con caldo de pescado.",
      "Cuece a fuego medio hasta que las patatas estén tiernas, unos 25–30 minutos.",
      "Añade los dados de atún, apaga el fuego o déjalo muy suave y cocina solo unos minutos para que el pescado quede jugoso.",
      "Deja reposar el marmitako unos minutos antes de servir para que se asienten los sabores."
    ],
    tiempo_coccion: "30–40 minutos",
    frio: false,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Marmitako_en_un_risotto.jpg",
    alergenos: ["pescado"]
  },
  {
    id: 7,
    nombre: "Porrusalda",
    tipo: "caliente",
    ingredientes: [
      "3 puerros grandes",
      "3 patatas",
      "2 zanahorias",
      "Caldo de verduras o agua",
      "Aceite de oliva y sal"
    ],
    preparacion: [
      "Limpia bien los puerros y córtalos en rodajas gruesas. Pela las patatas y las zanahorias y córtalas en trozos similares.",
      "Sofríe ligeramente los puerros en una cazuela con un poco de aceite de oliva, solo hasta que empiecen a ablandarse.",
      "Añade las zanahorias y las patatas, cubre con caldo de verduras o agua y sazona con sal.",
      "Cuece a fuego medio hasta que las verduras estén muy tiernas. Puedes aplastar ligeramente alguna patata para espesar el caldo.",
      "Sirve la porrusalda bien caliente, con un chorrito extra de aceite si lo deseas."
    ],
    tiempo_coccion: "35–40 minutos",
    frio: false,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/0/01/Porrusalda.JPG",
    alergenos: []
  },
  {
    id: 8,
    nombre: "Kokotxas en Salsa Verde",
    tipo: "caliente",
    ingredientes: [
      "500 g de kokotxas de merluza",
      "3 dientes de ajo",
      "Perejil fresco picado",
      "Aceite de oliva",
      "Caldo de pescado",
      "Sal"
    ],
    preparacion: [
      "Seca bien las kokotxas con papel de cocina y sazónalas ligeramente con sal.",
      "En una cazuela baja, dora los ajos laminados en aceite de oliva a fuego suave.",
      "Añade una cucharada generosa de perejil picado y un poco de caldo de pescado.",
      "Introduce las kokotxas en la cazuela y cocina a fuego muy suave, moviendo la cazuela en círculos para que la salsa emulsione.",
      "Cuando la salsa tenga textura sedosa y las kokotxas estén cocinadas pero jugosas, retira del fuego y sirve inmediatamente."
    ],
    tiempo_coccion: "15 minutos",
    frio: false,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Kokotxas_en_salsa_verde_%28Labores_de_cocina%29.jpg",
    alergenos: ["pescado"]
  },
  {
    id: 9,
    nombre: "Txistorra a la plancha",
    tipo: "caliente",
    ingredientes: ["Txistorra fresca", "Pan rústico", "Aceite (opcional)"],
    preparacion: [
      "Pincha ligeramente la txistorra con un tenedor para que no reviente al cocinarse.",
      "Calienta una plancha o sartén. Si la txistorra tiene mucha grasa, no es necesario añadir aceite.",
      "Cocina la txistorra a fuego medio, dándole la vuelta varias veces, hasta que esté bien dorada por fuera y hecha por dentro.",
      "Sirve enseguida acompañada de pan rústico para aprovechar los jugos."
    ],
    tiempo_coccion: "10 minutos",
    frio: false,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Txistorra.JPG",
    alergenos: ["gluten"]
  },
  {
    id: 10,
    nombre: "Pintxo de Bacalao",
    tipo: "frío",
    ingredientes: [
      "Bacalao desalado desmigado",
      "Pan tipo barra cortado en rebanadas",
      "Aceite de oliva",
      "Ajo y perejil (opcional)"
    ],
    preparacion: [
      "Tuesta ligeramente las rebanadas de pan para que tengan una base crujiente.",
      "Mezcla el bacalao desmigado con un chorrito de aceite de oliva y, si quieres, un poco de ajo y perejil picados.",
      "Coloca una porción generosa de bacalao sobre cada rebanada de pan.",
      "Sirve los pintxos a temperatura ambiente o ligeramente fríos."
    ],
    tiempo_coccion: "Solo tostado del pan",
    frio: true,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Pintxo_de_bacalao_%28cropped%29.jpg",
    alergenos: ["pescado", "gluten"]
  },
  {
    id: 11,
    nombre: "Pastel Vasco",
    tipo: "frío",
    ingredientes: [
      "Masa de pastel (harina, mantequilla, huevos, azúcar)",
      "Crema pastelera o mermelada de cerezas negras",
      "Azúcar glass (opcional)"
    ],
    preparacion: [
      "Prepara una masa dulce mezclando harina, mantequilla, azúcar y huevos hasta obtener una masa homogénea. Deja reposar en la nevera.",
      "Estira la mitad de la masa y forra un molde redondo. Rellena con crema pastelera o mermelada de cerezas.",
      "Cubre con la otra mitad de masa estirada, sella los bordes y pinta la superficie con huevo batido.",
      "Hornea a 180 ºC hasta que la superficie esté dorada. Deja enfriar por completo antes de desmoldar y cortar.",
      "Espolvorea azúcar glass por encima si te apetece."
    ],
    tiempo_coccion: "35–40 minutos de horno",
    frio: true,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Pastel_vasco.jpg",
    alergenos: ["gluten", "lacteos", "huevo"]
  },
  {
    id: 12,
    nombre: "Alubias de Tolosa",
    tipo: "caliente",
    ingredientes: [
      "500 g de alubias de Tolosa",
      "1 cebolla",
      "1 zanahoria",
      "Chorizo, morcilla y tocino al gusto",
      "Agua y sal"
    ],
    preparacion: [
      "Lava las alubias y colócalas en una olla con agua fría limpia.",
      "Añade la cebolla y la zanahoria enteras y pon a calentar a fuego medio.",
      "Cuando empiece a hervir, baja el fuego para mantener un hervor suave y desespuma si es necesario.",
      "Añade el chorizo, la morcilla y el tocino y cocina lentamente durante unas 2–3 horas, moviendo la olla en vaivén para no romper las alubias.",
      "Añade la sal casi al final de la cocción y deja reposar unos minutos antes de servir."
    ],
    tiempo_coccion: "2–3 horas a fuego suave",
    frio: false,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/c/c4/Alubias_de_tolosa.jpg",
    alergenos: []
  },
  {
    id: 13,
    nombre: "Pantxineta",
    tipo: "frío",
    ingredientes: [
      "Láminas de hojaldre",
      "Crema pastelera espesa",
      "Almendra laminada",
      "Azúcar glass"
    ],
    preparacion: [
      "Extiende una lámina de hojaldre sobre una bandeja de horno y pincha con un tenedor para que no suba en exceso.",
      "Cubre con una capa generosa de crema pastelera, dejando un pequeño margen en los bordes.",
      "Coloca otra lámina de hojaldre encima y sella los bordes presionando con un tenedor.",
      "Pinta la superficie con huevo batido y espolvorea almendra laminada.",
      "Hornea a 180 ºC hasta que el hojaldre esté bien dorado. Deja enfriar y espolvorea azúcar glass antes de servir."
    ],
    tiempo_coccion: "30–35 minutos",
    frio: true,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Pantxineta.jpg",
    alergenos: ["gluten", "lacteos", "huevo", "frutoscascara"]
  },
  {
    id: 14,
    nombre: "Chipirones en su Tinta",
    tipo: "caliente",
    ingredientes: [
      "800 g de chipirones limpios",
      "1 cebolla",
      "2 dientes de ajo",
      "Tinta de calamar",
      "Vino blanco",
      "Aceite de oliva y sal"
    ],
    preparacion: [
      "Limpia bien los chipirones si no vienen ya preparados, retirando pluma, interior y piel.",
      "Pica la cebolla y el ajo muy finos y sofríelos en una cazuela con aceite de oliva hasta que estén transparentes.",
      "Añade los chipirones troceados y rehoga unos minutos a fuego medio.",
      "Vierte un chorrito de vino blanco y deja que reduzca. Disuelve la tinta en un poco de agua y añádela a la cazuela.",
      "Cocina a fuego suave 15–20 minutos, removiendo de vez en cuando, hasta que la salsa espese y los chipirones estén tiernos."
    ],
    tiempo_coccion: "20 minutos",
    frio: false,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Chipirones_en_su_tinta.jpg",
    alergenos: ["pescado"]
  },
  {
    id: 15,
    nombre: "Bacalao al Pil Pil",
    tipo: "caliente",
    ingredientes: [
      "4 lomos de bacalao desalado",
      "4 dientes de ajo",
      "Guindillas",
      "Aceite de oliva abundante"
    ],
    preparacion: [
      "Seca bien los lomos de bacalao con papel de cocina.",
      "En una cazuela baja, fríe los ajos laminados con las guindillas en abundante aceite de oliva a fuego suave. Retira los ajos y las guindillas cuando estén dorados.",
      "Baja un poco la temperatura del aceite y coloca los lomos de bacalao con la piel hacia abajo.",
      "Cocina moviendo la cazuela en movimientos circulares para que la gelatina del bacalao emulsione con el aceite y se forme una salsa espesa.",
      "Cuando la salsa esté ligada y el bacalao en su punto, sirve con los ajos y guindillas por encima."
    ],
    tiempo_coccion: "15–20 minutos",
    frio: false,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Bacalao_al_pil-pil.JPG",
    alergenos: ["pescado"]
  },
  {
    id: 16,
    nombre: "Talo con Chorizo",
    tipo: "caliente",
    ingredientes: [
      "Tortas de maíz (talo)",
      "Chorizo o txistorra",
      "Pimientos asados (opcional)"
    ],
    preparacion: [
      "Cocina la txistorra o el chorizo en una plancha o sartén hasta que esté dorado por fuera.",
      "Calienta ligeramente el talo en otra sartén o en la misma plancha para que quede flexible.",
      "Coloca la txistorra sobre el talo y añade tiras de pimiento asado si te gusta.",
      "Dobla el talo sobre el relleno y sirve caliente, como si fuera un bocadillo."
    ],
    tiempo_coccion: "10 minutos",
    frio: false,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/Talo_con_chorizo.jpg",
    alergenos: ["gluten"]
  },
  {
    id: 17,
    nombre: "Txuleta a la Brasa",
    tipo: "caliente",
    ingredientes: ["Chuleta gruesa de vacuno", "Sal gruesa"],
    preparacion: [
      "Saca la chuleta de la nevera con antelación para que pierda el frío.",
      "Calienta bien la parrilla o plancha hasta que esté muy caliente.",
      "Sala la carne justo antes de ponerla al fuego con sal gruesa.",
      "Marca la chuleta por ambos lados a fuego fuerte para que se dore y forme costra, y termina la cocción al punto que prefieras.",
      "Deja reposar unos minutos antes de cortarla para que los jugos se redistribuyan."
    ],
    tiempo_coccion: "15–20 minutos según grosor",
    frio: false,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Txuleta_%28chuleton_vasco%29.jpg",
    alergenos: []
  },
  {
    id: 18,
    nombre: "Goxua",
    tipo: "frío",
    ingredientes: [
      "Bizcocho",
      "Crema pastelera",
      "Nata montada",
      "Caramelo líquido"
    ],
    preparacion: [
      "Coloca una capa de bizcocho en el fondo de un vaso o copa.",
      "Cubre con una capa generosa de crema pastelera.",
      "Añade por encima nata montada al gusto.",
      "Termina con un hilo de caramelo líquido. Deja enfriar en la nevera antes de servir."
    ],
    tiempo_coccion: "Sin cocción, solo montaje",
    frio: true,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/5/59/Goxua.jpg",
    alergenos: ["gluten", "lacteos", "huevo"]
  },
  {
    id: 19,
    nombre: "Txalupa de Marisco",
    tipo: "caliente",
    ingredientes: [
      "Mejillones, gambas y otros mariscos",
      "Salsa bechamel",
      "Queso rallado para gratinar",
      "Barquitas o conchas para hornear"
    ],
    preparacion: [
      "Cocina ligeramente el marisco y pícalo en trozos pequeños.",
      "Mezcla el marisco con salsa bechamel espesa hasta obtener un relleno cremoso.",
      "Rellena las txalupas o conchas con la mezcla y cubre con queso rallado.",
      "Gratina en el horno a temperatura alta hasta que el queso esté dorado y burbujeante."
    ],
    tiempo_coccion: "10–15 minutos de gratinado",
    frio: false,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Txalupa_de_marisco.JPG",
    alergenos: ["marisco", "lacteos", "gluten"]
  },
  {
    id: 20,
    nombre: "Mousse de Idiazábal",
    tipo: "frío",
    ingredientes: [
      "Queso Idiazábal rallado",
      "Nata para montar",
      "Gelatina neutra",
      "Sal y pimienta"
    ],
    preparacion: [
      "Calienta una parte de la nata y disuelve en ella el queso Idiazábal rallado hasta obtener una crema homogénea.",
      "Añade la gelatina hidratada siguiendo las instrucciones del fabricante y deja templar.",
      "Monta el resto de la nata bien fría y mézclala con movimientos envolventes con la crema de queso.",
      "Reparte en vasos o moldes y deja cuajar en la nevera varias horas antes de servir."
    ],
    tiempo_coccion: "Sin cocción; requiere enfriado",
    frio: true,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Mousse_idiazabal.jpg",
    alergenos: ["lacteos"]
  },
  {
    id: 21,
    nombre: "Piperrada",
    tipo: "caliente",
    ingredientes: [
      "Pimientos rojos y verdes",
      "Tomate",
      "Cebolla",
      "Aceite de oliva y sal",
      "Huevos (opcional)"
    ],
    preparacion: [
      "Corta la cebolla en juliana fina y sofríela en una sartén amplia con aceite de oliva hasta que esté transparente.",
      "Añade los pimientos cortados en tiras y cocina a fuego medio hasta que se ablanden.",
      "Agrega el tomate picado o rallado y deja que se cocine hasta que el conjunto quede meloso.",
      "Rectifica de sal. Si lo deseas, puedes cuajar unos huevos sobre la piperrada o servirla como guarnición."
    ],
    tiempo_coccion: "30 minutos",
    frio: false,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Piperrada.jpg",
    alergenos: ["huevo"]
  },
  {
    id: 22,
    nombre: "Queso Idiazábal con Membrillo",
    tipo: "frío",
    ingredientes: ["Queso Idiazábal", "Dulce de membrillo"],
    preparacion: [
      "Corta el queso Idiazábal en cuñas o láminas finas.",
      "Corta el membrillo en porciones del mismo tamaño que el queso.",
      "Coloca una pieza de membrillo sobre cada trozo de queso y sirve como aperitivo o postre sencillo."
    ],
    tiempo_coccion: "Sin cocción",
    frio: true,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Idiazabal_cheese_with_quince_cheese.jpg",
    alergenos: ["lacteos"]
  },
  {
    id: 23,
    nombre: "Txipirones a la Plancha",
    tipo: "caliente",
    ingredientes: [
      "Txipirones limpios",
      "Aceite de oliva",
      "Ajo y perejil picados",
      "Sal"
    ],
    preparacion: [
      "Seca bien los txipirones con papel de cocina.",
      "Calienta una plancha o sartén con un poco de aceite a fuego fuerte.",
      "Cocina los txipirones muy poco tiempo por cada lado, solo hasta que cambien de color y estén tiernos.",
      "Mezcla ajo y perejil picados con un poco de aceite y vierte por encima al servir."
    ],
    tiempo_coccion: "5–7 minutos",
    frio: false,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Chipirones_en_su_tinta.jpg",
    alergenos: ["pescado"]
  },
  {
    id: 24,
    nombre: "Txakoli bien frío",
    tipo: "frío",
    ingredientes: ["Botella de txakoli", "Copa de vino"],
    preparacion: [
      "Enfría la botella de txakoli en la nevera varias horas antes de servir.",
      "Sirve el vino en copa, dejando que caiga con un poco de altura para que se oxigene ligeramente.",
      "Disfruta el txakoli bien frío acompañado de pintxos o marisco."
    ],
    tiempo_coccion: "Sin cocción",
    frio: true,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Txakoli.JPG",
    alergenos: ["sulfitos"] // si no quieres mostrarlo, puedes dejar []
  },
  {
    id: 25,
    nombre: "Ensaladilla de Mar",
    tipo: "frío",
    ingredientes: [
      "Patatas cocidas en dados",
      "Palitos de cangrejo",
      "Gambitas cocidas",
      "Pimientos rojos en tiras",
      "Mayonesa",
      "Sal"
    ],
    preparacion: [
      "Cuece las patatas con piel en agua con sal hasta que estén tiernas. Déjalas enfriar, pélalas y trocéalas en dados medianos.",
      "Pica los palitos de cangrejo y mezcla en un bol amplio con las gambitas cocidas y los pimientos rojos en tiras finas.",
      "Añade las patatas al bol y mezcla con cuidado para que no se deshagan demasiado.",
      "Incorpora mayonesa poco a poco hasta conseguir la textura cremosa que te guste. Ajusta de sal.",
      "Guarda la ensaladilla en la nevera al menos 1 hora para que esté bien fría antes de servir."
    ],
    tiempo_coccion: "20–25 minutos de cocción de patata",
    frio: true,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Ensaladilla_rusa_con_marisco.jpg",
    alergenos: ["marisco", "huevo"]
  },
  {
    id: 26,
    nombre: "Pollo al Ajillo",
    tipo: "caliente",
    ingredientes: [
      "Trozos de pollo con hueso",
      "4–5 dientes de ajo",
      "Vino blanco",
      "Aceite de oliva",
      "Sal y pimienta"
    ],
    preparacion: [
      "Salpimienta los trozos de pollo y dóralos en una sartén amplia con aceite de oliva caliente hasta que queden bien tostados por fuera.",
      "Añade los ajos ligeramente machacados con piel y sigue cocinando para que perfumen el aceite.",
      "Vierte un buen chorro de vino blanco y raspa el fondo de la sartén para desprender los jugos.",
      "Baja el fuego y cocina tapado unos 15–20 minutos, hasta que el pollo esté bien hecho por dentro y la salsa haya reducido.",
      "Sirve el pollo al ajillo acompañado de la salsa y, si quieres, con patatas o pan para mojar."
    ],
    tiempo_coccion: "25–30 minutos",
    frio: false,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Pollo_al_ajillo.jpg",
    alergenos: []
  }
];

// =======================
// Configuración alérgenos
// =======================
const ALERGENOS_UI = {
  gluten: {
    label: "🌾",         // trigo
    cls: "gluten",
    title: "Contiene gluten"
  },
  lacteos: {
    label: "🥛",         // leche
    cls: "lacteos",
    title: "Lácteos"
  },
  huevo: {
    label: "🥚",         // huevo
    cls: "huevo",
    title: "Huevo"
  },
  pescado: {
    label: "🐟",         // pescado
    cls: "pescado",
    title: "Pescado"
  },
  marisco: {
    label: "🦀",         // cangrejo
    cls: "marisco",
    title: "Marisco/Crustáceos"
  },
  frutoscascara: {
    label: "🌰",         // frutos de cáscara
    cls: "frutoscascara",
    title: "Frutos de cáscara"
  },
  soja: {
    label: "🌱",         // planta/soja
    cls: "soja",
    title: "Soja"
  }
};


// =======================
// Referencias DOM
// =======================
const main = document.getElementById("recetas");
const buscador = document.getElementById("buscador");
const btnTodos = document.getElementById("todos");
const btnFrios = document.getElementById("frios");
const btnCalientes = document.getElementById("calientes");

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalIngredientes = document.getElementById("modalIngredientes");
const modalPreparacion = document.getElementById("modalPreparacion");
const modalTiempo = document.getElementById("modalTiempo");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modal-close");
const modalAlergenos = document.getElementById("modalAlergenos");
const modalFavBtn = document.getElementById("modalFavBtn");

const listaFavoritos = document.getElementById("listaFavoritos");

// estado
let filtroTipo = "todos";
let favoritos = JSON.parse(localStorage.getItem("favoritosVascos") || "[]");

// =======================
// Render de recetas
// =======================
function renderRecetas() {
  const texto = buscador.value.toLowerCase().trim();
  main.innerHTML = "";

  const filtradas = recetas.filter((r) => {
    if (filtroTipo === "frios" && !r.frio) return false;
    if (filtroTipo === "calientes" && r.frio) return false;

    if (texto === "") return true;

    const enNombre = r.nombre.toLowerCase().includes(texto);
    const enIngredientes = r.ingredientes.some((ing) =>
      ing.toLowerCase().includes(texto)
    );
    return enNombre || enIngredientes;
  });

  if (filtradas.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No hay recetas que coincidan con la búsqueda.";
    p.className = "sin-resultados";
    main.appendChild(p);
    return;
  }

  filtradas.forEach((r) => {
    const card = document.createElement("article");
    card.className = "receta-card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Ver receta ${r.nombre}`);

    const badges = (r.alergenos || [])
      .map((k) => {
        const conf = ALERGENOS_UI[k];
        return conf
          ? `<span class="badge ${conf.cls}" title="${conf.title}">${conf.label}</span>`
          : "";
      })
      .join("");

    card.innerHTML = `
      <img src="${r.imagen}" alt="${r.nombre}" />
      <button class="star-btn ${favoritos.includes(r.id) ? "activo" : ""}" data-id="${r.id}" aria-label="Favorito">★</button>
      <div class="receta-nombre">${r.nombre}</div>
      <div class="alergenos">${badges}</div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest(".star-btn")) return;
      abrirModal(r);
    });
    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") abrirModal(r);
    });

    const star = card.querySelector(".star-btn");
    star.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorito(r.id);
      star.classList.toggle("activo", favoritos.includes(r.id));
    });

    main.appendChild(card);
  });
}

// =======================
// Modal
// =======================
function abrirModal(receta) {
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  modalTitle.textContent = receta.nombre;

  modalIngredientes.innerHTML = receta.ingredientes
    .map((i) => `<li>${i}</li>`)
    .join("");

  modalPreparacion.innerHTML = receta.preparacion
    .map((paso, index) => `<li>Paso ${index + 1}: ${paso}</li>`)
    .join("");

  modalTiempo.textContent = receta.tiempo_coccion;
  modalImg.src = receta.imagen;
  modalImg.alt = `Imagen de ${receta.nombre}`;

  modalAlergenos.innerHTML = (receta.alergenos || [])
    .map((k) => {
      const conf = ALERGENOS_UI[k];
      return conf
        ? `<span class="badge ${conf.cls}" title="${conf.title}">${conf.label}</span>`
        : "";
    })
    .join("");

  modalFavBtn.classList.toggle("activo", favoritos.includes(receta.id));
  modalFavBtn.onclick = () => {
    toggleFavorito(receta.id);
    modalFavBtn.classList.toggle("activo", favoritos.includes(receta.id));
    renderRecetas();
  };
}

function cerrarModal() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", cerrarModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) cerrarModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") cerrarModal();
});

// =======================
// Favoritos
// =======================
function toggleFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter((x) => x !== id);
  } else {
    favoritos.push(id);
  }
  localStorage.setItem("favoritosVascos", JSON.stringify(favoritos));
  renderFavoritos();
}

function renderFavoritos() {
  listaFavoritos.innerHTML = "";
  const items = recetas.filter((r) => favoritos.includes(r.id));

  if (items.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Aún no hay favoritos.";
    li.style.opacity = "0.8";
    listaFavoritos.appendChild(li);
    return;
  }

  items.forEach((r) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${r.imagen}" alt="${r.nombre}">
      <span>${r.nombre}</span>
      <button class="fav-remove" data-id="${r.id}" aria-label="Quitar">Quitar</button>
    `;

    li.addEventListener("click", (e) => {
      if (e.target.closest(".fav-remove")) {
        toggleFavorito(r.id);
        return;
      }
      abrirModal(r);
    });

    listaFavoritos.appendChild(li);
  });
}

// =======================
// Filtros y buscador
// =======================
btnTodos.addEventListener("click", () => {
  filtroTipo = "todos";
  setActive(btnTodos);
  renderRecetas();
});
btnFrios.addEventListener("click", () => {
  filtroTipo = "frios";
  setActive(btnFrios);
  renderRecetas();
});
btnCalientes.addEventListener("click", () => {
  filtroTipo = "calientes";
  setActive(btnCalientes);
  renderRecetas();
});

function setActive(btn) {
  [btnTodos, btnFrios, btnCalientes].forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

buscador.addEventListener("input", renderRecetas);

renderRecetas();
renderFavoritos();
