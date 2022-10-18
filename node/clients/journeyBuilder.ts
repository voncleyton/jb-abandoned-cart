import { ExternalClient,  InstanceOptions, IOContext } from "@vtex/api";

export default class JourneyBuilder extends ExternalClient {
  constructor(ctx: IOContext, opts?: InstanceOptions) {
    super('https://mozarthooks.code7homolog.com.br', ctx, {
      ...opts,
      headers: {
        'X-VTEX-Use-Https': 'true',
        'Proxy-Authorization': ctx.authToken
      }
    })
  }

  public async createAbandonedCart(userObject: {}): Promise<any> {
    const data = userObject;
    return this.http.post(`/dev/abandoned-cart`, data);
  }
}