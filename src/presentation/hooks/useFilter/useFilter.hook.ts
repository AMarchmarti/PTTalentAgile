import { useEffect, useRef, useState } from "react";
import type React from "react";

import { useDebounce } from "../useDebounce/useDebounce.hook";



export const useFilter = ({ initialValue, onChange }: HookType) => {
	const [input, setInput] = useState<string>(initialValue || "");
	const ref = useRef<HTMLInputElement>(null);
	const searchDebounced = useDebounce(input, 600);

	useEffect(() => {
		if (input !== initialValue && onChange) {
			onChange(input);
		}
	}, [searchDebounced]);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setInput(event.target.value);
	}

	return {
		handleChange,
		input,
		ref,
	};
};