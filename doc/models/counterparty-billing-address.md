
# Counterparty Billing Address

The counterparty's billing address.

*This model accepts additional fields of type unknown.*

## Structure

`CounterpartyBillingAddress`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `line1` | `string` | Required | - |
| `line2` | `string \| undefined` | Optional | - |
| `locality` | `string` | Required | Locality or City. |
| `region` | `string` | Required | Region or State. |
| `postalCode` | `string` | Required | The postal code of the address. |
| `country` | `string` | Required | Country code conforms to [ISO 3166-1 alpha-2] |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "line1": "line14",
  "line2": "line26",
  "locality": "locality2",
  "region": "region8",
  "postal_code": "postal_code4",
  "country": "country6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

