/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated InvoiceLineItemApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { InvoiceLineItemApi } from '../../controllers/invoiceLineItemApi.js';

export class InvoiceLineItems extends APIResource {
  private _api?: InvoiceLineItemApi;
  private get api(): InvoiceLineItemApi {
    return (this._api ??= new InvoiceLineItemApi(this._root._client));
  }

  /** `listInvoiceLineItems` */
  list(
    ...args: Parameters<InvoiceLineItemApi['listInvoiceLineItems']>
  ): Promise<Body<InvoiceLineItemApi['listInvoiceLineItems']>> {
    return this.api.listInvoiceLineItems(...args).then((r) => r.result);
  }

  /** `createInvoiceLineItem` */
  create(
    ...args: Parameters<InvoiceLineItemApi['createInvoiceLineItem']>
  ): Promise<Body<InvoiceLineItemApi['createInvoiceLineItem']>> {
    return this.api.createInvoiceLineItem(...args).then((r) => r.result);
  }

  /** `getInvoiceLineItem` */
  retrieve(
    ...args: Parameters<InvoiceLineItemApi['getInvoiceLineItem']>
  ): Promise<Body<InvoiceLineItemApi['getInvoiceLineItem']>> {
    return this.api.getInvoiceLineItem(...args).then((r) => r.result);
  }

  /** `updateInvoiceLineItem` */
  update(
    ...args: Parameters<InvoiceLineItemApi['updateInvoiceLineItem']>
  ): Promise<Body<InvoiceLineItemApi['updateInvoiceLineItem']>> {
    return this.api.updateInvoiceLineItem(...args).then((r) => r.result);
  }

  /** `deleteInvoiceLineItem` */
  del(
    ...args: Parameters<InvoiceLineItemApi['deleteInvoiceLineItem']>
  ): Promise<Body<InvoiceLineItemApi['deleteInvoiceLineItem']>> {
    return this.api.deleteInvoiceLineItem(...args).then((r) => r.result);
  }
}
