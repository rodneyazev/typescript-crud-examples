
export function domInjector(selector: string) {
    return function(target: any, propertyKey: string){

        console.log(`Modificando prototype ${target.constructor.name}
            e adicionando getter para a propriedade ${propertyKey}`);

        let elemento: HTMLElement;

        const getter = function() {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(selector) ;
                console.log(`Buscando elemento do DOM com selector ${selector} para injetar em ${propertyKey}`);
                
            }
            return elemento;
        }

       /*  const getter = function() {
            const elemento = document.querySelector(selector);
            return elemento;
        }   */
        Object.defineProperty(target, propertyKey, { get: getter });
    }
}