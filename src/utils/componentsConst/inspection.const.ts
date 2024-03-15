export const InspectionInputData = {
  parameters: [
    {
      id: "Karta palety",
      isCommentRequired: true,
      measureIntervalSec: 3600,
      name: "Karta palety",
      numberOfSamples: 1,
      sequence: 1,
      validator: {
        properties: {
          options: [
            {
              label: "Karta palety obecna. Zgodny i czytelny nadruk",
              value: "A",
            },
            {
              label: "Brak karty palety. Niezgodny lub nieczytelny nadruk",
              value: "C",
            },
          ],
        },
        type: "MAP",
      },
      valueType: "ENUM",
    },
    {
      id: "Ładunek na palecie po owinięciu",
      isCommentRequired: true,
      measureIntervalSec: 3600,
      name: "Ładunek na palecie po owinięciu",
      numberOfSamples: 1,
      sequence: 2,
      validator: {
        properties: {
          options: [
            {
              label:
                "warstwy i przekładki względem siebie ułożone prawidłowo,brak uszkodzeń folii",
              value: "A",
            },
            {
              label:
                "warstwy względem siebie ułożone prawidłowo, wystające przekładki nie powodujące przedziurawień na folii stretch",
              value: "B",
            },
            {
              label:
                "warstwy i przekładki poprzesuwane względem siebie, folia z widocznymi uszkodzeniami i przedziurawieniami",
              value: "C",
            },
          ],
        },
        type: "MAP",
      },
      valueType: "ENUM",
    },
    {
      id: "Ładunek na palecie przed owinięciem",
      isCommentRequired: true,
      measureIntervalSec: 3600,
      name: "Ładunek na palecie przed owinięciem",
      numberOfSamples: 1,
      sequence: 3,
      validator: {
        properties: {
          options: [
            {
              label:
                "zgrzewki ułożone prosto i stabilnie, warstwy względem siebie ułożone prawidłowo, przekładka ułożona równo,",
              value: "A",
            },
            {
              label:
                "zgrzewki lekko przekręcone, ale ułożone stabilnie, warstwy wykazują niewielkie odchylenia względem siebie, lekko wystająca/przekrzywiona przekładka niewpływająca na stabilność palety",
              value: "B",
            },
            {
              label:
                "zgrzewki spadają z palety,warstwy mocno odchylone względem siebie, wysstająca/przekrzywiona przekładka wpływająca na stabilność palety",
              value: "C",
            },
          ],
        },
        type: "MAP",
      },
      valueType: "ENUM",
    },
    {
      id: "Schemat owijania",
      isCommentRequired: true,
      measureIntervalSec: 3600,
      name: "Schemat owijania",
      numberOfSamples: 1,
      sequence: 4,
      validator: {
        properties: {
          options: [
            {
              label:
                "ilość owinięć folii stretch i rozkład zgodny z przyjętym standardem dla danego formatu",
              value: "A",
            },
            {
              label:
                "ilość owinięć folii stretch i rozkład niezgodny z przyjętym standardem dla danego formatu",
              value: "C",
            },
          ],
        },
        type: "MAP",
      },
      valueType: "ENUM",
    },
    {
      id: "Schemat paletyzacji",
      isCommentRequired: true,
      measureIntervalSec: 3600,
      name: "Schemat paletyzacji",
      numberOfSamples: 1,
      sequence: 5,
      validator: {
        properties: {
          options: [
            {
              label:
                "Paletyza zgodna z przyjętym standardem dla danego formatu(odpowiednia ilość warstw, odpowiednia ilość zgrzewk na warstwie, odpowiednie ułożenie zgrzewk na warstwie",
              value: "A",
            },
            {
              label:
                "paletyzacja niezgodna z przyjętym standardem dla danego formatu (nieodpowiednia ilość warstw lub nieodpowiednia ilość zgrzewek na warstwie lub nieodpowiednie ułożenie zgrzewek na warstwie)",
              value: "C",
            },
          ],
        },
        type: "MAP",
      },
      valueType: "ENUM",
    },
    {
      id: "Waga folii stretch (odczyt z owijarki)",
      isCommentRequired: true,
      measureIntervalSec: 3600,
      name: "Waga folii stretch (odczyt z owijarki)",
      numberOfSamples: 1,
      sequence: 6,
      validator: {
        properties: {
          ranges: [
            { from: 280, lb: true, rb: true, result: "A", to: 290 },
            { from: 278, lb: true, rb: false, result: "B", to: 280 },
            { from: 290, lb: false, rb: true, result: "B", to: 296 },
            { from: "-Infinity", lb: false, rb: false, result: "C", to: 278 },
            { from: 296, lb: false, rb: false, result: "C", to: "Infinity" },
          ],
        },
        type: "RANGE",
      },
      valueType: "NUMBER",
    },
  ],
  title: "Kontrola jakości ABC - Paleta",
};
