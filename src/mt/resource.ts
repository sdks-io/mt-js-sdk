/**
 * Modern Treasury — façade base class (Tier 2, hand-authored).
 * Holds the root client and unwraps ApiResponse<T> -> T.
 */
import type { Client } from '../client.js';
import type { ApiResponse } from '../core.js';

/** Minimal root contract to avoid a circular import with ModernTreasury. */
export interface FacadeRoot {
  readonly _client: Client;
}

/** Unwraps a controller method's `Promise<ApiResponse<T>>` return to `T`. */
export type Body<F extends (...args: any[]) => any> =
  Awaited<ReturnType<F>> extends ApiResponse<infer R> ? R : never;

/** Element type of an array (used to type paginated lists). */
export type ElemOf<T> = T extends ReadonlyArray<infer E> ? E : T;

export abstract class APIResource {
  constructor(protected readonly _root: FacadeRoot) {}
}
