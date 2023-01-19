import { RecoilRoot } from 'recoil';

import { AppViewContainer } from './components/AppView/AppViewContainer';

import './styles/Font.css';
import './styles/Main.css';

export default function App()
{
	return (
        <RecoilRoot>
			<AppViewContainer/>
        </RecoilRoot>
	);
}
