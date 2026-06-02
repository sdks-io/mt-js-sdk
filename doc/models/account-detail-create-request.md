
# Account Detail Create Request

## Structure

`AccountDetailCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The account number for the bank account. |
| `accountNumberType` | [`AccountNumberTypeEnum \| undefined`](../../doc/models/account-number-type-enum.md) | Optional | One of `iban`, `clabe`, `wallet_address`, or `other`. Use `other` if the bank account number is in a generic format. |

## Example (as JSON)

```json
{
  "account_number": "account_number0",
  "account_number_type": "iban"
}
```

