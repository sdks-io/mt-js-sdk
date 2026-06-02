
# Payment Flow

## Structure

`PaymentFlow`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `object` | `string \| undefined` | Optional | - |
| `liveMode` | `boolean \| undefined` | Optional | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `clientToken` | `string \| undefined` | Optional | The client token of the payment flow. This token can be used to embed a payment workflow in your client-side application. |
| `status` | [`Status17 \| undefined`](../../doc/models/status-17.md) | Optional | The current status of the payment flow. One of `pending`, `completed`, `expired`, or `cancelled`. |
| `amount` | `number \| undefined` | Optional | Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits. |
| `currency` | `string \| undefined` | Optional | The currency of the payment. |
| `direction` | [`Direction9 \| undefined`](../../doc/models/direction-9.md) | Optional | Describes the direction money is flowing in the transaction. Can only be `debit`. A `debit` pulls money from someone else's account to your own. |
| `counterpartyId` | `string \| null \| undefined` | Optional | The ID of a counterparty associated with the payment. As part of the payment workflow an external account will be associated with this counterparty. |
| `receivingAccountId` | `string \| null \| undefined` | Optional | If present, the ID of the external account created using this flow. |
| `originatingAccountId` | `string \| null \| undefined` | Optional | The ID of one of your organization's internal accounts. |
| `paymentOrderId` | `string \| null \| undefined` | Optional | If present, the ID of the payment order created using this flow. |

## Example (as JSON)

```json
{
  "id": "0000011c-0000-0000-0000-000000000000",
  "object": "object2",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z"
}
```

