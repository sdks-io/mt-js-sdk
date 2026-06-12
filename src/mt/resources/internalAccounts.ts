/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated InternalAccountApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { InternalAccountApi } from '../../controllers/internalAccountApi.js';
import { BalanceReports } from './balanceReports.js';

export class InternalAccounts extends APIResource {
  private _api?: InternalAccountApi;
  private get api(): InternalAccountApi {
    return (this._api ??= new InternalAccountApi(this._root._client));
  }

  /** Nested sub-resource (mirrors Stainless `client.internalAccounts.balanceReports`). */
  readonly balanceReports = new BalanceReports(this._root);

  /** `listInternalAccounts` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<InternalAccountApi['listInternalAccounts']>
  ): Promise<Page<ElemOf<Body<InternalAccountApi['listInternalAccounts']>>>> {
    return paginate((cursor) =>
      this.api.listInternalAccounts(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<InternalAccountApi['listInternalAccounts']>>>>;
  }

  /** `createInternalAccount` */
  create(
    ...args: Parameters<InternalAccountApi['createInternalAccount']>
  ): Promise<Body<InternalAccountApi['createInternalAccount']>> {
    return this.api.createInternalAccount(...args).then((r) => r.result);
  }

  /** `getInternalAccount` */
  retrieve(
    ...args: Parameters<InternalAccountApi['getInternalAccount']>
  ): Promise<Body<InternalAccountApi['getInternalAccount']>> {
    return this.api.getInternalAccount(...args).then((r) => r.result);
  }

  /** `updateInternalAccount` */
  update(
    ...args: Parameters<InternalAccountApi['updateInternalAccount']>
  ): Promise<Body<InternalAccountApi['updateInternalAccount']>> {
    return this.api.updateInternalAccount(...args).then((r) => r.result);
  }
}
