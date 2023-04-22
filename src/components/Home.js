import { Link } from 'react-router-dom';
import storeImg from '../assets/store.jpg';

function Home() {
  return (
    <>
      <HeroSection />
      <SubHeroSection />
    </>
  );
}

function HeroSection() {
  return (
    <div>
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none dark:text-white md:text-5xl xl:text-6xl">
            Bringing convenience to your doorstep
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Browse our vast selection of high-quality products from the comfort
            of your own home. With fast shipping and competitive prices, we make
            it easy for you to get everything you need and want.
          </p>
          <Link to="/store">
            <button className="mr-3 inline-flex items-center justify-center rounded-lg bg-red-500 px-5 py-3 text-center text-base font-medium text-white hover:bg-red-600 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
              Shop now
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
          <img src={storeImg} alt="mockup" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

function SubHeroSection() {
  return (
    <div className="mx-auto hidden max-w-screen-xl justify-between gap-20 border-y border-gray-100 py-8 dark:border-gray-800 sm:flex">
      <div className="text-left">
        <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
          The lowest price
        </h6>
        <p className="mt-2 text-gray-500">
          Our lowest price guarantee ensures that you'll always find the best
          deals on high-quality products{' '}
        </p>
      </div>
      <div className="text-left">
        <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
          The fastest on the market
        </h6>
        <p className="mt-2 text-gray-500">
          With lightning-fast delivery options, you can get your hands on your
          favorite products in no time.
        </p>
      </div>
      <div className="text-left">
        <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
          The most loved
        </h6>
        <p className="mt-2 text-gray-500">
          Join the thousands of happy customers who have fallen in love with our
          products!
        </p>
      </div>
    </div>
  );
}

export default Home;
