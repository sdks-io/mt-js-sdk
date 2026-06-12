/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated ReturnApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { ReturnApi } from '../../controllers/returnApi.js';

export class Returns extends APIResource {
  private _api?: ReturnApi;
  private get api(): ReturnApi {
    return (this._api ??= new ReturnApi(this._root._client));
  }

  /** `listReturns` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<ReturnApi['listReturns']>
  ): Promise<Page<ElemOf<Body<ReturnApi['listReturns']>>>> {
    return paginate((cursor) =>
      this.api.listReturns(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<ReturnApi['listReturns']>>>>;
  }

  /** `createReturn` */
  create(
    ...args: Parameters<ReturnApi['createReturn']>
  ): Promise<Body<ReturnApi['createReturn']>> {
    return this.api.createReturn(...args).then((r) => r.result);
  }

  /** `getReturn` */
  retrieve(
    ...args: Parameters<ReturnApi['getReturn']>
  ): Promise<Body<ReturnApi['getReturn']>> {
    return this.api.getReturn(...args).then((r) => r.result);
  }
}
