import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { checklistFullInputData as inputData } from "../../utils/componentsConst/checklist.const";
import { BasicRadioGroup } from "./BasicRadioGroup";
import { Checkbox } from "./Checkbox";
import { Input } from "./Input";
import { textFontSize } from "../../globals.const";

const styles = StyleSheet.create({
  componentWrapper: { flexDirection: "column" },
  section: { flexGrow: 1 },
  title: { fontSize: 20, marginBottom: 10 },
  subtask: { marginVertical: 10, marginBottom: 10 },
  label: { fontSize: textFontSize, marginBottom: 2 },
  resultButtons: { flexDirection: "row", marginBottom: 5 },
  button: {
    width: "25%",
    margin: "2%",
    textAlign: "center",
    fontSize: textFontSize,
  },
  checkboxLabel: { fontSize: textFontSize },
});

export const Checklist = ({
  inputData,
  selectedValue,
}: {
  inputData: any;
  selectedValue: Record<
    number,
    { result: string; optionalCheckboxChecked: boolean; comment: string }
  >;
}) => {
  return (
    <View style={styles.componentWrapper}>
      <Text style={styles.title}>{inputData.data.title}</Text>
      {inputData.data.tasks.map((task: any) => (
        <View key={task.id} style={styles.section}>
          <Text style={{ fontSize: 15, marginBottom: 5 }}>{task.name}</Text>
          {task.subtasks.map((subtask: any, i: number) => (
            <View
              wrap={false}
              key={subtask.id}
              style={[
                styles.subtask,
                { backgroundColor: i % 2 !== 0 ? "#E4E4E4" : "transparent" },
              ]}
            >
              <BasicRadioGroup
                label={subtask.content.col1}
                data={subtask.result.options.map((option: any) => ({
                  label: option.label,
                  checked: selectedValue[subtask.id].result === option.value,
                }))}
                vertical={false}
              />
              {subtask.optional_checkbox &&
                subtask.optional_checkbox.show_when_selected_value_in.includes(
                  selectedValue[subtask.id].result
                ) && (
                  <View style={{ marginVertical: 5 }}>
                    <Checkbox
                      isChecked={
                        selectedValue[subtask.id].optionalCheckboxChecked
                      }
                      label={subtask.optional_checkbox.label}
                    />
                    <View style={{ marginVertical: 5 }}>
                      <Input
                        label="Comment"
                        value={selectedValue[subtask.id].comment}
                      />
                    </View>
                  </View>
                )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

type InputMetaData = {
  customValidationError: boolean;
  globalSignedBy: null;
  tasks: Array<{
    id: number;
    subtasks: Array<{
      id: number;
      result: string;
      comment?: string;
      optionalCheckboxChecked?: boolean;
    }>;
  }>;
};

type Output = Record<
  number,
  { result: string; optionalCheckboxChecked: boolean; comment: string }
>;

export const transformSelectedEvents = (
  input: InputMetaData | undefined
): Output | {} => {
  if (!input) {
    return {};
  }
  let key = 1;
  const output: Output = {};

  input.tasks.forEach((task) => {
    task.subtasks.forEach((subtask) => {
      output[key++] = {
        result: subtask.result,
        optionalCheckboxChecked: subtask.optionalCheckboxChecked ?? false,
        comment: subtask.comment ?? "",
      };
    });
  });

  return output;
};
