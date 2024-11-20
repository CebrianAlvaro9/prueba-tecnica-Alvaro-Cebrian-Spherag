import { setDate } from './setDate.js'
//function in order to dispatch the date event
export const dispatchDateEvent = (buttonId, element, x, y) => {
    let dateObject
    if (buttonId != 'datePicker') {
        dateObject = setDate(buttonId)
    } else {
        dateObject = {
            id: buttonId,
            x: new Date(x).getTime(),
            y: new Date(y).getTime(),
        }
    }

    element.setAttribute('date', JSON.stringify(dateObject))

    const dateChangeEvent = new CustomEvent('date-change', {
        detail: dateObject,
        bubbles: true,
        composed: true,
    })
    element.dispatchEvent(dateChangeEvent)
}
