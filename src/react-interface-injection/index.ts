export type InterfaceInjectors<Interfaces> = ((interfaces: Interfaces) => void)[];

const injectReactInterfaces = <Interfaces>(interfaces: Interfaces, interfaceInjectors: InterfaceInjectors<Interfaces>) => {
  interfaceInjectors.forEach((injector) => {
    injector(interfaces);
  });
};

export default injectReactInterfaces;
