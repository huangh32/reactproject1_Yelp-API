const apiKey = 'JAFRxjafFRpWRVf_GUXp9ta2rvNQ1A7DQcQrlY8bkP6esmVz039zgnkF4a4sIyYBuMqJGiBzMmCEK8CQtK3cC_09eZGT9sDItOcm3xkoCZLzsue1yQewhOG1y430X3Yx';
const clientID = 'LMy47-H3yglgMmRUQVbnuA';
const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers:{
                Authorization:`Bearer ${apiKey}`
            }
        }).then( (response) => {
            return response.json();
        }).then( (jsonResponse) => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business) => 
                {
                    console.log(business);
                    return{
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city:business.location.city,
                        state: business.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
    
                });
            }
        })
    }
};



export default Yelp;