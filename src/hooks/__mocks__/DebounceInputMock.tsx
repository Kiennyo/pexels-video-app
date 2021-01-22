import React, { ChangeEvent, useState } from 'react';

import useDebounce from '@/hooks/useDebounce';

type DebounceInputMockProps = {
  testId: string;
};

const DebounceInputMock = ({ testId }: DebounceInputMockProps) => {
  const [inputValue, setInputValue] = useState('');
  const debounceValue = useDebounce({ value: inputValue, delay: 2000 });

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <span data-testid="target">{debounceValue}</span>
      <input data-testid={testId} onChange={handleChange} />
    </>
  );
};

export default DebounceInputMock;
