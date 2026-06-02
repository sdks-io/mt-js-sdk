
# Counterparty Collect Account Response

## Structure

`CounterpartyCollectAccountResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required | The id of the existing counterparty. |
| `isResend` | `boolean` | Required | This field will be `true` if an email requesting account details has already been sent to this counterparty. |
| `formLink` | `string` | Required | This is the link to the secure Modern Treasury form. By default, Modern Treasury will send an email to your counterparty that includes a link to this form. However, if `send_email` is passed as `false` in the body then Modern Treasury will not send the email and you can send it to the counterparty directly. |

## Example (as JSON)

```json
{
  "id": "id2",
  "is_resend": false,
  "form_link": "form_link4"
}
```

