import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  console.log('start')
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}
                         image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton onSelect={() => handleClick('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleClick('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleClick('State')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;