import { useRecoilState } from 'recoil';

import { AppState } from '../../AppState';
import { RecoverPasswordView } from './RecoverPasswordView';

export const RecoverPasswordViewContainer = (_props = {}) =>
{
	const [appState, setAppState] = useRecoilState(AppState);

	return (
		<RecoverPasswordView
			appState={appState}
			setAppState={setAppState}
		/>
	);
}
