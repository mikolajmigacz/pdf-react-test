export const checklistInputData = {
  data: {
    columns: [
      {
        label: "ELEMENT KONTROLI",
        name: "col1",
        translated_label: {},
        width: "100%",
      },
    ],
    signature: { type: "" },
    tasks: [
      {
        id: 1,
        name: "Zakres czynności utrzymania stanu operacyjnego",
        subtasks: [
          {
            content: { col1: "1. Czy działa zabezpieczenie LOTO?" },
            files: [],
            id: 1,
            name: "Subtask 1",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
          {
            content: { col1: "2. Czy pomiary elektryczne są aktualne?" },
            files: [],
            id: 2,
            name: "Subtask 2",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
          {
            content: {
              col1: "3. Czy został wykonany backup maszyny/urządzenia?",
            },
            files: [],
            id: 3,
            name: "Subtask 3",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
                { label: "Nie dotyczy", value: "n/a" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
          {
            content: {
              col1: "4. Czy jest wykonywana Obsługa Autonomiczna? (sprawdzić wypełnianie przez operatora Arkusza Oceny Stanu Maszyny)",
            },
            files: [],
            id: 4,
            name: "Subtask 4",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
                { label: "Nie dotyczy", value: "n/a" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
        ],
        translated_name: {},
      },
    ],
    title: "Czynności wstępne dla przeglądów prewencyjnych",
    translated_title: {},
  },
};

export const checklistFullInputData = {
  data: {
    columns: [
      {
        label: "ELEMENT KONTROLI",
        name: "col1",
        translated_label: {},
        width: "100%",
      },
    ],
    signature: { type: "" },
    tasks: [
      {
        id: 1,
        name: "Zakres czynności utrzymania stanu operacyjnego",
        subtasks: [
          {
            content: { col1: "1. Czy działa zabezpieczenie LOTO?" },
            files: [],
            id: 1,
            name: "Subtask 1",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
          {
            content: { col1: "2. Czy pomiary elektryczne są aktualne?" },
            files: [],
            id: 2,
            name: "Subtask 2",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
          {
            content: {
              col1: "3. Czy został wykonany backup maszyny/urządzenia?",
            },
            files: [],
            id: 3,
            name: "Subtask 3",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
                { label: "Nie dotyczy", value: "n/a" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
          {
            content: {
              col1: "4. Czy jest wykonywana Obsługa Autonomiczna? (sprawdzić wypełnianie przez operatora Arkusza Oceny Stanu Maszyny)",
            },
            files: [],
            id: 4,
            name: "Subtask 4",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
                { label: "Nie dotyczy", value: "n/a" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
        ],
        translated_name: {},
      },
      {
        id: 2,
        name: "Zakres czynności przeglądowych układu bezpieczeństwa",
        subtasks: [
          {
            content: { col1: "5. Sprawdzenie wyłączników awaryjnych" },
            files: [],
            id: 1,
            name: "Subtask 1",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
                { label: "Nie dotyczy", value: "n/a" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
          {
            content: {
              col1: "6. Sprawdzenie zamków bezpieczeństwa drzwi komory obróbczej, magazynu narzędziowego i innych",
            },
            files: [],
            id: 2,
            name: "Subtask 2",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
                { label: "Nie dotyczy", value: "n/a" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
          {
            content: { col1: "7. Sprawdzenie osłon" },
            files: [],
            id: 3,
            name: "Subtask 3",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
                { label: "Nie dotyczy", value: "n/a" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
          {
            content: { col1: "8. Sprawdzenie kurtyn świetlnych" },
            files: [],
            id: 4,
            name: "Subtask 4",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
                { label: "Nie dotyczy", value: "n/a" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
          {
            content: { col1: "9. Inne" },
            files: [],
            id: 5,
            name: "Subtask 5",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required", pass: "optional" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
                { label: "Nie dotyczy", value: "n/a" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
          {
            content: {
              col1: "10. Obroty na wrzecienniku detalu max. 3obr/min (dotyczy maszyn Studer)",
            },
            files: [],
            id: 6,
            name: "Subtask 6",
            optional_checkbox: {
              label: "Wygeneruj potrzebę",
              show_when_selected_value_in: ["fail"],
              translated_label: {},
            },
            result: {
              comment: { trigger: { fail: "required" } },
              options: [
                { label: "Tak", value: "pass" },
                { label: "Nie", value: "fail" },
                { label: "Nie dotyczy", value: "n/a" },
              ],
              translated_options: [],
              type: "buttons",
            },
            translated_content: {},
            translated_name: {},
          },
        ],
        translated_name: {},
      },
    ],
    title: "Czynności wstępne dla przeglądów prewencyjnych",
    translated_title: {},
  },
};
