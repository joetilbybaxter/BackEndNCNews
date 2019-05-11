process.env.NODE_ENV = 'test';

const { expect } = require('chai');
const request = require('supertest');

const app = require('../app');
const connection = require('../db/connection');

describe('/', () => {
  beforeEach(() => connection.seed.run());
  after(() => connection.destroy());

  describe('/api', () => {
    it('GET status:200', async () => {
      const { body } = await request(app)
        .get('/api')
        .expect(200);
      expect(body.ok).to.equal(true);
    });

    describe('/topics', () => {
      it('GET status:200, serves all topics', async () => {
        const { body } = await request(app)
          .get('/api/topics')
          .expect(200);
        expect(body).to.contain.keys('topics');
        expect(body.topics).to.be.an('array');
        expect(body.topics).to.have.length(3);
        expect(body.topics[0]).to.contain.keys('slug', 'description');
      });
      it('INVALID METHOD status:405', async () => {
        const { body } = await request(app)
          .put('/api/topics')
          .expect(405);
        expect(body.msg).to.equal('Method Not Allowed');
      });
    });

    describe('/articles', () => {
      it('GET status:200, serves an array of articles', async () => {
        const { body } = await request(app)
          .get('/api/articles')
          .expect(200);
        expect(body).to.contain.keys('articles');
        expect(body.articles).to.be.an('array');
        expect(body.articles[0]).to.contain.keys(
          'article_id',
          'author',
          'title',
          'topic',
          'created_at',
          'votes',
        );
      });
      it('INVALID METHOD status:405', async () => {
        const { body } = await request(app)
          .put('/api/articles')
          .expect(405);
        expect(body.msg).to.equal('Method Not Allowed');
      });
    });
  });
});
