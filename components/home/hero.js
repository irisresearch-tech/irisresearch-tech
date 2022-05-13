import AnchorLink from 'react-anchor-link-smooth-scroll'

const img = {
  backgroundImage : 'url("images/home/bg.jpg")',


}



export default function Hero() {
  return (
<section className="bg-red-50 pb-8" id='hero'>
  <div className="container px-4 mx-auto">
    <div className="max-w-4xl mx-auto text-center pt-16 mb-24">
      <span className="text-lg font-bold text-gray-800 underline">Automate Your Crypto Trading</span>
      <h2 className="mb-8 mt-6 text-5xl lg:text-5xl text-gray-800 font-serif font-heading">Quantitative Crypto Trading Bots</h2>
      <p className='text-gray-500'>We have been a team of world-class traders and technologists in crypto since
2016. At Blackbox Research, we have built highly efficient and resilient bots
with ability to trade across all major exchanges and continuously work towards
improving it.</p>
    </div>

  </div>
  <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>

  </div>
</section>
)
      }


