
# Ledger Account Update Request

## Structure

`LedgerAccountUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the ledger account. |
| `description` | `string \| null \| undefined` | Optional | The description of the ledger account. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "name": "name8",
  "description": "description2"
}
```

