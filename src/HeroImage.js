export default function HeroImage() {
    return (
        <header className="my-0">
            <div className="w-full bg-center bg-cover" style={{ backgroundImage: "url(https://images.pexels.com/photos/2098621/pexels-photo-2098621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2s)" }}>
                <div className="flex items-center justify-center w-full h-screen bg-gray-900 bg-opacity-50 py-12">
                    <div className="text-center">
                        <div className="container px-4 mx-auto">
                            <div className="max-w-4xl mx-auto text-center">
                                {/* <span className="text-gray-200 font-semibold uppercase tracking-widest">TEXT</span> */}
                                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                                    CARVING the FUTURE sense
                                    <p>
                                        with LOOPSYS</p></h2>
                                <p className="max-w-3xl mx-auto mb-10 text-lg text-zinc-50">
                                    In the symphony of progress, LOOPSYS intricately carves the future's melody, harmonizing innovation with foresight.
                                </p>

                                {/* <svg class="animate-bounce w-6 h-6"></svg> */}
                                {/* <a className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                    href=""></a> */}
                                <svg className="animate-bounce w-6 h-6 text-white m-auto" fill="none" strokeLinecap="round" stroke-linejoin="round" stroke-width="4" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}