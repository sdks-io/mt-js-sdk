/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated PaperItemApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { PaperItemApi } from '../../controllers/paperItemApi.js';

export class PaperItems extends APIResource {
  private _api?: PaperItemApi;
  private get api(): PaperItemApi {
    return (this._api ??= new PaperItemApi(this._root._client));
  }

  /** `listPaperItems` */
  list(
    ...args: Parameters<PaperItemApi['listPaperItems']>
  ): Promise<Body<PaperItemApi['listPaperItems']>> {
    return this.api.listPaperItems(...args).then((r) => r.result);
  }

  /** `getPaperItem` */
  retrieve(
    ...args: Parameters<PaperItemApi['getPaperItem']>
  ): Promise<Body<PaperItemApi['getPaperItem']>> {
    return this.api.getPaperItem(...args).then((r) => r.result);
  }
}
