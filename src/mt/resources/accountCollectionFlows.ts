/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated AccountCollectionFlowApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { AccountCollectionFlowApi } from '../../controllers/accountCollectionFlowApi.js';

export class AccountCollectionFlows extends APIResource {
  private _api?: AccountCollectionFlowApi;
  private get api(): AccountCollectionFlowApi {
    return (this._api ??= new AccountCollectionFlowApi(this._root._client));
  }

  /** `listAccountCollectionFlows` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<AccountCollectionFlowApi['listAccountCollectionFlows']>
  ): Promise<Page<ElemOf<Body<AccountCollectionFlowApi['listAccountCollectionFlows']>>>> {
    return paginate((cursor) =>
      this.api.listAccountCollectionFlows(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<AccountCollectionFlowApi['listAccountCollectionFlows']>>>>;
  }

  /** `createAccountCollectionFlow` */
  create(
    ...args: Parameters<AccountCollectionFlowApi['createAccountCollectionFlow']>
  ): Promise<Body<AccountCollectionFlowApi['createAccountCollectionFlow']>> {
    return this.api.createAccountCollectionFlow(...args).then((r) => r.result);
  }

  /** `getAccountCollectionFlow` */
  retrieve(
    ...args: Parameters<AccountCollectionFlowApi['getAccountCollectionFlow']>
  ): Promise<Body<AccountCollectionFlowApi['getAccountCollectionFlow']>> {
    return this.api.getAccountCollectionFlow(...args).then((r) => r.result);
  }

  /** `updateAccountCollectionFlow` */
  update(
    ...args: Parameters<AccountCollectionFlowApi['updateAccountCollectionFlow']>
  ): Promise<Body<AccountCollectionFlowApi['updateAccountCollectionFlow']>> {
    return this.api.updateAccountCollectionFlow(...args).then((r) => r.result);
  }
}
