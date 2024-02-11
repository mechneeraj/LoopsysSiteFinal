const posts = [
    {
        id: 1,
        title: 'Best App',
        href: '',
        description:
            'Best app for my Dairy and Product Management',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '' },
        author: {
            name: 'Suresh Patel',
            role: 'Dairy Owner',
            href: '',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 1,
        title: 'Easy to Use',
        href: '',
        description:
            'Excellent app for the Dairy owners and milk sellers and it is easy to use',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '' },
        author: {
            name: 'Vikas Patel',
            role: 'Milk Seller',
            href: '',
            imageUrl:
                'https://media.istockphoto.com/id/1083281494/vector/businessman-icon.jpg?s=612x612&w=0&k=20&c=XUYIYLSZ7X9uHP5w7uMU_8N_2xrgx0rCODJjubsJaW0=',
        },
    },
    {
        id: 1,
        title: 'Supportive Team ',
        href: '#',
        description:
            'Best app from the Loopsys technologies, I am using this app from 2022, A good service given by the team',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '' },
        author: {
            name: 'Shubham Choudhary',
            role: 'Dairy owner',
            href: '',
            imageUrl:
                'https://media.istockphoto.com/id/1083281494/vector/businessman-icon.jpg?s=612x612&w=0&k=20&c=XUYIYLSZ7X9uHP5w7uMU_8N_2xrgx0rCODJjubsJaW0=',
        },
    },
    // More posts...
]

export default function Customers() {
    return (
        <>
            <div className="bg-white py-24 sm:py-11">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto  lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-red-800 sm:text-4xl  text-center">From the Clients</h2>
                        <p className="mt-2 text-lg leading-8 text-black-950 text-center">
                        Hear directly from our clients about the value, excellence, and trust they have found in our services. Your success story could be next!
                        </p>
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t  pt-10 sm:mt-0 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                <div className="flex items-center gap-x-4 text-xs">
                                    {/* <time dateTime={post.datetime} className="text-gray-500">
                                        {post.date}
                                    </time> */}
                                    {/* <a
                                        href={post.category.href}
                                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                    >
                                        {post.category.title}
                                    </a> */}
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-black-950 group-hover:text-gray-600">
                                        <a href={post.href}>
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-black-950">{post.description}</p>
                                </div>
                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">
                                            <a href={post.author.href}>
                                                <span className="absolute inset-0" />
                                                {post.author.name}
                                            </a>
                                        </p>
                                        <p className="text-gray-600">{post.author.role}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

        </>

    );
}
