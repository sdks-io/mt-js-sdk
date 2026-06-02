
# Invoice Line Item Update Request

*This model accepts additional fields of type unknown.*

## Structure

`InvoiceLineItemUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactDetails` | [`ContactDetail[] \| undefined`](../../doc/models/contact-detail.md) | Optional | The invoicer's contact details displayed at the top of the invoice. |
| `counterpartyId` | `string \| undefined` | Optional | The ID of the counterparty receiving the invoice. |
| `counterpartyBillingAddress` | [`CounterpartyBillingAddress \| null \| undefined`](../../doc/models/counterparty-billing-address.md) | Optional | The counterparty's billing address. |
| `counterpartyShippingAddress` | [`CounterpartyShippingAddress \| null \| undefined`](../../doc/models/counterparty-shipping-address.md) | Optional | The counterparty's shipping address where physical goods should be delivered. |
| `currency` | [`Currency \| undefined`](../../doc/models/currency.md) | Optional | Three-letter ISO currency code. |
| `description` | `string \| undefined` | Optional | A free-form description of the invoice. |
| `dueDate` | `string \| undefined` | Optional | A future date by when the invoice needs to be paid. |
| `invoicerAddress` | [`InvoicerAddress \| null \| undefined`](../../doc/models/invoicer-address.md) | Optional | The invoice issuer's business address. |
| `originatingAccountId` | `string \| undefined` | Optional | The ID of the internal account the invoice should be paid to. |
| `receivingAccountId` | `string \| undefined` | Optional | The receiving account ID. Can be an `external_account`. |
| `paymentEffectiveDate` | `string \| undefined` | Optional | Date transactions are to be posted to the participants' account. Defaults to the current business day or the next business day if the current day is a bank holiday or weekend. Format: yyyy-mm-dd. |
| `paymentType` | [`PaymentType6 \| undefined`](../../doc/models/payment-type-6.md) | Optional | One of `ach`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`, `bacs`, `au_becs`, `interac`, `signet`, `provexchange`. |
| `paymentMethod` | [`PaymentMethod1 \| undefined`](../../doc/models/payment-method-1.md) | Optional | The method by which the invoice can be paid. `ui` will show the embedded payment collection flow. `automatic` will automatically initiate payment based upon the account details of the receiving_account id.\nIf the invoice amount is positive, the automatically initiated payment order's direction will be debit. If the invoice amount is negative, the automatically initiated payment order's direction will be credit. One of `manual`, `ui`, or `automatic`. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "contact_details": [
    {
      "id": "00002278-0000-0000-0000-000000000000",
      "object": "object2",
      "live_mode": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "discarded_at": "2016-03-13T12:52:32.123Z",
      "contact_identifier": "contact_identifier6",
      "contact_identifier_type": "phone_number"
    },
    {
      "id": "00002278-0000-0000-0000-000000000000",
      "object": "object2",
      "live_mode": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "discarded_at": "2016-03-13T12:52:32.123Z",
      "contact_identifier": "contact_identifier6",
      "contact_identifier_type": "phone_number"
    },
    {
      "id": "00002278-0000-0000-0000-000000000000",
      "object": "object2",
      "live_mode": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "discarded_at": "2016-03-13T12:52:32.123Z",
      "contact_identifier": "contact_identifier6",
      "contact_identifier_type": "phone_number"
    }
  ],
  "counterparty_id": "counterparty_id4",
  "counterparty_billing_address": {
    "line1": "line12",
    "line2": "line24",
    "locality": "locality0",
    "region": "region6",
    "postal_code": "postal_code2",
    "country": "country4",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "counterparty_shipping_address": {
    "line1": "line12",
    "line2": "line24",
    "locality": "locality0",
    "region": "region6",
    "postal_code": "postal_code2",
    "country": "country4",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "currency": "XAF",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

