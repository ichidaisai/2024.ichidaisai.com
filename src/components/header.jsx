export const Header = () => {
    return(
        <>
        <header>
			<div class="header">
				<div class="header left">
			
				</div>
				<nav class="header-right">
					<ul class="nav-list">
						<a href="./home.html">
							<li>HOME</li>
						</a>
						<a href="./stage.html">
							<li>STAGE</li>
						</a>
						<a href="./map.html">
							<li>MAP</li>
						</a>
						<a href="./about.html">
							<li>ABOUT</li>
						</a>
						<a href="./access.html">
							<li>ACCESS</li>
						</a>
					</ul>

					<div class="inner">
						<ul>
							<a href="./home.html">
								<li>HOME</li>
							</a>
							<a href="./stage.html">
								<li>STAGE</li>
							</a>
							<a href="./map.html">
								<li>MAP</li>
							</a>
							<a href="./about.html">
								<li>ABOUT</li>
							</a>
							<a href="./access.html">
								<li>ACCESS</li>
							</a>
						</ul>
					</div>
				</nav>
				<div class="toggle-btn">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div id="mask"></div>
			</div>
		</header>
        </>
    )
}
