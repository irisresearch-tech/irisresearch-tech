

const infos = [
    {
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name:"Shikhar Paliwal",
      designation:"CEO",
      linkdin:"https://www.linkedin.com/in/shikharpaliwal/"
    },
    {
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        name:"Mohd Arif Siddique",
        designation:"CTO",
        linkdin:"https://www.linkedin.com/in/mohd-arif-siddiqui-9351ab109/"
      },

  ]


export default function About() {
    return (
        <><section>

        <div class="py-20 bg-gray-50 radius-for-skewed" id="about">
          <div class="container mx-auto px-4">
          <div class="mb-16 max-w-xl mx-auto text-center">
        <span class="text-lg text-gray-800 underline">Team </span>
        <h2 class="text-4xl lg:text-5xl font-bold font-heading">Meet The Members</h2>
      </div>
            <div class="flex flex-wrap -mx-4">
            {infos.map((info) => (
              <div class="mb-6 w-full lg:w-1/2 px-4">
             
                <div class="flex flex-wrap items-center bg-white rounded shadow overflow-hidden">
                  <img class="w-full lg:w-1/3 h-80 object-cover object-top" src={info.image} alt=""/>
                  <div class="w-full lg:w-2/3 lg:px-12 p-2 text-left">
                    <h4 class=" my-2 text-3xl font-semibold font-heading">{info.name}</h4>
                    {/* <p class="mb-4 text-xl  text-gray-400 leading-loose">{info.designation}</p> */}
                      <a class="" href={info.linkdin}>
                      <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" width="30" height="30" alt="" />
                      </a>

                    
                  </div>
                </div>
                
              </div>
              ))}
            </div>
          </div>
        </div>

      </section></>
    );
}