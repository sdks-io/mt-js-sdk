
# Virtual Account Update Request

*This model accepts additional fields of type unknown.*

## Structure

`VirtualAccountUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | - |
| `counterpartyId` | `string \| undefined` | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name4",
  "counterparty_id": "0000123e-0000-0000-0000-000000000000",
  "metadata": {
    "key0": "metadata1",
    "key1": "metadata0",
    "key2": "metadata9"
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

