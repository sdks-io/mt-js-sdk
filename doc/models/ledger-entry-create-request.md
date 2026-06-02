
# Ledger Entry Create Request

## Structure

`LedgerEntryCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits. |
| `direction` | [`Direction5Enum`](../../doc/models/direction-5-enum.md) | Required | One of `credit`, `debit`. Describes the direction money is flowing in the transaction. A `credit` moves money from your account to someone else's. A `debit` pulls money from someone else's account to your own. Note that wire, rtp, and check payments will always be `credit`. |
| `ledgerAccountId` | `string` | Required | The ledger account that this ledger entry is associated with. |
| `lockVersion` | `number \| null \| undefined` | Optional | Lock version of the ledger account. This can be passed when creating a ledger transaction to only succeed if no ledger transactions have posted since the given version. See our post about Designing the Ledgers API with Optimistic Locking for more details. |
| `pendingBalanceAmount` | `Record<string, number> \| null \| undefined` | Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s pending balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422. |
| `postedBalanceAmount` | `Record<string, number> \| null \| undefined` | Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s posted balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422. |
| `availableBalanceAmount` | `Record<string, number> \| null \| undefined` | Optional | Use `gt` (>), `gte` (>=), `lt` (<), `lte` (<=), or `eq` (=) to lock on the account’s available balance. If any of these conditions would be false after the transaction is created, the entire call will fail with error code 422. |
| `showResultingLedgerAccountBalances` | `boolean \| null \| undefined` | Optional | If true, response will include the balance of the associated ledger account for the entry. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "amount": 44,
  "direction": "credit",
  "ledger_account_id": "00002410-0000-0000-0000-000000000000",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "lock_version": 2,
  "pending_balance_amount": {
    "key0": 230,
    "key1": 231,
    "key2": 232
  },
  "posted_balance_amount": {
    "key0": 34,
    "key1": 33
  },
  "available_balance_amount": {
    "key0": 171,
    "key1": 172,
    "key2": 173
  },
  "show_resulting_ledger_account_balances": false
}
```

