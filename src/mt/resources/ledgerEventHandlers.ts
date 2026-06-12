/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated LedgerEventHandlerApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { LedgerEventHandlerApi } from '../../controllers/ledgerEventHandlerApi.js';

export class LedgerEventHandlers extends APIResource {
  private _api?: LedgerEventHandlerApi;
  private get api(): LedgerEventHandlerApi {
    return (this._api ??= new LedgerEventHandlerApi(this._root._client));
  }

  /** `listLedgerEventHandlers` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<LedgerEventHandlerApi['listLedgerEventHandlers']>
  ): Promise<Page<ElemOf<Body<LedgerEventHandlerApi['listLedgerEventHandlers']>>>> {
    return paginate((cursor) =>
      this.api.listLedgerEventHandlers(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<LedgerEventHandlerApi['listLedgerEventHandlers']>>>>;
  }

  /** `createLedgerEventHandler` */
  create(
    ...args: Parameters<LedgerEventHandlerApi['createLedgerEventHandler']>
  ): Promise<Body<LedgerEventHandlerApi['createLedgerEventHandler']>> {
    return this.api.createLedgerEventHandler(...args).then((r) => r.result);
  }

  /** `getLedgerEventHandler` */
  retrieve(
    ...args: Parameters<LedgerEventHandlerApi['getLedgerEventHandler']>
  ): Promise<Body<LedgerEventHandlerApi['getLedgerEventHandler']>> {
    return this.api.getLedgerEventHandler(...args).then((r) => r.result);
  }

  /** `deleteLedgerEventHandler` */
  del(
    ...args: Parameters<LedgerEventHandlerApi['deleteLedgerEventHandler']>
  ): Promise<Body<LedgerEventHandlerApi['deleteLedgerEventHandler']>> {
    return this.api.deleteLedgerEventHandler(...args).then((r) => r.result);
  }
}
