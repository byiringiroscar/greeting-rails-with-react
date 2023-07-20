import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Welcome to the random greeting !</h1>
      <Link to="/greeting">
        <button>Random Greeting</button>
      </Link>
    </section>
  );
}

export default Home;
