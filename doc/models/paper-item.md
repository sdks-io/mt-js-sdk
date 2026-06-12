
# Paper Item

## Structure

`PaperItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `transactionLineItemId` | `string \| null` | Required | The ID of the reconciled Transaction Line Item or `null`. |
| `transactionId` | `string \| null` | Required | The ID of the reconciled Transaction or `null`. |
| `status` | [`Status17`](../../doc/models/status-17.md) | Required | The current status of the paper item. One of `pending`, `completed`, or `returned`. |
| `lockboxNumber` | `string` | Required | The identifier for the lockbox assigned by the bank. |
| `depositDate` | `string` | Required | The date the paper item was deposited into your organization's bank account. |
| `amount` | `number` | Required | The amount of the paper item. |
| `currency` | [`Currency`](../../doc/models/currency.md) | Required | Three-letter ISO currency code. |
| `accountNumber` | `string \| null` | Required | The account number on the paper item. |
| `accountNumberSafe` | `string \| null` | Required | The last 4 digits of the account_number. |
| `routingNumber` | `string \| null` | Required | The routing number on the paper item. |
| `checkNumber` | `string \| null` | Required | The check number on the paper item. |
| `remitterName` | `string \| null` | Required | The name of the remitter on the paper item. |
| `memoField` | `string \| null` | Required | The memo field on the paper item. |

## Example (as JSON)

```json
{
  "id": "000022cc-0000-0000-0000-000000000000",
  "object": "object4",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "transaction_line_item_id": "00001e5c-0000-0000-0000-000000000000",
  "transaction_id": "0000261c-0000-0000-0000-000000000000",
  "status": "returned",
  "lockbox_number": "lockbox_number8",
  "deposit_date": "2016-03-13T12:52:32.123Z",
  "amount": 78,
  "currency": "BYR",
  "account_number": "account_number2",
  "account_number_safe": "account_number_safe2",
  "routing_number": "routing_number2",
  "check_number": "check_number0",
  "remitter_name": "remitter_name4",
  "memo_field": "memo_field8"
}
```

