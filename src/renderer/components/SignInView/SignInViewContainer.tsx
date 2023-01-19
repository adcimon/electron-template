import { useRecoilState } from 'recoil';

import { AppState } from '../../AppState';
import { SignInView } from './SignInView';

export const SignInViewContainer = (_props = {}) =>
{
	const [appState, setAppState] = useRecoilState(AppState);

	return (
		<SignInView
			appState={appState}
			setAppState={setAppState}
		/>
	);
}