
# Accounting 1

*This model accepts additional fields of type unknown.*

## Structure

`Accounting1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type \| undefined`](../../doc/models/type.md) | Optional | An optional type to auto-sync the counterparty to your ledger. Either `customer` or `vendor`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "customer",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

