
# Virtual Account Update Request

## Structure

`VirtualAccountUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| null \| undefined` | Optional | - |
| `counterpartyId` | `string \| undefined` | Optional | - |
| `metadata` | `Record<string, string> \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name4",
  "counterparty_id": "0000123e-0000-0000-0000-000000000000",
  "metadata": {
    "key0": "metadata1",
    "key1": "metadata0",
    "key2": "metadata9"
  }
}
```

