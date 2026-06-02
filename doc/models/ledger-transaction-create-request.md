
# Ledger Transaction Create Request

*This model accepts additional fields of type unknown.*

## Structure

`LedgerTransactionCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| null \| undefined` | Optional | An optional description for internal use. |
| `status` | [`Status11 \| undefined`](../../doc/models/status-11.md) | Optional | To post a ledger transaction at creation, use `posted`. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `effectiveAt` | `string \| undefined` | Optional | The timestamp (ISO8601 format) at which the ledger transaction happened for reporting purposes. |
| `effectiveDate` | `string \| undefined` | Optional | The date (YYYY-MM-DD) on which the ledger transaction happened for reporting purposes. |
| `ledgerEntries` | [`LedgerEntryCreateRequest[]`](../../doc/models/ledger-entry-create-request.md) | Required | An array of ledger entry objects. |
| `externalId` | `string \| undefined` | Optional | A unique string to represent the ledger transaction. Only one pending or posted ledger transaction may have this ID in the ledger. |
| `ledgerableType` | [`LedgerableType2 \| undefined`](../../doc/models/ledgerable-type-2.md) | Optional | If the ledger transaction can be reconciled to another object in Modern Treasury, the type will be populated here, otherwise null. This can be one of payment_order, incoming_payment_detail, expected_payment, return, or reversal. |
| `ledgerableId` | `string \| undefined` | Optional | If the ledger transaction can be reconciled to another object in Modern Treasury, the id will be populated here, otherwise null. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "ledger_entries": [
    {
      "amount": 60,
      "direction": "credit",
      "ledger_account_id": "00002600-0000-0000-0000-000000000000",
      "metadata": {
        "key": "value",
        "foo": "bar",
        "modern": "treasury"
      },
      "lock_version": 14,
      "pending_balance_amount": {
        "key0": 246,
        "key1": 247,
        "key2": 248
      },
      "posted_balance_amount": {
        "key0": 238,
        "key1": 239
      },
      "available_balance_amount": {
        "key0": 187,
        "key1": 188,
        "key2": 189
      },
      "show_resulting_ledger_account_balances": false,
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  ],
  "description": "description6",
  "status": "archived",
  "effective_at": "2016-03-13T12:52:32.123Z",
  "effective_date": "2016-03-13T12:52:32.123Z",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

