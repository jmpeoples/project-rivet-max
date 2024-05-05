import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import Hero from '@/components/Hero'
import Story from '@/components/Story'
import Features from '@/components/Features'
import Mechanics from '@/components/Mechanics'
import Footer from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import mixpanel from 'mixpanel-browser';

// Replace YOUR_TOKEN with your Project Token
mixpanel.init('0a55d25bf146ec68aee0b221ce8fb227', {debug: true}); 


// Track an event. It can be anything, but in this example, we're tracking a Signed Up event.
// Include a property about the signup, like the Signup Type
mixpanel.track('User Visit', {
  'Visit Type': 'common',
});


export default function Home({ }) {
  return (
    <>
     <ToastContainer />
     <Hero />     
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
