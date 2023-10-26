import { Disclosure } from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';


const FaqComponent = () => {
  return (
    <div className="w-full px-4 pt-6 pb-6 lg:pt-16">
      <div className="mx-auto w-full rounded-2xl  p-2">
        <Disclosure>
          {({ open }) => (
            <div className='border-b border-b-dark pt-9 lg:pt-20'>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2  text-left text-sm font-medium text-dark hover:bg-blue/[.50] pb-4 focus:outline-none">
                <span className='lg:text-2xl text-md'>Do I always have to sign in?</span>
                <BiChevronDown
                  className={`${
                    open ? 'rotate-180 transform transition-all duration-200' : ''
                  } h-5 w-5 text-dark`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-xl text-dark">You do, or you could just tick the “Remember Me” box which keeps you logged in like a week..
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className='border-b border-b-dark pt-9 lg:pt-20'>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2  text-left text-sm font-medium text-dark hover:bg-blue/[.50] pb-4 focus:outline-none">
                <span className='lg:text-2xl text-md'>Can I use my Yahoo/Outlook mail to sign up?</span>
                <BiChevronDown
                  className={`${
                    open ? 'rotate-180 transform transition-all duration-200' : ''
                  } h-5 w-5 text-dark`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-dark text-sm lg:text-xl">Yes, you can.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className='border-b border-b-dark pt-9 lg:pt-20'>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2  text-left text-sm font-medium text-dark hover:bg-blue/[.50] pb-4 focus:outline-none">
                <span className='lg:text-2xl text-md'>Do I have to create an account to use the platform?</span>
                <BiChevronDown
                  className={`${
                    open ? 'rotate-180 transform transition-all duration-200' : ''
                  } h-5 w-5 text-dark`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-xl text-dark">No, you do not. I advise you to do so, as this gives you access to other services the platform offers.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className='border-b border-b-dark pt-9 lg:pt-20'>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2  text-left text-sm font-medium text-dark hover:bg-blue/[.50] pb-4 focus:outline-none">
                <span className='lg:text-2xl text-md'>How do I get a new password, I have forgotten mine?</span>
                <BiChevronDown
                  className={`${
                    open ? 'rotate-180 transform transition-all duration-200' : ''
                  } h-5 w-5 text-dark`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-xl text-dark">Click on the “Forgot Password” button found on the Sign in page.
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <div className='border-b border-b-dark pt-9 lg:pt-20'>
              <Disclosure.Button className="flex w-full justify-between px-4 py-2  text-left text-sm font-medium text-dark hover:bg-blue/[.50] pb-4 focus:outline-none">
                <span className='lg:text-2xl text-md'>Does the Chatbot work like ChatGPT? Can I ask it anything or just security related questions?</span>
                <BiChevronDown
                  className={`${
                    open ? 'rotate-180 transform transition-all duration-200' : ''
                  } h-5 w-5 text-dark`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm lg:text-xl text-dark">
              For now no, you can only get safety tips and articles on that section..
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      </div>
    </div>
  )
}

export default FaqComponent;
