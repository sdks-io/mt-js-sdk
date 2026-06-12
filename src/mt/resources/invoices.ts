/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated InvoiceApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { InvoiceApi } from '../../controllers/invoiceApi.js';
import { InvoiceLineItems } from './invoiceLineItems.js';

export class Invoices extends APIResource {
  private _api?: InvoiceApi;
  private get api(): InvoiceApi {
    return (this._api ??= new InvoiceApi(this._root._client));
  }

  /** Nested sub-resource (mirrors Stainless `client.invoices.lineItems`). */
  readonly lineItems = new InvoiceLineItems(this._root);

  /** `listInvoices` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<InvoiceApi['listInvoices']>
  ): Promise<Page<ElemOf<Body<InvoiceApi['listInvoices']>>>> {
    return paginate((cursor) =>
      this.api.listInvoices(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<InvoiceApi['listInvoices']>>>>;
  }

  /** `createInvoice` */
  create(
    ...args: Parameters<InvoiceApi['createInvoice']>
  ): Promise<Body<InvoiceApi['createInvoice']>> {
    return this.api.createInvoice(...args).then((r) => r.result);
  }

  /** `getInvoice` */
  retrieve(
    ...args: Parameters<InvoiceApi['getInvoice']>
  ): Promise<Body<InvoiceApi['getInvoice']>> {
    return this.api.getInvoice(...args).then((r) => r.result);
  }

  /** `updateInvoice` */
  update(
    ...args: Parameters<InvoiceApi['updateInvoice']>
  ): Promise<Body<InvoiceApi['updateInvoice']>> {
    return this.api.updateInvoice(...args).then((r) => r.result);
  }
}
