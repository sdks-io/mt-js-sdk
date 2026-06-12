
# Getting Started with Modern Treasury

## Introduction

The Modern Treasury REST API. Please see https://docs.moderntreasury.com for more details.

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install mt-sdk-apimatic
```

For additional package details, see the [Npm page for the mt-sdk-apimatic npm](https://www.npmjs.com/package/mt-sdk-apimatic).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | [`Environment`](README.md#environments) | The API environment. <br> **Default: `Environment.Production`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `60000` |
| httpClientOptions | [`Partial<HttpClientOptions>`](doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| logging | [`PartialLoggingOptions`](doc/partial-logging-options.md) | Logging Configuration to enable logging |
| basicAuthCredentials | [`BasicAuthCredentials`](doc/auth/basic-authentication.md) | The credential object for basicAuth |

The API client can be initialized as follows:

### Code-Based Client Initialization

```ts
import { Client, Environment, LogLevel } from 'mt-sdk-apimatic';

const client = new Client({
  basicAuthCredentials: {
    username: 'BasicAuthUserName',
    password: 'BasicAuthPassword'
  },
  timeout: 60000,
  environment: Environment.Production,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  },
});
```

### Configuration-Based Client Initialization

```ts
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'mt-sdk-apimatic';

// Provide absolute path for the configuration file
const absolutePath = path.resolve('./config.json');

// Read the configuration file content
const fileContent = fs.readFileSync(absolutePath, 'utf-8');

// Initialize client from JSON configuration content
const client = Client.fromJsonConfig(fileContent);
```

See the [Configuration-Based Client Initialization](doc/configuration-based-client-initialization.md) section for details.

### Environment-Based Client Initialization

```ts
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { Client } from 'mt-sdk-apimatic';

// Optional - Provide absolute path for the .env file
const absolutePath = path.resolve('./.env');

if (fs.existsSync(absolutePath)) {
  // Load environment variables from .env file
  dotenv.config({ path: absolutePath, override: true });
}

// Initialize client using environment variables
const client = Client.fromEnvironment(process.env);
```

See the [Environment-Based Client Initialization](doc/environment-based-client-initialization.md) section for details.

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| Production | **Default** |
| Environment2 | - |

## Authorization

This API uses the following authentication schemes.

* [`basic_auth (Basic Authentication)`](doc/auth/basic-authentication.md)

## List of APIs

* [Account Collection Flow](doc/controllers/account-collection-flow.md)
* [Account Detail](doc/controllers/account-detail.md)
* [Balance Report](doc/controllers/balance-report.md)
* [Connection](doc/controllers/connection.md)
* [Counterparty](doc/controllers/counterparty.md)
* [Document](doc/controllers/document.md)
* [Event](doc/controllers/event.md)
* [Expected Payment](doc/controllers/expected-payment.md)
* [External Account](doc/controllers/external-account.md)
* [Incoming Payment Detail](doc/controllers/incoming-payment-detail.md)
* [Internal Account](doc/controllers/internal-account.md)
* [Invoice](doc/controllers/invoice.md)
* [Invoice Line Item](doc/controllers/invoice-line-item.md)
* [Ledger](doc/controllers/ledger.md)
* [Ledgerable Event](doc/controllers/ledgerable-event.md)
* [Ledger Account](doc/controllers/ledger-account.md)
* [Ledger Account Category](doc/controllers/ledger-account-category.md)
* [Ledger Account Payout](doc/controllers/ledger-account-payout.md)
* [Ledger Account Statement](doc/controllers/ledger-account-statement.md)
* [Ledger Entry](doc/controllers/ledger-entry.md)
* [Ledger Event Handler](doc/controllers/ledger-event-handler.md)
* [Ledger Transaction](doc/controllers/ledger-transaction.md)
* [Line Item](doc/controllers/line-item.md)
* [Paper Item](doc/controllers/paper-item.md)
* [Payment Flow](doc/controllers/payment-flow.md)
* [Payment Order](doc/controllers/payment-order.md)
* [Payment Reference](doc/controllers/payment-reference.md)
* [Ping](doc/controllers/ping.md)
* [Return](doc/controllers/return.md)
* [Reversal](doc/controllers/reversal.md)
* [Routing Detail](doc/controllers/routing-detail.md)
* [Transaction](doc/controllers/transaction.md)
* [Transaction Line Item](doc/controllers/transaction-line-item.md)
* [Validation](doc/controllers/validation.md)
* [Virtual Account](doc/controllers/virtual-account.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](doc/http-client-options.md)
* [RetryConfiguration](doc/retry-configuration.md)
* [ProxySettings](doc/proxy-settings.md)
* [Configuration-Based Client Initialization](doc/configuration-based-client-initialization.md)
* [Environment-Based Client Initialization](doc/environment-based-client-initialization.md)
* [PartialLoggingOptions](doc/partial-logging-options.md)
* [PartialRequestLoggingOptions](doc/partial-request-logging-options.md)
* [PartialResponseLoggingOptions](doc/partial-response-logging-options.md)
* [LoggerInterface](doc/logger-interface.md)

### HTTP

* [HttpRequest](doc/http-request.md)

### Utilities

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

