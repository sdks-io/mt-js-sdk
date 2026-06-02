
# Account Collection Flow Create Request

*This model accepts additional fields of type unknown.*

## Structure

`AccountCollectionFlowCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `counterpartyId` | `string` | Required | Required. |
| `paymentTypes` | `string[]` | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "counterparty_id": "00001c1a-0000-0000-0000-000000000000",
  "payment_types": [
    "payment_types9",
    "payment_types0",
    "payment_types1"
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

