import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { textFontSize } from "../../../globals.const";

interface Task {
  modificationDate: string;
  type: string;
  user: string;
  value: any;
}

interface TaskListDocumentProps {
  taskList_meta: {
    activeTasks: string[];
  };
  taskList: {
    tasks: {
      [key: string]: Task;
    };
  };
}

interface TaskNameProps {
  taskName: string;
  isCompleted: boolean;
}

interface TaskDetailsProps {
  task: Task;
}

const styles = StyleSheet.create({
  section: {
    padding: 10,
    flexGrow: 1,
    backgroundColor: "white",
    borderRadius: "5px",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  taskDetails: {
    flexDirection: "column",
  },
  taskNameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  text: {
    fontSize: textFontSize,
  },
  smallerText: {
    fontSize: textFontSize - 4,
    color: "#808080",
  },
  taskCompleted: {
    color: "blue",
  },
  tick: {
    borderRadius: 50,
    width: 10,
    height: 10,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  actionableText: {
    border: "1px solid black",
    borderRadius: "3px",
    padding: "2px 4px",
    fontSize: textFontSize - 2,
  },
  orText: {
    marginHorizontal: "4px",
  },
});

const TaskName = ({ taskName, isCompleted }: TaskNameProps) => (
  <View style={styles.taskNameRow}>
    <Text style={[styles.text, isCompleted ? styles.taskCompleted : {}]}>
      {taskName}
    </Text>
    <View style={styles.tick}>
      <Text style={{ fontSize: 6, color: "white" }}>V</Text>
    </View>
  </View>
);

const TaskDetails = ({ task }: TaskDetailsProps) => (
  <Text style={styles.smallerText}>
    Filled by {task.user} on{" "}
    {new Date(task.modificationDate).toLocaleDateString()}
  </Text>
);

const UncompletedActions = () => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Text style={[styles.text, styles.actionableText]}>Fill in a form</Text>
    <Text style={[styles.text, styles.orText]}>or</Text>
    <Text style={[styles.text, styles.actionableText]}>attach file</Text>
  </View>
);

export const TaskList = ({
  taskList_meta,
  taskList,
}: TaskListDocumentProps) => (
  <View style={styles.section}>
    <Text style={styles.title}>Required tasks</Text>
    {taskList_meta.activeTasks.map((taskName) => {
      const task = taskList.tasks[taskName];
      const isCompleted = task !== undefined;
      return (
        <View style={styles.task} key={taskName}>
          <View style={styles.taskDetails}>
            <TaskName taskName={taskName} isCompleted={isCompleted} />
            {isCompleted && <TaskDetails task={task} />}
          </View>
          {!isCompleted && <UncompletedActions />}
        </View>
      );
    })}
  </View>
);
