import React from "react";
import Button from '@mui/material/Button';

const Home: React.FC = () => {
  return (
    <>
      <div className="p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">
          Hello, Tailwind and Material UI!
        </h1>
        <Button
          variant="contained"
          className="bg-blue-500 hover:bg-blue-700 text-white"
        >
          Material UI Button
        </Button>
      </div>
    </>
  );
};

export default Home;
