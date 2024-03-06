import  { useEffect, useState } from 'react'

const useHttp = (fn, movieId) => {
const [data, setData] = useState(null);

    useEffect(() => {
        if (movieId) {
            fn(movieId)
                .then(data => setData(data))
                .catch(err => console.log(err));
        }
    }, [fn, movieId]);

    return [data, setData];
}

export default useHttp;