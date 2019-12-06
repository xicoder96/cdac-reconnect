//Importing Chai Libraries
let chai = require('chai');
let chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);
let server = require('../server2');//Our parent block,the place where we export app of express @return serverobject

describe('Podcast for server2', () => {
    describe('/GET media', () => {
        //it => tells us what should be tested in this method
        it('it should GET all the podcast from server 2', (done) => {
            chai.request(server)
                .get('/media')
                .end((err, res) => {
                    console.log(res.body);
                    (res).should.have.status(200);//check status of api
                    (res.body).should.be.a('object');//Check body of response should be an object. 
                    (res.body.status).should.be.eql(true);
                    (res.body.message).should.be.eql("fetch details success fully");
                    (res.body.data.podcasts.length).should.be.eql(1);
                    done();
                });
        });
    });
});
