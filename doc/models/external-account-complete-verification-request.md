
# External Account Complete Verification Request

*This model accepts additional fields of type unknown.*

## Structure

`ExternalAccountCompleteVerificationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amounts` | `number[] \| undefined` | Optional | **Constraints**: *Maximum Items*: `2` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "amounts": [
    2,
    4
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

