import {
  makeChoosePrestation,
  makeIncrementPrestation,
  makeDecrementPrestation
} from "../actions/actions"
import prestations from "./prestations"

describe("prestations", () => {
  it("should not change the state for unhandled action", () => {
    const prevState = [
      {
        id: 1,
        name: "Maquillage",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            titlePreparation:
              "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
            duration: {
              minutes: 20
            },
            price: 550,
            choices: [
              {
                id: 1,
                title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                options: []
              },
              {
                id: 2,
                title: "Focus plus prononcé sur un élément de votre choix",
                options: [
                  "Charbonneux",
                  "Graphique",
                  "Coloré",
                  "Spécial soirée",
                  "Glamour",
                  "Rétro (eyeliner ou bouche)"
                ]
              }
            ]
          },
          {
            id: 2,
            titlePreparation: "Maquillage KAROLS",
            duration: {
              minutes: 30
            },
            price: 701,
            choices: [
              {
                id: 1,
                title:
                  "Maquillage très complet avec un focus plus important sur les yeux",
                options: [
                  "Soirée",
                  "Coloré",
                  "Lumineux",
                  "Charbonneux",
                  "Glamour",
                  "Rétro",
                  "Coréen",
                  "Graphique (liners colorés variés)",
                  "Spécial shooting photo"
                ]
              }
            ]
          },
          {
            id: 3,
            titlePreparation: "Maquillage ultime",
            duration: {
              minutes: 45
            },
            price: 83,
            choices: [
              {
                id: 1,
                title: "Maquillage avec un focus absolu sur tous les éléments",
                options: [
                  "Mariage",
                  "Grands événements (galas, diplomations, jour de l'an)",
                  "Festivals",
                  "Halloween simple",
                  "Spécial shooting photo ou artistique",
                  "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                  "Effet particulier (strobing, holographique etc)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Coiffure",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            titlePreparation: "Coiffure stylisée",
            duration: {
              minutes: 20
            },
            price: 2,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Lissage",
                  "Brushing",
                  "Brushing volume(cheveux courts)",
                  "Coiffure working-girl (entretiens d'embauche etc)",
                  "Ondulations ou 'Wavy Hair' (cheveux courts)",
                  "Tresse plaquée d'un côté de la tête ",
                  "Tresse bohème (classique ou en épi de blé)",
                  "Tresse (classique ou africaine)",
                  "Chignon classique"
                ]
              }
            ]
          },
          {
            id: 2,
            titlePreparation: "Coiffure stylisée élaborée",
            duration: {
              minutes: 30
            },
            price: 65,
            choices: [
              {
                id: 1,
                title: "Coiffure sur mesure",
                options: [
                  "Coiffure à boucles et/ou tresses",
                  "Ondulations ou 'Wavy Hair' (cheveux longs)",
                  "Base tête nette et tresse en épi de blé",
                  "Couronne de tresses sur mesure",
                  "Volume extrême (cheveux longs)",
                  "Coiffures avec un effet bombé",
                  "Tresse africaines doubles",
                  "Tresse(s) oversize ou spéciale(s)",
                  "Chignons élaborés"
                ]
              }
            ]
          },
          {
            id: 3,
            titlePreparation: "Coiffure stylisée très élaborée",
            duration: {
              minutes: 45
            },
            price: 23,
            choices: [
              {
                id: 1,
                title: "Coiffure premium de 45 minutes",
                options: [
                  "Mariage",
                  "Coiffures à boucles très élaborées",
                  "Coiffures à tresses très élaborées",
                  "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                  "Coiffures très stylisées (défilés, etc)",
                  "Chignons très stylisées (accompagnés de nouvelles boucles)",
                  "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                  ""
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Coupe femmes",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            titlePreparation: "Coupe classique",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupes classiques",
                options: [
                  "Des coupes droites",
                  "Des coupes de pointes",
                  "Des dégradés simples"
                ]
              }
            ]
          },
          {
            id: 2,
            titlePreparation: "Coupe très stylisée",
            duration: {
              minutes: 30
            },
            price: 24,
            choices: [
              {
                id: 1,
                title: "Coupes très stylisées",
                options: [
                  "Des coupes très dégradées",
                  "Des coupes spéciales changement de look (exemple: carré plongeant sur cheveux longs)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: "Vernis",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            titlePreparation: "Pose de vernis au choix",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                title: "Vernis",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: "Hommes",
        image: "",
        description: "",
        preparations: [
          {
            id: 1,
            titlePreparation: "Coupe et coiffage",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupe et stylling",
                options: []
              }
            ]
          },
          {
            id: 2,
            titlePreparation: "Barbe",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                title: "Taille de barbe simple",
                options: []
              }
            ]
          }
        ]
      }
    ]
    const anyAction = {
      type: "ANY_ACTION"
    }

    expect(prestations(prevState, anyAction)).toEqual(prevState)
  })
})

describe("prestations", () => {
  it("should return id2 with selected true", () => {
    const prevState = [
      {
        id: 1,
        name: "Maquillage",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            image: "http://localhost:8000/images/preparation1.1.png",
            titlePreparation:
              "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
            duration: {
              minutes: 20
            },
            price: 550,
            choices: [
              {
                id: 1,
                title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                options: []
              },
              {
                id: 2,
                title: "Focus plus prononcé sur un élément de votre choix",
                options: [
                  "Charbonneux",
                  "Graphique",
                  "Coloré",
                  "Spécial soirée",
                  "Glamour",
                  "Rétro (eyeliner ou bouche)"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            image: "http://localhost:8000/images/preparation1.2.png",
            titlePreparation: "Maquillage KAROLS",
            duration: {
              minutes: 30
            },
            price: 701,
            choices: [
              {
                id: 1,
                title:
                  "Maquillage très complet avec un focus plus important sur les yeux",
                options: [
                  "Soirée",
                  "Coloré",
                  "Lumineux",
                  "Charbonneux",
                  "Glamour",
                  "Rétro",
                  "Coréen",
                  "Graphique (liners colorés variés)",
                  "Spécial shooting photo"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            image:
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
            titlePreparation: "Maquillage ultime",
            duration: {
              minutes: 45
            },
            price: 83,
            choices: [
              {
                id: 1,
                title: "Maquillage avec un focus absolu sur tous les éléments",
                options: [
                  "Mariage",
                  "Grands événements (galas, diplomations, jour de l'an)",
                  "Festivals",
                  "Halloween simple",
                  "Spécial shooting photo ou artistique",
                  "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                  "Effet particulier (strobing, holographique etc)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            image: "http://localhost:8000/images/preparation2.1.png",
            titlePreparation: "Coiffure stylisée",
            duration: {
              minutes: 20
            },
            price: 2,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Lissage",
                  "Brushing",
                  "Brushing volume(cheveux courts)",
                  "Coiffure working-girl (entretiens d'embauche etc)",
                  "Ondulations ou 'Wavy Hair' (cheveux courts)",
                  "Tresse plaquée d'un côté de la tête ",
                  "Tresse bohème (classique ou en épi de blé)",
                  "Tresse (classique ou africaine)",
                  "Chignon classique"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            image: "http://localhost:8000/images/preparation2.2.jpg",
            titlePreparation: "Coiffure stylisée élaborée",
            duration: {
              minutes: 30
            },
            price: 65,
            choices: [
              {
                id: 1,
                title: "Coiffure sur mesure",
                options: [
                  "Coiffure à boucles et/ou tresses",
                  "Ondulations ou 'Wavy Hair' (cheveux longs)",
                  "Base tête nette et tresse en épi de blé",
                  "Couronne de tresses sur mesure",
                  "Volume extrême (cheveux longs)",
                  "Coiffures avec un effet bombé",
                  "Tresse africaines doubles",
                  "Tresse(s) oversize ou spéciale(s)",
                  "Chignons élaborés"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            image: "http://localhost:8000/images/preparation2.3.png",
            titlePreparation: "Coiffure stylisée très élaborée",
            duration: {
              minutes: 45
            },
            price: 23,
            choices: [
              {
                id: 1,
                title: "Coiffure premium de 45 minutes",
                options: [
                  "Mariage",
                  "Coiffures à boucles très élaborées",
                  "Coiffures à tresses très élaborées",
                  "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                  "Coiffures très stylisées (défilés, etc)",
                  "Chignons très stylisées (accompagnés de nouvelles boucles)",
                  "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                  ""
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Coupes",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            image: "http://localhost:8000/images/preparation3.1.png",
            titlePreparation: "Coupe classique",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Des coupes droites",
                  "Des coupes de pointes",
                  "Des dégradés simples"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            image: "http://localhost:8000/images/preparation3.2.png",
            titlePreparation: "Coupe très stylisée",
            duration: {
              minutes: 30
            },
            price: 24,
            choices: [
              {
                id: 1,
                title: "",
                options: [
                  "Des coupes très dégradées",
                  "Des coupes spéciales changements de look (ex: carré plongeant sur cheveux longs"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: "Vernis",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            image: "http://localhost:8000/images/preparation7.jpg",
            titlePreparation: "Pose de vernis au choix",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                title: "Vernis",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            image: "http://localhost:8000/images/preparation10.png",
            titlePreparation: "Coupe 1",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupe et stylling",
                options: []
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Coupe 2",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupe et stylling",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 6,
        name: "Barbe",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            image: "http://localhost:8000/images/preparation11.png",
            titlePreparation: "Barbe 1",
            duration: {
              minutes: 20
            },
            price: 16
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Barbe 2",
            duration: {
              minutes: 20
            },
            price: 16
          }
        ]
      }
    ]

    const expectedState = [
      {
        id: 1,
        name: "Maquillage",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            image: "http://localhost:8000/images/preparation1.1.png",
            titlePreparation:
              "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
            duration: {
              minutes: 20
            },
            price: 550,
            choices: [
              {
                id: 1,
                title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                options: []
              },
              {
                id: 2,
                title: "Focus plus prononcé sur un élément de votre choix",
                options: [
                  "Charbonneux",
                  "Graphique",
                  "Coloré",
                  "Spécial soirée",
                  "Glamour",
                  "Rétro (eyeliner ou bouche)"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            image: "http://localhost:8000/images/preparation1.2.png",
            titlePreparation: "Maquillage KAROLS",
            duration: {
              minutes: 30
            },
            price: 701,
            choices: [
              {
                id: 1,
                title:
                  "Maquillage très complet avec un focus plus important sur les yeux",
                options: [
                  "Soirée",
                  "Coloré",
                  "Lumineux",
                  "Charbonneux",
                  "Glamour",
                  "Rétro",
                  "Coréen",
                  "Graphique (liners colorés variés)",
                  "Spécial shooting photo"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            image:
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
            titlePreparation: "Maquillage ultime",
            duration: {
              minutes: 45
            },
            price: 83,
            choices: [
              {
                id: 1,
                title: "Maquillage avec un focus absolu sur tous les éléments",
                options: [
                  "Mariage",
                  "Grands événements (galas, diplomations, jour de l'an)",
                  "Festivals",
                  "Halloween simple",
                  "Spécial shooting photo ou artistique",
                  "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                  "Effet particulier (strobing, holographique etc)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            image: "http://localhost:8000/images/preparation2.1.png",
            titlePreparation: "Coiffure stylisée",
            duration: {
              minutes: 20
            },
            price: 2,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Lissage",
                  "Brushing",
                  "Brushing volume(cheveux courts)",
                  "Coiffure working-girl (entretiens d'embauche etc)",
                  "Ondulations ou 'Wavy Hair' (cheveux courts)",
                  "Tresse plaquée d'un côté de la tête ",
                  "Tresse bohème (classique ou en épi de blé)",
                  "Tresse (classique ou africaine)",
                  "Chignon classique"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            image: "http://localhost:8000/images/preparation2.2.jpg",
            titlePreparation: "Coiffure stylisée élaborée",
            duration: {
              minutes: 30
            },
            price: 65,
            choices: [
              {
                id: 1,
                title: "Coiffure sur mesure",
                options: [
                  "Coiffure à boucles et/ou tresses",
                  "Ondulations ou 'Wavy Hair' (cheveux longs)",
                  "Base tête nette et tresse en épi de blé",
                  "Couronne de tresses sur mesure",
                  "Volume extrême (cheveux longs)",
                  "Coiffures avec un effet bombé",
                  "Tresse africaines doubles",
                  "Tresse(s) oversize ou spéciale(s)",
                  "Chignons élaborés"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            image: "http://localhost:8000/images/preparation2.3.png",
            titlePreparation: "Coiffure stylisée très élaborée",
            duration: {
              minutes: 45
            },
            price: 23,
            choices: [
              {
                id: 1,
                title: "Coiffure premium de 45 minutes",
                options: [
                  "Mariage",
                  "Coiffures à boucles très élaborées",
                  "Coiffures à tresses très élaborées",
                  "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                  "Coiffures très stylisées (défilés, etc)",
                  "Chignons très stylisées (accompagnés de nouvelles boucles)",
                  "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                  ""
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Coupes",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            image: "http://localhost:8000/images/preparation3.1.png",
            titlePreparation: "Coupe classique",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Des coupes droites",
                  "Des coupes de pointes",
                  "Des dégradés simples"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            image: "http://localhost:8000/images/preparation3.2.png",
            titlePreparation: "Coupe très stylisée",
            duration: {
              minutes: 30
            },
            price: 24,
            choices: [
              {
                id: 1,
                title: "",
                options: [
                  "Des coupes très dégradées",
                  "Des coupes spéciales changements de look (ex: carré plongeant sur cheveux longs"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: "Vernis",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            image: "http://localhost:8000/images/preparation7.jpg",
            titlePreparation: "Pose de vernis au choix",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                title: "Vernis",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            image: "http://localhost:8000/images/preparation10.png",
            titlePreparation: "Coupe 1",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupe et stylling",
                options: []
              }
            ]
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Coupe 2",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupe et stylling",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 6,
        name: "Barbe",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            image: "http://localhost:8000/images/preparation11.png",
            titlePreparation: "Barbe 1",
            duration: {
              minutes: 20
            },
            price: 16
          },
          {
            id: 2,
            selected: false,
            titlePreparation: "Barbe 2",
            duration: {
              minutes: 20
            },
            price: 16
          }
        ]
      }
    ]

    const action = makeChoosePrestation(2)

    expect(prestations(prevState, action)).toEqual(expectedState)
  })
})

describe("Increment and Decrement Prestation ", () => {
  it("should change the state for makeIncrementPrestation action", () => {
    const prevState = [
      {
        id: 1,
        name: "Maquillage",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation1.1.png",
            info:
              "https://www.mille-et-une-bieres.fr/les-boutiques/boutique-de-reims/",
            titlePreparation:
              "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
            duration: {
              minutes: 20
            },
            price: 550,
            choices: [
              {
                id: 1,
                title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                options: []
              },
              {
                id: 2,
                title: "Focus plus prononcé sur un élément de votre choix",
                options: [
                  "Charbonneux",
                  "Graphique",
                  "Coloré",
                  "Spécial soirée",
                  "Glamour",
                  "Rétro (eyeliner ou bouche)"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://mille-et-une-bieres-champigny.business.site/",
            info:
              "https://www.1jour1vin.com/fr/vin-champagne?s=GOOGLE-RWD&o=295&p=2&v=wmPr87&gclid=CjwKCAjw68zZBRAnEiwACw0eYRL1riv_mm8L8uRt-zi9RK1rolzk73MRDXJo2mfMnEFP2taCbpUTQRoCMAEQAvD_BwE",
            titlePreparation: "Maquillage KAROLS",
            duration: {
              minutes: 30
            },
            price: 701,
            choices: [
              {
                id: 1,
                title:
                  "Maquillage très complet avec un focus plus important sur les yeux",
                options: [
                  "Soirée",
                  "Coloré",
                  "Lumineux",
                  "Charbonneux",
                  "Glamour",
                  "Rétro",
                  "Coréen",
                  "Graphique (liners colorés variés)",
                  "Spécial shooting photo"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            count: 0,
            image:
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
            titlePreparation: "Maquillage ultime",
            info: "https://your-cbd-store.jimdofree.com/",
            duration: {
              minutes: 45
            },
            price: 83,
            choices: [
              {
                id: 1,
                title: "Maquillage avec un focus absolu sur tous les éléments",
                options: [
                  "Mariage",
                  "Grands événements (galas, diplomations, jour de l'an)",
                  "Festivals",
                  "Halloween simple",
                  "Spécial shooting photo ou artistique",
                  "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                  "Effet particulier (strobing, holographique etc)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.1.png",
            info:
              "https://www.vinatis.com/spiritueux-vodka#p1&n15&t7&f[]73[]190577:f[]27[]11427[]s",
            titlePreparation: "Coiffure stylisée",
            duration: {
              minutes: 20
            },
            price: 2,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Lissage",
                  "Brushing",
                  "Brushing volume(cheveux courts)",
                  "Coiffure working-girl (entretiens d'embauche etc)",
                  "Ondulations ou 'Wavy Hair' (cheveux courts)",
                  "Tresse plaquée d'un côté de la tête ",
                  "Tresse bohème (classique ou en épi de blé)",
                  "Tresse (classique ou africaine)",
                  "Chignon classique"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.2.jpg",
            info:
              "https://www.wildness.fr/lancer-de-haches/?gclid=CjwKCAjw68zZBRAnEiwACw0eYajjlmS25u_as-TS4g-mMReBSk90FEYk2CVuzZpN3DtwNGx0Yy3RbhoCZ8sQAvD_BwE",
            titlePreparation: "Coiffure stylisée élaborée",
            duration: {
              minutes: 30
            },
            price: 65,
            choices: [
              {
                id: 1,
                title: "Coiffure sur mesure",
                options: [
                  "Coiffure à boucles et/ou tresses",
                  "Ondulations ou 'Wavy Hair' (cheveux longs)",
                  "Base tête nette et tresse en épi de blé",
                  "Couronne de tresses sur mesure",
                  "Volume extrême (cheveux longs)",
                  "Coiffures avec un effet bombé",
                  "Tresse africaines doubles",
                  "Tresse(s) oversize ou spéciale(s)",
                  "Chignons élaborés"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.3.png",
            titlePreparation: "Coiffure stylisée très élaborée",
            duration: {
              minutes: 45
            },
            price: 23,
            choices: [
              {
                id: 1,
                title: "Coiffure premium de 45 minutes",
                options: [
                  "Mariage",
                  "Coiffures à boucles très élaborées",
                  "Coiffures à tresses très élaborées",
                  "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                  "Coiffures très stylisées (défilés, etc)",
                  "Chignons très stylisées (accompagnés de nouvelles boucles)",
                  "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                  ""
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Coupes",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation3.1.png",
            titlePreparation: "Coupe classique",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Des coupes droites",
                  "Des coupes de pointes",
                  "Des dégradés simples"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation3.2.png",
            titlePreparation: "Coupe très stylisée",
            duration: {
              minutes: 30
            },
            price: 24,
            choices: [
              {
                id: 1,
                title: "",
                options: [
                  "Des coupes très dégradées",
                  "Des coupes spéciales changements de look (ex: carré plongeant sur cheveux longs"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: "Vernis",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation7.jpg",
            titlePreparation: "Pose de vernis au choix",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                title: "Vernis",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation10.png",
            titlePreparation: "Coupe 1",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupe et stylling",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 6,
        name: "Barbe",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation11.png",
            info: "http://palf.free.fr/portrait/vocabulaire.htm",
            titlePreparation: "Barbe 1",
            duration: {
              minutes: 20
            },
            price: 16
          }
        ]
      }
    ]

    const expectedState = [
      {
        id: 1,
        name: "Maquillage",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation1.1.png",
            info:
              "https://www.mille-et-une-bieres.fr/les-boutiques/boutique-de-reims/",
            titlePreparation:
              "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
            duration: {
              minutes: 20
            },
            price: 550,
            choices: [
              {
                id: 1,
                title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                options: []
              },
              {
                id: 2,
                title: "Focus plus prononcé sur un élément de votre choix",
                options: [
                  "Charbonneux",
                  "Graphique",
                  "Coloré",
                  "Spécial soirée",
                  "Glamour",
                  "Rétro (eyeliner ou bouche)"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://mille-et-une-bieres-champigny.business.site/",
            info:
              "https://www.1jour1vin.com/fr/vin-champagne?s=GOOGLE-RWD&o=295&p=2&v=wmPr87&gclid=CjwKCAjw68zZBRAnEiwACw0eYRL1riv_mm8L8uRt-zi9RK1rolzk73MRDXJo2mfMnEFP2taCbpUTQRoCMAEQAvD_BwE",
            titlePreparation: "Maquillage KAROLS",
            duration: {
              minutes: 30
            },
            price: 701,
            choices: [
              {
                id: 1,
                title:
                  "Maquillage très complet avec un focus plus important sur les yeux",
                options: [
                  "Soirée",
                  "Coloré",
                  "Lumineux",
                  "Charbonneux",
                  "Glamour",
                  "Rétro",
                  "Coréen",
                  "Graphique (liners colorés variés)",
                  "Spécial shooting photo"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            count: 0,
            image:
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
            titlePreparation: "Maquillage ultime",
            info: "https://your-cbd-store.jimdofree.com/",
            duration: {
              minutes: 45
            },
            price: 83,
            choices: [
              {
                id: 1,
                title: "Maquillage avec un focus absolu sur tous les éléments",
                options: [
                  "Mariage",
                  "Grands événements (galas, diplomations, jour de l'an)",
                  "Festivals",
                  "Halloween simple",
                  "Spécial shooting photo ou artistique",
                  "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                  "Effet particulier (strobing, holographique etc)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.1.png",
            info:
              "https://www.vinatis.com/spiritueux-vodka#p1&n15&t7&f[]73[]190577:f[]27[]11427[]s",
            titlePreparation: "Coiffure stylisée",
            duration: {
              minutes: 20
            },
            price: 2,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Lissage",
                  "Brushing",
                  "Brushing volume(cheveux courts)",
                  "Coiffure working-girl (entretiens d'embauche etc)",
                  "Ondulations ou 'Wavy Hair' (cheveux courts)",
                  "Tresse plaquée d'un côté de la tête ",
                  "Tresse bohème (classique ou en épi de blé)",
                  "Tresse (classique ou africaine)",
                  "Chignon classique"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.2.jpg",
            info:
              "https://www.wildness.fr/lancer-de-haches/?gclid=CjwKCAjw68zZBRAnEiwACw0eYajjlmS25u_as-TS4g-mMReBSk90FEYk2CVuzZpN3DtwNGx0Yy3RbhoCZ8sQAvD_BwE",
            titlePreparation: "Coiffure stylisée élaborée",
            duration: {
              minutes: 30
            },
            price: 65,
            choices: [
              {
                id: 1,
                title: "Coiffure sur mesure",
                options: [
                  "Coiffure à boucles et/ou tresses",
                  "Ondulations ou 'Wavy Hair' (cheveux longs)",
                  "Base tête nette et tresse en épi de blé",
                  "Couronne de tresses sur mesure",
                  "Volume extrême (cheveux longs)",
                  "Coiffures avec un effet bombé",
                  "Tresse africaines doubles",
                  "Tresse(s) oversize ou spéciale(s)",
                  "Chignons élaborés"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.3.png",
            titlePreparation: "Coiffure stylisée très élaborée",
            duration: {
              minutes: 45
            },
            price: 23,
            choices: [
              {
                id: 1,
                title: "Coiffure premium de 45 minutes",
                options: [
                  "Mariage",
                  "Coiffures à boucles très élaborées",
                  "Coiffures à tresses très élaborées",
                  "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                  "Coiffures très stylisées (défilés, etc)",
                  "Chignons très stylisées (accompagnés de nouvelles boucles)",
                  "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                  ""
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Coupes",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation3.1.png",
            titlePreparation: "Coupe classique",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Des coupes droites",
                  "Des coupes de pointes",
                  "Des dégradés simples"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation3.2.png",
            titlePreparation: "Coupe très stylisée",
            duration: {
              minutes: 30
            },
            price: 24,
            choices: [
              {
                id: 1,
                title: "",
                options: [
                  "Des coupes très dégradées",
                  "Des coupes spéciales changements de look (ex: carré plongeant sur cheveux longs"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: "Vernis",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation7.jpg",
            titlePreparation: "Pose de vernis au choix",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                title: "Vernis",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation10.png",
            titlePreparation: "Coupe 1",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupe et stylling",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 6,
        name: "Barbe",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 1,
            image: "http://localhost:8000/images/preparation11.png",
            info: "http://palf.free.fr/portrait/vocabulaire.htm",
            titlePreparation: "Barbe 1",
            duration: {
              minutes: 20
            },
            price: 16
          }
        ]
      }
    ]

    const action = makeIncrementPrestation(6, 1)

    expect(prestations(prevState, action)).toEqual(expectedState)
  })

  it("should change the state for makeDecrementPrestation action", () => {
    const prevState = [
      {
        id: 1,
        name: "Maquillage",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation1.1.png",
            info:
              "https://www.mille-et-une-bieres.fr/les-boutiques/boutique-de-reims/",
            titlePreparation:
              "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
            duration: {
              minutes: 20
            },
            price: 550,
            choices: [
              {
                id: 1,
                title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                options: []
              },
              {
                id: 2,
                title: "Focus plus prononcé sur un élément de votre choix",
                options: [
                  "Charbonneux",
                  "Graphique",
                  "Coloré",
                  "Spécial soirée",
                  "Glamour",
                  "Rétro (eyeliner ou bouche)"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://mille-et-une-bieres-champigny.business.site/",
            info:
              "https://www.1jour1vin.com/fr/vin-champagne?s=GOOGLE-RWD&o=295&p=2&v=wmPr87&gclid=CjwKCAjw68zZBRAnEiwACw0eYRL1riv_mm8L8uRt-zi9RK1rolzk73MRDXJo2mfMnEFP2taCbpUTQRoCMAEQAvD_BwE",
            titlePreparation: "Maquillage KAROLS",
            duration: {
              minutes: 30
            },
            price: 701,
            choices: [
              {
                id: 1,
                title:
                  "Maquillage très complet avec un focus plus important sur les yeux",
                options: [
                  "Soirée",
                  "Coloré",
                  "Lumineux",
                  "Charbonneux",
                  "Glamour",
                  "Rétro",
                  "Coréen",
                  "Graphique (liners colorés variés)",
                  "Spécial shooting photo"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            count: 0,
            image:
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
            titlePreparation: "Maquillage ultime",
            info: "https://your-cbd-store.jimdofree.com/",
            duration: {
              minutes: 45
            },
            price: 83,
            choices: [
              {
                id: 1,
                title: "Maquillage avec un focus absolu sur tous les éléments",
                options: [
                  "Mariage",
                  "Grands événements (galas, diplomations, jour de l'an)",
                  "Festivals",
                  "Halloween simple",
                  "Spécial shooting photo ou artistique",
                  "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                  "Effet particulier (strobing, holographique etc)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.1.png",
            info:
              "https://www.vinatis.com/spiritueux-vodka#p1&n15&t7&f[]73[]190577:f[]27[]11427[]s",
            titlePreparation: "Coiffure stylisée",
            duration: {
              minutes: 20
            },
            price: 2,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Lissage",
                  "Brushing",
                  "Brushing volume(cheveux courts)",
                  "Coiffure working-girl (entretiens d'embauche etc)",
                  "Ondulations ou 'Wavy Hair' (cheveux courts)",
                  "Tresse plaquée d'un côté de la tête ",
                  "Tresse bohème (classique ou en épi de blé)",
                  "Tresse (classique ou africaine)",
                  "Chignon classique"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 1,
            image: "http://localhost:8000/images/preparation2.2.jpg",
            info:
              "https://www.wildness.fr/lancer-de-haches/?gclid=CjwKCAjw68zZBRAnEiwACw0eYajjlmS25u_as-TS4g-mMReBSk90FEYk2CVuzZpN3DtwNGx0Yy3RbhoCZ8sQAvD_BwE",
            titlePreparation: "Coiffure stylisée élaborée",
            duration: {
              minutes: 30
            },
            price: 65,
            choices: [
              {
                id: 1,
                title: "Coiffure sur mesure",
                options: [
                  "Coiffure à boucles et/ou tresses",
                  "Ondulations ou 'Wavy Hair' (cheveux longs)",
                  "Base tête nette et tresse en épi de blé",
                  "Couronne de tresses sur mesure",
                  "Volume extrême (cheveux longs)",
                  "Coiffures avec un effet bombé",
                  "Tresse africaines doubles",
                  "Tresse(s) oversize ou spéciale(s)",
                  "Chignons élaborés"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.3.png",
            titlePreparation: "Coiffure stylisée très élaborée",
            duration: {
              minutes: 45
            },
            price: 23,
            choices: [
              {
                id: 1,
                title: "Coiffure premium de 45 minutes",
                options: [
                  "Mariage",
                  "Coiffures à boucles très élaborées",
                  "Coiffures à tresses très élaborées",
                  "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                  "Coiffures très stylisées (défilés, etc)",
                  "Chignons très stylisées (accompagnés de nouvelles boucles)",
                  "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                  ""
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Coupes",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation3.1.png",
            titlePreparation: "Coupe classique",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Des coupes droites",
                  "Des coupes de pointes",
                  "Des dégradés simples"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation3.2.png",
            titlePreparation: "Coupe très stylisée",
            duration: {
              minutes: 30
            },
            price: 24,
            choices: [
              {
                id: 1,
                title: "",
                options: [
                  "Des coupes très dégradées",
                  "Des coupes spéciales changements de look (ex: carré plongeant sur cheveux longs"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: "Vernis",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation7.jpg",
            titlePreparation: "Pose de vernis au choix",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                title: "Vernis",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation10.png",
            titlePreparation: "Coupe 1",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupe et stylling",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 6,
        name: "Barbe",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation11.png",
            info: "http://palf.free.fr/portrait/vocabulaire.htm",
            titlePreparation: "Barbe 1",
            duration: {
              minutes: 20
            },
            price: 16
          }
        ]
      }
    ]

    const expectedState = [
      {
        id: 1,
        name: "Maquillage",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation1.1.png",
            info:
              "https://www.mille-et-une-bieres.fr/les-boutiques/boutique-de-reims/",
            titlePreparation:
              "Maquillage' focus sur un élément' ou 'effet bonne mine' (au choix)",
            duration: {
              minutes: 20
            },
            price: 550,
            choices: [
              {
                id: 1,
                title: "Uniforme et 'Effet bonne mine', sur tout le visage",
                options: []
              },
              {
                id: 2,
                title: "Focus plus prononcé sur un élément de votre choix",
                options: [
                  "Charbonneux",
                  "Graphique",
                  "Coloré",
                  "Spécial soirée",
                  "Glamour",
                  "Rétro (eyeliner ou bouche)"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://mille-et-une-bieres-champigny.business.site/",
            info:
              "https://www.1jour1vin.com/fr/vin-champagne?s=GOOGLE-RWD&o=295&p=2&v=wmPr87&gclid=CjwKCAjw68zZBRAnEiwACw0eYRL1riv_mm8L8uRt-zi9RK1rolzk73MRDXJo2mfMnEFP2taCbpUTQRoCMAEQAvD_BwE",
            titlePreparation: "Maquillage KAROLS",
            duration: {
              minutes: 30
            },
            price: 701,
            choices: [
              {
                id: 1,
                title:
                  "Maquillage très complet avec un focus plus important sur les yeux",
                options: [
                  "Soirée",
                  "Coloré",
                  "Lumineux",
                  "Charbonneux",
                  "Glamour",
                  "Rétro",
                  "Coréen",
                  "Graphique (liners colorés variés)",
                  "Spécial shooting photo"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            count: 0,
            image:
              "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5aa1d44d3153feb30a3ac5dbf9bbccd3&auto=format&fit=crop&w=1051&q=80",
            titlePreparation: "Maquillage ultime",
            info: "https://your-cbd-store.jimdofree.com/",
            duration: {
              minutes: 45
            },
            price: 83,
            choices: [
              {
                id: 1,
                title: "Maquillage avec un focus absolu sur tous les éléments",
                options: [
                  "Mariage",
                  "Grands événements (galas, diplomations, jour de l'an)",
                  "Festivals",
                  "Halloween simple",
                  "Spécial shooting photo ou artistique",
                  "Instagram (pour sculpter au mieux les contours de ton beau visage)",
                  "Effet particulier (strobing, holographique etc)"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.1.png",
            info:
              "https://www.vinatis.com/spiritueux-vodka#p1&n15&t7&f[]73[]190577:f[]27[]11427[]s",
            titlePreparation: "Coiffure stylisée",
            duration: {
              minutes: 20
            },
            price: 2,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Lissage",
                  "Brushing",
                  "Brushing volume(cheveux courts)",
                  "Coiffure working-girl (entretiens d'embauche etc)",
                  "Ondulations ou 'Wavy Hair' (cheveux courts)",
                  "Tresse plaquée d'un côté de la tête ",
                  "Tresse bohème (classique ou en épi de blé)",
                  "Tresse (classique ou africaine)",
                  "Chignon classique"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.2.jpg",
            info:
              "https://www.wildness.fr/lancer-de-haches/?gclid=CjwKCAjw68zZBRAnEiwACw0eYajjlmS25u_as-TS4g-mMReBSk90FEYk2CVuzZpN3DtwNGx0Yy3RbhoCZ8sQAvD_BwE",
            titlePreparation: "Coiffure stylisée élaborée",
            duration: {
              minutes: 30
            },
            price: 65,
            choices: [
              {
                id: 1,
                title: "Coiffure sur mesure",
                options: [
                  "Coiffure à boucles et/ou tresses",
                  "Ondulations ou 'Wavy Hair' (cheveux longs)",
                  "Base tête nette et tresse en épi de blé",
                  "Couronne de tresses sur mesure",
                  "Volume extrême (cheveux longs)",
                  "Coiffures avec un effet bombé",
                  "Tresse africaines doubles",
                  "Tresse(s) oversize ou spéciale(s)",
                  "Chignons élaborés"
                ]
              }
            ]
          },
          {
            id: 3,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation2.3.png",
            titlePreparation: "Coiffure stylisée très élaborée",
            duration: {
              minutes: 45
            },
            price: 23,
            choices: [
              {
                id: 1,
                title: "Coiffure premium de 45 minutes",
                options: [
                  "Mariage",
                  "Coiffures à boucles très élaborées",
                  "Coiffures à tresses très élaborées",
                  "Grands événements (galas, festivals, diplomations, jour de l'an, etc).",
                  "Coiffures très stylisées (défilés, etc)",
                  "Chignons très stylisées (accompagnés de nouvelles boucles)",
                  "Demandes spéciales (shootings photos, tournages, théâtre, etc)",
                  ""
                ]
              }
            ]
          }
        ]
      },
      {
        id: 3,
        name: "Coupes",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation3.1.png",
            titlePreparation: "Coupe classique",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coiffure personnalisable",
                options: [
                  "Des coupes droites",
                  "Des coupes de pointes",
                  "Des dégradés simples"
                ]
              }
            ]
          },
          {
            id: 2,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation3.2.png",
            titlePreparation: "Coupe très stylisée",
            duration: {
              minutes: 30
            },
            price: 24,
            choices: [
              {
                id: 1,
                title: "",
                options: [
                  "Des coupes très dégradées",
                  "Des coupes spéciales changements de look (ex: carré plongeant sur cheveux longs"
                ]
              }
            ]
          }
        ]
      },
      {
        id: 4,
        name: "Vernis",
        image: "",
        description: "",
        gender: "F",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation7.jpg",
            titlePreparation: "Pose de vernis au choix",
            duration: {
              minutes: 10
            },
            price: 7.5,
            choices: [
              {
                id: 1,
                title: "Vernis",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: "Coiffure",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation10.png",
            titlePreparation: "Coupe 1",
            duration: {
              minutes: 20
            },
            price: 16,
            choices: [
              {
                id: 1,
                title: "Coupe et stylling",
                options: []
              }
            ]
          }
        ]
      },
      {
        id: 6,
        name: "Barbe",
        image: "",
        description: "",
        gender: "M",
        preparations: [
          {
            id: 1,
            selected: false,
            count: 0,
            image: "http://localhost:8000/images/preparation11.png",
            info: "http://palf.free.fr/portrait/vocabulaire.htm",
            titlePreparation: "Barbe 1",
            duration: {
              minutes: 20
            },
            price: 16
          }
        ]
      }
    ]

    const action = makeDecrementPrestation(2, 2)

    expect(prestations(prevState, action)).toEqual(expectedState)
  })
})
