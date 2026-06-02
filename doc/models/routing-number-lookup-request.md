
# Routing Number Lookup Request

## Structure

`RoutingNumberLookupRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `routingNumber` | `string \| undefined` | Optional | The routing number of the bank. |
| `routingNumberType` | [`RoutingNumberType7Enum \| undefined`](../../doc/models/routing-number-type-7-enum.md) | Optional | One of `aba`, `au_bsb`, `br_codigo`, `ca_cpa`, `cnaps`, `gb_sort_code`, `in_ifsc`, `my_branch_code`, or `swift`. In sandbox mode we currently only support `aba` and `swift` with routing numbers '123456789' and 'GRINUST0XXX' respectively. |
| `supportedPaymentTypes` | [`SupportedPaymentTypeEnum[] \| undefined`](../../doc/models/supported-payment-type-enum.md) | Optional | An array of payment types that are supported for this routing number. This can include `ach`, `wire`, `rtp`, `sepa`, `bacs`, `au_becs` currently.<br><br>**Constraints**: *Maximum Items*: `17` |
| `bankName` | `string \| undefined` | Optional | The name of the bank. |
| `bankAddress` | [`AddressRequest \| undefined`](../../doc/models/address-request.md) | Optional | - |
| `sanctions` | `unknown \| undefined` | Optional | An object containing key-value pairs, each with a sanctions list as the key and a boolean value representing whether the bank is on that particular sanctions list. Currently, this includes eu_con, uk_hmt, us_ofac, and un sanctions lists. |

## Example (as JSON)

```json
{
  "supported_payment_types": [
    "ach",
    "au_becs",
    "bacs",
    "book",
    "card",
    "check",
    "cross_border",
    "eft",
    "interac",
    "masav",
    "neft",
    "provxchange",
    "rtp",
    "sen",
    "sepa",
    "signet",
    "wire"
  ],
  "routing_number": "routing_number2",
  "routing_number_type": "ca_cpa",
  "bank_name": "bank_name6",
  "bank_address": {
    "line1": "line14",
    "line2": "line26",
    "locality": "locality2",
    "region": "region8",
    "postal_code": "postal_code4"
  }
}
```

