/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated IncomingPaymentDetailApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { IncomingPaymentDetailApi } from '../../controllers/incomingPaymentDetailApi.js';

export class IncomingPaymentDetails extends APIResource {
  private _api?: IncomingPaymentDetailApi;
  private get api(): IncomingPaymentDetailApi {
    return (this._api ??= new IncomingPaymentDetailApi(this._root._client));
  }

  /** `listIncomingPaymentDetails` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<IncomingPaymentDetailApi['listIncomingPaymentDetails']>
  ): Promise<Page<ElemOf<Body<IncomingPaymentDetailApi['listIncomingPaymentDetails']>>>> {
    return paginate((cursor) =>
      this.api.listIncomingPaymentDetails(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<IncomingPaymentDetailApi['listIncomingPaymentDetails']>>>>;
  }

  /** `getIncomingPaymentDetail` */
  retrieve(
    ...args: Parameters<IncomingPaymentDetailApi['getIncomingPaymentDetail']>
  ): Promise<Body<IncomingPaymentDetailApi['getIncomingPaymentDetail']>> {
    return this.api.getIncomingPaymentDetail(...args).then((r) => r.result);
  }

  /** `updateIncomingPaymentDetail` */
  update(
    ...args: Parameters<IncomingPaymentDetailApi['updateIncomingPaymentDetail']>
  ): Promise<Body<IncomingPaymentDetailApi['updateIncomingPaymentDetail']>> {
    return this.api.updateIncomingPaymentDetail(...args).then((r) => r.result);
  }

  /** `createAsyncIncomingPaymentDetail` */
  createAsyncIncomingPaymentDetail(
    ...args: Parameters<IncomingPaymentDetailApi['createAsyncIncomingPaymentDetail']>
  ): Promise<Body<IncomingPaymentDetailApi['createAsyncIncomingPaymentDetail']>> {
    return this.api.createAsyncIncomingPaymentDetail(...args).then((r) => r.result);
  }
}
