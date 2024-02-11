import { Dialog, Transition } from '@headlessui/react';
import { PhotoIcon } from '@heroicons/react/24/solid';
import { Fragment, useState } from 'react';
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


export default function Career2() {
    let [isOpen, setIsOpen] = useState(false)
    let [isOpen1, setIsOpen1] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    function closeModal2() {
        setIsOpen1(false)
    }

    function openModal1() {
        setIsOpen1(true)
    }
    // const countries = [
    //   'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    //   'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
    //   'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia',
    //   'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic',
    //   'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia',
    //   'Fiji', 'Finland', 'France',
    //   'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana',
    //   'Haiti', 'Holy See', 'Honduras', 'Hungary',
    //   'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy',
    //   'Jamaica', 'Japan', 'Jordan',
    //   'Kazakhstan', 'Kenya', 'Kiribati', 'Korea', 'Kosovo', 'Kuwait', 'Kyrgyzstan',
    //   'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg',
    //   'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar',
    //   'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway',
    //   'Oman',
    //   'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
    //   'Qatar',
    //   'Romania', 'Russia', 'Rwanda',
    //   'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria',
    //   'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu',
    //   'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan',
    //   'Vanuatu', 'Venezuela', 'Vietnam',
    //   'Yemen',
    //   'Zambia', 'Zimbabwe'
    // ];
    const Role = [
        'PHP', 'ReactJS', 'Java', 'NodeJs', 'Customer Relationship Executive (CRE)'
    ];


    return (
        <div >
            <h1 className=" text-center m-2 font-bold tracking-tight text-red-800 sm:text-6xl">Career</h1>
            <div className=" m-10  text-center">
                <h3 className="text-2xl  font-semibold leading-7 text-black">Why Choose Loopsys</h3>
                <p className="mt-1  text-m leading-6 text-black">Join a team that values open communication, team work  collaboration and mutual respect and be a part of  the company dedicated to delivering exceptional solutions.
                    We prioritize the continuous development of our team members, offering opportunities for learning and skill enhancement.
                    Check our current job openings and embark a journey of excellence with us.
                </p>

            </div>
            <div className="m-12">


                {/* <div className="px-4 sm:px-8">
                    <h3 className="text-2xl text-center font-semibold leading-7 text-black">Job Openings</h3>
                    <p className="mt-1 max-w-2xl text-m  leading-6 text-black">Please Send details to "contact@loopsystech.in" as per below with the updated resume.</p>
                    <p className="mt-1 max-w-2xl text-m leading-6 text-black">Please mention the subject as per the below details</p>
                </div> */}
                <div className="mt-6 border-t border-gray-100">
                    {/* <dl className="divide-y divide-gray-100">
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
                        </div> */}
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
                    {/* </dl> */}
                </div>

                <h3 className=" text-center text-2xl font-semibold leading-7 text-black">Open Roles</h3>
                <ul role="list" className="divide-y divide-gray-100">
                    {people.map((person) => (
                        <li key={person.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <img className="h-12 w-12 flex-none rounded-full bg-black" src={person.imageUrl} alt="" />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-m font-semibold leading- text-Black0">{person.Role}</p>
                                    <p className="mt-1 truncate text-sm leading-5 text-black">  {person.Experience}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-m leading-6 text-Black">{person.Requirement}</p>
                                {person.Experience ? (
                                    <p className="mt-1 text-m leading-5 text-Black">
                                        <button onClick={openModal} className="bg-red-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                            Apply Now
                                        </button>
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



            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50 " onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-3/4 max-w transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h2"
                                        className="mt-6 text-lg font-medium leading-6 text-gray-900"
                                    >

                                    </Dialog.Title>
                                    <form type="submit">
                                        <div className="space-y-12 m-8 ">
                                            <div>
                                                <h2 className="text-base font-semibold leading-7 text-gray-900">  </h2>
                                                <p className="mt-1 text-m leading-6 text-gray-600">
                                                    Please submit the form to apply
                                                </p>

                                                <div >
                                                    <h2 className="text-base font-semibold leading-7 text-gray-900"> </h2>
                                                    {/* <p className="mt-1 text-m leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

                                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-1 sm:grid-cols-6">
                                                        <div className="sm:col-span-3">
                                                            <label htmlFor="first-name" className="block text-m font-medium leading-6 text-gray-900">
                                                                First name
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="first-name"
                                                                    id="first-name"
                                                                    autoComplete="given-name"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-3">
                                                            <label htmlFor="last-name" className="block text-m font-medium leading-6 text-gray-900">
                                                                Last name
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="last-name"
                                                                    id="last-name"
                                                                    autoComplete="family-name"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-2 sm:col-start-1">
                                                            <label htmlFor="Experience" className="block text-m font-medium leading-6 text-gray-900">
                                                                Experience
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="city"
                                                                    id="Experience"
                                                                    placeholder="In year"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-2">
                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="country" className="block text-m font-medium leading-6 text-gray-900">
                                                                    Role (Applying For)
                                                                </label>
                                                                <div className="mt-2">
                                                                    <select
                                                                        id="Roles"
                                                                        name="Role"
                                                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-m sm:leading-6"
                                                                    >
                                                                        {Role.map((Role, index) => (
                                                                            <option key={index}>{Role}</option>
                                                                        ))}
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sm:col-span-2">
                                                            <label htmlFor="salary" type="input" placeholder="Write the heading of the post" className="block text-m font-medium leading-6 text-gray-900">
                                                                Current Salary/ Expected Salary
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="Role"
                                                                    id="ApplyFor"
                                                                    placeholder="for ex 6LPA / 10 LPA"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>



                                                        <div className="sm:col-span-2 sm:col-start-1">
                                                            <label htmlFor="Email" className="block text-m font-medium leading-6 text-gray-900">
                                                                Email
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="Email"
                                                                    id="Email"

                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-2">
                                                            <label htmlFor="MobileNumber" className="block text-m font-medium leading-6 text-gray-900">
                                                                Mobile number
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="Number"
                                                                    // value="+91" min="91" max="91"
                                                                    name="MobleNumber"
                                                                    id="MobileNumber"
                                                                    Placeholder="+91"
                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="sm:col-span-2">
                                                            <label htmlFor="Address" className="block text-m font-medium leading-6 text-gray-900">
                                                                Address
                                                            </label>
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    name="Address"
                                                                    id="Address"

                                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                                                                />
                                                            </div>
                                                        </div>

                                                        {/* <div className="sm:col-span-4">
                            <label htmlFor="email" className="block text-m font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                                />
                            </div>
                        </div> */}

                                                        {/* <div className="sm:col-span-3">
                            <label htmlFor="country" className="block text-m font-medium leading-6 text-gray-900">
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-m sm:leading-6"
                                >
                                    {/* {countries.map((country, index) => (
        <option key={index}>{country}</option>
      ))} 
                                </select>
                            </div>
                        </div> */}

                                                        {/* <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-m font-medium leading-6 text-gray-900">
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="street-address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                                />
                            </div>
                        </div> */}


                                                    </div>
                                                </div>

                                                <div >
                                                    {/* <div className="sm:col-span-4">
                            <label htmlFor="username" className="block text-m font-medium leading-6 text-gray-900">
                                name
                            </label>
                            <div className="mt-2">
                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-m">workcation.com/</span>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-m sm:leading-6"
                                        placeholder="janesmith"
                                    />
                                </div>
                            </div>
                        </div> */}

                                                    <div className="col-span-full">
                                                        <label htmlFor="about" className="block text-m font-medium leading-6 text-gray-900">
                                                            About
                                                        </label>
                                                        <div className="mt-2">
                                                            <textarea
                                                                placeholder="Write a few sentences about yourself"
                                                                id="about"
                                                                name="about"
                                                                rows={5}
                                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-m sm:leading-6"
                                                                defaultValue={''}
                                                            />
                                                        </div>

                                                    </div>

                                                    {/* <div className="col-span-full">
                            <label htmlFor="photo" className="block text-m font-medium leading-6 text-gray-900">
                                Photo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                <button
                                    type="button"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-m font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                    Change
                                </button>
                            </div>
                        </div> */}

                                                    <div className="col-span-full">
                                                        <label htmlFor="cover-photo" className="block text-m font-medium leading-6 text-gray-900">
                                                            Updated Resume
                                                        </label>
                                                        <div className="mt-2 h-1/2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                            <div className="text-center">
                                                                <PhotoIcon className="mx-auto h-6 w-12 text-gray-300" aria-hidden="true" />
                                                                <div className="mt-4 flex text-m leading-6 text-gray-600">
                                                                    <label
                                                                        htmlFor="file-upload"
                                                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                                    >
                                                                        <span>Upload a resume</span>
                                                                        <input id="file-upload" name="file-upload" accept="application/pdf" type="file" className="sr-only" />
                                                                    </label>
                                                                    <p className="pl-1">or drag and drop</p>
                                                                </div>
                                                                <p className="text-xs leading-5 text-black">only pdf files are allowed</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div >
                                                <h2 className="text-base font-semibold leading-7 text-gray-900">  </h2>
                                                <p className="m-auto text-m leading-6 text-gray-600">
                                                    By submitting the form your are consent to our privacy policy.
                                                </p>

                                                {/* <div className="mt-10 space-y-10">
                        <fieldset>
                            <legend className="text-m font-semibold leading-6 text-gray-900">By Email</legend>
                            <div className="mt-6 space-y-6">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="comments"
                                            name="comments"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-m leading-6">
                                        <label htmlFor="comments" className="font-medium text-gray-900">
                                            Comments
                                        </label>
                                        <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="candidates"
                                            name="candidates"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-m leading-6">
                                        <label htmlFor="candidates" className="font-medium text-gray-900">
                                            Candidates
                                        </label>
                                        <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="offers"
                                            name="offers"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-m leading-6">
                                        <label htmlFor="offers" className="font-medium text-gray-900">
                                            Offers
                                        </label>
                                        <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className="text-m font-semibold leading-6 text-gray-900">Push Notifications</legend>
                            <p className="mt-1 text-m leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-everything"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="push-everything" className="block text-m font-medium leading-6 text-gray-900">
                                        Everything
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-email"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="push-email" className="block text-m font-medium leading-6 text-gray-900">
                                        Same as email
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-nothing"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label htmlFor="push-nothing" className="block text-m font-medium leading-6 text-gray-900">
                                        No push notifications
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div> */}
                                            </div>
                                        </div>

                                        <div className=" m-6 flex items-center justify-center gap-x-6">
                                            {/* <button type="button" className="text-m font-semibold leading-6 text-gray-900">
                    Cancel
                </button> */}
                                            <button
                                                type="submit"
                                                className="rounded-md bg-red-800 px-3 py-2 text-m font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>



        </div>
    )
}
