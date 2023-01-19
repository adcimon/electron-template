import { atom } from 'recoil';

export enum ViewType
{
	SignIn,
	SignUp,
	RecoverPassword,
	Main
}

export type AppStateType =
{
	activeView: ViewType | undefined
};

export const AppState = atom<AppStateType>(
{
    key: 'AppState',
    default:
    {
		activeView: ViewType.SignIn
    }
});

export type SessionStateType =
{
};

export const SessionState = atom<SessionStateType>(
{
    key: 'SessionState',
    default:
    {
    }
});