import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import { textFontSize } from "../../../globals.const";

type CostItemType = {
  name: string;
  cost: string;
  color: string;
};

type CostControlProps = {
  estimatedCost: string;
  costs: CostItemType[];
  additionalCostComment: string;
};

type CostBarProps = {
  cost: string;
  total: string;
  color: string;
  offset?: string;
};

const calculatePercentage = (value: string, total: string): string =>
  `${Math.min(100, (parseFloat(value) / parseFloat(total)) * 100)}%`;

const calculateOffset = (
  costs: CostItemType[],
  total: string,
  index: number
): string =>
  `${costs
    .slice(0, index)
    .reduce(
      (acc, costItem) =>
        acc +
        Math.min(100, (parseFloat(costItem.cost) / parseFloat(total)) * 100),
      0
    )}%`;

const styles = StyleSheet.create({
  section: { width: "100%", fontSize: textFontSize },
  costItem: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  costLabel: { flexDirection: "row", alignItems: "center", width: "50%" },
  costValue: { width: "20%", textAlign: "right" },
  costBarContainer: {
    position: "relative",
    width: "30%",
    height: 10,
    borderRadius: 2,
    marginLeft: 5,
  },
  costBar: { position: "absolute", height: "100%", borderRadius: 2 },
  colorIndicator: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    marginRight: 5,
  },
  commentBox: { marginTop: 5, padding: 5 },
});

const CostBar: React.FC<CostBarProps> = ({
  cost,
  total,
  color,
  offset = 0,
}) => (
  <View
    style={[
      styles.costBar,
      {
        width: calculatePercentage(cost, total),
        backgroundColor: color,
        left: offset,
      },
    ]}
  />
);

type CostItemProps = {
  label: string;
  value: string;
  costs?: CostItemType[];
  total?: string;
  barColor?: string;
};

const CostItem: React.FC<CostItemProps> = ({
  label,
  value,
  costs,
  total,
  barColor = "transparent",
}) => (
  <View style={styles.costItem}>
    <Text style={styles.costLabel}>{label}</Text>
    <Text style={styles.costValue}>{value}</Text>
    <View style={styles.costBarContainer}>
      {costs && total ? (
        costs.map((costItem, index) => (
          <CostBar
            key={index}
            cost={costItem.cost}
            total={total}
            color={costItem.color}
            offset={calculateOffset(costs, total, index)}
          />
        ))
      ) : (
        <View
          style={[styles.costBar, { width: "100%", backgroundColor: barColor }]}
        />
      )}
    </View>
  </View>
);

export const CostControl: React.FC<CostControlProps> = ({
  estimatedCost,
  costs,
  additionalCostComment,
}) => {
  const realCost = costs
    .reduce((sum, { cost }) => sum + parseFloat(cost), 0)
    .toFixed(2);

  return (
    <View style={styles.section}>
      <Text>Cost control:</Text>
      <CostItem
        label="Estimated cost"
        value={`${parseFloat(estimatedCost).toFixed(2)} €`}
        barColor="#DDD"
      />
      <CostItem
        label="Real cost"
        value={`${realCost} €`}
        costs={costs}
        total={estimatedCost}
      />
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
          <Text style={styles.costValue}>
            {parseFloat(costItem.cost).toFixed(2)} €
          </Text>
          <View style={styles.costBarContainer}>
            <CostBar
              cost={costItem.cost}
              total={estimatedCost}
              color={costItem.color}
            />
          </View>
        </View>
      ))}
      <View style={styles.commentBox}>
        <Text>Additional cost comment</Text>
        <Text>{additionalCostComment}</Text>
      </View>
    </View>
  );
};
