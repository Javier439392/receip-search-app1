// =======================
// Datos de las recetas
// =======================
const recetas = [
{
  id: 1,
  nombre: "Txangurro a la Donostiarra",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "Aprox. 25–30 minutos entre sofrito y horneado"
    },
    en: {
      ingredientes: [
        "1 large cooked brown crab",
        "1 large onion, finely chopped",
        "1 small leek, finely chopped",
        "1 ripe tomato, grated or chopped",
        "100 ml of brandy",
        "Breadcrumbs",
        "Olive oil, salt, and black pepper"
      ],
      preparacion: [
        "Open the brown crab and carefully remove all the meat from the inside, including the legs. Make sure there are no pieces of shell mixed with the meat.",
        "Chop the crab meat into small but visible pieces and set it aside in a bowl. Wash the shell, as it will be used as a serving dish.",
        "Heat a large pan with a good splash of oil. Sauté the onion and leek over medium–low heat, stirring occasionally, until they are very tender and lightly golden.",
        "Add the grated tomato to the pan and cook a few more minutes until most of the water has evaporated and you have a thick, flavorful sauce.",
        "Incorporate the crab meat, mix well, and let it cook for a couple of minutes to absorb the flavors. Pour in the brandy and flambé or let the alcohol evaporate over high heat.",
        "Taste and adjust with salt and pepper. Fill the crab shell with the mixture, pressing slightly with a spoon.",
        "Cover the surface with a thin layer of breadcrumbs and a drizzle of olive oil. Bake at 180 ºC for about 10 minutes, until the top is golden."
      ],
      tiempo_coccion: "About 25–30 minutes including sautéing and baking"
    }
  },
  frio: false,
  imagen: "txangurro.jpg",
  alergenos: ["marisco"]
 },
{
  id: 2,
  nombre: "Ensalada Vasca de Pimientos Asados",
  tipo: "frío",
  textos: {
    es: {
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
        "Sin cocción en el momento; se usan pimientos asados previamente"
    },
    en: {
      ingredientes: [
        "4–5 roasted red peppers, peeled",
        "1–2 garlic cloves, very finely chopped",
        "Extra virgin olive oil",
        "Sherry vinegar or similar",
        "Fine salt"
      ],
      preparacion: [
        "Cut the roasted peppers into wide strips and place them on a large serving dish, spreading them out to form an even layer.",
        "Sprinkle the finely chopped garlic on top. If you prefer a milder flavor, you can lightly fry the garlic in a little oil before adding it.",
        "Dress with a good splash of extra virgin olive oil, a few drops of vinegar and salt to taste.",
        "Gently stir with a spoon so the peppers absorb the dressing without breaking too much.",
        "Let it rest in the fridge for at least 30 minutes before serving so the flavors blend. Serve the salad cold or at room temperature."
      ],
      tiempo_coccion:
        "No cooking at the moment; previously roasted peppers are used"
    }
  },
  frio: true,
  imagen: "pimientos-asados.jpg",
  alergenos: []
},
  {
  id: 3,
  nombre: "Bacalao a la Vizcaína",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "Unos 30 minutos en total"
    },
    en: {
      ingredientes: [
        "4 desalted cod fillets",
        "2 hydrated choricero peppers",
        "2 onions",
        "3 ripe tomatoes, grated",
        "Mild fish stock",
        "Olive oil and salt"
      ],
      preparacion: [
        "Open the hydrated choricero peppers and scrape the pulp from the inside with a spoon. Discard the skins and keep only the pulp.",
        "Finely chop the onions and sauté them in a casserole with olive oil over low heat, stirring, until very tender and lightly golden.",
        "Add the grated tomatoes and cook for about 10 minutes, until the sauce reduces and thickens.",
        "Incorporate the choricero pepper pulp and a little fish stock. Let it simmer gently for a few minutes so the flavors blend well.",
        "Place the cod fillets over the sauce, skin side up. Cook over very low heat, without boiling strongly, for about 10–15 minutes.",
        "Move the casserole gently from side to side from time to time to help the cod release its gelatin and make the sauce more cohesive and glossy."
      ],
      tiempo_coccion: "About 30 minutes in total"
    }
  },
    frio: false,
    imagen:
      "Bacalao_Vizcaina.jpg",
    alergenos: ["pescado"]
  },
  {
  id: 4,
  nombre: "Merluza a la Vasca",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "15–20 minutos"
    },
    en: {
      ingredientes: [
        "8 slices of fresh hake",
        "2 garlic cloves",
        "Fresh chopped parsley",
        "200 g of clams",
        "200 g of prawns",
        "Fish stock",
        "Olive oil and salt"
      ],
      preparacion: [
        "Lightly salt the hake slices and set them aside at room temperature while preparing the sauce.",
        "In a large casserole, lightly brown the sliced garlic in olive oil over low heat until they take a light golden color, without burning.",
        "Add a generous tablespoon of chopped parsley and a little fish stock. Stir to form a light green sauce.",
        "Place the hake slices in the casserole and cook over low heat, moving the pan in circular motions so the sauce emulsifies.",
        "Halfway through cooking, add the clams and prawns. Cook a few more minutes until the clams open and the hake is perfectly cooked.",
        "Adjust salt to taste and serve immediately with more fresh parsley on top."
      ],
      tiempo_coccion: "15–20 minutes"
    }
  },
    frio: false,
    imagen:
      "Merluza_a_la_Vasca.JPG",
    alergenos: ["pescado", "marisco"]
  },
  {
 id: 5,
  nombre: "Pintxo de Gilda",
  tipo: "frío",
  textos: {
    es: {
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
      tiempo_coccion: "Sin cocción"
    },
    en: {
      ingredientes: [
        "Green olives stuffed",
        "Anchovies in oil",
        "Piparras or green pickled chili peppers",
        "Wooden toothpicks"
      ],
      preparacion: [
        "Drain the anchovies and piparras well to remove excess liquid.",
        "Thread each toothpick with one olive, one folded piparra, and one rolled anchovy.",
        "Place the gildas on a plate and, if desired, drizzle with a little olive oil on top.",
        "Keep in the fridge until serving and serve them cold as an appetizer."
      ],
      tiempo_coccion: "No cooking"
    }
  },
    frio: true,
    imagen: "Gildas.jpg",
    alergenos: ["pescado"]
  },
  {
  id: 6,
  nombre: "Marmitako",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "30–40 minutos"
    },
    en: {
      ingredientes: [
        "600 g of tuna or bonito, diced",
        "4 potatoes",
        "1 green pepper",
        "1 onion",
        "2 garlic cloves",
        "Fish stock",
        "Olive oil, salt, and paprika"
      ],
      preparacion: [
        "Peel the potatoes and cut them by 'breaking' them so they release starch and thicken the stew.",
        "Sweat the chopped onion, garlic, and green pepper in a casserole with olive oil until soft.",
        "Add a teaspoon of sweet paprika, stir quickly, and add the potatoes. Cover with fish stock.",
        "Cook over medium heat until the potatoes are tender, about 25–30 minutes.",
        "Add the diced tuna, turn off the heat or leave it very low, and cook just a few minutes so the fish stays juicy.",
        "Let the marmitako rest for a few minutes before serving so the flavors settle."
      ],
      tiempo_coccion: "30–40 minutes"
    }
  },
    frio: false,
    imagen:
      "Marmitako.jpg",
    alergenos: ["pescado"]
  },
  {
      id: 7,
  nombre: "Porrusalda",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "35–40 minutos"
    },
    en: {
      ingredientes: [
        "3 large leeks",
        "3 potatoes",
        "2 carrots",
        "Vegetable stock or water",
        "Olive oil and salt"
      ],
      preparacion: [
        "Clean the leeks well and cut them into thick slices. Peel the potatoes and carrots and cut them into similar-sized pieces.",
        "Lightly sauté the leeks in a casserole with a little olive oil, just until they start to soften.",
        "Add the carrots and potatoes, cover with vegetable stock or water, and season with salt.",
        "Cook over medium heat until the vegetables are very tender. You can lightly mash some potatoes to thicken the broth.",
        "Serve the porrusalda piping hot, with an extra drizzle of oil if desired."
      ],
      tiempo_coccion: "35–40 minutes"
    }
  },
    frio: false,
    imagen: "Porrusalda.jpg",
    alergenos: []
  },
  {
     id: 8,
  nombre: "Kokotxas en Salsa Verde",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "15 minutos"
    },
    en: {
      ingredientes: [
        "500 g of hake cheeks (kokotxas)",
        "3 garlic cloves",
        "Fresh chopped parsley",
        "Olive oil",
        "Fish stock",
        "Salt"
      ],
      preparacion: [
        "Pat the kokotxas dry with paper towels and lightly season with salt.",
        "In a shallow casserole, brown the sliced garlic in olive oil over low heat.",
        "Add a generous tablespoon of chopped parsley and a little fish stock.",
        "Place the kokotxas in the casserole and cook over very low heat, moving the pan in circles so the sauce emulsifies.",
        "When the sauce has a silky texture and the kokotxas are cooked but still juicy, remove from heat and serve immediately."
      ],
      tiempo_coccion: "15 minutes"
    }
  },
    frio: false,
    imagen:
      "Cocochas.jpg",
    alergenos: ["pescado"]
  },
  {
  id: 9,
  nombre: "Txistorra a la plancha",
  tipo: "caliente",
  textos: {
    es: {
      ingredientes: [
        "Txistorra fresca",
        "Pan rústico",
        "Aceite (opcional)"
      ],
      preparacion: [
        "Pincha ligeramente la txistorra con un tenedor para que no reviente al cocinarse.",
        "Calienta una plancha o sartén. Si la txistorra tiene mucha grasa, no es necesario añadir aceite.",
        "Cocina la txistorra a fuego medio, dándole la vuelta varias veces, hasta que esté bien dorada por fuera y hecha por dentro.",
        "Sirve enseguida acompañada de pan rústico para aprovechar los jugos."
      ],
      tiempo_coccion: "10 minutos"
    },
    en: {
      ingredientes: [
        "Fresh txistorra sausage",
        "Rustic bread",
        "Oil (optional)"
      ],
      preparacion: [
        "Prick the txistorra lightly with a fork so it doesn't burst while cooking.",
        "Heat a griddle or frying pan. If the txistorra is very fatty, adding oil is not necessary.",
        "Cook the txistorra over medium heat, turning it several times, until it is nicely browned on the outside and cooked through.",
        "Serve immediately with rustic bread to enjoy the juices."
      ],
      tiempo_coccion: "10 minutes"
    }
  },
    frio: false,
    imagen: "Chistorra.jpg",
    alergenos: ["gluten"]
  },
  {
     id: 10,
  nombre: "Pintxo de Bacalao",
  tipo: "frío",
  textos: {
    es: {
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
      tiempo_coccion: "Solo tostado del pan"
    },
    en: {
      ingredientes: [
        "Desalted shredded cod",
        "Baguette-style bread, sliced",
        "Olive oil",
        "Garlic and parsley (optional)"
      ],
      preparacion: [
        "Lightly toast the bread slices so they have a crispy base.",
        "Mix the shredded cod with a drizzle of olive oil and, if desired, some chopped garlic and parsley.",
        "Place a generous portion of cod on each slice of bread.",
        "Serve the pintxos at room temperature or slightly chilled."
      ],
      tiempo_coccion: "Only toasting the bread"
    }
  },
    frio: true,
    imagen:
      "pintxo-de-bacalao-en-aceite.jpg",
    alergenos: ["pescado", "gluten"]
  },
  {
      id: 11,
  nombre: "Pastel Vasco",
  tipo: "frío",
  textos: {
    es: {
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
      tiempo_coccion: "35–40 minutos de horno"
    },
    en: {
      ingredientes: [
        "Pastry dough (flour, butter, eggs, sugar)",
        "Pastry cream or black cherry jam",
        "Powdered sugar (optional)"
      ],
      preparacion: [
        "Prepare a sweet dough by mixing flour, butter, sugar, and eggs until you get a smooth dough. Let it rest in the fridge.",
        "Roll out half of the dough and line a round baking tin. Fill with pastry cream or jam.",
        "Cover with the other half of the rolled-out dough, seal the edges, and brush the surface with beaten egg.",
        "Bake at 180 ºC until the surface is golden. Let cool completely before unmolding and slicing.",
        "Sprinkle with powdered sugar on top if desired."
      ],
      tiempo_coccion: "35–40 minutes in the oven"
    }
  },
    frio: true,
    imagen: "pastel_vasco.jpg",
    alergenos: ["gluten", "lacteos", "huevo"]
  },
  {
 id: 12,
  nombre: "Alubias de Tolosa",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "2–3 horas a fuego suave"
    },
    en: {
      ingredientes: [
        "500 g of Tolosa beans",
        "1 onion",
        "1 carrot",
        "Chorizo, blood sausage, and bacon to taste",
        "Water and salt"
      ],
      preparacion: [
        "Wash the beans and place them in a pot with clean cold water.",
        "Add the whole onion and carrot and heat over medium heat.",
        "When it starts to boil, reduce the heat to maintain a gentle simmer and skim off foam if necessary.",
        "Add the chorizo, blood sausage, and bacon, and cook slowly for about 2–3 hours, moving the pot gently to avoid breaking the beans.",
        "Add salt near the end of cooking and let rest a few minutes before serving."
      ],
      tiempo_coccion: "2–3 hours over low heat"
    }
  },
    frio: false,
    imagen:
      "alubias.jpg",
    alergenos: []
  },
  {
  id: 13,
  nombre: "Pantxineta",
  tipo: "frío",
  textos: {
    es: {
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
      tiempo_coccion: "30–35 minutos"
    },
    en: {
      ingredientes: [
        "Puff pastry sheets",
        "Thick pastry cream",
        "Sliced almonds",
        "Powdered sugar"
      ],
      preparacion: [
        "Lay one puff pastry sheet on a baking tray and prick with a fork so it doesn't rise too much.",
        "Cover with a generous layer of pastry cream, leaving a small border around the edges.",
        "Place another puff pastry sheet on top and seal the edges by pressing with a fork.",
        "Brush the surface with beaten egg and sprinkle with sliced almonds.",
        "Bake at 180 ºC until the puff pastry is golden brown. Let cool and sprinkle with powdered sugar before serving."
      ],
      tiempo_coccion: "30–35 minutes"
    }
  },
    frio: true,
    imagen: "Pantxineta.jpg",
    alergenos: ["gluten", "lacteos", "huevo", "frutoscascara"]
  },
  {
   id: 14,
  nombre: "Chipirones en su Tinta",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "20 minutos"
    },
    en: {
      ingredientes: [
        "800 g of cleaned baby squid",
        "1 onion",
        "2 garlic cloves",
        "Squid ink",
        "White wine",
        "Olive oil and salt"
      ],
      preparacion: [
        "Clean the baby squid well if not already prepared, removing the quill, innards, and skin.",
        "Finely chop the onion and garlic and sauté them in a casserole with olive oil until translucent.",
        "Add the chopped squid and sauté for a few minutes over medium heat.",
        "Pour in a splash of white wine and let it reduce. Dissolve the ink in a little water and add it to the casserole.",
        "Cook over low heat for 15–20 minutes, stirring occasionally, until the sauce thickens and the squid is tender."
      ],
      tiempo_coccion: "20 minutes"
    }
  },
    frio: false,
    imagen:
      "txipis.JPG",
    alergenos: ["pescado"]
  },
  {
    id: 15,
  nombre: "Bacalao al Pil Pil",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "15–20 minutos"
    },
    en: {
      ingredientes: [
        "4 desalted cod fillets",
        "4 garlic cloves",
        "Chili peppers",
        "Plenty of olive oil"
      ],
      preparacion: [
        "Pat the cod fillets dry with paper towels.",
        "In a shallow casserole, fry the sliced garlic with the chili peppers in plenty of olive oil over low heat. Remove the garlic and chili when golden.",
        "Lower the oil temperature slightly and place the cod fillets skin side down.",
        "Cook, moving the casserole in circular motions so the cod's gelatin emulsifies with the oil and forms a thick sauce.",
        "When the sauce is well combined and the cod is cooked, serve with the garlic and chili on top."
      ],
      tiempo_coccion: "15–20 minutes"
    }
  },
    frio: false,
    imagen:
      "Bacalao_al_Pil_Pil.jpg",
    alergenos: ["pescado"]
  },
  {
  id: 16,
  nombre: "Talo con Chorizo",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "10 minutos"
    },
    en: {
      ingredientes: [
        "Corn cakes (talo)",
        "Chorizo or txistorra sausage",
        "Roasted peppers (optional)"
      ],
      preparacion: [
        "Cook the txistorra or chorizo on a griddle or frying pan until browned on the outside.",
        "Lightly heat the talo in another pan or on the same griddle to make it flexible.",
        "Place the txistorra on the talo and add strips of roasted pepper if desired.",
        "Fold the talo over the filling and serve hot, like a sandwich."
      ],
      tiempo_coccion: "10 minutes"
    }
  },
    frio: false,
    imagen:
      "Talo-con-txorizo.jpg",
    alergenos: ["gluten"]
  },
  {
   id: 17,
  nombre: "Txuleta a la Brasa",
  tipo: "caliente",
  textos: {
    es: {
      ingredientes: [
        "Chuleta gruesa de vacuno",
        "Sal gruesa"
      ],
      preparacion: [
        "Saca la chuleta de la nevera con antelación para que pierda el frío.",
        "Calienta bien la parrilla o plancha hasta que esté muy caliente.",
        "Sala la carne justo antes de ponerla al fuego con sal gruesa.",
        "Marca la chuleta por ambos lados a fuego fuerte para que se dore y forme costra, y termina la cocción al punto que prefieras.",
        "Deja reposar unos minutos antes de cortarla para que los jugos se redistribuyan."
      ],
      tiempo_coccion: "15–20 minutos según grosor"
    },
    en: {
      ingredientes: [
        "Thick beef ribeye steak",
        "Coarse salt"
      ],
      preparacion: [
        "Take the steak out of the fridge in advance to lose the chill.",
        "Heat the grill or griddle well until very hot.",
        "Season the meat with coarse salt just before placing it on the heat.",
        "Sear the steak on both sides over high heat to brown and form a crust, then finish cooking to your preferred doneness.",
        "Let rest a few minutes before cutting so the juices redistribute."
      ],
      tiempo_coccion: "15–20 minutes depending on thickness"
    }
  },
    frio: false,
    imagen:
      "txuleta.jpg",
    alergenos: []
  },
  {
  id: 18,
  nombre: "Goxua",
  tipo: "frío",
  textos: {
    es: {
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
      tiempo_coccion: "Sin cocción, solo montaje"
    },
    en: {
      ingredientes: [
        "Sponge cake",
        "Pastry cream",
        "Whipped cream",
        "Liquid caramel"
      ],
      preparacion: [
        "Place a layer of sponge cake at the bottom of a glass or cup.",
        "Cover with a generous layer of pastry cream.",
        "Add whipped cream on top to taste.",
        "Finish with a drizzle of liquid caramel. Chill in the fridge before serving."
      ],
      tiempo_coccion: "No cooking, just assembly"
    }
  },
    frio: true,
    imagen: "Goxua.jpg",
    alergenos: ["gluten", "lacteos", "huevo"]
  },
  {
 id: 19,
  nombre: "Txalupa de Marisco",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "10–15 minutos de gratinado"
    },
    en: {
      ingredientes: [
        "Mussels, prawns, and other seafood",
        "Béchamel sauce",
        "Grated cheese for gratin",
        "Small baking boats or shells"
      ],
      preparacion: [
        "Lightly cook the seafood and chop it into small pieces.",
        "Mix the seafood with thick béchamel sauce to obtain a creamy filling.",
        "Fill the boats or shells with the mixture and top with grated cheese.",
        "Gratin in the oven at high temperature until the cheese is golden and bubbly."
      ],
      tiempo_coccion: "10–15 minutes for gratin"
    }
  },
    frio: false,
    imagen:
      "Chalupas.jpg",
    alergenos: ["marisco", "lacteos", "gluten"]
  },
  {
   id: 20,
  nombre: "Mousse de Idiazábal",
  tipo: "frío",
  textos: {
    es: {
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
      tiempo_coccion: "Sin cocción; requiere enfriado"
    },
    en: {
      ingredientes: [
        "Grated Idiazábal cheese",
        "Whipping cream",
        "Neutral gelatin",
        "Salt and pepper"
      ],
      preparacion: [
        "Heat part of the cream and dissolve the grated Idiazábal cheese in it until you obtain a smooth cream.",
        "Add the hydrated gelatin following the manufacturer's instructions and let it cool slightly.",
        "Whip the remaining cold cream and fold it gently into the cheese cream.",
        "Divide into glasses or molds and let set in the fridge for several hours before serving."
      ],
      tiempo_coccion: "No cooking; requires chilling"
    }
  },
    frio: true,
    imagen:
      "mouse_ideaz.JPG",
    alergenos: ["lacteos"]
  },
  {
    id: 21,
  nombre: "Piperrada",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "30 minutos"
    },
    en: {
      ingredientes: [
        "Red and green peppers",
        "Tomato",
        "Onion",
        "Olive oil and salt",
        "Eggs (optional)"
      ],
      preparacion: [
        "Cut the onion into thin julienne and sauté in a large pan with olive oil until translucent.",
        "Add the peppers cut into strips and cook over medium heat until softened.",
        "Add the chopped or grated tomato and cook until the mixture becomes soft and saucy.",
        "Adjust salt to taste. If desired, you can cook some eggs on top of the piperrada or serve it as a side dish."
      ],
      tiempo_coccion: "30 minutes"
    }
  },
    frio: false,
    imagen: "Piperrada.jpg",
    alergenos: ["huevo"]
  },
  {
  id: 22,
  nombre: "Queso Idiazábal con Membrillo",
  tipo: "frío",
  textos: {
    es: {
      ingredientes: [
        "Queso Idiazábal",
        "Dulce de membrillo"
      ],
      preparacion: [
        "Corta el queso Idiazábal en cuñas o láminas finas.",
        "Corta el membrillo en porciones del mismo tamaño que el queso.",
        "Coloca una pieza de membrillo sobre cada trozo de queso y sirve como aperitivo o postre sencillo."
      ],
      tiempo_coccion: "Sin cocción"
    },
    en: {
      ingredientes: [
        "Idiazábal cheese",
        "Quince paste"
      ],
      preparacion: [
        "Cut the Idiazábal cheese into wedges or thin slices.",
        "Cut the quince paste into portions the same size as the cheese.",
        "Place a piece of quince paste on top of each cheese slice and serve as an appetizer or simple dessert."
      ],
      tiempo_coccion: "No cooking"
    }
  },
    frio: true,
    imagen:
      "queso-de-idiazabal-con-membrillo.jpg",
    alergenos: ["lacteos"]
  },
  {
   id: 23,
  nombre: "Txipirones a la Plancha",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "5–7 minutos"
    },
    en: {
      ingredientes: [
        "Cleaned baby squid",
        "Olive oil",
        "Chopped garlic and parsley",
        "Salt"
      ],
      preparacion: [
        "Pat the baby squid dry with paper towels.",
        "Heat a griddle or frying pan with a little oil over high heat.",
        "Cook the squid very briefly on each side, just until they change color and are tender.",
        "Mix the chopped garlic and parsley with a little oil and pour over the squid when serving."
      ],
      tiempo_coccion: "5–7 minutes"
    }
  },
    frio: false,
    imagen:
      "txipis_a_la_plancha.jpg",
    alergenos: ["pescado"]
  },
  {
  id: 24,
  nombre: "Txakoli bien frío",
  tipo: "frío",
  textos: {
    es: {
      ingredientes: [
        "Botella de txakoli",
        "Copa de vino"
      ],
      preparacion: [
        "Enfría la botella de txakoli en la nevera varias horas antes de servir.",
        "Sirve el vino en copa, dejando que caiga con un poco de altura para que se oxigene ligeramente.",
        "Disfruta el txakoli bien frío acompañado de pintxos o marisco."
      ],
      tiempo_coccion: "Sin cocción"
    },
    en: {
      ingredientes: [
        "Bottle of Txakoli",
        "Wine glass"
      ],
      preparacion: [
        "Chill the bottle of Txakoli in the fridge for several hours before serving.",
        "Pour the wine into a glass, letting it fall from a little height to aerate slightly.",
        "Enjoy the Txakoli well chilled, accompanied by pintxos or seafood."
      ],
      tiempo_coccion: "No cooking"
    }
  },
    frio: true,
    imagen: "Txakolin_botila.jpg",
    alergenos: ["sulfitos"] // si no quieres mostrarlo, puedes dejar []
  },
  {
    id: 25,
  nombre: "Ensaladilla de Marisco",
  tipo: "frío",
  textos: {
    es: {
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
      tiempo_coccion: "20–25 minutos de cocción de patata"
    },
    en: {
      ingredientes: [
        "Boiled potatoes, diced",
        "Crab sticks",
        "Cooked small prawns",
        "Red peppers in strips",
        "Mayonnaise",
        "Salt"
      ],
      preparacion: [
        "Boil the potatoes with skin in salted water until tender. Let them cool, peel, and cut into medium-sized cubes.",
        "Chop the crab sticks and mix in a large bowl with the cooked prawns and thinly sliced red peppers.",
        "Add the potatoes to the bowl and mix gently so they don't break apart too much.",
        "Gradually add mayonnaise until you get the creamy texture you like. Adjust salt to taste.",
        "Keep the salad in the fridge for at least 1 hour so it is well chilled before serving."
      ],
      tiempo_coccion: "20–25 minutes for cooking the potatoes"
    }
  },
    frio: true,
    imagen:
      "Ensalada_de_marisco.jpg",
    alergenos: ["marisco", "huevo"]
  },
  {
    id: 26,
  nombre: "Pollo al Ajillo",
  tipo: "caliente",
  textos: {
    es: {
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
      tiempo_coccion: "25–30 minutos"
    },
    en: {
      ingredientes: [
        "Bone-in chicken pieces",
        "4–5 garlic cloves",
        "White wine",
        "Olive oil",
        "Salt and pepper"
      ],
      preparacion: [
        "Season the chicken pieces with salt and pepper and brown them in a large pan with hot olive oil until well toasted on the outside.",
        "Add the lightly crushed garlic cloves with skin and continue cooking to flavor the oil.",
        "Pour a good splash of white wine and scrape the bottom of the pan to release the juices.",
        "Lower the heat and cook covered for about 15–20 minutes, until the chicken is fully cooked and the sauce has reduced.",
        "Serve the garlic chicken with the sauce and, if desired, with potatoes or bread for dipping."
      ],
      tiempo_coccion: "25–30 minutes"
    }
  },
    frio: false,
    imagen: "Pollo_al_ajillo.jpg",
    alergenos: []
  }
];


const ALERGENOS_UI = {
  gluten: {
    label: "🌾",         
    cls: "gluten",
    title: "Contiene gluten"
  },
  lacteos: {
    label: "🥛",        
    cls: "lacteos",
    title: "Lácteos"
  },
  huevo: {
    label: "🥚",        
    cls: "huevo",
    title: "Huevo"
  },
  pescado: {
    label: "🐟",     
    cls: "pescado",
    title: "Pescado"
  },
  marisco: {
    label: "🦀",        
    cls: "marisco",
    title: "Marisco/Crustáceos"
  },
  frutoscascara: {
    label: "🌰",         
    cls: "frutoscascara",
    title: "Frutos de cáscara"
  },
  soja: {
    label: "🌱",         
    cls: "soja",
    title: "Soja"
  }
};

const TEXTOS = {
  es: {
    headerTitle: "COCINA VASCA",
    headerSubtitle: "Selecciona un plato para ver la receta completa",
    buscarPlaceholder: "Buscar receta…",
    filtroTodos: "Todos",
    filtroFrios: "Platos fríos",
    filtroCalientes: "Platos calientes",
    favTitulo: "Favoritos",
    favVacio: "Aún no hay favoritos."
  },
  en: {
    headerTitle: "BASQUE CUISINE",
    headerSubtitle: "Select a dish to view the full recipe",
    buscarPlaceholder: "Search recipe…",
    filtroTodos: "All",
    filtroFrios: "Cold dishes",
    filtroCalientes: "Hot dishes",
    favTitulo: "Favorites",
    favVacio: "No favorites yet."
  }
};

let idiomaActual = "es";


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
// Referencias extra para idioma
const headerTitle = document.querySelector("header h1");
const headerSubtitle = document.querySelector("header p");
const langToggle = document.getElementById("langToggle");
const favTitulo = document.querySelector("#favoritosPanel h3");

// Cambia todos los textos fijos según idiomaActual
function aplicarIdioma() {
  const t = TEXTOS[idiomaActual];

  headerTitle.textContent = t.headerTitle;
  headerSubtitle.textContent = t.headerSubtitle;
  buscador.placeholder = t.buscarPlaceholder;
  btnTodos.textContent = t.filtroTodos;
  btnFrios.textContent = t.filtroFrios;
  btnCalientes.textContent = t.filtroCalientes;
  favTitulo.textContent = t.favTitulo;

  // Texto de "Aún no hay favoritos."
  if (listaFavoritos.children.length === 1 &&
      listaFavoritos.children[0].textContent.includes("favorit")) {
    listaFavoritos.children[0].textContent = t.favVacio;
  }

  langToggle.textContent = idiomaActual === "es" ? "ES / EN" : "EN / ES";
}


const listaFavoritos = document.getElementById("listaFavoritos");

// estado
let filtroTipo = "todos";
let favoritos = JSON.parse(localStorage.getItem("favoritosVascos") || "[]");


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
  // Elegir los textos según el idioma actual ("es" o "en")
  const t = receta.textos[idiomaActual];

  // Abrir modal
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  modalTitle.textContent = receta.nombre; // el nombre no cambia

  // Ingredientes en el idioma actual
  modalIngredientes.innerHTML = t.ingredientes
    .map((i) => `<li>${i}</li>`)
    .join("");

  // Preparación en el idioma actual
  const etiquetaPaso = idiomaActual === "es" ? "Paso" : "Step";
  modalPreparacion.innerHTML = t.preparacion
    .map((paso, index) => `<li>${etiquetaPaso} ${index + 1}: ${paso}</li>`)
    .join("");

  // Tiempo en el idioma actual
  modalTiempo.textContent = t.tiempo_coccion;

  // Imagen
  modalImg.src = receta.imagen;
  modalImg.alt = `Imagen de ${receta.nombre}`;

  // Alérgenos (igual que antes)
  modalAlergenos.innerHTML = (receta.alergenos || [])
    .map((k) => {
      const conf = ALERGENOS_UI[k];
      return conf
        ? `<span class="badge ${conf.cls}" title="${conf.title}">${conf.label}</span>`
        : "";
    })
    .join("");

  // Favorito (igual que antes)
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
aplicarIdioma();

// Click en el botón de idioma
langToggle.addEventListener("click", () => {
  idiomaActual = idiomaActual === "es" ? "en" : "es";
  aplicarIdioma();
});

