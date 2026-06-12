/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated AccountDetailApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { AccountDetailApi } from '../../controllers/accountDetailApi.js';

export class AccountDetails extends APIResource {
  private _api?: AccountDetailApi;
  private get api(): AccountDetailApi {
    return (this._api ??= new AccountDetailApi(this._root._client));
  }

  /** `listAccountDetails` */
  list(
    ...args: Parameters<AccountDetailApi['listAccountDetails']>
  ): Promise<Body<AccountDetailApi['listAccountDetails']>> {
    return this.api.listAccountDetails(...args).then((r) => r.result);
  }

  /** `createAccountDetail` */
  create(
    ...args: Parameters<AccountDetailApi['createAccountDetail']>
  ): Promise<Body<AccountDetailApi['createAccountDetail']>> {
    return this.api.createAccountDetail(...args).then((r) => r.result);
  }

  /** `getAccountDetail` */
  retrieve(
    ...args: Parameters<AccountDetailApi['getAccountDetail']>
  ): Promise<Body<AccountDetailApi['getAccountDetail']>> {
    return this.api.getAccountDetail(...args).then((r) => r.result);
  }

  /** `deleteAccountDetail` */
  del(
    ...args: Parameters<AccountDetailApi['deleteAccountDetail']>
  ): Promise<Body<AccountDetailApi['deleteAccountDetail']>> {
    return this.api.deleteAccountDetail(...args).then((r) => r.result);
  }
}
