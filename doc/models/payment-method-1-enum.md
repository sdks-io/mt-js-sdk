
# Payment Method 1 Enum

The method by which the invoice can be paid. `ui` will show the embedded payment collection flow. `automatic` will automatically initiate payment based upon the account details of the receiving_account id.\nIf the invoice amount is positive, the automatically initiated payment order's direction will be debit. If the invoice amount is negative, the automatically initiated payment order's direction will be credit. One of `manual`, `ui`, or `automatic`.

## Enumeration

`PaymentMethod1Enum`

## Fields

| Name |
|  --- |
| `Ui` |
| `Manual` |
| `Automatic` |

