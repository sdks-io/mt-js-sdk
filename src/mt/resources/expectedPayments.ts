/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated ExpectedPaymentApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { ExpectedPaymentApi } from '../../controllers/expectedPaymentApi.js';

export class ExpectedPayments extends APIResource {
  private _api?: ExpectedPaymentApi;
  private get api(): ExpectedPaymentApi {
    return (this._api ??= new ExpectedPaymentApi(this._root._client));
  }

  /** `listExpectedPayments` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<ExpectedPaymentApi['listExpectedPayments']>
  ): Promise<Page<ElemOf<Body<ExpectedPaymentApi['listExpectedPayments']>>>> {
    return paginate((cursor) =>
      this.api.listExpectedPayments(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<ExpectedPaymentApi['listExpectedPayments']>>>>;
  }

  /** `createExpectedPayment` */
  create(
    ...args: Parameters<ExpectedPaymentApi['createExpectedPayment']>
  ): Promise<Body<ExpectedPaymentApi['createExpectedPayment']>> {
    return this.api.createExpectedPayment(...args).then((r) => r.result);
  }

  /** `getExpectedPayment` */
  retrieve(
    ...args: Parameters<ExpectedPaymentApi['getExpectedPayment']>
  ): Promise<Body<ExpectedPaymentApi['getExpectedPayment']>> {
    return this.api.getExpectedPayment(...args).then((r) => r.result);
  }

  /** `updateExpectedPayment` */
  update(
    ...args: Parameters<ExpectedPaymentApi['updateExpectedPayment']>
  ): Promise<Body<ExpectedPaymentApi['updateExpectedPayment']>> {
    return this.api.updateExpectedPayment(...args).then((r) => r.result);
  }

  /** `deleteExpectedPayment` */
  del(
    ...args: Parameters<ExpectedPaymentApi['deleteExpectedPayment']>
  ): Promise<Body<ExpectedPaymentApi['deleteExpectedPayment']>> {
    return this.api.deleteExpectedPayment(...args).then((r) => r.result);
  }
}
