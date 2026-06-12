/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated EventApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { EventApi } from '../../controllers/eventApi.js';

export class Events extends APIResource {
  private _api?: EventApi;
  private get api(): EventApi {
    return (this._api ??= new EventApi(this._root._client));
  }

  /** `listEvents` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<EventApi['listEvents']>
  ): Promise<Page<ElemOf<Body<EventApi['listEvents']>>>> {
    return paginate((cursor) =>
      this.api.listEvents(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<EventApi['listEvents']>>>>;
  }

  /** `getEvent` */
  retrieve(
    ...args: Parameters<EventApi['getEvent']>
  ): Promise<Body<EventApi['getEvent']>> {
    return this.api.getEvent(...args).then((r) => r.result);
  }
}
