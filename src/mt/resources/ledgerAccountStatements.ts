/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated LedgerAccountStatementApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { LedgerAccountStatementApi } from '../../controllers/ledgerAccountStatementApi.js';

export class LedgerAccountStatements extends APIResource {
  private _api?: LedgerAccountStatementApi;
  private get api(): LedgerAccountStatementApi {
    return (this._api ??= new LedgerAccountStatementApi(this._root._client));
  }

  /** `createLedgerAccountStatement` */
  create(
    ...args: Parameters<LedgerAccountStatementApi['createLedgerAccountStatement']>
  ): Promise<Body<LedgerAccountStatementApi['createLedgerAccountStatement']>> {
    return this.api.createLedgerAccountStatement(...args).then((r) => r.result);
  }

  /** `getLedgerAccountStatement` */
  retrieve(
    ...args: Parameters<LedgerAccountStatementApi['getLedgerAccountStatement']>
  ): Promise<Body<LedgerAccountStatementApi['getLedgerAccountStatement']>> {
    return this.api.getLedgerAccountStatement(...args).then((r) => r.result);
  }
}
