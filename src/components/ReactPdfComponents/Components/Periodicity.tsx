import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Checkbox } from "./Checkbox";
import { Radio } from "./Radio";
import { textFontSize } from "../../../globals.const";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  input: {
    marginBottom: 10,
    fontSize: textFontSize,
  },
});

export const Periodicity = ({
  dependentOnTime,
  startDate,
  endDate,
  repeatEvery,
  workBefore,
  workAfter,
  generateBefore,
  additionalOptions = false,
  sendReminder = false,
}: {
  dependentOnTime: boolean;
  startDate: string;
  endDate: string;
  repeatEvery: { value: string; timeUnit: string };
  workBefore: { value: string; timeUnit: string };
  workAfter: { value: string; timeUnit: string };
  generateBefore: { value: string; timeUnit: string };
  additionalOptions?: boolean;
  sendReminder?: boolean;
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.input}>Periodicity:</Text>
      <Radio
        checked={dependentOnTime}
        label="Dependent on time"
        styles={styles.input}
      />
      <Text style={styles.input}>
        Repeat every: {repeatEvery.value} {repeatEvery.timeUnit}
      </Text>
      <Text style={styles.input}>Start date: {startDate}</Text>
      <Text style={styles.input}>End date: {endDate}</Text>
      <View style={styles.input}>
        <Text style={styles.input}>Work must be started:</Text>
        <Text>
          Max: {workBefore.value} {workBefore.timeUnit} before
        </Text>
        <Text>
          Max: {workAfter.value} {workAfter.timeUnit} later
        </Text>
      </View>
      <Text style={styles.input}>
        Generate: {generateBefore.value} {generateBefore.timeUnit} before
      </Text>
      <Checkbox
        isChecked={additionalOptions}
        label="Additional options"
        styles={styles.input}
      />
      <Checkbox
        isChecked={sendReminder}
        label="Send reminder"
        styles={styles.input}
      />
    </View>
  );
};
