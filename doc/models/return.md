
# Return

## Structure

`Return`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `returnableId` | `string \| null` | Required | The ID of the object being returned or `null`. |
| `returnableType` | [`ReturnableTypeEnum \| null`](../../doc/models/returnable-type-enum.md) | Required | The type of object being returned or `null`. |
| `code` | [`Code1Enum \| null`](../../doc/models/code-1-enum.md) | Required | The return code. For ACH returns, this is the required ACH return code. |
| `reason` | `string \| null` | Required | Often the bank will provide an explanation for the return, which is a short human readable string. |
| `dateOfDeath` | `string \| null` | Required | If the return code is `R14` or `R15` this is the date the deceased counterparty passed away. |
| `additionalInformation` | `string \| null` | Required | Some returns may include additional information from the bank. In these cases, this string will be present. |
| `status` | [`Status4Enum`](../../doc/models/status-4-enum.md) | Required | The current status of the return. |
| `transactionLineItemId` | `string \| null` | Required | The ID of the relevant Transaction Line Item or `null`. |
| `transactionId` | `string \| null` | Required | The ID of the relevant Transaction or `null`. |
| `internalAccountId` | `string \| null` | Required | The ID of the relevant Internal Account. |
| `type` | [`Type6Enum`](../../doc/models/type-6-enum.md) | Required | The type of return. Can be one of: `ach`, `ach_noc`, `au_becs`, `bacs`, `eft`, `interac`, `manual`, `paper_item`, `wire`. |
| `amount` | `number` | Required | Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. |
| `currency` | [`CurrencyEnum`](../../doc/models/currency-enum.md) | Required | Three-letter ISO currency code. |
| `failureReason` | `string \| null` | Required | If an originating return failed to be processed by the bank, a description of the failure reason will be available. |
| `role` | [`RoleEnum`](../../doc/models/role-enum.md) | Required | The role of the return, can be `originating` or `receiving`. |
| `currentReturn` | [`Return`](../../doc/models/return.md) | Required | - |
| `referenceNumbers` | [`PaymentReference[]`](../../doc/models/payment-reference.md) | Required | An array of Payment Reference objects. |
| `ledgerTransactionId` | `string \| null` | Required | The ID of the ledger transaction linked to the return. |

## Example (as JSON)

```json
{
  "id": "00000a2e-0000-0000-0000-000000000000",
  "object": "object6",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "returnable_id": "00000f26-0000-0000-0000-000000000000",
  "returnable_type": "paper_item",
  "code": "R38",
  "reason": "reason8",
  "date_of_death": "2016-03-13T12:52:32.123Z",
  "additional_information": "additional_information6",
  "status": "pending",
  "transaction_line_item_id": "000005be-0000-0000-0000-000000000000",
  "transaction_id": "00000d7e-0000-0000-0000-000000000000",
  "internal_account_id": "00001d60-0000-0000-0000-000000000000",
  "type": "manual",
  "amount": 160,
  "currency": "BTC",
  "failure_reason": "failure_reason4",
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
  "ledger_transaction_id": "000010a4-0000-0000-0000-000000000000"
}
```

