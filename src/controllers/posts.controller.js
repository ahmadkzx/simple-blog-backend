import db from '../utils/db'

export async function getPosts(req, res) {
  try {
    const limit = req.params.limit || 6
    const offset = req.params.offset || 0

    const { rows: posts } = await db.query('SELECT * FROM posts LIMIT $1 OFFSET $2', [ limit, offset ])

    res.status(200).json({ data: posts })

  } catch(err) {
    console.error('[Get Posts]: ', err)
    res.status(500).json({ errors: [ 'Server Internal Error' ] })
  }
}

export async function getPostByID(req, res) {
  try {
    const postId = req.params.id
    if (!postId || Number.isNaN(+postId)) return res.status(403).json({ errors: [ 'Post Id Is Not Valid' ] })

    const { rows: posts } = await db.query('SELECT * FROM posts WHERE id = $1', [ postId ])

    if (!posts?.length) {
      return res.status(404).json({ errors: [ 'Post Not Found' ] })
    }

    const currentViewsCount = posts[0].views

    await db.query('UPDATE posts SET views = $1 WHERE id = $2', [ currentViewsCount + 1, postId ])

    res.status(200).json({ data: posts[0] })

  } catch(err) {
    console.error('[Get Post By Id]: ', err)
    res.status(500).json({ errors: [ 'Server Internal Error' ] })
  }
}