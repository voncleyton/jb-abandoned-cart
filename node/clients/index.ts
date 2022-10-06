import { IOClients } from '@vtex/api'

import Catalog from './catalog'
import Message from './message'
import JourneyBuilder from './journeyBuilder'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get catalog() {
    return this.getOrSet('catalog', Catalog)
  }

  public get message() {
    return this.getOrSet('message', Message)
  }

  public get journeyBuilder() {
    return this.getOrSet('journeyBuilder', JourneyBuilder)
  }
}