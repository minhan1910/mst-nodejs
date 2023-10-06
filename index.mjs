import axios from "axios";
// import FormData from "form-data";

async function fetchData() {
  const Url1 = 'https://masothue.com/Ajax/Token/';
  const Url2 = 'https://masothue.com/Ajax/Search/';

  try {
    // Gửi yêu cầu đến Url1
    const response1 = await axios.post(Url1, null, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
        'Content-Type': 'multipart/form-data; charset=UTF-8',
      },
    });

    const token = response1.data.token;    

    // Gửi yêu cầu đến Url2
    const sMST = '0316959709'; 

    const formData = new FormData();
    formData.append('q', sMST); 
    formData.append('type', 'auto');
    formData.append('token', token); 
    formData.append('force-search', 1);

    const response2 = await axios.post(Url2, formData, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
        'Content-Type': 'multipart/form-data',
      },
    });

    const res = response2.data;

    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
