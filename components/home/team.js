

const infos = [
    {
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name:"Shikhar Paliwal",
      designation:"CEO",
      linkdin:"https://www.linkedin.com/in/shikharpaliwal/"
    },
    {
        image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        name:"Mohd Arif Siddique",
        designation:"CTO",
        linkdin:"https://www.linkedin.com/in/mohd-arif-siddiqui-9351ab109/"
      },

  ]


export default function About() {
    return (
        <><section>

        <div className="py-20 bg-red-50 radius-for-skewed" id="about">
          <div className="container mx-auto px-4">
              <div className="mb-16 max-w-xl mx-auto text-center">
                  <h2 className="text-4xl lg:text-5xl  font-serif font-heading">Team</h2>
              </div>
            <div className="flex flex-wrap  max-w-5xl mx-auto">
            {infos.map((info,index) => (
              <div key={index} className="mb-6 w-full lg:w-1/2 px-4">

                <div className="flex flex-wrap items-center bg-white rounded shadow overflow-hidden">
                  <img className="w-full lg:w-1/3 h-50 object-cover object-top" src={info.image} alt=""/>
                  <div className="w-full lg:w-2/3 lg:px-12 p-2 text-left">
                    <h4 className="my-2 text-xl font-heading">{info.name}</h4>
                    {/* <p className="mb-4 text-xl  text-gray-400 leading-loose">{info.designation}</p> */}
                      <a className="" target="_blank" href={info.linkdin}>
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