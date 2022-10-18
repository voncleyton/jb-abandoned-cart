import { IOClients } from '@vtex/api'

import JourneyBuilder from './journeyBuilder'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get journeyBuilder() {
    return this.getOrSet('journeyBuilder', JourneyBuilder)
  }
}