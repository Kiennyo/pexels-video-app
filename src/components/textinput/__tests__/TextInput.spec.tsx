import React, { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchIcon from '@material-ui/icons/Search';

import TextInput from '@/components/textinput/TextInput';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';

describe('TextInput Test', () => {
  const onChange = jest.fn(() => {});

  const renderTextInput = (icon?: ReactNode) => render(<TextInput icon={icon} id="target" onChange={onChange} />);

  it('Should render icon when provided', () => {
    // Arrange
    renderTextInput(<SearchIcon />);

    // Assert
    expect(screen.getByTestId('target-icon-test-id')).toBeInTheDocument();
  });

  it('Should call onChange when value changes', () => {
    // Arrange
    const input = renderTextInput().container.querySelector('#target-input') as HTMLInputElement;

    // Act
    userEvent.type(input, 'Test');

    // Assert
    expect(onChange).toBeCalledTimes(4);
  });
});
