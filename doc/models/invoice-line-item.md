
# Invoice Line Item

## Structure

`InvoiceLineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `name` | `string` | Required | The name of the line item, typically a product or SKU name. |
| `description` | `string` | Required | An optional free-form description of the line item. |
| `quantity` | `number` | Required | The number of units of a product or service that this line item is for.           Must be a whole number. Defaults to 1 if not provided. |
| `unitAmount` | `number` | Required | The cost per unit of the product or service that this line item is for,           specified in the invoice currency's smallest unit. |
| `direction` | `string` | Required | Either `debit` or `credit`. `debit` indicates that a client owes the business money           and increases the invoice's `total_amount` due. `credit` has the opposite intention and effect. |
| `amount` | `number` | Required | The total amount for this line item specified in the invoice currency's smallest unit. |

## Example (as JSON)

```json
{
  "id": "00000464-0000-0000-0000-000000000000",
  "object": "object2",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "name": "name4",
  "description": "description4",
  "quantity": 104,
  "unit_amount": 238,
  "direction": "direction0",
  "amount": 246
}
```

