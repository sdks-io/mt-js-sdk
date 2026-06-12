/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated DocumentApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { DocumentApi } from '../../controllers/documentApi.js';

export class Documents extends APIResource {
  private _api?: DocumentApi;
  private get api(): DocumentApi {
    return (this._api ??= new DocumentApi(this._root._client));
  }

  /** `listDocumentsNested` */
  listDocumentsNested(
    ...args: Parameters<DocumentApi['listDocumentsNested']>
  ): Promise<Body<DocumentApi['listDocumentsNested']>> {
    return this.api.listDocumentsNested(...args).then((r) => r.result);
  }

  /** `createDocument` */
  create(
    ...args: Parameters<DocumentApi['createDocument']>
  ): Promise<Body<DocumentApi['createDocument']>> {
    return this.api.createDocument(...args).then((r) => r.result);
  }

  /** `listDocuments` */
  list(
    ...args: Parameters<DocumentApi['listDocuments']>
  ): Promise<Body<DocumentApi['listDocuments']>> {
    return this.api.listDocuments(...args).then((r) => r.result);
  }

  /** `createDocumentNested` */
  createDocumentNested(
    ...args: Parameters<DocumentApi['createDocumentNested']>
  ): Promise<Body<DocumentApi['createDocumentNested']>> {
    return this.api.createDocumentNested(...args).then((r) => r.result);
  }

  /** `getDocument` */
  retrieve(
    ...args: Parameters<DocumentApi['getDocument']>
  ): Promise<Body<DocumentApi['getDocument']>> {
    return this.api.getDocument(...args).then((r) => r.result);
  }

  /** `getExistingDocument` */
  getExistingDocument(
    ...args: Parameters<DocumentApi['getExistingDocument']>
  ): Promise<Body<DocumentApi['getExistingDocument']>> {
    return this.api.getExistingDocument(...args).then((r) => r.result);
  }

  /** `downloadDocument` */
  downloadDocument(
    ...args: Parameters<DocumentApi['downloadDocument']>
  ): Promise<Body<DocumentApi['downloadDocument']>> {
    return this.api.downloadDocument(...args).then((r) => r.result);
  }

  /** `downloadExistingDocument` */
  downloadExistingDocument(
    ...args: Parameters<DocumentApi['downloadExistingDocument']>
  ): Promise<Body<DocumentApi['downloadExistingDocument']>> {
    return this.api.downloadExistingDocument(...args).then((r) => r.result);
  }
}
