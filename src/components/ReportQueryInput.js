import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
// import htmlContent from "../mocks/mock";


const ReportQueryInput = () => {
  const [query, setQuery] = useState("");
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchReport = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/report/query", {
        query,
      });
      setHtmlContent(response.data.htmlReport); // Recibe el HTML del reporte generado
    } catch (error) {
      console.error("Error al obtener el reporte", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2>Generador de Reportes IA</h2>
      <TextArea
        value={query}
        onChange={handleQueryChange}
        placeholder="Haz una consulta"
        maxLength="250"
        rows="4"
      />
      <Button onClick={fetchReport}>Generar Reporte</Button>
      <ReportContainer>
        {loading ? (
          <LoaderContainer>
            <img src="https://i.gifer.com/ZZ5H.gif" alt="Loading..." />
            <LoaderText>Generando reporte...</LoaderText>
          </LoaderContainer>
        ) : htmlContent ? (
          <iframe
            srcDoc={htmlContent}
            title="report"
            style={{ width: "100%",  height: "100%" }}
          />
        ) : (
          <p>No hay reporte generado</p>
        )}
      </ReportContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
  // background-color: transparent;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 16px;
  resize: none;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ReportContainer = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  p{
    text-align: center;
    padding-top: 20px;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  img {
    width: 60px;
  }
`;

const LoaderText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: #555;
`;

export default ReportQueryInput;