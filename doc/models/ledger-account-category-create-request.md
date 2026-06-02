
# Ledger Account Category Create Request

## Structure

`LedgerAccountCategoryCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of the ledger account category. |
| `description` | `string \| null \| undefined` | Optional | The description of the ledger account category. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `currency` | `string` | Required | The currency of the ledger account category. |
| `currencyExponent` | `number \| null \| undefined` | Optional | The currency exponent of the ledger account category. |
| `ledgerId` | `string` | Required | The id of the ledger that this account category belongs to. |
| `normalBalance` | [`NormalBalance2Enum`](../../doc/models/normal-balance-2-enum.md) | Required | The normal balance of the ledger account category. |

## Example (as JSON)

```json
{
  "name": "name2",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "currency": "currency2",
  "ledger_id": "000005ce-0000-0000-0000-000000000000",
  "normal_balance": "credit",
  "description": "description2",
  "currency_exponent": 80
}
```

