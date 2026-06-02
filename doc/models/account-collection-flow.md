
# Account Collection Flow

## Structure

`AccountCollectionFlow`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `object` | `string \| undefined` | Optional | - |
| `liveMode` | `boolean \| undefined` | Optional | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string \| undefined` | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | - |
| `clientToken` | `string \| undefined` | Optional | The client token of the account collection flow.  This token can be used to embed account collection in your client-side application. |
| `status` | [`Status \| undefined`](../../doc/models/status.md) | Optional | The current status of the account collection flow. One of `pending`, `completed`, `expired`, or `cancelled`. |
| `counterpartyId` | `string` | Required | The ID of a counterparty. An external account created with this flow will be associated with this counterparty. |
| `externalAccountId` | `string \| null \| undefined` | Optional | If present, the ID of the external account created using this flow. |
| `paymentTypes` | [`PaymentType[]`](../../doc/models/payment-type.md) | Required | - |

## Example (as JSON)

```json
{
  "id": "00000aa6-0000-0000-0000-000000000000",
  "object": "object4",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "counterparty_id": "0000021e-0000-0000-0000-000000000000",
  "payment_types": [
    "wire"
  ]
}
```

