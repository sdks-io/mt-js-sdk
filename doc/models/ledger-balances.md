
# Ledger Balances

## Structure

`LedgerBalances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pendingBalance` | [`LedgerBalance`](../../doc/models/ledger-balance.md) | Required | - |
| `postedBalance` | [`LedgerBalance`](../../doc/models/ledger-balance.md) | Required | - |
| `availableBalance` | [`LedgerBalance`](../../doc/models/ledger-balance.md) | Required | - |

## Example (as JSON)

```json
{
  "pending_balance": {
    "credits": 144,
    "debits": 148,
    "amount": 30,
    "currency": "currency8",
    "currency_exponent": 148
  },
  "posted_balance": {
    "credits": 156,
    "debits": 136,
    "amount": 18,
    "currency": "currency8",
    "currency_exponent": 160
  },
  "available_balance": {
    "credits": 108,
    "debits": 184,
    "amount": 66,
    "currency": "currency2",
    "currency_exponent": 112
  }
}
```

