'use client';

import { useState } from 'react';

import CSVReader from '@/components/CSVReader';
import CSVSelector from '@/components/CSVSelector';

export default function Home() {
  const [data, setData] = useState<string[][]>([]);

  return (
    <>
      <CSVSelector onChange={data => setData(data)} />
      <CSVReader data={data} />
    </>
  );
}
