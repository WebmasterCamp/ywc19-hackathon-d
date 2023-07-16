import { type FC } from 'react'

import { useRouter } from 'next/router'
import { Layout } from '~/components/Layout/Layout'
import { type Blog, blogs } from '~/constants/blogs'

const calendarIcon = (
	<svg
		className="w-6 h-6 text-teal-500 dark:text-white"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 20 20"
	>
		<path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
	</svg>
)

const userIcon = (
	<svg
		className="w-6 h-6 text-teal-500 dark:text-white"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 14 18"
	>
		<path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
	</svg>
)

const clockIcon = (
	<svg
		className="w-6 h-6 text-teal-500 dark:text-white"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 20 20"
	>
		<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
	</svg>
)

interface BlogHeaderProps {
	blog: Blog
}

const BlogHeader: FC<BlogHeaderProps> = ({ blog }) => {
	return (
		<div className="flex flex-col gap-10">
			<div className="text-5xl font-semibold mb-2.5">{blog.title}</div>
			<div className="inline-flex gap-8">
				<div className="inline-flex gap-2.5 items-center">
					{calendarIcon}
					<div className="text-gray-900 text-xl font-medium leading-loose">
						{blog.createdAt.toLocaleDateString()}
					</div>
				</div>
				<div className="inline-flex gap-2.5  items-center">
					{userIcon}
					<div className="text-gray-900 text-xl font-medium leading-loose">{blog.author}</div>
				</div>
				<div className="inline-flex gap-2.5  items-center">
					{clockIcon}
					<div className="text-gray-900 text-xl font-medium leading-loose">{blog.readingTime}</div>
				</div>
			</div>
			{/* divider */}
			<div className="h-px border border-gray-400"></div>
		</div>
	)
}

const tagIcon = (
	<svg
		className="w-6 h-6 text-teal-500 dark:text-white"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 18 18"
	>
		<path d="M15.045.007 9.31 0a1.965 1.965 0 0 0-1.4.585L.58 7.979a2 2 0 0 0 0 2.805l6.573 6.631a1.956 1.956 0 0 0 1.4.585 1.965 1.965 0 0 0 1.4-.585l7.409-7.477A2 2 0 0 0 18 8.479v-5.5A2.972 2.972 0 0 0 15.045.007Zm-2.452 6.438a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
	</svg>
)

const BlogPage = () => {
	const router = useRouter()
	const { slug } = router.query
	const blog = blogs.find((blog) => {
		return blog.slug === slug
	})
	return (
		blog && (
			<Layout
				beforeContent={<img width={1440} height={585} src={blog.imageURL} alt="blog image" />}
				psize="large"
			>
				<div className="flex flex-col gap-12">
					<BlogHeader blog={blog} />
					<div className="flex flex-col gap-6 px-20">
						{blog.content.map((content, index) => (
							<p key={index} className="indent-16">
								{content}
							</p>
						))}
					</div>
					<div className="flex">
						<span className="mr-2.5">{tagIcon}</span>
						<span className="mr-4">แท็ก:</span>
						<div className="flex gap-2.5">
							{blog.tags.map((tag, index) => (
								<span key={index} className="text-teal-700">
									#{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			</Layout>
		)
	)
}

export default BlogPage
