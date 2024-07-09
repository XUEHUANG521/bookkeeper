import NavBar from "./components/NavBar"
export default function Home() {
  return (
	<>
	<NavBar/>
	<div className="text-blue-500 w-100 h-100">
		<section className='flex flex-row h-screen items-center justify-center pl-4 pr-4'>
			<div className='text-blue-500 mx-4'>
				Horizontally and Vertically Centered Element
			</div>
			<div className='text-purple-500 mx-4'>
				Horizontally and Vertically Centered Element
			</div>
			<div className='text-green-500 mx-4'>
				Horizontally and Vertically Centered Element
			</div>
		</section>
	</div>
	
	</>
  )
}
