import React from "react";
import {
  Document,
  Page,
  Image,
  StyleSheet,
  View,
  Text,
} from "@react-pdf/renderer";
import { Input } from "./Input";
import { labelFontSize } from "../../../globals.const";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    gap: 5,
  },
  imagesRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  infoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});

export const Camera = ({ label, data }: { label: string; data: any }) => {
  if (!data) return <View />;
  return (
    <View style={styles.page}>
      <Text style={{ fontSize: labelFontSize }}>{label + ":"}</Text>

      {/* Images */}
      <View style={styles.imagesRow}>
        {data.images.map((imageId: any, index: number) => (
          <Text>{imageId}</Text>
          // <Image
          //   key={index}
          //   style={styles.image}
          //   src={`path-to-your-images/${imageId}.jpg`}
          // />
        ))}
      </View>
      {/* Details */}
      <View style={styles.infoContainer}>
        <Input label="Location" value={data.location} />
        <Input label="Category" value={data.category} />
        <Input label="Subcategory" value={data.subcategory} />
        <Input label="Tags" value={data.tags.join(", ")} />
      </View>
      <View style={styles.infoContainer}>
        <Input label="Comment" value={data.comment} />
      </View>
    </View>
  );
};
