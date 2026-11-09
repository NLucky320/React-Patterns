import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return <main>
    <section>
       <h2>Why work with us?</h2>
       <Accordion className='accordion'>
        <AccordionItem id='experience' className='accordion-item' title='We got 20 years of experience'>
          <article>
            <p>
              You can't go wrong with us.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sit adipisci facilis asperiores quidem debitis deserunt laboriosam cumque, libero dolore nobis, voluptates, error architecto nulla molestiae. Id voluptate minus neque!
            </p>
          </article>

        </AccordionItem>
        <AccordionItem id='local-guide' className='accordion-item' title='We are working local guides'>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur,
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi sit adipisci facilis asperiores quidem debitis deserunt laboriosam cumque, libero dolore nobis, voluptates, error architecto nulla molestiae. Id voluptate minus neque!
            </p>
          </article>

        </AccordionItem>

       </Accordion>

    </section>

  </main>
}

export default App;
