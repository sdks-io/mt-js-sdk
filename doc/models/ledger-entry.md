
# Ledger Entry

## Structure

`LedgerEntry`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `discardedAt` | `string \| null` | Required | - |
| `amount` | `number` | Required | Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits. |
| `direction` | [`Direction5`](../../doc/models/direction-5.md) | Required | One of `credit`, `debit`. Describes the direction money is flowing in the transaction. A `credit` moves money from your account to someone else's. A `debit` pulls money from someone else's account to your own. Note that wire, rtp, and check payments will always be `credit`. |
| `status` | [`Status9`](../../doc/models/status-9.md) | Required | Equal to the state of the ledger transaction when the ledger entry was created. One of `pending`, `posted`, or `archived`. |
| `ledgerAccountId` | `string` | Required | The ledger account that this ledger entry is associated with. |
| `ledgerAccountLockVersion` | `number \| null` | Required | Lock version of the ledger account. This can be passed when creating a ledger transaction to only succeed if no ledger transactions have posted since the given version. See our post about Designing the Ledgers API with Optimistic Locking for more details. |
| `ledgerAccountCurrency` | `string` | Required | The currency of the ledger account. |
| `ledgerAccountCurrencyExponent` | `number` | Required | The currency exponent of the ledger account. |
| `ledgerTransactionId` | `string` | Required | The ledger transaction that this ledger entry is associated with. |
| `resultingLedgerAccountBalances` | [`LedgerBalances`](../../doc/models/ledger-balances.md) | Required | - |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "id": "0000242c-0000-0000-0000-000000000000",
  "object": "object2",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "discarded_at": "2016-03-13T12:52:32.123Z",
  "amount": 158,
  "direction": "credit",
  "status": "posted",
  "ledger_account_id": "000011a2-0000-0000-0000-000000000000",
  "ledger_account_lock_version": 186,
  "ledger_account_currency": "ledger_account_currency4",
  "ledger_account_currency_exponent": 172,
  "ledger_transaction_id": "ledger_transaction_id6",
  "resulting_ledger_account_balances": {
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
  },
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  }
}
```

