import { API_LINK } from "data";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFetchProfileById = (userId) => {
    const [user, setUser] = useState(null);

    const token = useSelector((state) => state.token);

    const getUser = async () => {
        const response = await fetch(`${API_LINK}/users/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        if (data && data._id) setUser(data);
    };

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return user;
};

export default useFetchProfileById;
