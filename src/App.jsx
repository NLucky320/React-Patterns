import Accordion from "./components/Accordion/Accordion";


function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordion className='accordion'>
        <Accordion.Item  className='accordion-item' >
          <Accordion.Title id='experience' className='accordion-item-title'>We got 20 years of experience</Accordion.Title>
          <Accordion.Content id='experience' className='accordion-item-content'>
            <article>
              <p>
                You can't go wrong with us.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sit adipisci facilis asperiores quidem debitis deserunt laboriosam cumque, libero dolore nobis, voluptates, error architecto nulla molestiae. Id voluptate minus neque!
              </p>
            </article>
          </Accordion.Content>

        </Accordion.Item>
        <Accordion.Item  className='accordion-item' >
          <Accordion.Title id='local-guide' className='accordion-item-title'>We are working local guides</Accordion.Title>
          <Accordion.Content id='local-guide' className='accordion-item-content'>
            <article>
              <p>
                Lorem ipsum dolor sit amet consectetur,
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sit adipisci facilis asperiores quidem debitis deserunt laboriosam cumque, libero dolore nobis, voluptates, error architecto nulla molestiae. Id voluptate minus neque!
              </p>
            </article>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </section>
  </main>
}

export default App;