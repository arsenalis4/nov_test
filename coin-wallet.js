const { default: axios } = require("axios");

// MetaMask 지갑 주소
const walletAddress = "0x1e798c576D9426b84744F99DCE2Dc4e9cdfd0EF3";

// etherscan.io API 키
const apiKey = "EJQAUXXAHBB9RWNCWFC5Y1M7IQKBQHWRCJ";

// API 요청 URL
const apiUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${apiKey}`;

// axios 함수로 API 요청 보내기
axios(apiUrl)
  .then(response => {
    // 응답 데이터에서 status와 result 값 가져오기
    const { status, result } = response.data;
    // status가 1이면 성공적인 요청
    if (status === "1") {
      // result 값은 wei 단위이므로 ether 단위로 변환하기 (1 ether = 10^18 wei)
      const balance = result / 10 ** 18;
      // 보유 암호화폐 양 출력하기
      console.log(`Your balance is ${balance} ETH`);
    } else {
      // status가 1이 아니면 오류 메시지 출력하기
      console.error("API request failed");
    }
  })
  .catch(error => {
    // axios 함수에서 오류가 발생하면 오류 메시지 출력하기
    console.error(error);
  });
