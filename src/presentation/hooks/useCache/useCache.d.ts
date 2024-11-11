export type CacheState<T> = {
	data: T;
	timestamp: number;
	expirationTime: number;
}

export type CacheHook = {
	expiresIn?: number;
}