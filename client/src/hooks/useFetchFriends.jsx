import { API_LINK } from "data";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFriends } from "state";

const useFetchFriends = (userId) => {
    const dispatch = useDispatch();
    const { friends } = useSelector((state) => state.user);
    const token = useSelector((state) => state.token);

    const getFriends = async () => {
        const response = await fetch(`${API_LINK}/users/${userId}/friends`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        dispatch(setFriends({ friends: data }));
    };

    useEffect(() => {
        getFriends();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return friends;
};

export default useFetchFriends;
