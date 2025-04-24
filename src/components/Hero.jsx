import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <main className="relative bg-[#f3eee7] min-h-[40vh]">
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center mt-[-350px]">
          <h1 className="text-4xl md:text-5xl font-light text-gray-800 mb-5  mt-80">
            Let's bring your<br />ideas to life
          </h1>
          <button className="bg-[#0073b1] text-white px-6 py-3 rounded hover:bg-[#005f8e] text-sm font-medium">
            Create app
          </button>
        </div>

        <img
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/marketing-solutions/images/xbu-developers-api/home-page/bg/p01-01-b-login-dsk-v04.jpg/jcr:content/renditions/p01-01-b-login-dsk-v04-2x.jpg"
          alt="Hero illustration"
          className="w-full h-[350px] mt-12"
        />
      </main>

      {/* Gap between sections */}
      <div className="w-full h-16 bg-white"></div>

      {/* Developer Product Section */}
      <section className="bg-[#f3f3f3] py-16">
        <h2 className="text-center text-3xl md:text-4xl font-light mb-12 text-gray-800">
        DevNetwork Developer Products
        </h2>

        <div className="max-w-6xl mx-auto bg-white shadow p-8 flex flex-col md:flex-row items-center rounded-lg gap-8">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-4">
            <p className="text-sm text-gray-700 font-semibold">
              Marketing | Mar 2025
            </p>
            <h3 className="text-xl md:text-2xl text-[#0073b1] font-semibold">
              Introducing Event Management API
            </h3>
            <p className="text-gray-700">
              Elevate your event strategy and streamline event creation and management on DevNetwork. Seamlessly create, update, and manage both on- and off-platform DevNetwork Events directly from your platform.
            </p>
            <div className="flex space-x-4 pt-2">
              <button className="bg-[#0073b1] text-white px-5 py-2 rounded text-sm hover:bg-[#005f8e]">
                Try it now
              </button>
              <button className="border border-[#0073b1] text-[#0073b1] px-5 py-2 rounded text-sm hover:bg-blue-50">
                View docs
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://content.linkedin.com/content/dam/developer/global/en_US/site/img/Event_API_GTM_Landing_Page_Banners.png.original.png"
              alt="Event Management API"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* Products Grid Section */}
<section className="bg-[#f3f3f3] py-16">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Consumer Card */}
      <div className="bg-white p-6 rounded shadow border-t-4 border-blue-500">
        <h3 className="text-[#0073b1] font-bold text-xl mb-2">Consumer</h3>
        <p className="text-gray-700 mb-4">
          Add Learning content and reporting to your app
        </p>
        <a href="#" className="text-[#0073b1] font-semibold text-sm hover:underline">
          View Docs
        </a>
      </div>

      {/* Marketing Card */}
      <div className="bg-white p-6 rounded shadow border-t-4 border-green-600">
        <h3 className="text-[#0073b1] font-bold text-xl mb-2">Marketing</h3>
        <p className="text-gray-700 mb-4">
          Offer DevNetwork functionality inside a website
        </p>
        <a href="#" className="text-[#0073b1] font-semibold text-sm hover:underline">
          View Docs
        </a>
      </div>

      {/* Sales Card */}
      <div className="bg-white p-6 rounded shadow border-t-4 border-yellow-400">
        <h3 className="text-[#0073b1] font-bold text-xl mb-2">Sales</h3>
        <p className="text-gray-700 mb-4">
          Find the right candidates with DevNetwork data
        </p>
        <a href="#" className="text-[#0073b1] font-semibold text-sm hover:underline">
          View Docs
        </a>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#f3f3f3] py-2">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Learning */}
      <div className="bg-white p-6 rounded shadow">
        <div className="border-t-2 border-[#0073b1] w-full mb-4"></div>
        <h3 className="text-[#0073b1] font-bold text-xl mb-2">Learning</h3>
        <p className="text-gray-700 mb-4">
          Add Learning content and reporting to your app
        </p>
        <a href="#" className="text-[#0073b1] font-semibold text-sm hover:underline">
          View Docs
        </a>
      </div>

      {/* Plugins */}
      <div className="bg-white p-6 rounded shadow">
        <div className="border-t-2 border-[#4b8b3b] w-full mb-4"></div>
        <h3 className="text-[#0073b1] font-bold text-xl mb-2">Plugins</h3>
        <p className="text-gray-700 mb-4">
          Offer DevNetwork functionality inside a website
        </p>
        <a href="#" className="text-[#0073b1] font-semibold text-sm hover:underline">
          View Docs
        </a>
      </div>

      {/* Talent */}
      <div className="bg-white p-6 rounded shadow">
        <div className="border-t-2 border-[#f4a300] w-full mb-4"></div>
        <h3 className="text-[#0073b1] font-bold text-xl mb-2">Talent</h3>
        <p className="text-gray-700 mb-4">
          Find the right candidates with DevNetwork data
        </p>
        <a href="#" className="text-[#0073b1] font-semibold text-sm hover:underline">
          View Docs
        </a>
      </div>
    </div>
    
  </div>
</section>
<section className="bg-[#f3f3f3] py-8">
  <div className="max-w-6xl mx-auto px-4 flex justify-left">
    <div className="bg-white w-[350px] h-[200px] p-6 rounded-md shadow-sm">
      <div className="border-t-2 border-[#0073b1] mb-4"></div>
      <h3 className="text-[#0073b1] font-bold text-xl mb-2">Regulatory Developer Products</h3>
      <p className="text-gray-700 text-base leading-snug mb-6">
        Add Learning content and reporting to your app
      </p>
      <a href="#" className="text-[#0073b1] font-semibold text-sm hover:underline">
        View Docs
      </a>
    </div>
  </div>
</section>

<div className="mt-2 flex justify-center bg-white h-30 ">
  <button className="text-blue-600 border border-blue-600 hover:bg-blue-50 font-semibold py-2 px-8 rounded bg-white mt-12 mb-8  ">
    View all Products
  </button>
</div>

<div className="bg-[#f3f8fc] py-16 px-1">
  <h2 className="text-center text-3xl font-light text-gray-800 mb-10">Developer News</h2>

  <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-7xl mx-auto">
    
    {/* Card 1 */}
    <div className="bg-white border border-gray-200 rounded-md overflow-hidden w-full md:w-1/3 shadow-sm">
      <img src="https://content.linkedin.com/content/dam/me/business/en-us/marketing-solutions/resources/images/banners/lsms/token-generator.jpg.original.jpg" alt="Card 1" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">Migrate To The New Community Management API</h3>
        <p className="text-sm text-gray-600 mb-4">
          Introducing a new Community Management API to accelerate the release of new features that will boost marketers efforts to know and grow their audiences.
        </p>
        <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Learn more</a>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white border border-gray-200 rounded-md overflow-hidden w-full md:w-1/3 shadow-sm">
      <img src="https://content.linkedin.com/content/dam/me/business/en-us/marketing-solutions/cx/2022/images/banner/versioning-and-content-blog-post-dev-news-banner.jpg.original.jpg" alt="Card 2" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">Introducing API versioning and New Content APIs</h3>
        <p className="text-sm text-gray-600 mb-4">
          We're making it easier to build with DevNetwork Marketing APIs by introducing API versioning and a set of new Content APIs.
        </p>
        <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Learn more</a>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white border border-gray-200 rounded-md overflow-hidden w-full md:w-1/3 shadow-sm">
      <img src="https://content.linkedin.com/content/dam/me/business/en-us/marketing-solutions/cx/2022/images/banner/under-the-hood-article-dev-news.jpg.original.jpg" alt="Card 3" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">Under the hood: How we built API Versioning at DevNetwork</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get a peek under the hood and learn how we built API versioning at DevNetwork.
        </p>
        <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Learn more</a>
      </div>
    </div>

  </div>
</div>

{/* View All Button Section */}
<div className="bg-[#eef3f8] py-8 text-center ">
  <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-sm hover:bg-blue-50 transition">
    View all
  </button>
</div>

{/* Footer Section */}
<footer className="bg-[#f3f2ef] text-sm text-gray-700 py-6 text-center ">
  <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4">
    <a href="#" className="hover:underline">About</a>
    <a href="#" className="hover:underline">Cookie Policy</a>
    <a href="#" className="hover:underline">Privacy Policy</a>
    <a href="#" className="hover:underline">Your California Privacy Choices</a>
    <a href="#" className="hover:underline">User Agreement</a>
    <a href="#" className="hover:underline">Accessibility</a>
  </div>
  <div className="mt-3">
  <div className="w-8 h-6 bg-[#0073b1] flex items-center justify-center rounded inline-block align-middle ml-1">
          <span className="text-white font-bold">dn</span>
        </div>
    <span className="ml-1">© DevNetwork Corporation 2025</span>
  </div>
</footer>


    </>
  );
};

export default Hero;
