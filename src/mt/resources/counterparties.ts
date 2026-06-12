/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated CounterpartyApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { CounterpartyApi } from '../../controllers/counterpartyApi.js';

export class Counterparties extends APIResource {
  private _api?: CounterpartyApi;
  private get api(): CounterpartyApi {
    return (this._api ??= new CounterpartyApi(this._root._client));
  }

  /** `collectAccountDetails` */
  collectAccountDetails(
    ...args: Parameters<CounterpartyApi['collectAccountDetails']>
  ): Promise<Body<CounterpartyApi['collectAccountDetails']>> {
    return this.api.collectAccountDetails(...args).then((r) => r.result);
  }

  /** `listCounterparties` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<CounterpartyApi['listCounterparties']>
  ): Promise<Page<ElemOf<Body<CounterpartyApi['listCounterparties']>>>> {
    return paginate((cursor) =>
      this.api.listCounterparties(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<CounterpartyApi['listCounterparties']>>>>;
  }

  /** `createCounterparty` */
  create(
    ...args: Parameters<CounterpartyApi['createCounterparty']>
  ): Promise<Body<CounterpartyApi['createCounterparty']>> {
    return this.api.createCounterparty(...args).then((r) => r.result);
  }

  /** `getCounterparty` */
  retrieve(
    ...args: Parameters<CounterpartyApi['getCounterparty']>
  ): Promise<Body<CounterpartyApi['getCounterparty']>> {
    return this.api.getCounterparty(...args).then((r) => r.result);
  }

  /** `updateCounterparty` */
  update(
    ...args: Parameters<CounterpartyApi['updateCounterparty']>
  ): Promise<Body<CounterpartyApi['updateCounterparty']>> {
    return this.api.updateCounterparty(...args).then((r) => r.result);
  }

  /** `deleteCounterparty` */
  del(
    ...args: Parameters<CounterpartyApi['deleteCounterparty']>
  ): Promise<Body<CounterpartyApi['deleteCounterparty']>> {
    return this.api.deleteCounterparty(...args).then((r) => r.result);
  }
}
