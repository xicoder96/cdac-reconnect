//Importing Chai Libraries
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../server');//Our parent block,the place where we export app of express @return serverobject

//describe('desc',()=>{}); Describe about what we want
//@first argument tells anything (like a description) about what operation you are performing
//@second argument is a callback function 
describe('Podcast', () => {
    describe('/GET media', () => {
        //it => tells us what should be tested in this method
        it('it should GET all the podcast', (done) => {
            chai.request(server)
                .get('/media')
                .end((err, res) => {
                    (res).should.have.status(200);//check status of api
                    (res.body).should.be.a('object');//Check body of response should be an object. 
                    (res.body.podcasts.length).should.be.eql(1);//Check the length of the “res.body.podcasts” should be 1.
                    done();//will be called when everything is ok. And the same description for other test case.
                });
        });
    });
    describe('/GET message', () => {
        it('it should GET a message', (done) => {
            chai.request(server)
                .get('/message')
                .end((err, res) => {
                    (res).should.have.status(200);
                    (res.body).should.be.a('object');
                    done();
                });
        });
    });
});
//Go to terminal and type `npm test` or `mocha`