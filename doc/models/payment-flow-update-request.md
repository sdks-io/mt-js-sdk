
# Payment Flow Update Request

*This model accepts additional fields of type unknown.*

## Structure

`PaymentFlowUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required, Constant | Required. The updated status of the payment flow. Can only be used to mark a flow as `cancelled`.<br><br>**Value**: `'cancelled'` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "status": "cancelled",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

