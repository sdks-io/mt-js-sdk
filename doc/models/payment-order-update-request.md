
# Payment Order Update Request

*This model accepts additional fields of type unknown.*

## Structure

`PaymentOrderUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type5 \| undefined`](../../doc/models/type-5.md) | Optional | One of `ach`, `eft`, `wire`, `check`, `sen`, `book`, `rtp`, `sepa`, `bacs`, `au_becs`, `interac`, `signet`, `provexchange`. |
| `subtype` | [`Subtype \| null \| undefined`](../../doc/models/subtype.md) | Optional | An additional layer of classification for the type of payment order you are doing. This field is only used for `ach` payment orders currently. For `ach`  payment orders, the `subtype`  represents the SEC code. We currently support `CCD`, `PPD`, `IAT`, `CTX`, `WEB`, `CIE`, and `TEL`. |
| `amount` | `number \| undefined` | Optional | Value in specified currency's smallest unit. e.g. $10 would be represented as 1000 (cents). For RTP, the maximum amount allowed by the network is $100,000. |
| `direction` | [`Direction5 \| undefined`](../../doc/models/direction-5.md) | Optional | One of `credit`, `debit`. Describes the direction money is flowing in the transaction. A `credit` moves money from your account to someone else's. A `debit` pulls money from someone else's account to your own. Note that wire, rtp, and check payments will always be `credit`. |
| `priority` | [`Priority \| undefined`](../../doc/models/priority.md) | Optional | Either `normal` or `high`. For ACH and EFT payments, `high` represents a same-day ACH or EFT transfer, respectively. For check payments, `high` can mean an overnight check rather than standard mail. |
| `originatingAccountId` | `string \| undefined` | Optional | The ID of one of your organization's internal accounts. |
| `receivingAccountId` | `string \| undefined` | Optional | Either `receiving_account` or `receiving_account_id` must be present. When using `receiving_account_id`, you may pass the id of an external account or an internal account. |
| `accounting` | [`Accounting \| undefined`](../../doc/models/accounting.md) | Optional | - |
| `accountingCategoryId` | `string \| null \| undefined` | Optional | The ID of one of your accounting categories. Note that these will only be accessible if your accounting system has been connected. |
| `accountingLedgerClassId` | `string \| null \| undefined` | Optional | The ID of one of your accounting ledger classes. Note that these will only be accessible if your accounting system has been connected. |
| `currency` | [`Currency \| undefined`](../../doc/models/currency.md) | Optional | Three-letter ISO currency code. |
| `effectiveDate` | `string \| undefined` | Optional | Date transactions are to be posted to the participants' account. Defaults to the current business day or the next business day if the current day is a bank holiday or weekend. Format: yyyy-mm-dd. |
| `description` | `string \| null \| undefined` | Optional | An optional description for internal use. |
| `statementDescriptor` | `string \| null \| undefined` | Optional | An optional descriptor which will appear in the receiver's statement. For `check` payments this field will be used as the memo line. For `ach` the maximum length is 10 characters. Note that for ACH payments, the name on your bank account will be included automatically by the bank, so you can use the characters for other useful information. For `eft` the maximum length is 15 characters. |
| `remittanceInformation` | `string \| null \| undefined` | Optional | For `ach`, this field will be passed through on an addenda record. For `wire` payments the field will be passed through as the "Originator to Beneficiary Information", also known as OBI or Fedwire tag 6000. |
| `purpose` | `string \| null \| undefined` | Optional | For `wire`, this is usually the purpose which is transmitted via the "InstrForDbtrAgt" field in the ISO20022 file. If you are using Currencycloud, this is the `payment.purpose_code` field. For `eft`, this field is the 3 digit CPA Code that will be attached to the payment. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `chargeBearer` | [`ChargeBearer \| null \| undefined`](../../doc/models/charge-bearer.md) | Optional | The party that will pay the fees for the payment order. Only applies to wire payment orders. Can be one of shared, sender, or receiver, which correspond respectively with the SWIFT 71A values `SHA`, `OUR`, `BEN`. |
| `foreignExchangeIndicator` | [`ForeignExchangeIndicator \| null \| undefined`](../../doc/models/foreign-exchange-indicator.md) | Optional | Indicates the type of FX transfer to initiate, can be either `variable_to_fixed`, `fixed_to_variable`, or `null` if the payment order currency matches the originating account currency. |
| `foreignExchangeContract` | `string \| null \| undefined` | Optional | If present, indicates a specific foreign exchange contract number that has been generated by your financial institution. |
| `nsfProtected` | `boolean \| undefined` | Optional | A boolean to determine if NSF Protection is enabled for this payment order. Note that this setting must also be turned on in your organization settings page. |
| `originatingPartyName` | `string \| null \| undefined` | Optional | If present, this will replace your default company name on receiver's bank statement. This field can only be used for ACH payments currently. For ACH, only the first 16 characters of this string will be used. Any additional characters will be truncated. |
| `ultimateOriginatingPartyName` | `string \| null \| undefined` | Optional | This represents the name of the person that the payment is on behalf of when using the CIE subtype for ACH payments. Only the first 15 characters of this string will be used. Any additional characters will be truncated. |
| `ultimateOriginatingPartyIdentifier` | `string \| null \| undefined` | Optional | This represents the identifier by which the person is known to the receiver when using the CIE subtype for ACH payments. Only the first 22 characters of this string will be used. Any additional characters will be truncated. |
| `ultimateReceivingPartyName` | `string \| null \| undefined` | Optional | This represents the identifier by which the merchant is known to the person initiating an ACH payment with CIE subtype. Only the first 15 characters of this string will be used. Any additional characters will be truncated. |
| `ultimateReceivingPartyIdentifier` | `string \| null \| undefined` | Optional | This represents the name of the merchant that the payment is being sent to when using the CIE subtype for ACH payments. Only the first 22 characters of this string will be used. Any additional characters will be truncated. |
| `sendRemittanceAdvice` | `boolean \| null \| undefined` | Optional | Send an email to the counterparty when the payment order is sent to the bank. If `null`, `send_remittance_advice` on the Counterparty is used. |
| `expiresAt` | `string \| null \| undefined` | Optional | RFP payments require an expires_at. This value must be past the effective_date. |
| `status` | [`Status18 \| undefined`](../../doc/models/status-18.md) | Optional | To cancel a payment order, use `cancelled`. To redraft a returned payment order, use `approved`. To undo approval on a denied or approved payment order, use `needs_approval`. |
| `counterpartyId` | `string \| null \| undefined` | Optional | Required when receiving_account_id is passed the ID of an external account. |
| `fallbackType` | [`FallbackType \| undefined`](../../doc/models/fallback-type.md) | Optional | A payment type to fallback to if the original type is not valid for the receiving account. Currently, this only supports falling back from RTP to ACH (type=rtp and fallback_type=ach) |
| `receivingAccount` | [`ReceivingAccount1 \| undefined`](../../doc/models/receiving-account-1.md) | Optional | Either `receiving_account` or `receiving_account_id` must be present. When using `receiving_account_id`, you may pass the id of an external account or an internal account. |
| `lineItems` | [`LineItemRequest[] \| undefined`](../../doc/models/line-item-request.md) | Optional | An array of line items that must sum up to the amount of the payment order. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "type": "ach",
  "subtype": "IAT",
  "amount": 44,
  "direction": "credit",
  "priority": "high",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

