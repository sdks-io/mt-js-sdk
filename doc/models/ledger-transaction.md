
# Ledger Transaction

## Structure

`LedgerTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `description` | `string \| null` | Required | An optional description for internal use. |
| `status` | [`Status11`](../../doc/models/status-11.md) | Required | To post a ledger transaction at creation, use `posted`. |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `effectiveAt` | `string` | Required | The timestamp (ISO8601 format) at which the ledger transaction happened for reporting purposes. |
| `effectiveDate` | `string` | Required | The date (YYYY-MM-DD) on which the ledger transaction happened for reporting purposes. |
| `ledgerEntries` | [`LedgerEntry[]`](../../doc/models/ledger-entry.md) | Required | An array of ledger entry objects. |
| `postedAt` | `string \| null` | Required | The time on which the ledger transaction posted. This is null if the ledger transaction is pending. |
| `ledgerId` | `string` | Required | The ID of the ledger this ledger transaction belongs to. |
| `ledgerableType` | [`LedgerableType2 \| null`](../../doc/models/ledgerable-type-2.md) | Required | If the ledger transaction can be reconciled to another object in Modern Treasury, the type will be populated here, otherwise null. This can be one of payment_order, incoming_payment_detail, expected_payment, return, or reversal. |
| `ledgerableId` | `string \| null` | Required | If the ledger transaction can be reconciled to another object in Modern Treasury, the id will be populated here, otherwise null. |
| `externalId` | `string \| null` | Required | A unique string to represent the ledger transaction. Only one pending or posted ledger transaction may have this ID in the ledger. |
| `reversesLedgerTransactionId` | `string \| null` | Required | The ID of the original ledger transaction that this ledger transaction reverses. |

## Example (as JSON)

```json
{
  "id": "00000a40-0000-0000-0000-000000000000",
  "object": "object2",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "description": "description4",
  "status": "pending",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "effective_at": "2016-03-13T12:52:32.123Z",
  "effective_date": "2016-03-13T12:52:32.123Z",
  "ledger_entries": [
    {
      "id": "0000117a-0000-0000-0000-000000000000",
      "object": "object2",
      "live_mode": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "discarded_at": "2016-03-13T12:52:32.123Z",
      "amount": 60,
      "direction": "credit",
      "status": "posted",
      "ledger_account_id": "00002600-0000-0000-0000-000000000000",
      "ledger_account_lock_version": 228,
      "ledger_account_currency": "ledger_account_currency8",
      "ledger_account_currency_exponent": 74,
      "ledger_transaction_id": "ledger_transaction_id2",
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
  ],
  "posted_at": "2016-03-13T12:52:32.123Z",
  "ledger_id": "00000a4e-0000-0000-0000-000000000000",
  "ledgerable_type": "line_item",
  "ledgerable_id": "00000538-0000-0000-0000-000000000000",
  "external_id": "external_id0",
  "reverses_ledger_transaction_id": "reverses_ledger_transaction_id2"
}
```

