import { useRecoilState } from 'recoil';

import { AppState } from '../../AppState';
import { MainView } from './MainView';

export const MainViewContainer = (_props = {}) =>
{
	const [appState, setAppState] = useRecoilState(AppState);

	return (
		<MainView
			appState={appState}
			setAppState={setAppState}
		/>
	);
}
