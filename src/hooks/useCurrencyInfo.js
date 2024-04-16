// import { useEffect, useState } from 'react'

// function UseCurrencyInfo(currency) {
//   const [data, setData] = useState({})

//   useEffect(() => {
//     fetch(
//       `https://v6.exchangerate-api.com/v6/2c0a7bcf27136f3361c409d9/latest/${currency}`,
//     )
//       .then((res) => {res.json()
//       })
//       .then((res) => {setData(res.conversion_rates)
//         console.log("rwsponse" , data)
//       })
//       .catch((error) => {
//         console.error('Error fetching currency info:', error);
//       });

      
//   }, [currency])
//   return data
// }


// export default UseCurrencyInfo

// import { useEffect, useState } from 'react';

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const response = await fetch(`https://v6.exchangerate-api.com/v6/2c0a7bcf27136f3361c409d9/latest/${currency}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch currency data');
//         }
        
//         const responseData = await response.json();
//         console.log('API Response:', responseData); // Log the API response

//         setData(responseData.conversion_rates);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching currency info:', error);
//         setError(error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [currency]);

//   return data;
// }

// export default useCurrencyInfo;


import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async() =>{
      try{
        const response = await fetch(`https://v6.exchangerate-api.com/v6/2c0a7bcf27136f3361c409d9/latest/${currency}`)
        if(!response.ok) {
          throw new Error('failed 404')
        }
        const responseData =await response.json();
        setData(responseData.conversion_rates);
      }
      catch(error){
        console.log('error')
      }
    }
    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo
