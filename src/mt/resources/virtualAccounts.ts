/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated VirtualAccountApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { VirtualAccountApi } from '../../controllers/virtualAccountApi.js';

export class VirtualAccounts extends APIResource {
  private _api?: VirtualAccountApi;
  private get api(): VirtualAccountApi {
    return (this._api ??= new VirtualAccountApi(this._root._client));
  }

  /** `listVirtualAccounts` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<VirtualAccountApi['listVirtualAccounts']>
  ): Promise<Page<ElemOf<Body<VirtualAccountApi['listVirtualAccounts']>>>> {
    return paginate((cursor) =>
      this.api.listVirtualAccounts(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<VirtualAccountApi['listVirtualAccounts']>>>>;
  }

  /** `createVirtualAccount` */
  create(
    ...args: Parameters<VirtualAccountApi['createVirtualAccount']>
  ): Promise<Body<VirtualAccountApi['createVirtualAccount']>> {
    return this.api.createVirtualAccount(...args).then((r) => r.result);
  }

  /** `getVirtualAccount` */
  retrieve(
    ...args: Parameters<VirtualAccountApi['getVirtualAccount']>
  ): Promise<Body<VirtualAccountApi['getVirtualAccount']>> {
    return this.api.getVirtualAccount(...args).then((r) => r.result);
  }

  /** `updateVirtualAccount` */
  update(
    ...args: Parameters<VirtualAccountApi['updateVirtualAccount']>
  ): Promise<Body<VirtualAccountApi['updateVirtualAccount']>> {
    return this.api.updateVirtualAccount(...args).then((r) => r.result);
  }

  /** `deleteVirtualAccount` */
  del(
    ...args: Parameters<VirtualAccountApi['deleteVirtualAccount']>
  ): Promise<Body<VirtualAccountApi['deleteVirtualAccount']>> {
    return this.api.deleteVirtualAccount(...args).then((r) => r.result);
  }
}
