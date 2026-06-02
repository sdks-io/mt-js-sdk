
# Ledger Event Handler Create Request

## Structure

`LedgerEventHandlerCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | Name of the ledger event handler. |
| `description` | `string \| null \| undefined` | Optional | An optional description. |
| `ledgerId` | `string \| undefined` | Optional | The id of the ledger that this account belongs to. |
| `ledgerTransactionTemplate` | [`LedgerEventHandlerLedgerTransactionTemplate`](../../doc/models/ledger-event-handler-ledger-transaction-template.md) | Required | - |
| `conditions` | [`LedgerEventHandlerConditions \| undefined`](../../doc/models/ledger-event-handler-conditions.md) | Optional | - |
| `metadata` | `Record<string, string> \| null \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "name": "name2",
  "ledger_transaction_template": {
    "description": "description4",
    "effective_at": "effective_at2",
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
  },
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "description": "description2",
  "ledger_id": "000002e0-0000-0000-0000-000000000000",
  "conditions": {
    "field": "field6",
    "operator": "operator8",
    "value": "value4"
  }
}
```

