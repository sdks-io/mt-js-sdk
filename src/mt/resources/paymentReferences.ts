/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated PaymentReferenceApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { PaymentReferenceApi } from '../../controllers/paymentReferenceApi.js';

export class PaymentReferences extends APIResource {
  private _api?: PaymentReferenceApi;
  private get api(): PaymentReferenceApi {
    return (this._api ??= new PaymentReferenceApi(this._root._client));
  }

  /** `listPaymentReferences` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<PaymentReferenceApi['listPaymentReferences']>
  ): Promise<Page<ElemOf<Body<PaymentReferenceApi['listPaymentReferences']>>>> {
    return paginate((cursor) =>
      this.api.listPaymentReferences(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<PaymentReferenceApi['listPaymentReferences']>>>>;
  }

  /** `getPaymentReference` */
  retrieve(
    ...args: Parameters<PaymentReferenceApi['getPaymentReference']>
  ): Promise<Body<PaymentReferenceApi['getPaymentReference']>> {
    return this.api.getPaymentReference(...args).then((r) => r.result);
  }
}
