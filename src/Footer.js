import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Twitter from './ImageLogo/TwitterIcon.png';
import Facebook from './ImageLogo/facebookIcon.png';
import Instagram from './ImageLogo/instagramIcon.png';
import Linkedin from './ImageLogo/linkedinIcon.png';

export default function Footer() {
  let [isOpen, setIsOpen] = useState(false)
  let [isOpen1, setIsOpen1] = useState(false)
  let [isOpen2, setIsOpen2] = useState(false)

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
  function closeModal3() {
    setIsOpen2(false)
  }

  function openModal2() {
    setIsOpen2(true)
  }


  return (

    <footer className="bg-white lg:grid lg:grid-cols-5">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          alt="footerImg"
          className="hidden lg:block inset-0 h-full w-full object-cover"
        />
        <img
    src="https://images.pexels.com/photos/12984951/pexels-photo-12984951.jpeg?auto=compress&cs=tinysrgb&w=600"  alt="footerImgSmall"
    className="block lg:hidden absolute inset-0 h-full w-full object-cover"
  />
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs uppercase tracking-wide text-black-950"> Call us </span>

              <a href="" className="block text-2xl font-medium text-black-950 hover:opacity-75 sm:text-3xl">
                +91 7440-309192
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm text-black-950">
              <li>Monday to Saturday: 10am - 6pm</li>
              {/* <li>Weekend: 10am - 3pm</li> */}
            </ul>

            <ul className="mt-3 flex w-2/3">
              <li>
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  className="text-black-950 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <img className='w-2/4' src={Facebook}/>
                </a>
              </li>

              <li>
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  className="text-black-950 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <img className='w-2/4' src={Instagram}/>
                </a>
              </li>

              <li>
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  className="text-black-950 transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>

                  <img className='w-2/4'  src={Twitter}/>
                </a>
              </li>
              <li>
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  className="text-black-950 transition hover:opacity-75"
                >
                  <span className="sr-only">Linkedin</span>

                  <img className='w-2/4'  src={Linkedin}/>
                </a>
              </li>

              {/* <li>
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  className="text-black-950 transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li> */}

              {/* <li>
                <a
                  href=""
                  rel="noreferrer"
                  target="_blank"
                  className="text-black-950 transition hover:opacity-75"
                >
                  <span className="sr-only">Dribbble</span>

                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li> */}
            </ul>
          </div>

          <div className="grid grid-cols-1  sm:grid-cols-2">
            <div>
              <p className="font-medium text-red-800">Services</p>

              <ul className="mt-6 space-y-1 text-sm">
                <li>
                  <a href="" className="text-black-950 transition hover:text-red-800"> PHP </a>
                </li>

                <li>
                  <a href="" className="text-black-950 transition hover:text-red-800"> JAVA  </a>
                </li>

                <li>
                  <a href="" className="text-black-950 transition hover:text-red-800"> REACT </a>
                </li>

                <li>
                  <a href="" className="text-black-950 transition hover:text-red-800">   </a>
                </li>

                <li>
                  <a href="" className="text-black-950 transition hover:text-red-800"> Drupal  </a>
                </li>
                <li>
                  <a href="" className="text-black-950 transition hover:text-red-800"> Graph QL  </a>
                </li>
                <li>
                  <a href="" className="text-black-950 transition hover:text-red-800"> Spring Boot  </a>
                </li>
                <li>
                  <a href="" className="text-black-950 transition hover:text-red-800">  E-Commerce </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-red-800 ">Company</p>

              <ul className="mt-6 space-y-4 text-sm font-medium">
                <li>
                  <a className="text-blue-700 transition hover:opacity-75 cursor-pointer"> About </a>
                  {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}>
        
          Open dialog
        </button>
      </div> */}
                </li>

                <li>
                  <a className="text-blue-700 transition hover:opacity-75 cursor-pointer"> Meet the Team </a>
                </li>


                <Transition appear show={isOpen} as={Fragment}>
                  <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={closeModal}>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className=" bg-black/25" />
                    </Transition.Child>
                    <div>
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
                          <Dialog.Panel className="w-11/12 z-50 max-w transform  rounded-2xl bg-white p-6 text-left  shadow-xl transition-all">
                            <Dialog.Title
                              as="h2"
                              className="mt-3 text-lg font-medium leading-6 text-gray-900"
                            >
                              Terms and Conditions
                            </Dialog.Title>
                            <div className="mt-6 justify-center">
                              <p className="text-xs text-black ">
                                <p>
                                  <b>Use of Services:</b>
                                  Loopsys Technologies provides web development services subject to the following conditions. We reserve the right to modify, suspend, or discontinue any part of our services without prior notice.
                                </p><p>
                                <b>Intellectual Property:</b>
                                  All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Loopsys Technologies and is protected by copyright and other intellectual property laws.
                                </p><p>
                                <b>Client Responsibilities:</b>
                                  Clients engaging our web development services are responsible for providing accurate and timely information, including project requirements, feedback, and approvals. Delays caused by incomplete or inaccurate information may affect project timelines.
                                </p>
                                <p>
                                <b>Payment Terms:</b>
                                  Payment terms for web development services will be outlined in the project agreement. Failure to make timely payments may result in project delays or suspension of services.
                                </p><p>
                                <b>Confidentiality:</b>
                                  Loopsys Technologies agrees to keep confidential all proprietary information provided by the client. Similarly, clients are expected to keep any proprietary information related to Loopsys Technologies' processes, methodologies, and technologies confidential.
                                </p><p>
                                <b>Project Timelines:</b>
                                  Project timelines provided by Loopsys Technologies are estimates and may be subject to change based on project complexity, scope adjustments, or unforeseen circumstances. We will make reasonable efforts to keep clients informed of any changes to project timelines.
                                </p><p>
                                <b>Quality Assurance:</b>
                                  Loopsys Technologies is committed to delivering high-quality web development services. Clients are encouraged to thoroughly review and provide feedback during designated project phases. Any defects or issues identified will be addressed promptly.
                                </p><p>
                                <b>Third-Party Services:</b>
                                  Loopsys Technologies may use third-party services or tools during the web development process. Clients agree to comply with the terms and conditions of these third-party services.
                                </p><p>
                                <b>Limitation of Liability:</b>
                                  Loopsys Technologies shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our web development services.
                                </p><p>
                                <b>Governing Law:</b>
                                  These Terms and Conditions shall be governed by and construed in accordance with the laws of Loopsys Technologies. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Loopsys Technologies.
                                </p>
                                By using our website and services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. Loopsys Technologies reserves the right to update or modify these terms at any time without prior notice.
                              </p>
                            </div>

                            <div className="mt-4 justify-center flex">
                              <button
                                type="button"
                                className="inline-flex justify-end rounded-md border border-transparent bg-red-800 px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                              >
                                Got it.
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
                <Transition appear show={isOpen1} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModal2}>
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
                          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                              as="h2"
                              className="text-lg font-medium leading-6 text-gray-900"
                            >
                              CONTACT US
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-m text-black">
                                <p> Call or Whatsapp : +91 7440309192</p>
                                <p>Mail Us : contact@loopsystech.in</p>
                              </p>
                            </div>

                            <div className="mt-4 flex justify-center">
                              <button
                                type="button"
                                className="inline-flex me-0 rounded-md border border-transparent bg-red-800 px-4 py-1 text-sm font-medium text-white hover:bg-white hover:text-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal2}
                              >
                                Got it.
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>
                <Transition appear show={isOpen2} as={Fragment}>
                  <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                    <div className="fixed inset-0 overflow-auto">
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
                          <Dialog.Panel className="w-full max-w transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                              as="h2"
                              className="mt-2text-lg font-medium leading-6 text-gray-900"
                            >
                            </Dialog.Title>
                            <div className="mt-1 justify-center">
                              <p className="text-xs text-black ">
                                <h3><b>LOOPSYS TECHNOLOGY Privacy Policy</b>  </h3>

                                <p>This Privacy Policy describes how LOOPSYS TECHNOLOGY ("we", "us" or "our") collects, uses, and discloses your personal information when you use our website, mobile applications, or other online services (collectively, the "Services").</p>
<p></p>
                              <p> <b>Information We Collect</b></p>
                                <li>	Personal Information: This includes information that can be used to identify you, such as your name, email address, phone number, postal address, and IP address.</li>
                                <li>Usage Data: This includes information about how you use the Services, such as the pages you visit, the time you spend on each page, and the links you click.</li>
                                <li>Device Information: This includes information about the device you use to access the Services, such as the type of device, operating system, browser, and unique device identifiers.</li>

                                <p><b>How We Use Your Information</b></p>
                                <li>Provide, operate, and maintain the Services;</li>
                                <li>Improve the Services;</li>
                                <li>Personalize your experience;</li>
                                <li>Send you marketing and promotional communications;</li>
                                <li>Respond to your inquiries and requests;</li>
                                <li>Prevent fraud and protect our users.</li>
                                <li>Prevent fraud and protect our users.</li>

                                <p><b>Disclosure of Your Information</b></p>
                                <p>We may disclose your information to:</p>
                                <li>Service providers who help us provide the Services;</li>
                                <li>Law enforcement agencies or other government officials, as required by law;</li>
                                <li>Third parties with your consent.</li>

                               <p> <b>Cookies and Other Tracking Technologies</b></p>
                                We use cookies and other tracking technologies to collect and store information about how you use the Services. You can control your cookie preferences through your browser settings.
                                <p><b>Data Retention</b></p>
                                We will retain your information for as long as your account is active or as needed to provide you with the Services. We will also retain your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                                <p><b>Your Rights</b></p>
                                You have the right to access, update, or delete your personal information. You also have the right to opt out of receiving marketing and promotional communications from us.
                               <p> <b>Changes to This Privacy Policy</b></p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website.
                                <p>Contact Us</p>
                                If you have any questions about this Privacy Policy, please contact us at: 
                                <b>contact@loopsystech.in</b>

                              </p>
                            </div>

                            <div className="mt-4 justify-center flex">
                              <button
                                type="button"
                                className="inline-flex justify-end rounded-md border border-transparent bg-red-800 px-4 py-2 text-sm font-medium text-white hover:text-red-800 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal3}
                              >
                                Got it.
                              </button>
                            </div>
                          </Dialog.Panel>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition>

                <li>
                  <a className="text-blue-700 transition hover:opacity-75 cursor-pointer" onClick={openModal1}> Contact Us </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <a className="text-black-950 transition hover:text-red-800 cursor-pointer" onClick={openModal}> Terms and Condition </a>
              </li>

              <li>
                <a  className="text-black-950 transition cursor-pointer hover:text-red-800" onClick={openModal2}> Privacy Policy </a>
              </li>

              <li>
                <a  className="cursor-pointer text-black-950 transition hover:text-red-800"> Cookies </a>
              </li>
            </ul>

            <p className="mt-8 text-xs text-red-800 sm:mt-0">
              &copy; 2024.Loopsys Technologies All rights reserved.
            </p>
          </div>
        </div>

      </div>






    </footer>

  );
}