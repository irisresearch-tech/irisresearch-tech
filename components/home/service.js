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

  <div class="py-20 bg-white" id="service">
    <div class="container mx-auto px-4">
      <div class="mb-16 max-w-xl mx-auto text-center">
        <span class="text-lg text-gray-800 underline">Services</span>
        <h2 class="text-4xl lg:text-5xl font-bold font-heading font-serif">What do we provide?</h2>
      </div>
      <div class="flex flex-wrap bg-red-50 items-center  justify-around ">
      {data.map((datas) => (
        <div class="mb-8 lg:mb-0 py-4 w-full lg:w-1/3 px-4">
          <div class="py-12 px-6 bg-white rounded shadow text-center">
            <h3 class="px-8 mb-4 text-2xl font-bold font-serif font-heading">{datas.head}</h3>
            <p class="text-gray-500">{datas.text}</p>
          </div>
        </div>
        ))}


      </div>
    </div>
  </div>

</section>

        )
    }