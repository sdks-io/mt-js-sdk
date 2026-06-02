
# Address Request

## Structure

`AddressRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `line1` | `string \| null \| undefined` | Optional | - |
| `line2` | `string \| null \| undefined` | Optional | - |
| `locality` | `string \| null \| undefined` | Optional | Locality or City. |
| `region` | `string \| null \| undefined` | Optional | Region or State. |
| `postalCode` | `string \| null \| undefined` | Optional | The postal code of the address. |
| `country` | `string \| null \| undefined` | Optional | Country code conforms to [ISO 3166-1 alpha-2] |

## Example (as JSON)

```json
{
  "line1": "line10",
  "line2": "line22",
  "locality": "locality2",
  "region": "region4",
  "postal_code": "postal_code0"
}
```

