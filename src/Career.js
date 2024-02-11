const people = [
    {
        Role: 'Junior Developer',
        Subject: 'Applying for ',
        Requirement: 'ReactJS,PHP',
        imageUrl:
            'https://cdn.vectorstock.com/i/1000x1000/65/04/job-text-circled-icon-vector-7356504.webp',
        Experience: '06-12 Month Experience',

    },
    {
        Role: 'Customer Relationship Executive',
        Subject: 'Applying for ',
        Requirement: 'Must have knowledge of MS office(Excel, Presentation, Word)',
        imageUrl:
            'https://cdn.vectorstock.com/i/1000x1000/65/04/job-text-circled-icon-vector-7356504.webp',
        Experience: 'Fresher/Experienced',

    },

]

export default function Career() {
    return (
        <>
            <div className=" m-10  text-center">
                <h3 className="text-2xl  font-semibold leading-7 text-black">Why Choose Loopsys</h3>
                <p className="mt-1  text-m leading-6 text-black">Join a team that values open communication, team work  collaboration and mutual respect and be a part of  the company dedicated to delivering exceptional solutions.
                    We prioritize the continuous development of our team members, offering opportunities for learning and skill enhancement.
                    Check our current job openings and embark a journey of excellence with us.
                </p>

            </div>
            <div className="m-12">


                <div className="px-4 sm:px-8">
                    <h3 className="text-2xl text-center font-semibold leading-7 text-black">Job Openings</h3>
                    <p className="mt-1 max-w-2xl text-m  leading-6 text-black">Please Send details to "contact@loopsystech.in" as per below with the updated resume.</p>
                    <p className="mt-1 max-w-2xl text-m leading-6 text-black">Please mention the subject as per the below details</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-2 sm:px-0">
                            <dt className="text-m font-medium leading-6 text-black">Full name</dt>
                            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> </dd>
                        </div>
                        <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-m font-medium leading-6 text-black">Mobile Number </dt>
                            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> </dd>
                        </div>
                        <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-m font-medium leading-6 text-black">Email address</dt>
                            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> </dd>
                        </div>
                        <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-m font-medium leading-6 text-black">Experience</dt>
                            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> </dd>
                        </div>
                        <div className="px-4 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-m font-medium leading-6 text-black">Salary expectation (LPA)</dt>
                            <dd className="mt-1 text-m leading-6 text-gray-700 sm:col-span-2 sm:mt-0"> </dd>
                        </div>
                        {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900"></dt>
                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                            qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                            pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                        </dd>
                    </div> */}
                        {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                        <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                                            <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Download
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                            <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Download
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div> */}
                    </dl>
                </div>

                <h3 className=" text-center text-2xl font-semibold leading-7 text-black">Open Roles</h3>
                <ul role="list" className="divide-y divide-gray-100">
                    {people.map((person) => (
                        <li key={person.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-black" src={person.imageUrl} alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-m font-semibold leading- text-Black0">{person.Role}</p>
                                    <p className="mt-1 truncate text-sm leading-5 text-black"> SUBJECT : {person.Subject}{person.Role}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-m leading-6 text-Black">{person.Requirement}</p>
                                {person.Experience ? (
                                    <p className="mt-1 text-m leading-5 text-Black">
                                        {person.Experience}
                                    </p>
                                ) : (
                                    <div className="mt-1 flex items-center gap-x-1.5">
                                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                        <p className="text-xs leading-5 text-gray-500">  </p>
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </>)
}
