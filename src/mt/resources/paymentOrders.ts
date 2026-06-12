/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated PaymentOrderApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { PaymentOrderApi } from '../../controllers/paymentOrderApi.js';
import { Reversals } from './reversals.js';

export class PaymentOrders extends APIResource {
  private _api?: PaymentOrderApi;
  private get api(): PaymentOrderApi {
    return (this._api ??= new PaymentOrderApi(this._root._client));
  }

  /** Nested sub-resource (mirrors Stainless `client.paymentOrders.reversals`). */
  readonly reversals = new Reversals(this._root);

  /** `createAsyncPaymentOrder` */
  createAsyncPaymentOrder(
    ...args: Parameters<PaymentOrderApi['createAsyncPaymentOrder']>
  ): Promise<Body<PaymentOrderApi['createAsyncPaymentOrder']>> {
    return this.api.createAsyncPaymentOrder(...args).then((r) => r.result);
  }

  /** `listPaymentOrders` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<PaymentOrderApi['listPaymentOrders']>
  ): Promise<Page<ElemOf<Body<PaymentOrderApi['listPaymentOrders']>>>> {
    return paginate((cursor) =>
      this.api.listPaymentOrders(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<PaymentOrderApi['listPaymentOrders']>>>>;
  }

  /** `createPaymentOrder` */
  create(
    ...args: Parameters<PaymentOrderApi['createPaymentOrder']>
  ): Promise<Body<PaymentOrderApi['createPaymentOrder']>> {
    return this.api.createPaymentOrder(...args).then((r) => r.result);
  }

  /** `getPaymentOrder` */
  retrieve(
    ...args: Parameters<PaymentOrderApi['getPaymentOrder']>
  ): Promise<Body<PaymentOrderApi['getPaymentOrder']>> {
    return this.api.getPaymentOrder(...args).then((r) => r.result);
  }

  /** `updatePaymentOrder` */
  update(
    ...args: Parameters<PaymentOrderApi['updatePaymentOrder']>
  ): Promise<Body<PaymentOrderApi['updatePaymentOrder']>> {
    return this.api.updatePaymentOrder(...args).then((r) => r.result);
  }
}
