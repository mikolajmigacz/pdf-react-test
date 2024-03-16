import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    fontSize: 12,
    marginBottom: 8,
  },
  avatar: {
    borderRadius: 50,
    width: 25,
    height: 25,
    marginRight: 10,
  },
  commentBox: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    minHeight: 50,
    textAlign: "left",
    justifyContent: "center",
    fontSize: 10,
  },
});

export const StatusComment = ({
  avatarSrc,
  comment,
}: {
  avatarSrc: string;
  comment: string;
}) => (
  <View>
    <Text style={styles.label}>Status Comment:</Text>
    <View style={styles.container}>
      <Image style={styles.avatar} src={avatarSrc} />
      <Text style={styles.commentBox}>{comment}</Text>
    </View>
  </View>
);
