'use client';

import { useState } from 'react';

import CSVSelectorPapaParse from '@/components/CSVSelectorPapaParse';
import CSVReader from '@/components/CSVReader';

const PapaParse = () => {
  const [data, setData] = useState<string[][]>([]);

  return (
    <>
      <CSVSelectorPapaParse onChange={data => setData(data)} />
      <CSVReader data={data} />
    </>
  );
};

export default PapaParse;
