
# Party Address

The address associated with the owner or null.

*This model accepts additional fields of type unknown.*

## Structure

`PartyAddress`

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
}
```

