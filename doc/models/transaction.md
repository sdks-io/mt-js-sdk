
# Transaction

## Structure

`Transaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `discardedAt` | `string \| null` | Required | - |
| `amount` | `number` | Required | Value in specified currency's smallest unit. e.g. $10 would be represented as 1000. |
| `currency` | [`CurrencyEnum`](../../doc/models/currency-enum.md) | Required | Three-letter ISO currency code. |
| `direction` | `string` | Required | Either `credit` or `debit`. |
| `vendorDescription` | `string \| null` | Required | The transaction detail text that often appears in on your bank statement and in your banking portal. |
| `vendorCode` | `string \| null` | Required | When applicable, the bank-given code that determines the transaction's category. For most banks this is the BAI2/BTRS transaction code. |
| `vendorCodeType` | [`VendorCodeType1Enum \| null`](../../doc/models/vendor-code-type-1-enum.md) | Required | The type of `vendor_code` being reported. Can be one of `bai2`, `bankprov`, `bnk_dev`, `cleartouch`, `currencycloud`, `cross_river`, `dc_bank`, `dwolla`, `evolve`, `goldman_sachs`, `iso20022`, `jpmc`, `mx`, `signet`, `silvergate`, `swift`, or `us_bank`. |
| `vendorId` | `string \| null` | Required | An identifier given to this transaction by the bank. |
| `asOfDate` | `string \| null` | Required | The date on which the transaction occurred. |
| `asOfTime` | `string \| null` | Required | The time on which the transaction occurred. Depending on the granularity of the timestamp information received from the bank, it may be `null`. |
| `internalAccountId` | `string` | Required | The ID of the relevant Internal Account. |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `posted` | `boolean` | Required | This field will be `true` if the transaction has posted to the account. |
| `vendorCustomerId` | `string \| null` | Required | An identifier given to this transaction by the bank, often `null`. |
| `reconciled` | `boolean` | Required | This field will be `true` if a transaction is reconciled by the Modern Treasury system. This means that it has transaction line items that sum up to the transaction's amount. |
| `details` | `Record<string, string>` | Required | This field contains additional information that the bank provided about the transaction. This is structured data. Some of the data in here might overlap with what is in the `vendor_description`. For example, the OBI could be a part of the vendor description, and it would also be included in here. The attributes that are passed through the details field will vary based on your banking partner. Currently, the following keys may be in the details object: `originator_name`, `originator_to_beneficiary_information`. |
| `type` | [`Type11Enum`](../../doc/models/type-11-enum.md) | Required | The type of the transaction. Can be one of `ach`, `wire`, `check`, `rtp`, `book`, or `sen`. |

## Example (as JSON)

```json
{
  "id": "00001d68-0000-0000-0000-000000000000",
  "object": "object4",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "discarded_at": "2016-03-13T12:52:32.123Z",
  "amount": 234,
  "currency": "USD",
  "direction": "direction4",
  "vendor_description": "vendor_description4",
  "vendor_code": "vendor_code0",
  "vendor_code_type": "goldman_sachs",
  "vendor_id": "vendor_id0",
  "as_of_date": "2016-03-13T12:52:32.123Z",
  "as_of_time": "2016-03-13T12:52:32.123Z",
  "internal_account_id": "0000098a-0000-0000-0000-000000000000",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "posted": false,
  "vendor_customer_id": "vendor_customer_id0",
  "reconciled": false,
  "details": {
    "key0": "details3",
    "key1": "details4",
    "key2": "details5"
  },
  "type": "sepa"
}
```

