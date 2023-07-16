import { useEffect } from 'react'

export default function Home() {
	useEffect(() => {
		window.location.href = '/expenses/1'
	}, [])
	return null
}
