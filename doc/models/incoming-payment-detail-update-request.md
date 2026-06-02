
# Incoming Payment Detail Update Request

*This model accepts additional fields of type unknown.*

## Structure

`IncomingPaymentDetailUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data in the form of key-value pairs. Pairs can be removed by passing an empty string or `null` as the value. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "metadata": {
    "key0": "metadata7",
    "key1": "metadata6"
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

