import React from 'react';

interface ISideBarProps
{
}

export class SideBar extends React.Component<ISideBarProps>
{
	constructor( props: ISideBarProps )
	{
		super(props);
	}

	public render = () =>
	{
		return (
			<>
				<div
					className='flex h-screen bg-base-900'>
					<aside
						className='flex-shrink-0 w-64 overflow-y-auto bg-base-800 md:block'>
						<div
							className='text-base-400'>
							<div
								className='flex items-center justify-center h-16 text-lg font-bold text-base-200'>
								Side Bar
							</div>
							<ul>
								<li className='relative px-6 py-3 cursor-pointer'>
									<a
										className='inline-flex items-center w-full text-sm font-semibold hover:text-base-200 transition-colors duration-150'>
										<svg
											className='w-5 h-5'
											viewBox='0 0 24 24'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
											stroke-linejoin='round'
											fill='none'>
											<path d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'></path>
										</svg>
										<span
											className='ml-4'>
											Item
										</span>
									</a>
								</li>
							</ul>
						</div>
					</aside>
				</div>
			</>
		);
	}
}
