import { Container } from 'inversify';
import { makeProvideDecorator } from 'inversify-binding-decorators';
const container = new Container();

const provide = makeProvideDecorator(container);

export { container, provide };

