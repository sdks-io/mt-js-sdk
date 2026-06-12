/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated LedgerTransactionApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { LedgerTransactionApi } from '../../controllers/ledgerTransactionApi.js';

export class LedgerTransactions extends APIResource {
  private _api?: LedgerTransactionApi;
  private get api(): LedgerTransactionApi {
    return (this._api ??= new LedgerTransactionApi(this._root._client));
  }

  /** `createLedgerTransactionReversal` */
  createLedgerTransactionReversal(
    ...args: Parameters<LedgerTransactionApi['createLedgerTransactionReversal']>
  ): Promise<Body<LedgerTransactionApi['createLedgerTransactionReversal']>> {
    return this.api.createLedgerTransactionReversal(...args).then((r) => r.result);
  }

  /** `listLedgerTransactionVersions` */
  listLedgerTransactionVersions(
    ...args: Parameters<LedgerTransactionApi['listLedgerTransactionVersions']>
  ): Promise<Body<LedgerTransactionApi['listLedgerTransactionVersions']>> {
    return this.api.listLedgerTransactionVersions(...args).then((r) => r.result);
  }

  /** `listLedgerTransactions` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<LedgerTransactionApi['listLedgerTransactions']>
  ): Promise<Page<ElemOf<Body<LedgerTransactionApi['listLedgerTransactions']>>>> {
    return paginate((cursor) =>
      this.api.listLedgerTransactions(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<LedgerTransactionApi['listLedgerTransactions']>>>>;
  }

  /** `createLedgerTransaction` */
  create(
    ...args: Parameters<LedgerTransactionApi['createLedgerTransaction']>
  ): Promise<Body<LedgerTransactionApi['createLedgerTransaction']>> {
    return this.api.createLedgerTransaction(...args).then((r) => r.result);
  }

  /** `getLedgerTransaction` */
  retrieve(
    ...args: Parameters<LedgerTransactionApi['getLedgerTransaction']>
  ): Promise<Body<LedgerTransactionApi['getLedgerTransaction']>> {
    return this.api.getLedgerTransaction(...args).then((r) => r.result);
  }

  /** `updateLedgerTransaction` */
  update(
    ...args: Parameters<LedgerTransactionApi['updateLedgerTransaction']>
  ): Promise<Body<LedgerTransactionApi['updateLedgerTransaction']>> {
    return this.api.updateLedgerTransaction(...args).then((r) => r.result);
  }

  /** `getLedgerTransactionVersions` */
  getLedgerTransactionVersions(
    ...args: Parameters<LedgerTransactionApi['getLedgerTransactionVersions']>
  ): Promise<Body<LedgerTransactionApi['getLedgerTransactionVersions']>> {
    return this.api.getLedgerTransactionVersions(...args).then((r) => r.result);
  }
}
