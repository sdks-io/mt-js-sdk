
# Ledger Transaction Update Request

## Structure

`LedgerTransactionUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| null \| undefined` | Optional | An optional description for internal use. |
| `status` | [`Status11Enum \| undefined`](../../doc/models/status-11-enum.md) | Optional | To post a ledger transaction at creation, use `posted`. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `effectiveAt` | `string \| undefined` | Optional | The timestamp (ISO8601 format) at which the ledger transaction happened for reporting purposes. |
| `ledgerEntries` | [`LedgerEntryCreateRequest[] \| undefined`](../../doc/models/ledger-entry-create-request.md) | Optional | An array of ledger entry objects. |

## Example (as JSON)

```json
{
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "description": "description0",
  "status": "posted",
  "effective_at": "2016-03-13T12:52:32.123Z",
  "ledger_entries": [
    {
      "amount": 60,
      "direction": "credit",
      "ledger_account_id": "00002600-0000-0000-0000-000000000000",
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
      "show_resulting_ledger_account_balances": false
    },
    {
      "amount": 60,
      "direction": "credit",
      "ledger_account_id": "00002600-0000-0000-0000-000000000000",
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
      "show_resulting_ledger_account_balances": false
    }
  ]
}
```

