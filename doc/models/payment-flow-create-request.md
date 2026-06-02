
# Payment Flow Create Request

## Structure

`PaymentFlowCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number` | Required | Required. Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. Can be any integer up to 36 digits. |
| `currency` | `string` | Required | Required. The currency of the payment. |
| `direction` | [`Direction10Enum`](../../doc/models/direction-10-enum.md) | Required | Required. Describes the direction money is flowing in the transaction. Can only be `debit`. A `debit` pulls money from someone else's account to your own. |
| `counterpartyId` | `string` | Required | Required. The ID of a counterparty associated with the payment. As part of the payment workflow an external account will be associated with this model. |
| `originatingAccountId` | `string` | Required | Required. The ID of one of your organization's internal accounts. |

## Example (as JSON)

```json
{
  "amount": 174,
  "currency": "currency6",
  "direction": "credit",
  "counterparty_id": "00002384-0000-0000-0000-000000000000",
  "originating_account_id": "00000b00-0000-0000-0000-000000000000"
}
```

