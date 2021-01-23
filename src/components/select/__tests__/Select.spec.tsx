import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select, { SelectProps } from '@/components/select/Select';

const options = [
  { value: '1', label: 'One' },
  { value: '2', label: 'Two' },
  { value: '3', label: 'Three', disabled: true },
];

describe('Select Test', () => {
  const onChange = jest.fn(() => {});

  const renderSelect = (optionalProps?: Pick<SelectProps<string>, 'label' | 'helperText'>) => {
    render(<Select<string> id="target" options={options} onChange={onChange} {...optionalProps} />);
  };

  it("Clicking on select list item should render it's value in text input", () => {
    // Arrange
    renderSelect();
    const select = screen.getByRole('button');

    // Act
    fireEvent.mouseDown(select);

    act(() => {
      const options = screen.getAllByRole('option');
      userEvent.click(options[0]);
    });

    // Assert
    expect(select.textContent).toBe('One');
  });

  it('Passing down label and helper text should render them', () => {
    // Arrange
    renderSelect({ helperText: 'Helper text', label: 'Label text' });

    // Assert
    expect(screen.getByTestId('target-select-label-test-id').textContent).toBe('Label text');
    expect(screen.getByTestId('target-select-helper-text').textContent).toBe('Helper text');
  });

  it('Disabled option should be rendered as disabled', () => {
    // Arrange
    renderSelect();
    const select = screen.getByRole('button');

    // Act
    fireEvent.mouseDown(select);
    const options = screen.getAllByRole('option');
    const disabledOption = options[2];

    // Assert
    expect(disabledOption).toHaveAttribute('aria-disabled', 'true');
  });
});
