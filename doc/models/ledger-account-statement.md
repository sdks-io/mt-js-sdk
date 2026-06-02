
# Ledger Account Statement

## Structure

`LedgerAccountStatement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `ledgerId` | `string` | Required | The id of the ledger that this ledger account statement belongs to. |
| `description` | `string \| null` | Required | The description of the ledger account statement. |
| `ledgerAccountId` | `string` | Required | The id of the ledger account whose ledger entries are queried against, and its balances are computed as a result. |
| `ledgerAccountLockVersion` | `number` | Required | Lock version of the ledger account at the time of statement generation. |
| `ledgerAccountNormalBalance` | [`LedgerAccountNormalBalanceEnum`](../../doc/models/ledger-account-normal-balance-enum.md) | Required | The normal balance of the ledger account. |
| `effectiveAtLowerBound` | `string` | Required | The inclusive lower bound of the effective_at timestamp of the ledger entries to be included in the ledger account statement. |
| `effectiveAtUpperBound` | `string` | Required | The exclusive upper bound of the effective_at timestamp of the ledger entries to be included in the ledger account statement. |
| `startingBalance` | [`LedgerBalances`](../../doc/models/ledger-balances.md) | Required | - |
| `endingBalance` | [`LedgerBalances`](../../doc/models/ledger-balances.md) | Required | - |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "id": "0000023a-0000-0000-0000-000000000000",
  "object": "object8",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "ledger_id": "00000248-0000-0000-0000-000000000000",
  "description": "description0",
  "ledger_account_id": "000016c0-0000-0000-0000-000000000000",
  "ledger_account_lock_version": 180,
  "ledger_account_normal_balance": "credit",
  "effective_at_lower_bound": "2016-03-13T12:52:32.123Z",
  "effective_at_upper_bound": "2016-03-13T12:52:32.123Z",
  "starting_balance": {
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
  "ending_balance": {
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

