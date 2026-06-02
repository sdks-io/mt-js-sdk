
# Reversal Create Request

*This model accepts additional fields of type unknown.*

## Structure

`ReversalCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | [`Reason1`](../../doc/models/reason-1.md) | Required | The reason for the reversal. Must be one of `duplicate`, `incorrect_amount`, `incorrect_receiving_account`, `date_earlier_than_intended`, `date_later_than_intended`. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `ledgerTransaction` | [`LedgerTransactionCreateRequest \| undefined`](../../doc/models/ledger-transaction-create-request.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "reason": "date_earlier_than_intended",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "ledger_transaction": {
    "description": "description4",
    "status": "pending",
    "metadata": {
      "key0": "metadata1",
      "key1": "metadata0",
      "key2": "metadata9"
    },
    "effective_at": "2016-03-13T12:52:32.123Z",
    "effective_date": "2016-03-13T12:52:32.123Z",
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
        "show_resulting_ledger_account_balances": false,
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
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
        "show_resulting_ledger_account_balances": false,
        "exampleAdditionalProperty": {
          "key1": "val1",
          "key2": "val2"
        }
      }
    ],
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

