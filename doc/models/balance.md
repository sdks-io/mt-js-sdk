
# Balance

## Structure

`Balance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `amount` | `number` | Required | The balance amount. |
| `currency` | [`Currency`](../../doc/models/currency.md) | Required | Three-letter ISO currency code. |
| `balanceType` | [`BalanceType`](../../doc/models/balance-type.md) | Required | The specific type of balance reported. One of `opening_ledger`, `closing_ledger`, `current_ledger`, `opening_available`, `opening_available_next_business_day`, `closing_available`, `current_available`, or `other`. |
| `vendorCode` | `string` | Required | The code used by the bank when reporting this specific balance. |
| `vendorCodeType` | [`VendorCodeType \| null`](../../doc/models/vendor-code-type.md) | Required | The code used by the bank when reporting this specific balance. |

## Example (as JSON)

```json
{
  "id": "00002660-0000-0000-0000-000000000000",
  "object": "object2",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "amount": 18,
  "currency": "SGD",
  "balance_type": "closing_available",
  "vendor_code": "vendor_code6",
  "vendor_code_type": "currencycloud"
}
```

