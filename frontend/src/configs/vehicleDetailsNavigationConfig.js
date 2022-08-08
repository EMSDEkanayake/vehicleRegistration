import { 
    DashboardOutlined
  } from '@ant-design/icons';
  import { VEHICLE_PREFIX_PATH } from 'configs/AppConfig'

  const dashBoardNavTree = [{
    key: 'home',
    path: `${VEHICLE_PREFIX_PATH}/home`,
    title: 'home',
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: []
  }]

  const vehicleDetailsNavigationConfig = [
    ...dashBoardNavTree
  ]

  export default vehicleDetailsNavigationConfig;