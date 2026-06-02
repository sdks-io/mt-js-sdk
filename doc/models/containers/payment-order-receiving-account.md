
# Payment Order Receiving Account

## Class Name

`PaymentOrderReceivingAccount`

## Cases

| Type |
|  --- |
| [`ReceivingAccount`](../../../doc/models/receiving-account.md) |
| [`InternalAccount`](../../../doc/models/internal-account.md) |

## ReceivingAccount

### Initialization Code

#### Example

```ts
const value: PaymentOrderReceivingAccount = {
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
};
```

## InternalAccount

### Initialization Code

#### Example

```ts
const value: PaymentOrderReceivingAccount = {
  id: '0000086e-0000-0000-0000-000000000000',
  object: 'object6',
  liveMode: false,
  createdAt: '2016-03-13T12:52:32.123Z',
  updatedAt: '2016-03-13T12:52:32.123Z',
  accountType: AccountType5.Savings,
  partyName: 'party_name0',
  partyType: PartyType5.Business,
  partyAddress: {
    id: '00000cb8-0000-0000-0000-000000000000',
    object: 'object6',
    liveMode: false,
    createdAt: '2016-03-13T12:52:32.123Z',
    updatedAt: '2016-03-13T12:52:32.123Z',
    line1: 'line18',
    line2: 'line20',
    locality: 'locality6',
    region: 'region2',
    postalCode: 'postal_code8',
    country: 'country0',
  },
  name: 'name8',
  accountDetails: [
    {
      id: '00000bf8-0000-0000-0000-000000000000',
      object: 'object8',
      liveMode: false,
      createdAt: '2016-03-13T12:52:32.123Z',
      updatedAt: '2016-03-13T12:52:32.123Z',
      discardedAt: '2016-03-13T12:52:32.123Z',
      accountNumberType: AccountNumberType.Other,
      accountNumberSafe: 'account_number_safe6',
    }
  ],
  routingDetails: [
    {
      id: '00001b96-0000-0000-0000-000000000000',
      object: 'object0',
      liveMode: false,
      createdAt: '2016-03-13T12:52:32.123Z',
      updatedAt: '2016-03-13T12:52:32.123Z',
      discardedAt: '2016-03-13T12:52:32.123Z',
      routingNumber: 'routing_number6',
      routingNumberType: RoutingNumberType.GbSortCode,
      paymentType: PaymentType1.Eft,
      bankName: 'bank_name2',
      bankAddress: {
        id: '000004a8-0000-0000-0000-000000000000',
        object: 'object0',
        liveMode: false,
        createdAt: '2016-03-13T12:52:32.123Z',
        updatedAt: '2016-03-13T12:52:32.123Z',
        line1: 'line14',
        line2: 'line26',
        locality: 'locality2',
        region: 'region8',
        postalCode: 'postal_code4',
        country: 'country6',
      },
    }
  ],
  connection: {
    id: '00001eee-0000-0000-0000-000000000000',
    object: 'object4',
    liveMode: false,
    createdAt: '2016-03-13T12:52:32.123Z',
    updatedAt: '2016-03-13T12:52:32.123Z',
    discardedAt: '2016-03-13T12:52:32.123Z',
    vendorId: '00002026-0000-0000-0000-000000000000',
    vendorCustomerId: '0000080c-0000-0000-0000-000000000000',
    vendorName: 'vendor_name0',
  },
  currency: Currency.Egp,
  metadata: {
    'key': 'value',
    'foo': 'bar',
    'modern': 'treasury'
  },
  parentAccountId: '0000052e-0000-0000-0000-000000000000',
  counterpartyId: '0000001a-0000-0000-0000-000000000000',
  ledgerAccountId: '00001cf4-0000-0000-0000-000000000000',
};
```

