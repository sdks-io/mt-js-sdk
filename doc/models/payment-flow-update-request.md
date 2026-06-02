
# Payment Flow Update Request

## Structure

`PaymentFlowUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required, Constant | Required. The updated status of the payment flow. Can only be used to mark a flow as `cancelled`.<br><br>**Value**: `'cancelled'` |

## Example (as JSON)

```json
{
  "status": "cancelled"
}
```

