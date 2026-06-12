/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated LedgerAccountApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { LedgerAccountApi } from '../../controllers/ledgerAccountApi.js';

export class LedgerAccounts extends APIResource {
  private _api?: LedgerAccountApi;
  private get api(): LedgerAccountApi {
    return (this._api ??= new LedgerAccountApi(this._root._client));
  }

  /** `listLedgerAccounts` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<LedgerAccountApi['listLedgerAccounts']>
  ): Promise<Page<ElemOf<Body<LedgerAccountApi['listLedgerAccounts']>>>> {
    return paginate((cursor) =>
      this.api.listLedgerAccounts(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<LedgerAccountApi['listLedgerAccounts']>>>>;
  }

  /** `createLedgerAccount` */
  create(
    ...args: Parameters<LedgerAccountApi['createLedgerAccount']>
  ): Promise<Body<LedgerAccountApi['createLedgerAccount']>> {
    return this.api.createLedgerAccount(...args).then((r) => r.result);
  }

  /** `getLedgerAccount` */
  retrieve(
    ...args: Parameters<LedgerAccountApi['getLedgerAccount']>
  ): Promise<Body<LedgerAccountApi['getLedgerAccount']>> {
    return this.api.getLedgerAccount(...args).then((r) => r.result);
  }

  /** `updateLedgerAccount` */
  update(
    ...args: Parameters<LedgerAccountApi['updateLedgerAccount']>
  ): Promise<Body<LedgerAccountApi['updateLedgerAccount']>> {
    return this.api.updateLedgerAccount(...args).then((r) => r.result);
  }

  /** `deleteLedgerAccount` */
  del(
    ...args: Parameters<LedgerAccountApi['deleteLedgerAccount']>
  ): Promise<Body<LedgerAccountApi['deleteLedgerAccount']>> {
    return this.api.deleteLedgerAccount(...args).then((r) => r.result);
  }
}
