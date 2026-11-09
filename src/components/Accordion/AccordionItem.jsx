import { UseAccordionContext } from "./Accordion"

export default function AccordionItem({id, title, children, className}) {
   const {openItemId, openItem, closeItem} = UseAccordionContext();

   const isOpen = openItemId === id;
   function handleClick() {
    if(isOpen) {
        closeItem()
    }
    else {
        openItem(id)
    }
   }


    return (
        <li className={className}>
            <h3 onClick={handleClick}>
                {title}
            </h3>
            <div className={isOpen ? 'accordion-item-content open' : 'accordion-item-content'}>
                {children}
            </div>
        </li>
    )
}