/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated LedgerAccountCategoryApi into a Stainless-shaped resource.
 */
import { APIResource, Body, ElemOf } from '../resource.js';
import { Page, paginate } from '../pagination.js';
import { LedgerAccountCategoryApi } from '../../controllers/ledgerAccountCategoryApi.js';

export class LedgerAccountCategories extends APIResource {
  private _api?: LedgerAccountCategoryApi;
  private get api(): LedgerAccountCategoryApi {
    return (this._api ??= new LedgerAccountCategoryApi(this._root._client));
  }

  /** `listLedgerAccountCategories` — auto-paginating (mirrors Stainless `.list()`). */
  list(
    ...args: Parameters<LedgerAccountCategoryApi['listLedgerAccountCategories']>
  ): Promise<Page<ElemOf<Body<LedgerAccountCategoryApi['listLedgerAccountCategories']>>>> {
    return paginate((cursor) =>
      this.api.listLedgerAccountCategories(
        (cursor ?? (args[0] as any)) as any,
        ...(args.slice(1) as any)
      ) as any
    ) as Promise<Page<ElemOf<Body<LedgerAccountCategoryApi['listLedgerAccountCategories']>>>>;
  }

  /** `createLedgerAccountCategory` */
  create(
    ...args: Parameters<LedgerAccountCategoryApi['createLedgerAccountCategory']>
  ): Promise<Body<LedgerAccountCategoryApi['createLedgerAccountCategory']>> {
    return this.api.createLedgerAccountCategory(...args).then((r) => r.result);
  }

  /** `getLedgerAccountCategory` */
  retrieve(
    ...args: Parameters<LedgerAccountCategoryApi['getLedgerAccountCategory']>
  ): Promise<Body<LedgerAccountCategoryApi['getLedgerAccountCategory']>> {
    return this.api.getLedgerAccountCategory(...args).then((r) => r.result);
  }

  /** `updateLedgerAccountCategory` */
  update(
    ...args: Parameters<LedgerAccountCategoryApi['updateLedgerAccountCategory']>
  ): Promise<Body<LedgerAccountCategoryApi['updateLedgerAccountCategory']>> {
    return this.api.updateLedgerAccountCategory(...args).then((r) => r.result);
  }

  /** `deleteLedgerAccountCategory` */
  del(
    ...args: Parameters<LedgerAccountCategoryApi['deleteLedgerAccountCategory']>
  ): Promise<Body<LedgerAccountCategoryApi['deleteLedgerAccountCategory']>> {
    return this.api.deleteLedgerAccountCategory(...args).then((r) => r.result);
  }

  /** `addLedgerAccountToLedgerAccountCategory` */
  addLedgerAccountToLedgerAccountCategory(
    ...args: Parameters<LedgerAccountCategoryApi['addLedgerAccountToLedgerAccountCategory']>
  ): Promise<Body<LedgerAccountCategoryApi['addLedgerAccountToLedgerAccountCategory']>> {
    return this.api.addLedgerAccountToLedgerAccountCategory(...args).then((r) => r.result);
  }

  /** `removeLedgerAccountFromLedgerAccountCategory` */
  removeLedgerAccountFromLedgerAccountCategory(
    ...args: Parameters<LedgerAccountCategoryApi['removeLedgerAccountFromLedgerAccountCategory']>
  ): Promise<Body<LedgerAccountCategoryApi['removeLedgerAccountFromLedgerAccountCategory']>> {
    return this.api.removeLedgerAccountFromLedgerAccountCategory(...args).then((r) => r.result);
  }

  /** `addLedgerAccountCategoryToLedgerAccountCategory` */
  addLedgerAccountCategoryToLedgerAccountCategory(
    ...args: Parameters<LedgerAccountCategoryApi['addLedgerAccountCategoryToLedgerAccountCategory']>
  ): Promise<Body<LedgerAccountCategoryApi['addLedgerAccountCategoryToLedgerAccountCategory']>> {
    return this.api.addLedgerAccountCategoryToLedgerAccountCategory(...args).then((r) => r.result);
  }

  /** `deleteLedgerAccountCategoryFromLedgerAccountCategory` */
  deleteLedgerAccountCategoryFromLedgerAccountCategory(
    ...args: Parameters<LedgerAccountCategoryApi['deleteLedgerAccountCategoryFromLedgerAccountCategory']>
  ): Promise<Body<LedgerAccountCategoryApi['deleteLedgerAccountCategoryFromLedgerAccountCategory']>> {
    return this.api.deleteLedgerAccountCategoryFromLedgerAccountCategory(...args).then((r) => r.result);
  }
}
