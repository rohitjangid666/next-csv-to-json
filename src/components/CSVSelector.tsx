interface CSVSelectorProps {
  onChange: (value: string[][]) => void;
}

const CSVSelector: React.FC<CSVSelectorProps> = ({ onChange }) => {
  const handleSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      try {
        const file = e.target.files[0];

        const fileUrl = URL.createObjectURL(file);
        const response = await fetch(fileUrl);
        const text = await response.text();
        const lines = text.split('\n'); // split the text by newline
        const data = lines.map(line => line.split(',')); // map through all the lines and split each line by comma.
        onChange(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form className='max-w-sm'>
      <label htmlFor='file-input' className='sr-only'>
        Choose file
      </label>

      <input
        type='file'
        name='file-input'
        id='file-input'
        onChange={handleSelectFile}
        className='block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400'
      />
    </form>
  );
};

export default CSVSelector;
