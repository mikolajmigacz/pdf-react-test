import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const calculateWidth = (cost: string, estimatedCost: string): string => {
  const ratio = parseFloat(cost) / parseFloat(estimatedCost);
  return `${Math.min(100, ratio * 100)}%`;
};

const calculateLeftOffset = (
  costs: Array<{ name: string; cost: string; color: string }>,
  estimatedCost: string,
  index: number
) => {
  let offset = 0;
  for (let i = 0; i < index; i++) {
    const ratio = parseFloat(costs[i].cost) / parseFloat(estimatedCost);
    offset += Math.min(100, ratio * 100);
  }
  return `${offset}%`;
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
    flexDirection: "row",
    alignItems: "center",
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
  costs,
  additionalCostComment,
}: {
  estimatedCost: string;
  costs: Array<{ name: string; cost: string; color: string }>;
  additionalCostComment: string;
}) => {
  const realCost = costs
    .reduce((sum, { cost }) => sum + parseFloat(cost), 0)
    .toFixed(2);

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
                backgroundColor: "#DDD",
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
          {costs.map((costItem, index) => (
            <View
              key={index}
              style={[
                styles.costBar,
                {
                  width: calculateWidth(costItem.cost, estimatedCost),
                  backgroundColor: costItem.color,
                  left: calculateLeftOffset(costs, estimatedCost, index),
                },
              ]}
            />
          ))}
        </View>
      </View>

      {/* Dynamically Rendered Cost Items */}
      {costs.map((costItem, index) => (
        <View key={index} style={styles.costItem}>
          <View style={[styles.costLabel, { paddingLeft: "2%" }]}>
            <View
              style={[
                styles.colorIndicator,
                { backgroundColor: costItem.color },
              ]}
            />
            <Text>{costItem.name}</Text>
          </View>
          <Text style={styles.costValue}>{costItem.cost} €</Text>
          <View style={styles.costBarContainer}>
            <View
              style={[
                styles.costBar,
                {
                  width: calculateWidth(costItem.cost, estimatedCost),
                  backgroundColor: costItem.color,
                },
              ]}
            />
          </View>
        </View>
      ))}

      {/* Additional Cost Comment */}
      <View style={styles.commentBox}>
        <Text>Additional cost comment</Text>
        <Text>{additionalCostComment}</Text>
      </View>
    </View>
  );
};

export default CostControl;
