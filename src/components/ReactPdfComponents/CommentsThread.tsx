import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { textFontSize } from "../../globals.const";

interface Comment {
  author: string;
  timestamp: string;
  text: string;
}

interface CommentsProps {
  comments: Array<Comment>;
}

const styles = StyleSheet.create({
  commentSection: { flexDirection: "column", gap: 20 },
  comment: { flexDirection: "row", alignItems: "center" },
  badge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  badgeText: { color: "white", fontSize: textFontSize },
  authorTimestamp: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  author: { fontSize: textFontSize, marginRight: 5 },
  timestamp: { fontSize: textFontSize - 2, color: "#777" },
  text: { fontSize: textFontSize },
});

const Comment = ({ author, timestamp, text }: Comment) => {
  const initials = author
    .split(" ")
    .map((name) => name[0])
    .join("");
  return (
    <View style={styles.comment}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{initials}</Text>
      </View>
      <View>
        <View style={styles.authorTimestamp}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.timestamp}>{timestamp}</Text>
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

export const CommentsThread = ({ comments }: CommentsProps) => (
  <View style={styles.commentSection}>
    {comments.map((comment, index) => (
      <Comment key={index} {...comment} />
    ))}
  </View>
);

export const mockComments = [
  { author: "ANT Serwis", timestamp: "12.03.2024 10:33", text: "test" },
  { author: "ANT Serwis", timestamp: "12.03.2024 10:33", text: "testy" },
];
