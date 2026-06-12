/**
 * Modern Treasury — auto-pagination (Tier 2, hand-authored).
 * Mirrors Stainless's cursor-based `Page`: `for await (const x of client.x.list()) {}`.
 * Modern Treasury returns the next cursor in the `X-After-Cursor` response header.
 */
import type { ApiResponse } from '../core.js';

function nextCursorOf(headers: Record<string, string> | undefined): string | null {
  if (!headers) return null;
  const v = headers['x-after-cursor'] ?? headers['X-After-Cursor'];
  return v && v.length ? v : null;
}

export class Page<T> implements AsyncIterable<T> {
  readonly data: T[];
  readonly afterCursor: string | null;
  readonly response: ApiResponse<T[]>;
  private readonly fetch: (cursor: string) => Promise<Page<T>>;

  constructor(
    response: ApiResponse<T[]>,
    fetch: (cursor: string) => Promise<Page<T>>
  ) {
    this.response = response;
    this.data = (response.result ?? []) as T[];
    this.afterCursor = nextCursorOf(response.headers);
    this.fetch = fetch;
  }

  hasNextPage(): boolean {
    return this.afterCursor != null && this.data.length > 0;
  }

  getNextPage(): Promise<Page<T>> {
    if (this.afterCursor == null) {
      throw new Error('No next page available.');
    }
    return this.fetch(this.afterCursor);
  }

  async *[Symbol.asyncIterator](): AsyncIterator<T> {
    let page: Page<T> | null = this;
    while (page) {
      for (const item of page.data) yield item;
      page = page.hasNextPage() ? await page.getNextPage() : null;
    }
  }
}

/**
 * Builds the first `Page` from a cursor-driven call. `call(undefined)` honors the
 * caller's original first-page args; subsequent pages pass the header cursor through.
 */
export async function paginate<T>(
  call: (cursor?: string) => Promise<ApiResponse<T[]>>
): Promise<Page<T>> {
  const build = (res: ApiResponse<T[]>): Page<T> =>
    new Page<T>(res, (cursor) => call(cursor).then(build));
  return build(await call(undefined));
}
