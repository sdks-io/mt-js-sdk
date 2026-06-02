
# Line Item

## Structure

`LineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `itemizableId` | `string` | Required | The ID of the payment order or expected payment. |
| `itemizableType` | [`ItemizableType`](../../doc/models/itemizable-type.md) | Required | One of `payment_orders` or `expected_payments`. |
| `amount` | `number` | Required | Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. |
| `description` | `string \| null` | Required | A free-form description of the line item. |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `accounting` | [`Accounting`](../../doc/models/accounting.md) | Required | - |
| `accountingCategoryId` | `string \| null` | Required | The ID of one of your accounting categories. Note that these will only be accessible if your accounting system has been connected. |
| `accountingLedgerClassId` | `string \| null` | Required | The ID of one of the class objects in your accounting system. Class objects track segments of your business independent of client or project. Note that these will only be accessible if your accounting system has been connected. |

## Example (as JSON)

```json
{
  "id": "00001956-0000-0000-0000-000000000000",
  "object": "object4",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "itemizable_id": "0000195c-0000-0000-0000-000000000000",
  "itemizable_type": "ExpectedPayment",
  "amount": 248,
  "description": "description6",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "accounting": {
    "account_id": "0000183c-0000-0000-0000-000000000000",
    "class_id": "00001c78-0000-0000-0000-000000000000",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "accounting_category_id": "0000117c-0000-0000-0000-000000000000",
  "accounting_ledger_class_id": "00001fbe-0000-0000-0000-000000000000"
}
```

