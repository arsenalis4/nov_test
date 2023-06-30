const { default: axios } = require("axios");

// metamask 지갑 주소
const walletAddress = "0x84f5ef0bb1f56dD40D88916662D5f4c27eDca60c";

// opensea api key
const apiKey = "c4c6bc6cf5e444ca8ef974d92db038b6";

// opensea api endpoint
const endpoint = `https://api.opensea.io/api/v1/assets?owner=${walletAddress}&order_direction=desc&offset=0&limit=20`;

// axios 함수로 GET 요청 보내기
axios(endpoint, {
  headers: {
    "X-API-KEY": apiKey,
  },
})
  .then((response) => {
    const data = response.data; // 응답을 json 형식으로 파싱하기
    data.assets.forEach((asset) => {
        // nft의 이름과 이미지 url 출력하기
        console.log(asset.name, asset.image_url);
    })
    })
  .catch((error) => {
    // 에러 처리하기
    console.error(error);
  });
