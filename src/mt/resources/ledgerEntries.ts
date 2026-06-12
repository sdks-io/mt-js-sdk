/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated LedgerEntryApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { LedgerEntryApi } from '../../controllers/ledgerEntryApi.js';

export class LedgerEntries extends APIResource {
  private _api?: LedgerEntryApi;
  private get api(): LedgerEntryApi {
    return (this._api ??= new LedgerEntryApi(this._root._client));
  }

  /** `listLedgerEntries` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<LedgerEntryApi['listLedgerEntries']>
  ): Promise<Page<ElemOf<Body<LedgerEntryApi['listLedgerEntries']>>>> {
    return paginate((cursor) =>
      this.api.listLedgerEntries(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<LedgerEntryApi['listLedgerEntries']>>>>;
  }

  /** `getLedgerEntry` */
  retrieve(
    ...args: Parameters<LedgerEntryApi['getLedgerEntry']>
  ): Promise<Body<LedgerEntryApi['getLedgerEntry']>> {
    return this.api.getLedgerEntry(...args).then((r) => r.result);
  }
}
