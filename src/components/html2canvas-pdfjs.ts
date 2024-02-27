import html2canvas from "html2canvas";
import jsPDF from "jspdf";
export const printDocument = () => {
  const input = document.getElementById("antdComponent");
  if (input) {
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      const doc = new jsPDF("p", "mm");
      let position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      doc.save("download.pdf");
    });
  } else {
    console.error('Element with id "capture" was not found.');
  }
};
