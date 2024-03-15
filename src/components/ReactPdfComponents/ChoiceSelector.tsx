import { View, Text } from "@react-pdf/renderer";
import { BasicRadioGroup } from "./BasicRadioGroup";
import { textFontSize } from "../../globals.const";

export const ChoiceSelector = ({
  label,
  checkedValue,
}: {
  label: string;
  checkedValue: string | undefined;
}) => {
  const options = [
    { label: "yes", checked: checkedValue === "yes" },
    { label: "no", checked: checkedValue === "no" },
    { label: "not applicable", checked: checkedValue === "notApplicable" },
  ];
  return (
    <View style={{ flexDirection: "column", gap: 2 }}>
      <BasicRadioGroup vertical data={options} label={label} />
      {checkedValue ? (
        <Text style={{ fontSize: textFontSize - 2 }}>
          {options.find((option) => option.checked === true)?.label}
        </Text>
      ) : null}
    </View>
  );
};
