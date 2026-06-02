
# Ledger Create Request

## Structure

`LedgerCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Required | The name of the ledger. |
| `description` | `string \| null \| undefined` | Optional | An optional free-form description for internal use. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |

## Example (as JSON)

```json
{
  "name": "name0",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "description": "description0"
}
```

