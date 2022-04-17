import { useEffect, useState } from 'react';

const useServices = (path) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(path)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return [services, setServices];
};

export default useServices;
