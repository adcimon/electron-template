import { useRecoilState } from 'recoil';

import { AppState } from '../../AppState';
import { SignUpView } from './SignUpView';

export const SignUpViewContainer = (_props = {}) =>
{
	const [appState, setAppState] = useRecoilState(AppState);

	return (
		<SignUpView
			appState={appState}
			setAppState={setAppState}
		/>
	);
}
