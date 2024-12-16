const DefaultRoutes = {
  default: '/',
  auth: '/join',
  logout: '/logout',
  account: '/account/:username',
  boards: '/boards',
  board: '/board/:id',
  error: '/error/:code',
  success: '/success',
  invite: '/invite/:hash',
};

export default DefaultRoutes;
