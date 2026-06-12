/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated LedgerAccountPayoutApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { LedgerAccountPayoutApi } from '../../controllers/ledgerAccountPayoutApi.js';

export class LedgerAccountPayouts extends APIResource {
  private _api?: LedgerAccountPayoutApi;
  private get api(): LedgerAccountPayoutApi {
    return (this._api ??= new LedgerAccountPayoutApi(this._root._client));
  }

  /** `createLedgerAccountPayout` */
  create(
    ...args: Parameters<LedgerAccountPayoutApi['createLedgerAccountPayout']>
  ): Promise<Body<LedgerAccountPayoutApi['createLedgerAccountPayout']>> {
    return this.api.createLedgerAccountPayout(...args).then((r) => r.result);
  }

  /** `listLedgerAccountPayouts` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<LedgerAccountPayoutApi['listLedgerAccountPayouts']>
  ): Promise<Page<ElemOf<Body<LedgerAccountPayoutApi['listLedgerAccountPayouts']>>>> {
    return paginate((cursor) =>
      this.api.listLedgerAccountPayouts(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<LedgerAccountPayoutApi['listLedgerAccountPayouts']>>>>;
  }

  /** `getLedgerAccountPayout` */
  retrieve(
    ...args: Parameters<LedgerAccountPayoutApi['getLedgerAccountPayout']>
  ): Promise<Body<LedgerAccountPayoutApi['getLedgerAccountPayout']>> {
    return this.api.getLedgerAccountPayout(...args).then((r) => r.result);
  }

  /** `updateLedgerAccountPayout` */
  update(
    ...args: Parameters<LedgerAccountPayoutApi['updateLedgerAccountPayout']>
  ): Promise<Body<LedgerAccountPayoutApi['updateLedgerAccountPayout']>> {
    return this.api.updateLedgerAccountPayout(...args).then((r) => r.result);
  }
}
