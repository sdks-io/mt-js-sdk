
# Return Create Request

*This model accepts additional fields of type unknown.*

## Structure

`ReturnCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `returnableId` | `string \| null` | Required | The ID of the object being returned or `null`. |
| `code` | [`Code1 \| null \| undefined`](../../doc/models/code-1.md) | Optional | The return code. For ACH returns, this is the required ACH return code. |
| `reason` | `string \| null \| undefined` | Optional | An optional description of the reason for the return. This is for internal usage and will not be transmitted to the bank.” |
| `dateOfDeath` | `string \| null \| undefined` | Optional | If the return code is `R14` or `R15` this is the date the deceased counterparty passed away. |
| `additionalInformation` | `string \| null \| undefined` | Optional | Some returns may include additional information from the bank. In these cases, this string will be present. |
| `returnableType` | `string` | Required, Constant | The type of object being returned. Currently, this may only be incoming_payment_detail.<br><br>**Value**: `'incoming_payment_detail'` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "returnable_id": "00000936-0000-0000-0000-000000000000",
  "returnable_type": "incoming_payment_detail",
  "code": "R17",
  "reason": "reason8",
  "date_of_death": "2016-03-13T12:52:32.123Z",
  "additional_information": "additional_information6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

