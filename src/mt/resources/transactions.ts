/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated TransactionApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { TransactionApi } from '../../controllers/transactionApi.js';
import { TransactionLineItems } from './transactionLineItems.js';

export class Transactions extends APIResource {
  private _api?: TransactionApi;
  private get api(): TransactionApi {
    return (this._api ??= new TransactionApi(this._root._client));
  }

  /** Nested sub-resource (mirrors Stainless `client.transactions.lineItems`). */
  readonly lineItems = new TransactionLineItems(this._root);

  /** `listTransactions` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<TransactionApi['listTransactions']>
  ): Promise<Page<ElemOf<Body<TransactionApi['listTransactions']>>>> {
    return paginate((cursor) =>
      this.api.listTransactions(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<TransactionApi['listTransactions']>>>>;
  }

  /** `getTransaction` */
  retrieve(
    ...args: Parameters<TransactionApi['getTransaction']>
  ): Promise<Body<TransactionApi['getTransaction']>> {
    return this.api.getTransaction(...args).then((r) => r.result);
  }

  /** `updateTransaction` */
  update(
    ...args: Parameters<TransactionApi['updateTransaction']>
  ): Promise<Body<TransactionApi['updateTransaction']>> {
    return this.api.updateTransaction(...args).then((r) => r.result);
  }
}
