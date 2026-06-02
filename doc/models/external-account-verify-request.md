
# External Account Verify Request

## Structure

`ExternalAccountVerifyRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `originatingAccountId` | `string` | Required | The ID of the internal account where the micro-deposits originate from. Both credit and debit capabilities must be enabled. |
| `paymentType` | [`PaymentType4Enum`](../../doc/models/payment-type-4-enum.md) | Required | Both ach and eft are supported payment types. |
| `currency` | [`CurrencyEnum \| undefined`](../../doc/models/currency-enum.md) | Optional | Three-letter ISO currency code. |

## Example (as JSON)

```json
{
  "originating_account_id": "00000bc6-0000-0000-0000-000000000000",
  "payment_type": "wire",
  "currency": "KWD"
}
```

