
# Ledger Account Payout Update Request

*This model accepts additional fields of type unknown.*

## Structure

`LedgerAccountPayoutUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| null \| undefined` | Optional | The description of the ledger account payout. |
| `status` | [`Status9 \| undefined`](../../doc/models/status-9.md) | Optional | To post a pending ledger account payout, use `posted`. To archive a pending ledger transaction, use `archived`. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "description": "description6",
  "status": "posted",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

