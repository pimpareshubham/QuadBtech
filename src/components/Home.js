import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ShowCard from './ShowCard';
import "./Home.css"

const Home = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data);
        localStorage.setItem('response', JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-light">TV Shows 🎬</h1>
      <div className="row">
        {shows.map(show => (
          <ShowCard key={show.show.id} show={show.show} />
        ))}
      </div>
    </div>
  );
};

export default Home;
