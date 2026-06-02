
# Balance Report

## Structure

`BalanceReport`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `balanceReportType` | [`BalanceReportTypeEnum`](../../doc/models/balance-report-type-enum.md) | Required | The specific type of balance report. One of `intraday`, `previous_day`, `real_time`, or `other`. |
| `asOfDate` | `string` | Required | The date of the balance report in local time. |
| `asOfTime` | `string \| null` | Required | The time (24-hour clock) of the balance report in local time. |
| `balances` | [`Balance[]`](../../doc/models/balance.md) | Required | An array of `Balance` objects. |
| `internalAccountId` | `string` | Required | The ID of one of your organization's Internal Accounts. |

## Example (as JSON)

```json
{
  "id": "00002512-0000-0000-0000-000000000000",
  "object": "object8",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "balance_report_type": "previous_day",
  "as_of_date": "2016-03-13T12:52:32.123Z",
  "as_of_time": "2016-03-13T12:52:32.123Z",
  "balances": [
    {
      "id": "000008c0-0000-0000-0000-000000000000",
      "object": "object8",
      "live_mode": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "amount": 114,
      "currency": "NAD",
      "balance_type": "closing_available",
      "vendor_code": "vendor_code2",
      "vendor_code_type": "bnk_dev"
    }
  ],
  "internal_account_id": "00001134-0000-0000-0000-000000000000"
}
```

