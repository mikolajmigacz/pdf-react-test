export const periodicity = {
  name: "K7VkW7Sa4DjXOK8dLQrt0",
  type: "string",
  value:
    '{"additionalOptions":false,"endDate":"2024-03-20T10:06:00.000Z","generateBefore":15,"generateBeforeUnit":"MINUTES","generationHorizon":"PT15M","generationHorizonSec":0,"maxStartTimeSec":3600,"minStartTimeSec":60,"reminderNotificationSec":1,"repeatEvery":1,"repeatEveryHorizon":"P1W","repeatEveryUnit":"WEEKS","sendReminder":true,"sendReminderBefore":3,"sendReminderBeforeUnit":"DAYS","sendReminderHorizon":"P3D","startBefore":1,"startBeforeUnit":"MINUTES","startDate":"2024-03-05T05:04:00.000Z","startLater":1,"startLaterUnit":"HOURS","weekdays":{"FRIDAY":false,"MONDAY":false,"SATURDAY":false,"SUNDAY":false,"THURSDAY":false,"TUESDAY":true,"WEDNESDAY":false}}',
  scope: "local",
};
export const EmployeePicker = {
  name: "F77fAoh0OVvvNkHIxfEaE",
  type: "string",
  value: '{"selectedCompanyId":"CLIENT_15","selectedEmployeeId":"oooo"}',
  scope: "local",
};
export const input = {
  name: "lfnY21tPpH27z7thu5OIy",
  type: "string",
  value: "input test value",
  scope: "local",
};
export const datePicker = {
  name: "ocuKaFSgCSCAIJp0DiycR",
  type: "string",
  value: "2024-03-27T11:54:57.692Z",
  scope: "local",
};
export const inspection_meta = {
  name: "inspection_meta",
  type: "string",
  value:
    '{"parameters":[{"id":"Karta palety","isCommentRequired":true,"measureIntervalSec":3600,"name":"Karta palety","numberOfSamples":1,"sequence":1,"validator":{"properties":{"options":[{"label":"Karta palety obecna. Zgodny i czytelny nadruk","value":"A"},{"label":"Brak karty palety. Niezgodny lub nieczytelny nadruk","value":"C"}]},"type":"MAP"},"valueType":"ENUM"},{"id":"Ładunek na palecie po owinięciu","isCommentRequired":true,"measureIntervalSec":3600,"name":"Ładunek na palecie po owinięciu","numberOfSamples":1,"sequence":2,"validator":{"properties":{"options":[{"label":"warstwy i przekładki względem siebie ułożone prawidłowo,brak uszkodzeń folii","value":"A"},{"label":"warstwy względem siebie ułożone prawidłowo, wystające przekładki nie powodujące przedziurawień na folii stretch","value":"B"},{"label":"warstwy i przekładki poprzesuwane względem siebie, folia z widocznymi uszkodzeniami i przedziurawieniami","value":"C"}]},"type":"MAP"},"valueType":"ENUM"},{"id":"Ładunek na palecie przed owinięciem","isCommentRequired":true,"measureIntervalSec":3600,"name":"Ładunek na palecie przed owinięciem","numberOfSamples":1,"sequence":3,"validator":{"properties":{"options":[{"label":"zgrzewki ułożone prosto i stabilnie, warstwy względem siebie ułożone prawidłowo, przekładka ułożona równo,","value":"A"},{"label":"zgrzewki lekko przekręcone, ale ułożone stabilnie, warstwy wykazują niewielkie odchylenia względem siebie, lekko wystająca/przekrzywiona przekładka niewpływająca na stabilność palety","value":"B"},{"label":"zgrzewki spadają z palety,warstwy mocno odchylone względem siebie, wysstająca/przekrzywiona przekładka wpływająca na stabilność palety","value":"C"}]},"type":"MAP"},"valueType":"ENUM"},{"id":"Schemat owijania","isCommentRequired":true,"measureIntervalSec":3600,"name":"Schemat owijania","numberOfSamples":1,"sequence":4,"validator":{"properties":{"options":[{"label":"ilość owinięć folii stretch i rozkład zgodny z przyjętym standardem dla danego formatu","value":"A"},{"label":"ilość owinięć folii stretch i rozkład niezgodny z przyjętym standardem dla danego formatu","value":"C"}]},"type":"MAP"},"valueType":"ENUM"},{"id":"Schemat paletyzacji","isCommentRequired":true,"measureIntervalSec":3600,"name":"Schemat paletyzacji","numberOfSamples":1,"sequence":5,"validator":{"properties":{"options":[{"label":"Paletyza zgodna z przyjętym standardem dla danego formatu(odpowiednia ilość warstw, odpowiednia ilość zgrzewk na warstwie, odpowiednie ułożenie zgrzewk na warstwie","value":"A"},{"label":"paletyzacja niezgodna z przyjętym standardem dla danego formatu (nieodpowiednia ilość warstw lub nieodpowiednia ilość zgrzewek na warstwie lub nieodpowiednie ułożenie zgrzewek na warstwie)","value":"C"}]},"type":"MAP"},"valueType":"ENUM"},{"id":"Waga folii stretch (odczyt z owijarki)","isCommentRequired":true,"measureIntervalSec":3600,"name":"Waga folii stretch (odczyt z owijarki)","numberOfSamples":1,"sequence":6,"validator":{"properties":{"ranges":[{"from":280,"lb":true,"rb":true,"result":"A","to":290},{"from":278,"lb":true,"rb":false,"result":"B","to":280},{"from":290,"lb":false,"rb":true,"result":"B","to":296},{"from":"-Infinity","lb":false,"rb":false,"result":"C","to":278},{"from":296,"lb":false,"rb":false,"result":"C","to":"Infinity"}]},"type":"RANGE"},"valueType":"NUMBER"}],"title":"Kontrola jakości ABC - Paleta"}',
  scope: "local",
};
export const checklist = {
  name: "checklist",
  type: "string",
  value:
    '{"customValidationError":false,"globalSignedBy":null,"tasks":[{"id":1,"subtasks":[{"id":1,"result":"pass"},{"comment":"test comment from user","id":2,"optionalCheckboxChecked":true,"result":"fail"},{"id":3,"result":"n/a"},{"comment":"Another comment","id":4,"result":"fail"}]},{"id":2,"subtasks":[{"id":1,"result":"n/a"},{"id":2,"result":"pass"},{"comment":"one more comment","id":3,"optionalCheckboxChecked":true,"result":"fail"},{"comment":"test comment 2","id":4,"result":"fail"},{"comment":"There must be a comment","id":6,"result":"fail"},{"comment":"comment is a must","id":5,"result":"fail"}]}]}',
  scope: "local",
};

export const TimePicker = {
  name: "p2mfDVFEarpRHHoKNtLIV",
  type: "string",
  value: "2024-03-13T14:01:57.947Z",
  scope: "local",
};
export const InputNumber = {
  name: "qnTMdM0gWPIS0qyTDnJTc",
  type: "double",
  value: "123123198",
  scope: "local",
};
export const Table = {
  name: "Hk5UzvdXP0PJW7TyV5lFf",
  type: "string",
  value:
    '[{"key":"record_0","name":{"value":"Anna"},"status":{"value":"ready"}},{"key":"record_1","name":{"value":"Tom"},"status":{"value":"started"}},{"key":"record_2","name":{"value":"John"},"status":{"value":"stoped"}},{"key":"record_3","name":{"value":"Bob"},"status":{"value":"delayed"}}]',
  scope: "local",
};
export const select = {
  name: "Z42cI0GAJug6UFRu8PUwN",
  type: "string",
  value: "select2",
  scope: "local",
};
export const ChoiceSelector = {
  name: "TLY5zuy27ceEBKcAu7W5S",
  type: "string",
  value: "no",
  scope: "local",
};
export const ActivityPicker = {
  name: "DvrhKG_QWsSiFfRRJvdfQ",
  type: "string",
  value: '{"activityTag":"ACTION_CHANGEOVER_5","version":"1"}',
  scope: "local",
};

export const TaskList = {
  name: "taskList_meta",
  type: "string",
  value:
    '{"activeTasks":["Lista kontrolna","Prace pożarowo-niebezpieczne","Instrukcja 105","Odbiór"],"hidden":0,"tasks":[{"categoriesList":["Inne"],"folderName":"Assets","name":"Prace pożarowo-niebezpieczne","roles":["Maintenance","Admin"],"type":"Form&Document"},{"categoriesList":["Inne"],"folderName":"Assets","name":"Instrukcja 105","roles":["Maintenance","Admin"],"type":"Document"},{"name":"Lista kontrolna","roles":["Maintenance","Admin"],"type":"Form"},{"categoriesList":["Inne"],"folderName":"Assets","name":"CRO załącznik","roles":["Maintenance","Admin"],"type":"Document"},{"categoriesList":["Inne"],"folderName":"Assets","name":"NADCAP załącznik","roles":["Maintenance","Admin"],"type":"Document"},{"categoriesList":["Inne"],"folderName":"Assets","name":"Protokół odbioru","roles":["Maintenance","Admin"],"type":"Document"},{"name":"Accept NADCAP","roles":["Maintenance","Admin"],"type":"Approval"},{"name":"Odbiór","roles":["Production","Admin"],"type":"Approval"}]}',
  scope: "local",
};
export const CostControl = {
  name: "fxlNHl1EIsUVbX1MwcxiY",
  type: "string",
  value:
    '{"additionalCost":{"comment":"Additional cost comment","value":500},"employeesCost":{"value":3450},"estimatedCost":{"value":30000},"sparePartsCost":{"value":23930}}',
  scope: "local",
};
export const radioGroup = {
  name: "vRkghW3kBeOfSe2Ak3brU",
  type: "string",
  value: "value2",
  scope: "local",
};
export const camera = {
  name: "camera",
  type: "string",
  value:
    '{"config":{"categories":[{"id":"CATEGORY_1","name":"Category 1"},{"id":"CATEGORY_2","name":"Category 2"},{"id":"CATEGORY_3","name":"Category 3"},{"id":"CATEGORY_4","name":"Category 4"},{"id":"CATEGORY_5","name":"Category 5"}],"locations":[{"id":"LOCATION_1","name":"Location 1"},{"id":"LOCATION_2","name":"Location 2"},{"id":"LOCATION_3","name":"Location 3"},{"id":"LOCATION_4","name":"Location 4"},{"id":"LOCATION_5","name":"Location 5"}],"subcategories":[{"id":"SUBCATEGORY_1","name":"Subcategory 1"},{"id":"SUBCATEGORY_2","name":"Subcategory 2"},{"id":"SUBCATEGORY_3","name":"Subcategory 3"},{"id":"SUBCATEGORY_4","name":"Subcategory 4"},{"id":"SUBCATEGORY_5","name":"Subcategory 5"}],"tags":[{"id":"TAG_1","name":"Tag 1"},{"id":"TAG_2","name":"Tag 2"},{"id":"TAG_3","name":"Tag 3"},{"id":"TAG_4","name":"Tag 4"},{"id":"TAG_5","name":"Tag 5"}]},"value":{"category":"CATEGORY_4","comment":"user camera comment","images":["349b160a-010f-4239-b017-70a22505318c"],"location":"LOCATION_2","subcategory":"SUBCATEGORY_3","tags":["TAG_1"],"uuid":"f8b65edd-12b9-49cb-9ed4-04253aaf12a6"}}',
  scope: "local",
};

export const checklist_meta = {
  name: "checklist_meta",
  type: "string",
  value:
    '{"data":{"columns":[{"label":"ELEMENT KONTROLI","name":"col1","translated_label":{},"width":"100%"}],"signature":{"type":""},"tasks":[{"id":1,"name":"Zakres czynności utrzymania stanu operacyjnego","subtasks":[{"content":{"col1":"1. Czy działa zabezpieczenie LOTO?"},"files":[],"id":1,"name":"Subtask 1","optional_checkbox":{"label":"Wygeneruj potrzebę","show_when_selected_value_in":["fail"],"translated_label":{}},"result":{"comment":{"trigger":{"fail":"required"}},"options":[{"label":"Tak","value":"pass"},{"label":"Nie","value":"fail"}],"translated_options":[],"type":"buttons"},"translated_content":{},"translated_name":{}},{"content":{"col1":"2. Czy pomiary elektryczne są aktualne?"},"files":[],"id":2,"name":"Subtask 2","optional_checkbox":{"label":"Wygeneruj potrzebę","show_when_selected_value_in":["fail"],"translated_label":{}},"result":{"comment":{"trigger":{"fail":"required"}},"options":[{"label":"Tak","value":"pass"},{"label":"Nie","value":"fail"}],"translated_options":[],"type":"buttons"},"translated_content":{},"translated_name":{}},{"content":{"col1":"3. Czy został wykonany backup maszyny/urządzenia?"},"files":[],"id":3,"name":"Subtask 3","optional_checkbox":{"label":"Wygeneruj potrzebę","show_when_selected_value_in":["fail"],"translated_label":{}},"result":{"comment":{"trigger":{"fail":"required"}},"options":[{"label":"Tak","value":"pass"},{"label":"Nie","value":"fail"},{"label":"Nie dotyczy","value":"n/a"}],"translated_options":[],"type":"buttons"},"translated_content":{},"translated_name":{}},{"content":{"col1":"4. Czy jest wykonywana Obsługa Autonomiczna? (sprawdzić wypełnianie przez operatora Arkusza Oceny Stanu Maszyny)"},"files":[],"id":4,"name":"Subtask 4","optional_checkbox":{"label":"Wygeneruj potrzebę","show_when_selected_value_in":["fail"],"translated_label":{}},"result":{"comment":{"trigger":{"fail":"required"}},"options":[{"label":"Tak","value":"pass"},{"label":"Nie","value":"fail"},{"label":"Nie dotyczy","value":"n/a"}],"translated_options":[],"type":"buttons"},"translated_content":{},"translated_name":{}}],"translated_name":{}},{"id":2,"name":"Zakres czynności przeglądowych układu bezpieczeństwa","subtasks":[{"content":{"col1":"5. Sprawdzenie wyłączników awaryjnych"},"files":[],"id":1,"name":"Subtask 1","optional_checkbox":{"label":"Wygeneruj potrzebę","show_when_selected_value_in":["fail"],"translated_label":{}},"result":{"comment":{"trigger":{"fail":"required"}},"options":[{"label":"Tak","value":"pass"},{"label":"Nie","value":"fail"},{"label":"Nie dotyczy","value":"n/a"}],"translated_options":[],"type":"buttons"},"translated_content":{},"translated_name":{}},{"content":{"col1":"6. Sprawdzenie zamków bezpieczeństwa drzwi komory obróbczej, magazynu narzędziowego i innych"},"files":[],"id":2,"name":"Subtask 2","optional_checkbox":{"label":"Wygeneruj potrzebę","show_when_selected_value_in":["fail"],"translated_label":{}},"result":{"comment":{"trigger":{"fail":"required"}},"options":[{"label":"Tak","value":"pass"},{"label":"Nie","value":"fail"},{"label":"Nie dotyczy","value":"n/a"}],"translated_options":[],"type":"buttons"},"translated_content":{},"translated_name":{}},{"content":{"col1":"7. Sprawdzenie osłon"},"files":[],"id":3,"name":"Subtask 3","optional_checkbox":{"label":"Wygeneruj potrzebę","show_when_selected_value_in":["fail"],"translated_label":{}},"result":{"comment":{"trigger":{"fail":"required"}},"options":[{"label":"Tak","value":"pass"},{"label":"Nie","value":"fail"},{"label":"Nie dotyczy","value":"n/a"}],"translated_options":[],"type":"buttons"},"translated_content":{},"translated_name":{}},{"content":{"col1":"8. Sprawdzenie kurtyn świetlnych"},"files":[],"id":4,"name":"Subtask 4","optional_checkbox":{"label":"Wygeneruj potrzebę","show_when_selected_value_in":["fail"],"translated_label":{}},"result":{"comment":{"trigger":{"fail":"required"}},"options":[{"label":"Tak","value":"pass"},{"label":"Nie","value":"fail"},{"label":"Nie dotyczy","value":"n/a"}],"translated_options":[],"type":"buttons"},"translated_content":{},"translated_name":{}},{"content":{"col1":"9. Inne"},"files":[],"id":5,"name":"Subtask 5","optional_checkbox":{"label":"Wygeneruj potrzebę","show_when_selected_value_in":["fail"],"translated_label":{}},"result":{"comment":{"trigger":{"fail":"required","pass":"optional"}},"options":[{"label":"Tak","value":"pass"},{"label":"Nie","value":"fail"},{"label":"Nie dotyczy","value":"n/a"}],"translated_options":[],"type":"buttons"},"translated_content":{},"translated_name":{}},{"content":{"col1":"10. Obroty na wrzecienniku detalu max. 3obr/min (dotyczy maszyn Studer)"},"files":[],"id":6,"name":"Subtask 6","optional_checkbox":{"label":"Wygeneruj potrzebę","show_when_selected_value_in":["fail"],"translated_label":{}},"result":{"comment":{"trigger":{"fail":"required"}},"options":[{"label":"Tak","value":"pass"},{"label":"Nie","value":"fail"},{"label":"Nie dotyczy","value":"n/a"}],"translated_options":[],"type":"buttons"},"translated_content":{},"translated_name":{}}],"translated_name":{}}],"title":"Czynności wstępne dla przeglądów prewencyjnych","translated_title":{}}}',
  scope: "local",
};

export const inspection = {
  name: "inspection",
  type: "string",
  value:
    '{"Karta palety":{"comment":"COMMMENT @%%","commentVisible":true,"failureCausesVisible":false,"inspectionValue":"C","value":"C"},"Schemat owijania":{"commentVisible":false,"failureCausesVisible":false,"inspectionValue":"A","value":"A"},"Schemat paletyzacji":{"comment":"OOL","commentVisible":true,"failureCausesVisible":false,"inspectionValue":"C","value":"C"},"Waga folii stretch (odczyt z owijarki)":{"comment":"eh","commentVisible":true,"failureCausesVisible":false,"inspectionValue":"C","value":167},"Ładunek na palecie po owinięciu":{"commentVisible":false,"failureCausesVisible":false,"inspectionValue":"A","value":"A"},"Ładunek na palecie przed owinięciem":{"comment":"CO M AAA","commentVisible":true,"failureCausesVisible":false,"inspectionValue":"B","value":"B"}}',
  scope: "local",
};
