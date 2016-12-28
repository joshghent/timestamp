process.env.NODE_ENV = 'test';

const timestamp = require('./../timestamp.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server.js');
const should = chai.should();
const jsonMatch = require('chai-match-json');

chai.use(chaiHttp, jsonSchema);

describe('NL: Long date', () => {
  it('should return a json object', (done) => {
    chai.request(server)
        .get('/Wednesday 28 December 2016')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a('object');
          done();
        });
  });
});

/*
describe('Unix timestamp')
describe('ISO format')
describe('NL: Short date')
describe('NL: Day number, month and year')
describe('NL: Wrong day name will still return correct date')
describe('NL: Month and year will return the first')
*/