/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated ReversalApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { ReversalApi } from '../../controllers/reversalApi.js';

export class Reversals extends APIResource {
  private _api?: ReversalApi;
  private get api(): ReversalApi {
    return (this._api ??= new ReversalApi(this._root._client));
  }

  /** `listReversals` */
  list(
    ...args: Parameters<ReversalApi['listReversals']>
  ): Promise<Body<ReversalApi['listReversals']>> {
    return this.api.listReversals(...args).then((r) => r.result);
  }

  /** `createReversal` */
  create(
    ...args: Parameters<ReversalApi['createReversal']>
  ): Promise<Body<ReversalApi['createReversal']>> {
    return this.api.createReversal(...args).then((r) => r.result);
  }

  /** `getReversal` */
  retrieve(
    ...args: Parameters<ReversalApi['getReversal']>
  ): Promise<Body<ReversalApi['getReversal']>> {
    return this.api.getReversal(...args).then((r) => r.result);
  }
}
