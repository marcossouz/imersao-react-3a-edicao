import { SiteClient } from 'datocms-client'

export default async function recebedorDeRequest(request, response) {

  if (request.method === 'POST') {
    const TOKEN = "a208e34c3836bafd65f1f3f5d03916";
    const client = new SiteClient(TOKEN)

    // Validar os dados
    const record = await client.items.create({
      itemType: "970509",
      ...request.body,
      // title: "Comunidade de teste",
      // imageUrl: "https://github.com/marcossouz.png",
      // creatorSlug: "marcossouz"
    })

    response.json({
      dados: "algum dado",
      record: record,
    })
    return;
  }

  response.status(404).json({
    message: 'Nada no GET',
  })
}