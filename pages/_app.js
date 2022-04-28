import '../styles/globals.css'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

//MUTING CONSOLE
// ignore in-browser next/js recoil warnings until its fixed.
// const mutedConsole = memorize((console) => ({
//   ...console,
//   warn: (...args) => args[0].includes('Duplicate atom key')
//     ? null
//     : console.warn(...args)
// }))
// global.console = mutedConsole(global.console);


export default MyApp
