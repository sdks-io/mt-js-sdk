/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated ConnectionApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { ConnectionApi } from '../../controllers/connectionApi.js';

export class Connections extends APIResource {
  private _api?: ConnectionApi;
  private get api(): ConnectionApi {
    return (this._api ??= new ConnectionApi(this._root._client));
  }

  /** `listConnections` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<ConnectionApi['listConnections']>
  ): Promise<Page<ElemOf<Body<ConnectionApi['listConnections']>>>> {
    return paginate((cursor) =>
      this.api.listConnections(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<ConnectionApi['listConnections']>>>>;
  }
}
