/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated LedgerableEventApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { LedgerableEventApi } from '../../controllers/ledgerableEventApi.js';

export class LedgerableEvents extends APIResource {
  private _api?: LedgerableEventApi;
  private get api(): LedgerableEventApi {
    return (this._api ??= new LedgerableEventApi(this._root._client));
  }

  /** `createLedgerableEvent` */
  create(
    ...args: Parameters<LedgerableEventApi['createLedgerableEvent']>
  ): Promise<Body<LedgerableEventApi['createLedgerableEvent']>> {
    return this.api.createLedgerableEvent(...args).then((r) => r.result);
  }

  /** `getLedgerableEvent` */
  retrieve(
    ...args: Parameters<LedgerableEventApi['getLedgerableEvent']>
  ): Promise<Body<LedgerableEventApi['getLedgerableEvent']>> {
    return this.api.getLedgerableEvent(...args).then((r) => r.result);
  }
}
