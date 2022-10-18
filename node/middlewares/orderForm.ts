import { json } from 'co-body';
import { createCartUrl } from '../utils/createCartUrl';

// interface OrderForm {
//   items: [];
// }

// interface AbandonedCart {

// }

export async function orderForm(ctx: Context, next: () => Promise<any>) {
  // const {
  //   clients: { 
  //     journeyBuilder: JourneyBuilderClient
  //   },
  // } = ctx;

  const body: any = await json(ctx.req);

  const cartUrl = createCartUrl(body);

  // Modo Provisório
  const accountName = body.paymentData.installmentOptions[0].installments[0].sellerMerchantInstallments[0].id.toLowerCase();

  const userObject = {
    storeClientEmail: body.clientProfileData.email,
    urlCart: 'https://' + accountName + '.myvtex.com/checkout/' + cartUrl,
    storeUserPhoneNumber: body.clientProfileData.phone
  }

  ctx.status = 200;
  ctx.body = userObject;

  await next()
}
