import { type AppType } from 'next/app'
import Head from 'next/head'
import '~/styles/globals.css'
import { api } from '~/utils/api'

const MyApp: AppType = ({ Component, pageProps }) => {
	return <>
		<Head>
			<title>Baby Future</title>
			<link rel="icon" type="image/x-icon" href="/favicon.svg" />
		</Head>
		<Component  {...pageProps} />
	</>
}

export default api.withTRPC(MyApp)
