const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=joRONI1z0O326px8pcA4Bqle6Uy8emS8&q=cats+the+musical&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips'

export default function GetGifs () {
  
 
 return fetch(apiUrl)
      .then(res => res.json())
      .then((response) => { 
      
        const {data} = response 
        const gifs = data.map(image => image.images.fixed_width.url)
        return gifs
        
      })
        }
 
      