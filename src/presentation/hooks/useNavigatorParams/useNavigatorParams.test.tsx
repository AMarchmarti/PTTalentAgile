/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'; 
import { renderHook } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useNavigatorParams } from './useNavigatorParams.hook';

describe('useNavigatorParams', () => {
  it('should return correct value for existing key', () => {
    const wrapper = ({ children }: any) => <MemoryRouter>{children}</MemoryRouter>;
    const { result } = renderHook(() => useNavigatorParams(), { wrapper });
    result.current.set('testKey', 'testValue');
    expect(result.current.get('testKey')).toBe('testValue');
  });

  it('should return null for non-existing key', () => {
    const wrapper = ({ children }: any) => <MemoryRouter>{children}</MemoryRouter>;
    const { result } = renderHook(() => useNavigatorParams(), { wrapper });
    expect(result.current.get('nonExistingKey')).toBeNull();
  });

  it('should set empty string as value', () => {
    const wrapper = ({ children }: any) => <MemoryRouter>{children}</MemoryRouter>;
    const { result } = renderHook(() => useNavigatorParams(), { wrapper });
    result.current.set('emptyKey', '');
    expect(result.current.get('emptyKey')).toBe('');
  });
});