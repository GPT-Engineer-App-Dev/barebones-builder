import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const HomePage = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">My Counter App</h1>
      </header>

      <main className="flex-grow p-4">
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Counter</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl mb-4">Count: {count}</p>
            <Button onClick={incrementCount}>Increment</Button>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 My Counter App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;