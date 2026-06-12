/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated TransactionLineItemApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { TransactionLineItemApi } from '../../controllers/transactionLineItemApi.js';

export class TransactionLineItems extends APIResource {
  private _api?: TransactionLineItemApi;
  private get api(): TransactionLineItemApi {
    return (this._api ??= new TransactionLineItemApi(this._root._client));
  }

  /** `listTransactionLineItems` */
  list(
    ...args: Parameters<TransactionLineItemApi['listTransactionLineItems']>
  ): Promise<Body<TransactionLineItemApi['listTransactionLineItems']>> {
    return this.api.listTransactionLineItems(...args).then((r) => r.result);
  }
}
