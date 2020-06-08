import rewireReactHotLoader from 'react-app-rewire-hot-loader'

/* config-overrides.js */
export default function override(config, env) {
  if (env === 'development') {
    config.resolve.alias['react-dom'] = '@hot-loader/react-dom'
  }
  config = rewireReactHotLoader(config, env)

  return config
}
