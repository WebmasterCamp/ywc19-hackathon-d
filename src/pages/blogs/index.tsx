import { AiOutlineArrowRight } from 'react-icons/ai'

import { Button, Card } from 'flowbite-react'
import Link from 'next/link'
import { ExpenseLayout } from '~/components/Layout/ExpenseLayout'
import { Layout } from '~/components/Layout/Layout'
import { blogs } from '~/constants/blogs'

const BlogsListPage = () => {
	return (
		<Layout>
			<ExpenseLayout title="บทความ">
				<div className="flex flex-wrap gap-6">
					{blogs.map((blog) => (
						<Link href={`/blogs/${blog.slug}`} key={blog.slug}>
							<Card className="w-96">
								{/* <img src={blog.imageURL} alt="blog image" className="h-[136px]" /> */}
								<div className="text-gray-900 text-2xl font-bold leading-[30px]">{blog.title}</div>
								<Button>
									Read more
									<AiOutlineArrowRight className="ml-2" />
								</Button>
							</Card>
						</Link>
					))}
				</div>
			</ExpenseLayout>
		</Layout>
	)
}

export default BlogsListPage
