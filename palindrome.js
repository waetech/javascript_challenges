function palindrome(str) {
     let reg = /[\W]/g;

     let smallStr = str.toLowerCase().replace(reg, "");
     console.log(smallStr);

     let reversed = smallStr.split().reverse().join();
     if(reversed === smallStr) return true;

     return false;
}

palindrome("racecars");
