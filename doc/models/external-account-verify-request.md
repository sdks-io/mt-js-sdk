
# External Account Verify Request

*This model accepts additional fields of type unknown.*

## Structure

`ExternalAccountVerifyRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `originatingAccountId` | `string` | Required | The ID of the internal account where the micro-deposits originate from. Both credit and debit capabilities must be enabled. |
| `paymentType` | [`PaymentType4`](../../doc/models/payment-type-4.md) | Required | Both ach and eft are supported payment types. |
| `currency` | [`Currency \| undefined`](../../doc/models/currency.md) | Optional | Three-letter ISO currency code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "originating_account_id": "00000bc6-0000-0000-0000-000000000000",
  "payment_type": "wire",
  "currency": "KWD",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

