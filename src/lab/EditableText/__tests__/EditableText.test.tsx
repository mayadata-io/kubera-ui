import { screen } from '@testing-library/dom';
import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { KuberaThemeProvider } from '../../../theme';
import { EditableText } from '../EditableText';

afterEach(cleanup);
jest.useFakeTimers();

describe('EditablText component', () => {
  it('Renders', () => {
    render(
      <KuberaThemeProvider platform="kubera-chaos">
        <EditableText
          value={'test value'}
          label="Text Input"
          type="text"
          disabled={false}
          onChange={() => console.log('change')}
        />
      </KuberaThemeProvider>
    );
    //get OutlinedInput byRole
    const editTextComponent = screen.getByTestId('editableText');
    const textValue = editTextComponent.querySelector('p') as HTMLElement;
    const editBtn = screen.getByTestId('edit-btn');

    //checking initial value of Typography
    expect(textValue.textContent).toBe('test value');

    //cilcking to change it to edit mode
    // typography replaced with input field
    fireEvent.click(editBtn); //first click
    const saveBtn = screen.getByTestId('save-btn');
    const input = editTextComponent.querySelector('input') as HTMLElement;
    // test the value in input field
    expect(input).toHaveProperty('type', 'text');
    expect(input).toHaveProperty('value', 'test value');
    fireEvent.click(saveBtn);
    fireEvent.click(editBtn);

    fireEvent.change(input, { target: { value: 'Good Day' } });
    fireEvent.click(saveBtn);
    expect(input).toHaveProperty('value', 'Good Day');
    // expect(textValue.textContent).toBe('test value');
  });
});
