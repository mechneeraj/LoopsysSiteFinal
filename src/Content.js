import { CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import HeroImage from './HeroImage';
import arrow from './ImageLogo/arrowIcon.png';
import cordova from './ImageLogo/cordova_logo.png';
import drupal from './ImageLogo/drupal.png';
import ecommerce from './ImageLogo/e-commerce.png';
import GraphQL from './ImageLogo/graph ql image.png';
import java from './ImageLogo/java.png';
import php from './ImageLogo/php.png';
import react from './ImageLogo/react.png';
import SpringBoot from './ImageLogo/spring boot.png';


const features = [
    {
        name: 'React JS',
        description:
            ' Elevate user experiences and streamline development with our expertise in harnessing the full potential of React for your web solutions.',
        icon: LockClosedIcon,
        imageUrl: react,


    },
    {
        name: 'PHP development',
        description:
            'Trust us to navigate the dynamic landscape of PHP, delivering tailored web applications that stand out in functionality and performance.',
        icon: LockClosedIcon,
        imageUrl: php,
    },
    {
        name: 'JAVA',
        description:
            'Join hands with us to navigate the vast possibilities of Java, ensuring robust and innovative outcomes for your digital ventures',
        icon: LockClosedIcon,
        imageUrl: java,
    },
    {
        name: 'E-Commerce Development',
        description:
            'Elevate your online business with our bespoke e-commerce solutions. From intuitive shopping experiences to secure transactions, trust us to shape your e-commerce site into a thriving digital marketplace.',
        icon: LockClosedIcon,
        imageUrl: ecommerce,
    },
    {
        name: 'Spring Boot',
        description:
            'Elevate your online business with our bespoke e-commerce solutions. From intuitive shopping experiences to secure transactions, trust us to shape your e-commerce site into a thriving digital marketplace.',
        icon: LockClosedIcon,
        imageUrl: SpringBoot,
    },
    {
        name: 'Graph QL',
        description:
            'Elevate your online business with our bespoke e-commerce solutions. From intuitive shopping experiences to secure transactions, trust us to shape your e-commerce site into a thriving digital marketplace.',
        icon: LockClosedIcon,
        imageUrl: GraphQL,
    },


    {
        name: 'Cordova',
        description:
            'Elevate your online business with our bespoke e-commerce solutions. From intuitive shopping experiences to secure transactions, trust us to shape your e-commerce site into a thriving digital marketplace.',
        icon: LockClosedIcon,
        imageUrl: cordova,
    },

    {
        name: 'Drupal',
        description:
            'Elevate your online business with our bespoke e-commerce solutions. From intuitive shopping experiences to secure transactions, trust us to shape your e-commerce site into a thriving digital marketplace.',
        icon: LockClosedIcon,
        imageUrl: drupal,
    },


    // {
    //     name: 'Simple queues',
    //     description:
    //         'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    //     icon: ArrowPathIcon,
    // },
    // {
    //     name: 'Advanced security',
    //     description:
    //         'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    //     icon: FingerPrintIcon,
    // },
]
const features2 = [
    {
        name: 'Streamlined Project Communication:',
        description:
            'Implement collaborative project management tools to enhance communication between development teams, clients',
        icon: CloudArrowUpIcon,
        imageUrl: arrow,
    },
    {
        name: 'Customized Solution For the Clients ',
        description:
            'Tailor web development services to meet the unique needs of each client.',
        icon: CloudArrowUpIcon,
        imageUrl: arrow,
    },
    {
        name: 'Transparent Development Processes',
        description:
            'Maintain transparent development workflows, allowing clients insight into each phase of the project.',
        icon: CloudArrowUpIcon,
        imageUrl: arrow,
    },
    {
        name: 'Personalized Development Roadmaps',
        description:
            'Provide clients with a clear, visual representation of the development process, enhancing transparency and expectation management.',
        icon: CloudArrowUpIcon,
        imageUrl:arrow,
    },
    {
        name: 'Post Launch Suupport',
        description:
            'Provide ongoing support and maintenance services post-launch to address any issues, implement updates, and ensure the website continues to perform optimally.',
        icon: CloudArrowUpIcon,
        imageUrl:arrow,
    },
]

export default function Content() {
    return (
        <>
          <HeroImage/> 
            <div className="bg-white py-24 sm:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                        <p className="mt-3 text-3xl font-bold tracking-tight text-red-800 sm:text-4xl">
                            Join hands with LOOPSYS
                        </p>
                        <p className="mt-4 text-lg leading-8 text-black-950">
                            We help you with the below technology, also provide a end-to-emd solution for you. Your Gateway to Innovative Web Development Solutions!
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-15 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid  max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-5">
                            {features.map((feat) => (
                                <div key={feat.name} className="relative pl-16">
                                    <dt className="text-base font-semibold leading-7 text-black-950">
                                        {/* <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <feat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div> */}
                                        <div className="absolute left-0 top-0 flex h-8 w-13 items-center justify-center rounded-lg"> <img src={feat.imageUrl} alt="" className="h-8 w-8 text-white" aria-hidden="true" />
                                    </div>
                                        {feat.name}
                                    </dt>
                                    {/* <dd className="mt-2 text-base leading-7 text-gray-600 ">{feat.description}</dd> */}
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <div className="overflow-hidden bg-white py-24 sm:py-11">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                                <p className="mt-2 text-3xl font-bold tracking-tight text-red-800 sm:text-4xl">Connectivity Redefined</p>
                                <p className="mt-6 text-lg leading-8 text-black-950">
                                Unlocking efficiency through transparent communication pathways.
                                Will be delivered to you with more Clarity.
                                </p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-black-950 lg:max-w-none">
                                    {features2.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-black-950">
                                                <img src ={feature.imageUrl} className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                                {feature.name}
                                            </dt>{' '}
                                            <p>
                                            <dd className="inline">{feature.description}</dd>
                                            </p>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            src="https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Product screenshot"
                            className=""
                            width={2432}
                            height={1400}
                        />
                    </div>
                </div>
            </div>
            {/* <div className=" flex justify-center m-12">
            <p className="mt-2 text-1font-bold tracking-tight text-red-800 ">Explore the ways our team can assist you in reaching your goals.</p>
            <svg className="animate-bounce w-6 h-6 text-red m-auto rotate-90" fill="none" strokeLinecap="round" stroke-linejoin="round" stroke-width="4" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                    </svg>
            </div> */}
            
        </>
    )
}



