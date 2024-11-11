import React from "react";
import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { useDebounce } from "./useDebounce.hook";

describe("useDebounce", () => {
	it("should update debounced value after delay", () => {
		vi.useFakeTimers();
		const value = "test";
		const delay = 1000;
		const { result } = renderHook(() => useDebounce(value, delay));

		expect(result.current).toBe(value);

		React.act(() => {
			vi.advanceTimersByTime(delay);
		});

		expect(result.current).toBe(value);

		vi.useRealTimers();
	});

	it("should set debounced value as undefined when input value is undefined", () => {
		vi.useFakeTimers();
		const value = undefined;
		const delay = 1000;
		const { result } = renderHook(() => useDebounce(value, delay));

		expect(result.current).toBeUndefined();

		React.act(() => {
			vi.advanceTimersByTime(delay);
		});

		expect(result.current).toBeUndefined();

		vi.useRealTimers();
	});

	it("should update debounced value immediately when delay is negative", () => {
		vi.useFakeTimers();
		const value = "test";
		const delay = -1;
		const { result } = renderHook(() => useDebounce(value, delay));

		expect(result.current).toBe(value);

		vi.useRealTimers();
	});
});