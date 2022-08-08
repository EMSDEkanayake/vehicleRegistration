import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { VEHICLE_PREFIX_PATH } from '../configs/AppConfig'

export const vehicleView = () => {
    return(
        <Suspense>
            
            <Route path={`${VEHICLE_PREFIX_PATH}/add-details`} component={lazy(() => import(`./add-vehicle`))} />
            
        </Suspense>
    )

}

export default React.memo(vehicleView);