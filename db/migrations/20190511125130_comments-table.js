// body: "I am 100% sure that we're not completely sure.",
// belongs_to: 'UNCOVERED: catspiracy to bring down democracy',
// created_by: 'butter_bridge',
// votes: 1,
// created_at: 1069850163389,

exports.up = knex => {
  return knex.schema.createTable('comments', commentsTable => {
    commentsTable.increments('comment_id').primary();
    commentsTable.string('body', 511).notNullable();
    commentsTable.integer('votes').defaultTo(0);
    commentsTable.timestamp('created_at').defaultTo(knex.fn.now());
    commentsTable
      .integer('belongs_to')
      .references('article_id')
      .inTable('articles')
      .notNullable();
    commentsTable
      .string('author')
      .references('username')
      .inTable('users')
      .notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTableIfExists('comments');
};
