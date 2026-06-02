
# Ledger Account Category Update Request

## Structure

`LedgerAccountCategoryUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The name of the ledger account category. |
| `description` | `string \| null \| undefined` | Optional | The description of the ledger account category. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "name": "name4",
  "description": "description4"
}
```

