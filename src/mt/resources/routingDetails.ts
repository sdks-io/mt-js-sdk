/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated RoutingDetailApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { RoutingDetailApi } from '../../controllers/routingDetailApi.js';

export class RoutingDetails extends APIResource {
  private _api?: RoutingDetailApi;
  private get api(): RoutingDetailApi {
    return (this._api ??= new RoutingDetailApi(this._root._client));
  }

  /** `listRoutingDetails` */
  list(
    ...args: Parameters<RoutingDetailApi['listRoutingDetails']>
  ): Promise<Body<RoutingDetailApi['listRoutingDetails']>> {
    return this.api.listRoutingDetails(...args).then((r) => r.result);
  }

  /** `createRoutingDetail` */
  create(
    ...args: Parameters<RoutingDetailApi['createRoutingDetail']>
  ): Promise<Body<RoutingDetailApi['createRoutingDetail']>> {
    return this.api.createRoutingDetail(...args).then((r) => r.result);
  }

  /** `getRoutingDetail` */
  retrieve(
    ...args: Parameters<RoutingDetailApi['getRoutingDetail']>
  ): Promise<Body<RoutingDetailApi['getRoutingDetail']>> {
    return this.api.getRoutingDetail(...args).then((r) => r.result);
  }

  /** `deleteRoutingDetail` */
  del(
    ...args: Parameters<RoutingDetailApi['deleteRoutingDetail']>
  ): Promise<Body<RoutingDetailApi['deleteRoutingDetail']>> {
    return this.api.deleteRoutingDetail(...args).then((r) => r.result);
  }
}
