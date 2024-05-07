String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  
  const Test = require('@codewars/test-compat');
  
  describe("Tests", () => {
    it("test", () => {
      var str = "How can mirrors be real if our eyes aren't real";
      Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
    });
  });