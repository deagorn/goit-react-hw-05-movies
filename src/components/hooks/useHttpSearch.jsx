import  { useEffect, useState } from 'react'

const useHttpSearch = (fn, query, page) => {
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (query) {
            fn(query, page)
                .then(data => {
                    if (page === 1) { setData([]) };
                    setData(prev => [...prev, ...data.results]);
                    setTotal(data.total_results)

                })
                .catch(err => console.log(err));
        }
    }, [fn, query, page]);

    return [data, setData, total, page];
}

export default useHttpSearch;