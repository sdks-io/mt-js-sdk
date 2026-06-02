
# Address

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `line1` | `string \| null` | Required | - |
| `line2` | `string \| null` | Required | - |
| `locality` | `string \| null` | Required | Locality or City. |
| `region` | `string \| null` | Required | Region or State. |
| `postalCode` | `string \| null` | Required | The postal code of the address. |
| `country` | `string \| null` | Required | Country code conforms to [ISO 3166-1 alpha-2] |

## Example (as JSON)

```json
{
  "id": "00001640-0000-0000-0000-000000000000",
  "object": "object4",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "line1": "line18",
  "line2": "line20",
  "locality": "locality6",
  "region": "region2",
  "postal_code": "postal_code8",
  "country": "country0"
}
```

