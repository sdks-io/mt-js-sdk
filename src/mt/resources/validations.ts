/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated ValidationApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { ValidationApi } from '../../controllers/validationApi.js';

export class Validations extends APIResource {
  private _api?: ValidationApi;
  private get api(): ValidationApi {
    return (this._api ??= new ValidationApi(this._root._client));
  }

  /** `validateRoutingNumber` */
  validateRoutingNumber(
    ...args: Parameters<ValidationApi['validateRoutingNumber']>
  ): Promise<Body<ValidationApi['validateRoutingNumber']>> {
    return this.api.validateRoutingNumber(...args).then((r) => r.result);
  }
}
