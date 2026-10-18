// export default defineNuxtRouteMiddleware((to, from) => {
//   // if (to.params.id === '1') {
//   //   return abortNavigation()
//   // }
//   // // In a real app you would probably not redirect every route to `/`
//   // // however it is important to check `to.path` before redirecting or you
//   // // might get an infinite redirect loop
//   // if (to.path !== '/') {
//   //   return navigateTo('/')
//   // }
// })


export default defineNuxtRouteMiddleware((to) => {
  const { $config } = useNuxtApp()
  if ($config) {
    console.log('Accessed runtime config within middleware.')
  }
  console.log('Heading to', to.path, 'but I think we should go somewhere else...')
  return '/secret'
})
