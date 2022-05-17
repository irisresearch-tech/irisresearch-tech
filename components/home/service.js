const data = [
  {
    id:"1",
    head:"Market Making",
    text:"Powerful tailor-made bots to help you deepen the liquidity with tight spreads",

  },
  {
    id:"2",
    head:"Arbitrage bots",
    text:"Automated hunting for Cross exchange and Market Arbitrages, trades execution,alerting and dashboard to track performances",

  },

]

export default function Footer() {
    return (
<section>

  <div className="py-20 bg-white" id="service">
    <div className="container mx-auto px-4">
      <div className="mb-16 max-w-xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-heading font-serif">What do we provide?</h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center  max-w-5xl mx-auto justify-around ">
      {data.map((datas,index) => (
        <div key={index} className="py-4 w-full sm:w-1/2 px-4">
          <div className="py-12 px-6 bg-white rounded shadow text-center">
            <h3 className="px-8 mb-4 text-2xl  font-serif font-heading">{datas.head}</h3>
            <p className="text-gray-900">{datas.text}</p>
          </div>
        </div>
        ))}


      </div>
    </div>
  </div>

</section>

        )
    }