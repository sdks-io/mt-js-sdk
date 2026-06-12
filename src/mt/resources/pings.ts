/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated PingApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { PingApi } from '../../controllers/pingApi.js';

export class Pings extends APIResource {
  private _api?: PingApi;
  private get api(): PingApi {
    return (this._api ??= new PingApi(this._root._client));
  }

  /** `pingApi` */
  pingApi(
    ...args: Parameters<PingApi['pingApi']>
  ): Promise<Body<PingApi['pingApi']>> {
    return this.api.pingApi(...args).then((r) => r.result);
  }
}
