import axios from 'axios';

const searchImages = async(term) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID YsD-KzcLjlkDOvrjX_nN8G-nHnIHJ64QsakKvdS9vk0",
      },
      params: {
        query: term,
      },
    });

    return res.data.results;
       
}

export default searchImages;