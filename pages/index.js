import Head from 'next/head'
import styles from 'styles/Home.module.scss';
import Navbar from 'components/common/newnav';
import Hero from 'components/home/hero';
import Problem from 'components/home/service';
import Solution from 'components/home/solution';
import Logo from 'components/home/logo-cloud';
import About from 'components/home/team';

import Contact from 'components/home/contact-us';
import Footer from 'components/home/footer';


export default function Home() {
    return (
        <div>
            <Head>
                <title>BlackBox</title>
                {/* <link rel="icon" href="/images/home/logo-footer.svg" /> */}
            </Head>
            <div>
                <Navbar/>
                <Hero/>
                <Problem/>
                <Solution/>
                <Logo/>
                <About/>
                
                <Contact/>
                <Footer/>
            </div>

        </div>

    )
}
