export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype ${target.constructor.name}
            e adicionando getter para a propriedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(selector);
                console.log(`Buscando elemento do DOM com selector ${selector} para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map