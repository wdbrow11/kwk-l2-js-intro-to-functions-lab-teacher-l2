const expect = chai.expect;

describe('index.js', function () {
  describe('getUKTime()', function () {
    it('returns a number representing the hour of the day in the UK', function () {
      const currentHour = new Date().getHours()
      expect(getUKTime()).to.be.a('number')
      expect(getUKTime()).to.be.at.least(currentHour + 5)
      expect(getUKTime()).to.be.at.most(currentHour + 8)
    });
  });


  describe('discountTicket()', function () {
    it('returns a value that is 80% of the original argument value', function () {
      expect(discountTicket(100)).to.be.a('number')
      expect(discountTicket(100)).to.equal(80)
      expect(discountTicket(160)).to.equal(128)
      expect(discountTicket(122130)).to.equal(97704)
    });
  });

  describe('tweetReply()', function () {
    it('returns a string phrase that includes a the passed in argument', function () {
      expect(tweetReply("Bruno Mars")).to.be.a('string')
      expect(tweetReply("Bruno Mars")).to.equal("Hey Bruno Mars, thanks so much for the support! I really appreciate it!")
      expect(tweetReply("Drake")).to.equal("Hey Drake, thanks so much for the support! I really appreciate it!")
      expect(tweetReply("Isaac Netwon")).to.equal("Hey Isaac Netwon, thanks so much for the support! I really appreciate it!")
    });
  });
});
