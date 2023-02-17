import { RecoilRoot } from 'recoil';

import { AppViewContainer } from './components/AppView/AppViewContainer';

import './styles/Main.css';
import './styles/Font.css';

export default function App()
{
	return (
        <RecoilRoot>
			<AppViewContainer/>
        </RecoilRoot>
	);
}
