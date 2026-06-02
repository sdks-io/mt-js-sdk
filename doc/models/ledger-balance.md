
# Ledger Balance

## Structure

`LedgerBalance`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `credits` | `number` | Required | - |
| `debits` | `number` | Required | - |
| `amount` | `number` | Required | - |
| `currency` | `string` | Required | The currency of the ledger account. |
| `currencyExponent` | `number` | Required | The currency exponent of the ledger account. |

## Example (as JSON)

```json
{
  "credits": 186,
  "debits": 106,
  "amount": 244,
  "currency": "currency2",
  "currency_exponent": 190
}
```

