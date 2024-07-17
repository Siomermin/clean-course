(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';

    interface HtmlElementProps {
        id: string,
        type: HtmlType
    }

    class HtmlElement {
        public id: string;
        public type: HtmlType;

        constructor(
            { id, type } : HtmlElementProps
        ) {
            this.id = id;
            this.type = type;
        }
    }

    interface InputAttributesProps {
        value: string,
        placeholder: string
    }

    class InputAttributes {
        public value: string;
        public placeholder: string;

        constructor(
            {
                value, placeholder
            } : InputAttributesProps
        ) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {

        constructor() {
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    interface InputElementProps {
        id: string,
        type: HtmlType,
        value: string,
        placeholder: string
    }

    //? Idea para la nueva clase InputElement
    class InputElement {
        public htmlElement: HtmlElement;
        public inputAttributes: InputAttributes;
        public inputEvents: InputEvents;

        constructor( {
            id, type,
            value, placeholder
        } : InputElementProps ) {
           this.htmlElement = new HtmlElement({id, type});
           this.inputAttributes = new InputAttributes({value, placeholder});
           this.inputEvents = new InputEvents();
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }

    const nameField = new InputElement({
        id: 'Fernando',
        type: 'input',
        placeholder: 'Enter first name',
        value: 'txtName'
    }
    );

    console.log({ nameField });

})()