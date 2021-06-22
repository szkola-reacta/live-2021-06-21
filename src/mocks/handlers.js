import { rest } from 'msw'

export const handlers = [
  rest.get('https://randomuser.me/api/', (_req, res, ctx) => {
    // const { username } = req.body

    return res(
      ctx.json({
        results: [{
          id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
          name: {
            first: 'Jan',
            last: 'Maverick',
          }
        }]
      })
    )
  }),
]