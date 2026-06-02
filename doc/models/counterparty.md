
# Counterparty

## Structure

`Counterparty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | - |
| `object` | `string` | Required | - |
| `liveMode` | `boolean` | Required | This field will be true if this object exists in the live environment or false if it exists in the test environment. |
| `createdAt` | `string` | Required | - |
| `updatedAt` | `string` | Required | - |
| `discardedAt` | `string \| null` | Required | - |
| `name` | `string \| null` | Required | A human friendly name for this counterparty. |
| `accounts` | [`Account[]`](../../doc/models/account.md) | Required | The accounts for this counterparty. |
| `email` | `string \| null` | Required | The counterparty's email. |
| `metadata` | `Record<string, string>` | Required | Additional data represented as key-value pairs. Both the key and value must be strings. |
| `sendRemittanceAdvice` | `boolean` | Required | Send an email to the counterparty whenever an associated payment order is sent to the bank. |
| `verificationStatus` | [`VerificationStatus1`](../../doc/models/verification-status-1.md) | Required | The verification status of the counterparty. |

## Example (as JSON)

```json
{
  "id": "00002092-0000-0000-0000-000000000000",
  "object": "object4",
  "live_mode": false,
  "created_at": "2016-03-13T12:52:32.123Z",
  "updated_at": "2016-03-13T12:52:32.123Z",
  "discarded_at": "2016-03-13T12:52:32.123Z",
  "name": "name8",
  "accounts": [
    {
      "metadata": {
        "key": "value",
        "foo": "bar",
        "modern": "treasury"
      },
      "id": "00000c1c-0000-0000-0000-000000000000",
      "object": "object8",
      "live_mode": false,
      "created_at": "2016-03-13T12:52:32.123Z",
      "updated_at": "2016-03-13T12:52:32.123Z"
    }
  ],
  "email": "email8",
  "metadata": {
    "key": "value",
    "foo": "bar",
    "modern": "treasury"
  },
  "send_remittance_advice": false,
  "verification_status": "unverified"
}
```

