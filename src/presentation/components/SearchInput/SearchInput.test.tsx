import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import SearchInput from './SearchInput.component';
import userEvent from '@testing-library/user-event';

describe('SearchInput', () => {
  let input: HTMLInputElement;
  let button: HTMLButtonElement;
  let clearIcon: HTMLElement;
  const handleSearch = vi.fn();

  beforeEach(() => {
    const { getByTestId, getByRole} = render(<SearchInput handleSearchInput={handleSearch} />);
    input = getByTestId('search-input') as HTMLInputElement;
    button = getByTestId("search-button") as HTMLButtonElement;
    clearIcon = getByRole('button');
  });

   it('should render the input field', () => {
    expect(input).toBeInTheDocument();
  });

  it('should update query state when typing in the input', () => {
    fireEvent.change(input, { target: { value: 'test query' } });
    expect(input).toHaveValue('test query');
  });

  it('should show the clear icon when there is text in the input', () => {
    userEvent.type(input, 'test query');
    expect(clearIcon).toBeInTheDocument();
  });

  it('should clear the input when clicking on the clear icon', () => {
    userEvent.type(input, 'test query');
    userEvent.click(clearIcon);
    expect(input).toHaveValue('');
  });

  it('should disable the search button when the input is empty', () => {
    expect(button).toBeDisabled();
  });

  it('should enable the search button when there is text in the input', () => {
    fireEvent.change(input, { target: { value: 'test query' } });
    expect(button).not.toBeDisabled();
  });

 it('should call handleSearch when the search button is clicked', async () => {
 
    render(<SearchInput button={true} handleSearchInput={handleSearch} />);
    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(handleSearch).toHaveBeenCalled();
    });
  });

   it('should trigger search when pressing Enter with query', async () => {
    render(<SearchInput button={false} handleSearchInput={handleSearch} />);
    fireEvent.change(input, { target: { value: 'test query' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    await waitFor(() => {
      expect(handleSearch).toHaveBeenCalled();
    });
  });
});
