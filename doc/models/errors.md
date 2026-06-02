
# Errors

*This model accepts additional fields of type unknown.*

## Structure

`Errors`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | [`Code \| undefined`](../../doc/models/code.md) | Optional | - |
| `message` | `string \| undefined` | Optional | - |
| `parameter` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "code": "resource_not_found",
  "message": "message6",
  "parameter": "parameter0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

