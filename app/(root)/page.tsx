import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';


const Home = () => {
	const loggedIn = { firstName: 'John', lastName: 'Kinyanjui', email: 'contact@gmail.com' };


    return (
        <section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome,"
						user={loggedIn?.firstName || 'Guest'}
						subtext="Access and manage your account and trasactions efficiently."
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={5500.95}
					/>
				</header>

				RECENT TRANSACTIONS
			</div>

			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{currentBalance: 5500.95}, {currentBalance: 500.50} ]}
			/>
		</section>
    )
}

export default Home
