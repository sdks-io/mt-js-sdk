/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated LineItemApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { LineItemApi } from '../../controllers/lineItemApi.js';

export class LineItems extends APIResource {
  private _api?: LineItemApi;
  private get api(): LineItemApi {
    return (this._api ??= new LineItemApi(this._root._client));
  }

  /** `listLineItems` */
  list(
    ...args: Parameters<LineItemApi['listLineItems']>
  ): Promise<Body<LineItemApi['listLineItems']>> {
    return this.api.listLineItems(...args).then((r) => r.result);
  }

  /** `getLineItem` */
  retrieve(
    ...args: Parameters<LineItemApi['getLineItem']>
  ): Promise<Body<LineItemApi['getLineItem']>> {
    return this.api.getLineItem(...args).then((r) => r.result);
  }

  /** `updateLineItem` */
  update(
    ...args: Parameters<LineItemApi['updateLineItem']>
  ): Promise<Body<LineItemApi['updateLineItem']>> {
    return this.api.updateLineItem(...args).then((r) => r.result);
  }
}
