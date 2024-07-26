import React from 'react';

const App = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center gap-10 min-h-screen">
      <div className="max-w-lg mx-auto bg-secondary p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Hello, Tailwind!</h1>
        <p>tailwind 설정으로 테마 컬러를 설정하고 사용해봅니다.</p>
        <button className="mt-4 bg-primary text-white py-2 px-4 rounded">Primary Button</button>
      </div>
      <div className="max-w-lg mx-auto bg-primary p-6 rounded-lg border shadow-md">
        <h1 className="text-2xl font-bold mb-4">Hello, Tailwind!</h1>
        <p>tailwind 설정으로 테마 컬러를 설정하고 사용해봅니다.</p>
        <button className="mt-4 bg-secondary text-white py-2 px-4 rounded">Secondary Button</button>
      </div>
    </div>
  );
};

export default App;
