import fetch from 'auth/FetchInterceptor'

const vehicleService = {}

vehicleService.addVehicleDetails = function (jsonbody){

    return fetch({
      url: '/vehicle/add-details',
      method: 'post',
      data: jsonbody
      
    })
  }

  vehicleService.updateVehicleDetails = function(data) {
    return fetch({
      url: '/vehicle/update-details',
      method: 'put',
      data: data
    })
  }

  vehicleService.readVehicleDetails = async function () {
    return await fetch({
      url: '/vehicle/details/read',
      method: 'get'
    })
  }

  vehicleService.vehicleId = function (){
  
    return fetch({
      url: `/vehicle/vehicleId`,
      method: 'get',
  
    })
  }

  vehicleService.deleteVehicleDelails = function (){
  
    return fetch({
      url: `/vehicle/delete-details`,
      method: 'delete',
  
    })
  }

export default vehicleService