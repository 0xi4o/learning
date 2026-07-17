import { Outlet } from 'react-router'

export default function Base() {
	return (
		<main className='mx-auto max-w-[1120px] px-8 pt-16 pb-20 min-[880px]:px-16 min-[880px]:pt-[88px] min-[880px]:pb-[120px]'>
			<Outlet />
		</main>
	)
}
