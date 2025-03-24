import React from 'react';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

const ReportDisplay = ({ htmlReport }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.html(htmlReport, {
      callback: function (doc) {
        doc.save('reporte.pdf');
      },
      margin: [10, 10, 10, 10],
    });
  };

  const generateExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(htmlReport); // Convertir HTML a JSON para Excel
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Reporte');
    XLSX.writeFile(workbook, 'reporte.xlsx');
  };

  return (
    <div style={{ position: 'absolute', right: 0, top: 0, width: '30%' }}>
      <div dangerouslySetInnerHTML={{ __html: htmlReport }} />
      <button onClick={generatePDF}>Descargar PDF</button>
      <button onClick={generateExcel}>Descargar Excel</button>
    </div>
  );
};

export default ReportDisplay;
