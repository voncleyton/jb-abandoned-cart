import { json } from 'co-body'

export async function orderForm(ctx: Context, next: () => Promise<any>) {
  const body: any = await json(ctx.req)

  console.log('ORDER-FORM:', body);

  ctx.status = 200;
  ctx.body = { ok: true };

  await next()
}
