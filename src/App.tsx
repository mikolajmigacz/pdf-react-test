import React from "react";
import "./App.css";
import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import { HTMLDocument } from "./components/Documents/HTMLDocument";
import { MyDocument } from "./components/Documents/MyDocument";
import { CustomPdfComponentsDocument } from "./components/Documents/CustomPdfComponentsDocument";
import { StyledComponentDocument } from "./components/Documents/StyledComponentDocument";

import { CustomInput } from "./components/AntDesignComponents/CustomInput";
import { printDocument } from "./components/html2canvas-pdfjs";
import { MainDocument } from "./components/Documents/MainDocument";
React.useLayoutEffect = React.useEffect;
const styles = StyleSheet.create({
  PDFViewer: {
    width: "100%",
    height: "100%",
  },
});

function App() {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <button onClick={printDocument}>Download jspdf PDF</button>
      <PDFViewer style={styles.PDFViewer}>
        {/* uncomment one to see different pdf */}
        <CustomPdfComponentsDocument />
        {/* <StyledComponentDocument /> */}
        {/* <MyDocument /> */}
        {/* <HTMLDocument /> */}
        {/* <MainDocument /> */}
      </PDFViewer>
    </div>
  );
}

export default App;
