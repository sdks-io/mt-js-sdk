
# Account Detail

## Structure

`AccountDetail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `discardedAt` | `string \| null` | Required | - |
| `accountNumber` | `string \| undefined` | Optional | The account number for the bank account. |
| `accountNumberType` | [`AccountNumberType`](../../doc/models/account-number-type.md) | Required | One of `iban`, `clabe`, `wallet_address`, or `other`. Use `other` if the bank account number is in a generic format. |
| `accountNumberSafe` | `string` | Required | The last 4 digits of the account_number. |

## Example (as JSON)

```json
{
  "id": "0000018c-0000-0000-0000-000000000000",
  "object": "object6",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "discarded_at": "2016-03-13T12:52:32.123Z",
  "account_number": "account_number4",
  "account_number_type": "clabe",
  "account_number_safe": "account_number_safe4"
}
```

