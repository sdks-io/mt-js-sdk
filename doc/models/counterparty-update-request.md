
# Counterparty Update Request

*This model accepts additional fields of type unknown.*

## Structure

`CounterpartyUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | A new name for the counterparty. Will only update if passed. |
| `email` | `string \| undefined` | Optional | A new email for the counterparty. |
| `metadata` | `Record<string, string> \| undefined` | Optional | Additional data in the form of key-value pairs. Pairs can be removed by passing an empty string or `null` as the value. |
| `sendRemittanceAdvice` | `boolean \| undefined` | Optional | If this is `true`, Modern Treasury will send an email to the counterparty whenever an associated payment order is sent to the bank. |
| `taxpayerIdentifier` | `string \| undefined` | Optional | Either a valid SSN or EIN. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "name": "name8",
  "email": "email2",
  "metadata": {
    "key0": "metadata5",
    "key1": "metadata4",
    "key2": "metadata3"
  },
  "send_remittance_advice": false,
  "taxpayer_identifier": "taxpayer_identifier6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

