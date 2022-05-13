
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
<section class="py-24">
  <div class="container px-4 mx-auto">
  <div class="mb-16 max-w-xl mx-auto text-center">
        <span class="text-lg text-gray-800 underline">Beliefs </span>
        <h2 class="text-4xl lg:text-5xl font-bold font-heading">Core values</h2>
      </div>
    <div class="flex flex-wrap -mx-4 -mb-10">
    {data.map((datas) => (
      <div class="w-full md:w-1/2 lg:w-1/4 px-4 mb-10">
        <div class="max-w-xs mx-auto text-center">
          <img class="block mx-auto mb-8 h-10 w-10" src={datas.img} alt="Core values images"/>
          <h5 class="text-xl font-heading mb-4">{datas.head}</h5>
          <p class="leading-8 text-gray-400">{datas.text}</p>
        </div>
      </div>
      ))}
    </div>
  </div>
</section>

        )
    }