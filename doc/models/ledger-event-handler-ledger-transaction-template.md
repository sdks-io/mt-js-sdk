
# Ledger Event Handler Ledger Transaction Template

## Structure

`LedgerEventHandlerLedgerTransactionTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| null` | Required | An optional description for internal use. |
| `effectiveAt` | `string \| null` | Required | The timestamp (ISO8601 format) at which the ledger transaction happened for reporting purposes. |
| `ledgerEntries` | [`LedgerEventHandlerLedgerEntries[]`](../../doc/models/ledger-event-handler-ledger-entries.md) | Required | An array of ledger entry objects. |
| `metadata` | `Record<string, string> \| null` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "description": "description6",
  "effective_at": "effective_at0",
  "ledger_entries": [
    {
      "amount": "amount6",
      "direction": "direction0",
      "ledger_account_id": "ledger_account_id8"
    }
  ],
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  }
}
```

