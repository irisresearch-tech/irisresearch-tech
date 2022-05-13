import AnchorLink from 'react-anchor-link-smooth-scroll'


export default function Footer() {
    return (
<>
<section>

  <div class="bg-gray-800 ">
    <div class="max-w-md mx-auto text-center">
      <a class="inline-block mb-6 mx-auto text-3xl leading-none" href="/">
        <h2 className='pt-12 text-white'>BlackBox</h2>
      </a>
      <p class="mb-6 text-sm font-semibold text-gray-400">© 2021. All rights reserved.</p>
      <div class="flex space-x-2 lg:space-x-4 justify-center">
        <a href="#">
          <img src="atis-assets/social/facebook.svg" alt=""/>
        </a>
        <a href="#">
          <img src="atis-assets/social/twitter.svg" alt=""/>
        </a>
        <a href="#">
          <img src="atis-assets/social/instagram.svg" alt=""/>
        </a>
      </div>
    </div>
  </div>

</section>
</>
        )
    }