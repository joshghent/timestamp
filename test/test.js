const timestamp = require('./../timestamp.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');
const should = chai.should();
const expect = chai.expect();
const request = require('supertest');
const assert = require('assert');
let url = 'http://localhost:3005'

chai.use(chaiHttp);

describe('Natural Language', () => {
  it('Long date should return correct timestamp and input date', (done) => {
    request(url)
      .put('/Wednesday 28 December 2016')
      .expect('Content-Type', '/json/')
      .expect(200)
      .end((err, res) => {
        res.body.unix.should.equal(1482883200);
        res.body.natural.should.equal('Wednesday 28 December 2016');
        done();
      });
  });

  it('Short date should return correct timestamp and input date', (done) => {
    request(url)
      .put('/Wed 28 Dec 2016')
      .expect('Content-Type', '/json/')
      .expect(200)
      .end((err, res) => {
        res.body.unix.should.equal(1482883200);
        res.body.natural.should.equal('Wednesday 28 December 2016');
        done();
      });
  });

  it('Input without day name returns correctly', (done) => {
    request(url)
      .put('/28 Dec 2016')
      .expect('Content-Type', '/json/')
      .expect(200)
      .end((err, res) => {
        res.body.unix.should.equal(1482883200);
        res.body.natural.should.equal('Wednesday 28 December 2016');
        done();
      });
  });

  it('Input containing the wrong day name will still return the correct date', (done) => {
    request(url)
      .put('/Monday 28 December 2016')
      .expect('Content-Type', '/json/')
      .expect(200)
      .end((err, res) => {
        res.body.unix.should.equal(1482883200);
        res.body.natural.should.equal('Wednesday 28 December 2016');
        done();
      });
  });

  it('Submitted just the month and year will return the first', (done) => {
    request(url)
      .put('/Jan 2016')
      .expect('Content-Type', '/json/')
      .expect(200)
      .end((err, res) => {
        res.body.unix.should.equal(1451606400);
        res.body.natural.should.equal('Friday 1 January 2016');
        done();
      });
  });
});

/*
describe('Unix timestamp')
describe('ISO format')
describe('NL: Month and year will return the first')
*/