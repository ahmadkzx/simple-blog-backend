exports.shorthands = undefined

exports.up = pgm => {
  pgm.createTable('posts', {
    id: 'id',
    title: {
      type: 'varchar(200)',
      notNull: true
    },
    content: {
      type: 'varchar(25000)',
      notNull: true
    },
    slug: {
      type: 'varchar(250)',
      notNull: true
    },
    summary: {
      type: 'varchar(25000)',
      notNull: true
    },
    photo: {
      type: 'varchar(250)',
      notNull: true
    },
    read_duration: 'varchar(10)',
    views: {
      type: 'int4',
      default: 0
    },
    createdAt: {
      type: 'date',
      notNull: true
    },
    isSpecial: 'bool'
  })
}

exports.down = pgm => {
  pgm.dropTable('pgmigrations', { ifExists: true, cascade: true })
  pgm.dropTable('posts', { ifExists: true, cascade: true })
}
