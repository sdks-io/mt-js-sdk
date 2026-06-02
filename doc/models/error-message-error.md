
# Error Message Error

*This model accepts additional fields of type unknown.*

## Structure

`ErrorMessageError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Errors`](../../doc/models/errors.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "errors": {
    "code": "expired_key",
    "message": "message0",
    "parameter": "parameter6",
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

