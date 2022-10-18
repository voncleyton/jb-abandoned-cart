import { json } from 'co-body';
import { createCartUrl } from '../utils/createCartUrl';
import { createArrayItems } from '../utils/createArrayItems';

// interface OrderForm {
//   items: [];
// }

// interface AbandonedCart {

// }

export async function orderForm(ctx: Context, next: () => Promise<any>) {
  // const {
  //   clients: { 
  //     catalog: catalogClient,
  //     // journeyBuilder: JourneyBuilderClient
  //   },
  // } = ctx

  const body: any = await json(ctx.req);

  const cartUrl = createCartUrl(body);
  const items = createArrayItems(body.items);

  // Modo Provisório
  const accountName = body.paymentData.installmentOptions[0].installments[0].sellerMerchantInstallments[0].id.toLowerCase();

  const userObject = {
    customerEmail: body.clientProfileData.email,
    cartURL: 'https://' + accountName + '.myvtex.com/checkout/' + cartUrl,
    customerPhone: body.clientProfileData.phone,
    cartItems: items,
    storeAccountName: accountName,
    customerAdditionalFields: body.shippingData.selectedAddresses,
    storeId: '1'
  }

  ctx.status = 200;
  ctx.body = userObject;

  await next()
}
