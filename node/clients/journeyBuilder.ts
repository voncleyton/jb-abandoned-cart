import { ExternalClient,  InstanceOptions, IOContext } from "@vtex/api";

export default class JourneyBuilder extends ExternalClient {
  constructor(ctx: IOContext, opts?: InstanceOptions) {
    super('https://webhook.site', ctx, {...opts})
  }

  // public async createAbandonedCart(userObject: {}): Promise<any> {
  //   return 'OIEEE';
  // }

  public async createCart(userObject: {}): Promise<any>  {
    const data = userObject;
    // this.http.post(`https://webhook.site/14d3297a-3b86-4bb5-9e81-5b8acc1186fa`, data)

    return data;
  }
}