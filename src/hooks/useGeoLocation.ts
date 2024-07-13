// Make a hook called as useGeoLocation that helps us to track lat and long of user.

import { useEffect, useState } from "react";

type position = {
latitude : number | null
longitude : number | null
} 

function useGeoLocation() {
    const [position, setPosition] = useState<position>({
        latitude: null,
        longitude: null
    })

    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        setPosition({latitude : lat ,longitude : long});
    })
 
        return position;
    }


export default useGeoLocation;