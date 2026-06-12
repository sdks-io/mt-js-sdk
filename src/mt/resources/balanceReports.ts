/**
 * Modern Treasury — convergence façade (Tier 2, hand-authored, regeneration-safe).
 * Wraps the generated BalanceReportApi into a Stainless-shaped resource.
 */
import { APIResource, Body } from '../resource.js';
import { BalanceReportApi } from '../../controllers/balanceReportApi.js';

export class BalanceReports extends APIResource {
  private _api?: BalanceReportApi;
  private get api(): BalanceReportApi {
    return (this._api ??= new BalanceReportApi(this._root._client));
  }

  /** `listBalanceReports` */
  list(
    ...args: Parameters<BalanceReportApi['listBalanceReports']>
  ): Promise<Body<BalanceReportApi['listBalanceReports']>> {
    return this.api.listBalanceReports(...args).then((r) => r.result);
  }

  /** `getBalanceReport` */
  retrieve(
    ...args: Parameters<BalanceReportApi['getBalanceReport']>
  ): Promise<Body<BalanceReportApi['getBalanceReport']>> {
    return this.api.getBalanceReport(...args).then((r) => r.result);
  }
}
