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
    id:"3",
    img:"/images/logo/Deribit_Company_Logo.svg",
  },
  { 
    id:"4",
    img:"/images/logo/gateio.png",
  },
  { 
    id:"5",
    img:"/images/logo/coinbase.svg",
  },
  { 
    id:"6",
    img:"/images/logo/delta.svg",
  },
  { 
    id:"7",
    img:"/images/logo/CoinDCX.png",
  },
  { 
    id:"8",
    img:"/images/logo/Bitbns.png",
    
  },
  { 
    id:"9",
    img:"/images/logo/coinswitch-kuber.png",
  },
  { 
    id:"10",
    img:"/images/logo/crypto-com.png",
  },
  { 
    id:"11",
    img:"/images/logo/Gemini.svg",
  },
  { 
    id:"12",
    img:"/images/logo/bybit.png",
  },
  { 
    id:"13",
    img:"/images/logo/kraken.svg",
  },
  { 
    id:"14",
    img:"/images/logo/huobi.svg",
  },
  { 
    id:"15",
    img:"/images/logo/bitfinex.svg",
  },
  { 
    id:"16",
    img:"/images/logo/bitstamp.png",
  },
  { 
    id:"17",
    img:"/images/logo/hitbtc-logo.png",
  },
]

export default function Footer() {
    return (
<section className="py-20">
  <div className="container px-4 mx-auto">
    <h2 className="mb-10 text-center text-2xl text-gray-500">Trusted by brand all over the world</h2>
    <div className="flex flex-wrap -m-4">
    {data.map((datas) => (
      <div className="w-full md:w-1/3 lg:w-1/6 p-4">
      
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