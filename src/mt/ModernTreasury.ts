/**
 * Modern Treasury — convergence façade client (Tier 2, hand-authored, regeneration-safe).
 *
 * Presents the APIMatic SDK with a Stainless-shaped surface:
 *   const client = new ModernTreasury({ organizationID, apiKey });
 *   const cp = await client.counterparties.create({ name: 'Acme' });
 *   for await (const c of client.counterparties.list()) { ... }
 */
import { Client } from '../client.js';
import { Environment } from '../configuration.js';
import { DEFAULT_RETRY_CONFIG } from '../defaultConfiguration.js';
import type { FacadeRoot } from './resource.js';
import { AccountCollectionFlows } from './resources/accountCollectionFlows.js';
import { AccountDetails } from './resources/accountDetails.js';
import { Connections } from './resources/connections.js';
import { Counterparties } from './resources/counterparties.js';
import { Documents } from './resources/documents.js';
import { Events } from './resources/events.js';
import { ExpectedPayments } from './resources/expectedPayments.js';
import { ExternalAccounts } from './resources/externalAccounts.js';
import { IncomingPaymentDetails } from './resources/incomingPaymentDetails.js';
import { InternalAccounts } from './resources/internalAccounts.js';
import { Invoices } from './resources/invoices.js';
import { LedgerableEvents } from './resources/ledgerableEvents.js';
import { LedgerAccounts } from './resources/ledgerAccounts.js';
import { LedgerAccountCategories } from './resources/ledgerAccountCategories.js';
import { LedgerAccountPayouts } from './resources/ledgerAccountPayouts.js';
import { LedgerAccountStatements } from './resources/ledgerAccountStatements.js';
import { Ledgers } from './resources/ledgers.js';
import { LedgerEntries } from './resources/ledgerEntries.js';
import { LedgerEventHandlers } from './resources/ledgerEventHandlers.js';
import { LedgerTransactions } from './resources/ledgerTransactions.js';
import { LineItems } from './resources/lineItems.js';
import { PaperItems } from './resources/paperItems.js';
import { PaymentFlows } from './resources/paymentFlows.js';
import { PaymentOrders } from './resources/paymentOrders.js';
import { PaymentReferences } from './resources/paymentReferences.js';
import { Pings } from './resources/pings.js';
import { Returns } from './resources/returns.js';
import { RoutingDetails } from './resources/routingDetails.js';
import { Transactions } from './resources/transactions.js';
import { Validations } from './resources/validations.js';
import { VirtualAccounts } from './resources/virtualAccounts.js';

export interface ModernTreasuryOptions {
  /** Maps to APIMatic basicAuthCredentials.username. */
  organizationID: string;
  /** Maps to APIMatic basicAuthCredentials.password. */
  apiKey: string;
  /** Request timeout in ms (default 60000, matching the tuned SDK). */
  timeout?: number;
  /** Max retry attempts (default 2, matching the tuned SDK). */
  maxRetries?: number;
}

export class ModernTreasury implements FacadeRoot {
  /** @internal The generated APIMatic engine this façade delegates to. */
  readonly _client: Client;

  readonly accountCollectionFlows = new AccountCollectionFlows(this);
  readonly accountDetails = new AccountDetails(this);
  readonly connections = new Connections(this);
  readonly counterparties = new Counterparties(this);
  readonly documents = new Documents(this);
  readonly events = new Events(this);
  readonly expectedPayments = new ExpectedPayments(this);
  readonly externalAccounts = new ExternalAccounts(this);
  readonly incomingPaymentDetails = new IncomingPaymentDetails(this);
  readonly internalAccounts = new InternalAccounts(this);
  readonly invoices = new Invoices(this);
  readonly ledgerableEvents = new LedgerableEvents(this);
  readonly ledgerAccounts = new LedgerAccounts(this);
  readonly ledgerAccountCategories = new LedgerAccountCategories(this);
  readonly ledgerAccountPayouts = new LedgerAccountPayouts(this);
  readonly ledgerAccountStatements = new LedgerAccountStatements(this);
  readonly ledgers = new Ledgers(this);
  readonly ledgerEntries = new LedgerEntries(this);
  readonly ledgerEventHandlers = new LedgerEventHandlers(this);
  readonly ledgerTransactions = new LedgerTransactions(this);
  readonly lineItems = new LineItems(this);
  readonly paperItems = new PaperItems(this);
  readonly paymentFlows = new PaymentFlows(this);
  readonly paymentOrders = new PaymentOrders(this);
  readonly paymentReferences = new PaymentReferences(this);
  readonly pings = new Pings(this);
  readonly returns = new Returns(this);
  readonly routingDetails = new RoutingDetails(this);
  readonly transactions = new Transactions(this);
  readonly validations = new Validations(this);
  readonly virtualAccounts = new VirtualAccounts(this);

  constructor(options: ModernTreasuryOptions) {
    this._client = new Client({
      basicAuthCredentials: {
        username: options.organizationID,
        password: options.apiKey,
      },
      timeout: options.timeout ?? 60000,
      environment: Environment.Production,
      ...(options.maxRetries != null
        ? {
            httpClientOptions: {
              retryConfig: {
                ...DEFAULT_RETRY_CONFIG,
                maxNumberOfRetries: options.maxRetries,
              },
            },
          }
        : {}),
    });
  }
}
