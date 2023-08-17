import { useState } from 'react';
import Marketing from '@/components/about/Marketing';
import Reputation from '@/components/about/Reputation';
import Response from '@/components/about/Response';
import Transparent from '@/components/about/Transparent';
import Fade from 'react-reveal';

const AboutMenu = ({setTab, tabs, openTab}) => (
  <ul className='w-screen md:w-full'>
    <h2 className="text-xl md:text-2xl font-bold leading-tight text-gray-800 z-10 pb-2">
          A client-first approach to service and support
        </h2>
          {tabs.map((tab) => (
            <li key={`tab-nav-${tab.id}`}>
              <a href="#" onClick={(event) => setTab(event, tab.id)} className={`text-sm font-semibold text-gray-900 ${openTab === tab.id ? 'border-b-2 border-indigo-500' : 'border-transparent hover:border-gray-300'}`}>{tab.title}</a>
            </li>
          ))}
        </ul>
)

function About() {
  const [openTab, setOpenTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: 'Full-Service Marketing',
      content: (<div className="col-span-2"><Fade><Marketing /></Fade></div>)
    },
    {
      id: 1,
      title: 'Fast Response Times',
      content: (<div className="col-span-2"><Fade><Response /></Fade></div>)
    },
    {
      id: 2,
      title: 'Reputation and Performance',
      content: (<div className="col-span-2"><Fade><Reputation /></Fade></div>)
    },
    {
      id: 3,
      title: 'Transparent Process',
      content: (<div className="col-span-2"><Fade><Transparent /></Fade></div>)
    }
  ];

  const setTab = (event, id) => {
    event.preventDefault();
    setOpenTab(id);
  };

  return (
    <section id="about" className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        <div className="grid items-stretch gap-y-10 md:grid-cols-3 md:gap-x-20 relative">

          <AboutMenu setTab={setTab} tabs={tabs} openTab={openTab} />
        
          {tabs.map((tab) => {
            if (tab.id === openTab) return tab.content
          }
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
