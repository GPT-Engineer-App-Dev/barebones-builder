import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

const SimplePage = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Simple Counter</h1>
      </header>
      
      <Button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Clicked {count} times
      </Button>
    </div>
  );
};

export default SimplePage;