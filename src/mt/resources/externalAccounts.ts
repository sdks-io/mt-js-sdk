/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated ExternalAccountApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { ExternalAccountApi } from '../../controllers/externalAccountApi.js';

export class ExternalAccounts extends APIResource {
  private _api?: ExternalAccountApi;
  private get api(): ExternalAccountApi {
    return (this._api ??= new ExternalAccountApi(this._root._client));
  }

  /** `verifyExternalAccount` */
  verifyExternalAccount(
    ...args: Parameters<ExternalAccountApi['verifyExternalAccount']>
  ): Promise<Body<ExternalAccountApi['verifyExternalAccount']>> {
    return this.api.verifyExternalAccount(...args).then((r) => r.result);
  }

  /** `completeVerificationExternalAccount` */
  completeVerificationExternalAccount(
    ...args: Parameters<ExternalAccountApi['completeVerificationExternalAccount']>
  ): Promise<Body<ExternalAccountApi['completeVerificationExternalAccount']>> {
    return this.api.completeVerificationExternalAccount(...args).then((r) => r.result);
  }

  /** `listExternalAccounts` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<ExternalAccountApi['listExternalAccounts']>
  ): Promise<Page<ElemOf<Body<ExternalAccountApi['listExternalAccounts']>>>> {
    return paginate((cursor) =>
      this.api.listExternalAccounts(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<ExternalAccountApi['listExternalAccounts']>>>>;
  }

  /** `createExternalAccount` */
  create(
    ...args: Parameters<ExternalAccountApi['createExternalAccount']>
  ): Promise<Body<ExternalAccountApi['createExternalAccount']>> {
    return this.api.createExternalAccount(...args).then((r) => r.result);
  }

  /** `getExternalAccount` */
  retrieve(
    ...args: Parameters<ExternalAccountApi['getExternalAccount']>
  ): Promise<Body<ExternalAccountApi['getExternalAccount']>> {
    return this.api.getExternalAccount(...args).then((r) => r.result);
  }

  /** `updateExternalAccount` */
  update(
    ...args: Parameters<ExternalAccountApi['updateExternalAccount']>
  ): Promise<Body<ExternalAccountApi['updateExternalAccount']>> {
    return this.api.updateExternalAccount(...args).then((r) => r.result);
  }

  /** `deleteExternalAccount` */
  del(
    ...args: Parameters<ExternalAccountApi['deleteExternalAccount']>
  ): Promise<Body<ExternalAccountApi['deleteExternalAccount']>> {
    return this.api.deleteExternalAccount(...args).then((r) => r.result);
  }
}
