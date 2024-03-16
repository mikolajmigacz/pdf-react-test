import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioOption: {
    borderWidth: 2,
    borderColor: "black",
    padding: 2,
    justifyContent: "center",
    textAlign: "center",
    flexGrow: 1,
  },
  firstOption: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  lastOption: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  selectedOption: {
    backgroundColor: "#ADD8E6",
  },
  nonSelectedOption: {
    backgroundColor: "white",
  },
  text: {
    margin: "auto",
  },
});

export const RadioGroup = ({
  options,
  selectedValue,
}: {
  options: string[];
  selectedValue: string;
}) => (
  <View style={styles.radioGroup}>
    {options.map((option, index) => {
      const isFirst = index === 0;
      const isLast = index === options.length - 1;
      const isSelected = option === selectedValue;

      return (
        <View
          key={option}
          style={[
            styles.radioOption,
            isFirst ? styles.firstOption : {},
            isLast ? styles.lastOption : {},
            isSelected ? styles.selectedOption : styles.nonSelectedOption,
          ]}
        >
          <Text style={styles.text}>{option}</Text>
        </View>
      );
    })}
  </View>
);
