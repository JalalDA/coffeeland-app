// components/Loading.tsx
import React from 'react';

type Props ={
    border?:string
}

const Loading: React.FC = ({border = "bg-yellow-500"}:Props) => {
  return (
    // <div className="flex items-center justify-center h-screen">
      <div className={`animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 ${border}`}></div>
    // </div>
  );
};

export default Loading;
