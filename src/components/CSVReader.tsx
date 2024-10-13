import type { DataType } from '@/types/data';

const CSVReader: React.FC<DataType> = ({ data }) => {
  const headers = data[0];
  const rows = data.slice(1);

  return data.length > 0 ? (
    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-12'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          {headers?.map((header, i) => (
            <th key={i} scope='col' className='px-6 py-3'>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map((rowData, i) => {
          return (
            <tr
              key={i}
              className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
            >
              {rowData?.map((data, i) => {
                return (
                  <td key={i} className='px-6 py-4'>
                    {data}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  ) : (
    <h6 className='mt-8 text-3xl font-semibold'>No Data</h6>
  );
};

export default CSVReader;
