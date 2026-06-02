
# Invoice

## Structure

`Invoice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `contactDetails` | [`ContactDetail[]`](../../doc/models/contact-detail.md) | Required | The invoicer's contact details displayed at the top of the invoice. |
| `counterpartyId` | `string` | Required | The ID of the counterparty receiving the invoice. |
| `counterpartyBillingAddress` | [`CounterpartyBillingAddress \| null`](../../doc/models/counterparty-billing-address.md) | Required | The counterparty's billing address. |
| `counterpartyShippingAddress` | [`CounterpartyShippingAddress \| null`](../../doc/models/counterparty-shipping-address.md) | Required | The counterparty's shipping address where physical goods should be delivered. |
| `currency` | [`CurrencyEnum`](../../doc/models/currency-enum.md) | Required | Three-letter ISO currency code. |
| `description` | `string` | Required | A free-form description of the invoice. |
| `dueDate` | `string` | Required | A future date by when the invoice needs to be paid. |
| `invoicerAddress` | [`InvoicerAddress \| null`](../../doc/models/invoicer-address.md) | Required | The invoice issuer's business address. |
| `originatingAccountId` | `string` | Required | The ID of the internal account the invoice should be paid to. |
| `receivingAccountId` | `string \| null` | Required | The receiving account ID. Can be an `internal_account`. |
| `paymentEffectiveDate` | `string \| null` | Required | Date transactions are to be posted to the participants' account. Defaults to the current business day or the next business day if the current day is a bank holiday or weekend. Format: yyyy-mm-dd. |
| `paymentType` | [`PaymentType5Enum \| null`](../../doc/models/payment-type-5-enum.md) | Required | One of `ach` or `eft` |
| `paymentMethod` | [`PaymentMethodEnum \| null`](../../doc/models/payment-method-enum.md) | Required | When opening an invoice, whether to show the embedded payment UI , automatically debit the recipient, or rely on manual payment from the recipient. |
| `hostedUrl` | `string` | Required | The URL of the hosted web UI where the invoice can be viewed. |
| `number` | `string` | Required | A unique record number assigned to each invoice that is issued. |
| `paymentOrders` | [`PaymentOrder[]`](../../doc/models/payment-order.md) | Required | The payment orders created for paying the invoice through the invoice payment UI. |
| `pdfUrl` | `string \| null` | Required | The URL where the invoice PDF can be downloaded. |
| `status` | [`Status5Enum`](../../doc/models/status-5-enum.md) | Required | The status of the invoice. |
| `totalAmount` | `number` | Required | Total amount due in specified currency's smallest unit, e.g., $10 USD would be represented as 1000. |

## Example (as JSON)

```json
{
  "id": "000023a6-0000-0000-0000-000000000000",
  "object": "object6",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
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
    }
  ],
  "counterparty_id": "counterparty_id8",
  "counterparty_billing_address": {
    "line1": "line12",
    "line2": "line24",
    "locality": "locality0",
    "region": "region6",
    "postal_code": "postal_code2",
    "country": "country4"
  },
  "counterparty_shipping_address": {
    "line1": "line12",
    "line2": "line24",
    "locality": "locality0",
    "region": "region6",
    "postal_code": "postal_code2",
    "country": "country4"
  },
  "currency": "MNT",
  "description": "description4",
  "due_date": "2016-03-13T12:52:32.123Z",
  "invoicer_address": {
    "line1": "line10",
    "line2": "line22",
    "locality": "locality2",
    "region": "region4",
    "postal_code": "postal_code0",
    "country": "country2"
  },
  "originating_account_id": "originating_account_id4",
  "receiving_account_id": "000022c8-0000-0000-0000-000000000000",
  "payment_effective_date": "2016-03-13T12:52:32.123Z",
  "payment_type": "eft",
  "payment_method": "ui",
  "hosted_url": "hosted_url2",
  "number": "number6",
  "payment_orders": [
    {
      "id": "00000f00-0000-0000-0000-000000000000",
      "object": "object8",
      "live_mode": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z",
      "type": "au_becs",
      "subtype": "0S",
      "amount": 178,
      "direction": "credit",
      "priority": "high",
      "originating_account_id": "00001504-0000-0000-0000-000000000000",
      "receiving_account_id": "00000e22-0000-0000-0000-000000000000",
      "accounting": {
        "account_id": "0000183c-0000-0000-0000-000000000000",
        "class_id": "00001c78-0000-0000-0000-000000000000"
      },
      "accounting_category_id": "00000726-0000-0000-0000-000000000000",
      "accounting_ledger_class_id": "00001568-0000-0000-0000-000000000000",
      "currency": "BAM",
      "effective_date": "2016-03-13T12:52:32.123Z",
      "description": "description0",
      "statement_descriptor": "statement_descriptor0",
      "remittance_information": "remittance_information6",
      "purpose": "purpose6",
      "metadata": {
        "key": "value",
        "foo": "bar",
        "modern": "treasury"
      },
      "charge_bearer": "receiver",
      "foreign_exchange_indicator": "fixed_to_variable",
      "foreign_exchange_contract": "foreign_exchange_contract0",
      "nsf_protected": false,
      "originating_party_name": "originating_party_name0",
      "ultimate_originating_party_name": "ultimate_originating_party_name4",
      "ultimate_originating_party_identifier": "ultimate_originating_party_identifier2",
      "ultimate_receiving_party_name": "ultimate_receiving_party_name8",
      "ultimate_receiving_party_identifier": "ultimate_receiving_party_identifier2",
      "send_remittance_advice": false,
      "expires_at": "2016-03-13T12:52:32.123Z",
      "status": "completed",
      "receiving_account": {
        "metadata": {
          "key": "value",
          "foo": "bar",
          "modern": "treasury"
        },
        "id": "00001604-0000-0000-0000-000000000000",
        "object": "object4",
        "live_mode": false,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z"
      },
      "receiving_account_type": "internal_account",
      "counterparty_id": "00000678-0000-0000-0000-000000000000",
      "transaction_ids": [
        "000013f3-0000-0000-0000-000000000000",
        "000013f2-0000-0000-0000-000000000000",
        "000013f1-0000-0000-0000-000000000000"
      ],
      "ledger_transaction_id": "00000bd2-0000-0000-0000-000000000000",
      "current_return": {
        "id": "0000058a-0000-0000-0000-000000000000",
        "object": "object4",
        "live_mode": false,
        "created_at": "2016-03-13T12:52:32.123Z",
        "updated_at": "2016-03-13T12:52:32.123Z",
        "returnable_id": "00000a82-0000-0000-0000-000000000000",
        "returnable_type": "reversal",
        "code": "R31",
        "reason": "reason6",
        "date_of_death": "2016-03-13T12:52:32.123Z",
        "additional_information": "additional_information8",
        "status": "returned",
        "transaction_line_item_id": "0000011a-0000-0000-0000-000000000000",
        "transaction_id": "000008da-0000-0000-0000-000000000000",
        "internal_account_id": "000018bc-0000-0000-0000-000000000000",
        "type": "book",
        "amount": 12,
        "currency": "MDL",
        "failure_reason": "failure_reason2",
        "role": "originating",
        "current_return": {
          "id": "0000058a-0000-0000-0000-000000000000",
          "object": "object4",
          "live_mode": false,
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "returnable_id": "00000a82-0000-0000-0000-000000000000",
          "returnable_type": "reversal",
          "code": "R31",
          "reason": "reason6",
          "date_of_death": "2016-03-13T12:52:32.123Z",
          "additional_information": "additional_information8",
          "status": "returned",
          "transaction_line_item_id": "0000011a-0000-0000-0000-000000000000",
          "transaction_id": "000008da-0000-0000-0000-000000000000",
          "internal_account_id": "000018bc-0000-0000-0000-000000000000",
          "type": "book",
          "amount": 12,
          "currency": "MDL",
          "failure_reason": "failure_reason2",
          "role": "originating",
          "current_return": {},
          "reference_numbers": [
            {
              "id": "000016a4-0000-0000-0000-000000000000",
              "object": "object4",
              "live_mode": false,
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "reference_number": "reference_number2",
              "reference_number_type": "jpmc_customer_reference_id"
            },
            {
              "id": "000016a4-0000-0000-0000-000000000000",
              "object": "object4",
              "live_mode": false,
              "created_at": "2016-03-13T12:52:32.123Z",
              "updated_at": "2016-03-13T12:52:32.123Z",
              "reference_number": "reference_number2",
              "reference_number_type": "jpmc_customer_reference_id"
            }
          ],
          "ledger_transaction_id": "00001548-0000-0000-0000-000000000000"
        },
        "reference_numbers": [
          {
            "id": "000016a4-0000-0000-0000-000000000000",
            "object": "object4",
            "live_mode": false,
            "created_at": "2016-03-13T12:52:32.123Z",
            "updated_at": "2016-03-13T12:52:32.123Z",
            "reference_number": "reference_number2",
            "reference_number_type": "jpmc_customer_reference_id"
          }
        ],
        "ledger_transaction_id": "00001548-0000-0000-0000-000000000000"
      },
      "transaction_monitoring_enabled": false,
      "compliance_rule_metadata": {
        "key1": "val1",
        "key2": "val2"
      },
      "reference_numbers": [
        {
          "id": "000016a4-0000-0000-0000-000000000000",
          "object": "object4",
          "live_mode": false,
          "created_at": "2016-03-13T12:52:32.123Z",
          "updated_at": "2016-03-13T12:52:32.123Z",
          "reference_number": "reference_number2",
          "reference_number_type": "jpmc_customer_reference_id"
        }
      ],
      "vendor_failure_reason": "vendor_failure_reason4",
      "decision_id": "00000dba-0000-0000-0000-000000000000"
    }
  ],
  "pdf_url": "pdf_url2",
  "status": "payment_pending",
  "total_amount": 166
}
```

