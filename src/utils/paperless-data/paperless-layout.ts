export const paperlesslayout2 = {
  data: [
    {
      id: "h_4iGkptFKov5bC4ew2H2",
      meta: {
        label: "",
        hidden: false,
        textSize: "h1",
        isRequired: false,
        isRepeatable: false,
      },
      index: 0,
      resources: [
        {
          id: "nl9uc9nuWn0aZ_8J7QuYt",
          type: "normal",
          index: 0,
          resources: [
            {
              id: "g1RhAgU2rS0rQ_A1F2FmA",
              index: 0,
              resources: [
                {
                  id: "camera",
                  meta: {
                    label: "Camera",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "Camera",
                    cameraConfig: {
                      camera: true,
                      fileStorage: true,
                      showComment: true,
                      localStorage: true,
                      fileStorageGallerySize: 10,
                    },
                  },
                  type: "Camera",
                  index: 0,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "kkfszlCOlzgyV4buHBNhl",
      meta: {
        label: "",
        hidden: false,
        textSize: "h1",
        isRequired: false,
        isRepeatable: false,
      },
      index: 1,
      resources: [
        {
          id: "QU1el1GG0Axt8RaU6vZEe",
          type: "split-left",
          index: 0,
          resources: [
            {
              id: "eIpmSpgAuG1EhqynhLwrx",
              index: 0,
              resources: [
                {
                  id: "lfnY21tPpH27z7thu5OIy",
                  meta: {
                    label: "Input",
                    default: { type: "STATIC", value: "444" },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "Input",
                  },
                  type: "Input",
                  index: 0,
                },
                {
                  id: "qnTMdM0gWPIS0qyTDnJTc",
                  meta: {
                    label: "InputNumber",
                    default: { value: 12314 },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    valueType: "INTEGER",
                    controlType: "InputNumber",
                  },
                  type: "InputNumber",
                  index: 1,
                },
                {
                  id: "ZiUMSPuT7JAS3OuO3RFxP",
                  meta: {
                    label: "Checkbox",
                    default: { value: "check1" },
                    options: {
                      values: [
                        { label: "", value: "check1" },
                        { label: "", value: "check2" },
                        { label: "", value: "check4" },
                      ],
                    },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "Checkbox",
                  },
                  type: "Checkbox",
                  index: 2,
                },
                {
                  id: "WhoppUDHqDPhXPtgg4eVf",
                  meta: {
                    label: "TextArea",
                    range: {},
                    default: {
                      type: "STATIC",
                      value: "textarea default value no dis",
                    },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "TextArea",
                  },
                  type: "TextArea",
                  index: 3,
                },
                {
                  id: "Z42cI0GAJug6UFRu8PUwN",
                  meta: {
                    label: "Select",
                    default: { value: null },
                    options: {
                      values: [
                        { label: "", value: "select1" },
                        { label: "", value: "select2" },
                        { label: "", value: "select4" },
                        { label: "", value: "select5" },
                      ],
                    },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "Select",
                    placeholder: "selecting placeholder",
                  },
                  type: "Select",
                  index: 4,
                },
                {
                  id: "p2mfDVFEarpRHHoKNtLIV",
                  meta: {
                    label: "TimePicker",
                    default: { type: "STATIC", value: null },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "TimePicker",
                  },
                  type: "TimePicker",
                  index: 5,
                },
                {
                  id: "ocuKaFSgCSCAIJp0DiycR",
                  meta: {
                    label: "DatePicker",
                    default: { type: "STATIC", value: null },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "DatePicker",
                  },
                  type: "DatePicker",
                  index: 6,
                },
                {
                  id: "vRkghW3kBeOfSe2Ak3brU",
                  meta: {
                    label: "Radio",
                    default: { value: null },
                    options: {
                      values: [
                        { label: "", value: "value1" },
                        { label: "label1", value: "value2" },
                        { label: "", value: "valu3" },
                      ],
                      withLabels: false,
                    },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "Radio",
                  },
                  type: "Radio",
                  index: 7,
                },
                {
                  id: "TLY5zuy27ceEBKcAu7W5S",
                  meta: {
                    label: "ChoiceSelector",
                    options: {
                      values: [
                        { label: "yes", value: "yes" },
                        { label: "no", value: "no" },
                        { label: "not applicable", value: "notApplicable" },
                      ],
                      withLabels: true,
                    },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    textHidden: false,
                    controlType: "ChoiceSelector",
                    textAlignRight: false,
                    thirdOptionEnabled: true,
                  },
                  type: "ChoiceSelector",
                  index: 8,
                },
                {
                  id: "fgZilKy17y13Jk4WJcdbT",
                  meta: {
                    label: "Label",
                    default: { type: "STATIC", value: "VALUE LABEL" },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    textSize: "h1",
                    controlType: "Label",
                  },
                  type: "Label",
                  index: 9,
                },
                {
                  id: "gvGOLt_jaaEBIdguWSn3i",
                  meta: {
                    label: "Title",
                    default: { type: "STATIC", value: "DEFAULT VALUE" },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    textSize: "h1",
                    controlType: "Title",
                  },
                  type: "Title",
                  index: 10,
                },
                {
                  id: "xVBlWKDsMsOgKY6_f3LtO",
                  meta: {
                    label: "Markdown",
                    default: {
                      type: "STATIC",
                      value: {
                        en: "# Hello!\n\n## How are you?\n\n### I Hope fine\n\n# BEST REGARDS",
                        pl: "",
                      },
                    },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "Markdown",
                  },
                  type: "Markdown",
                  index: 11,
                },
                {
                  id: "dyMwEw3y7tr_aZ2IDf5Mw",
                  meta: {
                    label: "Asset picker",
                    title: "AssetPicker",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "AssetPicker",
                    assetProperties: ["one ", "two", "three", "four"],
                  },
                  type: "AssetPicker",
                  index: 12,
                },
              ],
            },
            {
              id: "lkSHfNNoFcWLjnG89oA0J",
              index: 1,
              resources: [
                {
                  id: "checklist",
                  meta: {
                    label: "Checklist",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "Checklist",
                  },
                  type: "Checklist",
                  index: 0,
                },
                {
                  id: "spare_parts",
                  meta: {
                    label: "SpareParts",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    editRoles: "Admin",
                    controlType: "SpareParts",
                    currencyISOCode: "PLN",
                  },
                  type: "SpareParts",
                  index: 1,
                },
                {
                  id: "WnvZ7Y8qmlStSliBZr1ny",
                  meta: {
                    label: "GroupButton",
                    default: { value: null },
                    options: {
                      values: [
                        { label: "", value: "group1" },
                        { label: "", value: "group2" },
                        { label: "", value: "group4" },
                        { label: "", value: "group15" },
                      ],
                    },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "GroupButton",
                  },
                  type: "GroupButton",
                  index: 2,
                },
                {
                  id: "Tzy97iF2HMCJak4wOjoXI",
                  meta: {
                    label: "Photo",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "Photo",
                  },
                  type: "Photo",
                  index: 3,
                },
                {
                  id: "Hk5UzvdXP0PJW7TyV5lFf",
                  meta: {
                    rows: {
                      canAddRows: false,
                      rowsNumber: 4,
                      showRowNumber: false,
                      showCellNumbers: false,
                      highlightRowOnAutofill: false,
                    },
                    label: "Table",
                    columns: [
                      {
                        id: "68e12420-8854-4a26-b9bc-bf86f32a7209",
                        name: "name",
                        label: "Name",
                        cellType: "textInput",
                      },
                      {
                        id: "b9814067-4d4e-4d9d-8d89-80d43ba39c38",
                        name: "status",
                        label: "Status",
                        cellType: "textInput",
                      },
                    ],
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    tableMode: "singleTypeText",
                    showHeader: true,
                    controlType: "Table",
                  },
                  type: "Table",
                  index: 4,
                },
                {
                  id: "xed1h3k40tFpS6yxPWGGV",
                  meta: {
                    max: 300,
                    min: 15,
                    unit: "pt",
                    label: "LinearGauge",
                    ranges: [
                      [0, 100, "success", null, null],
                      [100, 200, "warning", null, null],
                      [200, 300, "error", false, false],
                    ],
                    target: 250,
                    default: { type: "STATIC", value: 74 },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    showMinMax: true,
                    controlType: "LinearGauge",
                    showThresholds: true,
                  },
                  type: "LinearGauge",
                  index: 5,
                },
                {
                  id: "eI04TycqsEd9F4WZnpezk",
                  meta: {
                    label: "Image",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "Image",
                  },
                  type: "Image",
                  index: 6,
                },
                {
                  id: "knqK0y__yX2RRRpriFsJ4",
                  meta: {
                    label: "Attachments",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "Attachments",
                  },
                  type: "Attachments",
                  index: 7,
                },
                {
                  id: "inspection",
                  meta: {
                    title: "Inspection",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "Inspection",
                  },
                  type: "Inspection",
                  index: 8,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "YHnJtBtbsXE1n9fFHJxe8",
      meta: {
        color: "",
        label: "",
        hidden: false,
        textSize: "h1",
        isRequired: false,
        isRepeatable: false,
      },
      index: 2,
      resources: [
        {
          id: "blqv0GoDKHX1ZKYj4u5eM",
          type: "three-columns-center",
          index: 0,
          resources: [
            {
              id: "UtmNPLP1QEXWbQdM3JloO",
              index: 0,
              resources: [
                {
                  id: "F77fAoh0OVvvNkHIxfEaE",
                  meta: {
                    label: "Employee Picker",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "EmployeePicker",
                    showCompanyPicker: true,
                  },
                  type: "EmployeePicker",
                  index: 0,
                },
                {
                  id: "DvrhKG_QWsSiFfRRJvdfQ",
                  meta: {
                    label: "Activity Picker",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "ActivityPicker",
                  },
                  type: "ActivityPicker",
                  index: 1,
                },
              ],
            },
            {
              id: "JOFJJk51VjW5sLTYO6Mop",
              index: 1,
              resources: [
                {
                  id: "fxlNHl1EIsUVbX1MwcxiY",
                  meta: {
                    label: "Cost control",
                    default: {
                      type: "STATIC",
                      value: {
                        employeesCost: { value: 3450 },
                        estimatedCost: { value: 30000 },
                        additionalCost: {
                          value: 220.9,
                          comment: "Additional cost comment",
                        },
                        sparePartsCost: { value: 23930 },
                      },
                    },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    readOnly: false,
                    costConfig: [
                      {
                        color: "#C3C5D9",
                        label: "Estimated cost",
                        costId: "estimatedCost",
                        readOnly: false,
                        commentable: false,
                        translationKey: "estimatedCost",
                        isEstimatedCost: true,
                      },
                      {
                        color: "#661C99",
                        label: "Spare parts cost",
                        costId: "sparePartsCost",
                        readOnly: true,
                        commentable: false,
                        translationKey: "sparePartsCost",
                      },
                      {
                        color: "#00BFE9",
                        label: "Employees cost",
                        costId: "employeesCost",
                        readOnly: true,
                        commentable: false,
                        translationKey: "employeesCost",
                      },
                      {
                        color: "#F5197E",
                        label: "Additional cost",
                        costId: "additionalCost",
                        readOnly: false,
                        commentable: true,
                        translationKey: "additionalCost",
                      },
                    ],
                    controlType: "CostControl",
                    currencyISOCode: "EUR",
                    commentLengthLimit: 1000,
                  },
                  type: "CostControl",
                  index: 0,
                },
                {
                  id: "K7VkW7Sa4DjXOK8dLQrt0",
                  meta: {
                    label: "Periodicity",
                    default: {
                      type: "STATIC",
                      value: {
                        endDate: "",
                        weekdays: {
                          FRIDAY: false,
                          MONDAY: false,
                          SUNDAY: false,
                          TUESDAY: false,
                          SATURDAY: false,
                          THURSDAY: false,
                          WEDNESDAY: false,
                        },
                        startDate: "",
                        startLater: 0,
                        repeatEvery: 1,
                        startBefore: 0,
                        sendReminder: false,
                        generateBefore: 1,
                        startLaterUnit: "MINUTES",
                        maxStartTimeSec: 0,
                        minStartTimeSec: 0,
                        repeatEveryUnit: "HOURS",
                        startBeforeUnit: "MINUTES",
                        additionalOptions: false,
                        generateBeforeUnit: "MINUTES",
                        sendReminderBefore: 0,
                        generationHorizonSec: 0,
                        sendReminderBeforeUnit: "MINUTES",
                        reminderNotificationSec: 0,
                      },
                    },
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    readOnly: false,
                    controlType: "Periodicity",
                  },
                  type: "Periodicity",
                  index: 1,
                },
                {
                  id: "rio0M0PJcRwvZ3HPKypCK",
                  meta: {
                    label: "Status history",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "StatusHistory",
                  },
                  type: "StatusHistory",
                  index: 2,
                },
                {
                  id: "k8WLg96z6yeYv2QDD7deK",
                  meta: {
                    label: "",
                    actions: [
                      {
                        id: "wgB1l8TPSotLswLjmGIHH",
                        label: "acion1",
                        value: "acion1",
                      },
                      {
                        id: "h0lCWvCibh4Ho35pn8emm",
                        label: "act2",
                        value: "act2",
                      },
                      {
                        id: "WGXRWK3Pfze3FJJIFrxkU",
                        label: "act4",
                        value: "act4",
                      },
                      {
                        id: "thR6U4jkkWxfHT9w39xCc",
                        label: "act10",
                        value: "act10",
                      },
                      {
                        id: "w3Xn6fJc8NtTmYs_Kis9H",
                        label: "act1241",
                        value: "act1241",
                      },
                      {
                        id: "j9hUzW2HLe8ojSvlbjUNZ",
                        label: "attt155",
                        value: "attt155",
                      },
                      {
                        id: "BnlvTMV0XpV5HImVGA7GY",
                        label: "gg145",
                        value: "gg145",
                      },
                      {
                        id: "YJGKdlI20nB5Vym9y1qKD",
                        label: "1551gaaa",
                        value: "1551gaaa",
                      },
                      {
                        id: "swhy5zRISlpFrnuJlXwg5",
                        label: "14441tgsagag",
                        value: "14441tgsagag",
                      },
                    ],
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    resources: {
                      BnlvTMV0XpV5HImVGA7GY: {
                        info: {
                          id: "info",
                          meta: {
                            label: "",
                            hidden: false,
                            textSize: "h1",
                            isRequired: false,
                            isRepeatable: false,
                          },
                          index: 0,
                          resources: [
                            {
                              id: "WsiT7InNPfnCWXjdU238Z",
                              type: "normal",
                              index: 0,
                              resources: [
                                {
                                  id: "rNcKk3_OiCmaryAOEyeCH",
                                  index: 0,
                                  resources: [],
                                },
                              ],
                            },
                          ],
                        },
                        sections: [
                          {
                            id: "fGBx9alYGaNkvWFOO96z7",
                            meta: {
                              label: "",
                              hidden: false,
                              textSize: "h1",
                              isRequired: false,
                              isRepeatable: false,
                            },
                            index: 0,
                            resources: [
                              {
                                id: "nFmvSz13kEl3IjljZO0Cj",
                                type: "normal",
                                index: 0,
                                resources: [
                                  {
                                    id: "IqTb_PzzLxXtrj1mj39XM",
                                    index: 0,
                                    resources: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      WGXRWK3Pfze3FJJIFrxkU: {
                        info: {
                          id: "info",
                          meta: {
                            label: "",
                            hidden: false,
                            textSize: "h1",
                            isRequired: false,
                            isRepeatable: false,
                          },
                          index: 0,
                          resources: [
                            {
                              id: "is8tCrI8ps16QVQWtFQA5",
                              type: "normal",
                              index: 0,
                              resources: [
                                {
                                  id: "zhrt5OjIcUUWreuC3M8l1",
                                  index: 0,
                                  resources: [],
                                },
                              ],
                            },
                          ],
                        },
                        sections: [
                          {
                            id: "bbFmro2U4b5BHElnjfYRI",
                            meta: {
                              label: "",
                              hidden: false,
                              textSize: "h1",
                              isRequired: false,
                              isRepeatable: false,
                            },
                            index: 0,
                            resources: [
                              {
                                id: "JSR16vlTX0wRYcgpvHoo1",
                                type: "normal",
                                index: 0,
                                resources: [
                                  {
                                    id: "VeBdGTVD87HVMyvidT3bl",
                                    index: 0,
                                    resources: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      YJGKdlI20nB5Vym9y1qKD: {
                        info: {
                          id: "info",
                          meta: {
                            label: "",
                            hidden: false,
                            textSize: "h1",
                            isRequired: false,
                            isRepeatable: false,
                          },
                          index: 0,
                          resources: [
                            {
                              id: "tEC40DaP0J6xMyj3XvEDa",
                              type: "normal",
                              index: 0,
                              resources: [
                                {
                                  id: "Kko_ihBjsfp2LQFT9Q1GD",
                                  index: 0,
                                  resources: [],
                                },
                              ],
                            },
                          ],
                        },
                        sections: [
                          {
                            id: "Gx44PTMxhHdknUPmQZjII",
                            meta: {
                              label: "",
                              hidden: false,
                              textSize: "h1",
                              isRequired: false,
                              isRepeatable: false,
                            },
                            index: 0,
                            resources: [
                              {
                                id: "UXE6QIQjunh9fqjZB971l",
                                type: "normal",
                                index: 0,
                                resources: [
                                  {
                                    id: "MAlP0OdrXzQghy5SM3ZJw",
                                    index: 0,
                                    resources: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      h0lCWvCibh4Ho35pn8emm: {
                        info: {
                          id: "info",
                          meta: {
                            label: "",
                            hidden: false,
                            textSize: "h1",
                            isRequired: false,
                            isRepeatable: false,
                          },
                          index: 0,
                          resources: [
                            {
                              id: "F6rBIzzjcb7WiO2x9cupI",
                              type: "normal",
                              index: 0,
                              resources: [
                                {
                                  id: "SN4EpcK5m_Rn0FdzwzE8o",
                                  index: 0,
                                  resources: [],
                                },
                              ],
                            },
                          ],
                        },
                        sections: [
                          {
                            id: "yJApkWmuUSKfw6NPpOBHy",
                            meta: {
                              label: "",
                              hidden: false,
                              textSize: "h1",
                              isRequired: false,
                              isRepeatable: false,
                            },
                            index: 0,
                            resources: [
                              {
                                id: "ckEpQxTBboA3Uhdp1B5E0",
                                type: "normal",
                                index: 0,
                                resources: [
                                  {
                                    id: "eW8QX8f7A_Lfd_1C91zYh",
                                    index: 0,
                                    resources: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      j9hUzW2HLe8ojSvlbjUNZ: {
                        info: {
                          id: "info",
                          meta: {
                            label: "",
                            hidden: false,
                            textSize: "h1",
                            isRequired: false,
                            isRepeatable: false,
                          },
                          index: 0,
                          resources: [
                            {
                              id: "XRohLYe3TvDLGzi0vLqXV",
                              type: "normal",
                              index: 0,
                              resources: [
                                {
                                  id: "dRFUTcivgvRs5Wc_BwEPA",
                                  index: 0,
                                  resources: [],
                                },
                              ],
                            },
                          ],
                        },
                        sections: [
                          {
                            id: "xfwtBKq_8PZ0tL3zIB6ng",
                            meta: {
                              label: "",
                              hidden: false,
                              textSize: "h1",
                              isRequired: false,
                              isRepeatable: false,
                            },
                            index: 0,
                            resources: [
                              {
                                id: "gaibMuAo5NoJRnvifpbDT",
                                type: "normal",
                                index: 0,
                                resources: [
                                  {
                                    id: "jXCz0bRKhRepD_wZeRf37",
                                    index: 0,
                                    resources: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      swhy5zRISlpFrnuJlXwg5: {
                        info: {
                          id: "info",
                          meta: {
                            label: "",
                            hidden: false,
                            textSize: "h1",
                            isRequired: false,
                            isRepeatable: false,
                          },
                          index: 0,
                          resources: [
                            {
                              id: "mPioF_lBTmY2kX9ksh4N3",
                              type: "normal",
                              index: 0,
                              resources: [
                                {
                                  id: "EsO7wxygV1bLB1P2oZIzJ",
                                  index: 0,
                                  resources: [],
                                },
                              ],
                            },
                          ],
                        },
                        sections: [
                          {
                            id: "G75tQosCWNXdyBDbP8U47",
                            meta: {
                              label: "",
                              hidden: false,
                              textSize: "h1",
                              isRequired: false,
                              isRepeatable: false,
                            },
                            index: 0,
                            resources: [
                              {
                                id: "q5jSn85wGs_ZmE6YzKeER",
                                type: "normal",
                                index: 0,
                                resources: [
                                  {
                                    id: "Krvhf3k792HqRXF4AcuSx",
                                    index: 0,
                                    resources: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      thR6U4jkkWxfHT9w39xCc: {
                        info: {
                          id: "info",
                          meta: {
                            label: "",
                            hidden: false,
                            textSize: "h1",
                            isRequired: false,
                            isRepeatable: false,
                          },
                          index: 0,
                          resources: [
                            {
                              id: "aTqwNUXTuPnPUSXvL_P3n",
                              type: "normal",
                              index: 0,
                              resources: [
                                {
                                  id: "F0K_fWcaRiHGxWGL_GgRm",
                                  index: 0,
                                  resources: [],
                                },
                              ],
                            },
                          ],
                        },
                        sections: [
                          {
                            id: "eDove4csAo_a7sFo2ylWb",
                            meta: {
                              label: "",
                              hidden: false,
                              textSize: "h1",
                              isRequired: false,
                              isRepeatable: false,
                            },
                            index: 0,
                            resources: [
                              {
                                id: "YrhoSogJ27Xv_RV9DoeP6",
                                type: "normal",
                                index: 0,
                                resources: [
                                  {
                                    id: "z_kd1FlNoQGHg6BgsiW9b",
                                    index: 0,
                                    resources: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      w3Xn6fJc8NtTmYs_Kis9H: {
                        info: {
                          id: "info",
                          meta: {
                            label: "",
                            hidden: false,
                            textSize: "h1",
                            isRequired: false,
                            isRepeatable: false,
                          },
                          index: 0,
                          resources: [
                            {
                              id: "pJje3IYZcMCBCNCDQT0zf",
                              type: "normal",
                              index: 0,
                              resources: [
                                {
                                  id: "SzY6LAfBSN9l365v4LyJp",
                                  index: 0,
                                  resources: [],
                                },
                              ],
                            },
                          ],
                        },
                        sections: [
                          {
                            id: "smwtlpst2BSrOKTpl09iO",
                            meta: {
                              label: "",
                              hidden: false,
                              textSize: "h1",
                              isRequired: false,
                              isRepeatable: false,
                            },
                            index: 0,
                            resources: [
                              {
                                id: "IKU3qkwlOW7kyDn70c_Oo",
                                type: "normal",
                                index: 0,
                                resources: [
                                  {
                                    id: "D1UYdVSXWE_ORiTNldww5",
                                    index: 0,
                                    resources: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                      wgB1l8TPSotLswLjmGIHH: {
                        info: {
                          id: "info",
                          meta: {
                            label: "",
                            hidden: false,
                            textSize: "h1",
                            isRequired: false,
                            isRepeatable: false,
                          },
                          index: 0,
                          resources: [
                            {
                              id: "NAFzIYUTnXPJWAGNomXbb",
                              type: "normal",
                              index: 0,
                              resources: [
                                {
                                  id: "mLTDruHoG5D8rzmHLYpVN",
                                  index: 0,
                                  resources: [],
                                },
                              ],
                            },
                          ],
                        },
                        sections: [
                          {
                            id: "SlRViDQSmQ2DvGkQmT6oL",
                            meta: {
                              label: "",
                              hidden: false,
                              textSize: "h1",
                              isRequired: false,
                              isRepeatable: false,
                            },
                            index: 0,
                            resources: [
                              {
                                id: "ecmxL_C44szH42PrO7DsH",
                                type: "normal",
                                index: 0,
                                resources: [
                                  {
                                    id: "pqy6UNNQcpKuYnnuF6U4y",
                                    index: 0,
                                    resources: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    },
                    controlType: "ActionButtons",
                  },
                  type: "ActionButtons",
                  index: 3,
                },
                {
                  id: "TFyONXc5Ywi4B5Vw96v9f",
                  meta: {
                    label: "TaskList",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "TaskList",
                  },
                  type: "TaskList",
                  index: 4,
                },
                {
                  id: "dwnY3D6AkVyRCsNWywcQj",
                  meta: {
                    label: "paperless.afaf_Axs5Q",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "WorkOrderInfo",
                  },
                  type: "WorkOrderInfo",
                  index: 5,
                },
                {
                  id: "ofQS7w4Vs8M3k7bYzvvC8",
                  meta: {
                    label: "",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "GeneratedWorkOrders",
                  },
                  type: "GeneratedWorkOrders",
                  index: 6,
                },
                {
                  id: "kgZ950ZIBxenysmgi_6GC",
                  meta: {
                    label: "",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "WorkOrderInfo",
                  },
                  type: "WorkOrderInfo",
                  index: 7,
                },
                {
                  id: "N9ljNeFzurzs5_cy4M66a",
                  meta: {
                    label: "Comments Thread",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "CommentsThread",
                  },
                  type: "CommentsThread",
                  index: 8,
                },
                {
                  id: "SgyPBy9orGiLHF8iSNHO7",
                  meta: {
                    label: "Related Orders",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "RelatedOrders",
                  },
                  type: "RelatedOrders",
                  index: 9,
                },
                {
                  id: "Mj5o6lH0rmFX_C4TVDsRf",
                  meta: {
                    label: "Employees login history",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "EmployeesLoginHistory",
                  },
                  type: "EmployeesLoginHistory",
                  index: 10,
                },
                {
                  id: "y7U4r0Qu8Kd2jCRH1mDmS",
                  meta: {
                    label: "Camera",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "Camera",
                    cameraConfig: {
                      camera: true,
                      fileStorage: true,
                      showComment: true,
                      localStorage: true,
                      fileStorageGallerySize: 10,
                    },
                  },
                  type: "Camera",
                  index: 11,
                },
              ],
            },
            {
              id: "0g0myQ0wSgx5_Fx7qWW-w",
              index: 2,
              resources: [
                {
                  id: "dDDLSToFjIV9aIKgM0euu",
                  meta: {
                    label: "Login button",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "LoginButtonControl",
                  },
                  type: "LoginButtonControl",
                  index: 0,
                },
                {
                  id: "zVSy4E5JXEsEb7zjalGFW",
                  meta: {
                    label: "Employees login",
                    autofill: {
                      url: "",
                      enabled: false,
                      polling: false,
                      dependencies: [],
                    },
                    controlType: "EmployeesLogin",
                  },
                  type: "EmployeesLogin",
                  index: 1,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
