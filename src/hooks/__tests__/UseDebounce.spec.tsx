import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DebounceInputMock from '@/hooks/__mocks__/DebounceInputMock';

describe('Test Debounce input', () => {
  const validateAfterDelay = async (textToCheck: string, timeout: number) => {
    await waitFor(
      () => {
        expect(screen.getByTestId('target')).toHaveTextContent(textToCheck);
      },
      { timeout }
    );
  };

  it('Value should be shown after delay', async () => {
    // Arrange
    const testId = 'debounce-input';
    render(<DebounceInputMock testId={testId} />);
    const input = screen.getByTestId(testId);

    // Act
    act(() => {
      userEvent.click(input);
      userEvent.type(input, 'Dum');
    });

    // Assert
    await validateAfterDelay('', 1000);
    await validateAfterDelay('Dum', 2000);
  });
});
