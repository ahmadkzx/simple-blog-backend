import db from '../utils/db'

export async function getSpecialPost(req, res) {
  try {
    const { rows: posts } = await db.query('SELECT * FROM posts WHERE is_special = true')

    if (!posts?.length) {
      return res.status(404).json({ errors: [ 'Post Not Found' ] })
    }

    res.status(200).json({ data: posts[0] })
    
  } catch(err) {
    console.error('[Get Special Post]: ', err)
    res.status(500).json({ errors: [ 'Server Internal Error' ] })
  }
}