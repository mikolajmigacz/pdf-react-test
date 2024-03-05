import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const calculateWidth = (cost: string, estimatedCost: string): string => {
  const ratio = parseFloat(cost) / parseFloat(estimatedCost);
  return `${Math.min(100, ratio * 100)}%`;
};

const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  costItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  costLabel: {
    width: "50%",
  },
  costValue: {
    width: "20%",
    textAlign: "right",
  },
  costBarContainer: {
    position: "relative",
    width: "30%",
    height: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  costBar: {
    position: "absolute",
    height: "100%",
    borderRadius: 5,
  },
  colorIndicator: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    marginRight: 5,
  },
  commentBox: {
    marginTop: 5,
    padding: 5,
  },
});

const CostControl = ({
  estimatedCost,
  realCost,
  sparePartsCost,
  additionalCost,
  additionalCostComment,
  colors,
}: {
  estimatedCost: string;
  realCost: string;
  sparePartsCost: string;
  additionalCost: string;
  additionalCostComment: string;
  colors: { [key: string]: string };
}) => {
  const sparePartsBarWidth = calculateWidth(sparePartsCost, estimatedCost);
  const additionalCostBarWidth = calculateWidth(additionalCost, estimatedCost);

  return (
    <View style={styles.section}>
      <Text>Cost control:</Text>

      {/* Estimated Cost */}
      <View style={styles.costItem}>
        <Text style={styles.costLabel}>Estimated cost</Text>
        <Text style={styles.costValue}>{estimatedCost} €</Text>
        <View style={styles.costBarContainer}>
          <View
            style={[
              styles.costBar,
              {
                width: "100%",
                backgroundColor: colors.estimatedCost,
              },
            ]}
          />
        </View>
      </View>

      {/* Real Cost */}
      <View style={styles.costItem}>
        <Text style={styles.costLabel}>Real cost</Text>
        <Text style={styles.costValue}>{realCost} €</Text>
        <View style={styles.costBarContainer}>
          {/* Spare Parts Cost Bar */}
          <View
            style={[
              styles.costBar,
              {
                width: sparePartsBarWidth,
                backgroundColor: colors.sparePartsCost,
              },
            ]}
          />
          {/* Additional Cost Bar */}
          <View
            style={[
              styles.costBar,
              {
                left: sparePartsBarWidth,
                width: additionalCostBarWidth,
                backgroundColor: colors.additionalCost,
              },
            ]}
          />
        </View>
      </View>

      {/* Spare Parts Cost */}
      <View style={styles.costItem}>
        <View
          style={[
            styles.colorIndicator,
            { backgroundColor: colors.sparePartsCost },
          ]}
        />
        <Text style={styles.costLabel}>Spare parts cost</Text>
        <Text style={styles.costValue}>{sparePartsCost} €</Text>
        <View style={styles.costBarContainer}>
          <View
            style={[
              styles.costBar,
              {
                width: sparePartsBarWidth,
                backgroundColor: colors.sparePartsCost,
              },
            ]}
          />
        </View>
      </View>

      {/* Additional Cost */}
      <View style={styles.costItem}>
        <View
          style={[
            styles.colorIndicator,
            { backgroundColor: colors.additionalCost },
          ]}
        />
        <Text style={styles.costLabel}>Additional cost</Text>
        <Text style={styles.costValue}>{additionalCost} €</Text>
        <View style={styles.costBarContainer}>
          <View
            style={[
              styles.costBar,
              {
                width: additionalCostBarWidth,
                backgroundColor: colors.additionalCost,
              },
            ]}
          />
        </View>
      </View>

      {/* Additional Cost Comment */}
      <View style={styles.commentBox}>
        <Text>Additional cost comment</Text>
        <Text>{additionalCostComment}</Text>
      </View>
    </View>
  );
};

export default CostControl;
