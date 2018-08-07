// Write your code in this file!
function getUKTime(){
  let UKTime = new Date().getHours() + 5;
  return UKTime
}

function discountTicket(price){
  let discountPrice = price * 0.80;
  return discountPrice;
}

function tweetReply(fanName){
  let greeting = (`Hey ${fanName}, thanks so much for the support! I really appreciate it!`);
  return greeting;
}