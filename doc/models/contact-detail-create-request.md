
# Contact Detail Create Request

*This model accepts additional fields of type unknown.*

## Structure

`ContactDetailCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactIdentifier` | `string \| undefined` | Optional | - |
| `contactIdentifierType` | [`ContactIdentifierType \| undefined`](../../doc/models/contact-identifier-type.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "contact_identifier": "contact_identifier0",
  "contact_identifier_type": "email",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

