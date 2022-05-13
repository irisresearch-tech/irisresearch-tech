const data = [
  {
    id:"1",
    img:"/images/logo/binance.svg",
  },
  {
    id:"2",
    img:"/images/logo/FTX_logo.svg",
  },
  {
    id:"1",
    img:"/images/logo/Deribit_Company_Logo.svg",
  },
  {
    id:"2",
    img:"/images/logo/gateio.png",
  },
  {
    id:"1",
    img:"/images/logo/coinbase.svg",
  },
  {
    id:"2",
    img:"/images/logo/delta.svg",
  },
  {
    id:"1",
    img:"/images/logo/CoinDCX.svg",
  },
  {
    id:"2",
    img:"/images/logo/Bitbns.png",

  },
  {
    id:"1",
    img:"/images/logo/coinswitch-kuber.png",
  },
  {
    id:"2",
    img:"/images/logo/crypto-com.svg",
  },
  {
    id:"1",
    img:"/images/logo/Gemini.svg",
  },
  {
    id:"2",
    img:"/images/logo/bybit.svg",
  },
  {
    id:"1",
    img:"/images/logo/kraken.svg",
  },
  {
    id:"2",
    img:"/images/logo/huobi.svg",
  },
  {
    id:"2",
    img:"/images/logo/bitfinex.svg",
  },
  {
    id:"1",
    img:"/images/logo/bitstamp.svg",
  },
  {
    id:"2",
    img:"/images/logo/hitbtc-logo.svg",
  },
]

export default function Footer() {
    return (
<section className="py-20">
  <div className="container px-4 mx-auto">
    <div className="mb-16 max-w-xl mx-auto text-center">
      <h2 className="text-4xl lg:text-5xl  font-serif font-heading">Integrated Exchanges</h2>
    </div>
    <div className="flex flex-wrap max-w-7xl mx-auto">
    {data.map((datas,index) => (
      <div key={index} className="w-full md:w-1/3 lg:w-1/6 p-4">

        <div className="py-4 lg:py-8">
          <img className="h-6 mx-auto" src={datas.img} alt="Logos Of companies"/>
        </div>

      </div>
      ))}
    </div>
  </div>
</section>

        )
    }