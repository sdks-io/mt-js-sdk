
# Account Detail Create Request

*This model accepts additional fields of type unknown.*

## Structure

`AccountDetailCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number for the bank account. |
| `accountNumberType` | [`AccountNumberType \| undefined`](../../doc/models/account-number-type.md) | Optional | One of `iban`, `clabe`, `wallet_address`, or `other`. Use `other` if the bank account number is in a generic format. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "account_number": "account_number0",
  "account_number_type": "iban",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

