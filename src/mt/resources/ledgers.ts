/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated LedgerApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { LedgerApi } from '../../controllers/ledgerApi.js';

export class Ledgers extends APIResource {
  private _api?: LedgerApi;
  private get api(): LedgerApi {
    return (this._api ??= new LedgerApi(this._root._client));
  }

  /** `listLedgers` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<LedgerApi['listLedgers']>
  ): Promise<Page<ElemOf<Body<LedgerApi['listLedgers']>>>> {
    return paginate((cursor) =>
      this.api.listLedgers(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<LedgerApi['listLedgers']>>>>;
  }

  /** `createLedger` */
  create(
    ...args: Parameters<LedgerApi['createLedger']>
  ): Promise<Body<LedgerApi['createLedger']>> {
    return this.api.createLedger(...args).then((r) => r.result);
  }

  /** `getLedger` */
  retrieve(
    ...args: Parameters<LedgerApi['getLedger']>
  ): Promise<Body<LedgerApi['getLedger']>> {
    return this.api.getLedger(...args).then((r) => r.result);
  }

  /** `updateLedger` */
  update(
    ...args: Parameters<LedgerApi['updateLedger']>
  ): Promise<Body<LedgerApi['updateLedger']>> {
    return this.api.updateLedger(...args).then((r) => r.result);
  }

  /** `deleteLedger` */
  del(
    ...args: Parameters<LedgerApi['deleteLedger']>
  ): Promise<Body<LedgerApi['deleteLedger']>> {
    return this.api.deleteLedger(...args).then((r) => r.result);
  }
}
