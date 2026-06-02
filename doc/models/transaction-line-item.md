
# Transaction Line Item

## Structure

`TransactionLineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment, or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `discardedAt` | `string \| null` | Required | - |
| `type` | [`Type12Enum`](../../doc/models/type-12-enum.md) | Required | Indicates whether the line item is `originating` or `receiving` (see https://www.moderntreasury.com/journal/beginners-guide-to-ach for more). |
| `transactableType` | [`TransactableTypeEnum \| null`](../../doc/models/transactable-type-enum.md) | Required | If a matching object exists in Modern Treasury, the type will be populated here, otherwise `null`. |
| `transactableId` | `string \| null` | Required | If a matching object exists in Modern Treasury, the ID will be populated here, otherwise `null`. |
| `amount` | `number` | Required | If a matching object exists in Modern Treasury, `amount` will be populated. Value in specified currency's smallest unit (taken from parent Transaction). |
| `description` | `string` | Required | If no matching object is found, `description` will be a free-form text field describing the line item. This field may contain personally identifiable information (PII) and is not included in API responses by default. Learn more about changing your settings at https://docs.moderntreasury.com/reference/personally-identifiable-information. |
| `counterpartyId` | `string` | Required | The ID for the counterparty for this transaction line item. |
| `expectedPaymentId` | `string` | Required | The ID of the reconciled Expected Payment, otherwise `null`. |

## Example (as JSON)

```json
{
  "id": "000012a0-0000-0000-0000-000000000000",
  "object": "object6",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "discarded_at": "2016-03-13T12:52:32.123Z",
  "type": "originating",
  "transactable_type": "payment_order",
  "transactable_id": "transactable_id4",
  "amount": 66,
  "description": "description8",
  "counterparty_id": "counterparty_id4",
  "expected_payment_id": "expected_payment_id2"
}
```

