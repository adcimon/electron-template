import { useRecoilState } from 'recoil';

import { AppState, SessionState } from '../../AppState';
import { AppView } from './AppView';

export const AppViewContainer = (_props = {}) =>
{
	const [appState, setAppState] = useRecoilState(AppState);
	const [sessionState, setSessionState] = useRecoilState(SessionState);

	return (
		<AppView
			appState={appState}
			setAppState={setAppState}
			sessionState={sessionState}
			setSessionState={setSessionState}
		/>
	);
}