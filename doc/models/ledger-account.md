
# Ledger Account

## Structure

`LedgerAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `discardedAt` | `string \| null` | Required | - |
| `name` | `string` | Required | The name of the ledger account. |
| `description` | `string \| null` | Required | The description of the ledger account. |
| `normalBalance` | [`NormalBalance`](../../doc/models/normal-balance.md) | Required | The normal balance of the ledger account. |
| `balances` | [`LedgerBalancesWithEffectiveAt`](../../doc/models/ledger-balances-with-effective-at.md) | Required | - |
| `lockVersion` | `number` | Required | Lock version of the ledger account. |
| `ledgerId` | `string` | Required | The id of the ledger that this account belongs to. |
| `ledgerableId` | `string \| null` | Required | If the ledger account links to another object in Modern Treasury, the id will be populated here, otherwise null. |
| `ledgerableType` | [`LedgerableType \| null`](../../doc/models/ledgerable-type.md) | Required | If the ledger account links to another object in Modern Treasury, the type will be populated here, otherwise null. The value is one of internal_account or external_account. |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "id": "00000506-0000-0000-0000-000000000000",
  "object": "object4",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "discarded_at": "2016-03-13T12:52:32.123Z",
  "name": "name6",
  "description": "description6",
  "normal_balance": "credit",
  "balances": {
    "effective_at_lower_bound": "2016-03-13T12:52:32.123Z",
    "effective_at_upper_bound": "2016-03-13T12:52:32.123Z",
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
  "lock_version": 170,
  "ledger_id": "00000514-0000-0000-0000-000000000000",
  "ledgerable_id": "0000270e-0000-0000-0000-000000000000",
  "ledgerable_type": "external_account",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  }
}
```

