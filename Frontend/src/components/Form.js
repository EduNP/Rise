import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://www.rise-api.edunp.com.br/login');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const listData = () => {
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  }

  return (
    <div>
      <button onClick={listData}>Aperte aqui</button>   
    </div>
  );
};

export default Form;
