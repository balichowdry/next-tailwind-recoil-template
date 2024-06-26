import { BeakerIcon } from '@heroicons/react/20/solid';
import React from 'react';

const TestHeader: React.FC = () => {
  return (
    <header>
      <h1 className="text-2xl font-bold inline-block align-middle mr-2">
        Next JS Test!
      </h1>
      <BeakerIcon className="inline-block align-middle w-6" />
    </header>
  );
};
export default React.memo(TestHeader);
