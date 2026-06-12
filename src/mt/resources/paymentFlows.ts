/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated PaymentFlowApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { PaymentFlowApi } from '../../controllers/paymentFlowApi.js';

export class PaymentFlows extends APIResource {
  private _api?: PaymentFlowApi;
  private get api(): PaymentFlowApi {
    return (this._api ??= new PaymentFlowApi(this._root._client));
  }

  /** `listPaymentFlows` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<PaymentFlowApi['listPaymentFlows']>
  ): Promise<Page<ElemOf<Body<PaymentFlowApi['listPaymentFlows']>>>> {
    return paginate((cursor) =>
      this.api.listPaymentFlows(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<PaymentFlowApi['listPaymentFlows']>>>>;
  }

  /** `createPaymentFlow` */
  create(
    ...args: Parameters<PaymentFlowApi['createPaymentFlow']>
  ): Promise<Body<PaymentFlowApi['createPaymentFlow']>> {
    return this.api.createPaymentFlow(...args).then((r) => r.result);
  }

  /** `getPaymentFlow` */
  retrieve(
    ...args: Parameters<PaymentFlowApi['getPaymentFlow']>
  ): Promise<Body<PaymentFlowApi['getPaymentFlow']>> {
    return this.api.getPaymentFlow(...args).then((r) => r.result);
  }

  /** `updatePaymentFlow` */
  update(
    ...args: Parameters<PaymentFlowApi['updatePaymentFlow']>
  ): Promise<Body<PaymentFlowApi['updatePaymentFlow']>> {
    return this.api.updatePaymentFlow(...args).then((r) => r.result);
  }
}
