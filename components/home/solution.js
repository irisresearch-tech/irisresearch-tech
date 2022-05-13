
const data = [
  {
    id:"1",
    head:"Trust",
    text:"We look forward to building long-term relationships by offering exceptional service, expertise and trading capabilities",
    img:"images/home/hand-shake.svg"

  },
  {
    id:"2",
    head:"Security",
    text:"Protected by industry-leading security protocols",
    img:"images/home/security.svg"

  },
  {
    id:"3",
    head:"Privacy",
    text:"We stand for unwavering ethics and will never share your data",
    img:"images/home/privacy.svg"

  },
  {
    id:"4",
    head:"Non-custodial",
    text:"Bots operate through API integrations so funds stay in your accounts",
    img:"images/home/law.svg"

  },
]


export default function Footer() {
    return (
<section className="py-24">
  <div className="container px-4 mx-auto">
  <div className="mb-16 max-w-xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl  font-serif font-heading">Core values</h2>
      </div>
    <div className="flex flex-wrap max-w-7xl mx-auto">
    {data.map((datas,index) => (
      <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
        <div className="max-w-xs mx-auto text-center">
          <img className="block mx-auto mb-8 h-10 w-10" src={datas.img} alt="Core values images"/>
          <h5 className="text-xl font-heading mb-4 font-serif">{datas.head}</h5>
          <p className="leading-6 text-gray-400">{datas.text}</p>
        </div>
      </div>
      ))}
    </div>
  </div>
</section>

        )
    }