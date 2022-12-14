import { json } from 'co-body';
import { createCartUrl } from '../utils/createCartUrl';
import { createArrayItems } from '../utils/createArrayItems';

export async function orderForm(ctx: Context, next: () => Promise<any>) {
  const {
    clients: {
      journeyBuilder: JourneyBuilderClient
    },
  } = ctx

  const body: any = await json(ctx.req);

  const cartUrl = createCartUrl(body);
  const items = createArrayItems(body.items);

  console.log(body);

  let accountName = ctx.vtex.account;

  const userObject = {
    customerEmail: body.clientProfileData.email,
    cartURL: 'https://' + accountName + '.myvtex.com/checkout/' + cartUrl,
    customerPhone: body.clientProfileData.phone,
    cartItems: items,
    storeAccountName: accountName,
    customerAdditionalFields: body.shippingData.selectedAddresses,
    storeId: body.storeId || '',
    orderFormId: body.orderFormId
  }

  const createAbandonedCart = await JourneyBuilderClient.createAbandonedCart(userObject);

  ctx.status = 200;
  ctx.body = createAbandonedCart;

  await next()
}
