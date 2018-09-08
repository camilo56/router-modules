import { MiModuloModule } from './mi-modulo.module';

describe('MiModuloModule', () => {
  let miModuloModule: MiModuloModule;

  beforeEach(() => {
    miModuloModule = new MiModuloModule();
  });

  it('should create an instance', () => {
    expect(miModuloModule).toBeTruthy();
  });
});
