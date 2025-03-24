import { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const useReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    socket.on('reports', (data) => setReports(data));

    return () => {
      socket.off('reports');
    };
  }, []);

  const fetchReport = async (query) => {
    const response = await axios.post('http://localhost:3000/report', { query });
    setReports((prev) => [...prev, response.data]);
  };

  return { reports, fetchReport };
};

export default useReports;
