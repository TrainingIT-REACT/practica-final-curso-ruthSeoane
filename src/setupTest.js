import 'jest-enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//Configuramos enzyme
configure({ adapter: new Adapter() })