import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import IntroSection from './components/IntroSection'
import TabsSection from './components/TabsSection'
import HowToLearnSection from './components/HowToLearnSection'
import AboutSection from './components/AboutSection'
import ResoursesSection from './components/ResoursesSection'
import FeedbackSection from './components/FeedbackSection'
import EffectVideoSection from './components/EffectVideoSection'

export default function App() {
  const [tab, setTab] = useState('main')
  const [visible, setVisible] = useState(true)

  return (
    <>
      {visible && <Header />}
      <main>
        <TabsSection active={tab} onChange={(current) => setTab(current)} />
        {/*  onChange={(active) => setTab(active)} /> */}
        {tab === 'main' && (
          <>
            <IntroSection />
            <HowToLearnSection />
            <AboutSection />
            <ResoursesSection />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}

        {tab === 'effect' && <EffectVideoSection />}
      </main>
    </>
  )
}
