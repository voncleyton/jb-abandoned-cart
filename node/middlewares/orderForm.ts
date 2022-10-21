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

  // Modo Provisório
  // const accountName = body.paymentData.installmentOptions[0].installments[0].sellerMerchantInstallments[0].id.toLowerCase();

  // Modo Provisório 2
  let accountName = '';

  ctx.req.rawHeaders.map(item => {
    if(item.includes('.myvtex.com')) {
      accountName = item.split('.')[0];
    }
  });

  const userObject = {
    customerEmail: body.clientProfileData.email,
    cartURL: 'https://' + accountName + '.myvtex.com/checkout/' + cartUrl,
    customerPhone: body.clientProfileData.phone,
    cartItems: items,
    storeAccountName: accountName,
    customerAdditionalFields: body.shippingData.selectedAddresses,
    storeId: body.apiKey
    storeId: '1'
  }

  const createAbandonedCart = await JourneyBuilderClient.createAbandonedCart(userObject);

  ctx.status = 200;
  ctx.body = createAbandonedCart;

  await next()
}
