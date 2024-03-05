import { BasicRadioGroup } from "./BasicRadioGroup";

export const ChoiceSelector = () => {
  return (
    <BasicRadioGroup
      vertical
      data={[
        { label: "YES", checked: false },
        { label: "NO", checked: true },
        { label: "N/A", checked: false },
      ]}
      label="Is machine 4 ready?"
    />
  );
};
